import fsPromises from "node:fs/promises";
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const list = async () => {
  // Write your code here
  //implement function that prints all array of filenames from files folder into console
  // (if files folder doesn't exists Error with message FS operation failed must be thrown)
  const __filename = fileURLToPath(import.meta.url);
  const filePath = path.resolve(dirname(__filename), 'files');
  try {
    await fsPromises.opendir(filePath);
    const dir = await fsPromises.opendir(filePath);
    for await (const dirent of dir) {
      process.stdout.write(dirent.name + '\n');
    }
  } catch (err) {
    throw new Error("FS operation failed"); 
  }
};

await list();
