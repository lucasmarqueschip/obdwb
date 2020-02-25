//Capa
nomeCarga = `Manual Carga -  OBD0015<br />Alarme GM2`;
revCarga = `Rev. 1`;
dataManual = `Abril 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha do telecomando via pinça.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `2002 a 2008`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2008`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2008`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `2002 a 2008`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `2002 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(`Aplica-se aos veículos acima citados que possuem o sistema de imobilizador OPEL2.`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Estilete. Utilizado para limpar a resina sobre os pinos da memória.`, 
image: `/images/Acessórios/Estilete.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Procedimento em bancada:`, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Módulo de conforto`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/imobilizador OPEL2.jpg`},

{title: ``, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Todos os acessórios`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/Todos os acessorios.jpg`},

{title: ``, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Memória soic`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/Localizando memoria.jpg`},

{title: ``, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Memória soic`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/Localizando memoria2.jpg`},

{title: ``, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Faça uma raspagem com um estilete nos terminais da mesma, para que o verniz que protege a placa contra oxidações não isole os terminais da pinça dos terminais da memória soic.`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/Rapagem placa.jpg`},

{title: ``, 
description: `Para realizar a leitura de senha do telecomando é necessário que o módulo de conforto seja retirado do veículo para que o procedimento seja feito em bancada.`, 
ballon: `Conecte a pinça na memória soic.`, 
image: `/images/Funções Específicas/OBD0015 Leitura de Módulo de Conforto Alarme GM2/Pinca Conectada.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Leitura de senha no módulo de alarme:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme2`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha, a mesma pode ser utilizada para apagar e programar o telecomando.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`Módulo de alarme ou memória com problema.`,`Arquivo corrompido,`,`Pinça foi conectada em outro componente.`,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais da memória,`,`Verificar se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória.`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
