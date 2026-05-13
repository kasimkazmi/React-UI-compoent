import fs from "fs";
import path from "path";
import { registry } from "@/registry";

export function getRegistryComponent(name: string) {
  const item = registry.find((c) => c.name === name);
  if (!item) return null;

  const filePath = path.join(process.cwd(), "src", item.files[0]);
  const content = fs.readFileSync(filePath, "utf8");

  return {
    ...item,
    content,
  };
}
