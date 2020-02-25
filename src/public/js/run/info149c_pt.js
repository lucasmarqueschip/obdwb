//Capa
nomeCarga = `Manual Carga -  OBD0149<br />Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)`;
revCarga = `Rev. 3`;
dataManual = `Junho 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha de 4 dígitos da ECU ME 7.4.4 via pinça.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Citroen`,
model: `C3 1.4 16v`,
years: `2005 a 2008`
},
{
manufacturer: `Citroen`,
model: `C3 1.6 16V`,
years: `2002 a 2008`
},
{
manufacturer: `Citroen`,
model: `Xsara 1.6 16V`,
years: `2002 a 2005`
},
{
manufacturer: `Peugeot`,
model: `206 1.4 16V`,
years: `2005 a 2008`
},
{
manufacturer: `Peugeot`,
model: `206 1.6 16V`,
years: `2002 a 2008`
},
{
manufacturer: `Peugeot`,
model: `307 1.6 16V`,
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
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU ME 7.4.4`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/ECU ME 7.4.4 (2).jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Etiqueta ECU ME 7.4.4.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Etiqueta ECU ME 7.4.4 passo 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Etiqueta ECU ME 7.4.4 passo 2.jpg`},

{title: `Localizando e conectando a pinça na memória 25C160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Pino 1 da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Pinca.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Todos os equipamentos.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: `Para melhor visualização dos pontos de soldagem, foi separado em Área A e Área B.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/ECU ME 7.4.4 desmontada.jpg`},

{title: ``, 
description: `Para melhor visualização dos pontos de soldagem, foi separado em Área A e Área B.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Localizando pontos de solda.jpg`},

{title: ``, 
description: `Para melhor visualização dos pontos de soldagem, foi separado em Área A e Área B.<br />`, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU (ÁREA A):<br />1=> Fio Preto<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Cinza<br />5=> Fio Verde`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Ponto de soldagem A.jpg`},

{title: ``, 
description: `Para melhor visualização dos pontos de soldagem, foi separado em Área A e Área B.<br />`, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU (ÁREA B):<br />6=> Fio Roxo<br />7=> Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Ponto de soldagem B.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Localizando a memória.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Pino 1 da memória.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0149 - Leitura de senha ECU ME7.4.4 via pinça (Peugeot e Citroen)/Pinca.jpg`},
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
{title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Citroen`], help: `Tecle OK`, menu: 1000},
{lines: [`C3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.4`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
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
`Senha:&nbsp;&nbsp;****`,
`<br />`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`A pinça foi conectada em outro componente (se a placa tiver outro componente),`,`Memória ou Módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do Módulo.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
