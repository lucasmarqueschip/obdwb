//Capa
nomeCarga = "Leitura de Senha e programação de chaves BSI-1";
revCarga = "Rev. 3";
dataManual = "Setembro 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha via OBD`,
`Apagamento de chaves antigas`,
`Programação de novas chaves`,
`Telecomando programado automaticamente com a chave`,
`Apagamento de falhas passadas da BSI`,
`Leitura do número de falhas da BSI`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Citroen",
model: "C3 1.4",
years: "2007 a 2012"
},
{
manufacturer: "Citroen",
model: "C3 1.6",
years: "2004 a 2012"
},
{
manufacturer: "Citroen",
model: "Picasso",
years: "2006 a "
},
{
manufacturer: "Peugeot",
model: "206 1.4",
years: "2004 a 2010"
},
{
manufacturer: "Peugeot",
model: "207 1.4",
years: "2009 a 2015"
},
{
manufacturer: "Peugeot",
model: "207 1.6",
years: "2009 a 2013"
},
{
manufacturer: "Peugeot",
model: "206 1.6",
years: "2004 a 2008"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "PCF7936 (ID46) com lock<br />dedicado a Jeep, este<br />transponder pode ser preparado<br />com a carga OBD0192.", 
image: "/images/Transponders/PCF7936 (ID46) dedicado.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Cabo universal + adaptador A2.", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "Para Peugeot, a posição do conector de diagnose é A5<br />Para Citroen, a posição do conector de diagnose é F6<br />A BSI se encontra um pouco acima da posição A5", 
image: "/images/Tomada de Diagnostico/Carro/A5-F6.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Peugeot`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Peugeot`, `>BSI-1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI-1`, `>Siemens E0/F0`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Siemens E0/F0`, `>Ler senha OBD?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Selecione:`,
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
],
help: ``
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
`&nbsp;&nbsp;&nbsp;&nbsp;Obtendo`,
`&nbsp;&nbsp;informacoes`,
`&nbsp;do&nbsp;servico...`,
`<br />`,
],
help: `Aguarde alguns instantes.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Lendo&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Part&nbsp;Number:`,
`&nbsp;&nbsp;&nbsp;**********`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Chassi:*********`,
`&nbsp;&nbsp;&nbsp;&nbsp;********`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `O chassi é utilizado para confirmar se a
ECU é original do veiculo.`
},
{lines: [
`&nbsp;Insira&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;no&nbsp;slot`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`aguarde&nbsp;2&nbsp;min&nbsp;e`,
`tente&nbsp;novamente`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;Remova&nbsp;o&nbsp;botao`,
`&nbsp;&nbsp;&nbsp;START/STOP`,
`(segundo&nbsp;manual)`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap apaga as chaves antigas do veículo.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Chaves`,
`&nbsp;&nbsp;&nbsp;Apagadas!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Erro&nbsp;Inesperado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;Desconecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;OBDMap!!`,
],
help: `Erro inesperado no OBDMap

