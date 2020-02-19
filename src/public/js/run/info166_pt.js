//Capa
nomeCarga = "Programação de Chaves Honda Civic CR-V (2013 - 2014)";
revCarga = "Rev. 10";
dataManual = "Novembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Identificação da chave que será programada no veículo, se esta é uma chave válida ou não;`,
`Programação de até 8 chaves no veículo.`,
`<obs>`,
`Observação: `,
`É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam reprogramadas, elas não funcionarão no veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Honda",
model: "Civic 1.8",
years: "2012 a 2016"
},
{
manufacturer: "Honda",
model: "Civic 2.0",
years: "2012 a 2016"
},
{
manufacturer: "Honda",
model: "CR-V 2.0",
years: "2012 a 2014"
},
{
manufacturer: "Honda",
model: "City 1.5",
years: "2016 a 2017"
},
{
manufacturer: "Honda",
model: "Fit 1.5",
years: "2015 a 2017"
},
{
manufacturer: "Honda",
model: "HR-V",
years: "2016 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilizar chave original, fornecida pela concessionária.", 
image: "/images/Chaves e Telecomandos/Chave Honda.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área B5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/B5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Honda`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Honda`, `>Imob1 T5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob1 T5`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Utilize&nbsp;chave&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;original!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`
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
`&nbsp;&nbsp;&nbsp;Desligue&nbsp;a`,
`&nbsp;&nbsp;chave&nbsp;em&nbsp;9s`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
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
`com&nbsp;a&nbsp;mesma`,
`&nbsp;&nbsp;&nbsp;chave!!!`,
`<br />`,
],
help: `Utilize a mesma chave.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;9s!`,
`<br />`,
],
help: ``
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
`&nbsp;&nbsp;&nbsp;Desligue&nbsp;a`,
`&nbsp;&nbsp;chave&nbsp;em&nbsp;9s`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
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
`com&nbsp;a&nbsp;proxima`,
`chave!!!`,
`<br />`,
],
help: `Utilize a próxima chave.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;9s!`,
`<br />`,
],
help: ``
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
`&nbsp;&nbsp;&nbsp;Desligue&nbsp;a`,
`&nbsp;&nbsp;chave&nbsp;em&nbsp;9s`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
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
`com&nbsp;a&nbsp;mesma`,
`&nbsp;&nbsp;&nbsp;chave!!!`,
`<br />`,
],
help: `Utilize a mesma chave.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;9s!`,
`<br />`,
],
help: ``
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
`&nbsp;&nbsp;&nbsp;Desligue&nbsp;a`,
`&nbsp;&nbsp;chave&nbsp;em&nbsp;9s`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
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
`com&nbsp;a&nbsp;mesma`,
`&nbsp;&nbsp;&nbsp;chave!!!`,
`<br />`,
],
help: `Utilize a mesma chave.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;9s!`,
`<br />`,
],
help: ``
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
`&nbsp;&nbsp;&nbsp;Desligue&nbsp;a`,
`&nbsp;&nbsp;chave&nbsp;em&nbsp;9s`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
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
`com&nbsp;a&nbsp;mesma`,
`&nbsp;&nbsp;&nbsp;chave!!!`,
`<br />`,
],
help: `Utilize a mesma chave.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;em&nbsp;9s!`,
`<br />`,
],
help: ``
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
`Numero&nbsp;de`,
`Chaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
]
}, {title: `Realizando o teste de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [``, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Honda`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Honda`, `>Imob1 T5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob1 T5`, `>Testar chave?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`&nbsp;`,
`Chave&nbsp;ja&nbsp;esta`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;programada!`,
`<br />`,
],
help: `Nesse momento podem aparecer as seguintes mensagens:
Chave não programada - A chave é válida para ser programada.
Chave já está programada - A chave é válida e já está programada.
Chave Incorreta - A chave não é válida.
Erro na leitura da chave - Consulte suporte.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`O imobilizador não corresponde à aplicação da carga.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi estourado.`,],
solutions: [
`Repita o procedimento.`,]
},

{ label: `Chave incorreta!`,
screens: [
`&nbsp;`,
`Chave&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A chave utilizada é incompatível com o veículo.`,],
solutions: [
`Verificar se a chave é original.`,]
},

{ label: `Erro na leitura da chave!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;da&nbsp;chave!`,
`<br />`,
],
causes: [
`A antena pode estar com problemas,`,`O carro pode estar com problemas,`,`O transponder pode não ser válido.`,``,``,``,],
solutions: [
`Checar a parte elétrica e componentes do carro, principalmente antena e imobilizador,`,`Confirmar transponder utilizado.`,]
},

{ label: `Chave ja programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`programada!`,
`<br />`,
],
causes: [
`A chave é válida e está programada.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
