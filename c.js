import {json} from "./a.js";
import {auditories} from "./b.js";

const contents = JSON.parse(json);

const spaces = auditories(contents);
console.log(spaces);
console.log(JSON.stringify({spaces: spaces}));