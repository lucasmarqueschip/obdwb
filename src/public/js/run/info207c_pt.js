//Capa
nomeCarga = "Programação de chaves de presença Ford Pats 6";
revCarga = "Rev. 3";
dataManual = "Fevereiro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagamento com reprogramação de 2 chaves de presença para o veículo.`,
`Programação de até 4 chaves de presença para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Focus 1.6",
years: "2008 a 2013"
},
{
manufacturer: "Ford",
model: "Focus 2.0",
years: "2008 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Veículo referente a aplicação da carga", 
description: "A carga só atende ao modelo indicado abaixo. <br />(imagem meramente ilustrativa)<br /><br /><br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0207- Ford Pats 6 Focus 2008 2013/Imágen-posterior-del-Ford-Focus-2010.jpg"},

{title: "Chave de presença utilizada", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/Chave Ford Focus keyless .jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição A4.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},

{title: "Procedimento para programação do proximity via OBD", 
description: "Procedimento para a realização do passo da programação e do passo da adição de chaves de presença.<br /><br />", 
ballon: "Retire a lâmina do controle e a insira na ignição.", 
image: "/images/Chaves e Telecomandos/slot ford focus.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação das chaves de presenças`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Focus`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a adição de novas chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Focus`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
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
`Repita o procedimento.`,]
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

{ label: `Incode: ****** Outcode:`,
screens: [
`&nbsp;`,
`Incode:&nbsp;******`,
`Outcode:`,
`<br />`,
],
causes: [
`As tentativas de acesso ao veículo falharam.`,],
solutions: [
`É necessário contato com o suporte para obter o Outcode. Obs: Não se deve desligar a ignição nesse processo pois o código será alterado.`,``,]
},

{ label: `Use cabo A9!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Use&nbsp;cabo&nbsp;A9!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo utilizado não está correto.`,],
solutions: [
`Conecte o cabo A9 e repita o procedimento`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
` O transponder utilizado não é válido.`,` O transponder pode não estar dedicado corretamente para o veículo.`,],
solutions: [
` Utilize um transponder compatível com o veículo.`,]
},

{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
` O transponder utilizado não é válido.`,` O transponder pode não estar dedicado corretamente para o veículo.`,``,],
solutions: [
` Utilize um transponder compatível com o veículo.`,``,``,]
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

{ label: `Acesso Negado Aguarde 5:00 min Para Repetir`,
screens: [
`&nbsp;Acesso&nbsp;&nbsp;Negado`,
`Aguarde&nbsp;5:00&nbsp;min`,
`&nbsp;&nbsp;Para&nbsp;Repetir`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
