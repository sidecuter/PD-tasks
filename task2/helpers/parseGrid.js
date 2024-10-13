import { Grid } from "../models/grid";
import { parseDay } from "./parseDay";

export const parseGrid = (grid, group, state, auditories) => {
    Object.entries(grid).forEach((dayNum, day) => {
        parseDay(dayNum, day, group, state, auditories);
    });
}