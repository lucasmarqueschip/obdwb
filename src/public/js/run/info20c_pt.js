//Capa
nomeCarga = `Manual Carga -  OBD0020<br />Fiat Code 2 Body Computer (senha e chaves)`;
revCarga = `Rev. 8`;
dataManual = `Janeiro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Gerar transponders.`,
`Adicionar chaves automaticamente em toda linha Fiat que utiliza Body Computer (BC).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Doblo 1.6`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Doblo 1.8`,
years: `2003 a 2007`
},
{
manufacturer: `Fiat`,
model: `Idea 1.4`,
years: `2004 a 2009`
},
{
manufacturer: `Fiat`,
model: `Idea 1.8`,
years: `2004 a 2009`
},
{
manufacturer: `Fiat`,
model: `Marea 1.6`,
years: `2005 a 2007`
},
{
manufacturer: `Fiat`,
model: `Palio 1.6 16v`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Palio 1.8`,
years: `2002 a 2004`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.0 16v`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Palio Fire 1.3 16v`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Punto 1.4`,
years: `2007 a 2012`
},
{
manufacturer: `Fiat`,
model: `Punto 1.8`,
years: `2007 a 2009`
},
{
manufacturer: `Fiat`,
model: `Siena 1.6 16v`,
years: `2000 a 2003`
},
{
manufacturer: `Fiat`,
model: `Siena 1.8`,
years: `2002 a 2007`
},
{
manufacturer: `Fiat`,
model: `Siena Fire 1.0 16v`,
years: `2001 a 2003`
},
{
manufacturer: `Fiat`,
model: `Stilo 1.8`,
years: `2003 a 2012`
},
{
manufacturer: `Fiat`,
model: `Stilo 2.4`,
years: `2003 a 2012`
},
{
manufacturer: `Fiat`,
model: `Strada 1.6`,
years: `1999 a 2002`
},
{
manufacturer: `Fiat`,
model: `Strada 1.8`,
years: `2002 a 2007`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder utilizado é o Megamos Crypto 48, tratado neste manual por T48.`, 
image: `/images/Transponders/Megamus T48.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.`, 
image: `/images/Acessórios/Modulo de Transponder.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Uitlilze o cabo universal do Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Posicionamento do transponder no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos está localizada na área A4.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},

{title: `Identificando e desmontando o BC Delphi 93LC66 sem trava elétrica:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Desmontando.jpg`},

{title: ``, 
description: ``, 
ballon: `Detalhe deste Body Computer, a placa não ocupa toda a caixa.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Sem Caixa.jpg`},

{title: `Identificando a memória 93LC66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Identificando a memória soic 93LC66.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 sem trava elet/Localizando os pontos para soldar o cabo MCU.jpg`},

{title: `Identificando e desmontando o BC Delphi 93LC66 com trava elétrica:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Desmontando o Body Computer.jpg`},

{title: `Identificando a memória 93LC66:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Identificando a memória soic 93LC66.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando a região da placa onde serão soldados os fios.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Localizando os pontos para soldagem 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/93LC66 com trava elet/Localizando os pontos para soldagem 2.jpg`},

{title: `Identificando e desmontando o BC Marelli MC912DG128A:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Desmontando o Body Computer.jpg`},

{title: `Identificando o microcontrolador MC912DG128A:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Identificando o microcontrolador MC912DG128A.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando a região da placa onde serão soldados os fios.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Localizando os pontos para soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Soldando o Cabo MCU no BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Body Computer.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC912DG128A/Cabo MCU soldado na BC.jpg`},

{title: `Identificando e desmontando o BC Marelli MC9S12DG256B (Veículo Stilo 2004 a 2007):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Desmontando o Body Computer.jpg`},

{title: `Identificando o microcontrolador MC9S12DG256B :`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Identif o microcontrolador MC9S12DG256B.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando a região da placa onde serão soldados os fios.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Localizando os pontos para soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Soldando o Cabo MCU no BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Body Computer.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Stilo (2004 a 2007)/Soldando o Cabo MCU no BC 2.jpg`},

{title: `Identificando e desmontando o BC Marelli MC9S12DG256B (Linha Fiat):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identificando o Body Computer2.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Desmontando o Body Computer.jpg`},

