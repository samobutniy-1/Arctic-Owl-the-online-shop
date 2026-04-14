import { readdirSync } from "fs";

export default function handler(req, res) {
  try {
    const root = readdirSync("/var/task/ArcticOwl/api");
    res.json({ root });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
