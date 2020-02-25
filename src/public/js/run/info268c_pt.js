//Capa
nomeCarga = `Manual Carga -  OBD0268<br />Leitura de Senha e programação de chaves BSI-1`;
revCarga = `Rev. 3`;
dataManual = `Setembro 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

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
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Citroen`,
model: `C3 1.4`,
years: `2007 a 2012`
},
{
manufacturer: `Citroen`,
model: `C3 1.6`,
years: `2004 a 2012`
},
{
manufacturer: `Citroen`,
model: `Picasso`,
years: `2006 a `
},
{
manufacturer: `Peugeot`,
model: `206 1.4`,
years: `2004 a 2010`
},
{
manufacturer: `Peugeot`,
model: `207 1.4`,
years: `2009 a 2015`
},
{
manufacturer: `Peugeot`,
model: `207 1.6`,
years: `2009 a 2013`
},
{
manufacturer: `Peugeot`,
model: `206 1.6`,
years: `2004 a 2008`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder PCF7936 (ID46) Crypto 2 (Virgem).`, 
image: `/images/Transponders/PCF7936 (ID46) dedicado.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A2 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: ``, 
ballon: `Para Peugeot, a posição do conector de diagnose é A5<br />Para Citroen, a posição do conector de diagnose é F6<br />A BSI se encontra um pouco acima da posição A5`, 
image: `/images/Tomada de Diagnostico/Carro/A5-F6.jpg`},
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
{title: `Realizando programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Citroen`], help: `Tecle OK`, menu: 1000},
{lines: [`C3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Siemens E0/F0`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Programando..`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`Obtendo`,
`informacoes`,
`do&nbsp;servico...`,
`<br />`,
],
help: `Aguarde alguns instantes.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;`,
`Serviço&nbsp;não&nbsp;autorizado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Número&nbsp;de&nbsp;Falhas&nbsp;encontradas&nbsp;na&nbsp;ECU&nbsp;:&nbsp;`,
`**&nbsp;`,
`Número&nbsp;de&nbsp;Falhas&nbsp;encontradas&nbsp;no&nbsp;`,
`Imobilizador:**`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Veiculo&nbsp;compativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;Apagadas!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Adicionar&nbsp;chave`,
`Apagar&nbsp;chaves`,
`Sair`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`PART&nbsp;NUMBER:&nbsp;**********&nbsp;&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;falhas&nbsp;passadas...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chassi:*****************&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a
ECU é original do veiculo.`
},
{lines: [
`Desligue&nbsp;a&nbsp;chave,&nbsp;aguarde&nbsp;2&nbsp;minutos&nbsp;e`,
`tente&nbsp;novamente.`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Programando`,
`Keyless&nbsp;GO`,
`Aguarde..`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chave&nbsp;programada&nbsp;com&nbsp;&nbsp;sucesso!!!&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;Programacao!&nbsp;`,
`(**)`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave&nbsp;no&nbsp;Slot&nbsp;e`,
`tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Remova&nbsp;o&nbsp;botao&nbsp;START/STOP`,
`(segundo&nbsp;manual)`,
`e&nbsp;tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar.`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Erro&nbsp;Inesperado!`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
],
help: `Erro inesperado no OBDMap

Desconecte o equipamento e tente novamente`
},
{lines: [
`&nbsp;`,
`Deseja&nbsp;Programar&nbsp;o&nbsp;Keyless&nbsp;GO?`,
`&lt;X&gt;&nbsp;NAO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;SIM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimento`,
`Concluido!`,
`<br />`,
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
`&nbsp;`,
`Lendo&nbsp;Senha`,
`Aguarde...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;Chaves!`,
`Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap apaga as chaves antigas do veículo.`
},
]
}, {title: `Realizando a leitura de senha e programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada`,
`Aperte&nbsp;&lt;OK&gt;&nbsp;para&nbsp;prosseguir`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use`,
`Adaptador&nbsp;A2!`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Apagando&nbsp;falhas&nbsp;passadas...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
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
`&nbsp;`,
`Numero&nbsp;de&nbsp;falhas&nbsp;na&nbsp;BSI:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de Falhas presentes no módulo BSI`
},
{lines: [
`&nbsp;`,
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Acessando!&nbsp;`,
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
`&nbsp;`,
`Senha:&nbsp;****`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Deseja&nbsp;programar&nbsp;chaves?`,
`&lt;X&gt;&nbsp;Nao&nbsp;&lt;OK&gt;&nbsp;Sim`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;apagadas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair&nbsp;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder&nbsp;PCF7936&nbsp;virgem!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
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
`&nbsp;`,
`Desligue&nbsp;e&nbsp;ligue&nbsp;a&nbsp;chave&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
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
`Número&nbsp;de&nbsp;chaves:&nbsp;*`,
`Deseja&nbsp;programar&nbsp;mais&nbsp;chaves?`,
`(X)&nbsp;NAO&nbsp;&nbsp;&nbsp;(OK)&nbsp;SIM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `   Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`	Conferir se a bateria está carregada,`,`	Conferir parte elétrica do veículo, fusíveis, etc,`,`	Conferir se utiliza cabo universal e adaptador A3,`,`	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`	Repita o procedimento,`,`	Caso o erro persista, informe ao suporte as questões acima.`,]
},
{ label: `Erro na Programacao! `,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha Incorreta! `,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,]
},
{ label: `Acesso Negado! ** `,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`BC não compatível com a aplicação,`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Verificar com suporte técnico uma possível atualização`,]
},
{ label: `Falha na rede CAN!!! `,
screens: [
`&nbsp;`,
`Falha&nbsp;na&nbsp;rede&nbsp;CAN!!!&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,`O veículo apresenta defeitos elétricos;`,],
solutions: [
`Verificar instalação elétrica;`,`Verificar se os módulos não estão com defeito.`,]
},
{ label: `Veiculo incompativel! `,
screens: [
`Veiculo`,
`incompativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},
{ label: `Sem comunicacao com o veiculo ou veiculo incompativel!`,
screens: [
`Sem&nbsp;comunicacao&nbsp;com&nbsp;o&nbsp;veiculo&nbsp;`,
`ou&nbsp;veiculo&nbsp;incompativel!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O veículo pode não estar na aplicação`,`O veículo pode estar com defeito`,`O OBDMAP ou acessórios podem estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Verifique a aplicação (isso implica nos modelos, anos, sistemas e hardware)`,`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima`,]
},
{ label: `Erro interno codigo: ** `,
screens: [
`&nbsp;`,
`Erro&nbsp;interno&nbsp;código:&nbsp;**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},
{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adaptado&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},
{ label: `Alerta! Nao dar partida com o OBDMAP Conectado `,
screens: [
`Alerta!&nbsp;`,
`Nao&nbsp;dar&nbsp;partida&nbsp;com&nbsp;o&nbsp;OBDMAP&nbsp;Conectado`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Informação para evitar falhas nos módulos CAN devido a pico de tensão`,],
solutions: [
]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,]
},
{ label: `Sem sinal da antena! `,
screens: [
`Erro:&nbsp;Sem&nbsp;sinal&nbsp;da&nbsp;antena!`,
`1.&nbsp;Conferir&nbsp;os&nbsp;fusíveis`,
`2.&nbsp;Conferir&nbsp;parte&nbsp;elétrica&nbsp;do&nbsp;veículo`,
`3.&nbsp;Checar&nbsp;alimentação&nbsp;e&nbsp;comunicação&nbsp;com&nbsp;`,
`o&nbsp;módulo&nbsp;da&nbsp;antena`,
`4.&nbsp;Trocar&nbsp;módulo&nbsp;da&nbsp;antena`,
`5.&nbsp;Checar&nbsp;comunicação&nbsp;do&nbsp;pino&nbsp;da&nbsp;ECU`,
`Dica:&nbsp;`,
`Caso&nbsp;desejado&nbsp;e&nbsp;seja&nbsp;possível,&nbsp;utilize&nbsp;`,
`o&nbsp;Multigiga&nbsp;para&nbsp;auxiliar&nbsp;nesses&nbsp;`,
`casos.`,
`Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Fusíveis queimados`,`Defeito na parte elétrica do carro`,`Circuito da antena aberto`,`Defeito no módulo da antena`,`Defeito no pino de comunicação da ECU`,],
solutions: [
`Conferir os fusíveis`,`Conferir parte elétrica do veículo`,`Checar alimentação e comunicação com o módulo da antena`,`Trocar módulo da antena`,`Checar comunicação do pino da ECU`,`Dica: Caso desejado e seja possível, utilize o Multigiga para auxiliar nesses casos.`,]
},
{ label: `Senha incorreta! `,
screens: [
`&nbsp;`,
`Senha&nbsp;incorreta!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A senha foi rejeitada pelo veículo`,`A senha armazenada no OBDMap não pertence ao veículo;`,`Veículo está fora de aplicação.`,],
solutions: [
`Realize a Leitura de senha da BC via pinça;`,`Verifique a aplicação do veículo`,`Contate o suporte.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
