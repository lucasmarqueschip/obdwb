//Capa
nomeCarga = `Manual Carga -  OBD0257<br />Programação de chaves VW Imob6 (Seat Ibiza 11-14)`;
revCarga = `Rev. 0`;
dataManual = `Janeiro 2018`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Programação de até 8 chaves para o veículo com chave válida. `,
`Este procedimento é somente via diagnose. É possível adicionar chaves, onde as chaves anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso queira manter alguma das chaves antigas, basta reprogramá-las. `,
``,
`Programação de até 8 chaves para o veículo sem chave válida. `,
``,
`É necessário desmontar o painel e coloca-lo em modo de serviço em bancada utilizando o cabo MCU (Página26) antes de programar as chaves. É possível adicionar chaves, onde as chaves anteriores continuarão funcionando normalmente no veículo, ou apagar as chaves antigas, caso queira manter alguma das chaves antigas, basta reprogramá-las. `,
`<obs>`,
`Observação: `,
`Quando colocar o painel em Modo de Serviço, mas ainda não estiver finalizada a programação por diagnose no mesmo veículo, não é possível iniciar um novo procedimento de programação de chaves. Neste caso é necessário realizar o procedimento de programação por diagnose até o final, ou utilizar a função de Gravar Backup no painel com acompanhamento do suporte técnico.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Seat`,
model: `Ibiza 1.2`,
years: `2011 a 2014`
},
{
manufacturer: `Seat`,
model: `Ibiza 1.4`,
years: `2011 a 2014`
},
{
manufacturer: `Seat`,
model: `Ibiza 1.6`,
years: `2011 a 2014`
},
{
manufacturer: `Seat`,
model: `Ibiza 2.0`,
years: `2011 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(`Observação: Além da aplicação, o painel do veículo deve ser do fabricante VDO / Continental e ter seu hardware igual aos mostrados em Identificando e desmontando o painel (Página 22).`, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: ``, 
ballon: `Utilize o transponder ID48-CAN (TP23) NOVO! Se não for utilizado um transponder novo o procedimento pode não ser bem sucedido!`, 
image: `/images/Transponders/ID48-CAN (TP23).jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize o cabo universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Identificando e desmontando o painel:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Identificando e desmontando o painel.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 3.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0168 Programação de chaves Amarok VDO Imob6 T2/Desmontando o painel 4.jpg`},

