//Capa
nomeCarga = "Leitura de Senha ME7.9.9 (Astra,Vectra e Zafira 2011 a 2012) via OBD";
revCarga = "Rev. 3";
dataManual = "Janeiro 2020";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha`,
`Realiza a leitura de senha via diagnóstico. Com a senha lida, pode ser realizada a programação de chaves utilizando a carga OBD0045 -  Opel 2 Completo da carga básica.`,
`Gravar chassi.`,
`Permite gravar o chassi do veículo via diagnóstico. Nos casos de troca de ECU defeituosa, esta carga poderá ser usada para fazer o casamento da informação do chassi.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 2.0 (Flex)",
years: "2011 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2011 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2011 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0 (Flex)",
years: "2011 a 2012"
},
];
applicationObs = createObs("Observação: Esta carga realiza o procedimento apenas nos veículos que possuem o ano de fabricação 2011 e 2012 (não é confiável ver a numeração do chassi pelo vidro do veículo).", undefined, undefined)



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Astra e Zafira está localizada na área F9.<br />A tomada de diagnóstico do veículo Vectra está localizada na área A5.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5 - F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Vectra`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.9`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 6 - Vectra 2011`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a Gravação de chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Vectra`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.9.9`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
