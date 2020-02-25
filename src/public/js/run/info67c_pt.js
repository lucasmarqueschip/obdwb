//Capa
nomeCarga = `Manual Carga -  OBD0067<br />Fox (senha e chaves)`;
revCarga = `Rev. 2`;
dataManual = `Maio 2014`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura da senha no painel via pinça ou cabo MCU.`,
` Leitura da senha nas centrais ME7. 5.30 e IAW 4GV.GR via pinça.`,
` Programar novas chaves via OBD.`,
` Adicionar até 8 chaves via OBD.`,
` Programar o telecomando via procedimento.`,
`<obs>`,
`Observação: As chaves programadas não funcionarão em outro veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `VW`,
model: `Fox 1.0`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Fox 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Crossfox 1.6`,
years: `2009 a 2012`
},
{
manufacturer: `VW`,
model: `Spacefox 1.6`,
years: `2009 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `O Transponder utilizado é o Megamos Crypto 48 dedicado.`, 
image: `/images/Transponders/Megamos Crypto 48 - dedicado.jpg`},

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
ballon: `Cabo MCU. Necessário para conectar o painel ao OBDMap em bancada.`, 
image: `/images/Acessórios/Cabo MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `<br />Utilize o cabo universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `Leitura da senha na central ME7.5.30`, 
description: `A senha deste veículo encontra-se na ECU IAW 4GV.GR ou ME7.5.30 e no painel do veículo.<br />Recomendamos a leitura da senha pela central. Se a central não for umas das citadas (IAW 4GV.GR ou ME7.5.30) a senha deve ser lida no painel do veículo.`, 
ballon: `Localizando a memória 95040`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Localizando a memória 95040 ME755.jpg`},

{title: ``, 
description: `A senha deste veículo encontra-se na ECU IAW 4GV.GR ou ME7.5.30 e no painel do veículo.<br />Recomendamos a leitura da senha pela central. Se a central não for umas das citadas (IAW 4GV.GR ou ME7.5.30) a senha deve ser lida no painel do veículo.`, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória 95040.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Conectando Pinça ME755.jpg`},

{title: ``, 
description: `A senha deste veículo encontra-se na ECU IAW 4GV.GR ou ME7.5.30 e no painel do veículo.<br />Recomendamos a leitura da senha pela central. Se a central não for umas das citadas (IAW 4GV.GR ou ME7.5.30) a senha deve ser lida no painel do veículo.`, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Pinça Conectada ME755.jpg`},

{title: `Leitura da senha na central IAW 4GV.GR`, 
description: ``, 
ballon: `Conecte a pinça na memória 95320.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Localizando a memória 95320 IAW 4GV.jpg`},

{title: `Leitura da senha no Painel`, 
description: ``, 
ballon: `Remova a capa que protege os 2 parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Retirando Painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova os dois parafusos fixadores.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Remova os parafusos fixadores.jpg`},

{title: ``, 
description: ``, 
ballon: `Com cuidado puxe o painel do carro e o apóie em uma flanela para não riscar.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Puxe o Painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Com auxílio de uma chave de fenda, remova o conector azul.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Remova o conector Azul.jpg`},

{title: ``, 
description: ``, 
ballon: `Remova o conector Preto.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Remova o Conector Preto.jpg`},

{title: ``, 
description: ``, 
ballon: `Para ter acesso a placa, remova os parafusos fixadores como indicado na foto.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Remova os parafusos do painel.jpg`},

{title: ``, 
description: ``, 
ballon: `Painel desmontado.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Painel Desmontado.jpg`},

{title: `Leitura da senha no painel utilizando a pinça soic 8`, 
description: ``, 
ballon: `Localizando a memória 24LC32A.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Localizando a memória 24LC32A.jpg`},

{title: ``, 
description: ``, 
ballon: `O pino 1 da pinça deve coincidir com o pino 1 da memória 24LC32A.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Pino 1 da memoria.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinça conectada na memória.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Pinça Conectada Painel.jpg`},

{title: `Leitura da senha utilizando cabo MCU`, 
description: ``, 
ballon: `Para melhor visualização dos pontos a serem soldados, foi separado em área A e B.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Pontos de Soldas Painel 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando os pontos a serem soldados os fios do cabo MCU na área A:<br />1 => Fio Preto<br />2 => Fio Cinza<br />3 => Fio Verde`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Solda 123.jpg`},

{title: ``, 
description: ``, 
ballon: `Identificando o ponto a ser soldado o fio vermelho na área B:<br />4 => Fio Vermelho`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Solda 4.jpg`},

{title: `Soldando o cabo MCU no painel`, 
description: ``, 
ballon: `Soldado os fios preto, cinza e verde na área A.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Fios Soldados 123.jpg`},

{title: ``, 
description: ``, 
ballon: `Soldado o fio vermelho na área B.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Fio Soldado 4.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Leitura da senha via cabo MCU.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Todos os Equipamentos MCU.jpg`},

{title: ``, 
description: ``, 
ballon: `Leitura da senha via Pinça.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Todos os Equipamentos PINCA.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico está localizada na posição C5.`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},

{title: `Programando o telecomando`, 
description: ``, 
ballon: `1º: Insira uma chave na ignição do veículo.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Insira a Primeira chave  na Ingnição.jpg`},

{title: ``, 
description: ``, 
ballon: `2º: Feche todos os vidros e portas do veículo, mantendo a chave na ignição.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Feche as Janelas.jpg`},

{title: ``, 
description: ``, 
ballon: `3º: Gire a chave para destrancar o carro (sentido anti-horário), pressione qualquer botão do telecomando até que acione o aviso sonoro do alarme.`, 
image: `/images/Funções Específicas/OBD0067 Fox 2010/Gire a Chave.jpg`},
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
{title: `Realizando leitura da senha da ECU ME7.5.10/20/30`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Bosch ME7.5.30`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95320`,
`tecle&nbsp;&lt;OK&gt;`,
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando Leitura da senha da ECU IAW 4GV:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Fox`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Marelli IAW 4GV`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95320`,
`tecle&nbsp;&lt;OK&gt;`,
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando Leitura de Senha do Painel`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Leitura de senha`], help: `Tecle OK`, menu: 1000},
{lines: [
`Conecte&nbsp;a&nbsp;pinça&nbsp;na&nbsp;`,
`memória&nbsp;95320`,
`tecle&nbsp;&lt;OK&gt;`,
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Anote a senha.`
},
]
}, {title: `Realizando procendimento de adicionar chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Utilize a senha que foi lida na ECU
ou no painel do veículo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser adicionada. Tecle OK!`
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
help: `Primeira chave já programada.`
},
]
}, {title: `Realizando programação de novas chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`VW`], help: `Tecle OK`, menu: 1000},
{lines: [`Sistemas`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 5`], help: `Tecle OK`, menu: 1000},
{lines: [`Painel VDO`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 1`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
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
`Aguarde&nbsp;6&nbsp;MINUTOS`,
`<br />`,
`<br />`,
],
help: `Aguarde 6 minutos.`
},
{lines: [
`&nbsp;`,
`Senha:&nbsp;çççç`,
`<br />`,
`<br />`,
],
help: `Utilize a senha que foi lida na
ECU ou no painel do veículo. Tecle OK!`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;chaves:`,
`<br />`,
`<br />`,
],
help: `Escolha a quantidade de chaves a ser adicionada. Tecle OK!`
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
help: `Primeira chave já programada.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A1,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico, talvez esta carga tenha tido alterações.`,]
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
