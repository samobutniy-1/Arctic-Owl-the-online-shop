import db from "./db.json" assert { type: "json" };

export default function handler(req, res) {
  const { resource, id, ...filters } = req.query;

  if (!db[resource]) {
    return res.status(404).json({ error: `Resource "${resource}" not found` });
  }

  if (id) {
    const item = db[resource].find((x) => String(x.id) === String(id));
    return item ? res.json(item) : res.status(404).json({ error: "Not found" });
  }

  let data = db[resource];
  for (const [key, val] of Object.entries(filters)) {
    data = data.filter((x) => String(x[key]) === String(val));
  }

  res.json(data);
}
