import { json } from "../auditories/data_fetching.js";
import { auditories, getTeachers } from "../auditories/methods.js";
import {writeFileSync} from "fs";

const data = JSON.parse(json);
auditories(data);
writeFileSync("teachers.json", JSON.stringify(getTeachers()));