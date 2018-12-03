
var ethers = require('ethers');

updateBlocks();


function updateBlocks() {
    let provider = ethers.getDefaultProvider();

    // TODO: Get the current gas price and pass the result to printGasPrice() function
    // // below from ether.js documentation
    provider.getGasPrice().then((gasPrice) => {
     // gasPrice is a BigNumber; convert it to a decimal string
        gasPriceString = gasPrice.toString();

        console.log("Current gas price: " + gasPriceString);
        });

    provider.getBlockNumber().then(
        (blockNumber) => {
        provider.getBlock(blockNumber).then(
        (block) => {  
        console.log("Current block number is: " + blockNumber);
            
        console.log("Current block hash is: " + block.hash);
        })})} 

        