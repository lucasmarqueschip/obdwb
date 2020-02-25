//Capa
nomeCarga = `Manual Carga -  OBD0132<br />Geração de Chaves Nissan NATS 6`;
revCarga = `Rev. 3`;
dataManual = `Março 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 5 chaves para o veículo da marca Nissan com a memória EEPROM RL66 (93LC66) no computador de bordo BC Calsonic Kansei.`,
`A programação de chaves é acumulativa, ou seja, a chave programada na BC não altera as já existentes no sistema, até completar 5 novas chaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Nissan`,
model: `Grand Livina 1.8 (NATS6)`,
years: `2010 a 2012`
},
{
manufacturer: `Nissan`,
model: `Livina 1.8 (NATS6)`,
years: `2010 a 2012`
},
{
manufacturer: `Nissan`,
model: `Sentra 2.0 (NATS6)`,
years: `2008 a 2012`
},
{
manufacturer: `Nissan`,
model: `Tiida 1.8 (NATS6)`,
years: `2007 a 2008`
},
{
manufacturer: `Nissan`,
model: `Versa 1.6 (NATS6 VERSA)`,
years: `2012 a 2013`
},
{
manufacturer: `Nissan`,
model: `March 1.6 (NATS6 VERSA)`,
years: `2012 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem).`, 
image: `/images/Transponders/Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem)..jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: `Localizando o BC do veículo:`, 
description: `O BC dos veículos está localizado na posição A4, H4 ou I4`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4-H4-I4.jpg`},

{title: `Identificando o BC Calsonic Kansei NATS6`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC modelo NATS6.jpg`},

{title: `Identificando o BC Calsonic Kansei NATS6 VERSA`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC Calsonic Kansei.jpg`},

{title: `Desmontando o BC Calsonic Kansei:`, 
description: `Este passo serve para os dois modelos de BC.<br />`, 
ballon: `Retire o suporte que prende o BC ao veículo.`, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando o BC Calsonic Kansei 2.jpg`},

{title: ``, 
description: `Este passo serve para os dois modelos de BC.<br />`, 
ballon: `Utilize uma chave de fenda para retirar as travas do BC.`, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Desmontando o BC Calsonic Kansei 2.jpg`},

{title: `Identificando a memória 93LC66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando a memória 93LC66.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Identificando a memória 93LC66 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Conectando a memória 93LC66 2.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça ao OBDMap,<br />4. Conecte a pinça na memória.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0132 Geração de transponders Versa/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = false;
services = 
[
{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Nissan`], help: `Tecle OK`, menu: 1000},
{lines: [`Versa`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;eeprom&nbsp;93LC66`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`LENDO...`,
`AGUARDE...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Programadas:&nbsp;`,
`*/*&nbsp;OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves programadas no BC.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`chaves&nbsp;já`,
`programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Se desejar apagar as chaves já existentes tecle (X) NÃO e se desejar
mantê-las funcionando no veículo tecle (OK) SIM.`
},
{lines: [
`Insira&nbsp;transponder`,
`PCF7936&nbsp;virgem`,
`no&nbsp;módulo`,
`e&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`Gravando&nbsp;chave`,
`no&nbsp;BC.&nbsp;Aguarde!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
{lines: [
`Gerar&nbsp;outra`,
`chave?`,
`OK&nbsp;-&nbsp;Programar`,
`VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Para gerar mais transponders tecle OK e
volte ao passo 6, ou tecle VOLTA para
finalizar.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `BC LOTADO! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`BC&nbsp;LOTADO!`,
`OK&nbsp;para&nbsp;prosseguir`,
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
`já&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NÃO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`Esta mensagem poderá ocorrer no momento em que o OBDMap realiza a leitura do BC e detecta que já estão gravadas as 5 chaves no BC. Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,],
solutions: [
]
},
{ label: `Quer realmente apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`Quer&nbsp;realmente`,
`apagar&nbsp;as&nbsp;chaves`,
`já&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
` `,],
solutions: [
]
},
{ label: `Apagando Chaves! Aguarde...`,
screens: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`Aguarde...`,
`<br />`,
],
causes: [
`Se realmente desejar apagar as chave tecle (OK) SIM para confirmar ou (X) NÃO para voltar ao menu anterior. `,],
solutions: [
]
},
{ label: `Pinca invertida!`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`não&nbsp;Encontrado!`,
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
`Transponder&nbsp;bloqueado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `Use transponder PCF7936 virgem!`,
screens: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado. `,],
solutions: [
`Utilize o transponder PCF7936 virgem. `,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transponder&nbsp;pode&nbsp;`,
`estar&nbsp;em&nbsp;modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
`<br />`,
],
causes: [
`O transponder não pode ser programado, pois se encontra bloqueado ou em uma codificação diferente.`,],
solutions: [
`Insira o transponder PCF7936 virgem e reinicie o procedimento.`,]
},
{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravação`,
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
`do&nbsp;BC!`,
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
`Gravação!`,
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
`ERRO!`,
`BC&nbsp;INCOMPATÍVEL!`,
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
