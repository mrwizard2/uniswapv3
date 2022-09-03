// https://docs.uniswap.org/protocol/reference/deployments
// https://docs.uniswap.org/sdk/guides/creating-a-trade

const { ethers } = require('ethers');

const {
  abi: QuoterABI,
} = require('@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json');

const provider = new ethers.providers.JsonRpcProvider(
  'https://eth-mainnet.g.alchemy.com/v2/oR2RI3ISaPeRDfEm4IB-f5ios943aPoy'
);

async function getPrice() {
  const quoterAddress = '0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6';

  const quoterContract = new ethers.Contract(
    quoterAddress,
    QuoterABI,
    provider
  );

  console.log(quoterContract);
}

getPrice();
