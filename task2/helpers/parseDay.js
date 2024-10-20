import { parseLesson } from "./parseLesson.js";
import { Auditory } from "../models/aud.js";

// Нужно для более лаконичного доступа к полям моделей
const dayNumToName = {
    "1": "monday",
    "2": "tuesday",
    "3": "wednesday",
    "4": "thursday",
    "5": "friday",
    "6": "saturday",
};

/**
 * @function parseDay - Парсит запись дня из расписания и вносит в состояние
 * @param {String} dayNum 
 * @param {Object} day 
 * @param {String} group 
 * @param {Map{String, Auditory}} state 
 * @param {Array{String}} auditories 
 */
export const parseDay = (dayNum, day, group, state, auditories) => {
    // Перебираем все пары за день (они записаны в формате 'номер': {Объекты вариантов})
    Object.entries(day).forEach(([lessonNum, lesson]) => {
        // Получаем спаршенную модель пары и аудитории для нее
        let [lessonCont, auds] = parseLesson(lesson, group);
        // Перебираем все аудитории
        auds
            .map(v => v.toLowerCase()) // Преобразуем названия аудиторий к нижнему регистру
            .filter(v => auditories.has(v)) // Отфильтровываем те, которых нет в массиве аудиторий
            .forEach(aud => {
                // Если в состоянии еще нет такой аудитории, то создаем новый объект и пишем его в состояние
                if (!state.has(aud)) {
                    state.set(aud, new Auditory);
                    state.get(aud).id = aud;
                }
                // Записываем для дня dayNum информацию о паре lessonNum
                state.get(aud).rasp[dayNumToName[dayNum]][lessonNum] = lessonCont;
                // Дополняем массив lessons информацией о номере пары
                state.get(aud).rasp[dayNumToName[dayNum]].lessons.push(lessonNum);
        });
    });
}