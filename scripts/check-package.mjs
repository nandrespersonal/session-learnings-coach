import { readFile, readdir } from "node:fs/promises";
import path from "node:path";

const root = path.resolve("marketplace", "agency-plugin-bundle");
const jsonFiles = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await walk(fullPath);
    } else if (entry.name.endsWith(".json")) {
      jsonFiles.push(fullPath);
    }
  }
}

await walk(root);

for (const file of jsonFiles) {
  JSON.parse(await readFile(file, "utf8"));
  console.log(`JSON OK: ${file}`);
}
