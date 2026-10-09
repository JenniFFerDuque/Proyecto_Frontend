FROM node:22-bookworm-slim

WORKDIR /app

RUN apt-get update \
  && apt-get install -y --no-install-recommends ca-certificates curl procps unzip \
  && rm -rf /var/lib/apt/lists/*

RUN npm install --global npm@11.6.2

COPY package.json package-lock.json ./
COPY apps/web/package.json apps/web/package.json
COPY apps/pocketbase/package.json apps/pocketbase/package.json
RUN npm ci --include=dev

COPY . .

ARG VITE_POCKETBASE_URL
ENV VITE_POCKETBASE_URL=${VITE_POCKETBASE_URL}

RUN PB_VERSION="$(cat apps/pocketbase/.pocketbase-version)" \
  && case "$(dpkg --print-architecture)" in \
    amd64) PB_ARCH=amd64 ;; \
    arm64) PB_ARCH=arm64 ;; \
    *) echo "Unsupported PocketBase architecture: $(dpkg --print-architecture)" >&2; exit 1 ;; \
  esac \
  && curl --fail --location --silent --show-error \
    "https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${PB_ARCH}.zip" \
    --output /tmp/pocketbase.zip \
  && unzip -q /tmp/pocketbase.zip pocketbase -d apps/pocketbase \
  && chmod +x apps/pocketbase/pocketbase \
  && rm /tmp/pocketbase.zip \
  && npm run build --prefix apps/web

ENV NODE_ENV=production

EXPOSE 3000 8090

CMD ["npm", "run", "start:web"]
