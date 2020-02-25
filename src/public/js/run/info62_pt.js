//Capa
nomeCarga = `Manual Carga -  OBD0062<br />Preparação e Programação de Chaves Fiat Code 2 Fase 3 Painel Continental`;
revCarga = `Rev. 6`;
dataManual = `Setembro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Preparação dos transponders ID48 através do módulo de transponder e cabo MCU.`,
`Programação das chaves via diagnóstico.`,
`<obs>`,
`Observação: As chaves que não forem apresentadas e já estavam programadas, ficarão bloqueados para funcionar no veículo, portanto é necessário passar pela apresentação todas as chaves que se deseja manter funcionando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Fiat`,
model: `Siena 1.0`,
years: `2012 a 2014`
},
{
manufacturer: `Fiat`,
model: `Siena 1.4`,
years: `2012 a 2014`
},
{
manufacturer: `Fiat`,
model: `Uno Mille Vivace 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `Fiat`,
model: `Uno EVO 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `Fiat`,
model: `Uno EVO 1.4`,
years: `2010 a 2012`
},
{
manufacturer: `Fiat`,
model: `Strada Working 1.4`,
years: `2012 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder utilizado no sistema<br />Code 2 é o Megamos Crypto 48<br />virgem, tratado neste manual por<br />ID48.`, 
image: `/images/Transponders/Megamos Crypto 48.jpg`},

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
ballon: `Conecte o cabo universal ao adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: `Posicionamento do transponder T48 no módulo de transponder:`, 
description: ``, 
ballon: `O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg`},

{title: ``, 
description: ``, 
ballon: `O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.`, 
image: `/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg`},

{title: `Passos para desmontar o painel:`, 
description: ``, 
ballon: `Remova o rádio.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova o Radio.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os conectores do rádio.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova os Conectores.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a gaveta do rádio.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova a Gaveta.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os dois parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova os Parafusos.jpg`},

{title: ``, 
description: ``, 
ballon: `Existem quatro travas em cada difusor de ar, as setas indicam onde fica cada trava.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Saida de ar.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os dois difusores de ar do veículo.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova difusor de ar.jpg`},

{title: ``, 
description: ``, 
ballon: `Depois de removido os difusores de ar, remova os dutos de ar.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Sem Difusores de ar.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: `Atenção<br />Cuidado para não quebrar alguma trava ou riscar o console. Se necessário utilize uma flanela entre a chave, o duto de ar e o console.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Atenção.jpg`},

{title: ``, 
description: ``, 
ballon: `Posição dos parafusos que fixam o console.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Fixadores Console.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os dois parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova os Parafusos do console.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os três parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova os 3  parafusos.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a parte inferior da capa protetora.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Remova a parte inferior.jpg`},

{title: ``, 
description: ``, 
ballon: `Removas os dois parafusos fixadores. Neste caso os parafusos ficam em um lugar de difícil visualização.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Inferiores.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova a parte superior da capa protetora.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Parte Superior.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o único parafuso que fica na parte superior do painel.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Parafuso Painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Depois de todos os parafusos fixadores já removidos, retirar a moldura do painel com as mãos, a moldura está fixa por travas.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Muldura.jpg`},

{title: ``, 
description: ``, 
ballon: `Moldura do painel removida.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Moldura Removida.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os dois parafusos fixadores do painel.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o conector de 32 pinos (observe as travas de segurança).`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/COnector 32 Pinos.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o conector de 12 pinos (observe as travas de segurança).`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Conector 12 pinos.jpg`},

{title: `Retirando a tampa traseira para ter acesso a placa:`, 
description: ``, 
ballon: `Remova as travas da tampa traseira do painel.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Trava Tampa Traseira.jpg`},

{title: ``, 
description: ``, 
ballon: `Painel removido. Pronto para soldagem dos fios do cabo MCU.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Painel removido.jpg`},

