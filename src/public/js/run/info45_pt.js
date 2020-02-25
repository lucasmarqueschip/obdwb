//Capa
nomeCarga = `Manual Carga -  OBD0045<br />Opel 2 Completo (chaves e casamento)`;
revCarga = `Rev. 7`;
dataManual = `Agosto 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`• Apaga as falhas antigas do imobilizador`,
`• Leituras de falhas presentes do imobilizador`,
`• Leitura do código da chave mecânica utilizado para cortes de chaves sem a necessidade de`,
`desmontar o miolo`,
`• Leitura e correção do chassi do veículo`,
`• Apaga todas as chaves`,
`• Adiciona novas chaves no sistema`,
`• Reseta a ECU para ser programada em outro imobilizador`,
`• Reseta o imobilizador para ser programado em outra ECU`,
`• Programa ECU em outro imobilizador`,
`• Programa imobilizador em outra ECU`,
`<obs>`,
`Observação:`,
`Muitas das funções acima é necessário conhecer a senha que está na ECU ou no imobilizador`,
`Opel2. Para realizar essas`,
`leituras siga os passos dos manuais abaixo de acordo com suas aplicações:`,
`OBD0002, OBD0003, OBD0004, OBD0034, OBD0035, OBD0036, OBD0037, OBD0038, OBD0039,`,
`OBD0040, OBD0041, OBD0042, OBD0063, OBD0068, OBD0073, OBD0097, OBD0102`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `GM`,
model: `Astra 1.8`,
years: `1998 a 2012`
},
{
manufacturer: `GM`,
model: `Astra 2.0`,
years: `1998 a 2012`
},
{
manufacturer: `GM`,
model: `Astra 2.0 16V`,
years: `1998 a 2012`
},
{
manufacturer: `GM`,
model: `Blazer 2.4 Flex`,
years: `2006 a 2010`
},
{
manufacturer: `GM`,
model: `Celta 1.0`,
years: `2001 a 2010`
},
{
manufacturer: `GM`,
model: `Celta 1.4`,
years: `2003 a 2010`
},
{
manufacturer: `GM`,
model: `Corsa 1.0`,
years: `2001 a 2009`
},
{
manufacturer: `GM`,
model: `Corsa 1.8`,
years: `2002 a 2006`
},
{
manufacturer: `GM`,
model: `Meriva 1.8`,
years: `2002 a 2012`
},
{
manufacturer: `GM`,
model: `Meriva 1.8 16V`,
years: `2002 a 2012`
},
{
manufacturer: `GM`,
model: `Montana 1.4`,
years: `2007 a 2009`
},
{
manufacturer: `GM`,
model: `Montana 1.8`,
years: `2003 a 2009`
},
{
manufacturer: `GM`,
model: `Prisma 1.4`,
years: `2006 a 2012`
},
{
manufacturer: `GM`,
model: `S10 2.4 Flex`,
years: `2006 a 2012`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2012`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2012`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `2001 a 2012`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `2001 a 2012`
},
{
manufacturer: `GM`,
model: `Vectra C 2.0`,
years: `2005 a 2012`
},
{
manufacturer: `GM`,
model: `Vectra C 2.4`,
years: `2005 a 2012`
},
{
manufacturer: `GM`,
model: `Zafira 2.0`,
years: `2001 a 2012`
},
{
manufacturer: `GM`,
model: `Zafira 2.0 16V`,
years: `2001 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilize o transponder ID 40 (T16).`, 
image: `/images/Transponders/ID 40.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A1.<br />Para realizar o emparelhamento<br />da BSI.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos Celta e Prisma está localizada na área A4.<br />A tomada de diagnóstico dos veículos Blazer, S10 e Vectra está localizada na área A5.<br />A tomada de diagnóstico dos veículos Corsa e Montana está localizada na área F5.<br />A tomada de diagnóstico dos veículos Astra, Meriva e Zafira está localizada na área F9.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5 - F5 - F9.jpg`},

{title: `Identificando ECU, Imobilizadores e painel.`, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `ECU ME 7.9.9<br />Pertence a aplicação das<br />cargas:<br />• OBD0002<br />• OBD0003<br />• OBD0034<br />• OBD0035<br />• OBD0097<br />• OBD0102`, 
image: `/images/Funções Específicas/OBD0045/ECU HSFI.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `ECU HSFI<br />Pertence a aplicação da<br />carga:<br />? OBD0004<br />? OBD0040<br />? OBD0068`, 
image: `/images/Funções Específicas/OBD0045/ECU ME 7.9.9.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `ECU DELCO VHC<br />Pertence a aplicação das<br />cargas:<br />• OBD0038<br />• OBD0039`, 
image: `/images/Funções Específicas/OBD0045/ECU DELCO VHC.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `ECU M1.5.5<br />Pertence a aplicação da<br />carga:<br />? OBD0036`, 
image: `/images/Funções Específicas/OBD0045/ECU M1.5.5.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `ECU ME 7.9.6<br />Pertence a aplicação das<br />cargas:<br />• OBD0037`, 
image: `/images/Funções Específicas/OBD0045/ECU ME 7.9.6.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `DELCO OHC<br />Pertence a aplicação das<br />cargas:<br />• OBD0041`, 
image: `/images/Funções Específicas/OBD0045/DELCO OHC.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `PAINEL GM2<br />Pertence a aplicação da<br />carga:<br />? OBD0042`, 
image: `/images/Funções Específicas/OBD0045/PAINEL GM2.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `IMOBILIZADOR OPEL 2<br />Pertence a aplicação das<br />cargas:<br />• OBD0073`, 
image: `/images/Funções Específicas/OBD0073 OPEL 2/Identificando e desmontando o imobilizador/Identificando o Imobilizador.jpg`},

