import { toBoolean } from '@directus/utils';
import {} from 'knex';
export const getUserCount = async (db) => {
    const counts = {
        admin: 0,
        app: 0,
        api: 0,
    };
    const result = (await db
        .count('directus_users.id', { as: 'count' })
        .select('directus_roles.admin_access', 'directus_roles.app_access')
        .from('directus_users')
        .leftJoin('directus_roles', 'directus_users.role', '=', 'directus_roles.id')
        .groupBy('directus_roles.admin_access', 'directus_roles.app_access'));
    for (const record of result) {
        const adminAccess = toBoolean(record.admin_access);
        const appAccess = toBoolean(record.app_access);
        const count = Number(record.count);
        if (adminAccess) {
            counts.admin = count;
        }
        else if (appAccess) {
            counts.app = count;
        }
        else {
            counts.api = count;
        }
    }
    return counts;
};
