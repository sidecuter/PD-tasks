import { parseLesson } from "./parseLesson.js";
import { Auditory } from "../models/aud.js";
import { is_valid } from "../../name_unifier/main.js"

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
 * @param {Object} auditories 
 */
export const parseDay = (dayNum, day, group, state, auditories) => {
    // Перебираем все пары за день (они записаны в формате 'номер': {Объект вариантов})
    Object.entries(day)
        .filter(([_, lesson]) => Object.values(lesson).some(v => is_valid(v.location)))
        .forEach(([lessonNum, lesson]) => {
            // Получаем спаршенную модель пары и аудитории для нее
            let [lessonCont, auds, location] = parseLesson(lesson, group);
            if (location = "" || auds.length == 0) return;
            // Перебираем все аудитории
            auds
                .filter(v => v.toLowerCase() in auditories) // Отфильтровываем те, которых нет в объекте аудиторий
                .forEach(aud => {
                    aud = auditories[aud.toLowerCase()];
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