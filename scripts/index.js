async function main() {
    // Retrieve accounts from the local node
    // const accounts = (await ethers.getSigners()).map(signer => signer.address);
    // console.log(accounts);
    // Set up an ethers contract, representing our deployed Box instance
    const address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
    const Box = await ethers.getContractFactory('Box');
    const box = Box.attach(address);

    // Send a transaction to store() a new value in the Box
    await box.store(23);

    // Call the retrieve() function of the deployed Box contract
    const value = await box.retrieve();
    console.log('Box value is', value.toString());
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });