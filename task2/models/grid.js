export {Day} from "./day"
/**
 * @field {Day} monday - первая пара
 * @field {Day} tuesday - вторая пара
 * @field {Day} wednesday - третья пара
 * @field {Day} thursday - четвертая пара
 * @field {Day} friday - пятая пара
 * @field {Day} saturday - шестая пара
 */
export class Grid {
    monday = new Day;
    tuesday = new Day;
    wednesday = new Day;
    thursday = new Day;
    friday = new Day;
    saturday = new Day;
}