//Capa
nomeCarga = `Manual Carga -  OBD0276<br />Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4`;
revCarga = `Rev. 1`;
dataManual = `Fevereiro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Correção de chassi da ECU GM Delco E83 imob 4.`,
`Correção de chassi da ECU GM Delco E83 imob 5`,
`Correção de chassi do BC imob5 GM`,
`Correção de chassi do Painel Imob 4 GM`,
`Atenção:`,
`Essa função tem como objetivo a correção de defeitos. A Chiptronic NÃO se responsabiliza pelo`,
`uso ilícito da função, sendo de total responsabilidade do usuário.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Agile 1.4`,
years: `2010 a 2014`
},
{
manufacturer: `GM`,
model: `Cobalt 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cobalt 1.8`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Cruze 1.8`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2011 a 2015`
},
{
manufacturer: `GM`,
model: `Onix 1.0`,
years: `2012 a 2016`
},
{
manufacturer: `GM`,
model: `Onix 1.4`,
years: `2012 a 2016`
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
years: `2012 a 2015`
},
{
manufacturer: `GM`,
model: `Sonic 1.6`,
years: `2012 a 2014`
},
{
manufacturer: `GM`,
model: `Spin 1.8`,
years: `2012 a 2016`
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
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: `Software utilizado`, 
description: ``, 
ballon: `Software OBDMap Suite`, 
image: `/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/AtalhoOBDMapSuite.jpg`},

{title: `Identificando a ECU.`, 
description: ``, 
ballon: `Identificando na<br />etiqueta que a ECU<br />é uma E83 ACDelco`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/ECU Delco E83 costas.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/ECU Delco E83 frente.jpg`},

{title: `Localização dos pontos de solda da ECU`, 
description: ``, 
ballon: `Região A<br />Região B<br />Região C`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Placa ECU Delco E83.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo A:`, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região A`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pontos de Soldagem A - ECU Delco E83.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo B:`, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na ordem<br />indicada na<br />Região B`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pontos de Soldagem B - ECU Delco E83.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo C:`, 
description: ``, 
ballon: `Solde os fios do<br />Programador<br />JTAG01 na<br />ordem indicada<br />na<br />Região C`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pontos de Soldagem C - ECU Delco E83.jpg`},

{title: `Todos os fios soldados`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0273 - Leitura e gravação ECU GM Delco E83/Todos os fios soldados.jpg`},

{title: `Identificando a memória 24C16:`, 
description: ``, 
ballon: `Identificando o<br />BC com a<br />memória 24C16`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 24C16.JPG`},

{title: ``, 
description: ``, 
ballon: `Identificando o<br />BC com a<br />memória 24C16`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 24C16 2.JPG`},

{title: ``, 
description: ``, 
ballon: `Localizando a<br />memória<br />24C16`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Memória 24C16.JPG`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Memória 24C16 2.JPG`},

{title: ``, 
description: ``, 
ballon: `Posicionando a pinça na memória`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pinça conectada.JPG`},

{title: `Identificando o BC com memória 25160:`, 
description: ``, 
ballon: `Identificando<br />o BC com a<br />memória<br />25160`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 25160.JPG`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 25160 2.JPG`},

{title: ``, 
description: ``, 
ballon: `Identificando<br />o pino 1 da<br />memória<br />25160`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pino 1 memória 25160.JPG`},

{title: ``, 
description: ``, 
ballon: `Posicionando a pinça<br />na memoria`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pinça conectada memória 25160.JPG`},

{title: `Identificando o BC com memória 95320:`, 
description: ``, 
ballon: `Identificando<br />o BC com a<br />memória<br />95320`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 95320.JPG`},

{title: ``, 
description: ``, 
ballon: `Localizando a memória 95320`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localizando memória 95320.JPG`},

{title: ``, 
description: ``, 
ballon: `Localizando a<br />memória<br />95320`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localizando memória 95320 2.JPG`},

