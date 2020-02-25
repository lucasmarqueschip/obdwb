//Capa
nomeCarga = `Manual Carga -  OBD0204<br />Reset da ECU BOSCH 0281016223 (Ducato 10-14)`;
revCarga = `Rev. 1`;
dataManual = `Agosto 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do Código Eletrônico,`,
`Reset da ECU BOSCH 0281016223.`,
`Esta carga realiza a leitura do código eletrônico e o reset da ECU com numeração 51872711 e 51889158, deixando-a virgem, pronta para codificar automaticamente com um novo veículo.`,
``,
`Atenção!`,
`Se após o procedimento a luz de injeção fique acesa, dar partida no veiculo e aguardar alguns minutos, desligue o veiculo, aguarde alguns segundos, ao ligar o veiculo novamente a luz ira se apagar.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Citroen`,
model: `Jumper 2.3 Multijet`,
years: `2010 a 2014`
},
{
manufacturer: `Fiat`,
model: `Ducato 2.3 Multijet`,
years: `2010 a 2014`
},
{
manufacturer: `Peugeot`,
model: `Boxer 2.3 Multijet`,
years: `2010 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: `Observações <br />Condição: Telecomando não é programado automaticamente: <br />No procedimento de programação ou adição de chaves, caso a chave utilizada seja canivete e o telecomando não seja programado automaticamente, realizar o seguinte procedimento manual: <br />1. Ligue e desligue a ignição 4 vezes, e deixe na opção OFF, <br />2. Pressione o botão "Lock" do telecomando 1 vez, <br />3. Ligue a ignição, <br />4. Pressione o botão "Lock" do telecomando 1 vez, <br />5. Retire a chave, <br />6. Pressione o botão "Lock" do telecomando 1 vez. <br /><br />Condição: Tentativas de acesso falharam e cálculo do incode enviado também não realiza a programação: <br />O veículo pode ter entrado em modo de bloqueio, devido ao transponder usado ser incorreto ou por alguma condição do veículo. Devendo ser desconectada a bateria e aguardar aproximadamente 10 minutos e após religá-la repetir o procedimento. <br /><br /><br />`, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: `Observações <br />Condição: Telecomando não é programado automaticamente: <br />No procedimento de programação ou adição de chaves, caso a chave utilizada seja canivete e o telecomando não seja programado automaticamente, realizar o seguinte procedimento manual: <br />1. Ligue e desligue a ignição 4 vezes, e deixe na opção OFF, <br />2. Pressione o botão "Lock" do telecomando 1 vez, <br />3. Ligue a ignição, <br />4. Pressione o botão "Lock" do telecomando 1 vez, <br />5. Retire a chave, <br />6. Pressione o botão "Lock" do telecomando 1 vez. <br /><br />Condição: Tentativas de acesso falharam e cálculo do incode enviado também não realiza a programação: <br />O veículo pode ter entrado em modo de bloqueio, devido ao transponder usado ser incorreto ou por alguma condição do veículo. Devendo ser desconectada a bateria e aguardar aproximadamente 10 minutos e após religá-la repetir o procedimento. <br /><br /><br />`, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Identificando a ECU.`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/ECU.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/id 1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/id 2.jpg`},

{title: `Localizando a memória 95640:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0204 - Reset da ECU BOSCH 0281016223 (Ducato 10-14)/memoria.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando o Reset da ECU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>BOS 0281016223`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BOS 0281016223`, `>Resetar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;&nbsp;pinca`,
`na&nbsp;memoria&nbsp;95640&nbsp;`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`ECU:`,
`********`,
`Cod.&nbsp;Eletronico:`,
`*****`,
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
{lines: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
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
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir bom estado do módulo.`,]
},
{ label: `ATENCAO! ECU desconhecida Deseja contin.? (X) NAO (OK) SIM`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`ECU&nbsp;desconhecida`,
`&nbsp;Deseja&nbsp;contin.?`,
`(X)&nbsp;NAO&nbsp;(OK)&nbsp;SIM`,
],
causes: [
`A ECU não corresponde a aplicação, continuar o procedimento não significa que o Reset ira funcionar corretamente.`,],
solutions: [
`Conferir a aplicação.`,`Consulte o Suporte Técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
