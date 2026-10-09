import PocketBase from 'pocketbase';

const POCKETBASE_API_URL =
  import.meta.env.VITE_POCKETBASE_URL || '/hcgi/platform';

const pocketbaseClient = new PocketBase(POCKETBASE_API_URL);

export default pocketbaseClient;

export { pocketbaseClient, POCKETBASE_API_URL };
