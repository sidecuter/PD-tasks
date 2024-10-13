/**
 * Used to store lesson info
 * @field {string} groupName - название учебной группы/направления пд
 * @field {string} groupType - тип группы (Study/pd)
 * @field {string} discipline - название дисциплины
 * @field {Array{string}} teachers - преподаватели
*/
export class Lesson {
    groupName = "";
    groupType = "";
    discipline = "";
    teachers = [];
}