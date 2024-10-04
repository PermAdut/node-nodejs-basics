import fsPromises, { constants } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const remove = async () => {
  // Write your code here
  // implement function that deletes file fileToRemove.txt
  // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
  const __filename = fileURLToPath(import.meta.url);
  const filePath = path.resolve(dirname(__filename), 'files', 'fileToRemove.txt');
 
  try {
    await fsPromises.access(filePath, constants.F_OK);
    await fsPromises.unlink(filePath);
  } catch (err) {
    throw new Error("FS operation failded");
  }
};

await remove();
