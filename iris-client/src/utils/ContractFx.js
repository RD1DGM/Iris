import { ethers } from 'ethers';
import abi from '../contract_abi/abi';
require('dotenv').config();

export const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
export const signer = provider.getSigner();

export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
export const readOnlyContract = new ethers.Contract(contractAddress, abi, provider);
export const readAndWriteContract = readOnlyContract.connect(signer);
