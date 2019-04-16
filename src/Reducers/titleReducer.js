const initState = {
    titles: [{
        description: 'Cool Description',
        format: 'Online',
        id: 1,
        name: 'Red Book',
        price: 20
    },
    {
        description: 'Cool Description',
        format: 'Online',
        id: 2,
        name: 'Red Book',
        price: 20
    }]
}

const TitleReducer = (state = initState, action) => {
    switch (action.type) {
            case 'GET_TITLES' :
            return {
                ...state,
                titles: state.titles
            }
        default:
        return{
            ...state
        }
    }
};

export default TitleReducer;