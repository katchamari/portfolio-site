import database from "../db.json";
import type { Database } from "../types/db";
type CollectionItemType<C extends keyof Database> = C extends "art"
  ? Database["art"][number]
  : C extends "code"
    ? Database["code"][number]
    : never;

export function fetchDatabase<CollectionName extends keyof Database>(
  collectionName: CollectionName,
  query: (item: Database[CollectionName][number]) => boolean = () => true,
) {
  try {
    if (!database) return { err: "Database does not exist" };
    const db: Database = database;
    const collection = db[collectionName].filter((item) => query(item));

    return { data: collection as CollectionItemType<CollectionName>[] };
  } catch (err) {
    return { err: err as Error };
  }
}
