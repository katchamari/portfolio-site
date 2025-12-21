import database from "../../db.json";
import type { Database } from "../types/db";
export function fetchDatabase(collectionName: "art") {
  try {
    if (!database) return { err: "Database does not exist" };
    const db: Database = database;
    const collection = db[collectionName];

    return { data: collection };
  } catch (err) {
    return { err };
  }
}
