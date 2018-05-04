const initState = {
};

export const TeacherSearchBasicReducer = (state = [], action: {type, payload}) => {
    switch (action.type) {
        case 'CHANGE_VALUES':
            return [
                ...state,
                action.payload
            ];
        default:
            break;
    }
};

