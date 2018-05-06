export const PUSH_TEACHER_SEARCH_BASIC_DATA = 'PUSH_TEACHER_SEARCH_BASIC_DATA';

export function pushBasic(data) {
    return {
        type: PUSH_TEACHER_SEARCH_BASIC_DATA,
        payload: data
    };
}
