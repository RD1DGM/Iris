import { ethers } from 'ethers';
import abi from '../Contract_ABI/abi'
require('dotenv').config();

export const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
export const signer = provider.getSigner();

export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
export const readOnlyContract = new ethers.Contract(contractAddress, abi, provider);
export const readAndWriteContract = readOnlyContract.connect(signer);


// export const buyOmenObj = {
//   buyOmen: async () => {
//     let buy = await readAndWriteContract.buyOmen(address, {
//       gasLimit: 3000000,
//       value: '0x' + window.web3.toWei(`${price}`)
//     });
//     console.log(buy);
//     // setPrice('');
//     return buy;
//   },
//   priceHanlder: e => {
//     // setPrice(e.target.value)
//   }
// };

// export const checkerObj = {
//   checkBalance: async () => {
//     try {
//       let balance = await provider.getBalance(address);
//       let formated = ethers.utils.formatEther(x);
//       // setEthBalance(formated)
//       console.log('balance: ', y);
//     } catch (err) {
//       throw err;
//     }
//   },
//   checkOmen: async () => {
//     try {
//       let check = await readAndWriteContract.balanceOf(await signer.getAddress());
//       // console.log(check.toString())
//       // setOmenBalance(check.toString())
//     } catch (err) {
//       throw err;
//     }
//   },
//   checkCoins: async () => {
//     let check = await readAndWriteContract.balanceOf(contractAddress);
//     // setCoins(check.toString())
//   }
// };
