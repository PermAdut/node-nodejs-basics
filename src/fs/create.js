import { constants } from "node:fs";
import fsPromises from "node:fs/promises";
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
const create = async () => {
  // Write your code here
  // implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
  // (if file already exists Error with message FS operation failed must be thrown)
  const __filename = fileURLToPath(import.meta.url);
  const filePath = path.resolve(dirname(__filename), 'files', 'fresh.txt');

  try {
    await fsPromises.access(filePath, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT")
      await fsPromises.writeFile(filePath, "I am fresh and young");
    else throw err;
  }
};

await create();
