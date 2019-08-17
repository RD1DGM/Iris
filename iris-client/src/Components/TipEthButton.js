import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { readAndWriteContract, contractAddress } from '../utils/ContractFx';
import { useWeb3 } from '../utils/Web3Helper';
import { ethers } from 'ethers';

export function TipEth() {
  const w3 = useWeb3();
  const { status, enable } = w3;
  const [open, setOpen] = React.useState(false);
  const [tip, setTip] = useState(0);
  const [ethAddress, setEthAddress] = useState('');
  const [error, setError] = useState('')

  function handleClickOpen() {
    if (status === 'LOCKED') {
      enable();
    }
    if (status === 'READY') {
      setOpen(true)
    } 
  }

  function handleClose() {
    setOpen(false);
  }

  const tipEth = async () => {
    try {
      let tips = await readAndWriteContract.tipWei(ethAddress, {
        gasLimit: 3000000,
        value: '0x' + window.web3.toWei(`${tip}`)
      });
      console.log(tips);
      setTip('');
      setEthAddress('');
      setOpen(false)
      return tips;
    } catch (e) {
      if (!ethAddress) {
        alert(e)
      }
    }
  };
  const tipHandler = e => {
    setTip(e.target.value);
  };
  const ethAddressHandler = e => {

    setEthAddress(e.target.value);
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Tip ETHER
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'WANNA TIP ETHER?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">YOU WONT REGRET IT!</DialogContentText>
          {error}
          <input type="button" value="TIP ETH" onClick={() => tipEth()} /> <br />
          Ethereum Address: <input type="text" value={ethAddress} onChange={e => ethAddressHandler(e)} />
          Price in Ether: <input type="text" value={tip} onChange={e => tipHandler(e)} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
