import fsPromises from "node:fs/promises"

const calculateHash = async () => {
    // Write your code here 
    // implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
    const toSHA256 = async (str) => {
        return str.toString()
    }
    const path = './src/hash/files/fileToCalculateHashFor.txt';
    const read = await fsPromises.open(path);
    const stream = await read.createReadStream();
    stream.on('data', async (data) => {
        console.log(await toSHA256(data))
    })
    

};

await calculateHash();