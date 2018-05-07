export const PUSH_TEACHER_SEARCH_BASIC = 'PUSH_TEACHER_SEARCH_BASIC';
export const PUSH_TEACHER_SEARCH_ZODIAC = 'PUSH_TEACHER_SEARCH_ZODIAC';
export const PUSH_TEACHER_SEARCH_SUBJECT = 'PUSH_TEACHER_SEARCH_SUBJECT';
export const PUSH_TEACHER_SEARCH_AREA = 'PUSH_TEACHER_SEARCH_AREA';
export const PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE = 'PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE';

export function push_teacher_search_basic(basic_data) {
    return {
        type: PUSH_TEACHER_SEARCH_BASIC,
        payload: basic_data
    };
}

export function push_teacher_search_zodiac(zodiac_data) {
    return {
        type: PUSH_TEACHER_SEARCH_ZODIAC,
        payload: zodiac_data
    };
}

export function push_teacher_search_subject(subject_data) {
    return {
        type: PUSH_TEACHER_SEARCH_SUBJECT,
        payload: subject_data
    };
}

export function push_teacher_search_area(area_data) {
    return {
        type: PUSH_TEACHER_SEARCH_AREA,
        payload: area_data
    };
}

export function push_teacher_search_educationMiddleData(educationMiddle_data) {
    return {
        type: PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE,
        payload: educationMiddle_data
    };
}
