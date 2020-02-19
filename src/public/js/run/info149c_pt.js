//Capa
nomeCarga = "Leitura de senha Me7.4.4";
revCarga = "Rev. 3";
dataManual = "Junho 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha da BSI. Para realizar essa função é necessário retirar a BSI do veículo.`,
`Programação de chaves via OBD. Com esta função é possível programar até 5 chaves ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "C3 1.4 16v",
years: "2005 a 2008"
},
{
manufacturer: "Citroen",
model: "C3 1.6 16V",
years: "2002 a 2008"
},
{
manufacturer: "Citroen",
model: "Xsara 1.6 16V",
years: "2002 a 2005"
},
{
manufacturer: "Peugeot",
model: "206 1.4 16V",
years: "2005 a 2008"
},
{
manufacturer: "Peugeot",
model: "206 1.6 16V",
years: "2002 a 2008"
},
{
manufacturer: "Peugeot",
model: "307 1.6 16V",
years: "2003 a 2006"
},
];
applicationObs = createObs("Para os VW UP!, funciona apenas com páinel VDO.", "Com os demais veiculos, funciona todos 100%.", "nao sei")createObs("nao sei", "nao sei", "nao sei")createObs("nao sei", "nao sei", "nao sei")createObs("12345", "12345", "12345")createObs("12345", "12345", "12345")createObs("12345", "12345", "12345")createObs("12345", "12345", "12345")createObs("12345", "12345", "TTTTTTTTTTTTTTTTTTTTTTTTTTT")



resources = [
{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Identificando e desmontando a ECU ME 7.4.4", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Identificando ECU 1.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Identificando ECU 2.jpg"},

{title: "Localizando e conectando a pinça na memória 25C160:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Localizando a memória.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pino 1 da memória.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pinca.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Todos os equipamentos.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Localizando a memória.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pino 1 da memória.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0139 Reset da ECU ME7.4.4/Pinca.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Citroen`], help: `Tecle OK`, menu: 1000},
{lines: [`C3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch Me7.4.4`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},

]},{title: `zzz`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

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

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},

{ label: `Tempo de espera!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera!`,
`<br />`,
`<br />`,
],
causes: [
`Quando já foi digitada senha errada na hora de programar chaves;`,`Não foi encontrada a senha no painel ou painel invalido;`,`Painel com arquivo corrompido.`,],
solutions: [
` Deixar o painel ligado por 10 minutos e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 hora e tentar fazer o procedimento sem desligar;`,` Deixar o painel ligado por 1 dia e tentar fazer o procedimento sem desligar;`,]
},

{ label: `Senha nao Encontrada!`,
screens: [
`&nbsp;`,
`Senha&nbsp;nao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Encontrada!`,
`<br />`,
],
causes: [
`Arquivo da ECU está corrompido,`,`Arquivo inválido da ECU,`,`A senha da ECU pode estar resetada.`,],
solutions: [
]
},

{ label: `Erro interno Codigo E`,
screens: [
`&nbsp;`,
`Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Codigo&nbsp;E`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,`A pinça foi conectada em outro componente (se a placa tiver outro componente),`,`Memória ou Módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do Módulo.`,]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`Módulo com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
