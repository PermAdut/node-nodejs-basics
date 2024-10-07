import { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  // Write your code here
  // implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
  const __filename = fileURLToPath(import.meta.url);
  const filePath = path.resolve(
    dirname(__filename),
    "files",
    "fileToWrite.txt"
  );
  const writeStream = createWriteStream(filePath);
  process.stdin.on("readable", () => {
    let data;
    if ((data = process.stdin.read()) != 0) {
      writeStream.write(data.toString());
    } else {
      process.stdin.emit("close");
    }
  });
};

await write();
