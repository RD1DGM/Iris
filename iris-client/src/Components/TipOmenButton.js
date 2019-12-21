import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
// import { readAndWriteContract, contractAddress } from '../utils/ContractFx';
import { useWeb3 } from '../utils/Web3Helper';
import { ethers } from 'ethers';
import { ContextCreator } from '../context/ContextCreator';

export function TipOmen() {
  const w3 = useWeb3();
  const { status, enable } = w3;
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = React.useContext(ContextCreator);

  function handleClickOpen() {
    if (status === 'LOCKED') {
      enable();
    }
    if (status === 'READY') {
      setOpen(true);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  const tip = async () => {
    const price = ethers.utils.bigNumberify;
    // let tip = await readAndWriteContract.tipOmen(contractAddress, price(1), { gasLimit: 3000000 });
    console.log(tip);
    setOpen(false);
    return tip;
  };

  return (
    <div style={{ margin: '0px auto 0px 0px' }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Tip OMEN
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent style={{ marginTop: 30 }}>
          <DialogContentText id="alert-dialog-description">
            **You can only send tokens to users that already have some**
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            CANCEL
          </Button>
          <Button onClick={() => tip()} color="primary" autoFocus>
            SUBMIT
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
