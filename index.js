// index.js

const Plurality = require('@plurality/sdk');

const plurality = new Plurality.Client({
    network: 'mainnet', // or 'testnet' depending on your use case
    apiKey: 'your-api-key-here'
});

console.log("Connected to Plurality network");

// index.js

async function main() {
    const contractAddress = 'contract-address';
    const contractABI = [/* your contract ABI here */];

    const contract = new plurality.Contract(contractAddress, contractABI);
    const result = await contract.call('methodName', [arg1, arg2]);

    console.log("Result from contract call:", result);
}

main().catch(console.error);

