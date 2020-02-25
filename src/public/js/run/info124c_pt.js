//Capa
nomeCarga = `Manual Carga -  OBD0124<br />Geração de Chaves Denso Kawasaki`;
revCarga = `Rev. 1`;
dataManual = `Maio 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar chaves para motocicletas Kawasaki que utilizam a central Denso.`,
`Para realizar a geração de chaves é necessário retirar a central da motocicleta e realizar um corte na parte de trás do módulo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Kawasaki`,
model: `Z750R`,
years: `2010 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Para que a carga funcione o modelo da ECU deve ser:  21175-0255 (112100-5600).`, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder TPX2 Virgem. (Vidro)`, 
image: `/images/Transponders/TPX2.jpg`},

{title: `Chave utilizada:`, 
description: ``, 
ballon: `Chave já montada com o transponder.`, 
image: `/images/Chaves e Telecomandos/Chave Kawasaki.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Chave Kawasaki CERTO.jpg`},

{title: `Identificando a central 21175-0255:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Identificando a central 21175-0255.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Identificando a central 21175-0255 2.jpg`},

{title: `Identificando o local que será cortado na central:`, 
description: `Para ter acesso à memória 93C66, deve-se fazer um corte quadrado no módulo como mostra a foto, com um ferro de solda e uma espátula de plástica. Tenha o cuidado para não danificar a memória, a profundidade do corte deve ter no máximo 2mm.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Identificando o local a ser cortado.jpg`},

{title: `Identificando a memória 93C66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Identificando memória 93C66.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Identificando memória 93C66 2.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Conectando a pinça.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Pinça conectada.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça na memória,<br />4. Conecte a pinça ao OBDMap.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0124 Geração de transponder (TPX2) Kawasaki ECU Denso 21175-0255/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Kawasaki Motocicletas`], help: `Tecle OK`, menu: 1000},
{lines: [`Z750`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Denso 21175-0255`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça`,
`na&nbsp;memória&nbsp;93C66`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Insira&nbsp;o&nbsp;transponder`,
`TPX2&nbsp;VIRGEM`,
`no&nbsp;módulo!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programação`,
`Concluída!`,
`<br />`,
],
help: `A chave foi gerada para a motocicleta com sucesso. Para gerar mais chaves será necessário realizar o procedimento novamente.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Transpoder bloqueado! Utilize transp. TPX2 virgem!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;bloqueado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já está programado,`,`O transponder utilizado não é TPX2 virgem.`,``,],
solutions: [
`Verifique o transponder que está sendo utilizado,`,`Utilizar transponder TPX2 virgem,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é TPX2.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,``,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Módulo ou memória com problema.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro na leitura da memoria!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`da&nbsp;memória!`,
`<br />`,
],
causes: [
`A pinça não está conectada corretamente na memória.`,`ECU ou memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro na gravacao do transponder!`,
screens: [
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o TPX2.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder TPX2. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
