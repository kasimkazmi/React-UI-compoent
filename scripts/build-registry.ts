import fs from "fs";
import path from "path";
import { registry } from "../src/registry";

const REGISTRY_PATH = path.join(process.cwd(), "public/registry");

// Ensure the directory exists
if (!fs.existsSync(REGISTRY_PATH)) {
  fs.mkdirSync(REGISTRY_PATH, { recursive: true });
}

console.log("🚀 Building registry...");

registry.forEach((item) => {
  try {
    const filePath = path.join(process.cwd(), "src", item.files[0]);
    const content = fs.readFileSync(filePath, "utf8");
    
    const payload = {
      ...item,
      files: [
        {
          path: item.files[0],
          content,
        },
      ],
    };

    fs.writeFileSync(
      path.join(REGISTRY_PATH, `${item.name}.json`),
      JSON.stringify(payload, null, 2)
    );
    console.log(`✅ ${item.name}.json generated`);
  } catch (error) {
    console.error(`❌ Error processing ${item.name}:`, error);
  }
});

console.log("✨ Registry build complete!");
