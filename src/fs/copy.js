import fsPromises from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const copy = async () => {
  // Write your code here
  //implement function that copies folder files files with all its content into folder files_copy at the same level
  //(if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
  const __filename = fileURLToPath(import.meta.url);
  const copyPath = path.resolve(dirname(__filename), "files");
  const filePath = path.resolve(dirname(__filename), "files_copy");
  try {
    await fsPromises.opendir(filePath);
    throw new Error("FS operation failed");
  } catch (err) {
    if (err.code === "ENOENT") {
      const dir = await fsPromises.opendir(copyPath);
      await fsPromises.mkdir(filePath);
      for await (const dirent of dir) {
        const fileStat = await fsPromises.stat(
          path.resolve(copyPath, dirent.name)
        );
        if (fileStat.isFile()) {
          await fsPromises.copyFile(
            path.resolve(copyPath, dirent.name),
            path.resolve(filePath, dirent.name)
          );
        } else {
          await fsPromises.cp(
            path.resolve(copyPath, dirent.name),
            path.resolve(filePath, dirent.name),
            { recursive: true }
          );
        }
      }
    } else {
      throw err;
    }
  }
};

await copy();
