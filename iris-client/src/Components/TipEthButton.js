import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
// import { readAndWriteContract } from '../utils/ContractFx';
import { useWeb3 } from '../utils/Web3Helper';
import { ContextCreator } from '../context/ContextCreator';

export function TipEth() {
  const w3 = useWeb3();
  const { status, enable } = w3;
  const { state, dispatch } = React.useContext(ContextCreator);

  function handleClickOpen() {
    if (status === 'LOCKED') {
      enable();
    }
    if (status === 'READY') {
      dispatch({
        type: 'SET_OPEN',
        open: true
      });
    }
  }

  function handleClose() {
    dispatch({
      type: 'SET_OPEN',
      open: false
    });
  }

  // const tipEth = async () => {
  //   try {
  //     let tips = await readAndWriteContract.tipWei(state.ethAddress, {
  //       gasLimit: 3000000,
  //       value: '0x' + window.web3.toWei(`${state.tip}`)
  //     });
  //     console.log(tips);
  //     dispatch({
  //       type: 'SET_OPEN',
  //       open: false
  //     });
  //     dispatch({
  //       type: 'SET_TIP',
  //       tip: 0
  //     });
  //     dispatch({
  //       type: 'SET_ETHADDRESS',
  //       ethAddress: ''
  //     });
  //     return tips;
  //   } catch (e) {
  //     if (!state.ethAddress) {
  //       alert(e);
  //     }
  //   }
  // };

  return (
    <div style={{ margin: '0px 5px 0px auto' }}>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Tip ETHER
      </Button>
      <Dialog
        open={state.open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'WANNA TIP ETHER?'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">YOU WONT REGRET IT!</DialogContentText>
          <input type="button" value="TIP ETH"
            // onClick={() => tipEth()}
          /> <br />
          Ethereum Address:{' '}
          <input
            type="text"
            value={state.ethAddress}
            onChange={e => dispatch({ type: 'SET_ETHADDRESS', ethAddress: e.currentTarget.value })}
          />
          Price in Ether:{' '}
          <input
            type="text"
            value={state.tip}
            onChange={e => dispatch({ type: 'SET_TIP', tip: e.currentTarget.value })}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
