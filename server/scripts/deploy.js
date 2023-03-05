async function main() {
  const contractFactory = await ethers.getContractFactory("TwitterContract");
  const contract = await contractFactory.deploy();
  await contract.deployed();
  console.log("Contract deployed at address : ", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
