//Capa
nomeCarga = "Programação de chaves VW Imob5 VDO e Marelli via OBD (Fox 2013)";
revCarga = "Rev. 3";
dataManual = "Setembro 2017";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Identificação do modelo do painel, informando se é VW Imob5 Marelli ou VW Imob5 VDO.`,
`Leitura da senha de 5 dígitos, necessária para a programação de chaves no painel Marelli.`,
`Preparação do transponder ID48CAN (TP23) para o veículo. Esta carga não faz a dedicação do ID48 virgem para ID48CAN (TP23), essa dedicação pode ser feita com a carga OBD0174.`,
`Programação de até 8 chaves.`,
`   É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso elas não sejam reprogramadas, elas não funcionarão no veículo.   `,
`   O painel VDO necessita somente o Cabo A1 e Universal conectados ao veículo, já o painel Marelli necessita o Módulo de Transponder, Cabo A1 e Cabo Universal conectados.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2010 a 2013"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2010 a 2013"
},
];
applicationObs = createObs("Obs: Somente para veículos com sistema VW Imob5", undefined, undefined)



resources = [
{title: "", 
description: "Observação: A carga OBD0174 realiza a dedicação de um ID48 virgem para ID48CAN (TP23).", 
ballon: "Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID48-CAN (TP23).jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A1. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0191 Programação de chaves VW Imob 5 VDO e Marelli via OBD (fox 2013)/todos os acessórios conectados.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnose do veículo fica localizada na área C5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a Identificação do Painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Fox`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Fox`, `>Identificar?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`&nbsp;`,
`Painel&nbsp;Marelli`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;VW&nbsp;Imob5`,
`<br />`,
],
help: `É exibido a identificação do painel:
Painel VDO VW Imob5 ou
Painel Marelli VW Imob5`
},
]
}, {title: `Realizando a programação de chaves painel VDO`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Fox`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Fox`, `>Imob5 VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob5 VDO`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;A&nbsp;bateria&nbsp;deve`,
`estar&nbsp;carregada.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Cuidado, se a bateria estiver fraca pode causar problemas no painel. Tecle OK.`
},
{lines: [
`&nbsp;`,
`Use&nbsp;Transponder`,
`TP23&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Digite o número de chaves que serão
programadas e tecle OK.`
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
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Se for a última chave a ser gravada, tecle OK e vá para o Passo 14.`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave, tecle OK e volte ao Passo 12.`
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
]
}, {title: `Realizando a leitura de senha e preparação de chaves painel Marelli`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Fox Imob5`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox Imob5`, `>Marelli OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;Utilize&nbsp;o`,
`&nbsp;Adaptador&nbsp;A1&nbsp;+`,
`&nbsp;&nbsp;&nbsp;Modulo&nbsp;de`,
`Transponder&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`&nbsp;`,
`Lendo&nbsp;Painel...`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Esta operação pode demorar alguns minutos.`
},
{lines: [
`&nbsp;`,
`Senha:`,
`*****`,
`<br />`,
],
help: `Anote a senha, ela é utilizada na programação de chaves.`
},
{lines: [
`&nbsp;`,
`&nbsp;Preparar&nbsp;Chave?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Tecle (OK) para preparar o transponder para o veículo, ou tecle (X) e vá ao passo
14.`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp`,
`&nbsp;&nbsp;&nbsp;TP23&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira o transponder no Módulo de Transponder e tecle OK.`
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
`&nbsp;&nbsp;&nbsp;Tranponder`,
`&nbsp;&nbsp;&nbsp;Preparado!`,
`Preparar&nbsp;prox.?`,
`&lt;X&gt;Nao&nbsp;&nbsp;&nbsp;&lt;OK&gt;Sim`,
],
help: `Para preparar próximo tecle <OK> e volte ao Passo 11, ou tecle <X> e vá ao Passo 14.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando a programação de chaves painel Marelli`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Fox`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Fox`, `>Imob5 MM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob5 MM`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use`,
`&nbsp;Adaptador&nbsp;A1!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Use&nbsp;transponder`,
`&nbsp;TP23&nbsp;preparado`,
`&nbsp;para&nbsp;o&nbsp;veiculo`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Senha:`,
`*****`,
`<br />`,
],
help: `Digite a senha lida no procedimento de
Leitura da Senha.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Selecione o número de chaves que serão
programadas.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`&nbsp;`,
`Aguarde&nbsp;6&nbsp;MIN.`,
`<br />`,
`<br />`,
],
help: `Se for utilizada uma chave valida não será necessário aguardar 6 minutos.`
},
{lines: [
`Chaves&nbsp;prog:&nbsp;*-*`,
`Insira&nbsp;a&nbsp;proxima`,
`&nbsp;chave,&nbsp;ligue&nbsp;e`,
`&nbsp;&nbsp;&nbsp;tecle&nbsp;&lt;OK&gt;`,
],
help: `Insira a próxima chave se tiver mais de 1 a ser programada. Tecle OK!`
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
`Chaves&nbsp;prog:&nbsp;*/*`,
`<br />`,
],
help: `Tecle OK!`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,`Apagar as falhas seguindo o seguinte caminho: Diagnostico\VW\Painel Fox\Apagar falhas?`,]
},

{ label: `Acesso Negado!`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!`,
`<br />`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,`Pode-se utilizar a função de Identificação do painel para confirmar a aplicação.`,]
},

{ label: `Erro leit. TPD <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;leit.&nbsp;TPD`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no módulo de transponder,`,`O transponder utilizado não é um Megamos ID48CAN (TP23).`,],
solutions: [
`Verificar a correta posição do transponder no módulo de transponder,`,`Verifique o transponder que está sendo utilizado,`,`Pode-se utilizar a carga básica do módulo de transponder para identificar o transponder.`,]
},

{ label: `Erro grav. TPD <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;TPD`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`O transponder não foi inserido corretamente no módulo,`,`O transponder não é um Megamos ID48CAN (TP23).`,],
solutions: [
`Verifique a correta posição do transponder no módulo,`,`Para verificar o tipo de transponder, utilize a carga básica do módulo de transponder na função IDENTIFICAR.`,]
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
`Verificar aplicação,`,`Pode-se utilizar a função de Identificação do painel para confirmar a aplicação.`,]
},

{ label: `Falha ao remover Lock do TPD!`,
screens: [
`&nbsp;`,
`Falha&nbsp;ao&nbsp;remover`,
`&nbsp;Lock&nbsp;do&nbsp;TPD!`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder Megamos ID48CAN (TP23) Novo.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
