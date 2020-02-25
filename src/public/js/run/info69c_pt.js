//Capa
nomeCarga = `Manual Carga -  OBD0069<br />Golf Antigo Immo 1 - Programação de Chaves e Adaptação da ECU`;
revCarga = `Rev. 0`;
dataManual = `Dezembro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de chaves via OBD: Permite programar até 8 chaves no mesmo veículo sem a necessidade de ter uma chave válida.`,
`Adaptação da ECU via OBD.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Golf 1.6`,
years: `1995 a 1999`
},
{
manufacturer: `VW`,
model: `Golf 1.8`,
years: `1995 a 1999`
},
{
manufacturer: `VW`,
model: `Golf 2.0`,
years: `1995 a 1999`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID 33 - VW (T33).`, 
image: `/images/Transponders/T33 dedicado VW.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na posição F5.`, 
ballon: `O slot do veículo está localizado na posição F5.`, 
image: `/images/Tomada de Diagnostico/Carro/F5.jpg`},
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
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
