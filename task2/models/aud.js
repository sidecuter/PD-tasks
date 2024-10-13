import { Grid } from "./grid.js";

/**
 * @field {string} id - номер аудитории
 * @field {Grid} rasp - сетка расписания
 */
export class Auditory {
    id = "";
    rasp = new Grid;
}