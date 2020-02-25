//Capa
nomeCarga = `Manual Carga -  OBD0123<br />Geração de transponders Captiva`;
revCarga = `Rev. 1`;
dataManual = `Agosto 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 4 chaves para o veículo GM Captiva e Opel Antara em imobilizadores que possui a memória 95040.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Captiva (Brasil) 3.6`,
years: `2005 a 2010`
},
{
manufacturer: `GM`,
model: `Captiva (Brasil) 2.4`,
years: `2005 a 2010`
},
{
manufacturer: `Opel`,
model: `Antara (Europa)`,
years: `2005 a 2010`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Para o sistema Imob4 utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

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

{title: `Identificando o imobilizador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0123 Geração de transponders Captiva/Identificando o imobilizador.jpg`},

{title: `Identificando a memória 95040:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0123 Geração de transponders Captiva/Identificando a memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Conecte a pinça na memória 95040.`, 
image: `/images/Funções Específicas/OBD0123 Geração de transponders Captiva/Identificando a memória 95040 2.jpg`},
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
{lines: [`GM`], help: `Tecle OK`, menu: 1000},
{lines: [`Captiva`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinça`,
`na&nbsp;memória&nbsp;95040`,
`segundo&nbsp;o&nbsp;manual`,
`&lt;OK&gt;`,
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
`CHAVES&nbsp;`,
`PROGRAMADAS:&nbsp;*/*`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves programadas no imobilizador.`
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
help: `A geração foi iniciada, durante as três etapas não retire o transponder do
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
`no&nbsp;Imobilizador!&nbsp;Aguarde`,
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
help: `A geração do transponder foi realizada com sucesso.`
},
{lines: [
`Gerar&nbsp;outra`,
`chave?`,
`OK&nbsp;-&nbsp;Programar`,
`VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Para gerar mais transponders tecle OK e
volte ao passo 9, ou tecle VOLTA para
finalizar.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Imob. Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`Imobilizador&nbsp;Lotado!`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
causes: [
` `,],
solutions: [
` `,]
},
{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`já&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NÃO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
],
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
],
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
],
solutions: [
]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`Memória com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado da memória.`,]
},
{ label: `Erro na leitura do Imobilizador`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;Imobilizador`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`A pinça não está conectada corretamente na memória,`,`Imobilizador ou memória com problema.`,],
solutions: [
`Verifique a conexão da pinça com a memória,`,`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar nos terminais correspondentes da memória.`,]
},
{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;programada&nbsp;no&nbsp;veiculo&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Este transponder já foi apresentado ao veículo anteriormente.`,],
solutions: [
`Utilize um transponder PCF7936 virgem.`,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
``,],
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
`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico: Posicionamento do transponder no módulo de transponder na página 5.`,]
},
{ label: `Erro na gravacao do transponder!`,
screens: [
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
