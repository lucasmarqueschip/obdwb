//Capa
nomeCarga = `Manual Carga -  OBD0272<br />Adaptação de ECU GM Delco E83 com BC Imob5`;
revCarga = `Rev. 3`;
dataManual = `Fevereiro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adaptação da ECU GM Delco E83 em veículos que utilizam o BC Imob5, tornando possível a sua`,
`substituição do modulo do motor.`,
`<obs>`,
`Observação:`,
`A ECU será casada com o BC, o carro irá liberar partida, porém pode ser necessário a utilização de`,
`um equipamento de diagnóstico para realizar a parametrização da ECU no veículo, para obter o`,
`perfeito funcionamento.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2013 a 2015`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Prisma 1.0`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `2013 a 2016`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2013 a 2015`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2014`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2013 a 2016`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Programador JTAG01. Necessário para realizar a<br />leitura e gravação do arquivo<br />na ECU`, 
image: `/images/Acessórios/Jtag.JPG`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Software utilizado`, 
description: ``, 
ballon: `Software OBDMap Suite`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/AtalhoOBDMapSuite.jpg`},

{title: `Identificando a Central`, 
description: `Atenção:<br />Para o funcionamento correto da ECU adaptada é necessário obrigatoriamente que ela possua a<br />mesma numeração da ECU original do veículo, e seja do mesmo modelo, ano e motor do veículo,<br />caso contrário o funcionamento não será garantido, podendo ocorrer falhas diversas.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/ECU Delco E83.jpg`},

{title: ``, 
description: `Atenção:<br />Para o funcionamento correto da ECU adaptada é necessário obrigatoriamente que ela possua a<br />mesma numeração da ECU original do veículo, e seja do mesmo modelo, ano e motor do veículo,<br />caso contrário o funcionamento não será garantido, podendo ocorrer falhas diversas.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/ECU Delco E83 etiqueta.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Região A<br />Região B<br />Região C`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Placa ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região A`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pontos de Soldagem A - ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região B`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pontos de Soldagem B - ECU Delco E83.jpg`},

{title: ``, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na<br />ordem indicada<br />na<br />Região C`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pontos de Soldagem C - ECU Delco E83.jpg`},

{title: `Todos os fios soldados`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Todos os fios soldados.jpg`},

{title: `Identificando o BC com memória 24C16:`, 
description: ``, 
ballon: `Identificando o<br />BC com a<br />memória 24C16`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 24C16 (1).jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando o<br />BC com a<br />memória 24C16`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 24C16 (2).jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando a<br />memória<br />24C16`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Localizando a memória 24C16.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Memória 24C16.jpg`},

{title: ``, 
description: ``, 
ballon: `Posicionando a pinça na memória`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pinça posicionada sobre a memória 24C16.jpg`},

{title: `Identificando o BC com memória 25160:`, 
description: ``, 
ballon: `Identificando<br />o BC com a<br />memória<br />25160`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 25160 (1).jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 25160 (2).jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando<br />o pino 1 da<br />memória<br />25160`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Memória 25160.jpg`},

{title: ``, 
description: ``, 
ballon: `Posicionando a pinça<br />na memoria`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pinça posicionada sobre a memória 25160.jpg`},

{title: `Identificando o BC com memória 95320:`, 
description: ``, 
ballon: `Identificando<br />o BC com a<br />memória<br />95320`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 95320 (1).jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando a memória 95320`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 95320 (2).jpg`},

{title: ``, 
description: ``, 
ballon: `Localizando a<br />memória<br />95320`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `Indicando a área para soldar o cabo MCU`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Área para se soldar o cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando<br />os pontos a<br />serem<br />soldado os<br />fios do cabo<br />MCU:<br />1=> Fio<br />Vermelho<br />2=> Fio<br />Amarelo<br />3=> Fio Verde<br />4=> Fio Azul<br />5=> Fio Cinza<br />6=> Fio Preto`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando pontos a serem soldados os fios do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os fios soldados`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Fios do cabo MCU já soldados.jpg`},

{title: `Identificando BC com memória 24C32`, 
description: ``, 
ballon: `Identificação do BC`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 24C32 (1).jpg`},

{title: ``, 
description: ``, 
ballon: `Localização da memória 24C32`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Identificando o BC com a memória 24C32 (2).jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Memória 24C32.jpg`},

{title: ``, 
description: ``, 
ballon: `Posicionado a pinça<br />na memoria`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Pinça posicionada sobre a memória 24C32.jpg`},