{title: `Localizando os pontos de soldagem do cabo MCU:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0257/picPainel1.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0257/picPainel2.jpg`},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0257/picPainel3.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a programação de chaves com chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Seat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Seat`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. chaves?`, `>VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VDO`, `>Ibiza 10-15`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falhas:`,
`&nbsp;ECU:**&nbsp;Imob:**`,
`ABS:**&nbsp;Airbag:**`,
`&nbsp;Painel:**&nbsp;&lt;OK&gt;`,
],
help: `(--) -> Módulo desconectado ou software do módulo incompatível com a aplicação.
(**) -> Número falhas presentes no módulo. Tecle OK!`
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
`&nbsp;&nbsp;Os&nbsp;dados&nbsp;dos`,
`&nbsp;&nbsp;paineis&nbsp;sao`,
`&nbsp;Incompativeis!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Chassi:&nbsp;********`,
`*********&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O chassi é utilizado para confirmar se a ECU é original do veículo. Tecle OK!`
},
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
`Pain:&nbsp;Invalido`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Se optou por programar outra chave volte ao passo XX. Já se escolheu finalizar o
procedimento siga ao passo XX. Tecle OK!`
},
{lines: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Rejeitado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `As chaves já programadas serão
   apagadas.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deseja`,
`&nbsp;&nbsp;&nbsp;Continuar?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;proxima`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
{lines: [
`&nbsp;Memoria&nbsp;cheia,`,
`realize&nbsp;o&nbsp;backup`,
`&nbsp;&nbsp;&nbsp;do&nbsp;OBDMap.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`ECU&nbsp;nao`,
`Encontrada!`,
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
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Sim: prossiga ao passo X.
Não: prossiga ao passo X.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;Transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Utilize um transponder ID48 Novo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima
chave, tecle OK e volte
    ao Passo`
},
{lines: [
`&nbsp;&nbsp;Reconecte&nbsp;o`,
`&nbsp;&nbsp;modulo&nbsp;ABS!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Numero&nbsp;de`,
`&nbsp;Arquivos:&nbsp;*/8`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (Volta) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Painel:`,
`Sem&nbsp;Chave`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Painel:`,
`Com&nbsp;Chave`,
`<br />`,
],
help: `É necessário utilizar uma chave válida do
veículo para iniciar este procedimento. Tecle OK!
`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;Painel&nbsp;e&nbsp;a&nbsp;ECU`,
`&nbsp;&nbsp;nao&nbsp;casados!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Pain:&nbsp;Seat&nbsp;Ibiza`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves sem chave válida`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Seat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Seat`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. chaves?`, `>VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VDO`, `>Ibiza 10-15`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Se for a última chave a ser gravada o
passo seguinte será o Passo`
},
{lines: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Rejeitado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;perdidas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
],
help: `As chaves já programadas serão
   apagadas.`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Deseja`,
`&nbsp;&nbsp;&nbsp;Continuar?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;proxima`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`
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
`&nbsp;&nbsp;Os&nbsp;dados&nbsp;dos`,
`&nbsp;&nbsp;paineis&nbsp;sao`,
`&nbsp;Incompativeis!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
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
`&nbsp;Memoria&nbsp;cheia,`,
`realize&nbsp;o&nbsp;backup`,
`&nbsp;&nbsp;&nbsp;do&nbsp;OBDMap.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
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
`ECU&nbsp;nao`,
`Encontrada!`,
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
`Deseja&nbsp;manter&nbsp;as`,
`&nbsp;&nbsp;&nbsp;chaves&nbsp;ja`,
`&nbsp;&nbsp;programadas?`,
`(X)NAO&nbsp;&nbsp;&nbsp;(OK)SIM`,
],
help: `Sim: prossiga ao passo X.
Não: prossiga ao passo X.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use&nbsp;Transponder`,
`ID48&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Insira&nbsp;e&nbsp;ligue`,
`prox.&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima
chave, tecle OK e volte
    ao Passo`
},
{lines: [
`&nbsp;&nbsp;Reconecte&nbsp;o`,
`&nbsp;&nbsp;modulo&nbsp;ABS!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Numero&nbsp;de`,
`&nbsp;Arquivos:&nbsp;*/8`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave ou tecle (Volta) para finalizar o procedimento.`
},
{lines: [
`Pain:&nbsp;Invalido`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Painel:`,
`Sem&nbsp;Chave`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Painel:`,
`Com&nbsp;Chave`,
`<br />`,
],
help: `É necessário utilizar uma chave válida do
veículo para iniciar este procedimento. Tecle OK!
`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Atencao!`,
`&nbsp;Painel&nbsp;e&nbsp;a&nbsp;ECU`,
`&nbsp;&nbsp;nao&nbsp;casados!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`Pain:&nbsp;Seat&nbsp;Ibiza`,
`Data:&nbsp;********`,
`Serial:&nbsp;********`,
`Cod:&nbsp;**********`,
],
help: ``
},
]
}, {title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Seat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Seat`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. chaves?`, `>VDO`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VDO`, `>Ibiza 10-15`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `   Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;&nbsp;compativel!`,
`<br />`,
],
help: `Veículo compativel com o software!`
},
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando procedimento de Modo de Serviço`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Pinca`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Pinca`, `>VW`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`VW`, `>Painel Imob6`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel Imob6`, `>Modo Servico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Arquivos:&nbsp;*/8`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;Conecte&nbsp;o&nbsp;cabo`,
`&nbsp;MCU&nbsp;no&nbsp;painel`,
`segundo&nbsp;o&nbsp;manual`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Tecle OK!`
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
realizando a programação de chaves sem chave válida (Página XX).`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;ATENCAO!`,
`&nbsp;&nbsp;&nbsp;&nbsp;Antes&nbsp;de`,
`&nbsp;&nbsp;reconectar&nbsp;o`,
`&nbsp;&nbsp;&nbsp;painel&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;veiculo`,
`&nbsp;certifique-se`,
`que&nbsp;a&nbsp;bateria&nbsp;e`,
`&nbsp;&nbsp;o&nbsp;modulo&nbsp;ABS`,
`&nbsp;&nbsp;&nbsp;&nbsp;estejam`,
`&nbsp;desconectados`,
],
help: `Para evitar danos ao painel e ao módulo
ABS é necessário que a bateria e o
módulo ABS (se existir) estejam
desconectados.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
{ label: `Acesso Negado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Painel não compatível com a aplicação.`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Curto!`,
`&nbsp;&nbsp;Verifique...`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória;`,`Módulo com problema;`,`A pinça foi conectada em outro componente. (se existir outro componente SOIC8 na placa).`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória;`,`Conferir bom estado do módulo.`,]
},
{ label: `Chave invalida! <OK>`,
screens: [
`&nbsp;`,
`Chave&nbsp;invalida!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`A chave que iniciou o procedimento não é válida,`,`A tentativa de programar a primeira chave sem ter uma chave válida falhou,`,`O painel está esperando apresentação de mais chaves.`,],
solutions: [
`Utilizar uma chave válida quando dispor de uma,`,`Quando não dispor de uma chave válida e a tentativa de programar através da função "Programação de chaves com chave válida" falhar é necessário fazer a Liberação do painel.`,`Verificar se o número de chaves programadas esta coerente com a mostrado no painel.`,]
},
{ label: `Erro na leitura <OK> p/ repetir`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;leitura`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato na pinça com a memória,`,`Mau contato na pinça com o OBDMap,`,`A pinça foi conectada em outro componente,`,`Mau contato nos fios do cabo MCU,`,`Fios do cabo MCU soldado em posições erradas.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir boa fixação da pinça ou cabo MCU com o OBDMap.`,]
},
{ label: `Erro na gravacao <OK> p/ repetir.`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;gravacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir.`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça com o OBDMap,`,`Memória ou Módulo com problema,`,`A pinça foi conectada em outro componente,`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir se os parafusos que prendem a pinça no OBDMap estão bem fixos,`,`Conferir bom estado do Módulo,`,]
},
{ label: `Aguardando chaves ou painel corrompido. <OK>`,
screens: [
`&nbsp;&nbsp;&nbsp;Aguardando`,
`chaves&nbsp;ou&nbsp;painel`,
`&nbsp;&nbsp;corrompido.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
causes: [
`O número de chaves escolhidos não foi o número de chaves programadas,`,`Painel do carro pode estar corrompido.`,],
solutions: [
`Verificar se o número de chaves mostrado no painel corresponde ao número de chaves desejado para a programação.`,`Observações:`,`Condição 1: Veículo não aceita chaves: Quando o procedimento é iniciado, mas se`,`observa pelo painel do veículo que as chaves não estão sendo adicionadas, pode ser`,`devido ao transponder utilizado não ser o correto.`,`Condição 2: Painel apagado: A bateria está muito fraca. Desconecte a bateria, aguarde 10 segundos e reconecte. Se necessário dê uma carga na bateria.`,]
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
{ label: `Erro na Identificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;Identificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU;`,`Fios do cabo MCU soldado em posições erradas.`,``,``,``,],
solutions: [
`Conferir a correta soldagem do cabo MCU;`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,``,``,]
},
{ label: `Erro na Verificacao <OK> p/ repetir`,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Verificacao`,
`&lt;OK&gt;&nbsp;p/&nbsp;repetir`,
`<br />`,
],
causes: [
`Mau contato nos fios do cabo MCU;`,`Fios do cabo MCU soldado em posições erradas.`,``,``,],
solutions: [
`Conferir a correta soldagem do cabo MCU;`,`Conferir a boa fixação do cabo MCU com o OBDMap.`,``,``,]
},
{ label: `Transponder Bloqueado! <OK>`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Transponder`,
`Bloqueado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder ID46 virgem.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente no Módulo de Transponder,`,`O transponder foi retirado do Módulo de Transponder durante o procedimento de gravação,`,`Mau contato no Módulo de Transponder com o OBDMap,`,`O transponder utilizado não é o PCF7936.`,],
solutions: [
`Conferir a correta posição do transponder no Módulo de Transponder,`,`Conferir o transponder PCF7936. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir se os parafusos que prendem o Módulo de Transponder no OBDMap estão bem fixos.`,]
},
{ label: `Procedimento Incompleto! <OK>`,
screens: [
`&nbsp;&nbsp;Procedimento`,
`&nbsp;&nbsp;Incompleto!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Não foi realizada corretamente a liberação do painel.`,],
solutions: [
`Realizar a liberação do painel.`,`Em caso de dúvida contate o suporte.`,]
},
{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
],
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
`	Conferir se a bateria está carregada,`,`	Conferir parte elétrica do veículo, fusíveis, etc,`,`	Conferir se utiliza cabo universal e adaptador A3,`,`	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,`	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,`	Repita o procedimento,`,`	Caso o erro persista, informe ao suporte as questões acima.`,]
},
{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Veículo fora da aplicação.`,],
solutions: [
`Recomenda-se não realizar o procedimento;`,`Consulte o suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
