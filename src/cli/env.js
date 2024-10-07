
const parseEnv = () => {
    // Write your code here 
    // implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2
    const result = [];
    const env = process.env;
    for(const parEnv in env){
        if(parEnv.substring(0,4) == "RSS_")
            result.push(`${parEnv}=${env[parEnv]}`)
    }
    process.stdout.write(result.join("; ") + '\n');

};

parseEnv();