//Se crean arrays con valores strings para seleccionarlos previamente. 
var pronoun = ["yo", "tú", "usted", "él", "ella", "ustedes", "nosotros", "ellos"];
var adj = ["salado", "grande", "juvenil",
"dulce", "pequeño", "comunista",
"amargo", "diminuto", "infantil",
"ácido",	"seco",	"capitalista"];
var noun = ["crema", "café", "estrella",
"explosión", "guitarra", "plástico",
"navaja", "martillo", "libros", 
"lápiz", "lapicera", "aluminio"];
var extensions = [".com", ".es", ".org", ".co", ".int", ".edu", ".net", ".gov", ".mil", ".arpa", ".cr"];

for (let i = 0; i < 10; i++) {

// Se crean variables por cada elemento aleatorio a seleccionar de las arrays
var rdm1 = Math.floor((Math.random() * pronoun.length) );
var rdm2 = Math.floor((Math.random() * adj.length) );
var rdm3 = Math.floor((Math.random() * noun.length) );
var rdm4 = Math.floor((Math.random() * extensions.length) );

// Nos da el valor del array de acuerdo a la posicion dentro de los [] 
let result = pronoun[rdm1] + adj[rdm2] + noun[rdm3] + extensions[rdm4]; 

console.log(result)

}