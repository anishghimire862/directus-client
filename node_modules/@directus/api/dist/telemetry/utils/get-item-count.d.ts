import { type Knex } from 'knex';
export interface CollectionCount {
    collection: string;
    count: number;
}
/**
 * Get the item count of the given collection in the given database
 * @param db Knex instance to count against
 * @param collection Table to count rows in
 * @returns Collection name and count
 */
export declare const countCollection: (db: Knex, collection: string) => Promise<CollectionCount>;
/**
 * Merge the given collection count in the object accumulator
 * Intended for use with .reduce()
 * @param acc Accumulator
 * @param value Current collection count object in array
 * @returns Updated accumulator
 */
export declare const mergeResults: (acc: Record<string, number>, value: CollectionCount) => Record<string, number>;
/**
 * Get an object of item counts for the given collections
 * @param db Database instance to get counts in
 * @param collections Array of table names to get count from
 */
export declare const getItemCount: <T extends readonly string[]>(db: Knex, collections: T) => Promise<Record<T[number], number>>;
