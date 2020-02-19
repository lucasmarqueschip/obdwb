//Capa
nomeCarga = "Programação de chaves GM Imob6 Tipo 2 (Malibu 10-11)";
revCarga = "Rev. 2";
dataManual = "Outubro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Malibu 2.4",
years: "2010 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Identificação do transponder", 
description: "", 
ballon: "", 
image: ""},

{title: "Observação", 
description: "O cilindro de ignição do veículo Malibu, possui quatro posições. Durante os procedimentos de desligar e ligar a chave, a chave deverá ser girada nas posições 0 e I respectivamente.<br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0222 Programação de chaves Malibu/Cilindro ignição.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A8. Necessário para realizar a programação de chaves e telecomando.", 
image: "/images/Acessórios/Adaptador A8.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A8 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 6 Malibu`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6 Malibu`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;O&nbsp;procedimento`,
`&nbsp;&nbsp;leva&nbsp;aprox.`,
`15&nbsp;minutos.&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;A&nbsp;bateria&nbsp;deve`,
`estar&nbsp;carregada.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Cuidado, se a bateria estiver fraca pode causar problemas no veículo. Tecle OK.`
},
{lines: [
`&nbsp;&nbsp;Utilize&nbsp;cabo`,
`&nbsp;universal&nbsp;+&nbsp;A8`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;Reapres.&nbsp;todas`,
`as&nbsp;chaves&nbsp;neste`,
`&nbsp;&nbsp;procedimento`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;**/04`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chaves`,
`<br />`,
],
help: `Selecione o numero de chaves a ser programadas. Tecle OK!`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;na&nbsp;posicao&nbsp;I`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;.`,
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
`&nbsp;`,
`Aguarde&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minutos...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;na&nbsp;posicao&nbsp;I`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;.`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;5&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;5&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: `Se for a última chave, vá para o passo 23.
Senão, vá para o passo 19.`
},
{lines: [
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;c/&nbsp;prox.&nbsp;CH&nbsp;na`,
`&nbsp;posicao&nbsp;I&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;5&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde&nbsp;5&nbsp;seg...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`&nbsp;&nbsp;&nbsp;&nbsp;60&nbsp;seg.`,
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
{lines: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
help: `Depois de desconectar o OBDMap, testes todas as chaves programadas.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A8,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Veículo não compatível com a aplicação. `,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
