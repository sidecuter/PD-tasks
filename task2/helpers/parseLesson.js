import { Lesson } from "../models/lesson.js"

/**
 * @function parseLesson - Обработка уроков
 * @param {Object} lesson - Объект урока из расписания, хранит 1 и более вариантов по датам
 * @param {String} group - учебная группа
 * @returns [Lesson, Array{String}]|[null, []]
 */
export const parseLesson = (lesson, group) => {
    const today = new Date();
    try {
        let result = parseVariant( // Преобразуем вариант (если варианта не нашлось, выбросится исключение)
            Object.values(lesson).filter(variant =>
                // Фильтруем все варианты пары на то, что сейчас они доступны
                new Date(variant.df) <= today && new Date(variant.dt) >= today
            )[0], // Получаем первый удачный вариант (либо никакой)
            // После фильтра обычно не остается вообще вариантов,
            // либо иногда всплывает единственный.
            // Два и более после фильтрации не возникает
            group
        );
        return result
    } catch (_) {
        // В случае, если возникло исключение (фильтрация не вернула ничего) возвращается пустое значение
        return [null, []]
    }
}

/**
 * @function parseVariant - Преобразует структуру из расписания в наш стандарт
 * @param {Object} variant - вариант пары
 * @param {String} group - учебная группа
 * @returns [Lesson, Array{String}]
 */
const parseVariant = (variant, group) => {
    let result = new Lesson;
    result.discipline = variant.sbj;
    result.groupName = group;
    result.groupType = "study";
    // Преподаватели указаны через ,
    result.teachers = variant.teacher.split(', ');
    // Получаем все номера аудиторий
    let rooms = [...Object.values(variant.shortRooms)];
    return [result, rooms];
}
