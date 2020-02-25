//Capa
nomeCarga = `Manual Carga -  OBD0092<br />Reset ECU MT27E (Delphi HSFI 2.3 com BCM KM Grande) via Pinça`;
revCarga = `Rev. 1`;
dataManual = `Agosto 2011`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Reset da ECU HSFI 2.3.`,
`Deixa a ECU virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Punto 1.8`,
years: `2002 a 2010`
},
{
manufacturer: `Fiat`,
model: `Stilo 1.8`,
years: `2002 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Existem carros dentre os modelos citados acima que não saem equipados com a ECU HSFI 2.3 com BCM "KM Grande".`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU HSFI 2.3:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/Reset ECU MT27E (Delphi HSFI 2.3).jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de um estilete remova toda borracha de vedação que prende a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/Com auxílio de um estilete.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/Com o auxílio de uma chave de fenda.jpg`},

{title: `Localizando e conectando a pinça na memória 95040/95160:`, 
description: `Observação: Esta carga abrange as ECU's HSFI 2.3 de memórias com 95040 e 95160.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/memória 95040-95160.jpg`},

{title: ``, 
description: `Observação: Esta carga abrange as ECU's HSFI 2.3 de memórias com 95040 e 95160.<br /><br />`, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/O pino 1 da pinça deve.jpg`},

{title: ``, 
description: `Observação: Esta carga abrange as ECU's HSFI 2.3 de memórias com 95040 e 95160.<br /><br />`, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/Pinça conectada na memória.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção: Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.<br /><br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0092 Reset ECU MT27E/Todos os equipamentos conectados.jpg`},
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
{title: `Realizando o reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Punto`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Delphi HSFI com BCM`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:&nbsp;&nbsp;`,
`Memória&nbsp;95160`,
`<br />`,
],
help: `Escolha o modelo da memória: 
95040 ou 95160.
Tecle OK!`
},
{lines: [
`Conecte&nbsp;a&nbsp;pinça`,
`na&nbsp;memória`,
`segundo&nbsp;manual`,
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
`&nbsp;`,
`Operação`,
`Concluida!`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`Gravação!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente.`,``,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Verificar se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo,`,`Remova a memória da placa e realize o procedimento.`,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`ECU ou memória com problema;`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
