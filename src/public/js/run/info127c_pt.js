//Capa
nomeCarga = `Manual Carga -  OBD0127<br />Geração de Transponders BC326 (Palio, Grand Siena, 2012 a 2013)`;
revCarga = `Rev. 4`;
dataManual = `Março 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 8 chaves para veículos Fiat que utilizam o BC 326 Magneti Marelli.`,
`<obs><font color="red">Observação:</font> Os módulos podem ser tratados como BC ou BCM, porém em todo o manual será tratado como BC.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Palio 1.0`,
years: `2012 a 2013`
},
{
manufacturer: `Fiat`,
model: `Palio 1.4`,
years: `2012 a 2013`
},
{
manufacturer: `Fiat`,
model: `Palio 1.6`,
years: `2012 a 2013`
},
{
manufacturer: `Fiat`,
model: `Grand Siena 1.4`,
years: `2012 a 2013`
},
{
manufacturer: `Fiat`,
model: `Grand Siena 1.6`,
years: `2012 a 2013`
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
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: `Identificando o BC 326 Magneti Marelli:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Identificando o BC 326 Magneti Marelli.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Identificando o BC 326 Magneti Marelli 2.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Para melhor visualização dos pontos a serem soldados, foi separado em Área A e B.`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Localizando os pontos de soldagem do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na área A:<br />1 => Fio Amarelo<br />2 => Fio Verde<br />3 => Fio Preto<br />4 => Fio Azul<br />5 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na área B:<br />6 => Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Localizando os pontos de soldagem do cabo MCU na área B.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na Área A.`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Localizando os pontos de soldagem do cabo MCU na área A.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado os fios do cabo MCU na Área B.`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Soldado os fios do cabo na area B.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC, evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0127 Geração de transponders BC326 (Palio, Grand Siena, 2012 a 2013)/Acessórios conectados com a BC.jpg`},
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
{title: `Realizando Geração de Transponders BC326`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio EVO`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Marelli 326`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;o&nbsp;cabo&nbsp;MCU&nbsp;no&nbsp;`,
`BCM,`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`e&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
help: `Mostra a quantidade de chaves programadas no BC.`
},
{lines: [
`Deseja&nbsp;manter&nbsp;as`,
`chaves&nbsp;já`,
`programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Tecle (OK) SIM para manter as chaves já programadas ainda funcionando no veículo, ou tecle (X) NAO para apagá-las e gravar novas chaves.`
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Neste momento o BC está sendo programado.`
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
help: ``
},
{lines: [
`&nbsp;`,
`Aguarde...&nbsp;&nbsp;&nbsp;3/3`,
`<br />`,
`<br />`,
],
help: `A geração foi iniciada, durante as três etapas não retire o transponder do
módulo.`
},
{lines: [
`&nbsp;`,
`Programacao`,
`Concluida!`,
`<br />`,
],
help: `O transponder foi gerado e programado no BC com sucesso.`
},
{lines: [
`Gerar&nbsp;outra`,
`chave?`,
`OK&nbsp;-&nbsp;Programar`,
`VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Tecle OK para programar mais chaves e vá ao passo 7, ou tecle VOLTA para voltar ao menu anterior.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`Verifique...`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o BC,`,`BC ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes a página 7.`,]
},
{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o BC,`,`Mau contato no cabo MCU com o OBDMap,`,`BC com problema ou arquivo corrompido.`,],
solutions: [
`Conferir a correta posição do cabo MCU na memória, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes a página 7.`,]
},
{ label: `Erro na leitura do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`Transponder&nbsp;nao`,
`Encontrado!`,
`&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é PCF7936 virgem.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação. Caso tenha alguma dúvida, vá ao tópico Posicionamento do transponder no módulo de transponder na pagina 5`,]
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
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize o transponder PCF7936 virgem.`,]
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
` `,],
solutions: [
` `,]
},
{ label: `Quer realmente, apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`Quer&nbsp;realmente,`,
`apagar&nbsp;as&nbsp;chaves`,
`já&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;(OK)SIM`,
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
],
solutions: [
]
},
{ label: `ERRO! BCM INCOMPATIVEL`,
screens: [
`&nbsp;`,
`ERRO!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`BCM&nbsp;INCOMPATIVEL`,
`<br />`,
],
causes: [
`O BC é incompatível com a aplicação,`,`O arquivo pode estar corrompido.`,],
solutions: [
`Verificar a identificação do BC e informações do veículo.`,]
},
{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;programada&nbsp;no&nbsp;veiculo&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A chave já foi apresentada ao veículo.`,],
solutions: [
``,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
