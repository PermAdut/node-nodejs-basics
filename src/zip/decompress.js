import { dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "node:fs";
import zlib, { createUnzip } from "zlib";
import { pipeline } from "stream";

const decompress = async () => {
    // Write your code here 
    // implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    const fPath = __dirname + "/fileToCompress.txt";
    const path = __dirname + "/files/archive.gz";
    const readStream = createReadStream(path);
    const writeStream = createWriteStream(fPath);
    const unZip = createUnzip();
    pipeline(readStream, unZip, writeStream, (err) => {
        if(err){
            console.log(err);
        }
    })
};

await decompress();