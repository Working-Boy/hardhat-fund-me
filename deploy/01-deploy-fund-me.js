/*
function deployFunc(hre) {
    console.log("FundMe deployed!");
}
module.exports.default = deployFunc;
*/ // THIS FUNCTION CAN BE WRITTEN AS module.exports = async (hre) => { console.log("FundMe deployed!"); }

const {
  networkConfig,
  developmentChains,
} = require("../helper-hardhat-config");
const { network } = require("hardhat");
const { verify } = require("../utils/verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  // const address = "0x694AA1769357215DE4FAC081bf1f309aDC325306"
  // const ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed;

  let ethUsdPriceFeedAddress;
  if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggregator");
    ethUsdPriceFeedAddress = ethUsdAggregator.address;
  } else {
    ethUsdPriceFeedAddress = networkConfig[chainId].ethUsdPriceFeed;
  }

  const fundMe = await deploy("FundMe", {
    from: deployer,
    args: [ethUsdPriceFeedAddress], // put the constructor arguments here
    log: true,
    waitConfirmations: network.config.blockConfirmations || 1,
  }); //

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await verify(fundMe.address, [ethUsdPriceFeedAddress]);
  }
  log("-----------------------------------------------------");
};

module.exports.tags = ["all", "fundme"]; // THIS IS FOR TESTING PURPOSES ONLY. IT WILL DEPLOY THE FUNDME TO ALL NETWORKS.
