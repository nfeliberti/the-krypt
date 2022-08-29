
//make es6 arrow function
//async function main() {
const main = async () => {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  //const Greeter = await hre.ethers.getContractFactory("Greeter");
  //
  //await greeter.deployed();
  
  //console.log("Greeter deployed to:", greeter.address);
  // renamed all  all greeter to transactions

  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.address)

}


const runMain =async () =>{
  try {
    await main()
    process.exit(0);
  } catch (error){
    console.error(error);
    process.exit(1);
  }
}

runMain();

// this excutes and deploys our contract


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
/*main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });*/ 
// this was the previous code when it was greeter instead of transactions 