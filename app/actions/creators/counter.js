import {COUNTER_INCREMENT,COUNTER_DECREMENT} from '../types/counter';



export function counterIncrement() {
  return {
    type: COUNTER_INCREMENT
  }
}
export function counterDecrement() {
  return {
    type: COUNTER_DECREMENT
  }
}