{title: ``, 
description: ``, 
ballon: `Indicando a área para soldar o cabo MCU`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Área para se soldar o cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Identificando pontos de soldagem do cabo MCU.JPG`},

{title: ``, 
description: ``, 
ballon: `Todos os fios soldados`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Fios do cabo MCU já soldados.jpg`},

{title: `Identificando BC com memória 24C32`, 
description: ``, 
ballon: `Identificação do BC`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/BC com memória 24C32.JPG`},

{title: ``, 
description: ``, 
ballon: `Localização da memória 24C32`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localização da memória 24C32.JPG`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localização da memória 24C32 2 .JPG`},

{title: ``, 
description: ``, 
ballon: `Posicionado a pinça<br />na memoria`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Pinça conectada memória 24C32.JPG`},

{title: `Identificando e desmontando o painel:`, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Painel retirado do veículo.`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Painel retirado do veículo.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Localizando as 8 travas que<br />prendem a tampa do<br />painel.`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localizando travas do painel.jpg`},

{title: ``, 
description: `Retire o painel do veículo e leve-o para bancada.<br />`, 
ballon: `Com o auxílio de uma<br />chave de fenda, solte as<br />travas do painel.`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Soltando travas do painel.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU Modelo A:`, 
description: ``, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localizando pontos de soldagem modelo A.JPG`},

{title: ``, 
description: ``, 
ballon: `Todos os fios do cabo MCU soldados, coloque para atrás os fios não utilizados para evitar problemas`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Fios do cabo MCU soldados no painel modelo A.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os<br />pontos a serem<br />soldado os fios do<br />cabo MCU:<br />1=> Fio Vermelho<br />2=> Fio Amarelo<br />3=> Fio Azul<br />4=> Fio Verde<br />5=> Fio Cinza<br />6=> Fio Preto<br />7=> Fio Roxo`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Localizando pontos de soldagem modelo B.JPG`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Fios do cabo MCU soldados no painel modelo B.jpg`},

