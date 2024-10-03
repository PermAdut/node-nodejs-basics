import fsPromises from "node:fs/promises";

const calculateHash = async () => {
  // Write your code here
  // implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex using Streams API
  const toSHA256 = async (str) => {
    const h0 = 0x6a09e667;
    const h1 = 0xbb67ae85;
    const h2 = 0x3c6ef372;
    const h3 = 0xa54ff53a;
    const h4 = 0x510e527f;
    const h5 = 0x9b05688c;
    const h6 = 0x1f83d9ab;
    const h7 = 0x5be0cd19;
    const lenght = str.lenght;
    const fieldLen = 8;
    const bitStr = lenght * 8;
    const payload = lenght + fieldLen;
    const padding = 64 - (payload % 64);
    const block_count = Math.ceil(payload / 64);
    const blocks = new Array(block_count).fill(0).map(() => new Uint8Array(64));
    for (let i = 0; i < blockCount; i++) {
      const byte_block = blocks[i];
      for (let j = 0; j < 64; j++) {
        if (lenght == 0) {
          if (padding > 0) {
            byte_block[j] = 0x00;
            padding--;
          } else {
            byte_block[j] = (bitStr >> (8 * (fieldLen - 1))) & 0xff;
            fieldLen--;
          }
        } else {
          byte_block[j] = str.charCodeAt(j + i * 64);
          lenght--;
          if (lenght == 0) {
            j++;
            byte_block[j] = 0x80;
            padding--;
          }
        }
      }
    }
    return str.toString();
  };
  const path = "./src/hash/files/fileToCalculateHashFor.txt";
  const read = await fsPromises.open(path);
  const stream = await read.createReadStream();
  stream.on("data", async (data) => {
    process.stdout.write(toSHA256(data.toString() + "\n"));
  });
};

await calculateHash();
