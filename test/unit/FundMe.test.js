const { deployments, ethers, getNamedAccounts } = require("hardhat");
const { assert, expect } = require("chai");
const { developmentChains } = require("../../helper-hardhat-config"); // Import the developmentChains array

!developmentChains.includes(network.name) 
    ? describe.skip :
    describe("FundMe", function () {
    let fundMe, deployer, mockV3Aggregator;
    let sendValue;

    beforeEach(async function () {
        deployer = (await getNamedAccounts()).deployer;
        await deployments.fixture(["all"]);

        fundMe = await ethers.getContract("FundMe", deployer);
        mockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer);

        sendValue = ethers.utils.parseEther("1"); // ✅ NOW defined after ethers is loaded
    });

    describe("constructor", function () {
        it("sets the aggregator addresses correctly", async function () {
            const response = await fundMe.getPriceFeed();
            assert.equal(response, mockV3Aggregator.address);
        });
    });

    describe("fund", function () {
        it("Fails if you don't send enough eth", async function () {
            await expect(fundMe.fund()).to.be.revertedWith("You need to spend more ETH.");
        });

        it("Updates the amount funded data structure", async function () {
            await fundMe.fund({ value: sendValue });
            const response = await fundMe.getAddressToAmountFunded(deployer);
            assert.equal(response.toString(), sendValue.toString());
        });

        it("Adds funder to array of getFunder", async function () {
            await fundMe.fund({ value: sendValue });
            const funder = await fundMe.getFunder(0);
            assert.equal(funder, deployer);
        });

    });

    describe("withdraw", async function () {
        beforeEach(async function () {
            await fundMe.fund({ value: sendValue })
        })

        it("withdraw ETH from a single founder", async function () {
            const startingFundMeBalance = await fundMe.provider.getBalance(
                fundMe.address
            )
            const startingDeployerBalance = await fundMe.provider.getBalance(
                deployer
            )

            const transactionResponse = await fundMe.withdraw()
            const transactionReceipt = await transactionResponse.wait(1)
            const { gasUsed, effectiveGasPrice } = transactionReceipt
            const gasCost = gasUsed.mul(effectiveGasPrice)
            const endingFundMeBalance = await fundMe.provider.getBalance(
                fundMe.address
            )
            const endingDeployerBalance = await fundMe.provider.getBalance(
                deployer
            )

            assert.equal(endingFundMeBalance, 0)
            assert.equal(
                startingFundMeBalance.add(startingDeployerBalance).toString(), endingDeployerBalance.add(gasCost).toString()
            )
        })
        it("allows us to withdraw with multiple s_funders", async function() {
            const accounts = await ethers.getSigners()
            for (let i = 1; i < 6; i++) {
                const fundMeConnectContract = await fundMe.connect(
                    accounts[i]
                )
            }
        })
    })
});
