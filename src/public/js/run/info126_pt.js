//Capa
nomeCarga = "Programação Alarme JAC ( J2 / J3 / J5 / J6 )";
revCarga = "Rev. 3";
dataManual = "Julho 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar os telecomandos dos modelos da linha JAC citados abaixo.`,
`O número máximo de telecomandos programados por veículos são três, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "JAC",
model: "J2 1.4",
years: "2012 a 2013"
},
{
manufacturer: "JAC",
model: "J3 1.4",
years: "2009 a 2012"
},
{
manufacturer: "JAC",
model: "J5 1.5",
years: "2009 a 2012"
},
{
manufacturer: "JAC",
model: "J6 2.0",
years: "2009 a 2012"
},
];
applicationObs = createObs("Observações:", "- Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga.", "- Só é possível programar os telecomandos originais, e os telecomandos existentes serão apagados automaticamente.")



resources = [
{title: "", 
description: "", 
ballon: "Exemplo de telecomando.", 
image: "/images/Chaves e Telecomandos/Chaves Jac.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo JC. Utilizado para realizar a programação do telecomando via diagnóstico.", 
image: "/images/Acessórios/Cabo JC.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados acima fica localizada na área A5.<br /><br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação dos telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Jac`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Jac`, `>Telecomando 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomando 1`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Faca&nbsp;o`,
`&nbsp;&nbsp;procedimento`,
`&nbsp;&nbsp;com&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;desligada!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`ATENCAO!&nbsp;Fechar`,
`todas&nbsp;as&nbsp;portas!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecomando:1`,
`<br />`,
`<br />`,
],
help: `Escolha o números de telecomandos que deseja programar. Neste exemplo vamos programar 1 telecomando.`
},
{lines: [
`&nbsp;`,
`Press&nbsp;2x&nbsp;&nbsp;&nbsp;e&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`telecmd&nbsp;&nbsp;&lt;30&gt;`,
`<br />`,
],
help: `Pressione duas vezes o botão lock e duas vezes o botão unlock do telecomando no tempo de 30 segundos. Assim o telecomando será programado.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecomando:2`,
`<br />`,
`<br />`,
],
help: `Escolha o números de telecomandos que deseja programar. Neste exemplo vamos programar 2 telecomandos.`
},
{lines: [
`&nbsp;`,
`Press&nbsp;&nbsp;&nbsp;telecmd1&nbsp;`,
`&nbsp;&nbsp;&nbsp;telecmd2&nbsp;&lt;30&gt;`,
`<br />`,
],
help: `Pressione o botão unlock de um dos
telecomandos e o botão lock do outro
telecomando no tempo de 30 segundos.
Assim os dois telecomandos serão
programados.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`N.&nbsp;Telecomando:3`,
`<br />`,
`<br />`,
],
help: `Escolha o números de telecomandos que deseja programar. Neste exemplo vamos programar 3 telecomandos.`
},
{lines: [
`&nbsp;`,
`Press&nbsp;&nbsp;&nbsp;&nbsp;,&nbsp;nos&nbsp;`,
`&nbsp;&nbsp;3&nbsp;telecmd&nbsp;&lt;30&gt;`,
`<br />`,
],
help: `Pressione os botões lock e unlock de cada telecomando no tempo de 30 segundos. Assim os três telecomandos serão programados.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
