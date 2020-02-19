//Capa
nomeCarga = "Preparação e Apresentação de Chaves Fiat Code 2 Fase 3 Painel VDO via OBD";
revCarga = "Rev. 1";
dataManual = "Maio 2013";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de transponders em veículos que utilizam o sistema CODE 2 FASE 3 com painel VDO (Siemens) via OBD (é possível programar até 8 chaves).`,
`<obs>`,
`Observação: As chaves que não forem apresentadas e já estavam programadas, ficarão bloqueados para funcionar no veículo, portanto é necessário passar pela apresentação todas as chaves que se deseja manter funcionando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Palio 1.0",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Palio 1.4",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Palio 1.6",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Siena 1.0",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Siena 1.4",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Strada 1.4",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Strada 1.6",
years: "2008 a 2013"
},
{
manufacturer: "Fiat",
model: "Strada 1.8",
years: "2008 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Identificando o modelo de painel:", 
description: "", 
ballon: "Geralmente os painéis VDO e Marelli com sistema CODE 2 FASE 3 são como este.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Identificando o modelo de painel.jpg"},

{title: "", 
description: "Uma maneira de identificar qual modelo de painel o veículo utiliza sem desmontá-lo é observando se é visível a base do ponteiro olhando lateralmente o painel. No painel Marelli é visível uma base branca, no VDO não é visível.<br />", 
ballon: "Detalhe do ponteiro de um painel VDO. Não se vê a base branca no centro. Essa carga faz esse painel.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Ponteiro painel VDO.jpg"},

{title: "", 
description: "Uma maneira de identificar qual modelo de painel o veículo utiliza sem desmontá-lo é observando se é visível a base do ponteiro olhando lateralmente o painel. No painel Marelli é visível uma base branca, no VDO não é visível.<br />", 
ballon: "Detalhe do ponteiro de um painel Marelli. Pode-se ver a base branca no centro.<br />Obs.: essa carga NÃO faz o painel Marelli, para fazê-lo é necessário usar a carga Code 2 Fase 3.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Ponteiro painel Marelli.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Utilize a chave do veículo para abrir a caixa de fusíveis.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/1.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/2.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/3.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/4.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Conecte Módulo de transponder 2.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Conecte o Cabo Fiat.jpg"},

{title: "", 
description: "A tomada de diagnóstico fica localizada na posição A4. <br />", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0145 Preparação e apresentação de chaves Code 2 Fase/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a geração e a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Palio`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`Não foi realizando o procedimento de geração de chaves.`,],
solutions: [
`Para realizar o procedimento de programação, é necessário realizar a dedicação de transponders.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
`<br />`,
],
causes: [
`O transponder já esteve em uso no veículo e foi bloqueado durante outra operação de apresentação por diagnose.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder utilizado não é ID48,`,`Mau contato no cabo Fiat com o módulo de transponder ou do jacaré vermelho com a bateria.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação,`,`Conferir conexão do cabo Fiat com o módulo de transponder e do jacaré vermelho com a bateria.`,]
},

{ label: `Erro grav. ID48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder não está corretamente posicionado no módulo de transponder.`,`O transponder utilizado não é ID48,`,`Mau contato no cabo Fiat com o módulo de transponder ou do jacaré vermelho com a bateria.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação,`,`Conferir conexão do cabo Fiat com o módulo de transponder e do jacaré vermelho com a bateria.`,]
},

{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
},

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar o modelo do painel.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
