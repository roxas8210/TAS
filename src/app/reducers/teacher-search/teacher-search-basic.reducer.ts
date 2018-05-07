import { PUSH_TEACHER_SEARCH_BASIC_DATA } from '../../actions/teacher-search/teacher-search-basic.action';

const initialState = {
    data: []
};

export function TeacherSearchBasicReducer(state = initialState, {type, payload}) {
    switch (type) {
        case PUSH_TEACHER_SEARCH_BASIC_DATA:
            return Object.assign({}, state, {data: payload});
        default:
            break;
    }
}
