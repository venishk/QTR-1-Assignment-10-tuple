"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let obj = {
    name: "ratan lal",
    age: 25,
    cell: +9007601,
    cars: ["honda", "ferrari"],
    salary: () => {
        return ("berozgar");
    }
};
console.log("name", obj.name);
console.log("age", obj.age);
console.log("cell", obj.cell);
console.log("cars", obj.cars);
console.log("car", obj.cars[0]);
console.log("salary", obj.salary());
