//Capa
nomeCarga = "Opel 2 Completo (chaves e casamento)";
revCarga = "Rev. 7";
dataManual = "Agosto 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do código mecânico e falhas.`,
`Reset da ECU e imobilizador.`,
`Programação da ECU e imobilizador.`,
`Programação de até 5 chaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Astra 1.8",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Astra 2.0",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Astra 2.0 16V",
years: "1998 a 2012"
},
{
manufacturer: "GM",
model: "Blazer 2.4 Flex",
years: "2006 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.0",
years: "2001 a 2010"
},
{
manufacturer: "GM",
model: "Celta 1.4",
years: "2003 a 2010"
},
{
manufacturer: "GM",
model: "Corsa 1.0",
years: "2001 a 2009"
},
{
manufacturer: "GM",
model: "Corsa 1.8",
years: "2002 a 2006"
},
{
manufacturer: "GM",
model: "Meriva 1.8",
years: "2002 a 2012"
},
{
manufacturer: "GM",
model: "Meriva 1.8 16V",
years: "2002 a 2012"
},
{
manufacturer: "GM",
model: "Montana 1.4",
years: "2007 a 2009"
},
{
manufacturer: "GM",
model: "Montana 1.8",
years: "2003 a 2009"
},
{
manufacturer: "GM",
model: "Prisma 1.4",
years: "2006 a 2012"
},
{
manufacturer: "GM",
model: "S10 2.4 Flex",
years: "2006 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0",
years: "2001 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0 16V",
years: "2001 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.0",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Vectra C 2.4",
years: "2005 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0",
years: "2001 a 2012"
},
{
manufacturer: "GM",
model: "Zafira 2.0 16V",
years: "2001 a 2012"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder ID 40 (T16).", 
image: "/images/Transponders/ID 40.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "<br />Utilize o cabo universal Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados no OBDMap.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos Celta e Prisma está localizada na área A4.<br />A tomada de diagnóstico dos veículos Blazer, S10 e Vectra está localizada na área A5.<br />A tomada de diagnóstico dos veículos Corsa e Montana está localizada na área F5.<br />A tomada de diagnóstico dos veículos Astra, Meriva e Zafira está localizada na área F9.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4 - A5 - F5 - F9.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando leitura da chave mecânica, chassi e erros presentes`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura dos dados`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o reset do imobilizador Opel2`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset do imobilizador`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação do imobilizador Opel2`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do imobilizador`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a gravação do chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação do chassi`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Reset da ECU`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Emparelhamento`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação da ECU`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando o apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de chaves`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Corsa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Erro no Reset`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Reset`,
`<br />`,
`<br />`,
],
causes: [
`ECU ou Imobilizador bloqueado,`,`ECU ou Imobilizador com defeito.`,``,``,],
solutions: [
`Consulte o suporte técnico.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`A chave não está na ignição,`,`A programação não foi completada,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Coloque a chave na ignição,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas.`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar o tempo com a ignição ligada e tentar novamente com a senha correta (realizar a Leitura Opel2 para checar se há tempo de espera, e quanto tempo de espera seria no caso de houver).`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`A chave não está na ignição,`,`A programação não foi completada,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`Tranponder incorreto.`,],
solutions: [
`Verifique o transponder.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente na antena,`,`O transponder foi retirado da antena durante o procedimento de gravação,`,`Mau contato na antena,`,`O transponder utilizado não é o correto.`,],
solutions: [
`Conferir a correta posição do transponder na antena,`,`Conferir se o transponder está correto. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir o bom estado da antena.`,]
},

{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A senha digitada está incorreta.`,],
solutions: [
`Insira a senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
