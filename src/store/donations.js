const DonationsReducer = (state = {}, action) => {
    switch(action.type) {
        case "ADD_DONATIONS":
            //copy the state object here and add the new object with its key
            let clone = Object.assign({},state);
            clone[action.payload.key] = action.payload.value;
            return clone;
        case "DELETE_DONATIONS":
            //copy the state object here and remove the object with corresponding key
            let clone = Object.assign({},state);
            delete clone[action.payload.key];
            return clone;
        default:
            return state;
    }
};
export default DonationsReducer;