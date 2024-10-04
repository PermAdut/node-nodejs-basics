import fsPromises from "node:fs/promises"
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const rename = async () => {
    // Write your code here 
    // implement function that renames file wrongFilename.txt to properFilename with extension .md 
    // (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(dirname(__filename), 'files', 'wrongFilename.txt');
    const renamePath = path.resolve(dirname(__filename), 'files', 'properFilename.md');
    try{
        await fsPromises.access(filePath);
        await fsPromises.rename(filePath, renamePath);
    } catch(err){
        throw new Error("FS operation failed")
    }
};

await rename();