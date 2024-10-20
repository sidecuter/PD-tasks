import { parse } from "./task2/main.js"
import {json} from "./task1/a.js";
import {auditories} from "./task1/b.js";
import {writeFileSync} from "fs";

const data = JSON.parse(json);
const auds = auditories(data);

let result = parse(data, auds);

writeFileSync("dist/auditories.json", JSON.stringify(result));
