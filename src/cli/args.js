const parseArgs = () => {
    // Write your code here 
    // implement function that parses command line arguments
    // (given in format --propName value --prop2Name value2, you don't need to validate it) 
    // and prints them to the console in the format propName is value, prop2Name is value2
    const args = process.argv.slice(2);
    const output = []
    for(let i = 0; i<args.length; i+=2){
        output.push(`${args[i].substring(2)} is ${args[i + 1]}`)
    }
    process.stdout.write(output.join(', ') + '\n');
};

parseArgs();