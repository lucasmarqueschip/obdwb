//Capa
nomeCarga = `Manual Carga -  OBD0115<br />Apagar e Programar Telecomando Linha Volkswagen (OBD e Procedimento)`;
revCarga = `Rev. 3`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagar telecomandos.`,
`Programar telecomandos.`,
``,
`Atenção: O número máximo de telecomandos programados por veículos são quatro, incluindo o telecomando existente.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Crossfox 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Crossfox 1.6`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Fox 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Fox 1.6`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G4 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G4 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G5 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol G5 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Polo 1.6`,
years: `2008 a 2012`
},
{
manufacturer: `VW`,
model: `Polo 2.0`,
years: `2008 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Spacefox 1.0`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Spacefox 1.6`,
years: `2010 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Voyage 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(`Observações:`, ``, `- Nem todos os modelos e anos dos veículos citados correspondem ao telecomando desta carga. Verifique como identificar o modelo do Telecomando desta carga na Página 5.`);
applicationObs += createObs(`- Caso o procedimento não seja concluído, pode significar que o módulo de alarme está bloqueado e será necessário aguardar aproximadamente 3 horas pra poder ser realizado o procedimento novamente. Para realizar o procedimento sem a necessidade de aguardar o tempo de espera utilize a carga "OBD0012 - Linha FOX e a função: Destravar o tempo de espera do módulo de alarme (carga não inclusa)".`, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Desmontando e Identificando o telecomando:`, 
description: `Neste caso usamos como exemplo o telecomando do Saveiro 1.6. O procedimento para os demais veículos será o mesmo.<br /><br />Atenção: Para identificar o telecomando, observe que o código sempre termina com número. Caso termine com alguma letra no final desse código, esta carga não é valida para esse modelo de telecomando.`, 
ballon: `Segure nas duas extremidades do telecomando com bastante firmeza e puxe como mostra a foto ao lado.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Abrindo o telecomando.jpg`},

{title: ``, 
description: `Neste caso usamos como exemplo o telecomando do Saveiro 1.6. O procedimento para os demais veículos será o mesmo.<br /><br />Atenção: Para identificar o telecomando, observe que o código sempre termina com número. Caso termine com alguma letra no final desse código, esta carga não é valida para esse modelo de telecomando.`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Dois telecomandos.jpg`},

{title: `Localizando a tomada de diagnóstico dos veículos:`, 
description: `A tomada de diagnóstico do Gol G4/G5, Saveiro e Voyage ficam localizados na área A5.<br />A tomada de diagnóstico do Polo fica localizada na área A4.<br />A tomada de diagnóstico do Fox/CrossFox/SpaceFox fica localizada na área C5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5 - C5.jpg`},

{title: `Programação do telecomando por procedimento:`, 
description: ``, 
ballon: `1º Retire o cabo Universal da tomada de diagnóstico.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 1.jpg`},

{title: ``, 
description: ``, 
ballon: `2º Ligue a ignição do veículo com uma chave mecânica, esta chave não precisa ter um telecomando.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 2.jpg`},

{title: ``, 
description: ``, 
ballon: `3º Feche todos os vidros e portas. E saia do veículo.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 3.jpg`},

{title: ``, 
description: ``, 
ballon: `4º Gire a chave uma vez para destrancar a porta (sentido anti-horário).`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 4.jpg`},

{title: ``, 
description: ``, 
ballon: `5º Gire a chave uma vez para trancar a porta (sentido horário).`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 5.jpg`},

{title: ``, 
description: ``, 
ballon: `6º Gire a chave para destrancar a porta, e com a chave girada mantenha o botão LOCK pressionado por 20 segundos e em seguida solte e pressione novamente por 1 segundo, assim as travas das portas serão acionadas.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 6.jpg`},

{title: ``, 
description: ``, 
ballon: `6º Ao programar o telecomando as travas das portas irão travar e destravar assim confirmando a apresentação.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 11.jpg`},

{title: ``, 
description: ``, 
ballon: `Logo em seguida já fazer o próximo telecomando, para que não acione o tempo de bloqueio do módulo de alarme.<br /><br />Mantendo a chave mecânica na ignição, continue a programar o próximo telecomando.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 7.jpg`},

{title: ``, 
description: ``, 
ballon: `1º Gire a chave uma vez para destrancar a porta (sentido anti-horário). Insira a mesma chave só vai mudar o telecomando. Veja mais fotos abaixo.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 8.jpg`},

{title: ``, 
description: ``, 
ballon: `2º Gire a chave uma vez para trancar a porta (sentido horário).`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 9.jpg`},

{title: ``, 
description: ``, 
ballon: `3º Gire a chave para destrancar a porta, e com a chave girada mantenha o botão LOCK pressionado por 20 segundos e em seguida solte e pressione novamente por 1 segundo, assim as travas das portas serão acionadas.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 10.jpg`},

{title: ``, 
description: ``, 
ballon: `4º Ao programar o telecomando as travas das portas irão travar e destravar assim confirmando a apresentação.`, 
image: `/images/Funções Específicas/OBD0115 Apagar e programar telecomando linha Volkswagen OBD e procedimento/Passo 6-1.jpg`},
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
{title: `Realizando a Programação dos Telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Adição de telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Selecione a quantidade de telecomandos a serem programados (máximo quatro). Tecle OK!`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
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
`Pressione&nbsp;o`,
`Várias&nbsp;vezes&nbsp;-15&nbsp;`,
`segundos`,
`<br />`,
],
help: `Nesta etapa o botão LOCK do telecomando deve ser pressionado até perceber o aviso do veículo (Luzes,buzina, beep, etc).`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]
}, {title: `Apagar telecomandos:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [`Alarme 2`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagamento de telecomandos`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
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
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro de Comunicacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Comunicação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
