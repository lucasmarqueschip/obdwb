//Capa
nomeCarga = "Programação de Chaves e Telecomandos GM6 via OBD (Captiva 08-14)";
revCarga = "Rev. 3";
dataManual = "Julho 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 4 chaves para os veículos da aplicação.`,
` Programação de telecomando para os veículos da aplicação.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Captiva 2.4",
years: "2008 a 2014"
},
{
manufacturer: "GM",
model: "Captiva 3.0",
years: "2008 a 2014"
},
{
manufacturer: "GM",
model: "Captiva 3.6",
years: "2008 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Identificação do telecomando e do transponder", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) dedicado para GM.", 
image: "/images/Transponders/PCF7936 dedicado para GM (2).jpg"},

{title: "", 
description: "", 
ballon: "Telecomando", 
image: "/images/Chaves e Telecomandos/Telecomando Captiva.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A8. Necessário para realizar a programação de chaves e telecomando.", 
image: "/images/Acessórios/Adaptador A8.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A8 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 6 Captiva`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6 Captiva`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
help: `As chaves que não forem apresentadas neste procedimento ficarão apagadas.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;0*/04`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chaves`,
`<br />`,
],
help: `Selecione o número de chaves desejadas, de duas a 4 chaves.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Aguarde&nbsp;10&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;minutos...`,
`<br />`,
],
help: `Aguarde 10 minutos enquanto o
OBDMap faz a liberação do
sistema.
OBS: A luz do code deve apagar
com o passar do tempo, (no fim
dos 10 minutos).`
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
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Início do procedimento para apresentação de chaves.`
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
help: `Repetir o procedimento a partir do Passo 12 com cada chave que deseja programar.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Programação concluída com sucesso se
as chaves foram apresentadas
corretamente segundo o procedimento.`
},
]
}, {title: `Realizando a programação de telecomandos`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme6 Captiv`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme6 Captiv`, `>Prog. telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;Utilize&nbsp;cabo`,
`&nbsp;universal&nbsp;+&nbsp;A8`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Aperte&nbsp;junto&nbsp;os`,
`&nbsp;&nbsp;2&nbsp;botoes&nbsp;do`,
`telecomando&nbsp;por`,
`&nbsp;&nbsp;7&nbsp;seg.&nbsp;&lt;OK&gt;`,
],
help: `Pressione e segure juntamente os dois botões do telecomando por 7 segundos ou até apitar o alarme.
OBS.: Para programar mais de 1 telecomando, pressione todos os desejados nesta tela, sem apertar OK, após todos os telecomandos programados aí sim apertar OK.`
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
`O veículo não corresponde à aplicação desta carga.`,],
solutions: [
`Verificar aplicação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