Desconecte o equipamento e tente novamente`
},
{lines: [
`Numero&nbsp;de&nbsp;Falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;ECU:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;Imob:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Veículo compativel com o software!`
},
{lines: [
`&nbsp;`,
`Erro&nbsp;na`,
`Programacao!(**)`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Programando..`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Programando`,
`&nbsp;&nbsp;&nbsp;Keyless&nbsp;GO`,
`&nbsp;&nbsp;&nbsp;Aguarde..`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;Passadas`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Senha:&nbsp;****`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Servico&nbsp;nao`,
`&nbsp;&nbsp;autorizado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Chave&nbsp;programada`,
`&nbsp;com&nbsp;sucesso!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Deseja&nbsp;Programar`,
`&nbsp;o&nbsp;Keyless&nbsp;GO?`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&lt;X&gt;NAO&nbsp;&lt;OK&gt;SIM`,
],
help: ``
},
]
}, {title: `Realizando a leitura de senha e programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `> `, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [` `, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Citroen`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Citroen`, `>BSI-1`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI-1`, `>Siemens E0/F0`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Siemens E0/F0`, `>Ler senha OBD?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Ligue&nbsp;a&nbsp;chave&nbsp;a`,
`&nbsp;ser&nbsp;programada`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Utilize`,
`&nbsp;&nbsp;Adaptador&nbsp;A2`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;OK!`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;Passadas`,
`<br />`,
],
help: ``
},
{lines: [
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`Numero&nbsp;de&nbsp;falhas`,
`&nbsp;&nbsp;&nbsp;&nbsp;BSI:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `Número de Falhas presentes no módulo BSI`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Testando&nbsp;a`,
`compatibilidade`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Acessando!`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Lendo&nbsp;Senha`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Deseja&nbsp;programar`,
`&nbsp;&nbsp;&nbsp;&nbsp;chaves?`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&lt;X&gt;&nbsp;Nao&nbsp;&lt;OK&gt;&nbsp;Sim`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;X&gt;&nbsp;Sair`,
],
help: ``
},
{lines: [
`Use&nbsp;transponder`,
`PCF7936&nbsp;virgem!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
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
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave&nbsp;`,
`<br />`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
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
`Numero&nbsp;chaves:&nbsp;*`,
`Programar&nbsp;mais?`,
`<br />`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;chaves`,
`&nbsp;programadas:&nbsp;*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
help: `   Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`	Conferir se a bateria está carregada,`,`	Conferir parte elétrica do veículo, fusíveis, etc,`,`	Conferir se utiliza cabo universal e adaptador A3,`,`	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`	Repita o procedimento,`,`	Caso o erro persista, informe ao suporte as questões acima.`,]
},

{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`BC não compatível com a aplicação,`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Verificar com suporte técnico uma possível atualização`,]
},

{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
`&nbsp;&nbsp;rede&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,]
},

{ label: `Senha Incorreta! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},

{ label: `Erro na Programacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},

{ label: `Erro interno codigo: ** `,
screens: [
`&nbsp;&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},

{ label: `Sem comunicacao com o veiculo ou veiculo incompativel!`,
screens: [
`Sem&nbsp;comunicacao`,
`&nbsp;com&nbsp;o&nbsp;veiculo`,
`&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
`&nbsp;incompativel!`,
],
causes: [
`O veículo pode não estar na aplicação`,`O veículo pode estar com defeito`,`O OBDMAP ou acessórios podem estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Verifique a aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},

{ label: `Alerta! Nao dar partida com o OBDMAP Conectado `,
screens: [
`Alerta!&nbsp;Nao&nbsp;dar`,
`&nbsp;partida&nbsp;com&nbsp;o`,
`OBDMAP&nbsp;Conectado`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Informação para evitar falhas nos módulos CAN devido a pico de tensão`,],
solutions: [
]
},

{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Erro no Transponder! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;no`,
`&nbsp;&nbsp;Transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,]
},

{ label: `Senha incorreta! `,
screens: [
`Senha&nbsp;incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A senha foi rejeitada pelo veículo`,`A senha armazenada no OBDMap não pertence ao veículo;`,`Veículo está fora de aplicação.`,],
solutions: [
`Realize a Leitura de senha da BC via pinça;`,`Verifique a aplicação do veículo`,`Contate o suporte.`,]
},

{ label: `Sem sinal da antena! `,
screens: [
`&nbsp;&nbsp;Sem&nbsp;sinal&nbsp;da`,
`&nbsp;&nbsp;&nbsp;&nbsp;antena!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Fusíveis queimados`,`Defeito na parte elétrica do carro`,`Circuito da antena aberto`,`Defeito no módulo da antena`,`Defeito no pino de comunicação da ECU`,],
solutions: [
`Conferir os fusíveis`,`Conferir parte elétrica do veículo`,`Checar alimentação e comunicação com o módulo da antena`,`Trocar módulo da antena`,`Checar comunicação do pino da ECU`,`Dica: Caso desejado e seja possível, utilize o Multigiga para auxiliar nesses casos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
