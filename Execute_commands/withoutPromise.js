import { exec } from "child_process";

exec("ls", (err, stdout) => {
  console.log(stdout);
});

// This will be executed quickly
exec("ls wrongFolder", (err, stdout, stderr) => {
  console.log(stderr);
});
