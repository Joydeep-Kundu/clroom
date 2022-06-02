import { createStore } from "redux";

const redu = (state = { sign: false, email: '', course: '' }, action) => {
    if (action.type === 'add') {
        return { email: action.payload, sign: true }
    }
    if (action.type === 'course') {
        return { ...state, course: action.payload, sign: true }
    }

    return state;
}

let store = createStore(redu);
export default store;