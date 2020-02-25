//Capa
nomeCarga = `Manual Carga -  OBD0001<br />Leitura de Senha e Programação de Chaves VW Gol, Saveiro e Voyage 2009-2012`;
revCarga = `Rev. 4`;
dataManual = `Julho 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura de senha nas centrais: IAW 4GV e ME7.5.30.`,
`Programação de até 8 chaves: É necessário ter em mãos todas as chaves a serem programadas, inclusive as que já estavam programadas. Caso as chaves que já funcionavam no veículo não sejam programadas, elas não funcionarão mais, necessitando fazer a programação novamente.`,
`Adição de novas chaves: Adiciona novas chaves sem apagar as que já estão programadas no veículo.`,
``,
`Observações:`,
`- ECU IAW 4GV são utilizadas nos veículos que vem equipado com o motor 1.0.`,
`- ECU ME7.5.30 são utilizadas nos veículos que vem equipado com o motor 1.6.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Gol 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Gol 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Saveiro 1.6`,
years: `2009 a 2012`
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
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Fonte de alimentação. Necessária para utilizar o OBDMap em bancada.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça soic 8`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos os acessórios conectados no OBDMap para o procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

{title: `Identificando e desmontando a ECU IAW 4GV:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Identificando e desmontando a ECU 3.jpg`},

{title: `Localizando e conectando a pinça na memória 95320:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Localizando e conectando a pinça na memória 95320.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Conectando a pinça na memória.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 95320.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Pinça conectada na memória.jpg`},

{title: `Todos os acessórios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU IAW 4GV/Todos os acessórios conectados.jpg`},

{title: `Identificando e desmontando a ECU ME7.5.30:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilize uma chave torx T15 para retirar os parafusos fixadores que prendem a tampa da ECU.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Com o auxílio de uma chave de fenda, faça uma alavanca para ter acesso à placa.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/ECU ME7.5.30/Identificando e desmontando a ECU ME7.5.30 3.jpg`},

{title: `Localizando e conectando a pinça na memória 95040:`, 
description: ``, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Localizando e conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória 95040.`, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Conectando a pinça na memória 95040 2.jpg`},

{title: `Todos os acessorios conectados:`, 
description: `Atenção<br />Não inverter a pinça, conecte a pinça com cuidado para não causar danos a mesma e nem a ECU.<br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0001 Gol G5/Memória 95040/Todos os acessórios conectados.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico dos veículos está localizada na posição A4.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4.jpg`},
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
{title: `Realizando Leitura da senha da ECU IAW 4GV:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GV`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95320`,
`tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.
`,
resource: {res: {title:`Localizando alguma coisa`,description:`Para localizar, chame o Lucas`,ballon:``,image:`images/brasil.png`},i: `Senha`}
},
]
}, {title: `Realizando leitura da senha da ECU ME7.5.10/20/30`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.30`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95320`,
`tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`,
},
]
}, {title: `Realizando a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;Transponder`,
`ID&nbsp;48&nbsp;CAN`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Aguarde:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Senha:`,
`0000`,
`<br />`,
],
help: `Digite a senha lida anteriormente.`,
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha o número de chaves que serão programadas. No máximo 8 chaves.`,
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK! Se for a última chave o procedimento será finalizado, se não, volte ao passo 8.`,
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`,
},
]
}, {title: `Realizando a adição de novas chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Gol`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Use&nbsp;o&nbsp;Transponder`,
`ID&nbsp;48&nbsp;CAN`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Aguarde:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`&nbsp;`,
`Senha:`,
`0000`,
`<br />`,
],
help: `Digite a senha lida anteriormente.`,
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha o número de chaves que serão adicionadas.`,
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`<br />`,
`<br />`,
`<br />`,
`<br />`,
],
help: `Tecle OK!`,
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave`,
`e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK! Se for a última chave o procedimento será finalizado, se não, volte ao passo 8.`,
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK!`,
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro na leitura!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na`,
`leitura!`,
`<br />`,
],
causes: [
`Mau contato da pinça com a memória,`,`Mau contato da pinça ou cabo MCU com o OBDMap,`,`ECU com problema,`,`A pinça foi conectada em outro componente, (se existir outro componente SOIC8 na placa)`,`Os terminais da memória ou da própria pinça podem estar com resina ou sujeira.`,``,],
solutions: [
`Conferir a correta posição da pinça na memória, todos os terminais da pinça devem encostar-se aos terminais correspondentes da memória,`,`Conferir a correta soldagem do cabo MCU,`,`Conferir se os parafusos que prendem a pinça ou o cabo MCU no OBDMap estão bem fixos,`,`Conferir bom estado do módulo,`,`Conferir se os terminais da memória e da pinça estão limpos, sem resina ou sujeira.`,]
},
{ label: `Pinca invertida! Verifique...`,
screens: [
`&nbsp;`,
`Pinça&nbsp;invertida!`,
`<br />`,
`<br />`,
],
causes: [
`A pinça realmente foi conectada invertida na memória,`,`A pinça foi conectada em outro componente,`,`Memória, ECU ou painel está com problema.`,],
solutions: [
`Conferir a correta posição da pinça na memória.`,]
},
{ label: `Curto! Verifique...`,
screens: [
`&nbsp;`,
`Curto!`,
`<br />`,
`<br />`,
],
causes: [
`Os fios do cabo MCU foram soldados em outros pontos do painel,`,`A pinça foi conectada de forma incorreta,`,`Cabo MCU, pinça ECU ou painel está com problema.`,],
solutions: [
`Verificar a correta posição dos fios ou pinça no painel ou ECU,`,`Verificar se a pinça ou cabo MCU apresenta algum defeito visível, na dúvida consulte o suporte técnico.`,]
},
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
{ label: `Senha Incorreta!`,
screens: [
`Senha&nbsp;`,
`Incorreta!`,
`Tecle&nbsp;OK&nbsp;para&nbsp;continuar!`,
`<br />`,
],
causes: [
`A senha inserida está incorreta.`,],
solutions: [
`Insira a senha correta.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
