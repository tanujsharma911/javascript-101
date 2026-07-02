import { exec } from "child_process";

const execCommand = async (cmd) => {
  const promise = new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) reject(stderr || err.message);
      else resolve(stdout);
    });
  });

  return await promise;
};

try {
  const output = await execCommand("ls");

  // console.log(output);
} catch (err) {
  console.log("Command failed");
  console.log(err);
}

/*
--------------------------------
even better way to execute commands
--------------------------------
*/

import { promisify } from "util";

const executeCommand = promisify(exec);

const result = await executeCommand("ls");

console.log(result.stdout);
