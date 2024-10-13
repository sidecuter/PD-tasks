import { parseLesson } from "./parseLesson";
import { findAuditory } from "./findAuditory";

export const parseDay = (dayNum, day, group, state, auditories) => {
    Object.entries(day).forEach((lessonNum, lesson) => {
        if (lesson.length) {
            let [lesson, auds] = parseLesson(lesson, group);
            auds.forEach(aud => {
                try {
                    let auditory = findAuditory(aud, auditories, state);
                    switch (dayNum) {
                        case "1":
                            auditory.grid.monday[lessonNum] = lesson;
                            auditory.grid.monday.lessons.push(lessonNum);
                            break;
                        case "2":
                            auditory.grid.tuesday[lessonNum] = lesson;
                            auditory.grid.tuesday.lessons.push(lessonNum);
                            break;
                        case "3":
                            auditory.grid.wednesday[lessonNum] = lesson;
                            auditory.grid.wednesday.lessons.push(lessonNum);
                            break;
                        case "4":
                            auditory.grid.thursday[lessonNum] = lesson;
                            auditory.grid.thursday.lessons.push(lessonNum);
                            break;
                        case "5":
                            auditory.grid.friday[lessonNum] = lesson;
                            auditory.grid.friday.lessons.push(lessonNum);
                            break;
                        case "6":
                            auditory.grid.saturday[lessonNum] = lesson;
                            auditory.grid.saturday.lessons.push(lessonNum);
                            break;
                    }
                } catch (_) {}
            })
        }
    });
    return result;
}