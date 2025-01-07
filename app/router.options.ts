import type { RouterOptions } from '@nuxt/schema';
import type { RouteRecordRaw } from 'vue-router';

const DOMAIN = import.meta.dev ? 'localhost' : 'my-company.com';
const routeRegex = new RegExp(`^\/tenant\/?`);
const isTenantRoute = (route: RouteRecordRaw) => route.path.match(routeRegex);

export default <RouterOptions>{
  routes: async (routes) => {
    const { hostname } = useRequestURL();
    const eventID = useEvent();

    const subdomain = hostname.replace(`.${DOMAIN}`, '');
    // eventID.value = await $fetch('/api/tenant', { query: { subdomain } });
    eventID.value = await getEventID(subdomain);

    return routes
      .filter(route => eventID.value ? isTenantRoute(route) : !isTenantRoute(route))
      .map(route => ({
        ...route,
        path: route.path.replace(routeRegex, '/'),
      }));
  },
}

/**
 * Can use a database or KV store, etc
 * @param subdomain 
 * @returns event ID
 */
async function getEventID(subdomain: string) {
  const ids = {
    'event-1': 'event_fq13f4gqg40gl',
    'event-2': 'event_q34gp29ungwdf',
    'event-3': 'event_6hnlo2i45g205',
  }
  return ids[subdomain as keyof typeof ids] ?? '';
}