{title: `Localizando os pontos para soldagem:`, 
description: ``, 
ballon: `Identificando os pontos a serem soldado os fios do cabo MCU: <br />1=> Fio Verde<br />2=> Fio Preto <br />3=> Fio Vermelho <br />4=> Fio Cinza`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Pontos de Solda.jpg`},

{title: ``, 
description: ``, 
ballon: `Atenção: Não trocar a posição dos fios. Os fios que não estiverem sendo usando devem ser dobrados para trás.`, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Fios Soldados.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Todos os acessórios conectados, pronto para a preparação dos transponders. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0062 Novo Uno/Todos os equipametos conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico do veículo está localizada na área A5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a Preparação do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>CODE 2 Fase 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2 Fase 3`, `>P. Continental`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`P. Continental`, `>Gerar TPD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`Conecte&nbsp;o&nbsp;cabo`,
`MCU&nbsp;no&nbsp;Painel`,
`segundo&nbsp;o&nbsp;manual`,
`Tecle&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;PIN:&nbsp;*****`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Anote o PIN e tecle OK.`
},
{lines: [
`&nbsp;`,
`CHAVES&nbsp;PROG:&nbsp;*/8`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Mostra o número de chaves programadas no veículo, tecle OK.`
},
{lines: [
`Chaves&nbsp;geradas`,
`deverao&nbsp;ser`,
`apresentadas`,
`por&nbsp;dispositivo`,
`de&nbsp;diagnostico,`,
`OK&nbsp;p&nbsp;prosseguir!`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Posicione&nbsp;transp&nbsp;`,
`&nbsp;T48&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Posicione o transponder ID48 no Módulo de Transponder, tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;GRAVANDO&nbsp;T48`,
`&nbsp;&nbsp;&nbsp;&nbsp;AGUARDE.`,
`<br />`,
],
help: `Neste momento está sendo feita a gravação do transponder, aguarde.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Concluido!`,
`(OK)&nbsp;para&nbsp;outro.`,
`<br />`,
],
help: `Se desejar preparar outro transponder tecle OK e volte ao Passo 11, ou tecle VOLTA pra finalizar.`
},
]
}, {title: `Realizando a Programação de Chaves via Diagnóstico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>CODE 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2`, `>BC e Painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`BC e Painel`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
help: `É necessário utilizar o Cabo de diagnóstico CAN ou o
cabo universal + adaptador A3.`
},
{lines: [
`&nbsp;`,
`Digite&nbsp;cod.elet.`,
`*****`,
`<br />`,
],
help: `Digite o código eletrônico (PIN) que foi lido no momento da preparação do transponder.`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;Chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`&nbsp;N.&nbsp;Chaves:&nbsp;*/*`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;SIM(OK)`,
`<br />`,
],
help: `Aperte (OK) para programar mais e
(VOLTA) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro na leitura do Painel!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&nbsp;&nbsp;&nbsp;do&nbsp;Painel!`,
`<br />`,
],
causes: [
`Mau contato no Cabo MCU com o painel,`,`Mau contato no cabo MCU com o OBDMap,`,`Painel com problema ou arquivo corrompido.`,],
solutions: [
`Verificar a correta posição dos fios no painel,`,`Verificar se os parafusos que prendem o cabo MCU no OBDMap estão bem fixos.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`·	Cabo MCU não soldado corretamente,`,`·	Curto entre os fios do cabo MCU,`,`·	Painel com problema.`,``,],
solutions: [
`·	Conferir a correta soldagem do cabo MCU, veja Página 14,`,`·	Conferir bom estado do painel.`,]
},
{ label: `Erro grav. T48 <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;grav.&nbsp;T48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`·	O transponder não está posicionado corretamente no Módulo de Transponder,`,`·	O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`·	Mau contato no Módulo de Transponder com o OBDMap,`,`·	O transponder utilizado não é o ID48.`,``,],
solutions: [
`·	Conferir a correta posição do transponder no Módulo de Transponder,`,`·	Conferir o transponder ID48. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`·	Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,``,]
},
{ label: `FALHA AO REMOVER LOCK DO T48!`,
screens: [
`&nbsp;`,
`FALHA&nbsp;AO&nbsp;REMOVER`,
`&nbsp;&nbsp;LOCK&nbsp;DO&nbsp;T48!`,
`<br />`,
],
causes: [
`·	O transponder já havia sido dedicado e protegido contra gravação,`,`·	O transponder é original do veículo ou fornecido pela montadora.`,``,],
solutions: [
`·	Utilize um transponder ID48,`,`·	Se o transponder era válido no veículo não é necessário passa-lo pelo procedimento de geração, a chave com LOCK funcionará normalmente mesmo apresentando este erro. Será necessário apresentar a chave com LOCK por diagnóstico junto com as demais chaves depois de geradas.`,``,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`<br />`,
`Erro&nbsp;de`,
`Comunicacao!`,
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
`&nbsp;&nbsp;&nbsp;BCM&nbsp;Cheia!`,
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
`nao&nbsp;suportado!`,
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
`Erro&nbsp;grav.&nbsp;ID48`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
` Mau contato no cabo que liga o Modulo de transponder ao OBDMap;`,` Transponder  com problema;`,` O transponder utilizado não é um ID48 virgem;`,` Transponder não esta bem posicionado no Módulo de transponder.`,],
solutions: [
` Conferir a correta posição do transponder no módulo de transponder;`,` Utilizar um transponder ID48 virgem;`,` Conferir a fixação do cabo que liga o módulo de transponder ao OBDMap.`,]
},
{ label: `ERRO! Aguarde 5 minutos e tente novamente <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ERRO!`,
`&nbsp;&nbsp;&nbsp;Aguarde&nbsp;5`,
`minutos&nbsp;e&nbsp;tente`,
`&nbsp;novamente&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**&nbsp;**&nbsp;**&nbsp;**`,
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
