import cipher from './cipher.js';

const ingreso=document.getElementById('ingreso');
const cifrar=document.getElementById('cifrar');
const salida=document.getElementById('salida');


text();

function text(){

}
ingreso.addEventListener('keyup',(e)=>{
    let valor=e.target.value;
    //No deja ingresar salto de linea ni minúsculas.
    ingreso.value=valor.replace(/([a-z])/g,'').replace(/(\n)/g,'')
    .replace(/[¿'<?*&)ÁÉÍÓÚáéíóúý(=¡!|°^*ç$``´_:;+-.,@>%\$"]/g,'');
});
cifrar.addEventListener('click',()=>{
    let arrCode=[],cadena="";
    let texto=ingreso.value;
    for(let i=0;i<texto.length;i++){
        arrCode[i]=texto[i].charCodeAt();
        // let unicode=texto[i].charCodeAt();
        // let f=(unicode-65+)
        // cadena+=String.fromCharCode();

    }
    salida.value=arrCode;
});

console.log(cipher);
