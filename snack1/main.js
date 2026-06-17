const biciDaCorsa = [
    {nome: 'Cannondale Synapse Carbon 4', pesoKg: 9 },
    {nome: 'BMC Roadmachine Two', pesoKg: 8.8},
    {nome: 'Ribble Allroad SLR', pesoKg: 8.75},
    {nome: 'Focus Paralane 8.9', pesoKg: 8.6},
    {nome: 'Giant Defy Advanced 0', pesoKg: 8.32},
    {nome: 'Canyon Endurace CF SLX 7 Di2', pesoKg: 8.18},
    {nome: 'Cube Agree C62 Pro', pesoKg: 7.9},
];

const biciPiuLeggera = biciclette => {
    let output;

    for (const bici of biciDaCorsa) {
        if (output === undefined || bici.pesoKg < output.pesoKg) output = bici;
    }

  return output;
};


    console.log(biciPiuLeggera(biciDaCorsa)); 