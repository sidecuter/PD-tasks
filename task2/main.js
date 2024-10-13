import {json} from "../task1/a.js"
import {auditories} from "../task1/b.js"
import { parseGroups } from "./helpers/parseGroups.js";

const contents = JSON.parse(json);
const auds = new Set(auditories(contents))

export const parse = (contents, auditories) => {
    let state = new Map;
    parseGroups(contents, state, auditories);
    return [...state].map(([_, aud]) => aud);
}

const state = parse(contents, auds);
console.log(JSON.stringify(state));