export const DirectoryReducer = (state = {
    directory: [],
    filter: "",
    selected: null
}, action) => {
    switch(action.type) {
        case 'SET_DIRECTORY': 
            return {
                ...state,
                directory: action.payload
            };
        case 'SET_FILTER': 
            return {
                ...state,
                filter: action.payload
            };
        case 'SET_SELECTED': 
            return {
                ...state,
                selected: action.payload
            };
        default:
            return state;
    }
}