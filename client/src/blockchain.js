import Web3 from 'web3';
import SimpleStorage from './contracts/EmailHashContract.json';

// Function to load blockchain data, including connecting to the local Ethereum node and instantiating the contract.
export const loadBlockchainData = async () => {
  try {
    // Connect to the local Ethereum node using HTTP provider.
    const provider = new Web3.providers.HttpProvider('http://127.0.0.1:7545');

    // Create a Web3 instance using the provider.
    const web3 = new Web3(provider);

    // Get the network ID of the connected Ethereum network.
    const networkId = await web3.eth.net.getId();

    // Get the deployed network details for the contract from the JSON file.
    const deployedNetwork = SimpleStorage.networks[networkId];

    // Get the address of the deployed contract on the network.
    const contractAddress = deployedNetwork.address;

    // Instantiate the contract using the Web3 instance and contract ABI.
    const contract = new web3.eth.Contract(SimpleStorage.abi, contractAddress);

    // Return the Web3 instance and the instantiated contract.
    return { web3, contract };
  } catch (error) {
    // Log and throw an error if there is an issue loading blockchain data.
    console.error('Error loading blockchain data:', error);
    throw error;
  }
};
