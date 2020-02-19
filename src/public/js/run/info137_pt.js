//Capa
nomeCarga = "Leitura de Senha e Programação de Chaves (Peugeot 307/Citroën C4 e C5 2008 a 2011)";
revCarga = "Rev. 4";
dataManual = "Julho 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha da BSI.`,
`Para realizar essa função é necessário retirar a BSI do veículo.`,
``,
`Programação de chaves via OBD.`,
`Com esta função é possível programar até 5 chaves ao veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "C4 2.0",
years: "2007 a 2014"
},
{
manufacturer: "Citroen",
model: "C5 2.0",
years: "2007 a 2012"
},
{
manufacturer: "Peugeot",
model: "307 1.6",
years: "2008 a 2012"
},
{
manufacturer: "Peugeot",
model: "307 2.0",
years: "2008 a 2012"
},
{
manufacturer: "Citroen",
model: "Aircross",
years: "2011 a 2017"
},
{
manufacturer: "Citroen",
model: "C3",
years: "2013 a 2017"
},
{
manufacturer: "Citroen",
model: "C3 Picasso",
years: "2012 a 2015"
},
{
manufacturer: "Citroen",
model: "C4 Pallas",
years: "2008 a 2013"
},
{
manufacturer: "Citroen",
model: "C4 Picasso",
years: "2009 a 2014"
},
{
manufacturer: "Peugeot",
model: "308",
years: "2012 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder PCF7936 - ID46 - Virgem!", 
image: "/images/Transponders/Transponder PCF7936 Carvão.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize adaptador A4.", 
image: "/images/Acessórios/Adaptador A4.jpg"},

{title: "", 
description: "", 
ballon: "Cabo Universal.", 
image: "/images/Acessórios/Cabo Universal.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "Localizando o BSI:", 
description: "O BSI dos veículos citados na página 3 fica localizado na posição A5 da imagem.<br /><br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU na BSI tipo 1:", 
description: "", 
ballon: "Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI tipo 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU na Área A:<br />1 => Fio Verde<br />2 => Fio Cinza<br />3 => Fio Azul<br />4 => Fio Amarelo", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU na Área B:<br />5 => Fio Preto<br />6 => Fio Vermelho", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Localizando os pontos de soldagem do cabo MCU na BSI 2.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na Área A.", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Fios soldados na area A.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na Área B.", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Fios soldados na area B.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 1/Todos os acessórios conectados.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU na BSI tipo 2:", 
description: "", 
ballon: "Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI tipo 2.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU na área A:<br />1 => Fio Azul<br />2 => Fio Cinza<br />3 => Fio Verde<br />4 => Fio Amarelo", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU na área B:<br />5 => Fio Vermelho<br />6 => Fio Preto", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Localizando os pontos de soldagem do cabo MCU na BSI 2.jpg"},

{title: "", 
description: "", 
ballon: "Fios do cabo MCU soldados na área A:", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Fios soldados pela área A.jpg"},

{title: "", 
description: "", 
ballon: "Fios do cabo MCU soldados na área B:", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Fios soldados pela área B.jpg"},

{title: "Todos os acessórios conectados :", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0137 Leitura de senha e programação de chaves/BSI TIPO 2/Todos os acessórios conectados.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos citados na página 3 fica localizada na posição E6 e F6 da foto.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/E6-F6.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a leitura de senha:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>BSI Peugeot307`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI Peugeot307`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;&nbsp;&nbsp;MCU&nbsp;na&nbsp;BSI`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1/3`,
`****`,
`<br />`,
],
help: `O OBDMap pode encontrar mais de uma possibilidade de senha, com o auxílio das
setas do OBDMap visualize as outras possíveis senhas e anote.`
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>307`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`307`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Transponder`,
`&nbsp;utilizado:&nbsp;ID46`,
`<br />`,
],
help: `Tecle OK!`
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
`Senha&nbsp;da&nbsp;BSI:`,
`<br />`,
`<br />`,
],
help: `Insira a senha lida anteriormente.`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser programada.`
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
`Insira&nbsp;chave&nbsp;n`,
`e&nbsp;ligue&nbsp;ignicao!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chave&nbsp;n`,
`&nbsp;Apresentada`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apresentacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: ``
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
`Curto nos fios do cabo MCU,`,`BSI ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU no BSI, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes.`,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BSI,`,`Mau contato no cabo MCU com o OBDMap,`,`BSI com problema.`,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,``,]
},

{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;leitura!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BSI,`,`Mau contato no cabo MCU com o OBDMap,`,`BSI com problema.`,``,],
solutions: [
`Verificar os pontos de solda do cabo MCU,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,``,]
},

{ label: `Arquivo Invalido!`,
screens: [
`&nbsp;`,
`Arquivo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invalido!`,
`<br />`,
],
causes: [
`O BSI está com o arquivo corrompido ou inválido.`,``,],
solutions: [
``,]
},

{ label: `Chave ja foi apresentada no procedimento, OK para continuar..`,
screens: [
`Chave&nbsp;ja&nbsp;foi`,
`apresentada&nbsp;no`,
`procedimento,&nbsp;OK`,
`para&nbsp;continuar..`,
],
causes: [
`A chave já foi programada ao veículo.`,],
solutions: [
]
},

{ label: `Transponder nao valido!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;nao&nbsp;valido!`,
`<br />`,
],
causes: [
`O transponder está incorreto.`,],
solutions: [
`Utilize o transponder ID46.`,]
},

{ label: `Use o Transponder ID46`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;`,
`Transponder&nbsp;ID46`,
`<br />`,
],
causes: [
`O transponder está incorreto.`,],
solutions: [
`Utilize o transponder ID46.`,``,]
},

{ label: `Senha Incorreta, apos 3 erros`,
screens: [
`&nbsp;`,
`Senha&nbsp;Incorreta,`,
`apos&nbsp;3&nbsp;erros`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `a BSI sera TRAVADA por`,
screens: [
`&nbsp;`,
`a&nbsp;BSI&nbsp;sera`,
`&nbsp;&nbsp;TRAVADA&nbsp;por`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `15 minutos, OK para reiniciar.`,
screens: [
`&nbsp;`,
`15&nbsp;minutos,&nbsp;OK`,
`&nbsp;para&nbsp;reiniciar.`,
`<br />`,
],
causes: [
`A senha foi digitada errada 3 vezes, BSI travada por 15 minutos.`,],
solutions: [
`Aguardar 15 minutos até a BSI destravar.`,]
},

{ label: `BSI TRAVADA! Aguarde 15 min..`,
screens: [
`&nbsp;`,
`BSI&nbsp;TRAVADA!`,
`Aguarde&nbsp;15&nbsp;min..`,
`<br />`,
],
causes: [
`BSI travada.`,],
solutions: [
`Aguarde 15 minutos até a BSI destravar.`,]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A4,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
