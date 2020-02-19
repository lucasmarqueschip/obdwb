//Capa
nomeCarga = "Programação de chaves Ford Truck Pats 2 Diesel Tipo 3";
revCarga = "Rev. 3";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar e Programar até 4 chaves no sistema PATS (são necessário no mínimo 2 chaves para o procedimento).`,
`<obs>`,
`Observação:`,
`O transponder utilizado deve ser ID4D-60 somente o de vidro.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Cargo 2429",
years: "2013 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID4D60 (T32) de Vidro.", 
image: "/images/Transponders/ID4D-60.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Acessórios/Adaptador DD-FTV01.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 mais DD-FTV01.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizado na posição B4.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Caminhão/B4.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>Pats 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 2`, `>Diesel T3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diesel T3`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Use&nbsp;o&nbsp;transp.`,
`ID4D-60&nbsp;de&nbsp;`,
`VIDRO!&nbsp;VEJA`,
`O&nbsp;MANUAL.&nbsp;&lt;OK&gt;`,
],
help: `Utilize o transponder ID4D60 (T32) de VIDRO.`
},
{lines: [
`Utilize&nbsp;o&nbsp;`,
`Adaptador&nbsp;A1&nbsp;+`,
`DD-FTV01`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`&nbsp;`,
`Tenha&nbsp;em&nbsp;maos&nbsp;02`,
`&nbsp;&nbsp;chaves&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
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
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
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
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;10&nbsp;Minutos`,
`Tempo&nbsp;-&nbsp;10&nbsp;Min.`,
`<br />`,
],
help: `Aguarde 10 minutos.`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap apaga as chaves antigas do veículo.`
},
{lines: [
`Minimo&nbsp;De&nbsp;Chaves`,
`Requeridas&nbsp;apos`,
`&nbsp;o&nbsp;Apagamento:`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*`,
],
help: `Selecione a quantidade de chaves a serem programadas. Mínimo 2 chaves.`
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`Insira&nbsp;ligue&nbsp;e`,
`desligue&nbsp;a(s)&nbsp;*`,
`chave(s).`,
`Em&nbsp;seguida&nbsp;`,
`teste&nbsp;a&nbsp;partida&nbsp;`,
`com&nbsp;todas&nbsp;as&nbsp;`,
`chaves.&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
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
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza o cabo universal, adaptador A1 e Adaptador DD-FTV01.`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O veículo está imobilizado.`,`O veículo está fora da aplicação.`,`O veículo está com algum defeito elétrico.`,],
solutions: [
`Tente novamente.`,`Verifique a aplicação.`,`Entre em contato com o suporte.`,]
},

{ label: `Operacao com Avaria!`,
screens: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;com&nbsp;Avaria!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,],
solutions: [
`Entre em contato com o suporte`,``,]
},

{ label: `Modo de Acesso Codificado Nao Suportado!!!`,
screens: [
`&nbsp;Modo&nbsp;de&nbsp;Acesso`,
`&nbsp;Codificado&nbsp;Nao`,
`&nbsp;&nbsp;Suportado!!!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,],
solutions: [
`Entre em contato com o suporte`,``,``,``,]
},

{ label: `Operacao Sem Exito!`,
screens: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sem&nbsp;Exito!`,
`<br />`,
],
causes: [
`Veículo com condições incorretas.`,``,``,``,],
solutions: [
`Entre em contato com o suporte`,``,``,``,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
