import stream, { Transform } from "node:stream"
const transform = async () => {
    // Write your code here 
    // - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
    const reverseTansform = new Transform({
        transform(chunk, encoding,callback){
            const reverse = chunk.toString().split('').reverse().join('') + '\n';
            callback(null,reverse)
        }
    })    
    process.stdin.pipe(reverseTansform).pipe(process.stdout);
};

await transform();