//Capa
nomeCarga = "Reset Fiat IAW 4GF (Palio, Punto, Siena, Strada, Doblo) por OBD (modo boot)";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código eletrônico.`,
`Reset da ECU.`,
`Gravação de chassi.`,
``,
`É necessário retirar a ECU do veículo, e em bancada colocar a ECU em modo de boot, ou seja, soldar 2 resistores em sua placa. Após isso o procedimento pode ser feito de 2 formas:`,
`No veículo,`,
`Em bancada, utilizando o Multigiga (item não incluso - contate o departamento de vendas da Chiptronic).`,
``,
`O reset deixa a ECU virgem, pronta para se codificar com um novo veículo. Após o reset da ECU será necessário realizar a gravação de chassi e o procedimento da "roda fônica".`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Doblo 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Idea 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Palio 1.0 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Palio 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Palio Weekend 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Punto 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.0 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Siena Fire 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Strada 1.4 Flex",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Uno Mille Economy 1.0 Flex",
years: "2010 a 2012"
},
];
applicationObs = createObs("Observação: Nem todos os veículos relacionados aos anos citados acima possuem a ECU IAW 4GF. Verifique a etiqueta da ECU para identificá-la.", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Ferro de solda.", 
image: "/images/Acessórios/ferro_de_Solda2.jpg"},

{title: "", 
description: "", 
ballon: "Utilize dois resistores, um de 100 Ohms e outro de 560 Ohms.", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Resistores.jpg"},

{title: "Identificando e desmontando a ECU IAW 4GF:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Identificando a ECU.jpg"},

{title: "", 
description: "", 
ballon: "Utilize uma chave torx para retirar os parafusos da ECU.", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Retirando os parafusos da ECU.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa da ECU.", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Abrindo a ECU.jpg"},

{title: "Localizando os pontos de soldagem dos resistores:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Pontos de soldagem.jpg"},

{title: "", 
description: "", 
ballon: "Incline os resistores caso necessite colocar a tampa pra fazer o procedimento no veículo.", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Resistores na ECU.jpg"},

{title: "", 
description: "", 
ballon: "Caso o procedimento seja feito no veículo, coloque a tampa na ECU. Caso seja feito em bancada não precisa colocar a tampa.", 
image: "/images/Funções Específicas/OBD0109  Reset Fiat IAW 4GF (Pálio, Punto, Siena, Strada, Doblo) por OBD (modo boot)/Colocando a tampa na ECU.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na área A4.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando o reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GF`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},{title: `Gravando o chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GF`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

]},{title: `Lendo o código eletrônico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GF`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de codigo eletronico`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Defeito no carro, parte elétrica,`,`Software do OBDMap desatualizado,`,`ECU com problema,`,`Verificar se a ECU está em modo de boot,`,`Defeito no OBDMap ou cabos.`,``,],
solutions: [
`Verificar parte elétrica do carro, fusíveis, etc,`,`Verificar se o software do OBDMap está na ultima versão,`,`Verificar se os resistores estão soldados nos pontos corretos,`,`Verificar conexão dos cabos.`,]
},

{ label: `Erro de Comunicacao!`,
screens: [
`<br />`,
`Erro&nbsp;de`,
`Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no carro, parte elétrica,`,`Software do OBDMap desatualizado,`,`Defeito no OBDMap, cabos ou equipamento.`,],
solutions: [
`Verificar parte elétrica do carro, fusíveis, etc,`,`Verificar se utiliza cabo universal e adaptador A1,`,`Verificar a conexão do cabo no OBDMap e no conector OBD do veículo,`,`Verificar o estado do cabo universal e do adaptador A1,`,`Verificar se o software do OBDMap esta na última versão.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
