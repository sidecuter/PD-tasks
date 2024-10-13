import { parseDay } from "./parseDay.js";

/**
 * @function parseGrid Обработка функций
 * @param {Object} grid 
 * @param {String} group 
 * @param {Map{Auditories}} state 
 * @param {Set{String}} auditories 
 */
export const parseGrid = (grid, group, state, auditories) => {
    Object.entries(grid).forEach(([dayNum, day]) => {
        parseDay(dayNum, day, group, state, auditories);
    });
}