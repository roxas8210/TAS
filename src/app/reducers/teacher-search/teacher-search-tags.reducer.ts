import { GET_TEACHER_SEARCH_TAGS } from '../../actions/teacher-search/teacher-search-tags.action';

const initialState = {
    data: [],
    padding: false,
    error: null
};

export function TeacherSearchTagsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case GET_TEACHER_SEARCH_TAGS:
            return Object.assign({}, state, {data: payload});
    }
}
