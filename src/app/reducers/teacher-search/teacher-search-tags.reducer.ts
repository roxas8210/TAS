import {
    PUSH_TEACHER_SEARCH_BASIC,
    PUSH_TEACHER_SEARCH_ZODIAC,
    PUSH_TEACHER_SEARCH_SUBJECT,
    PUSH_TEACHER_SEARCH_AREA,
    PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE
} from '../../actions/teacher-search/teacher-search-tags.action';

const initialState = {
    basicData: [],
    subjectData: [],
    areaData: [],
    educationMiddleData: [],
    educationHistoryData: [],
    musicData: [],
    infoData: [],
    professionData: [],
    otherData: [],
    zodiacData: []
};

export function TeacherSearchTagsReducer(state = initialState, {type, payload}) {
    switch (type) {
        case PUSH_TEACHER_SEARCH_BASIC:
            return Object.assign({}, state, {basicData: payload});
        case PUSH_TEACHER_SEARCH_ZODIAC:
            return Object.assign({}, state, {zodiacData: payload});
        case PUSH_TEACHER_SEARCH_SUBJECT:
            return Object.assign({}, state, {subjectData: payload});
        case PUSH_TEACHER_SEARCH_AREA:
            return Object.assign({}, state, {areaData: payload});
        case PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE:
            return Object.assign({}, state, { educationMiddleData: payload});
    }
}
