let baseUrl = 'http://localhost:3000/';
const user = {};
export const SAVE_ID = 'SAVE_ID';

export default (state = user, action = { }) => {

  switch (action.type) {
    case SAVE_ID:
    console.log(action);
      return Object.assign({}, state, action.id )

    default: return state

  }

}
