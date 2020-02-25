//Capa
nomeCarga = `Manual Carga -  OBD0214<br />Programação de chaves de presença Ford Pats 6 T2`;
revCarga = `Rev. 1`;
dataManual = `Setembro 2015`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Leitura do número de chaves programadas no veículo.`,
`Apagamento de todas as chaves do veículo.`,
`Adição de novas chaves para o veículo.`,
``,
`Observação:`,
` Para o procedimento de adição após o apagamento de todas as chaves, é necessário programar ao menos 2 chaves para o veículo.`,

];
introObs = createObs()


// aplicação 
applicationTitle = `Aplicação`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Ano</th>`;
models = [
{
manufacturer: `Ford`,
model: `Edge SEL 3.5`,
years: `2012 a 2014`
},
{
manufacturer: `Ford`,
model: `Edge Limited 3.5`,
years: `2012 a 2014`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Chave de presença utilizada`, 
description: ``, 
ballon: `Utilize chave original.`, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Chave.jpg`},

{title: `Acessórios utilizados:`, 
description: ``, 
ballon: `Cabo universal + adaptador A9. Usado para conectar o OBDMap ao veículo para procedimento via diagnose.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A9 DESCONECTADOS.jpg`},

{title: `Todos os acessórios conectados:`, 
description: ``, 
ballon: `Todos os acessórios conectados para procedimento via diagnose.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A9 CONECTADOS .jpg`},

{title: `Localizando a tomada de diagnóstico no veículo:`, 
description: `A tomada de diagnóstico fica localizada na posição C5.<br /><br />`, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/C5.jpg`},

{title: `Procedimento para programação da chave de presença via OBD`, 
description: `Procedimento para a realização do <a href="#s2step7">passo 8</a> e passo 16 da adição de chaves de presença.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0214 Programação de chaves de presença Ford Pats 6 T2/Procedimento 1.jpg`},
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
{title: `Realizando a leitura do número de chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Número&nbsp;de&nbsp;chaves`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK`,
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
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves de presença
atualmente programadas no veículo.`,
},
]
}, {title: `Realizando o apagamento das chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Apagar&nbsp;proximity`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`Todas&nbsp;as&nbsp;chaves&nbsp;serão&nbsp;perdidas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Sair`,
`<br />`,
],
help: `As chaves de presença já programadas
serão apagadas.`,
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK`,
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
`Aguarde:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde aproximadamente 10 minutos.`,
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
`Chaves&nbsp;apagadas`,
`com&nbsp;sucesso!`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`&nbsp;`,
`OK-&nbsp;Add&nbsp;chaves?`,
`Volta-&nbsp;Sair?`,
`<br />`,
],
help: `Se selecionado “OK”, siga ao passo 7 da
adição de chaves.
Se selecionado “Volta” siga ao próximo passo.`,
},
]
}, {title: `Realizando a adição de novas chaves de presença`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Ford`], help: `Tecle OK`, menu: 1000},
{lines: [`Edge`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves de presença`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob 6`], help: `Tecle OK`, menu: 1000},
{lines: [`Apagar e Programar chaves`], help: `Tecle OK`, menu: 1000},
{lines: [
`&nbsp;`,
`Selecione:`,
`Add&nbsp;Proximity`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`&nbsp;`,
`Utilize&nbsp;chave&nbsp;original!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Veja a chave utilizada na página 3`,
},
{lines: [
`Insira&nbsp;a&nbsp;chave`,
`no&nbsp;slot&nbsp;segundo`,
`o&nbsp;manual&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `
Veja <a href = "#resource0">chave utilizada</a>. Tecle OK!`,
},
{lines: [
`Aperte&nbsp;START/STOP`,
`(para&nbsp;desligar&nbsp;ignição)`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Tecle OK`,
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
`Aguarde:&nbsp;&nbsp;&nbsp;&nbsp;min.`,
`<br />`,
`<br />`,
],
help: `Aguarde aproximadamente 10 minutos.`,
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
`Chave&nbsp;adicionada`,
`com&nbsp;sucesso!&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Se “SIM”, siga ao próximo passo.
Se “NÃO” siga ao passo 19.`,
},
{lines: [
`&nbsp;`,
`Retire&nbsp;a&nbsp;chave`,
`do&nbsp;veículo&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK`,
},
{lines: [
`&nbsp;`,
`Insira&nbsp;a&nbsp;proxima&nbsp;chave&nbsp;no&nbsp;`,
`slot&nbsp;OK`,
`<br />`,
],
help: `Insira a próxima chave a ser programada no slot. Tecle OK!`,
},
{lines: [
`Pressione&nbsp;o&nbsp;*`,
`de&nbsp;todos&nbsp;os`,
`telecomandos!`,
`<br />`,
],
help: `Pressione o botão abrir do telecomando
de todas as chaves programadas.`,
},
{lines: [
`&nbsp;`,
`Número&nbsp;de&nbsp;Chaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de chaves de presença
atualmente programadas no veículo.`,
},
{lines: [
`&nbsp;`,
`Procedimento&nbsp;Concluído!`,
`Desconecte&nbsp;o&nbsp;OBD`,
`<br />`,
],
help: `O procedimento foi concluído com sucesso. Desconecte o cabo da tomada de diagnose.`,
},
{lines: [
`Chave&nbsp;não`,
`programada!`,
`Repetir?`,
`(X)NÃO&nbsp;/&nbsp;(OK)SIM`,
],
help: ``,
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A9,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},
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
{ label: `Erro na Programacao! Repetir? <OK>SIM / (X)NAO`,
screens: [
`Erro&nbsp;na`,
`Programação!`,
`Repetir?`,
`(X)&nbsp;NAO&nbsp;/&nbsp;&lt;OK&gt;&nbsp;SIM`,
],
causes: [
`O apagamento das chaves não foi concluído com sucesso.`,],
solutions: [
`Repetir o procedimento.`,]
},
{ label: `Chave nao programada! `,
screens: [
`Chave&nbsp;não`,
`programada!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`A chave não foi adicionada com sucesso.`,`Chave não posicionada corretamente no slot.`,``,],
solutions: [
`? Reinsira a chave no slot. Ver local do slot na página 6`,`? Utilize uma chave válida. Ver chave utilizada na página 3`,]
},
{ label: `Falha no Procedimento!`,
screens: [
`&nbsp;`,
`Falha&nbsp;no&nbsp;Procedimento!`,
`Tecle&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Todas as tentativas de adicionar chave falharam,`,`Defeito no carro, parte elétrica.`,],
solutions: [
`Verifique se a chave utilizada está correta,`,`Conferir parte elétrica do carro, fusíveis, etc.`,]
},
{ label: `Use cabo A9!`,
screens: [
`&nbsp;`,
`Use&nbsp;cabo&nbsp;A9!`,
`<br />`,
`<br />`,
],
causes: [
`O cabo utilizado não está correto.`,],
solutions: [
`Conecte o cabo A9 e repita o procedimento.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
