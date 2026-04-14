/* eslint-disable no-undef */
import { readFileSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  const { resource, id, ...filters } = req.query;

  try {
    const db = JSON.parse(
      readFileSync(new URL("../server/db.json", import.meta.url), "utf-8"),
    );

    if (!db[resource]) {
      return res
        .status(404)
        .json({ error: `Resource "${resource}" not found` });
    }

    if (id) {
      const item = db[resource].find((x) => String(x.id) === String(id));
      return item
        ? res.json(item)
        : res.status(404).json({ error: "Not found" });
    }

    let data = db[resource];
    for (const [key, val] of Object.entries(filters)) {
      data = data.filter((x) => String(x[key]) === String(val));
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
