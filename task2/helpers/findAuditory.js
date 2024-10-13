import { Auditory } from "../models/aud.js";

/**
 * @function findAuditory - Получаем объект аудитории по имени аудитории
 * @param {String} aud 
 * @param {Set{String}} auds 
 * @param {Map{Auditories}} state 
 * @returns Auditory|null
 */
export const findAuditory = (aud, auds, state) => {
    if (!auds.has(aud)) return null;
    if (!state.has(aud)) {
        state.set(aud, new Auditory);
        state.get(aud).id = aud;
    }
    return state.get(aud)
}