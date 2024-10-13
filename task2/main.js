import { parseGroups } from "./helpers/parseGroups.js";

export const parse = (contents, auditories) => {
    let state = new Map;
    parseGroups(contents, state, auditories);
    return [...state].map(([_, aud]) => aud);
}
