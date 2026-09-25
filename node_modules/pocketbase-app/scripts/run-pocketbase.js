#!/usr/bin/env node

import { spawnSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appDir = path.resolve(__dirname, '..');

const envFile = path.join(appDir, '.env');
if (existsSync(envFile)) {
  const fileContents = readFileSync(envFile, 'utf8');
  for (const line of fileContents.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;
    const key = trimmed.slice(0, separatorIndex).trim();
    const value = trimmed.slice(separatorIndex + 1).trim();
    if (key) {
      process.env[key] = value;
    }
  }
}

function isElfBinary(filePath) {
  try {
    const header = readFileSync(filePath, { encoding: null, end: 4 });
    return header.length >= 4 && header[0] === 0x7f && header[1] === 0x45 && header[2] === 0x4c && header[3] === 0x46;
  } catch {
    return false;
  }
}

function isWindowsExecutable(filePath) {
  try {
    const header = readFileSync(filePath, { encoding: null, end: 2 });
    return header.length >= 2 && header[0] === 0x4d && header[1] === 0x5a;
  } catch {
    return false;
  }
}

const candidates = process.platform === 'win32'
  ? [
      path.join(appDir, 'pocketbase.exe'),
      path.join(appDir, 'pocketbase.cmd'),
      path.join(appDir, 'pocketbase')
    ]
  : [
      path.join(appDir, 'pocketbase')
    ];

const binary = candidates.find((candidate) => {
  if (!existsSync(candidate)) {
    return false;
  }

  if (process.platform === 'win32') {
    return isWindowsExecutable(candidate) || path.extname(candidate).toLowerCase() === '.cmd' || path.extname(candidate).toLowerCase() === '.bat';
  }

  return !isElfBinary(candidate) || path.extname(candidate) === '';
});

if (!binary) {
  console.error('PocketBase binary not found for this OS.');
  console.error(`Expected one of: ${candidates.map((candidate) => path.basename(candidate)).join(', ')}`);
  console.error('The file in apps/pocketbase/ is a Linux binary, which cannot run on Windows. Download the Windows PocketBase binary and place it as apps/pocketbase/pocketbase.exe.');
  process.exit(1);
}

const args = process.argv.slice(2);
const result = spawnSync(binary, args, {
  cwd: appDir,
  stdio: 'inherit',
  env: process.env,
});

process.exit(result.status ?? 1);
