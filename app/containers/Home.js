import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { counterIncrement,counterDecrement } from '../actions/creators/counter';
import Increment from '../components/Increment';

function mapStateToProps(state) {
  return {
    counter: state.counter.counter
  };
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
      counterIncrement,
      counterDecrement
  }, dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Increment);
