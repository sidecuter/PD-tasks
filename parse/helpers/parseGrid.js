import { parseDay } from "./parseDay.js";

/**
 * @function parseGrid - Извлекает объекты дней недели из объекта сетки расписания и передает в следующие обработчики
 * @param {Object} grid 
 * @param {String} group 
 * @param {Map{Auditories}} state 
 * @param {Set{String}} auditories 
 */
export const parseGrid = (grid, group, state, auditories) => {
    // Перебираем все дни недели из расписания и передаем
    // соответствующие им объекты в другой обработчик
    Object.entries(grid).forEach(([dayNum, day]) => {
        parseDay(dayNum, day, group, state, auditories);
    });
}