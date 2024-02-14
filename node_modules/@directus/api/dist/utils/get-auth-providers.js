import { useEnv } from '@directus/env';
import { toArray } from '@directus/utils';
export function getAuthProviders() {
    const env = useEnv();
    return toArray(env['AUTH_PROVIDERS'])
        .filter((provider) => provider && env[`AUTH_${provider.toUpperCase()}_DRIVER`])
        .map((provider) => ({
        name: provider,
        label: env[`AUTH_${provider.toUpperCase()}_LABEL`],
        driver: env[`AUTH_${provider.toUpperCase()}_DRIVER`],
        icon: env[`AUTH_${provider.toUpperCase()}_ICON`],
    }));
}
