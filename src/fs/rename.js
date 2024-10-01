import fsPromises from "node:fs/promises"

const rename = async () => {
    // Write your code here 
    // implement function that renames file wrongFilename.txt to properFilename with extension .md 
    // (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
    const path = "./src/fs/files/wrongFilename.txt";
    const exactPath = "./src/fs/files/properFilename.md";
    try{
        await fsPromises.access(path);
        await fsPromises.rename(path, exactPath)
    } catch(err){
        throw new Error("FS operation failed")
    }
};

await rename();