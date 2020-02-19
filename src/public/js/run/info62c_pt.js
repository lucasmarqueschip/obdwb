//Capa
nomeCarga = "Preparação e Programação de Chaves Fiat Code 2 Fase 3 Painel Continental";
revCarga = "Rev. 6";
dataManual = "Setembro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

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
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Siena 1.0",
years: "2012 a 2014"
},
{
manufacturer: "Fiat",
model: "Siena 1.4",
years: "2012 a 2014"
},
{
manufacturer: "Fiat",
model: "Uno Mille Vivace 1.0",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Uno EVO 1.0",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Uno EVO 1.4",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Strada Working 1.4",
years: "2012 a 2014"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "O Transponder utilizado no sistema Code 2 é<br />o Megamos Crypto 48, tratado neste manual<br />por T48.", 
image: "/images/Transponders/Megamos Crypto 48.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Uitlilze o cabo universal do Connect", 
image: "/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "Posicionamento do transponder T48 no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Passos para desmontar o painel:", 
description: "", 
ballon: "Remova o rádio.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova o Radio.jpg"},

{title: "", 
description: "", 
ballon: "Remova os conectores do rádio.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova os Conectores.jpg"},

{title: "", 
description: "", 
ballon: "Remova a gaveta do rádio.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova a Gaveta.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova os Parafusos.jpg"},

{title: "", 
description: "", 
ballon: "Existem quatro travas em cada difusor de ar, as setas indicam onde fica cada trava.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Saida de ar.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois difusores de ar do veículo.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova difusor de ar.jpg"},

{title: "", 
description: "", 
ballon: "Depois de removido os difusores de ar, remova os dutos de ar.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Sem Difusores de ar.jpg"},

{title: "", 
description: "", 
ballon: "Faça a alavanca nos pontos indicados, forçando o duto de ar para fora até que desprenda do painel.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Duto de Ar.jpg"},

{title: "", 
description: "", 
ballon: "Atenção<br />Cuidado para não quebrar alguma trava ou riscar o console. Se necessário utilize uma flanela entre a chave, o duto de ar e o console.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Atenção.jpg"},

{title: "", 
description: "", 
ballon: "Posição dos parafusos que fixam o console.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Fixadores Console.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova os Parafusos do console.jpg"},

{title: "", 
description: "", 
ballon: "Remova os três parafusos fixadores.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova os 3  parafusos.jpg"},

{title: "", 
description: "", 
ballon: "Remova a parte inferior da capa protetora.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Remova a parte inferior.jpg"},

{title: "", 
description: "", 
ballon: "Removas os dois parafusos fixadores. Neste caso os parafusos ficam em um lugar de difícil visualização.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Inferiores.jpg"},

{title: "", 
description: "", 
ballon: "Remova a parte superior da capa protetora.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Parte Superior.jpg"},

{title: "", 
description: "", 
ballon: "Remova o único parafuso que fica na parte superior do painel.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Parafuso Painel.jpg"},

{title: "", 
description: "", 
ballon: "Depois de todos os parafusos fixadores já removidos, retirar a moldura do painel com as mãos, a moldura está fixa por travas.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Muldura.jpg"},

{title: "", 
description: "", 
ballon: "Moldura do painel removida.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Moldura Removida.jpg"},

{title: "", 
description: "", 
ballon: "Remova os dois parafusos fixadores do painel.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Parafusos Painel.jpg"},

{title: "", 
description: "", 
ballon: "Remova o conector de 32 pinos (observe as travas de segurança).", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/COnector 32 Pinos.jpg"},

{title: "", 
description: "", 
ballon: "Remova o conector de 12 pinos (observe as travas de segurança).", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Conector 12 pinos.jpg"},

{title: "Retirando a tampa traseira para ter acesso a placa:", 
description: "", 
ballon: "Remova as travas da tampa traseira do painel.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Trava Tampa Traseira.jpg"},

{title: "", 
description: "", 
ballon: "Painel removido. Pronto para soldagem dos fios do cabo MCU.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Painel removido.jpg"},

{title: "Localizando os pontos para soldagem:", 
description: "", 
ballon: "Identificando os pontos a serem soldado os fios do cabo MCU: <br />1=> Fio Verde<br />2=> Fio Preto <br />3=> Fio Vermelho <br />4=> Fio Cinza", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Pontos de Solda.jpg"},

{title: "", 
description: "", 
ballon: "Atenção: Não trocar a posição dos fios. Os fios que não estiverem sendo usando devem ser dobrados para trás.", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Fios Soldados.jpg"},

{title: "Todos os acessórios conectados:", 
description: "Todos os acessórios conectados, pronto para a preparação dos transponders. <br /><br />", 
ballon: "", 
image: "/images/Funções Específicas/OBD0062 Novo Uno/Todos os equipametos conectados.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico do veículo está localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a Preparação do transponder`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Uno EVO`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Continental`], help: `Tecle OK`, menu: 1000},
{lines: [`Geração de transponders`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a Programação de Chaves via Diagnóstico`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Fiat`], help: `Tecle OK`, menu: 1000},
{lines: [`Uno EVO`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat Code 2 Fase 3`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Continental`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},

]},];
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

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
