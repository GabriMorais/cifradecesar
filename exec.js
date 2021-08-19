 function modulo(n, m) {
    var remain = n % m;
    return Math.floor(remain >= 0 ? remain : remain + m);
};
function mod(n, m) {
    return ((n % m) + m) % m;
  }
function CifraDeCesar(texto,chave,opcao) {
    var alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    var atual = '',encriptado='';
    if (opcao) {
       for (let index = 0; index < texto.length; index++) {
        atual = texto.substring(index,index+1)
        if (atual != ' ') {
        for (let x = 0; x < alfabeto.length; x++) {
        if (atual == alfabeto[x]) {
            encriptado = encriptado +  alfabeto[modulo((x + chave), alfabeto.length)];
        }      
        } 
    } else {
        encriptado = encriptado + ' ';
    } 
    }  
    } else {
        for (let index = 0; index < texto.length; index++) {
            atual = texto.substring(index,index+1)
            if (atual != ' ') {
            for (let x = 0; x <= alfabeto.length; x++) {
            if (atual == alfabeto[x]) {
                encriptado = encriptado +  alfabeto[modulo((x - chave), alfabeto.length)];
            }      
            } 
        } else {
            encriptado = encriptado + ' ';
        } 
        }  
        
    }
    
return encriptado
}
textoOriginal= 'ab';
encriptar = true
decriptar = false
console.log("Encriptando...")
textoEncriptado = CifraDeCesar(textoOriginal,6,encriptar);
console.log(CifraDeCesar(textoOriginal,6,encriptar));
console.log("")
console.log("Decriptando...")
console.log("Buscando Solução...")
for (let index = 1; index <= 25; index++) {
    console.log(CifraDeCesar(textoEncriptado,index,decriptar));
    
}
