
import {COUNTER_INCREMENT,COUNTER_DECREMENT} from '../../actions/types/counter'


const initialState = {
  counter : 0,
  click: ""

}

export default function counter(state = initialState, action) {

  switch (action.type) {
    case COUNTER_INCREMENT: {

      const counter = state.counter + 1;
      
      return Object.assign({}, state, {
        'click': 'clicked',
        'counter': counter
      });
    }
    case COUNTER_DECREMENT:
    {
      const counter = state.counter - 1;

      return Object.assign({}, state, {
        'click': 'clicked',
        'counter': counter
      });
    }
    default:

    return state;
  }


}
