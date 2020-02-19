//Capa
nomeCarga = "Programação de chaves Pajero Dakar/Full Imob2 (2011-2017)";
revCarga = "Rev. 0";
dataManual = "Agosto 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Realiza a programação de até 8 chaves.`,
`Realiza teste de compatibilidade com o sistema.`,
`Realiza leitura de dados do imobilizador e da ECU.`,
`<obs>`,
`Observação:`,
`Esta carga não programa telecomandos`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Mitsubishi",
model: "Pajero Dakar 2.0",
years: "2011 a 2012"
},
{
manufacturer: "Mitsubishi",
model: "Pajero Full 3.8",
years: "2017 a 2017"
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize transponder PCF7936 (ID46) dedicado para Mitsubishi. De acordo com a carga OBD0231.", 
image: "/images/Transponders/PCF7936 (ID46) Dedicado Mitsubishi.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "A tomada de diagnóstico dos veículos está localizada na posição D5 ou na A5.", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A5-D5.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Diagnostico`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Diagnostico`, `>Mitsubishi`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Mitsubishi`, `>Imob2`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Imob2`, `>Prog. chaves?`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Prog. chaves?`, `>Pajero`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Selecione:`,
`&nbsp;Prog.&nbsp;Chaves?`,
`<br />`,
],
help: ``
},
{lines: [
`Selecione:`,
`&nbsp;Pajero&nbsp;Dakar`,
`&nbsp;Pajero&nbsp;Full`,
`<br />`,
],
help: `Selecione o modelo do veículo.`
},
{lines: [
`&nbsp;&nbsp;Use&nbsp;PCF7936`,
`(ID46)&nbsp;dedicado`,
`para&nbsp;Mitsubishi`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;as&nbsp;chaves`,
`serao&nbsp;apagadas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Sair`,
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
`&nbsp;&nbsp;&nbsp;Conecte&nbsp;o`,
`&nbsp;&nbsp;&nbsp;&nbsp;mobile!`,
`<br />`,
],
help: `Inicialize o aplicativo no dispositivo móvel.`
},
{lines: [
`Aguarde&nbsp;enquanto`,
`&nbsp;nosso&nbsp;servidor`,
`WEB&nbsp;trabalha&nbsp;no`,
`&nbsp;seu&nbsp;veiculo...`,
],
help: `Aguarde alguns instantes.`
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;Parcelas:**/**`,
`Valor&nbsp;do&nbsp;servico`,
`&nbsp;&nbsp;&nbsp;***c&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Saldo total disponível, número de parcelas do serviço, valor a ser cobrado pelo serviço.`
},
{lines: [
`&nbsp;Saldo:***.***c`,
`&nbsp;&nbsp;Servico&nbsp;Web`,
`&nbsp;Liberado!&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `O serviço está liberado, e não será cobrado créditos.`
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
`Desligue&nbsp;e&nbsp;ligue`,
`&nbsp;&nbsp;&nbsp;&nbsp;a&nbsp;chave&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Aguarde...`,
`<br />`,
`<br />`,
],
help: `Caso após essa mensagem apareça a  mensagem de veículo incompativel  vá para as Outras mensagens.`
},
{lines: [
`&nbsp;`,
`Chave&nbsp;programada`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: `Tecle (OK) para programar outra chave e volte para o passo X ou tecle (Volta) para finalizar o procedimento.`
},
{lines: [
`&nbsp;`,
`Ligue&nbsp;com&nbsp;a&nbsp;prox&nbsp;`,
`chave&nbsp;e&nbsp;tecle&nbsp;OK`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Chave&nbsp;programada`,
`Tecle&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;Chaves`,
`Prog.:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Tecle OK.`
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
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Senha Incorreta!`,
screens: [
`&nbsp;`,
`Senha&nbsp;`,
`&nbsp;&nbsp;Incorreta!`,
`<br />`,
],
causes: [
`O veículo selecionado está incorreto. `,`Veículo fora da aplicação. `,``,],
solutions: [
`Selecione o veículo correto. `,`Contate o suporte técnico. `,]
},

{ label: `Acesso Negado! *`,
screens: [
`&nbsp;`,
`Acesso&nbsp;Negado!&nbsp;*`,
`<br />`,
`<br />`,
],
causes: [
`O veículo selecionado está incorreto.`,`Veículo fora da aplicação.`,``,],
solutions: [
`Selecione o veículo correto. `,`Contate o suporte técnico. `,]
},

{ label: `Erro no Transponder *`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;Transponder&nbsp;*`,
`<br />`,
],
causes: [
`Transponder inválido.`,`O transponder já se encontra programado e travado.`,`O transponder utilizado não está dedicado para Mitsubishi.`,],
solutions: [
`? Utilize um transponder correto conforme solicitado no manual.`,`? Utilize transponder dedicado para Mitisubishi novo.`,`? Utilize a carga OBD0231 para realizar a dedicação do transponder.`,]
},

{ label: `Saldo Web Service Insuficiente!`,
screens: [
`&nbsp;&nbsp;&nbsp;Saldo&nbsp;Web`,
`&nbsp;&nbsp;&nbsp;&nbsp;Service`,
`&nbsp;Insuficiente!`,
`<br />`,
],
causes: [
`O crédito total disponível se esgotou.`,],
solutions: [
`Entrar em contato com o comercial, ou com o suporte.`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
