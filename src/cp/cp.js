import cp from "node:child_process"
import path from "node:path"
import { fileURLToPath } from "node:url";

const spawnChildProcess = async (args) => {
    // Write your code here
    // cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js,
    // passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
    // child process stdin should receive input from master process stdin
    // child process stdout should send data to master process stdout
    const fileName = path.resolve(path.dirname(fileURLToPath(import.meta.url)),"files","script.js");
    const childProcess = cp.fork(fileName, args);
    childProcess.on('close', (code) => {
        console.log(`Child Proc terminated process with code ${code}`)
    })

    childProcess.on('error', (error) => {
        console.log(error)
    })
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["hello", 1, "goodbye", "p", "uber"]);
