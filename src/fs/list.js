import fsPromises from "node:fs/promises";

const list = async () => {
  // Write your code here
  //implement function that prints all array of filenames from files folder into console
  // (if files folder doesn't exists Error with message FS operation failed must be thrown)
  const path = "./src/fs/files";
  try {
    await fsPromises.opendir(path);
    const dir = await fsPromises.opendir(path);
    for await (const dirent of dir) {
      console.log(dirent.name);
    }
  } catch (err) {
    throw new Error("FS operation failed"); 
  }
};

await list();
