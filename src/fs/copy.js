import { access } from "node:fs";
import fsPromises, { constants } from "node:fs/promises";

const copy = async () => {
  // Write your code here
  //implement function that copies folder files files with all its content into folder files_copy at the same level
  //(if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
  const path = "./src/fs/files_copy";
  const copyPath = "./src/fs/files";
  try {
    await fsPromises.opendir(path);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      const dir = await fsPromises.opendir(copyPath);
      await fsPromises.mkdir(path);
      for await (const dirent of dir) {
        await fsPromises.copyFile(
          copyPath + "/" + dirent.name,
          path + "/" + dirent.name
        );
      }
    } else {
        throw err;
    }
    
  }
};

await copy();
