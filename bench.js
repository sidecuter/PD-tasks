import Benchmark from "benchmark";
import {json} from "./task1/a.js";
import {auditories} from "./task1/b.js";
import {parse} from "./task2/main.js";


const data = JSON.parse(json);
const auds = auditories(data);

const suite = new Benchmark.Suite;

suite
    .add("auditories1#method", () => auditories(data,1))
    .add("auditories10#method", () => auditories(data,10))
    .add("auditories100#method", () => auditories(data,100))
    .add("auditoriesAll#method", () => auditories(data))
    .add("parse#method", () => parse(data, auds))
    .on('cycle', (event) => console.log(String(event.target)))
    .run({'async':false});