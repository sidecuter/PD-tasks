import { readFileSync } from "fs"

let data = readFileSync("./semester.json")

//Вообще судя по подсказкам IDE у буфера есть метод toJSON, но мы в сферическом вакуме строк
let parsed = JSON.parse(data.toString())
//let parsed = data.toJSON()

export const json = JSON.stringify(parsed.contents)
