import { dirname } from "path";
import { fileURLToPath } from "url";
import { createReadStream, createWriteStream } from "node:fs";
import zlib from "zlib";
import { pipeline } from "stream";

const compress = async () => {
  // Write your code here
  //implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const path = __dirname + "/files/fileToCompress.txt";
  const zPath = __dirname + "/files/archive.gz";
  const readStream = createReadStream(path);
  const writeStream = createWriteStream(zPath);
  const gZip = zlib.createGzip();
  pipeline(readStream, gZip, writeStream, (err) => {
    if(err){
        console.log(err);
    }
  })
};

await compress();
