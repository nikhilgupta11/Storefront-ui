const fs = require("fs");
const createLogsWithTemplate = require("./create-gitlog")
  .createLogsWithTemplate;

const TEMPLATE = `# Version [[version]] [[date]]

## ๐ Features

[[features]]

## ๐ Bugs fixes

[[fixes]]

## ๐งน Chores

[[chores]]

## Others

[[others]]
`;

const newChangeLog = createLogsWithTemplate(TEMPLATE);
const currentChangelog = fs.readFileSync("./CHANGELOG.md", "utf-8");
// prepend the newChangelog to the current one
fs.writeFileSync("./CHANGELOG.md", `${newChangeLog}${currentChangelog}`);
