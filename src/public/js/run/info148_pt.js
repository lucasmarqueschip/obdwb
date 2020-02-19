//Capa
nomeCarga = "Preparação de Transponders e Programação de Chaves Ford Focus";
revCarga = "Rev. 3";
dataManual = "Agosto 2016";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração de até 8 transponders.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Ford",
model: "Focus 1.6",
years: "2008 a 2013"
},
{
manufacturer: "Ford",
model: "Focus 2.0",
years: "2008 a 2013"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize um transponder ID 4D63 ou ID 4D63 DST+.", 
image: "/images/Transponders/ID 4D63.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Conecte o cabo universal ao adaptador A3.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

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

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "Conecte o cabo universal + adaptador A3 na tomada de diagnóstico e em seguida no OBDMap.", 
image: "/images/Funções Específicas/OBD0148 Preparação de transponders e programação de chaves Ford Focus/2.jpg"},

{title: "", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0148 Preparação de transponders e programação de chaves Ford Focus/Conecte o módulo transponder.jpg"},

{title: "", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0148 Preparação de transponders e programação de chaves Ford Focus/Conecte o módulo transponder 2.jpg"},

{title: "", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0148 Preparação de transponders e programação de chaves Ford Focus/Conecte o cabo fiat na bateria.jpg"},

{title: "", 
description: "A tomada de diagnóstico está localizada na área A5.<br /><br /><br />", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0148 Preparação de transponders e programação de chaves Ford Focus/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a geração transponders:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>FOCUS`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`FOCUS`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Deseja&nbsp;apagar`,
`&nbsp;&nbsp;as&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
],
help: `Para apagar as chaves já existentes no sistema tecle OK ou VOLTA para somente adicionar.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira a quantidade de chaves a serem programadas, no máximo 8. Tecle OK!`
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
`&nbsp;Insira&nbsp;Transp.`,
`&nbsp;&nbsp;&nbsp;ID4D-63&nbsp;no`,
`&nbsp;modulo&nbsp;e&nbsp;tecle`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Insira o transponder no módulo de transponder e Tecle OK!`
},
{lines: [
`&nbsp;Insira&nbsp;proximo`,
`transp.&nbsp;ID4D-63`,
`&nbsp;&nbsp;no&nbsp;modulo&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Para gerar mais transponder tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Retire&nbsp;o`,
`&nbsp;&nbsp;transponder`,
`&nbsp;&nbsp;do&nbsp;Módulo&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Geração e programação realizado com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Transponder desbloqueado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;&nbsp;&nbsp;&nbsp;`,
`desbloqueado!`,
`<br />`,
],
causes: [
`O transponder já se encontra dedicado e travado,`,`O transponder não esta posicionado corretamente no módulo de transponder.`,],
solutions: [
`Utilize o transponder ID4D-63 virgem,`,`Insira o transponder ID4D-63 na posição correta no módulo de transponder e repita a operação.`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação,`,`Painel inválido ou com defeito.`,],
solutions: [
`Verificar aplicação,`,`Realizar o procedimento novamente.`,]
},

{ label: `Painel Lotado! OK p/ prosseguir`,
screens: [
`&nbsp;`,
`&nbsp;Painel&nbsp;Lotado!`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
causes: [
`Número de chaves excedidas.`,],
solutions: [
`Execute a função, selecione apagar e insira somente as chaves desejadas.`,]
},

{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder utilizado não é ID4D-63.`,],
solutions: [
`Insira o transponder ID4D-63 na posição correta no módulo e repita a operação.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