{title: `Identificando o microcontrolador MC9S12DG256B:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Identif o microcontrolador MC9S12DG256B.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando a região da placa onde serão soldados os fios.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5 => Fio Azul`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Localizando os pontos para soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Algumas placas tem desenho um pouco diferente da anterior. Ao lado é mostrado outro modelo, muda principalmente os pontos de referência em volta do ponto 1.<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5 => Fio Azul`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Localizando os pontos para soldagem 3.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Soldando o Cabo MCU no BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Body Computer.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/MC9S12DG256B/Linha FIAT (2004 a 2007)/Soldando o Cabo MCU no BC 2.jpg`},

{title: `Identificando e desmontando o BC Marelli 95160:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Identificando o Body Computer.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave de fenda para destravar o BC.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Desmontando o Body Computer.jpg`},

{title: `Identificando a memória 95160 (516WP):`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Identificando a memória 95160 (516WP).jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: `Identificando a região da placa onde serão soldados os fios.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Localizando os pontos para soldagem.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Amarelo<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Verde<br />5 => Fio Azul<br />6 => Fio Cinza`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Localizando os pontos para soldagem 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção:<br />Não trocar a posição dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap. Os fios que não estiverem sendo usados devem ser dobrados para trás como na foto, para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Soldando o Cabo MCU no BC.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU soldado no Body Computer.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/95160/Soldando o Cabo MCU no BC 2.jpg`},

{title: `Procedimento para evitar interferência na comunicação do cabo MCU com a BC`, 
description: `Uma causa possível é a interferência do BC na comunicação, para solucionar este problema é necessário fazer a ligação do fio branco nos pontos indicados a seguir:<br /><br />Observação: O fio branco deve ser manuseado com cuidado, não o deixe encostar-se a outros pontos do circuito, e após o uso é recomendável que se corte a ponta decapada para evitar um contato acidental.<br /><br /><br /><br />`, 
ballon: `BC Marelli MC912DG128A (Stilo 2003):<br /><br />Conecte o fio branco do cabo MCU no local indicado na foto.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC912DG128A (Stilo 2003).jpg`},

{title: ``, 
description: `Uma causa possível é a interferência do BC na comunicação, para solucionar este problema é necessário fazer a ligação do fio branco nos pontos indicados a seguir:<br /><br />Observação: O fio branco deve ser manuseado com cuidado, não o deixe encostar-se a outros pontos do circuito, e após o uso é recomendável que se corte a ponta decapada para evitar um contato acidental.<br /><br /><br /><br />`, 
ballon: `BC Marelli MC9S12DG256B (Stilo 2004 a 2007)  Modelo A:<br /><br />Conecte o fio branco do cabo MCU no local indicado na foto.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC9S12DG256B (Stilo 2004 a 2007) Modelo A.jpg`},

{title: ``, 
description: `Uma causa possível é a interferência do BC na comunicação, para solucionar este problema é necessário fazer a ligação do fio branco nos pontos indicados a seguir:<br /><br />Observação: O fio branco deve ser manuseado com cuidado, não o deixe encostar-se a outros pontos do circuito, e após o uso é recomendável que se corte a ponta decapada para evitar um contato acidental.<br /><br /><br /><br />`, 
ballon: `BC Marelli MC9S12DG256B (Stilo 2004 a 2007)  Modelo B:<br /><br />Conecte o fio branco do cabo MCU no local indicado na foto.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC9S12DG256B (Stilo 2004 a 2007) Modelo B.jpg`},

{title: ``, 
description: `Uma causa possível é a interferência do BC na comunicação, para solucionar este problema é necessário fazer a ligação do fio branco nos pontos indicados a seguir:<br /><br />Observação: O fio branco deve ser manuseado com cuidado, não o deixe encostar-se a outros pontos do circuito, e após o uso é recomendável que se corte a ponta decapada para evitar um contato acidental.<br /><br /><br /><br />`, 
ballon: `BC Marelli MC9S12DG256B (Linha FIAT 2004 a 2007):<br /><br />Conecte o fio branco do cabo MCU no local indicado na foto.`, 
image: `/images/Funções Específicas/OBD0020 Fiat Code2 BCM/Fio Branco/BC Marelli MC9S12DG256B (Linha FIAT 2004 a 2007).jpg`},
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
{title: `Realizando a Programação de Chaves via Diagnóstico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;código&nbsp;eletrônico`,
`<br />`,
`<br />`,
],
help: `Digite o código eletrônico (PIN) que foi lido no momento da preparação do transponder.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;Chave`,
`e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
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
`Número&nbsp;de&nbsp;Chaves:&nbsp;*/*`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;SIM(OK)`,
`<br />`,
],
help: `Aperte (OK) para programar mais e
(VOLTA) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Somente Gerar transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Delphi`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`<br />`,
`<br />`,
],
help: `Selecione:
"BC Delphi 93LC66"
ou "Marelli 128/256"
ou "Marelli 95160"`
},
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
`PIN:&nbsp;*****`,
`OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra o PIN do BC (Partida de emergência), tecle OK.`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Programadas:&nbsp;`,
`*/*&nbsp;OK&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra a quantidade de chaves ja programadas. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apresentar&nbsp;por`,
`Diagnóstico?`,
`<br />`,
],
help: `Se desejar apenas gerar chaves neste momento, (necessita apresentação por diagnóstico depois de geradas as chaves) tecle OK!`
},
{lines: [
`Chaves&nbsp;geradas`,
`deverão&nbsp;ser`,
`apresentadas`,
`por&nbsp;dispositivo`,
`de&nbsp;diagnóstico,`,
`OK&nbsp;para&nbsp;prosseguir!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Posicione o transponder T48 no Módulo de Transponder, tecle OK!`
},
{lines: [
`&nbsp;`,
`GRAVANDO&nbsp;T48`,
`AGUARDE.`,
`<br />`,
],
help: ``
},
{lines: [
`Gravação&nbsp;&nbsp;Concluida!`,
`Número&nbsp;de&nbsp;Transponders&nbsp;pré-codificados:&nbsp;`,
`*`,
`Deseja&nbsp;pré-codificar&nbsp;mais?`,
`&lt;OK&gt;&nbsp;Para&nbsp;outro`,
`&lt;Volta&gt;&nbsp;Próxima&nbsp;etapa`,
],
help: `Chave programada (OK) para programar outra, volte ao passo 14 ou tecle (VOLTA) para encerrar o procedimento.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`Comunicação!`,
`<br />`,
],
causes: [
` Defeito no carro, parte elétrica,`,` Atualização antiga do OBDMap,`,` Má conexão dos acessórios.`,],
solutions: [
` Verificar parte elétrica do carro, fusíveis, etc,`,` Verificar se utiliza cabo universal e adaptador A3,`,` Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo,`,` Verificar atualização mais recente com suporte técnico, talvez esta carga tenha tido`,`alterações.`,]
},
{ label: `BCM Cheia!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;BCM&nbsp;Cheia!`,
`<br />`,
`<br />`,
],
causes: [
` O BCM ja está com 8 chaves programadas.`,],
solutions: [
`Apagar todas as chaves antigas, e programar novamente todas as que forem ser`,`utilizadas.`,]
},
{ label: `Body Computer nao suportado!`,
screens: [
`&nbsp;`,
`Body&nbsp;Computer`,
`não&nbsp;suportado!`,
`<br />`,
],
causes: [
` BC não corresponde a aplicação.`,],
solutions: [
` Verifique aplicação.`,]
},
{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;gravar&nbsp;ID48`,
`&lt;OK&gt;&nbsp;para&nbsp;repetir`,
`<br />`,
],
causes: [
` Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,` Transponder  com problema;`,` O transponder utilizado não é um ID48 virgem;`,` Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
` Conferir a correta posição do transponder no módulo de transponder;`,` Utilizar um transponder ID48 virgem;`,` Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
},
{ label: `ERRO! Aguarde 5 minutos e tente novamente <OK>`,
screens: [
`ERRO!`,
`Aguarde&nbsp;5`,
`minutos&nbsp;e&nbsp;tente`,
`novamente`,
`&lt;OK&gt;`,
],
causes: [
` O BCM está com defeito.`,],
solutions: [
` Desligue e ligue da bateria, tente novamente depois de 5 minutos.`,]
},
{ label: `BC DESCONHECIDO! COD: ** ** ** ** ** ** ** **`,
screens: [
`BC&nbsp;DESCONHECIDO!`,
`COD:&nbsp;**&nbsp;**&nbsp;**&nbsp;**`,
`**&nbsp;**&nbsp;**&nbsp;**`,
`<br />`,
],
causes: [
` Este BC não inclui em nossa tabela de aplicação.`,],
solutions: [
` Verificar aplicação,`,` Consulte o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
