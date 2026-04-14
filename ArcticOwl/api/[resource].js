import { readdirSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  try {
    const api = readdirSync(join(process.cwd(), "ArcticOwl/api"));
    res.json({ api });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
