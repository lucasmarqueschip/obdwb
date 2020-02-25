//Capa
nomeCarga = `Manual Carga -  OBD0136<br />Programação da 1ª Chave Toyota Immo 3`;
revCarga = `Rev. 6`;
dataManual = `Maio 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Prepara o imobilizador para a apresentação de uma nova chave, quando todas as chaves foram perdidas.`,
`É necessário retirar o imobilizador do veículo, e levá-lo para bancada, após o procedimento de preparação, conecte o imobilizador ao veículo e será possível realizar a apresentação de uma chave MASTER da Toyota com transponder específico para o veículo por procedimento manual. Para a apresentação de novas chaves utilize a carga por diagnóstico: OBD0083 - Programação de Chaves Toyota Imob3.`,
`Ao gerar a primeira chave, todas as outras serão apagas.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Toyota`,
model: `Hilux SW4 3.0 Diesel (ID4D DST PLUS 676)`,
years: `2009 a 2015`
},
{
manufacturer: `Toyota`,
model: `Hilux SW4 2.7 e 4.0 Gasolina (ID4D DST PLUS 676)`,
years: `2009 a 2015`
},
{
manufacturer: `Toyota`,
model: `Hilux SW4 2.7 Flex (ID4D DST PLUS 676)`,
years: `2012 a 2015`
},
{
manufacturer: `Toyota`,
model: `RAV4 2.4 Gasolina (ID4D DST PLUS 676)`,
years: `2010 a 2015`
},
{
manufacturer: `Toyota`,
model: `Corolla (ID4D 70)`,
years: `2012 a 2014`
},
{
manufacturer: `Toyota`,
model: `Etios (ID4D 67)`,
years: `2012 a 2015`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Chave utilizada:`, 
description: ``, 
ballon: `Chave Master Toyota ID4D 67 para o Etios, ID4D 70 para o Corolla ou ID4D DST PLUS 67G para Hilux e RAV.`, 
image: `/images/Chaves e Telecomandos/Chave Master Toyota ID4D 67.jpg`},

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
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: `Localizando imobilizador da Hilux/SW4:`, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire o porta objetos.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Localizando imobilizador da Hilux_SW4.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o duto de ar central.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Removendo painel.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova os conectores.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova os conectores.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire o parafuso 1 que prende a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Retire o parafuso 1.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire a moldura do painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Retire a moldura do painel.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire os 3 parafusos que prendem o painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Desmontando painel 2.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire o painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Retire o painel.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o conector 1 do painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Removendo o conector 1.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o conector 2 do painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o conector 2.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova as borrachas de vedação.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova as borrachas.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Retire a alça de segurança.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Retire a alça de segurança.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova a moldura M1.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova a moldura M1.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o parafuso 5.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Sem título.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o parafuso 6.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o parafuso 6.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova os parafusos 7 e 8.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova os parafusos 7 e 8.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Desconecte o conector do airbag e remova os parafusos 9 e 10.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova os parafusos 9 e 10.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o airbag para cima e retire a tampa de proteção.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o airbag.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o duto de ar lateral.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o duto de ar lateral.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o parafuso 11.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o conector 11.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova o parafuso 12.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova o conector 12.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Como auxílio de outra pessoa, retire o painel inteiro.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Retirando painel inteiro.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova as 2 presilhas do duto de ar.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Removendo as presilhas.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova a terceira presilha.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova a terceira presilha.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova a quarta presilha.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Remova a quarta presilha.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `O imobilizador ficalocalizado atrás do painel.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Imobilizador fica atras do painel.jpg`},

{title: ``, 
description: `Para ter acesso ao imobilizador é preciso desmontar o painel do veículo. Siga as instruções abaixo:<br /><br /><font color="red"><center>Por segurança, desconecte a bateria do veículo.</center></font>`, 
ballon: `Remova os conectores do imobilizador e leve-o para bancada.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Hilux_SW4/Removendo o imobilizador.jpg`},

{title: `Localizando o imobilizador do Corolla:`, 
description: ``, 
ballon: `Painel do Corolla desmontado: O imobilizador se encontra entre o feltro e a caixa de ar como indica a seta.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/Corolla/Painel Corolla desmontado.jpg`},

{title: `Localizando o imobilizador da Rav 4:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Localizando o imobilizador da Rav 4.jpg`},

{title: `Localizando o imobilizador do Etios:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Localizando o imobilizador da Etios.jpg`},

{title: `Identificando o imobilizador modelo A:`, 
description: `O imobilizador abaixo é encontrado nos veículo: Corolla, Hillux/SW4 e RAV4<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Identificando o imobilizador modelo A.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Localizando os pontos de soldagem do cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Localizando os pontos de soldagem do cabo MCU 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Não inverter os fios.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo A/Todos os acessórios conectados.jpg`},

{title: `Identificando o imobilizador modelo B:`, 
description: `O imobilizador abaixo é encontrado no veículo: Etios.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo B/Identificando o imobilizador modelo B.jpg`},

{title: `Localizando e conectando a pinça na memória 93C66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo B/Localizando e conectando a pinça na memória 93C66.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo B/Conectando a pinça na memória.jpg`},

{title: `Apresentando a 1ª chave:`, 
description: `<font color="red">Observação:</font> O veículo Etios não possui luz do code.<br /><br />Depois de preparado o imobilizador, siga os passos abaixo para realizar a apresentação da primeira chave MASTER no veículo:<br /><br />1. Conecte o imobilizador ao veículo. (A luz do code deve ficar piscando)<br />2. Ligue a chave por 5 segundos. (A luz do code deve ficar acesa)<br />3. Dê a partida e aguarde 5 segundos. (A luz do code se mantém acesa)<br />4. Desligue e retire a chave, aguarde 5 segundos. (A luz do code deve ficar piscando)<br />5. Insira a chave e faça o procedimento de ligar e desligar a chave 5 vezes. Este procedimento deve ser feito em até 5 segundos.<br />6. Verifique se a luz do code apagou, caso não apague, repita o procedimento.<br /><br />Para a apresentação de novas chaves, utilize a carga por diagnóstico: OBD0083 - Programação de Chaves Toyota Imob3.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0136 Programação da 1ª chave Toyota Immo 3/modelo B/Apresentando a 1ª chave.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a preparação do imobilizador:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>Toyota`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Toyota`, `>Imob 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 3`, `>Gerar 1a chave`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`Corolla`,
`<br />`,
],
help: `Utilizando as setas para cima e para baixo selecione o veículo: Corolla, Etios,
Hillux/SW4 ou RAV4.`
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo&nbsp;&nbsp;`,
`&nbsp;&nbsp;MCU&nbsp;no&nbsp;imob.`,
`segundo&nbsp;o&nbsp;manual&nbsp;`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Ou conecte a pinça, caso selecionado o veículo Etios com imobilizador modelo B.`
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
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Neste momento o imobilizador está preparado para fazer o procedimento
de apresentação da 1ª chave no veículo.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Pinca invertida!`,
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
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato no cabo MCU com o imobilizador,`,`Imobilizador ou memória com problema.`,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes a página 11.`,]
},
{ label: `ERRO na gravacao do imobilizador!`,
screens: [
`&nbsp;`,
`ERRO&nbsp;na&nbsp;gravacao&nbsp;`,
`do&nbsp;imobilizador!`,
`<br />`,
],
causes: [
`O cabo MCU pode não estar soldado corretamente,`,`Imobilizador ou memória com problema. `,``,``,],
solutions: [
`Conferir a correta posição do cabo MCU na placa, todos os fios do cabo MCU deverão estar soldados nos pontos correspondentes à página 11.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
