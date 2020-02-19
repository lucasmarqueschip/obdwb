//Capa
nomeCarga = "Geração de chaves Fiat Code 2 BC Continental";
revCarga = "Rev. 5";
dataManual = "Junho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de até 8 chaves em veículos que utilizam sistema Code 2 com BC Continental`,
`MPC5606B. `,
`No caso da geração do Telecomando o mesmo já fica habilitado no veículo.`,
`Realiza a restauração do arquivo de Backup no BC em que por algum motivo não foi`,
`possível finalizar o procedimento de geração de chaves no BC.`,
``,
`Esta função é feita via cabo MCU e utiliza o Módulo de Transponder conectado ao OBDMap.`,
``,
`É necessário a utilização de um computador ou notebook com entrada USB e a utilização do`,
`software OBDMap Suite para salvar o arquivo da BC`,
`<obs>`,
`Observações`,
`Conferir o modelo e o Hardware do BC conforme a Identificação neste manual, já que em`,
`alguns veículos da aplicação não é utilizado o BC Continental com processador MPC5606B,`,
`nesse caso essa carga não realiza o serviço.`,
`Não execute a carga em um BC que não seja compatível, correndo o risco de danificar o módulo.`,
``,
`A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.`,
`Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação, pois`,
`o mesmo poderá ser usado para futura restauração do BC.`,
`Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga.`,
``,
`Algumas unidades dos veículos tratados neste manual podem apresentar mau funcionamento`,
`na chave de seta devido a um defeito de fábrica do módulo. A execução da carga não afeta de`,
`nenhuma maneira o funcionamento das setas e faróis. Caso haja algum problema relacionado,`,
`consultar junto a concessionária se o veículo necessita de recall.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Uno Evo 1.0",
years: "2015 a 2017"
},
{
manufacturer: "Fiat",
model: "Uno Evo 1.4",
years: "2015 a 2017"
},
{
manufacturer: "Fiat",
model: "Mobi 1.0",
years: "2016 a 2017"
},
{
manufacturer: "Fiat",
model: "Toro 1.8",
years: "2016 a 2017"
},
{
manufacturer: "Fiat",
model: "Toro 2.0",
years: "2016 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "", 
description: "", 
ballon: "", 
image: ""},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar a BC ao OBDMap.", 
image: "/images/Acessórios/Cabo MCU1.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Epoxi ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando o BC Continental MPC5606B:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/BC Continental MPC5606B.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/BC Continental MPC5606B etiqueta.jpg"},

{title: "Localizando os pontos para soldagem:", 
description: "Para melhor visualização dos pontos a serem soldados, foi separado em 3 áreas:<br />", 
ballon: "• Área A: localizada na face superior da placa que contém o processador:", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Localizando area A para soldagem do cabo MCU.jpg"},

{title: "", 
description: "Para melhor visualização dos pontos a serem soldados, foi separado em 3 áreas:<br />", 
ballon: "Área B e Área C: localizadas na face Inferior da placa:", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Localizando area B e C para soldagem do cabo MCU.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Identificando os pontos a<br />serem soldados os fios do<br />cabo MCU na Área A:<br />1 => Fio Amarelo", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Localizando pontos a serem soldados os fios do cabo MCU na area A.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU na Área B:<br />2 => Fio Vermelho", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Localizando pontos a serem soldados os fios do cabo MCU na area B.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU na Área C:<br />3 => Fio Preto<br />4 => Fio Cinza<br />5 => Fio Roxo<br />6 => Fio Verde<br />7 => Fio Azul", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Localizando pontos a serem soldados os fios do cabo MCU na area C.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Todos os acessórios conectados.jpg"},

{title: "Passos na tela do OBDMap Suite", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Após salvar o arquivo prossiga com a função no OBDMap.", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Salvando arquivo da ECU no computador.jpg"},

{title: "", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Após abrir o software clique sobre<br />ler para que seja feito o backup dos<br />arquivos atualmente existentes no<br />OBDMap", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Passo 1 - OBDMapSuite.jpg"},

{title: "", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Aguarde até o Software<br />comunicar com o OBDMap", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Passo 2 - OBDMapSuite.jpg"},

{title: "", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Aguarde até a conclusão da<br />transferência do arquivo", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Passo 4 - OBDMapSuite.jpg"},

{title: "", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Salve o arquivo lido com<br />um nome de fácil<br />identificação e em um<br />lugar de sua preferência e<br />onde não possa ser<br />apagado com facilidade", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Passo 5 - OBDMapSuite.jpg"},

{title: "", 
description: "Salvando o arquivo do BC no computador:<br />Algumas observações são importantes no momento de salvar o arquivo do BC no computador.<br />• A realização do Backup do arquivo do BC é de inteira responsabilidade do cliente.<br />• Portanto certifique-se de nomear o arquivo de maneira coerente e de fácil identificação,<br />pois o mesmo poderá ser usado para futura restauração do BC.<br />• Como sugestão, indicamos nomear os arquivos com o modelo/ano, placa do carro e/ ou<br />chassi.<br />• Salve o arquivo em uma pasta conhecida, e mantenha backup desses arquivos para evitar<br />transtornos.<br />• Não nos responsabilizamos por qualquer condição de erro causada pelo mau uso da carga<br />e/ou software.<br />Ao término da leitura do BC uma janela para salvar o arquivo é aberta no software<br />Digite o nome do arquivo e clique em salvar.<br />", 
ballon: "Procedimento concluído<br />com sucesso", 
image: "/images/Funções Específicas/OBD0246 - Geração de chaves Fiat Code 2 BC Continental/Passo 6 - OBDMapSuite.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando geração de transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Mobi`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Continental`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `BC LOTADO! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;BC&nbsp;LOTADO!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
`Estão programadas 8 chaves na BC.`,``,],
solutions: [
`Prosseguir apagará todas as chaves da BC para iniciar o procedimento de geração.`,]
},

{ label: `Chave Repetida! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Chave&nbsp;Repetida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave utilizada já foi utilizada no procedimento.`,],
solutions: [
`Utilizar um transponder PCF7939MA virgem ou Telecomando HITAG 128Bits AES.`,]
},

{ label: `Transponder Bloqueado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Bloqueado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilizar um transponder PCF7939MA virgem ou Telecomando HITAG 128Bits AES.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
