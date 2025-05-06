const networkConfig = {
  11155111: {
    name: "sepolia",
    ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
  },
  137: {
    name: "polygon",
    ethUsdPriceFeed: "0xdf0Fb4e4F928d2dCB76fE4EA915aA3d4D73C54E2",
  },
  31337: {
    name: "hardhat",
    ethUsdPriceFeed: "mock",
  },
  1337: {
    name: "localhost",
    ethUsdPriceFeed: "mock",
  },
};

const developmentChains = ["hardhat", "localhost"]; // FOR TESTING PURPOSES ONLY.
const DECIMALS = 8;
const INITIAL_ANSWER = 200000000000; // 2000.00000000

module.exports = {
  networkConfig,
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER, // FOR TESTING PURPOSES ONLY.
};
