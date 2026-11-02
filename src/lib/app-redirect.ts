import type { APIRoute } from 'astro';
import { APP_URL } from './site';

/**
 * The app used to live on the apex. Old links, bookmarks and home-screen installs still hit these
 * paths, so send them to the same path and query on the app. 308 keeps the method and body.
 * (MCP clients should still be repointed: browsers and most clients drop Authorization on a cross-host redirect.)
 */
export const redirectToApp: APIRoute = ({ url }) =>
  new Response(null, { status: 308, headers: { Location: `${APP_URL}${url.pathname}${url.search}` } });
