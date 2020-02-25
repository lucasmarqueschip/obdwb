//Capa
nomeCarga = `Manual Carga -  OBD0269<br />Leitura de senha e programação de chaves PSA BSI-2 JC BSI04EV - K0X / BSI2004-H0X via OBD`;
revCarga = `Rev. 2`;
dataManual = `Fevereiro 2019`;
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
model: `C3 1.5`,
years: `2013 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 1.6`,
years: `2013 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 Picasso 1.5`,
years: `2012 a 2015`
},
{
manufacturer: `Citroen`,
model: `C3 Picasso 1.6`,
years: `2011 a 2015`
},
{
manufacturer: `Citroen`,
model: `C4 1.6`,
years: `2011 a 2014`
},
{
manufacturer: `Citroen`,
model: `C4 2.0`,
years: `2005 a 2011`
},
{
manufacturer: `Citroen`,
model: `C4 Lounge 2.0`,
years: `2014 a 2016`
},
{
manufacturer: `Citroen`,
model: `C4 Pallas 2.0`,
years: `2008 a 2013`
},
{
manufacturer: `Citroen`,
model: `C4 Picasso 2.0`,
years: `2009 a 2014`
},
{
manufacturer: `Citroen`,
model: `C5 2.0`,
years: `2004 a 2012`
},
{
manufacturer: `Citroen`,
model: `C5 3.0`,
years: `2005 a 2008`
},
{
manufacturer: `Citroen`,
model: `Xsara Picasso 1.6`,
years: `2005 a 2012`
},
{
manufacturer: `Citroen`,
model: `Xsara Picasso 2.0`,
years: `2004 a 2011`
},
{
manufacturer: `Peugeot`,
model: `208 1.6`,
years: `2012 a 2105`
},
{
manufacturer: `Peugeot`,
model: `307 1.6`,
years: `2004 a 2012`
},
{
manufacturer: `Peugeot`,
model: `307 2.0`,
years: `2004 a 2012`
},
{
manufacturer: `Peugeot`,
model: `308 1.6`,
years: `2012 a 2015`
},
{
manufacturer: `Peugeot`,
model: `308 2.0`,
years: `2012 a 2015`
},
{
manufacturer: `Peugeot`,
model: `407 2.0`,
years: `2005 a 2009`
},
{
manufacturer: `Peugeot`,
model: `407 3.0`,
years: `2004 a 2009`
},
{
manufacturer: `Peugeot`,
model: `408 1.6`,
years: `2013 a 2015`
},
{
manufacturer: `Peugeot`,
model: `408 2.0`,
years: `2011 a 2015`
},
{
manufacturer: `Peugeot`,
model: `607 3.0`,
years: `2004 a 2005`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Nem todos os modelos acima possuem a BSI válida!`, `Confirme a etiqueta da BSI para certificar a aplicação que essa carga se compromete!`, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Para o sistema Imob4 utilize transponder PCF7936 (ID46) virgem.`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

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
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Citroen`], help: `Tecle OK`, menu: 1000},
{lines: [`C3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},
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
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
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
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`&nbsp;`,
`Tensão&nbsp;da&nbsp;bateria:&nbsp;**,*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
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
]
}, {title: `Realizando a leitura de senha`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Citroen`], help: `Tecle OK`, menu: 1000},
{lines: [`C3`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BSI - 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Atenção!&nbsp;`,
`A&nbsp;bateria&nbsp;deve&nbsp;estar&nbsp;carregada.`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Cuidado, se a bateria estiver fraca pode
causar problemas no painel. Tecle OK.`
},
{lines: [
`Esse&nbsp;procedimento&nbsp;pode&nbsp;ser&nbsp;feito&nbsp;de&nbsp;`,
`duas&nbsp;`,
`maneiras:`,
`1.&nbsp;Retire&nbsp;o&nbsp;fusivel&nbsp;do&nbsp;limpador&nbsp;de&nbsp;&nbsp;`,
`parabrisa&nbsp;no&nbsp;`,
`compartimento&nbsp;do&nbsp;motor&nbsp;(caso&nbsp;tenha).`,
`2.&nbsp;(Ou)&nbsp;Retire&nbsp;o&nbsp;limpador&nbsp;de&nbsp;parabrisas&nbsp;`,
`dianteiro`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
],
help: `Verifique a imagem da caixa de fusiveis localizada no compartimento do motor e siga as instruções.`
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
`Apagando&nbsp;falhas&nbsp;passadas...`,
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
`Testando&nbsp;a&nbsp;compatibilidade...`,
`<br />`,
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
`Número&nbsp;de&nbsp;chaves&nbsp;programadas:&nbsp;*`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`&nbsp;`,
`Tensão&nbsp;da&nbsp;bateria:&nbsp;**,*`,
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
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão
   apagadas.`
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
`Desligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
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
`Ligue&nbsp;a&nbsp;chave&nbsp;a&nbsp;ser&nbsp;programada!`,
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
`Aguarde...`,
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluido!`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Procedimento realizado com sucesso!`
},
{lines: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
help: ``
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A4,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Erro na Programacao! `,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A programação não foi completada,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha Incorreta! `,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. `,],
solutions: [
`Aguardar 1 hora com a ignição ligada e tentar novamente. `,``,]
},
{ label: `Tempo Excedido! `,
screens: [
`&nbsp;`,
`Tempo&nbsp;Excedido!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Indica que o tempo para ligar ou desligar a ignição foi excedido.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Erro no Transponder! `,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Transponder!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder não é válido`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,``,]
},
{ label: `Acesso Negado! ** `,
screens: [
`Acesso&nbsp;Negado!`,
`**`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`BSI não compatível com a aplicação.`,`OBDMAP desatualizado`,],
solutions: [
`Verificar aplicação.`,`Conferir atualização junto ao suporte`,]
},
{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;`,
`Senha&nbsp;não&nbsp;encontrada!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Arquivo da BSI está corrompido,`,`Arquivo inválido da BSI,`,`A senha da BSI pode estar resetada.`,`BSI fora da aplicação`,],
solutions: [
`Verificar a aplicação`,`Scanear e corrigir falhas no veículos, bem como possíveis parametrizações respectivas ao mesmo`,]
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
{ label: `Transponder ja Programado! `,
screens: [
`&nbsp;`,
`Transponder&nbsp;já&nbsp;Programado!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O transponder já foi inserido no mesmo processo de programação`,],
solutions: [
`Organize os transponders e repita o procedimento`,]
},
{ label: `Use Adaptador A4! `,
screens: [
`&nbsp;`,
`Use&nbsp;Adaptador&nbsp;A4!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Adaptador errado`,`Adaptador A4 com defeito`,`OBDMAP com defeito`,],
solutions: [
`Confira o adaptador A4 com o cabo universal`,`Caso o adaptador esteja correto, acione o suporte técnico`,]
},
{ label: `Tensao baixa da Bateria! `,
screens: [
`&nbsp;`,
`Tensão&nbsp;baixa&nbsp;da&nbsp;Bateria!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A bateria se encontra abaixo de 12V`,],
solutions: [
`Carregue a bateria ou ligue uma bateria auxiliar`,]
},
{ label: `Erro Desconhecido (**) `,
screens: [
`&nbsp;`,
`Erro&nbsp;Desconhecido&nbsp;(**)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado na programação`,`O procedimento pode não estar sendo feito como indicado pelo OBDMAP`,`O veículo pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira o procedimento, se atente aos detalhes e repita`,`Caso persista, contate o suporte`,]
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
