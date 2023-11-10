/* 
  const persona = {
    nome: 'Luca',
    eta: 42,
    luogoDiNascita: {
        luogoDiNascita: 'Roma',
        annoDiNascita: 1981,
    },
    residenza: {
        citta: 'Cagliari',
        via: 'Piazza Yenne',
        nCivico: 32
    }
};

    const convertiStringa = (object) => {
        let keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        switch (typeof object[key]) {
            case 'number':
                object[key] = object[key].toString();
                break;
            case 'object':
                convertiStringa(object[key]);
                break;
        }
    }
   return object;
};
    
  const conversione = convertiStringa(persona);
  console.log(conversione);
 */

 /*  /------------------------esercizio2-------------------------------/ */
 /* return num === 1 ? 1 : num * calcolaFattoriale(num -1); */
/*  const calcolaFattoriale = (num) => {
  let fattoriale =1;
  for(let i=num; i>0; i--){
    fattoriale = fattoriale*i;
  }
  return fattoriale;
 }  
   
    
 
 
 
 window.addEventListener('load', () =>{

    const inputUtente = document.querySelector('input');
    const calcolaBtn = document.querySelector('button');
    const prisultato = document.getElementById('risultato');

    calcolaBtn.addEventListener('click',() => {
      const numero = inputUtente.valueAsNumber;
      const fattoriale = calcolaFattoriale(numero);
    prisultato.innerText= `il fattoriale di${numero} e uguale a ${fattoriale}`;
    });
 }); */

 /* -----------------esercizio3---------------------------------------------- */
 const italy = {
	nome: 'Repubblica Italiana',
	bandiera: {
		stile: 'verticale',
		colori: ['rosso', 'verde', 'bianco'],
		forma: 'rettangolo',
	},
	currency: 'euro',
    	popolazione: 50000000,
}

const trasformObjIntoHTMLList=(obj) =>{
    const ul = document.createElement('ul');
     const keys = Object.keys(obj);
     for(let i=0; i<keys.length; i++){
        const key = keys[i];
        const value = obj[key];
        const li= document.createElement('li');
        li.innerHTML=`${key}; `;
        if((typeof value) !=='object'){
            li.innerHTML += value;
        }else{
            const ul2 = trasformObjIntoHTMLList(value);
            li.append(ul2);
        }
        ul.appendChild(li);
       
          }
          return ul;
        }
     window.addEventListener('load', () =>{
    const ul =trasformObjIntoHTMLList(italy);
    document.body.appendChild(ul);
    
     });