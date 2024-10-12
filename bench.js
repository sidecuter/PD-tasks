import Benchmark from "benchmark";
import {json} from "./a.js";
import {auditories} from "./b.js";

const data = JSON.parse(json);

const suite = new Benchmark.Suite;

suite
    .add("auditories1#method", () => auditories(data,1))
    .add("auditories10#method", () => auditories(data,10))
    .add("auditories100#method", () => auditories(data,100))
    .add("auditoriesAll#method", () => auditories(data))
    .on('cycle', (event) => console.log(String(event.target)))
    .run({'async':false});