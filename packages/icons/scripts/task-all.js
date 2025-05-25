const path = require("path");
const fs = require("fs").promises;
const rimraf = require("rimraf");
const camelcase = require("camelcase");
const { iconTemplate, iconStorybookTemplate } = require("./templates");
const { convertIconData } = require("./logics");
const svgo = require("svgo");
const glob = require("glob-promise");

const svgoOptions = {
  plugins: [
    "convertStyleToAttrs",
    "sortAttrs",
    "removeDimensions",
    {
      name: "removeViewBox",
      fn: () => {},
    },
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
    {
      name: "removeAttributesBySelector",
      params: {
        selector: "*:not(svg)",
        attributes: ["stroke"],
      },
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "data.*",
      },
    },
  ],
};

async function dirInit({ targetDir }) {
  const ignore = (err) => {
    if (err.code === "EEXIST") return;
    throw err;
  };

  // src 폴더 안에 icons 폴더 삭제
  rimraf.sync(targetDir + "/icons");
  // targetDir 폴더 안에 storybook 폴더 삭제
  rimraf.sync(path.resolve(targetDir, "../storybook"));

  // src 폴더 안에 icons 폴더 생성
  await fs.mkdir(targetDir + "/icons").catch(ignore);

  // targetDir 안에 storybook 폴더 생성
  await fs.mkdir(path.resolve(targetDir, "../storybook")).catch(ignore);

  // icons 폴더 안에 index.ts 파일 생성
  await fs
    .writeFile(
      targetDir + "/icons/index.ts",
      "// THIS FILE IS AUTO GENERATED\n",
      "utf-8"
    )
    .catch(ignore);
}

async function writeIconModuleFile({ targetDir, rootDir }) {
  const files = await glob(path.resolve(rootDir, "svgs/*.svg"));
  const iconDir = path.resolve(targetDir, "icons");

  const exists = new Set(); // for remove duplicate

  for (const file of files) {
    const svgStrRaw = await fs.readFile(file, "utf-8");

    const result = svgo.optimize(svgStrRaw, svgoOptions);
    const svgStr = result.data;

    const iconData = await convertIconData(svgStr);
    console.log(`iconData`, iconData);

    const rawName = path.basename(file, path.extname(file));
    console.log(`rawName`, rawName);

    const name = camelcase(rawName, { pascalCase: true });
    console.log(`name`, name);

    if (exists.has(name)) continue;
    exists.add(name);

    // {IconName}.tsx 파일 생성
    const fileText = iconTemplate(name, iconData);
    await fs.writeFile(path.resolve(iconDir, `${name}.tsx`), fileText, "utf-8");

    // {IconName}.stories.tsx 파일 생성
    const storybookText = iconStorybookTemplate(name, iconData);
    await fs.writeFile(
      path.resolve(targetDir, `../storybook`, `${name}.stories.tsx`),
      storybookText,
      "utf-8"
    );

    // src/icons/index.ts에 추가
    await fs.appendFile(
      path.resolve(iconDir, "index.ts"),
      `export { ${name} } from "./${name}";\n`
    );
  }
}

module.exports = {
  dirInit,
  writeIconModuleFile,
};
