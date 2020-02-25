//Capa
nomeCarga = `Manual Carga -  OBD0134<br />Geração de Transponder GM IMMO 5`;
revCarga = `Rev. 6`;
dataManual = `Dezembro 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar até 8 chaves para o veículos da marca GM com sistema IMMO5.<br/>A programação de chaves é acumulativa, ou seja, a chave programada no BC não altera as já existentes ao sistema, até completar 8 chaves.<br/><obs><font color="red">Observação:</font><br/> - Os veículos abaixo podem possuir três modelos diferentes de BC's (com memória 25160, 95320 e 24C16), esta carga abrange os três modelos.<br/> - Para programar chave com telecomando, utilizar a carga OBD0130.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Camaro 6.2 2SS Coupé V8`,
years: `2011 a 2011`
},
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2011 a 2018`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2011 a 2013`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `S10 2.8 Diesel`,
years: `2012 a 2013`
},
{
manufacturer: `GM`,
model: `Tracker 1.8`,
years: `2014 a 2014`
},
{
manufacturer: `GM`,
model: `TrailBlazer 2.8 Diesel`,
years: `2013 a 2013`
},
{
manufacturer: `GM`,
model: `TrailBlazer 3.6 Gasolina`,
years: `2013 a 2013`
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

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg`},

{title: `Localizando o BC do veículo:`, 
description: `O BC do veículo Onix, Spin, Sonic, Cobalt, TrailBlazer, Tracker e S10 fica localizado na área A5.<br />O BC do veículo Camaro está localizado na área C5.<br />O BC do veículo Cruze está localizado na área F6.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5-C5-F6.jpg`},

{title: `Identificando o BC com memória 25160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 25160/Identificando o BC com memória 25160.jpg`},

{title: `Identificando a memória 25160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 25160/Identificando a memória 25160.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça ao OBDMap,<br />4. Conecte a pinça na memória.<br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (página 15).`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 25160/Todos os acessórios conectados.jpg`},

{title: `Identificando o BC com memória 24C16:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 24C16/Identificando o BC com memória 24C16 - modelo 2.jpg`},

{title: `Identificando a memória 24C16:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 24C16/Identificando a memória 24C16.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 24C16/Conectando a memória 24C16.jpg`},

{title: `Todos os acessorios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte a pinça ao OBDMap,<br />4. Conecte a pinça na memória.<br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (página 15).`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 24C16/Todos os acessórios conectados.jpg`},

{title: `Identificando o BC com memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Identificando o BC 95320.jpg`},

{title: `Identificando a memória 95320:`, 
description: `Observação: Este BC somente pode ser conectado através do cabo MCU.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Identificando a memória 95320.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU na memória 95320`, 
description: ``, 
ballon: `Visualização dos pontos a serem soldados.`, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Identificando o ponto de soldagem 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Verde<br />4=> Fio Azul<br />5=> Fio Cinza<br />6=> Fio Preto`, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Identificando o ponto de soldagem 95320 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldados os fios do cabo MCU no BC.`, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Identificando o ponto de soldagem 95320 3.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `1. Conecte o módulo de transponder ao OBDMap,<br />2. Conecte a fonte de alimentação ao módulo de transponder,<br />3. Conecte o cabo MCU ao OBDMap,<br />4. Conecte o cabo MCU no BC.<br /><br />Após todos os acessórios conectados, siga os passos no visor do OBDMap (Página 15).`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0134 Geração de transponders GM IMMO5/Memória 95320/Todos os acessórios conectados.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a geração de transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>soic 24c16`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`soic 24c16`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;a&nbsp;pinca`,
`na&nbsp;memoria&nbsp;24C16`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
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
`&nbsp;`,
`CHAVES&nbsp;PROG:&nbsp;*/8`,
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `A geração do transponder foi realizada com sucesso.`
},
{lines: [
`&nbsp;&nbsp;Gerar&nbsp;outra`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;chave?`,
`&nbsp;OK&nbsp;-&nbsp;Programar`,
`&nbsp;&nbsp;VOLTA&nbsp;-&nbsp;Sair`,
],
help: `Para gerar mais transponders tecle OK
e volte ao passo 7, ou tecle VOLTA para
finalizar.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Imob. Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;Imob.&nbsp;Lotado!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
``,],
solutions: [
` `,]
},
{ label: `Apagar as chaves ja programadas ao imobilizador? (X)NAO (OK)SIM`,
screens: [
`Apagar&nbsp;as&nbsp;chaves`,
`&nbsp;ja&nbsp;programadas`,
`ao&nbsp;imobilizador?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
causes: [
`O imobilizador atingiu o numero máximo de 8 chaves programadas. Para apagar todas as chaves e assim permitir a adição de novas chaves tecle (OK) SIM, se deseja não apagar as chaves tecle (X) NÃO.`,],
solutions: [
]
},
{ label: `Quer realmente, apagar as chaves ja programadas? (X)NAO (OK)SIM`,
screens: [
`Quer&nbsp;realmente,`,
`apagar&nbsp;as&nbsp;chaves`,
`ja&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;(OK)SIM`,
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
`Se realmente desejar apagar as chave tecle (OK) SIM para confirmar ou (X) NÃO para voltar ao menu anterior.`,],
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
`Mau contato na pinça com a memória,`,`Cabo MCU não soldado corretamente,`,`Curto entre os fios do cabo MCU,`,`BC com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostarse aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU.`,`Conferir bom estado do BC.`,]
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
{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
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
`Use&nbsp;transponder`,
`&nbsp;PCF7936&nbsp;virgem!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize o transponder PCF7936 virgem.`,]
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
``,]
},
{ label: `Erro! O transp. pode estar em modo crypto ou em modo password`,
screens: [
`Erro!&nbsp;O&nbsp;transp.&nbsp;`,
`pode&nbsp;estar&nbsp;em&nbsp;&nbsp;&nbsp;`,
`modo&nbsp;crypto&nbsp;ou&nbsp;`,
`em&nbsp;modo&nbsp;password`,
],
causes: [
`O transponder não pode ser programado, pois se encontra bloqueado ou em uma codificação diferente. `,],
solutions: [
`Insira o transponder PCF7936 virgem e reinicie o procedimento.`,]
},
{ label: `Erro na gravacao do transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`do&nbsp;transponder!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `ERRO na leitura do BCM!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BCM!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`BC com problema,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira,`,`Estar utilizando a pinça com o BC com memória 95320.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostarse aos terminais  correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU.`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do BC,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,`Verificar acessório utilizado para cada tipo de BC, pinça ou MCU.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mal contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `Chave ja esta programada!`,
screens: [
`&nbsp;`,
`Chave&nbsp;ja&nbsp;esta`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;programada!`,
`<br />`,
],
causes: [
`Esta chave já foi apresentada ao veículo.`,],
solutions: [
]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
