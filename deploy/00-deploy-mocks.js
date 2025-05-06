const { network } = require("hardhat");
const {
  developmentChains,
  DECIMALS,
  INITIAL_ANSWER,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();

  if (developmentChains.includes(network.name)) {
    log("Local network detected! Deploying mocks...");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMALS, INITIAL_ANSWER], // 8 decimals and 2000.00000000
    });
    log("Mocks deployed!");
    log("----------------------------------------------------");
  }
};

module.exports.tags = ["all", "mocks"]; // THIS IS FOR TESTING PURPOSES ONLY. IT WILL DEPLOY THE MOCKS TO ALL NETWORKS.
