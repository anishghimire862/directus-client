import { type Knex } from 'knex';
export interface UserCount {
    admin: number;
    app: number;
    api: number;
}
export declare const getUserCount: (db: Knex) => Promise<UserCount>;