{title: ``, 
description: `<br />xczxczxfsdss<br />`, 
ballon: `IMOBILIZADOR OPEL 2R<br />Pertence a aplicação da<br />carga:<br />? OBD0063`, 
image: `/images/Funções Específicas/OBD0063 Leitura Opel 2R/Identificando e desmontando o imobilizador.jpg`},
];
instruction = [];
lblStep = "Passo";
lblCause = "Causas Prováveis:";
lblSolution = "Soluções:";
lblSummary = "Sumário";
lblErrorMessage = "Mensagens de erros";

obdmap = true;
services = 
[{title: `Realizando leitura da chave mecânica, chassi e erros presentes`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Leitura?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Chave&nbsp;Mecanica:`,
`*****`,
`<br />`,
],
help: `Anote o código da chave mecânica.`
},
{lines: [
`&nbsp;`,
`Chassi:*********`,
`********`,
`<br />`,
],
help: `Chassi lido da ECU.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;Sem&nbsp;Erros`,
`&nbsp;&nbsp;&nbsp;Presentes!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o reset do imobilizador Opel2`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Resetar Opel2?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
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
`OPEL2`,
`&nbsp;&nbsp;Resetado!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação do imobilizador Opel2`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Prog. Opel2?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
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
`OPEL2`,
`&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a gravação do chassi`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Ler/Grav VIN`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
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
`Senha:`,
`****`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Chassi:*********`,
`********`,
`<br />`,
],
help: `Insira o novo chassi.`
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
`Procedimento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluido!`,
`<br />`,
],
help: `Tecle OK!`
},
]
}, {title: `Realizando o reset da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Resetar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Reset`,
`da&nbsp;ECU`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
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
`ECU`,
`&nbsp;Resetada!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação da ECU`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Programar ECU?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
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
`ECU`,
`&nbsp;Programada!`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando o apagamento de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Apagar chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
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
`Desligue&nbsp;`,
`&nbsp;a&nbsp;chave`,
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
`Ligue&nbsp;a&nbsp;Chave`,
`<br />`,
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
`Chave&nbsp;apagada!`,
`<br />`,
`<br />`,
],
help: ``
},
]
}, {title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione:`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`GM`, `>Opel 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Opel 2`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. chaves?`, `>Versao 2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Digite&nbsp;a&nbsp;Senha:`,
`****`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;chave`,
`com&nbsp;Transp.&nbsp;T16`,
`<br />`,
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
`Desligue&nbsp;a`,
`&nbsp;&nbsp;&nbsp;&nbsp;Ignicao!`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Programado!`,
`<br />`,
],
help: ``
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
{ label: `Erro no Reset`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;Reset`,
`<br />`,
`<br />`,
],
causes: [
`ECU ou Imobilizador bloqueado,`,`ECU ou Imobilizador com defeito.`,``,``,],
solutions: [
`Consulte o suporte técnico.`,]
},
{ label: `Erro na Programacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`&nbsp;&nbsp;&nbsp;&nbsp;Programacao!`,
`<br />`,
],
causes: [
`Bateria do telecomando está fraca,`,`A chave não está na ignição,`,`A programação não foi completada,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Coloque a chave na ignição,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},
{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas.`,],
solutions: [
`Conferir a senha digitada,`,`Aguardar o tempo com a ignição ligada e tentar novamente com a senha correta (realizar a Leitura Opel2 para checar se há tempo de espera, e quanto tempo de espera seria no caso de houver).`,]
},
{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`Tranponder incorreto.`,],
solutions: [
`Verifique o transponder.`,]
},
{ label: `Transponder nao Encontrado!`,
screens: [
`&nbsp;`,
`Transponder&nbsp;`,
`&nbsp;nao&nbsp;Encontrado!`,
`<br />`,
],
causes: [
`O transponder não está posicionado corretamente na antena,`,`O transponder foi retirado da antena durante o procedimento de gravação,`,`Mau contato na antena,`,`O transponder utilizado não é o correto.`,],
solutions: [
`Conferir a correta posição do transponder na antena,`,`Conferir se o transponder está correto. Pode-se utilizar a carga básica do Módulo de Transponder para identificar o transponder,`,`Conferir o bom estado da antena.`,]
},
{ label: `Senha incorreta!`,
screens: [
`<br />`,
`Senha&nbsp;incorreta!`,
`<br />`,
`<br />`,
],
causes: [
`A senha digitada está incorreta.`,],
solutions: [
`Insira a senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
