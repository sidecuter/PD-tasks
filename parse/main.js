import { parseGroups } from "./helpers/parseGroups.js";

/**
 * @function parse - Парсит содержимое расписания и предоставляет занятия по аудиториям
 * @param {Object} contents - содержимое поля contents расписания
 * @param {Array{String}} auditories - список аудиторий
 * @returns Object
 */
export const parse = (contents, auditories) => {
    let state = new Map;
    parseGroups(contents, state, auditories);
    return Object.fromEntries(state.entries());
}
// Пример вызова функции
// import { json } from "../auditories/data_fetching.js";
// import { auditories } from "../auditories/methods.js";
// const content = JSON.parse(json)
// const auds = auditories(content)
// parse(content, auds)
