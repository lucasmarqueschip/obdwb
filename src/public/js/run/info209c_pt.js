//Capa
nomeCarga = "Programação de chaves Fox 2015 painel VDO Imob6 T5";
revCarga = "Rev. 10";
dataManual = "Julho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida: Este procedimento é somente via diagnose. É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas, onde uma delas deve iniciar o procedimento. Caso as chaves que já funcionavam no veículo não sejam programadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
``,
`Programação de até 8 chaves para o veículo sem chave válida: É necessário ter em mãos todas as chaves a serem programadas e tentar realizar a programação utilizando a função "Programação de chaves com chave válida" (Página 07), se acusar "Chave inválida" será necessário desmontar o painel para fazer a liberação (Página 17). Todas as chaves serão apagadas, funcionando somente as programadas nesse procedimento.`,
``,
`Liberação do painel: Necessita desmontagem do painel e soldagem de 4 fios do cabo MCU para fazer a liberação do painel e programar qualquer chave. Esta função deve ser usada se não existir nenhuma chave válida do veículo.`,
`<obs>`,
`Observação:`,
` Quando fizer uma Liberação do painel, mas ainda não estiver finalizada a Programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de Programação sem chaves.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Fox 1.0",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Fox 1.6",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Crossfox 1.6",
years: "2015 a 2018"
},
{
manufacturer: "VW",
model: "Spacefox 1.6",
years: "2015 a 2020"
},
{
manufacturer: "VW",
model: "Spacecross 1.6",
years: "2015 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder ID 48 NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO_OBRIGATORIO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico fica localizado na área C5.<br />", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/C5.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "Visão frontal do painel do Fox.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 1.jpg"},

{title: "", 
description: "", 
ballon: "Retire a peça mostrada ao lado.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 2.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T15 para retirar os parafusos que prendem o painel.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 3.jpg"},

{title: "", 
description: "", 
ballon: "Levante a trava de cor rosa para retirar o conector do painel.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 4.jpg"},

{title: "", 
description: "", 
ballon: "Utilize a chave Torx T8 para desmontar o painel.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Identificando o painel 5.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU:", 
description: "", 
ballon: "Área de solda do cabo MCU no painel.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 1.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho<br />2 => Fio Preto<br />3 => Fio Verde<br />4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 2.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na placa do painel.", 
image: "/images/Funções Específicas/OBD0209 Programação de chaves Fox 2015 painel VDO Imob 6 T5/Localizando os pontos de soldagem 3.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando a programação de chaves com chave válida.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`15-16`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 1`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves sem chave válida.`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`15-16`], help: `Tecle OK`, menu: 1000},
{lines: [`Versão 2`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a liberação do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [

]},];
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
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios,`,`Sistema do veículo diferente da aplicação dessa carga.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,``,]
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
`Verificar aplicação.`,]
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
`Verificar aplicação.`,]
},

{ label: `Erro de Tempo Excedido!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de`,
`&nbsp;Tempo&nbsp;Excedido!`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação,`,`Desconecte a báteria e faça o procedimento novamente.`,]
},

{ label: `Chave invalida!`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`<br />`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
` Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se observa pelo painel do veículo que as chaves não foram adicionadas, pode ser devido ao transponder utilizado não ser o correto.`,``,`Condição 2: Painel apagado: A bateria está muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,``,]
},

{ label: `Painel Invalido! ********** <OK>`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},

{ label: `Procedimento Incompleto!`,
screens: [
`&nbsp;`,
`Procedimento&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incompleto!`,
`<br />`,
],
causes: [
`Não foi realizada corretamente a liberação do painel.`,],
solutions: [
`Realizar a liberação do painel,`,`Em caso de dúvida contate o suporte.`,]
},

{ label: `Aguardando chaves ou painel corrompido.`,
screens: [
`&nbsp;&nbsp;&nbsp;Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`&nbsp;&nbsp;corrompido.`,
`<br />`,
],
causes: [
`O número de chaves escolhidos não foi o número de chaves programadas,`,`Painel do carro pode estar corrompido.`,],
solutions: [
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,``,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
