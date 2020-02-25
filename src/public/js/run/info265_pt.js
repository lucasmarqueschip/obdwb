//Capa
nomeCarga = `Manual Carga -  OBD0265<br />Geração da 1ª Chave Yamaha Imob Moric 1`;
revCarga = `Rev. 1`;
dataManual = `Outubro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Nos casos de perda total de chaves é possivel realizar a geração de um transponder Texas ID60-ID4D, deixando o pronto para dar partida na moto.`,
`As cópias de chaves podem ser realizadas utilizando a carga OBD0155 que faz a clonagem do transponder.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Yamaha`,
model: `BT 1100`,
years: `2005 a 2006`
},
{
manufacturer: `Yamaha`,
model: `FZR`,
years: `2005 a 2006`
},
{
manufacturer: `Yamaha`,
model: `FZ1`,
years: `2006 a `
},
{
manufacturer: `Yamaha`,
model: `FZ6`,
years: `2004 a 2006`
},
{
manufacturer: `Yamaha`,
model: `FZS`,
years: `2005 a 2006`
},
{
manufacturer: `Yamaha`,
model: `XT`,
years: `2004 a 2006`
},
{
manufacturer: `Yamaha`,
model: `XTR`,
years: `2004 a 2006`
},
{
manufacturer: `Yamaha`,
model: `XTX`,
years: `2004 a 2006`
},
{
manufacturer: `Yamaha`,
model: `YZF`,
years: `2003 a 2006`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: ``, 
description: ``, 
ballon: `Ferro de solda.`, 
image: `/images/Acessórios/ferro_de_Solda2.jpg`},

{title: ``, 
description: ``, 
ballon: `Estação de solda. Utilizada para aquecer a borracha de vedação que protege a placa do imobilizador.`, 
image: `/images/Acessórios/Estação de solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Espátula plástica. Utilizada para retirar a borracha de vedação da placa.`, 
image: `/images/Acessórios/Espátula plástica.jpg`},

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
image: `/images/Instrucao Modulo de Transponder/MT - Chave Yamaha CERTO.jpg`},

{title: `Identificando e desmontando o imobilizador Yamaha Moric tipo 1`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Identificação Moric Manualjpg.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Etiqueta Identificação.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Passo 1 - Corte Estilete.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Local dos pontos de Solda.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Local dos pontos de Solda - Copia.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Cabo MCU Soldado.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Todos os Acessorios Conectados.jpg`},

{title: `Vedando o imobilizador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/Colocando silicone.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0265/IMOB ja Fechado com silicone.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a geração do Transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Yamaha`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha`, `>Yamaha Moric 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Yamaha Moric 1`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;Transponder`,
`&nbsp;&nbsp;ID4D&nbsp;Blank!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;Imobilizador!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;Utilize&nbsp;o`,
`&nbsp;&nbsp;&nbsp;Modulo&nbsp;de`,
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;MCU&nbsp;no&nbsp;imob.`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Lendo&nbsp;Imobil.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Insira&nbsp;transp.`,
`&nbsp;ID4D&nbsp;virgem&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;modulo!`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Transponder Bloqueado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`Bloqueado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,``,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},
{ label: `Erro na leitura do Imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador`,
`<br />`,
],
causes: [
`Mau contato ao encaixar o soquete S2 no microcontrolador,`,`Posição incorreta ao encaixar o soquete S2 no microcontrolador.`,],
solutions: [
`Apóie o dedo na base do soquete S2 para evitar o mau contato,`,`Verificar se o pino 1 do soquete S2 coincide com o pino 1 do microcontrolador.`,``,]
},
{ label: `Transponder Incorreto!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incorreto!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro na leitura do transponder! <OK> p/ repetir.`,
screens: [
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
