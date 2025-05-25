function iconTemplate(name, iconData) {
  return (
    `// THIS FILE IS AUTO GENERATED\n` +
    `import { GenIcon, IconBaseProps } from '../IconBase'\n` +
    `export function ${name} (props: IconBaseProps) {\n` +
    `   return GenIcon(${JSON.stringify(iconData)})(props);\n` +
    `}`
  );
}

function iconStorybookTemplate(name, iconData) {
  return (
    `// THIS FILE IS AUTO GENERATED\n` +
    `import React from 'react';\n` +
    `import { IconBaseProps } from '../src/IconBase';\n` +
    `import { ${name} } from '../src/icons';\n\n` +
    `export default {\n` +
    `  title: '${name}',\n` +
    `  component: ${name},\n` +
    `  argTypes:  {\n` +
    `    size: {\n` +
    `      name: "size",\n` +
    `      type: { name: "string | number", required: false },\n` +
    `      defaultValue: 24,\n` +
    `    }\n` +
    `  }\n` +
    `};\n\n` +
    `export const Icon = (args: IconBaseProps) => <${name} {...args} />;\n`
  );
}

module.exports = {
  iconTemplate,
  iconStorybookTemplate,
};
