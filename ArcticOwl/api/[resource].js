import { readdirSync } from "fs";
import { join } from "path";

export default function handler(req, res) {
  try {
    const arcticOwl = readdirSync(join(process.cwd(), "ArcticOwl"));
    res.json({ arcticOwl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
