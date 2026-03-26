import tinify from "tinify";
import { readdir, stat, readFile, writeFile } from "fs/promises";
import { join, extname } from "path";

const ASSETS_DIR = "src/assets";
const CACHE_FILE = ".tinify-cache.json";
const SUPPORTED = new Set([".jpg", ".jpeg", ".png"]);

async function loadCache() {
  try {
    const data = await readFile(CACHE_FILE, "utf8");
    return new Set(JSON.parse(data));
  } catch {
    return new Set();
  }
}

async function saveCache(cache) {
  await writeFile(CACHE_FILE, JSON.stringify([...cache], null, 2));
}

async function getImageFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await getImageFiles(fullPath)));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

async function main() {
  if (!process.env.TINIFY_API_KEY) {
    console.error("Error: TINIFY_API_KEY is not set.");
    console.error("Add it to a .env.local file: TINIFY_API_KEY=your_key_here");
    console.error("Then run: TINIFY_API_KEY=$(grep TINIFY .env.local | cut -d= -f2) node scripts/compress-images.js");
    process.exit(1);
  }

  tinify.key = process.env.TINIFY_API_KEY;

  const cache = await loadCache();
  const allFiles = await getImageFiles(ASSETS_DIR);
  const toCompress = allFiles.filter((f) => !cache.has(f));

  if (toCompress.length === 0) {
    console.log("Nothing to compress — all images are up to date.");
    console.log(`(${allFiles.length} total images tracked)`);
    return;
  }

  console.log(`Compressing ${toCompress.length} image(s)...\n`);

  for (const file of toCompress) {
    try {
      const before = (await stat(file)).size;
      await tinify.fromFile(file).toFile(file);
      const after = (await stat(file)).size;
      const saving = Math.round((1 - after / before) * 100);
      console.log(`✓  ${file}  (${saving}% smaller)`);
      cache.add(file);
      await saveCache(cache);
    } catch (err) {
      console.error(`✗  ${file}  — ${err.message}`);
    }
  }

  console.log(`\nDone. Compressions used this month: ${tinify.compressionCount}`);
}

main();
