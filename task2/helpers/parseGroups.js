import { parseGrid } from "./parseGrid.js";

export const parseGroups = (contents, state, auditories) => {
    Object.entries(contents).forEach(([group, content]) => {
        let grid = content.grid;
        parseGrid(grid, group, state, auditories);
    });
}