{title: `Realizando a leitura da central Imob 4 OBD Suite`, 
description: ``, 
ballon: `Após abrir o software clique<br />sobre ler para que seja feito o<br />backup do arquivo da ECU`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 1 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até o Software<br />comunicar com o OBDMap`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 2 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Siga os passos na tela do<br />OBDMap`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 3 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Aguarde até a conclusão<br />da transferência do<br />arquivo`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 4 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Salve o arquivo lido com<br />um nome de fácil<br />identificação e em um<br />lugar de sua preferência e<br />onde não possa ser<br />apagado com facilidade.`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 5 - OBDMapSuite.jpg`},

{title: ``, 
description: ``, 
ballon: `Procedimento<br />concluído com<br />sucesso, siga as<br />mensagens na<br />tela do OBDMap`, 
image: `/images/Funções Específicas/OBD0276 - Correção de Chassi ECU GM Delco E83, BC imob5 GM e Painel Imob 4/Passo 6 - OBDMapSuite.jpg`},

{title: `Salvando o arquivo da ECU no computador`, 
description: `Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabilidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.Algumas observações são importantes no momento de salvar o arquivo da ECU no computador.<br />• A realização do Backup do arquivo da ECU é de inteira responsabi`, 
ballon: `lidade do cliente. (Utilize<br />a função de leitura para realizar o backup)<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração da ECU.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura da ECU uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />`, 
image: `• Salve o arquivo de backup em um lugar de sua preferência e onde não possa ser apagado com<br />facilidade`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Correção de chassi da ECU GM Delco E83 imob 4:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Delco E83`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco E83`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Termo&nbsp;de&nbsp;uso!`,
`Essa&nbsp;funcao&nbsp;tem`,
`como&nbsp;objetivo&nbsp;a`,
`&nbsp;&nbsp;correcao&nbsp;de`,
`&nbsp;&nbsp;defeitos.&nbsp;A`,
`&nbsp;Chiptronic&nbsp;NAO`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;se`,
`&nbsp;responsabiliza`,
`&nbsp;&nbsp;&nbsp;&nbsp;pelo&nbsp;uso`,
`&nbsp;&nbsp;&nbsp;ilicito&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;funcao,`,
`&nbsp;Sendo&nbsp;de&nbsp;total`,
`responsabilidade`,
`&nbsp;&nbsp;do&nbsp;usuario.`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Li&nbsp;e&nbsp;entendi&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;os&nbsp;termos.&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;&nbsp;Nao&nbsp;Aceito&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;Aceito`,
],
help: `Tecle OK para aceitar
Tecle VOLTA para negar`
},
{lines: [
`Abra&nbsp;o&nbsp;software`,
`&nbsp;&nbsp;OBDMapSuite`,
`&nbsp;&nbsp;e&nbsp;clique&nbsp;no`,
`&nbsp;&nbsp;&nbsp;botao&nbsp;Ler`,
],
help: `Siga os passos na tela do
OBDMap Suite`
},
{lines: [
`&nbsp;`,
`Conecte&nbsp;cabo&nbsp;USB`,
`&nbsp;&nbsp;&nbsp;no&nbsp;OBDMap`,
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
help: ``
},
{lines: [
`&nbsp;Digite&nbsp;um&nbsp;nome`,
`&nbsp;para&nbsp;o&nbsp;arquivo`,
`&nbsp;&nbsp;utilizando&nbsp;o`,
`&nbsp;&nbsp;OBDMap&nbsp;Suite`,
],
help: `No computador digite um nome para o
arquivo de Backup que seja possível
reconhecer de qual carro pertence. Número de
Chassi e/ ou placa do carro podem ser uma
boa opção. Para dúvidas de como
salvar o arquivo clique aqui.`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;VIN:00000`,
`000000000000`,
`<br />`,
],
help: `Insira o chassi do veículo de destino`
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
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando correção de chassi da ECU GM Delco E83 imob 5:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>Delco E83`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Delco E83`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Termo&nbsp;de&nbsp;uso!`,
`Essa&nbsp;funcao&nbsp;tem`,
`como&nbsp;objetivo&nbsp;a`,
`&nbsp;&nbsp;correcao&nbsp;de`,
`&nbsp;&nbsp;defeitos.&nbsp;A`,
`&nbsp;Chiptronic&nbsp;NAO`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;se`,
`&nbsp;responsabiliza`,
`&nbsp;&nbsp;&nbsp;&nbsp;pelo&nbsp;uso`,
`&nbsp;&nbsp;&nbsp;ilicito&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;funcao,`,
`&nbsp;Sendo&nbsp;de&nbsp;total`,
`responsabilidade`,
`&nbsp;&nbsp;do&nbsp;usuario.`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Li&nbsp;e&nbsp;entendi&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;os&nbsp;termos.&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;&nbsp;Nao&nbsp;Aceito&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;Aceito`,
],
help: `Tecle OK para aceitar
Tecle VOLTA para negar`
},
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
help: `Siga os passos na tela do
OBDMap Suite`
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
help: ``
},
{lines: [
`&nbsp;Digite&nbsp;um&nbsp;nome`,
`&nbsp;para&nbsp;o&nbsp;arquivo`,
`&nbsp;&nbsp;utilizando&nbsp;o`,
`&nbsp;&nbsp;aplicativo!`,
],
help: `No computador digite um nome para o arquivo de
Backup que seja possível reconhecer de qual carro
pertence. Número de Chassi e/ ou placa do carro
podem ser uma boa opção. Para dúvidas de como
salvar o arquivo clique aqui.`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;VIN:0000`,
`0000000000000`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;ECU!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Insira o chassi do veículo de destino`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando correção do chassi do painel imob 4:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 4 Agile`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4 Agile`, `>Painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Termo&nbsp;de&nbsp;uso!`,
`Essa&nbsp;funcao&nbsp;tem`,
`como&nbsp;objetivo&nbsp;a`,
`&nbsp;&nbsp;correcao&nbsp;de`,
`&nbsp;&nbsp;defeitos.&nbsp;A`,
`&nbsp;Chiptronic&nbsp;NAO`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;se`,
`&nbsp;responsabiliza`,
`&nbsp;&nbsp;&nbsp;&nbsp;pelo&nbsp;uso`,
`&nbsp;&nbsp;&nbsp;ilicito&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;funcao,`,
`&nbsp;Sendo&nbsp;de&nbsp;total`,
`responsabilidade`,
`&nbsp;&nbsp;do&nbsp;usuario.`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Li&nbsp;e&nbsp;entendi&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;os&nbsp;termos.&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;&nbsp;Nao&nbsp;Aceito&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;Aceito`,
],
help: `Tecle OK para aceitar
Tecle VOLTA para negar`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;VIN:0000`,
`0000000000000`,
`<br />`,
],
help: `Insira o chassi do veículo de destino`
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando correção de chassi do BC imob 5:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Imob 5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`, `>BCM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BCM`, `>Gravar chassi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Carregando...&nbsp;`,
`Aguarde`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Termo&nbsp;de&nbsp;uso!`,
`Essa&nbsp;funcao&nbsp;tem`,
`como&nbsp;objetivo&nbsp;a`,
`&nbsp;&nbsp;correcao&nbsp;de`,
`&nbsp;&nbsp;defeitos.&nbsp;A`,
`&nbsp;Chiptronic&nbsp;NAO`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;se`,
`&nbsp;responsabiliza`,
`&nbsp;&nbsp;&nbsp;&nbsp;pelo&nbsp;uso`,
`&nbsp;&nbsp;&nbsp;ilicito&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;funcao,`,
`&nbsp;Sendo&nbsp;de&nbsp;total`,
`responsabilidade`,
`&nbsp;&nbsp;do&nbsp;usuario.`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Li&nbsp;e&nbsp;entendi&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;os&nbsp;termos.&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;&nbsp;Nao&nbsp;Aceito&nbsp;&nbsp;`,
`&lt;OK&gt;&nbsp;Aceito`,
],
help: `Tecle OK para aceitar
Tecle VOLTA para negar`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;VIN:0000`,
`0000000000000`,
`<br />`,
],
help: `Insira o chassi do veículo de destino`
},
{lines: [
`&nbsp;&nbsp;Selecione&nbsp;a`,
`&nbsp;&nbsp;seguir,&nbsp;o&nbsp;BC`,
`&nbsp;&nbsp;&nbsp;&nbsp;desejado`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
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
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `ATENCAO! Arquivo da ECU Corrompido! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;&nbsp;&nbsp;Arquivo&nbsp;da`,
`ECU&nbsp;Corrompido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `ATENCAO! Arquivo da BC corrompido! Aperte <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;Arquivo&nbsp;da&nbsp;BC`,
`&nbsp;&nbsp;corrompido!`,
`&nbsp;&nbsp;Aperte&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `ATENCAO! Arq. do Painel Corrompido! <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;Arq.&nbsp;do&nbsp;Painel`,
`&nbsp;&nbsp;Corrompido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`• Mal contato dos fios do cabo MCU com o painel;`,`• Painel com problema;`,`• Os fios do cabo MCU podem ter sido ligados errado no painel.`,`• Mau contato dos fios do programador JTAG01 com a ECU;`,`• ECU com problema;`,`• Os fios do programador JTAG01 podem ter sido ligados errado na ECU.`,`• Mau contato dos fios do cabo MCU com o BC;`,`• BC com problema;`,`• Os fios do cabo MCU podem ter sido ligados errado no BC.`,`• Má conexão da pinça na memória,`,],
solutions: [
`Conferir correta ligação do cabo MCU`,`Conferir correta ligação do programador JTAG01.`,`Conferir correta conexão da pinça`,`Conferir bom estado do módulo.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinca&nbsp;invertida!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória, ou seja, o pino 1 da pinça não coincide com o pino 1 da memória (o pino 1 fica do lado vermelho do cabo),`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa).`,`Memória ou módulo com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória.`,]
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
