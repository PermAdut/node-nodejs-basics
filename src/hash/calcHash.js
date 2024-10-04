import crypto from "node:crypto";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream } from "node:fs";
const calculateHash = async () => {
  // Write your code here
  // implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
  const fileName = fileURLToPath(import.meta.url);
  const filePath = path.resolve(
    dirname(fileName),
    "files",
    "fileToCalculateHashFor.txt"
  );
  const stream = createReadStream(filePath);
  const hash = crypto.createHash("sha256");
  stream.on("readable", () => {
    const data = stream.read();
    if(data){
        hash.update(data)
    } else {
        process.stdout.write(`${hash.digest('hex')} \n`)
    }
  });
};

await calculateHash();
