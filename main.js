
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