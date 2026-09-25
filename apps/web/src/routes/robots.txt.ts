import type { Route } from './+types/robots.txt';
import { siteOrigin } from '@/lib/site-origin.server';

const UNPUBLISHED_HOST_SUFFIXES = [
	'.app-preview.com',
	'.app-preview.io',
];

function publishedRules(origin: string): string[] {
	return [
		'User-agent: *',
		'Allow: /',
		'',
		`Sitemap: ${origin}/sitemap.xml`,
	];
}

export function loader({ request }: Route.LoaderArgs) {
	const origin = siteOrigin(request);
	const { hostname } = new URL(origin);
	const isUnpublished = UNPUBLISHED_HOST_SUFFIXES.some(suffix => hostname.endsWith(suffix));
	const lines = isUnpublished
		? ['User-agent: *', 'Disallow: /']
		: publishedRules(origin);

	return new Response(`${lines.join('\n')}\n`, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600',
		},
	});
}
