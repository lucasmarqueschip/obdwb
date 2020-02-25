//Capa
nomeCarga = `Manual Carga -  OBD0122<br />Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça`;
revCarga = `Rev. 2`;
dataManual = `Julho 2012`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação da 1ª chave do Corolla em bancada.  Para realizar a programação será necessário retirar o imobilizador do veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Corolla 1.8`,
years: `1998 a 2002`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação:`, `Com está carga será possível gerar apenas uma chave ao veículo.`, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Transponder TEXAS ID4C com ID fixo. O transponder será dedicado ao veículo.`, 
image: `/images/Transponders/ID4C - Epoxi.jpg`},

{title: `Chave utilizada:`, 
description: ``, 
ballon: `Chave do Corolla já montada com o transponder.`, 
image: `/images/Chaves e Telecomandos/Chave Corolla antigo.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

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

{title: ``, 
description: ``, 
ballon: `Se a chave já estiver montada com o transponder, ela deve ser posicionada como mostra a foto ao lado.`, 
image: `/images/Instrucao Modulo de Transponder/MT - Chave Toyota CERTO.jpg`},

{title: `Localizando o imobilizador no veículo:`, 
description: `O imobilizador do veículo fica localizado na área B4 , na caixa de fusíveis do veículo.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/B4.jpg`},

{title: `Identificando o imobilizador:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0122 Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça/ID imobilizador.jpg`},

{title: `Localizando e conectando a pinça na memória 93LC66`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0122 Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça/ID memória 1.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0122 Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça/ID memória 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 93LC66.`, 
image: `/images/Funções Específicas/OBD0122 Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça/ID memória 3.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça na memória do módulo,<br />4. Conecte a pinça ao OBDMap.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0122 Geração da 1ª Chave Corolla 98-02 (antigo) via Pinça/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a programação da 1ª chave:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Imob Corolla98`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob Corolla98`, `>Gerar 1a chave`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Utilize&nbsp;o&nbsp;Modulo`,
`de&nbsp;Transponder&nbsp;e`,
`&nbsp;a&nbsp;pinca&nbsp;neste`,
`&nbsp;&nbsp;procedimento`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;&nbsp;&nbsp;ID4C&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Lendo&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Conecte&nbsp;a&nbsp;pinca`,
`na&nbsp;memoria&nbsp;93C66`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;Imob.`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `A chave foi programada para o veículo com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do ID4C!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;ID4C!`,
`<br />`,
],
causes: [
`Transponder mal posicionado na antena do módulo,`,`Transponder defeituoso,`,`O transponder utilizado não é o ID4C.`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Pode-se utilizar a carga do módulo de transponder para identificar o transponder.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Imobilizador com problema,`,`A pinça foi conectada em outro componente. `,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
},
{ label: `Erro na Gravacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Gravacao!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou imobilizador com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do imobilizador,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
