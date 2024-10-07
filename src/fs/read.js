import { constants } from "node:fs";
import fsPromises from "node:fs/promises"
import path from "node:path";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const read = async () => {
    // Write your code here 
    // implement function that prints content of the fileToRead.txt into console 
    //(if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
    const __filename = fileURLToPath(import.meta.url);
    const filePath = path.resolve(dirname(__filename), 'files', 'fileToRead.txt');
    try{
        await fsPromises.access(filePath, constants.F_OK);
        const content = await fsPromises.readFile(filePath);
        process.stdout.write(content.toString() + '\n');
    } catch(err){
        throw new Error("FS operation failed");
    }
};

await read();