{title: `Software OBDMap Suite`, 
description: ``, 
ballon: `Após abrir o software clique<br />sobre ler para que seja feito o<br />backup do arquivo da ECU`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 1 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até o Software<br />comunicar com o OBDMap`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 2 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Siga os passos na tela do<br />OBDMap`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 3 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até a conclusão<br />da transferência do<br />arquivo`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 4 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Salve o arquivo lido com<br />um nome de fácil<br />identificação e em um<br />lugar de sua preferência e<br />onde não possa ser<br />apagado com facilidade.`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 5 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Procedimento<br />concluído com<br />sucesso, siga as<br />mensagens na<br />tela do OBDMap`, 
image: `/images/Funções Específicas/OBD0272 - Adaptação de ECU GM Delco E83 com BC Imob5/Passo 6 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Salvando o arquivo da ECU no computador:<br /><br />Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facil`, 
image: `idade`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a adaptação da central no OBDMap:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>Delco E83`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco E83`, `>Adaptar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Conecte&nbsp;cabo&nbsp;USB`,
`&nbsp;&nbsp;&nbsp;no&nbsp;OBDMap`,
`<br />`,
],
help: ``
},
{lines: [
`Abra&nbsp;o&nbsp;software`,
`&nbsp;&nbsp;OBDMapSuite`,
`&nbsp;&nbsp;e&nbsp;clique&nbsp;no`,
`&nbsp;&nbsp;&nbsp;botao&nbsp;Ler`,
],
help: `Siga os passos na tela do OBDMap Suite`
},
{lines: [
`&nbsp;&nbsp;Selecione&nbsp;a`,
`&nbsp;&nbsp;seguir,&nbsp;o&nbsp;BC`,
`&nbsp;&nbsp;&nbsp;&nbsp;desejado`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;BC&nbsp;memor.&nbsp;25160`,
`&nbsp;BC&nbsp;memor.&nbsp;95320`,
`&nbsp;BC&nbsp;memor.&nbsp;24C16`,
`&nbsp;BC&nbsp;memor.&nbsp;24C32`,
],
help: `Seleciona o BC desejado,
neste exemplo será
utilizado o com memória
25160`
},
{lines: [
`Conecte&nbsp;a&nbsp;pinca`,
`na&nbsp;memoria&nbsp;25160`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
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
`Conecte&nbsp;o&nbsp;Prog.`,
`&nbsp;JTAG01&nbsp;na&nbsp;ECU`,
`&nbsp;segundo&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Lendo&nbsp;ECU...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Salvando&nbsp;Arquivo`,
`<br />`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;Digite&nbsp;um&nbsp;nome`,
`&nbsp;para&nbsp;o&nbsp;arquivo`,
`&nbsp;no&nbsp;OBDMap&nbsp;Suite`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;ECU!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
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
help: `O casamento foi realizado, porém caso
algum defeito físico exista na ECU, BC ou no sistema elétrico, o carro não irá funcionar`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro ao salvar arquivo! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;ao&nbsp;salvar`,
`&nbsp;arquivo!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`• Mau contato do cabo USB com o OBDMap ou com o computador;`,`• Problema de driver do OBDMap.`,],
solutions: [
`• Conferir a conexão do Cabo USB;`,`• Consulte o suporte técnico;`,`• Realizar o procedimento novamente.`,]
},
{ label: `Erro na ultima gravacao da ECU! Contate o suporte! <OK>`,
screens: [
`&nbsp;Erro&nbsp;na&nbsp;ultima`,
`gravacao&nbsp;da&nbsp;ECU!`,
`&nbsp;&nbsp;&nbsp;Contate&nbsp;o`,
`&nbsp;suporte!&nbsp;&lt;OK&gt;`,
],
causes: [
`• O procedimento de gravação do ECU não foi concluído corretamente, fazendo com que o`,`ECU esteja com um arquivo incorreto, impossibilitando seu funcionamento no veículo.`,],
solutions: [
`• Contate o suporte técnico. `,``,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC.`,`• Mau conexão da pinça na memória,`,`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU.`,``,],
solutions: [
`• Conferir correta ligação do cabo MCU.`,`• Conferir correta ligação do programador JTAG01.`,`• Conferir correta conexão da pinça`,]
},
{ label: `Arquivo da ECU Invalido!`,
screens: [
`&nbsp;`,
`Arquivo&nbsp;da`,
`&nbsp;&nbsp;&nbsp;ECU&nbsp;Invalido!`,
`<br />`,
],
causes: [
`• O arquivo da ECU não é compatível;`,`• O arquivo da ECU está corrompido;`,],
solutions: [
`• Verificar se o modelo da ECU é compatível com o apresentado neste manual.`,]
},
{ label: `Erro grav. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU;`,`• Mau contato do programador JTAG01 com o OBDMap.`,],
solutions: [
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP.`,]
},
{ label: `Erro leit. ECU! <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leit.&nbsp;ECU!`,
`&nbsp;&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema ou com arquivo corrompido;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU;`,`• Mau contato do programador JTAG01 com o OBDMap.`,],
solutions: [
`• Conferir correta ligação do programador JTAG01;`,`• Conferir se o programador JTAG01 está bem conectado ao OBDMAP.`,]
},
{ label: `Erro na Leitura do BC! <OK> p/ repetir`,
screens: [
`Erro&nbsp;na&nbsp;Leitura`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;do&nbsp;BC!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
],
causes: [
`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema ou com arquivo corrompido;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC;`,`• Mau contato do cabo MCU com o OBDMap.`,`• Mau contato da Pinça com o OBDMap.`,`• Mau conexão da pinça na memória.`,],
solutions: [
`• Conferir correta ligação do cabo MCU;`,`• Conferir a correta conexão da pinça na memória;`,`• Conferir se a pinça está bem conectada ao OBDMAP.`,`• Conferir se o cabo MCU está bem conectado ao OBDMAP.`,]
},
{ label: `Arquivo Invalido!`,
screens: [
`&nbsp;`,
`Arquivo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Invalido!`,
`<br />`,
],
causes: [
`• O arquivo do BC não é compatível;`,`• O arquivo do BC está corrompido;`,],
solutions: [
`• Verificar se o modelo do BC é compatível com o apresentado neste manual.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não`,`coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo).`,],
solutions: [
`• Conferir a correta posição da pinça na memória.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
