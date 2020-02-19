//Capa
nomeCarga = "Programação de telecomandos Fiat CODE2 (OBD)";
revCarga = "Rev. 5";
dataManual = "Janeiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programar os telecomandos dos modelos da linha Fiat citados abaixo.`,
` O número máximo de telecomandos programados por veículos são oito, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Punto 1.4/1.8",
years: "2009 a 2012"
},
{
manufacturer: "Fiat",
model: "Idea 1.4/1.8",
years: "2011 a 2015"
},
{
manufacturer: "Fiat",
model: "Stilo 1.8/2.4",
years: "2001 a 2011"
},
{
manufacturer: "Fiat",
model: "Linea 1.4/1.8/1.9",
years: "2009 a 2012"
},
];
applicationObs = createObs("Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga.", undefined, undefined)



resources = [
{title: "", 
description: "Atenção: Só é possível programar os telecomandos originais que já venham montada na chave<br />"Canivete"<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0185 Programação de telecomandos Fiat CODE2 (OBD)/Exemplos de telecomandos.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo CAN ou cabo Universal + adaptador A3.", 
image: "/images/Acessórios/Cabo CAN.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados fica localizada entre a área A5 e B5.<br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-B5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>FIAT`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FIAT`, `>Telecmd CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecmd CODE 2`, `>Prog. Telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`&nbsp;Prog.&nbsp;Telecmd?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;mobile!`,
`<br />`,
],
help: `Inicialize o aplicativo no dispositivo móvel.`
},
{lines: [
`&nbsp;ATENCAO!&nbsp;Siga`,
`corretamente&nbsp;os`,
`passos&nbsp;descritos`,
`pelo&nbsp;OBDMap&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Aguarde&nbsp;enquanto`,
`&nbsp;nosso&nbsp;servidor`,
`WEB&nbsp;trabalha&nbsp;no`,
`&nbsp;seu&nbsp;veiculo...`,
],
help: ``
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;Parcelas:**/**`,
`Valor&nbsp;do&nbsp;servico`,
`&nbsp;&nbsp;&nbsp;***c&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Saldo total disponível, número de parcelas do serviço, valor a ser cobrado pelo serviço.`
},
{lines: [
`Serao&nbsp;debitados`,
`&nbsp;***c&nbsp;do&nbsp;saldo`,
`&nbsp;&nbsp;&lt;OK&gt;&nbsp;Aceitar`,
`&nbsp;&lt;Volta&gt;&nbsp;Negar`,
],
help: `Créditos a serem debitados do saldo.
<OK> para Confirmar.
<VOLTA> para Cancelar.
`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Continue&nbsp;o`,
`procedimento&nbsp;com`,
`o&nbsp;Cabo&nbsp;A1.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Chassi:*********`,
`********`,
`Confirma&nbsp;Chassi?`,
`&lt;VOLTA&gt;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `<OK> Para prosseguir.
<VOLTA> Para corrigir.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`<br />`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Pressione&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;Telecomando!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Tecle <OK> para programar mais e volte ao Passo 18, ou tecle <VOLTA> para finalizar o procedimento.`
},
{lines: [
`<br />`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
