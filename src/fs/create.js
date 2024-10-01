import { constants } from "node:fs";
import fsPromises from "node:fs/promises";
const create = async () => {
  // Write your code here
  // implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
  // (if file already exists Error with message FS operation failed must be thrown)
  const path = "./src/fs/files/fresh.txt";

  try {
    await fsPromises.access(path, constants.F_OK);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT")
      await fsPromises.writeFile(path, "I am fresh and young");
    else throw err;
  }
};

await create();
