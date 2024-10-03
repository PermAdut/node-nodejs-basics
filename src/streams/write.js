import { createWriteStream } from "fs";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const write = async () => {
  // Write your code here
  // implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
  const __filename = fileURLToPath(import.meta.url);
  const filePath = path.resolve(dirname(__filename), "files", "fileToWrite.txt");
  const writeStream = createWriteStream(filePath);
  process.stdin.once("data", (data) => {
    writeStream.write(data.toString());
  });
};

await write();
