import {
    UPDATE_PAYER
} from './actions';



export default function reducer(state, action) {
    // Depending on the action we create a new version of state after the desired action is preformed
    switch (action.type) {
      case UPDATE_PAYER: {
        const updates = {...action.payload}
        const {data} = state.updatePayer({
          variables: {id:action.payload._id, ...updates}
        })
        
        return {...state}
      }
      
      // Default to returning the state as is in our switch statement
      default:
        return state;
    }
  }