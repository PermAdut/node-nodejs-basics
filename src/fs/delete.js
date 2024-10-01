import fsPromises, { constants } from "node:fs/promises";

const remove = async () => {
  // Write your code here
  // implement function that deletes file fileToRemove.txt
  // (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
  const path = "./src/fs/files/fileToRemove.txt";

  try {
    await fsPromises.access(path, constants.F_OK);
    await fsPromises.unlink(path);
  } catch (err) {
    throw new Error("FS operation failded");
  }
};

await remove();
