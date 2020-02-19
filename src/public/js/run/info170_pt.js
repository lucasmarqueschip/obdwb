//Capa
nomeCarga = "Programação de chaves Imob6 T2 Tiguan VDO";
revCarga = "Rev. 8";
dataManual = "Junho 2019";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida`,
`Este procedimento é somente via diagnose. É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas, onde uma delas deve iniciar o procedimento. Caso as chaves que já funcionavam no veículo não sejam reprogramadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
``,
`Programação de até 8 chaves para o veículo sem chave válida.`,
`É necessário ter em mãos todas as chaves a serem programadas e tentar realizar a programação utilizando a função "Programação de chaves com chave válida" , se acusar "Chave inválida" será necessário desmontar o painel para fazer a liberação (Página 9). Todas as chaves serão apagadas, funcionando somente as programadas nesse procedimento. `,
`<obs>`,
`Observação:`,
` Quando fizer uma Liberação do painel, mas ainda não estiver finalizada a Programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de Programação sem chaves. Neste caso é necessário utilizar a função Cancelamento do serviço e acompanhamento do suporte.`,
``,
`Funções adicionais:`,
`Liberação do painel`,
`Necessita desmontagem do painel e soldagem de 4 fios do cabo MCU para fazer a liberação do painel e programar qualquer chave. Esta função deve ser usada se não existir nenhuma chave válida do veículo.`,
``,
`Restauração do painel`,
`A restauração do painel é uma função usada para voltar o painel na condição original antes da liberação do painel realizada pelo OBDMAP. Esta operação não é um procedimento padrão e por isso deve ser acompanhada pelo suporte. Por isso é necessária a entrada do código de acesso.`,
``,
`Cancelamento do serviço`,
`Como a restauração, esse não é um procedimento padrão e deve ser usado somente se houver desistência após já ter feito a liberação do painel. Também será gerado um código de acesso e acompanhado pelo suporte.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "VW",
model: "Tiguan 2.0",
years: "2010 a 2012"
},
];
applicationObs = createObs("Observação: Além da aplicação, o painel do veículo deve ser do fabricante VDO/Continental e ter seu hardware igual aos mostrados em Identificando e desmontando o painel (Página 12) e utilizar Microcontrolador NEC D70F3426 e memória 24C64, e ter fabricação inferior a 06/2012 como mostrado (Página 13).", undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o Transponder ID 48 NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO_OBRIGATORIO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Fonte de Alimentacao.jpg"},

{title: "", 
description: "", 
ballon: "Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.", 
image: "/images/Acessórios/Cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico do veículo:", 
description: "A tomada de diagnóstico do veículo fica localizada na área A5.", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},

{title: "Identificando e desmontando o painel:", 
description: "", 
ballon: "Visão frontal do painel do Tiguan.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Identificando e desmontando o painel.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T15 para retirar os parafusos que prendem painel.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Identificando e desmontando o painel 2.jpg"},

{title: "", 
description: "", 
ballon: "Levante a trava de cor rosa para retirar o conector do painel.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Identificando e desmontando o painel 3.jpg"},

{title: "", 
description: "", 
ballon: "A data de fabricação deve ser anterior a 01/06/12, caso contrário o painel não se encaixa na aplicação.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Data de fabricação do painel.jpg"},

{title: "", 
description: "", 
ballon: "Utilize chave Torx T8 para desmontar o painel.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Desmontando o painel 3.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo A:", 
description: "", 
ballon: "Área de solda do cabo MCU.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Localizando os pontos de soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho <br />2 => Fio Preto <br />3 => Fio Verde <br />4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Localizando os pontos de soldagem do cabo MCU 2.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na placa do painel.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Soldagem do cabo MCU.jpg"},

{title: "", 
description: "", 
ballon: "", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Todos os acessórios conectados em bancada.jpg"},

{title: "Localizando os pontos de soldagem do cabo MCU Modelo B:", 
description: "", 
ballon: "Área de solda do cabo MCU.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Área de solda modelo B.jpg"},

{title: "", 
description: "", 
ballon: "Identificando os pontos a serem soldados os fios do cabo MCU:<br />1 => Fio Vermelho <br />2 => Fio Preto  <br />3 => Fio Verde <br />4 => Fio Cinza", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Soldagem modelo B.jpg"},

{title: "", 
description: "", 
ballon: "Soldado os fios do cabo MCU na placa do painel.", 
image: "/images/Funções Específicas/OBD0170 Programação de chaves Tiguan VDO Imob6 T2/Modelo B/caboMcu.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves com chave válida:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6 T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6 T2`, `>Tiguan VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Tiguan VDO`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Painel&nbsp;TIGUAN:`,
`Com&nbsp;Chave`,
`<br />`,
],
help: `Tecle OK`
},
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
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Numero&nbsp;de`,
`Chaves:&nbsp;*`,
`<br />`,
],
help: `Escolha até 8 chaves para ser programado. Tecle OK.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Alerta!`,
`&nbsp;Tenha&nbsp;em&nbsp;maos`,
`&nbsp;&nbsp;&nbsp;numero&nbsp;de`,
`&nbsp;chaves&nbsp;exato.`,
],
help: `O procedimento nãopoderá ser concluído e  nem reiniciado se todas as chaves escolhidas não forem programadas.
Tecle OK.
`
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
`Painel:&nbsp;Tiguan`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Código do painel. Tecle OK.`
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
help: `Se for a última chave a ser gravada o passo seguinte será o Passo 19.`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave, tecle OK e volte ao Passo 17.`
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
}, {title: `Realizando a programação de chaves sem chave válida:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6 T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6 T2`, `>Tiguan VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Tiguan VDO`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Painel&nbsp;TIGUAN:`,
`Sem&nbsp;Chave`,
`<br />`,
],
help: `Tecle OK`
},
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
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
`Numero&nbsp;de`,
`Chaves:&nbsp;*`,
`<br />`,
],
help: `Escolha até 8 chaves para ser programado. Tecle OK.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Alerta!`,
`&nbsp;Tenha&nbsp;em&nbsp;maos`,
`&nbsp;&nbsp;&nbsp;numero&nbsp;de`,
`&nbsp;chaves&nbsp;exato.`,
],
help: `O procedimento não poderá ser concluído e nem reiniciado se todas as chaves escolhidas não forem programadas. Tecle
OK.`
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
`Painel:&nbsp;Tiguan`,
`**********&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Código do painel. Tecle OK.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `O procedimento irá demorar alguns minutos. Não desconecte o OBDMap neste momento!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Se for a última chave a ser gravada vá para o Passo 19.`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave, tecle OK e volte ao Passo 17.`
},
{lines: [
`&nbsp;`,
`Reconecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;modulo&nbsp;ABS!`,
`<br />`,
],
help: `Desligue a abateria, conecte o módulo ABS e ligue a bateria.`
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
}, {title: `Realizando a liberação do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6 T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6 T2`, `>Liberar painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Arquivos:&nbsp;*/8`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Identificando&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Painel...`,
`<br />`,
],
help: ``
},
{lines: [
`Mod:&nbsp;******&nbsp;****`,
`&nbsp;Data:&nbsp;**/**/**`,
`&nbsp;HW:**&nbsp;SW:****`,
`*******&nbsp;********`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Verificando`,
`Painel...`,
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
help: `Neste momento está sendo feito o backup do arquivo do painel.`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Neste momento o painel está sendo liberado.`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Continue&nbsp;o`,
`procedimento&nbsp;via`,
`&nbsp;&nbsp;&nbsp;diagnose.`,
`<br />`,
],
help: `O painel está pronto para ser montado no
veículo. Continue o procedimento
realizando a programação de chaves sem
chave válida (Página 12).`
},
{lines: [
`Antes&nbsp;de&nbsp;`,
`reconectar&nbsp;o`,
`painel&nbsp;no&nbsp;`,
`veiculo&nbsp;`,
`certifique-se`,
`que&nbsp;a&nbsp;bateria&nbsp;e`,
`o&nbsp;modulo&nbsp;de&nbsp;ABS`,
`estejam`,
`desconectados.`,
],
help: `Para evitar danos ao painel e ao modulo de ABS é necessário que a bateria e o modulo de ABS (se existir) estejam desconectados.
Monte novamente o painel no veiculo, conecte a bateria e prossiga com a programação de chaves via diagnose.`
},
]
}, {title: `Realizando a restauração do painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6 T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6 T2`, `>Restau. painel`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK`
},
{lines: [
`&nbsp;`,
`Gravando&nbsp;Painel.&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Neste momento o painel está sendo restaurado.`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
},
]
}, {title: `Realizando o cancelamento do serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Pain Imob6 T2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pain Imob6 T2`, `>Canc. servico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Neste momento esta sendo feito o
cancelamento do serviço.`
},
{lines: [
`&nbsp;`,
`Operacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Operação concluída com sucesso.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
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
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel.`,`Verificar se o número de chaves programadas esta coerente com a mostrado no painel.`,]
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
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,`Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se observa pelo painel do veículo que as chaves não estão sendo adicionadas, pode ser devido ao transponder utilizado não ser o correto.`,`Condição 2: Painel apagado: A bateria está muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,]
},

{ label: `Chave invalida!`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`<br />`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel (Página 16).`,]
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
`Realizar a liberação do painel (Página 18).`,`Em caso de dúvida contate o suporte.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
