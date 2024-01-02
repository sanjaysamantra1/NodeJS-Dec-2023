const { readFileSync,writeFileSync } = require("fs");

const firstContent = readFileSync("./contents/file1.txt", "utf8");
const secondContent = readFileSync("./contents/file2.txt", "utf8");

writeFileSync("./contents/file3.txt", `${firstContent} & ${secondContent}`);
