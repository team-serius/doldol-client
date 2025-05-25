const path = require("path");
const performance = require("perf_hooks").performance;
const taskAll = require("./task-all");

async function task(name, fn) {
  const start = performance.now();
  console.log(`================= ${name} =================`);
  await fn();
  const end = performance.now();
  console.log(`${name}: `, Math.floor(end - start) / 1000, "sec\n\n");
}

async function main() {
  try {
    const targetDir = path.resolve(__dirname, "../src");
    const rootDir = path.resolve(__dirname, "../");

    await task("initialize", async () => {
      await taskAll.dirInit({ targetDir });
    });

    await task("create icon files", async () => {
      await taskAll.writeIconModuleFile({ targetDir, rootDir });
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
}

main();
