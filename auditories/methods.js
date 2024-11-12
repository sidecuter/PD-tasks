import {is_valid, unify} from "../name_unifier/main.js";
import { get_id } from "../teachers/main.js";
import use_state from "../state/main.js";

const filter_reg = /(пд|зал|cпорт|онлайн|лайн|федеральная|имаш|hami|нами|техноград|биокомбинат|сколково|биотехнологии|hами)/i;

const [getAuds, setAuds, updateAuds] = use_state({});
export const [getTeachers, ,updateTeachers] = use_state({});

export const auditories = (contents, count = null) => {
    setAuds({});
    let keys = Object.keys(contents);
    if (count !== null && typeof count === 'number') {
        keys = keys.slice(0, count);
    }
    keys.forEach(group => parseGroup(contents[group]));
    return {...getAuds()};
}


const parseGroup = (group) => Object.values(group.grid).forEach(day => parseDay(day));

const parseDay = (day) => {
    Object.values(day).forEach(para => para
        //Парсим аудитории с пары
        .filter(variant => is_valid(variant.location))
        .forEach(variant => { 
            variant
                .shortRooms
                .filter(room => !room.toLowerCase().match(filter_reg))
                .filter(room => !(room in getAuds()))
                .forEach(room => updateAuds(state => {
                    let [key, value] = unify(variant.location, room.toLowerCase());
                    state[key] = value;
                }))
            variant.teacher.split(', ').filter(teacher => teacher != '').forEach(teacher => {
                updateTeachers(state => state[teacher] = get_id(teacher));
            })
        })
    );
}
