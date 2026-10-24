import { cp, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "node_modules/@designcodeio/threeui/lib-dist/assets/landing-pages");
const destination = resolve(root, "public/landing-pages");
await mkdir(destination, { recursive: true });
await cp(resolve(source, "kage.html"), resolve(destination, "kage.html"));
await cp(resolve(source, "secret-pathways-assets"), resolve(destination, "secret-pathways-assets"), { recursive: true });
console.log("Prepared byte-exact ThreeUI Kage HTML and all referenced assets.");
