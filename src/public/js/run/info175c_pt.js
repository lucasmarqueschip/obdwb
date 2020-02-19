//Capa
nomeCarga = "Geração Code 2 BC (DELPHI) Via OBD";
revCarga = "Rev. 2";
dataManual = "Novembro 2014";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Adiciona até 8 chaves ao veículo.`,
`Gera a primeira chave do veículo, quando se perdeu todas as chaves. `,
`Faz a leitura do código eletrônico via cabo MCU, necessário apenas quando for gerar a primeira chave e não souber o código eletrônico. `,
`<obs>`,
`Observação:`,
`Para gerar a primeira chave é necessário ter o código eletrônico, que normalmente é obtido pelo CODE CARD, mas também pode ser obtido por leitura do BC em bancada por cabo MCU como descrito na Página 13.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Doblo 1.3",
years: "2000 a 2005"
},
{
manufacturer: "Fiat",
model: "Doblo 1.8",
years: "2000 a 2005"
},
{
manufacturer: "Fiat",
model: "Palio 1.0",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Palio 1.3",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Palio 1.8",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Siena 1.0",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Siena 1.3",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Siena 1.6",
years: "2000 a 2003"
},
{
manufacturer: "Fiat",
model: "Siena 1.8",
years: "2000 a 2003"
},
];
applicationObs = createObs("Observação 1: O veículo deve utilizar o BC DELPHI 93LC66, utilize a função de identificação BC FIAT para identificar seu BC conforme descrito na Página 20.", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Conectando os acessórios:", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 4.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 5.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0175/Conectando os acessórios 6.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0175/Todos os acessorios.jpg"},

{title: "Leitura do código eletrônico via MCU:", 
description: "Identificando o Body Computer 93LC66 sem trava elétrica:<br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0175/idBc.jpg"},

{title: "Desmontando o Body Computer:", 
description: "", 
ballon: "Utilize uma chave de fenda para destravar o BC.", 
image: "/images/Funções Específicas/OBD0175/desmontandoBc.jpg"},

{title: "", 
description: "", 
ballon: "Detalhe deste Body Computer, a placa não ocupa toda a caixa.", 
image: "/images/Funções Específicas/OBD0175/detalhePlaca.jpg"},

{title: "Identificando a memória soic 93LC66:", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0175/idMemoria.jpg"},

{title: "Localizando os pontos para soldar o cabo MCU:", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.<br />Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0175/pontosDeSolda.jpg"},

{title: "Identificando o Body Computer 93LC66 com trava", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0175/idBc93LC66.jpg"},

{title: "Desmontando o Body Computer", 
description: "Utilize uma chave de fenda para destravar o BC.", 
ballon: "Utilize uma chave de fenda para destravar o BC.", 
image: "/images/Funções Específicas/OBD0175/desmontandoBc.jpg"},

{title: "Identificando a memória soic 93LC66", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0175/idMemoria93LC66.jpg"},

{title: "Localizando os pontos para soldagem", 
description: "", 
ballon: "Identificando a região da placa onde serão soldados os fios.", 
image: "/images/Funções Específicas/OBD0175/pontosParaSoldagem.jpg"},

{title: "", 
description: "", 
ballon: "Atenção:<br />Não trocar as posições dos fios. Primeiro solde os fios no BC, depois ligue o cabo MCU no OBDMap.<br />Os fios que não estiverem sendo usados devem ser dobrados para trás para que não tenham contato com o BC e assim evitando danos ao BC e ao OBDMap.<br />1 => Fio Verde<br />2 => Fio Preto<br />3 => Fio Vermelho<br />4 => Fio Roxo<br />5 => Fio Azul<br />6 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0175/pontosdeSolda2.jpg"},

{title: "Procedimento modulo de transponder:", 
description: "Conecte o módulo de transponder no OBDMap e em seguida conecte a fonte de alimentação no módulo de transponder, conecte o cabo MCU no BC e em seguida no OBDMap.", 
ballon: "Atenção para obedecer as duas sequências para maior segurança na operação:<br />1ª - Conectar o módulo de Transponder no OBDMap, depois conectar a fonte de alimentação no Módulo de Transponder.<br />2ª - Conectar o cabo MCU no BC, depois conectar no OBDmap.", 
image: "/images/Funções Específicas/OBD0175/Modulo de transponder.jpg"},

{title: "Todos os acessórios conectados :", 
description: "Após todos os acessórios conectados, siga as instruções de operação no menu do OBDMap.", 
ballon: "É importante apertar bem os parafusos fixadores de todos os conectores para evitar possíveis mau contatos.", 
image: "/images/Funções Específicas/OBD0175/Todos os equipamentos conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando leitura do código eletrônico via MCU:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Delphi`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
