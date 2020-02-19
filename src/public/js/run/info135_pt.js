//Capa
nomeCarga = "Leitura de Senha e Programação de Chaves Chery Immo 1 via OBD";
revCarga = "Rev. 3";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha: é possível realizar a leitura de senha via OBD ou pinça.`,
`Programação de até 5 chaves via OBD.`,
`Apagar chaves via OBD: é possível apagar todas as chaves do veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Chery",
model: "Face 1.3 Gasolina",
years: "2009 a 2012"
},
{
manufacturer: "Chery",
model: "Tiggo 2.0 Gasolina",
years: "2009 a 2012"
},
{
manufacturer: "Chery",
model: "S18",
years: "2010 a 2012"
},
];
applicationObs = createObs("Observação: Só é possível realizar a leitura de senha nos veículos que possuem a ECU ME7.9.7.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder<br />PCF7936(ID46) dedicado<br />Renault.<br />Utilize a carga OBD0192 para<br />realizar a dedicação", 
image: "/images/Transponders/ID46 Chery.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Identificando a ECU ME7.9.7:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0135 Leitura de senha e programação Chery Immo 1/Identificando a ECU ME7.9.7.jpg"},

{title: "Identificando memória 95080:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0135 Leitura de senha e programação Chery Immo 1/Identificando memória 95080.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0135 Leitura de senha e programação Chery Immo 1/Conectando na memória 95080.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do Face fica localizada na posição A5.<br />A tomada de diagnóstico do Tiggo fica localizada na posição J5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-J5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura de senha via pinça:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Chery`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Chery`, `>Me797`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me797`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95080&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`Senha:`,
`****`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando a leitura de senha via OBD:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Chery`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Chery`, `>Me797`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Me797`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Senha:`,
`****`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Chery`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Chery`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`&nbsp;Use&nbsp;tranponder`,
`&nbsp;&nbsp;&nbsp;ID46&nbsp;Chery`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
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
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o procedimento de apagar chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Chery`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Chery`, `>Imob 1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 1`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Insira a senha lida anteriormente e tecle OK!`
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
`&nbsp;`,
`Desligue&nbsp;`,
`&nbsp;a&nbsp;chave`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;Chave`,
`<br />`,
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Todas as chaves foram apagadas.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Memória com problema;`,`A pinça foi conectada em outro componente. `,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`ECU ou memória com problema,`,`A pinça foi conectada em outro componente (se existir outro componente SOIC8 na placa).`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos.`,``,]
},

{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`·	A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`·	A pinça foi conectada em outro componente.`,],
solutions: [
`·	Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Erro de Comunicacao!`,
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

{ label: `ECU Invalida!`,
screens: [
`&nbsp;`,
`&nbsp;ECU&nbsp;Invalida!`,
`<br />`,
`<br />`,
],
causes: [
`A versão da ECU pode ser inválida.`,],
solutions: [
`Verificar a versão da ECU.`,]
},

{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`A chave pode já estar programada,`,`Transponder pode não estar correto.`,],
solutions: [
`Verificar se o transponder utilizado é o ID46 dedicado Chery.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Inserir a senha correta.`,]
},

{ label: `Tempo de espera: *** minutos`,
screens: [
`&nbsp;`,
`Tempo&nbsp;de&nbsp;espera:`,
`&nbsp;&nbsp;***&nbsp;minutos`,
`<br />`,
],
causes: [
`O imobilizador está bloqueado pelo tempo indicado acima.`,],
solutions: [
]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Insira a senha correta.`,]
},

{ label: `Erro de Operacao`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Operacao`,
`<br />`,
],
causes: [
`O imobilizador pode estar com defeito.`,],
solutions: [
`Trocar o imobilizador.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
