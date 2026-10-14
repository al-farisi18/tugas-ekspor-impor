import { getOperasiHitung, getSapaan } from "./config.mjs";


const operasi = getOperasiHitung();

console.log(operasi[0](10, 5)); 
console.log(operasi[1](10, 5)); 
console.log(operasi[2](10, 5)); 
console.log(operasi[3](10, 5)); 
console.log(operasi[4](10, 5)); 

const sapaan = getSapaan();

console.log(sapaan.sapaPagi("Rizky"));  
console.log(sapaan.sapaSiang("Maul")); 
console.log(sapaan.sapaSore("Alga"));  
console.log(sapaan.sapaMalam("Dhimas")); 
console.log(sapaan.sapaUmum("Tuan")); 