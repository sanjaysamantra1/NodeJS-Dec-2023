const cp = require("child_process");

for (let i = 1; i <= 4; i++) {
  const fileName = `test_${i}.js`;
  const childProcess = cp.spawn("node", [fileName]);

  childProcess.stdout.on("data", function (data) {
    console.log("stdout: " + data);
  });
  childProcess.stderr.on("data", function (errData) {
    console.log(fileName + 'Not Found');
  });
  childProcess.on("close", function (code) {
    console.log("Child Process Exited:: " + code);
  });
}
