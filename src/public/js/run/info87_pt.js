//Capa
nomeCarga = "Leitura da Senha do Alarme e Programação do Telecomando da S10";
revCarga = "Rev. 2";
dataManual = "Maio 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha no módulo de alarme.`,
`Apagar o telecomando.`,
`Programar o telecomando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "GM",
model: "Blazer 2.4",
years: "2006 a 2011"
},
{
manufacturer: "GM",
model: "Blazer 2.8",
years: "2006 a 2011"
},
{
manufacturer: "GM",
model: "S10 2.4",
years: "2006 a 2011"
},
{
manufacturer: "GM",
model: "S10 2.8",
years: "2006 a 2011"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Telecomando da S10.", 
image: "/images/Chaves e Telecomandos/Telecomando S10.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal junto ao adaptador A1.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg"},

{title: "Identificando e desmontando o módulo de Alarme:", 
description: "", 
ballon: "Módulo de alarme.", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Módulo de alarme.jpg"},

{title: "", 
description: "", 
ballon: "As setas indicam as 4 travas que prendem a tampa do módulo de alarme.", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Travas do módulo.jpg"},

{title: "", 
description: "", 
ballon: "Com o auxílio de uma chave de fenda, solte as travas da caixa.", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Soltando as travas do alarme.jpg"},

{title: "Localizando a memória 93LC46:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Localizando a memória 93LC46.jpg"},

{title: "Retirando a verniz dos terminais da memória:", 
description: "É aconselhável raspar todos os terminas da memória antes de conectar a pinça.", 
ballon: "Utilize um estilete para retirar o verniz da memória.", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Retirando o verniz da memória.jpg"},

{title: "", 
description: "É aconselhável raspar todos os terminas da memória antes de conectar a pinça.", 
ballon: "Conecte a pinça na memória 93LC46.", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Conectando a pinça na memória 93LC46.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos à mesma e nem a placa.", 
ballon: "", 
image: "/images/Funções Específicas/OBD0087 - Leitura de senha do alarme e programação do telecomando da S10/Todos os acessórios conectados.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Leitura de senha no módulo de alarme:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme2.2 S10`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme2.2 S10`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha, a mesma pode ser utilizada para apagar e programar o telecomando.`
},
]
}, {title: `Apagando o telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme2.2 S10`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme2.2 S10`, `>Apagar telecmd`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Utilize a senha lida anteriormente. Tecle
OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Apagado!`,
`<br />`,
],
help: ``
},
]
}, {title: `Programando o telecomando:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Alarme2.2 S10`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme2.2 S10`, `>Prog Telecmd?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Utilize a senha lida anteriormente. Tecle
OK!`
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
`Pressione&nbsp;&nbsp;ou`,
`varias&nbsp;vezes!`,
`<br />`,
],
help: `Os símbolos no display indicam os
botões lock e unlock do telecomando.`
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
`Telecomando`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`Módulo de alarme ou memória com problema.`,`Arquivo corrompido,`,`Pinça foi conectada em outro componente.`,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais da memória,`,`Verificar se a pinça apresenta algum defeito visível, se apresentar algum defeito encaminhar para reparo.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória.`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com o suporte técnico.`,``,]
},

{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A senha digitada é inválida.`,],
solutions: [
`Inserir senha correta.`,]
},

{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;`,
`&nbsp;&nbsp;Excedido!`,
`<br />`,
],
causes: [
`O botão travar ou destravar não foi pressionado no tempo devido.`,],
solutions: [
`Pressionar o telecomando no momento indicado pelo OBDMap.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
