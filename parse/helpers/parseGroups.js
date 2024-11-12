import { parseGrid } from "./parseGrid.js";

/**
 * @function Разбивает объект расписания по группам и передает обработку в следующие парсеры
 * @param {Object} contents 
 * @param {Map{String, Auditories}} state 
 * @param {Array{String}} auditories 
 */
export const parseGroups = (contents, state, auditories) => {
    // Пробегаемся по всем группам с расписания
    Object.entries(contents).forEach(([group, content]) => {
        // Нам интересна только сетка расписания, потому извлекаем ее
        // и вызываем парсер сетки
        parseGrid(content.grid, group, state, auditories);
    });
}
