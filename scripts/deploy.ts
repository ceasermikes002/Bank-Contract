import { ethers } from "hardhat";

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contract with the account:", deployer.address);

    const SimpleBank = await ethers.getContractFactory("SimpleBank");
    const simpleBankContract = await SimpleBank.deploy();

    await simpleBankContract.waitForDeployment();

    console.log("SimpleBank contract deployed at:", simpleBankContract.target);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
