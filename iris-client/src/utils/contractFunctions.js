import { ethers } from 'ethers';
import abi from '../contract_abi/abi';
require('dotenv').config();

const provider = new ethers.providers.Web3Provider(window.web3.currentProvider);
const signer = provider.getSigner();

const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
const readOnlyContract = new ethers.Contract(contractAddress, abi, provider);
const readAndWriteContract = readOnlyContract.connect(signer);

export const tipObj = {
  tipEth: async () => {
    let tips = await readAndWriteContract.tipWei(ethAddress, {
      gasLimit: 3000000,
      value: '0x' + window.web3.toWei(`${tip}`)
    });
    console.log(tips);
    // setTip('')
    // setEthAddress('')
    return tips;
  },
  tipHandler: e => {
    // setTip(e.target.value)
  },
  ethAddressHandler: e => {
    // setEthAddress(e.target.value)
  },
  tipOmen: async () => {
    const price = ethers.utils.bigNumberify;
    let tip = await readAndWriteContract.tipOmen(contractAddress, price(1), { gasLimit: 3000000 });
    console.log(tip);
    return tip;
  }
};

export const buyOmenObj = {
  buyOmen: async () => {
    let buy = await readAndWriteContract.buyOmen(address, {
      gasLimit: 3000000,
      value: '0x' + window.web3.toWei(`${price}`)
    });
    console.log(buy);
    // setPrice('');
    return buy;
  },
  priceHanlder: e => {
    // setPrice(e.target.value)
  }
};

export const checkerObj = {
  checkBalance: async () => {
    try {
      let balance = await provider.getBalance(address);
      let formated = ethers.utils.formatEther(x);
      // setEthBalance(formated)
      console.log('balance: ', y);
    } catch (err) {
      throw err;
    }
  },
  checkOmen: async () => {
    try {
      let check = await readAndWriteContract.balanceOf(await signer.getAddress());
      // console.log(check.toString())
      // setOmenBalance(check.toString())
    } catch (err) {
      throw err;
    }
  },
  checkCoins: async () => {
    let check = await readAndWriteContract.balanceOf(contractAddress);
    // setCoins(check.toString())
  }
};
