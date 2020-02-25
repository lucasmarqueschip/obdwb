//Capa
nomeCarga = `Manual Carga -  OBD0220<br />Programação de chaves Ford Pats 4 Tipo 4 (New Fiesta 14-16)`;
revCarga = `Rev. 2`;
dataManual = `Fevereiro 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Apagamento com reprogramação de 2 chaves para o veículo.`,
`Programação de até 4 chaves para o veículo.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `New Fiesta 1.5`,
years: `2014 a 2016`
},
{
manufacturer: `Ford`,
model: `New Fiesta 1.6`,
years: `2014 a 2016`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder utilizado:`, 
description: `Observação: O transponder deve estar dedicado de acordo com o manual da carga OBD0206.`, 
ballon: `Utilize um transponder ID 4D63 ou ID 4D63 DST+.`, 
image: `/images/Transponders/ID 4D63.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Usado para realizar o procedimento via diagnóstico.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico fica localizada na posição A4 ou A5.<br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A4 - A5.jpg`},
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
{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`New Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Programar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves já programadas serão apagadas.`
},
{lines: [
`São&nbsp;necessárias`,
`2&nbsp;chaves&nbsp;para`,
`realizar&nbsp;o`,
`procedimento!`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`4D63&nbsp;/&nbsp;4D63&nbsp;DST+`,
`<br />`,
],
help: `Utilize um transponder ID 4D63 DST+ dedicado para Ford.
`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Desligue&nbsp;e&nbsp;ligue&nbsp;a`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
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
`Insira&nbsp;e&nbsp;ligue&nbsp;a`,
`próxima&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Insira e ligue a próxima chave a ser programada, e tecle OK.`
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`
},
]
}, {title: `Realizando a adição de novas chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`New Fiesta`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`Pats 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Tipo 4`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Adicionar&nbsp;Chaves`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Use&nbsp;transponder`,
`4D63&nbsp;/&nbsp;4D63&nbsp;DST+`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;a&nbsp;chave&nbsp;de&nbsp;ignição`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Desligue&nbsp;e&nbsp;`,
`ligue&nbsp;a&nbsp;chave!`,
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves atualmente programadas no veículo.`
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`
},
]}];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [
{ label: `Erro no acesso!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no&nbsp;acesso!`,
`<br />`,
`<br />`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Tempo Excedido!`,
screens: [
`&nbsp;`,
`Tempo&nbsp;Excedido!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Indica que o tempo para a obtenção das informações do veículo foi excedido.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Erro na verificacao!`,
screens: [
`&nbsp;`,
`Erro&nbsp;na&nbsp;verificação!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O veículo não reuniu as informações necessárias para entrar em modo de programação.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Erro de Operacao`,
screens: [
`&nbsp;`,
`Erro&nbsp;de&nbsp;Operação`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`O veículo não liberou o acesso para a programação.`,],
solutions: [
`Repita o procedimento.`,]
},
{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no&nbsp;Procedimento!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`As tentativas de programar o transponder falharam.`,``,],
solutions: [
`Verifique o transponder utilizado e as condições do veículo.`,``,``,]
},
{ label: `Erro no codigo de seguranca. Repetir? <X>NAO / <OK>SIM`,
screens: [
`Erro&nbsp;no&nbsp;código`,
`de&nbsp;segurança.`,
`Repetir?`,
`&lt;X&gt;NAO&nbsp;/&nbsp;&lt;OK&gt;SIM`,
],
causes: [
`Não foi possível acessar o modo de programação do veículo.`,],
solutions: [
`Repita o procedimento.`,`      Se escolhido "SIM" durante a Programação de Chaves, volte ao passo 12.`,`      Se escolhido "SIM" durante a Adição de Chaves, volta ao passo 10.`,`      Se escolhido "NAO" para qualquer um dos procedimentos (Programação de Chaves ou Adição de Chaves), o procedimento será finalizado.`,]
},
{ label: `Erro na Programacao! Repetir? (X)NAO / <OK>SIM`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Repetir?`,
`(X)&nbsp;NAO&nbsp;/&nbsp;&lt;OK&gt;&nbsp;SIM`,
],
causes: [
`O transponder utilizado não é válido.`,`O transponder já está programado para o veículo.`,``,],
solutions: [
`Utilize um transponder compatível com o veículo.`,`Utilize outro transponder que não esteja programado, de acordo com a aplicação.`,`      Se escolhido "SIM" durante a Programação de Chaves, volte ao passo 12.`,`      Se escolhido "SIM" durante a Adição de Chaves, volta ao passo 10.`,`      Se escolhido "NAO" para qualquer um dos procedimentos (Programação de Chaves ou Adição de Chaves), o procedimento será finalizado.`,``,]
},
{ label: `Chave nao programada! Repetir? (X)NAO / <OK>SIM`,
screens: [
`Chave&nbsp;não`,
`programada!`,
`Repetir?`,
`(X)NÃO&nbsp;/&nbsp;(OK)SIM`,
],
causes: [
`O transponder pode não estar dedicado corretamente para o veículo.`,],
solutions: [
`Verificar detalhes no manual de dedicação OBD0206 - Dedicação do transponder ID4D-63 e ID4D DST+ para Ford.`,`Utilize um transponder compatível com o veículo.`,`Utilize outro transponder de acordo com a aplicação`,`      Se escolhido "SIM" durante a Programação de Chaves, volte ao passo 13.`,`      Se escolhido "SIM" durante a Adição de Chaves, volta ao passo 11.`,`      Se escolhido "NAO" para qualquer um dos procedimentos (Programação de Chaves ou Adição de Chaves), o procedimento será finalizado.`,]
},
{ label: `Veiculo fora da Aplicacao!`,
screens: [
`&nbsp;`,
`Veículo&nbsp;fora&nbsp;da&nbsp;`,
`Aplicação!`,
`<br />`,
],
causes: [
`O veículo não faz parte da aplicação desta carga`,],
solutions: [
`Verificar aplicação.`,]
},
{ label: `Desconecte o OBDMap!!`,
screens: [
`&nbsp;`,
`Desconecte&nbsp;o&nbsp;OBDMap!!`,
`<br />`,
`<br />`,
],
causes: [
`Ocorreu um erro durante a programação e o procedimento foi abortado.`,],
solutions: [
]
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
