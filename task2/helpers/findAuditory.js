import { Auditory } from "../models/models";

export const findAuditory = (aud, auds, state) => {
    if (!auds.includes(aud)) return null;
    if (!state.has(aud)) {
        state[aud] = new Auditory;
        state[aud].id = aud;
    }
    return state[aud]
}