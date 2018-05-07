export const PUSH_TEACHER_SEARCH_BASIC = 'PUSH_TEACHER_SEARCH_BASIC';
export const PUSH_TEACHER_SEARCH_ZODIAC = 'PUSH_TEACHER_SEARCH_ZODIAC';
export const PUSH_TEACHER_SEARCH_SUBJECT = 'PUSH_TEACHER_SEARCH_SUBJECT';
export const PUSH_TEACHER_SEARCH_AREA = 'PUSH_TEACHER_SEARCH_AREA';
export const PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE = 'PUSH_TEACHER_SEARCH_EUDCATIONMIDDLE';
export const PUSH_TEACHER_SEARCH_EUDCATIONHISTORY = 'PUSH_TEACHER_SEARCH_EUDCATIONHISTORY';
export const PUSH_TEACHER_SEARCH_MUSIC = 'PUSH_TEACHER_SEARCH_MUSIC';
export const PUSH_TEACHER_SEARCH_INFO = 'PUSH_TEACHER_SEARCH_INFO';
export const PUSH_TEACHER_SEARCH_PROFESSION = 'PUSH_TEACHER_SEARCH_PROFESSION';
export const PUSH_TEACHER_SEARCH_OTHER = 'PUSH_TEACHER_SEARCH_OTHER';

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

export function push_teacher_search_educationHistoryData(educationHistory_data) {
    return {
        type: PUSH_TEACHER_SEARCH_EUDCATIONHISTORY,
        payload: educationHistory_data
    };
}

export function push_teacher_search_music(music_data) {
    return {
        type: PUSH_TEACHER_SEARCH_MUSIC,
        payload: music_data
    };
}

export function push_teacher_search_info(info_data) {
    return {
        type: PUSH_TEACHER_SEARCH_INFO,
        payload: info_data
    };
}

export function push_teacher_search_profession(profession_data) {
    return {
        type: PUSH_TEACHER_SEARCH_PROFESSION,
        payload: profession_data
    };
}

export function push_teacher_search_other(other_data) {
    return {
        type: PUSH_TEACHER_SEARCH_OTHER,
        payload: other_data
    };
}


