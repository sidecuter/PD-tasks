import {is_valid, unify} from "../name_unifier/main.js";

const filter_reg = /(пд|зал|cпорт|онлайн|лайн|федеральная|имаш|hami|нами|техноград|биокомбинат|сколково|биотехнологии|hами)/i;

export const auditories = (contents, count = null) => {
    let keys = Object.keys(contents);
    if (count !== null && typeof count === 'number') {
        keys = keys.slice(0, count);
    }
    let auds = {};
    keys.forEach(group => {
        auds = {...parseGroup(contents[group]), ...auds}
    });
    return auds;
}


const parseGroup = (group) => {
    let auds = {};
    Object.values(group.grid).forEach(day =>
        auds = {...parseDay(day), ...auds}
    );
    return auds;
}

const parseDay = (day) => {
    let auds = {};
    Object.values(day).forEach(para => para
        //Парсим аудитории с пары
        .filter(variant => is_valid(variant.location))
        .forEach(variant => variant
            .shortRooms
            .filter(room => !room.toLowerCase().match(filter_reg))
            .forEach(room => {
                let [key, value] = unify(variant.location, room.toLowerCase());
                auds[key] = value
            })
        )
    );
    return auds;
}
