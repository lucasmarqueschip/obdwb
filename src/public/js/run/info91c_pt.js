//Capa
nomeCarga = `Manual Carga -  OBD0091<br />Reset ECU Fiat ME 7.9.6 com Final 104/431/626`;
revCarga = `Rev. 2`;
dataManual = `Maio 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Resetar a ECU ME7.9.6`,
`Reseta as ECU's ME7.9.6 com finais 626, 104 e 431, deixando a mesma virgem, pronta para se codificar com um novo veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Doblo 1.3`,
years: `2002 a 2006`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0 16V`,
years: `2002 a 2006`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 16V`,
years: `2002 a 2006`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0 16V`,
years: `2002 a 2006`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.3 16V`,
years: `2002 a 2006`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Existem carros dentre os modelos citados acima que não saem equipados com a ECU ME7.9.6.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Identificando e desmontando a ECU ME7.9.6:`, 
description: `Observação: Esta carga abrange as ECU's ME7.9.6 com os finais 104, 626 e 431.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Identificando e desmontando a ECU ME7.9.6.jpg`},

{title: ``, 
description: `Observação: Esta carga abrange as ECU's ME7.9.6 com os finais 104, 626 e 431.<br />`, 
ballon: `Utilize uma chave torx para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Desmontando a ECU ME7.9.6.jpg`},

{title: ``, 
description: `Observação: Esta carga abrange as ECU's ME7.9.6 com os finais 104, 626 e 431.<br />`, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Desmontando a ECU ME7.9.6 2.jpg`},

{title: `Localizando e conectando a pinça na memória 95080:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Localizando e conectando a pinça na memória 95080.jpg`},

{title: ``, 
description: ``, 
ballon: `Ao encaixar a pinça na memória e o excesso de solda dos pontos indicado na foto atrapalhar, remova-o utilizando um ferro de solda.`, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Localizando e conectando a pinça na memória 95080 2.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Localizando e conectando a pinça na memória 95080 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Localizando e conectando a pinça na memória 95080 4.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a ECU.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0091 Reset ECU Fiat Me7.9.6/Todos os acessórios conectados.jpg`},
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
{title: `Resetando a ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Doblo`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.6`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Final&nbsp;104`,
`<br />`,
],
help: `Selecione o final da ECU ME7.9.6: 
104, 431 ou 626. Tecle OK!`
},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95080&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
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
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou ECU com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Verificar se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
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
`Mau contato na pinça com a memória,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
