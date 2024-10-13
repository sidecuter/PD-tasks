import { parseLesson } from "./parseLesson.js";
import { findAuditory } from "./findAuditory.js";

export const parseDay = (dayNum, day, group, state, auditories) => {
    Object.entries(day).forEach(([lessonNum, lesson]) => {
        if (lesson.length) {
            try {
                let [lessonCont, auds] = parseLesson(lesson, group);
                auds.forEach(aud => {
                    aud = aud.toLowerCase();
                    let auditory = findAuditory(aud, auditories, state);
                    try {
                        switch (dayNum) {
                            case "1":
                                auditory.rasp.monday[lessonNum] = lessonCont;
                                auditory.rasp.monday.lessons.push(lessonNum);
                                break;
                            case "2":
                                auditory.rasp.tuesday[lessonNum] = lessonCont;
                                auditory.rasp.tuesday.lessons.push(lessonNum);
                                break;
                            case "3":
                                auditory.rasp.wednesday[lessonNum] = lessonCont;
                                auditory.rasp.wednesday.lessons.push(lessonNum);
                                break;
                            case "4":
                                auditory.rasp.thursday[lessonNum] = lessonCont;
                                auditory.rasp.thursday.lessons.push(lessonNum);
                                break;
                            case "5":
                                auditory.rasp.friday[lessonNum] = lessonCont;
                                auditory.rasp.friday.lessons.push(lessonNum);
                                break;
                            case "6":
                                auditory.rasp.saturday[lessonNum] = lessonCont;
                                auditory.rasp.saturday.lessons.push(lessonNum);
                                break;
                        }
                        state.set(aud, auditory);
                    } catch (_) {}
                })
            } catch (_) {}
        }
    });
}