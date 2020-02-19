//Capa
nomeCarga = "Geração de Chaves BMW Immo M1";
revCarga = "Rev. 4";
dataManual = "Fevereiro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programa até 10 chaves para as motos BMW via diagnose.`,
``,
`Nesse procedimento só poderá ser feito a geração de uma chave de cada vez, sendo que, não podem ser apagadas as chaves já existentes na motocicleta. Caso a quantidade de chaves programadas na motocicleta já esteja no limite, à geração não poderá ser realizada.`,
`<obs>`,
`Observação:`,
` Certifique se que a bateria da motocicleta esteja com a carga completa.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "BMW",
model: "S1000RR",
years: "2010 a 2012"
},
{
manufacturer: "BMW",
model: "F800GS",
years: "2012 a 2012"
},
{
manufacturer: "BMW",
model: "R1200GS",
years: "2008 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder PCF7936 - ID46 - Virgem!", 
image: "/images/Transponders/Transponder PCF7936 Carvão.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo BMW.", 
image: "/images/Acessórios/Cabo BMW.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Acessórios/Obdmap mais módulo de transponder mais cabo BMW.jpg"},

{title: "Localizando a tomada de diagnóstico da motocicleta:", 
description: "O conector de diagnóstico da motocicleta fica localizado na área B2.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Moto/B2 Moto.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`BMW Motorrad`], help: `Tecle OK`, menu: 1000},
{lines: [`S1000RR`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Motronic`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito na motocicleta, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Verificar se a bateria está carregada,`,`Desconectar todo o aparelho, aguardar 10 segundos e refazer o procedimento,`,`Verificar parte elétrica da motocicleta, fusíveis, etc,`,`Verificar se utiliza o cabo BMW e módulo de transponder,`,`Verificar a boa conexão do cabo BMW com a motocicleta, do módulo de transponder com o cabo BMW e do módulo de transponder com o OBDMap. Apertar os parafusos fixadores,`,`Verificar se o software do OBDMap está na última versão.`,]
},

{ label: `Numero de Chaves Excedido!`,
screens: [
`&nbsp;`,
`Numero&nbsp;de`,
`Chaves&nbsp;Excedido!`,
`<br />`,
],
causes: [
`A quantidade de chaves que está programada na motocicleta já está no limite, sendo possível programar no máximo 10 chaves.`,],
solutions: [
`Somente 10 chaves podem ser programadas.`,]
},

{ label: `ECU incorreta!`,
screens: [
`&nbsp;`,
`&nbsp;ECU&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`O sistema não corresponde a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder está bloqueado, ou seja, foi utilizado em outro veículo.`,],
solutions: [
`Utilize transponder PCF7936 virgem.`,]
},

{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
`O transponder está bloqueado, ou seja, foi utilizado em outro veículo.`,],
solutions: [
`Utilize transponder PCF7936 virgem.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi inserido corretamente no módulo,`,`O transponder não é um PCF7936.`,],
solutions: [
`Verifique a correta posição do transponder no módulo,`,`Para verificar o tipo de transponder, utilize a carga básica do módulo de transponder na função IDENTIFICAR.`,]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder foi retirado do módulo durante o procedimento de gravação,`,`Mau contato do cabo BMW com o módulo de transponder ou no módulo de transponder com o OBDMap .`,],
solutions: [
`Verifique a correta posição do transponder no módulo, e não retire o transponder do módulo até aparecer ¨Programação Concluída!¨,`,`Conferir conexão do cabo BMW com o módulo de transponder ou do módulo de transponder com o OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
