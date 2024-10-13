import { parseLesson } from "./parseLesson.js";
import { Auditory } from "../models/aud.js";

const dayNumToName = {
    "1": "monday",
    "2": "tuesday",
    "3": "wednesday",
    "4": "thursday",
    "5": "friday",
    "6": "saturday",
};

export const parseDay = (dayNum, day, group, state, auditories) => {
    Object.entries(day).forEach(([lessonNum, lesson]) => {
        let [lessonCont, auds] = parseLesson(lesson, group);
        auds.forEach(aud => {
            aud = aud.toLowerCase();
            if (auditories.has(aud)) {
                if (!state.has(aud)) {
                    state.set(aud, new Auditory);
                    state.get(aud).id = aud;
                }
                state.get(aud).rasp[dayNumToName[dayNum]][lessonNum] = lessonCont;
                state.get(aud).rasp[dayNumToName[dayNum]].lessons.push(lessonNum);
            }
        });
    });
}