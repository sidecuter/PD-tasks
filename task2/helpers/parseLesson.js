import { Lesson } from "../models/lesson.js"

/**
 * @function parseLesson - Обработка уроков
 * @param {Object} lesson 
 * @param {String} group 
 * @returns [Lesson, Array{String}]|null
 */
export const parseLesson = (lesson, group) => {
    const today = new Date();
    try {
        let result = parseVariant(
            Object.values(lesson).filter(variant =>
                new Date(variant.df) <= today && new Date(variant.dt) >= today
            )[0],
            group
        );
        return result
    } catch (_) {
        return [null, []]
    }
}

const parseVariant = (variant, group) => {
    let result = new Lesson;
    result.discipline = variant.sbj;
    result.groupName = group;
    result.groupType = "study";
    result.teachers = variant.teacher.split(', ');
    let rooms = [...Object.values(variant.shortRooms)];
    return [result, rooms];
}
