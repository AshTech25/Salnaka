import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PropTypes from 'prop-types';
import { createWithdrawal } from '../../../actions/withdraw';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    // border: '2px solid #000',
    borderRadius:"8px",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    '&:focus':{
        outline:'unset'
    }
  },
}));
 
const WithdrawalModal = ({isOpen,onClose,maxAmountLimit,createWithdrawal,data}) => {
  const classes = useStyles();
  const [amount,setAmount] = useState('');
  const { enqueueSnackbar } = useSnackbar();

  const setAlert = (msg)=>{
    enqueueSnackbar(msg, { variant: 'success' });
  }


  const { loading } = data;

  const handleChange = (e) => {
    setAmount(e.target.value)
  }

  const handleSubmit = () => {
    let submitData = {amount}
    const abc = createWithdrawal(submitData);
    abc.then((res) => {
        setAlert(res);   // alert on success
        onClose();    // close modal
    })
  }

  return (
    <div>
      <Modal
        aria-labelledby="withdrawal-modal-title"
        aria-describedby="withdrawal-modal-description"
        className={classes.modal}
        open={isOpen}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 id="withdrawal-modal-title">Withdrawal Info</h2>
            <p id="withdrawal-modal-description">Enter amount and click submit to withdraw.</p>
            <TextField
                label={'Withdrawal Amount'}
                placeholder={"Enter Amount"}
                error={amount > maxAmountLimit}
                helperText={amount > maxAmountLimit && "Amount must be less than current balance"}
                fullWidth
                variant="outlined"
                size="small"
                outlined="true"
                // InputProps={}
                onChange={handleChange}
                value={amount}
                type='number'
                required
            />
            <div style={{textAlign:'right',marginTop:'25px'}}>
                <Button 
                    variant="contained" 
                    color="primary" 
                    size="small" 
                    disabled={ !amount || amount <= 0 || amount > maxAmountLimit || loading} 
                    onClick={handleSubmit}
                    >
                    Submit
                </Button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

WithdrawalModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose:PropTypes.func.isRequired,
    maxAmountLimit:PropTypes.number
};


const mapStateToProps = (state) => ({
    data: state.Withdrawal,
});

export default connect(mapStateToProps, { createWithdrawal })(WithdrawalModal);