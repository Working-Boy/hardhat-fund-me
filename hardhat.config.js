require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const GANACHE_PRIVATE_KEY = process.env.GANACHE_PRIVATE_KEY || "0xkey";
const GANACHE_RPC_URL = process.env.GANACHE_RPC_URL || "https://rpc-url";

module.exports = {
  solidity: {
    compilers: [{ version: "0.8.28" }, { version: "0.6.6" }],
  },

  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
      chainId: 31337,
    },
    ganache: {
      url: GANACHE_RPC_URL,
      accounts: [GANACHE_PRIVATE_KEY],
      chainId: 1337,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },

  namedAccounts: {
    deployer: {
      default: 0,
    },
    user: {
      default: 1,
    },
  },
};
