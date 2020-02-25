//Capa
nomeCarga = `Manual Carga -  OBD0213<br />Geração de chaves Iveco BC 95160 (Daily)`;
revCarga = `Rev. 2`;
dataManual = `Dezembro 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`A leitura do PIN Code.`,
`Geração de até 8 chaves para veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Iveco`,
model: `Daily 3.0`,
years: `2013 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder Megamos ID48 virgem! <br />Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!`, 
image: `/images/Transponders/ID 48 NOVO.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar a BC ao OBDMap.`, 
image: `/images/Acessórios/Cabo MCU1.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Localizando o BC do veículo:`, 
description: `O BC fica localizado na posição A5 no veículo.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},

{title: `Identificando o BC:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Identificando o BC 3.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Localizando a área de soldagem do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU no BC;<br />1 => Fio Amarelo<br />2 => Fio Verde<br />3 => Fio Preto<br />4 => Fio Azul<br />5 => Fio Vermelho<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.`, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Localizando os pontos de soldagem 3.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Atenção: Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com a placa do BC, evitando danos ao módulo e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0213 Geração de chaves Iveco BC 95160 (Daily)/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a geração de transponder:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Iveco`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Iveco`, `>BC CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BC CODE 2`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;MCU&nbsp;no&nbsp;BCM,`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
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
`Cod.&nbsp;Eletronico:&nbsp;`,
`*****`,
`<br />`,
],
help: `Mostra o código eletrônico`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves&nbsp;`,
`Prog.:&nbsp;X&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
help: `Caso não deseje manter as chaves continue os passos em “Outras mensagens"`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;&nbsp;&nbsp;ID48&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Posicione o transponder ID48 virgem no módulo de transponder e tecle OK.`
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
`Gerar&nbsp;outro&nbsp;ID48`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Sim: Retorne ao Passo10.
Não: Prossiga ao Passo 13.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
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
`Mau contato no cabo MCU com o BC,`,`BC ou memória com problema,`,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes.`,]
},
{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BC,`,`Mau contato do cabo MCU com o OBDMap,`,`BC ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na memória, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes .`,]
},
{ label: `Arquivo do BC incorreto! Consulte Manual para continuar!`,
screens: [
`&nbsp;Arquivo&nbsp;do&nbsp;BC`,
`&nbsp;&nbsp;&nbsp;incorreto!`,
`Consulte&nbsp;Manual`,
`para&nbsp;continuar!`,
],
causes: [
`O arquivo é diferente da aplicação ou está corrompido.`,],
solutions: [
`Consulte suporte técnico.`,]
},
{ label: `BCM Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;BCM&nbsp;&nbsp;Lotado!&nbsp;&nbsp;&nbsp;`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
],
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
],
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
{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;esta`,
`programada!`,
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
