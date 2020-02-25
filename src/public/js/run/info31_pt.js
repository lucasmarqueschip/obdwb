//Capa
nomeCarga = `Manual Carga -  OBD0031<br />Pats 3 Can / Flex (chaves e casamento)`;
revCarga = `Rev. 3`;
dataManual = `Maio 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da quantidade de chaves programadas no veículo (Pats 3 CAN). `,
`Apagar chaves (Pats 3 CAN / Pats 3 CAN FLEX).`,
`Adicionar chaves (Pats 3 CAN).`,
`Programar até 5 chaves (Pats 3 CAN FLEX).`,
`Sincronismo entre a ECU e o painel (Pats 3 CAN / Pats 3 CAN FLEX).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `Courier 1.6`,
years: `2002 a 2013`
},
{
manufacturer: `Ford`,
model: `Ecosport 1.0`,
years: `2003 a 2013`
},
{
manufacturer: `Ford`,
model: `Ecosport 1.6`,
years: `2003 a 2013`
},
{
manufacturer: `Ford`,
model: `Ecosport 2.0 16V`,
years: `2003 a 2013`
},
{
manufacturer: `Ford`,
model: `Fiesta 1.0`,
years: `2002 a 2013`
},
{
manufacturer: `Ford`,
model: `Fiesta 1.6`,
years: `2002 a 2013`
},
{
manufacturer: `Ford`,
model: `KA 1.0`,
years: `2006 a 2013`
},
{
manufacturer: `Ford`,
model: `KA 1.6`,
years: `2006 a 2013`
},
];
applicationObs = ``;
applicationObs += createObs(`Atenção: Para os veículos acima de 2006 utilizar o sistema PATS 3 CAN FLEX .`, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID4D60 (T32) de Vidro.`, 
image: `/images/Transponders/ID4D-60.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Conecte o cabo universal ao adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos fica localizada na área D5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/D5.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando a leitura do número de chaves PATS 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`, `>Num. de chaves`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chaves&nbsp;prog:&nbsp;*`,
`<br />`,
`<br />`,
],
help: `Número de chaves que estão programadas no veículo.Tecle OK!`
},
]
}, {title: `Realizando o apagamento das chaves PATS 3 CAN`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`Tempo&nbsp;-&nbsp;&nbsp;**&nbsp;min.`,
`<br />`,
],
help: `Aguarde alguns minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;outra`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Insira a próxima chave.
Tecle OK!`
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
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;`,
`primeira&nbsp;chave&nbsp;e`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`e&nbsp;Tecle&nbsp;OK.`,
`<br />`,
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
`Retire&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`Tempo&nbsp;-&nbsp;&nbsp;**&nbsp;min.`,
`<br />`,
],
help: `Aguarde alguns minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Todas as chaves que estavam programadas foram apagadas do
sistema.`
},
]
}, {title: `Realizando a adição de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN`, `>Nova chave?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`Ligue&nbsp;a&nbsp;ignicao`,
`&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`Tempo&nbsp;-&nbsp;&nbsp;**&nbsp;min.`,
`<br />`,
],
help: `Aguarde alguns minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves que estão programadas no veículo. Tecle OK!`
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
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e volte ao passo 1, ou tecle (Volta)  para finalizar o procedimento.

`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o apagamento das chaves PATS 3 CAN FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN Flex`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN Flex`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;ignicao`,
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
`Aguarde:&nbsp;10&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde 10 minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`N.&nbsp;de&nbsp;chaves:&nbsp;0`,
`Tecle&nbsp;OK!`,
`<br />`,
],
help: `Todas as chaves que estavam programadas foram apagadas do
sistema. Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle (OK) para programar chaves ou (VOLTA) para sair.`
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
`Desligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Não ultrapasse os 10 segundos indicado pelo OBDMap, caso ultrapasse, o tempo de espera voltará a 10 minutos. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave,`,
`(10)&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira a primeira chave a ser programada no tempo de 10 segundos. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Ligue a ignição em 10 segundos. Tecle OK!`
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
`N.&nbsp;de&nbsp;chaves:&nbsp;1`,
`Tecle&nbsp;OK!`,
`<br />`,
],
help: `Primeira chave programada. Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle (OK) para programar chaves ou (VOLTA) para sair.`
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
`Desligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave,`,
`(10)&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira a segunda chave a ser programada no tempo de 10 segundos. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Ligue a ignição em 10 segundos. Tecle OK!`
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
`N.&nbsp;de&nbsp;chaves:&nbsp;2`,
`Tecle&nbsp;OK!`,
`<br />`,
],
help: `Segunda chave programada. Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e volte ao passo 19, ou tecle (Volta) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves PATS 3 CAN FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN Flex`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN Flex`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Ligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde:&nbsp;10&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde 10 minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`N.&nbsp;Chaves:&nbsp;3`,
`Tecle&nbsp;OK!`,
`<br />`,
],
help: `Adicionada a terceira chave. Tecle OK!`
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
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Não ultrapasse os 10 segundos indicado pelo OBDMap, caso ultrapasse o tempo de espera voltará a 10 minutos. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave,`,
`(10)&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Insira a chave a ser programada no tempo de 10 segundos. Tecle OK`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;Ignicao`,
`(10)e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Ligue a ignição em 10 segundos. Tecle OK!`
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
`N.&nbsp;Chaves:&nbsp;4`,
`Tecle&nbsp;OK`,
`<br />`,
],
help: `Adicionada a quarta chave. Tecle OK!`
},
{lines: [
`&nbsp;`,
`OK&nbsp;-&nbsp;Programar?`,
`Volta&nbsp;-&nbsp;Sair?`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e volte ao passo 11, ou tecle (Volta)
para finalizar o procedimento.`
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
}, {title: `Realizando o sincronismo entre a ECU e o painel PATS 3 CAN / FLEX`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Ford`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Ford`, `>PATS 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`PATS 3`, `>CAN Flex`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CAN Flex`, `>Sincronismo?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Aguarde:&nbsp;**&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde alguns minutos para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Desligue&nbsp;a&nbsp;chave`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;e&nbsp;tecle&nbsp;OK!`,
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
help: `Aguarde alguns minutos.`
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
othersMessage = [{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`Não está usando cabo universal + adaptador A3 ou cabo CAN, `,`Mau contato no cabo universal + adaptador A3 ou cabo CAN ao OBDMap. `,],
solutions: [
`Verificar se utiliza cabo universal + adaptador A3 ou cabo CAN, `,`Verificar boa conexão do cabo no OBDMap e no conector OBD do veículo, `,`Verificar bom estado do cabo universal, adaptador A3 e cabo CAN, `,`Verificar se os parafusos que prendem o cabo universal + adaptador A3 ou cabo CAN no OBDMap estão bem fixos. `,]
},
{ label: `Erro de Comunicacao!`,
screens: [
`<br />`,
`Erro&nbsp;de`,
`Comunicacao!`,
`<br />`,
],
causes: [
`Defeito no carro, parte elétrica, fusíveis, ou ECU com problemas, `,`Atualização antiga, `,`Defeito no OBDMap. `,],
solutions: [
`Verificar parte elétrica do carro, fusíveis etc, `,`Verificar se a carga já sofreu alterações, `,`Defeito no OBDMap ou nos cabos.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
