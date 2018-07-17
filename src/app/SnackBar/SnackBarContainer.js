
import { connect } from 'react-redux'
import { clearMessage } from './SnackBarActions'
import SnackBar from './SnackBar'

const mapStateToProps = state => ({
  open: state.SnackBarReducer.open,
  message: state.SnackBarReducer.message,
})

const mapDispatchToProps = dispatch => {
  return{
    clearMessage: () => { dispatch(clearMessage()); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackBar)
