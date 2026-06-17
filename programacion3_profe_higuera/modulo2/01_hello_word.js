"use strict";
// hola.js — generado por tsc
const mensaje = "Hola desde TypeScript";
const año = 2026;
console.log(mensaje);
console.log(`El año es: ${año}`);








// tipos-boolean.ts
const mayorDeEdad:  boolean = true;
const tieneCuenta:  boolean = false;

console.log(mayorDeEdad);
console.log(!mayorDeEdad);              // false  (negación)
console.log(mayorDeEdad && tieneCuenta); // false  (ambos deben ser true)
console.log(mayorDeEdad || tieneCuenta); // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const edad = 20;
const esAdulto: boolean = edad >= 18;
console.log(`¿Es adulto? ${esAdulto}`); // ¿Es adulto? true
























// tipo-any.ts

let dato: any = "hola";
dato = 42;        // ✅ sin error
dato = true;      // ✅ sin error
dato = [1, 2, 3]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log(dato.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar