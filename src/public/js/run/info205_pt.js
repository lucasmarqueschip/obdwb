//Capa
nomeCarga = "Programação de chaves Ford Pats 5 (Transit 09-13)";
revCarga = "Rev. 4";
dataManual = "Fevereiro 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagamento com reprogramação de 2 chaves para o veículo.`,
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Transit 2.4",
years: "2009 a 2011"
},
{
manufacturer: "Ford",
model: "Transit 2.2",
years: "2012 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "Utilize um transponder ID 4D63 DST+ dedicado para Ford.", 
image: "/images/Transponders/ID 4D63 DST Dedicado para Ford.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição A4.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 5`, `>TRANSIT 09-13`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Programar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK!`
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
`Sao&nbsp;necessarias`,
`&nbsp;2&nbsp;chaves&nbsp;para`,
`&nbsp;&nbsp;&nbsp;realizar&nbsp;o`,
`&nbsp;procedimento!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 DST+
dedicado para Ford.`
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
help: `Pode ser que não tenha sido possível o
acesso, sendo assim serão feitas mais
algumas tentativas (Passo 18).`
},
{lines: [
`&nbsp;`,
`Desl.&nbsp;e&nbsp;ligue&nbsp;a&nbsp;`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave a ser programada, e tecle OK.`
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
`Desligue&nbsp;e&nbsp;`,
`&nbsp;&nbsp;ligue&nbsp;a&nbsp;chave!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente
programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluido!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com
sucesso. Desconecte o cabo da tomada
de diagnose.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Poderão ser feitas até 16 tentativas de
acesso.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde`,
`&nbsp;&nbsp;10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarde 10 segundos e retorne ao passo
10.`
},
]
}, {title: `Realizando a adição de novas chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 5`, `>TRANSIT 09-13`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Adicionar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;`,
`ID4D&nbsp;DST+&nbsp;Ford`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 DST+
dedicado para Ford.`
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
help: `Pode ser que não tenha sido possível o
acesso, sendo assim serão feitas mais
algumas tentativas (Passo 13).`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;e&nbsp;`,
`&nbsp;&nbsp;ligue&nbsp;a&nbsp;chave!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente
programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Proc.&nbsp;Concluido!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com
sucesso. Desconecte o cabo da tomada
de diagnose.`
},
{lines: [
`&nbsp;`,
`Tentativa&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Poderão ser feitas até 16 tentativas de
acesso.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde`,
`&nbsp;&nbsp;10&nbsp;segundos!`,
`<br />`,
],
help: `Aguarde 10 segundos e retorne ao passo
8.`
},
{lines: [
`&nbsp;`,
`Incode:&nbsp;******&nbsp;`,
`Outcode:`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
` Repita o procedimento.`,]
},

{ label: `Acesso Negado Aguarde 5:00 min Para Repetir`,
screens: [
`&nbsp;Acesso&nbsp;&nbsp;Negado`,
`Aguarde&nbsp;5:00&nbsp;min`,
`&nbsp;&nbsp;Para&nbsp;Repetir`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Aguarde 5 minutos e repita o procedimento.`,]
},

{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Aguarde 5 minutos e repita o procedimento.`,]
},

{ label: `Veiculo fora da Aplicacao!`,
screens: [
`&nbsp;`,
`Veiculo&nbsp;fora&nbsp;da&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aplicacao!`,
`<br />`,
],
causes: [
`O veículo não faz parte da aplicação da carga.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`O transponder utilizado não é válido.`,],
solutions: [
`Utilize um transponder compatível com o veículo.`,]
},

{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`O transponder pode não estar dedicado corretamente para o veículo.`,],
solutions: [
`Verificar detalhes no manual de dedicação OBD0206 - Dedicação do transponder ID4D-63 e ID4D DST+ para Ford.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
