import { createReadStream } from "fs";
import { dirname } from "path";
import { fileURLToPath } from "url";

const read = async () => {
  // Write your code here
  // implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
  const __filepath = fileURLToPath(import.meta.url);
  const pathToFile = dirname(__filepath) + "\\files\\fileToRead.txt";
  const readStream = createReadStream(pathToFile);
  readStream.on("readable", () => {
    let data;
    if ((data = readStream.read()) != null) {
      process.stdout.write(data + "\n");
    } else {
      process.stdout.emit("close");
    }
  });
};

await read();
