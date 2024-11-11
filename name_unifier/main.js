import helpers from "./helpers.js";

const LOCATION_NAMES = [
    "автозаводская",
    "большая семеновская",
    "михалковская",
    "прянишникова",
    "павла корчагина"
];

const PATTERNS = {
    "автозаводская": helpers.av,
    "большая семеновская": helpers.bs,
    "михалковская": helpers.m,
    "прянишникова": helpers.pr,
    "павла корчагина": helpers.pk
};

const is_valid = (location) => LOCATION_NAMES.some(loc => loc == location.trim().toLowerCase());

const a = (location, auditorie) => {

};