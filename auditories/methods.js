const filter_reg = /(пд|зал|cпорт|онлайн|лайн|федеральная|имаш|hami|нами|техноград|биокомбинат|сколково|биотехнологии|hами)/i;

export const auditories = (contents, count = null) => {
    let keys = Object.keys(contents);
    if (count !== null && typeof count === 'number') {
        keys = keys.slice(0, count);
    }
    let auds = new Set();
    keys.forEach(group => {
        parseGroup(contents[group]).forEach(aud => auds.add(aud));
        //auds.add(...parseGroup(contents[group]));
    });
    return Array(...auds).filter(room => !room.match(filter_reg));
}

const parseGroup = (group) => {
    let data = new Set();
    Object.values(group.grid).forEach(day => {
        parseDay(day).forEach(aud => data.add(aud));
    });
    return data;
}

const parseDay = (day) => {
    let auds = new Set();
    Object.values(day).forEach(para => {
        //Парсим аудитории с пары
        try {
            para.forEach(variant => {
                try {
                    variant.shortRooms.forEach(
                        room => auds.add(room.toLowerCase())
                    );   
                } catch (error) {/*yolo*/}
            });
        } catch (error) {/*yolo*/}
    });
    return Array(...auds);
}
