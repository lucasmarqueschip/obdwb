//Capa
nomeCarga = "Geração de Chaves Nissan NATS 6";
revCarga = "Rev. 3";
dataManual = "Março 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 5 chaves para o veículo da marca Nissan com a memória EEPROM RL66 (93LC66) no computador de bordo BC Calsonic Kansei.`,
`A programação de chaves é acumulativa, ou seja, a chave programada na BC não altera as já existentes no sistema, até completar 5 novas chaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Nissan",
model: "Grand Livina 1.8 (NATS6)",
years: "2010 a 2012"
},
{
manufacturer: "Nissan",
model: "Livina 1.8 (NATS6)",
years: "2010 a 2012"
},
{
manufacturer: "Nissan",
model: "Sentra 2.0 (NATS6)",
years: "2008 a 2012"
},
{
manufacturer: "Nissan",
model: "Tiida 1.8 (NATS6)",
years: "2007 a 2008"
},
{
manufacturer: "Nissan",
model: "Versa 1.6 (NATS6 VERSA)",
years: "2012 a 2013"
},
{
manufacturer: "Nissan",
model: "March 1.6 (NATS6 VERSA)",
years: "2012 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem).", 
image: "/images/Transponders/Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem)..jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Pinça soic 8. Conecta a memória ao<br />OBDMap.", 
image: "/images/Acessórios/Pinça SOIC8.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Localizando o BC do veículo:", 
description: "O BC dos veículos está localizado na posição A4, H4 ou I4.<br /><br /><br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4-H4-I4.jpg"},

{title: "Identificando o BC Calsonic Kansei NATS6", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC modelo NATS6.jpg"},

{title: "Identificando o BC Calsonic Kansei NATS6 VERSA", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC Calsonic Kansei.jpg"},

{title: "Desmontando o BC Calsonic Kansei:", 
description: "Este passo serve para os dois modelos de BC.<br />", 
ballon: "Retire o suporte que prende o BC ao veículo.", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC Calsonic Kansei 2.jpg"},

{title: "", 
description: "Este passo serve para os dois modelos de BC.<br />", 
ballon: "Utilize uma chave de fenda para retirar as travas do BC.", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Desmontando o BC Calsonic Kansei 2.jpg"},

{title: "Identificando a memória 93LC66:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando a memória 93LC66.jpg"},

{title: "", 
description: "", 
ballon: "O pino 1 da pinça deve coincidir com o pino 1 da memória.", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando a memória 93LC66 2.jpg"},

{title: "", 
description: "", 
ballon: "Pinça conectada na memória.", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Conectando a memória 93LC66 2.jpg"},

{title: "Todos os acessórios conectados:", 
description: "1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça ao OBDMap,<br />4. Conecte a pinça na memória.<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0132 Geração de transponders Versa/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Nissan`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`NATS&nbsp;6`,
`<br />`,
],
help: `Selecione NATS 6 ou NATS 6 VERSA  de acordo com a aplicação e tecle OK.`
},
{lines: [
`&nbsp;`,
`Selecione:`,
`Gerar&nbsp;Transp.`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;eeprom&nbsp;93LC66`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;LENDO...`,
`&nbsp;&nbsp;&nbsp;AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`<br />`,
`Chaves&nbsp;Prog.&nbsp;*/5&nbsp;`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves programadas no BC.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se desejar apagar as chaves já existentes tecle (X) NÃO e se desejar
mantê-las funcionando no veículo tecle (OK) SIM.`
},
{lines: [
`&nbsp;Insira&nbsp;transp.`,
`&nbsp;PCF7936&nbsp;virgem`,
`&nbsp;&nbsp;&nbsp;no&nbsp;modulo`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;1/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;2/3`,
`<br />`,
`<br />`,
],
help: `A geração foi iniciada, durante as
três etapas não retire o transponder do
módulo. O tempo do processo é de
aproximadamente 1 minuto.`
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;3/3`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;chave`,
`&nbsp;no&nbsp;BC.&nbsp;Aguarde!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
{lines: [
`&nbsp;&nbsp;Gerar&nbsp;outra`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chave?`,
`&nbsp;OK&nbsp;-&nbsp;Programar`,
`&nbsp;&nbsp;VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Para gerar mais transponders tecle OK e
volte ao passo 6, ou tecle VOLTA para
finalizar.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `BC LOTADO! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;BC&nbsp;LOTADO!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
` `,],
solutions: [
]
},

{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`&nbsp;ja&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Esta mensagem poderá ocorrer no momento em que o OBDMap realiza a leitura do BC e detecta que já estão gravadas as 5 chaves no BC. Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,``,],
solutions: [
]
},

{ label: `Quer realmente apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`&nbsp;Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Se realmente desejar apagar as chave tecle (OK) SIM para confirmar ou (X) NÃO para voltar ao menu anterior.`,],
solutions: [
]
},

{ label: `Apagando Chaves! Aguarde...`,
screens: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
causes: [
],
solutions: [
]
},

{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder utilizado não é PCF7936.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 5.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize o transponder PCF7936 virgem.`,``,]
},

{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
``,``,],
solutions: [
``,``,]
},

{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não pode ser programado, pois se encontra bloqueado ou em uma codificação diferente.`,],
solutions: [
`Insira o transponder PCF7936 virgem e reinicie o procedimento.`,]
},

{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
],
solutions: [
]
},

{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao&nbsp;`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder.`,]
},

{ label: `ERRO na leitura do BC!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BC!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`A pinça não está conectada corretamente na memória,`,`BC ou memória com problema.`,],
solutions: [
`Verifique a conexão da pinça com a memória,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostarse aos terminais correspondentes da memória,`,`Verificar se os parafusos que prendem a pinça no OBDMap estão bem fixos.`,]
},

{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`BC ou memória com problema.`,],
solutions: [
`Verificar se os parafusos que prendem a pinça ao OBDMap estão bem fixos,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},

{ label: `ERRO! BC INCOMPATIVEL!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERRO!`,
`BC&nbsp;INCOMPATIVEL!`,
`<br />`,
],
causes: [
`O BC é incompatível com a aplicação,`,`O arquivo pode estar corrompido.`,],
solutions: [
`Verificar a identificação do BC e informações do veículo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
