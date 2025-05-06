const { run } = require("hardhat");

// FUNCTION TO VERIFY OUR TRANSACTION ON ETHERSCAN(USE THIS WHEN YOU ARE DEPLOYING TO mainnet).
async function verify(contractAddress, args) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
}

module.exports = {
  verify,
};
