//Capa
nomeCarga = `Manual Carga -  OBD0017<br />Golf Antigo Immo 1- Leitura de Senha`;
revCarga = `Rev. 2`;
dataManual = `Dezembro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no imobilizador via soquete S1.`,
`<obs>`,
`Observação: Esta carga realiza somente a leitura de senha. Para realizar a programação de chaves ou adaptação da ECU, utilize a carga OBD0069.`,

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
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Soquete S1. Realiza leitura de senha em microcontroladores.`, 
image: `/images/Acessórios/Soquete S1.jpg`},

{title: `Desmontando as molduras do veículo:`, 
description: ``, 
ballon: `Remova os parafusos 1 e 2.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova Parafusus.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a capa que protege a caixa de direção.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova CAPA.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a moldura que esconde os parafusos 3 e 4.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova Moldura.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os parafusos 3 e 4.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova parafusos 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o parafuso 5.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova parafuso 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o parafuso 6.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova pafuso 4.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a moldura.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Remova moldura inferior.jpg`},

{title: ``, 
description: ``, 
ballon: `O imobilizador deste veículo encontra-se em um lugar de difícil visualização como mostra a foto abaixo, remova o parafuso que o prende.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Local IMMO.jpg`},

{title: `Identificando e desmontando o imobilizador`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Immo.jpg`},

{title: ``, 
description: ``, 
ballon: `A com auxílio de uma chave de fenda, faça uma alavanca na caixa do imobilizador para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Desmontano IMMO.jpg`},

{title: ``, 
description: ``, 
ballon: `Placa do imobilizador solta da caixa.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Placa IMMO.jpg`},

{title: `Localizando o microcontrolador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0017 Golf 95/PIC immo.jpg`},

{title: `Conectando o Soquete S1 no microcontrolador:`, 
description: ``, 
ballon: `Observe que o soquete só se encaixa em uma posição.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Socket IMMO.jpg`},

{title: ``, 
description: ``, 
ballon: `Soquete S1 conectado. Se necessário, apoiar o dedo sobre o soquete para evitar mau contato.`, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Socket Conectado.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0017 Golf 95/Todos os Equipamentos conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a Leitura da Senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Imob 2 Golf 95`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 2 Golf 95`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
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
`Imobilizador com defeito ou sujeira nos pinos do microcontrolador, `,`Soquete S1 com defeito ou sujeira nos pinos do soquete, `,`Soquete S1 mal encaixado no microcontrolador do imobilizador, `,`Soquete S1 mal encaixado no OBDMap, `,`OBDMap com defeito. `,],
solutions: [
`Verificar o encaixe correto do Soquete S1 no OBDMap e no microcontrolador, `,`Pressionar o soquete com o dedo para melhorar o encaixe no microcontrolador, `,`Fazer limpeza dos pinos do soquete S1 e do microcontrolador, `,`Verificar se existe algum defeito visível no Soquete S1, na dúvida, consulte o suporte técnico. `,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Imobilizador com defeito, `,`Soquete S1 com defeito, `,`Soquete S1 mal encaixado no microcontrolador do imobilizador, `,`Soquete S1 mal encaixado no OBDMap, `,`OBDMap com defeito.`,],
solutions: [
`Verificar o encaixe correto do Soquete S1 no OBDMap e no microcontrolador, `,`Verificar se existe algum defeito visível no Soquete S1, na dúvida, consulte o suporte técnico. `,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
