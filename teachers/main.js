import {transliterate} from 'transliteration';

export const get_id = (teacher_name) => {
    try {
        let [ln, fn, mn] = teacher_name.trim().split(' ');
        return transliterate(`${ln[0]}_${fn[0]}_${mn[0]}`);
    }
    catch (_) {
        return teacher_name;
    }
};

