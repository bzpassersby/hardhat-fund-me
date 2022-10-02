const { assert } = require("chai")
const { getNamedAccounts, ethers, network } = require("hardhat")
const {
    isCallTrace
} = require("hardhat/internal/hardhat-network/stack-traces/message-trace")
const { developmentChains } = require("../../helper-hardhat-config")
const { INITIAL_ANSWER } = require("../../helper-hardhat-config")

// let variable = false
//let someVar =variable ? "yes" : "no"

// if (variable) { someVar ="yes"} else {someVar ="no"}

developmentChains.includes(network.name)
    ? describe.skip
    : describe("FundMe", async function() {
          let fundMe
          let deployer
          const sendValue = ethers.utils.parseEther("1")
          beforeEach(async function() {
              deployer = (await getNamedAccounts()).deployer
              fundMe = await ethers.getContract("Fundme", deployer)
          })
          it("allows peopele to fund and withdraw", async function() {
              await fundMe.fund({ value: sendValue })
              await fundMe.withdraw()
              const endingBalance = await fundMe.provider.getBalance(
                  fundMe.address
              )
              assert.equal(endingBalance.toString(), "0")
          })
      })
