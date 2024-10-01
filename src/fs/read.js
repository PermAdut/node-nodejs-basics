import { constants } from "node:fs";
import fsPromises from "node:fs/promises"

const read = async () => {
    // Write your code here 
    // implement function that prints content of the fileToRead.txt into console 
    //(if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
    const path = "./src/fs/files/fileToRead.txt";
    try{
        await fsPromises.access(path, constants.F_OK);
        const content = await fsPromises.readFile(path);
        console.log(content.toString())
    } catch(err){
        throw new Error("FS operation failed");
    }
};

await read();