import { Grid } from "./grid";

/**
 * @field {string} id - номер аудитории
 * @field {Grid} rasp - сетка расписания
 */
export class Auditory {
    id = "";
    rasp = new Grid;
}