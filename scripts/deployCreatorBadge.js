const { ethers } = require("hardhat");

async function main() {
  const BadgeContract = await ethers.getContractFactory("CreatorBadge");
  const badgeContract = await BadgeContract.deploy();

  console.log("My Badge Contract addess is : ", badgeContract.address);
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});
