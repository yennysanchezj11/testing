const fs =require('fs')
fs.writeFile('./texto.txt','HOLAAAAAAAAAAAAAAAAAAAAAAAAA',
function (err) { if (err) {
    console.log(err) ;
}
console.log("archivo creado");  
});
