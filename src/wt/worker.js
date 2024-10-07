import worker from "node:worker_threads"
// n should be received from main thread
const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    // This function sends result of nthFibonacci computations to main thread
    // worker.js - extend given function to work with data received from main thread and implement function which sends result of the computation to the main thread
    const n = process.argv[2];
    const res = {data:null, status:"error"};
    try{
        const fib = nthFibonacci(n);
        res.data = fib;
        res.status = "resolved";
    } catch(e){
        res.data = null;
        res.status = "error";
    }
    finally{
        worker.parentPort.postMessage(res)
    }
};

sendResult();