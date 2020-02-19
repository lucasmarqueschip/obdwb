//Capa
nomeCarga = "Preparação e Apresentação de Chaves Fiat Code 2 Fase 3 Painel Continental via OBD";
revCarga = "Rev. 4";
dataManual = "Agosto 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/obdEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Geração e programação de transponders em veículos que utilizam o sistema CODE 2 FASE 3 com painel Continental via OBD (é possível programar até 8 chaves).`,
`<obs>`,
`Observação: As chaves que não forem apresentadas e já estavam programadas, ficarão bloqueados para funcionar no veículo, portanto é necessário passar pela apresentação todas as chaves que se deseja manter funcionando.`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Fiat",
model: "Uno EVO 1.0",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Uno EVO 1.4",
years: "2010 a 2012"
},
{
manufacturer: "Fiat",
model: "Strada Working",
years: "2013 a "
},
];
applicationObs = createObs(undefined, undefined, undefined)



resources = [
{title: "", 
description: "", 
ballon: "Utilize o transponder Megamos ID48 NOVO! <br />Se não for utilizado um<br />transponder novo o<br />procedimento pode não ser<br />bem sucedido!", 
image: "/images/Transponders/ID 48 NOVO.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Utilize o cabo universal + adaptador A3.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "", 
description: "", 
ballon: "Fonte de alimentação. Necessária para<br />utilizar o OBDMap em bancada.", 
image: "/images/Acessórios/Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Módulo de transponder. Realiza<br />operações com transponders<br />junto ao OBDMap.", 
image: "/images/Acessórios/Modulo de Transponder.jpg"},

{title: "Posicionamento do transponder no módulo de transponder:", 
description: "", 
ballon: "O transponder deve ser posicionado dentro da antena (copo branco) do módulo de transponder na posição vertical e no centro como mostra a foto.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro CERTO.jpg"},

{title: "", 
description: "", 
ballon: "O transponder não deve ficar inclinado na antena do módulo, isto pode causar erro na operação. Procure deixá-lo na vertical.", 
image: "/images/Instrucao Modulo de Transponder/MT-Vidro ERRADO.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "", 
image: "/images/Tomada de Diagnostico/Carro/A4.jpg"},

{title: "", 
description: "", 
ballon: "Retire o porta objetos do veículo.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/1.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + adaptador A3 ou cabo CAN na tomada de diagnose do veículo.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/2.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo universal + daptador A3 ou cabo CAN no OBDMap.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/Conecte Cabo Universal + A3.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o módulo de transponder no OBDMap.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/Conecte Módulo de transponder.jpg"},

{title: "", 
description: "", 
ballon: "Conecte o cabo Fiat ou a fonte de alimentação no módulo de transponder.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/Conecte Módulo de transponder 2.jpg"},

{title: "", 
description: "", 
ballon: "Caso utilize o cabo Fiat, conecte o jacaré vermelho no pólo positivo da bateria.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/Conecte o Cabo Fiat.jpg"},

{title: "", 
description: "", 
ballon: "Todos os acessórios conectados.", 
image: "/images/Funções Específicas/OBD0144 Preparação e apresentação de chaves painel Continental/Todos os acessórios conectados.jpg"},
];
instruction = [];
obdmap = true;
services = 
[{title: `Realizando a geração e a programação de chaves:`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Selecione`, `>Outros`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Outros`, `>Fiat`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`Fiat`, `>CODE 2 Fase 3`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`CODE 2 Fase 3`, `>P. Continental`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`P. Continental`, `>Gerar TPD OBD`, `<br /><br />`], help: `Tecle OK`, menu: 1000},
{lines: [`<br />Carregando...<br />Aguarde<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;Utilize&nbsp;o`,
`&nbsp;&nbsp;&nbsp;cabo&nbsp;CAN,`,
`&nbsp;&nbsp;o&nbsp;modulo&nbsp;de`,
`&nbsp;transponder&nbsp;e`,
],
help: ``
},
{lines: [
`&nbsp;o&nbsp;cabo&nbsp;FIAT&nbsp;ou`,
`&nbsp;&nbsp;&nbsp;a&nbsp;fonte&nbsp;do`,
`&nbsp;OBDMAP&nbsp;segundo`,
`&nbsp;&nbsp;&nbsp;&nbsp;o&nbsp;manual`,
],
help: `Tecle OK!`
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
`&nbsp;`,
`Selecione:`,
`Gerar&nbsp;TPD&nbsp;OBD`,
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
`Aguarde...`,
`<br />`,
`<br />`,
],
help: ``
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
`COD.&nbsp;ELET:&nbsp;*****`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`&nbsp;Dedicar&nbsp;&nbsp;ID48?&nbsp;&nbsp;`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (OK) SIM para gerar (dedicar) transponder (passo 13), ou (X) NÃO para
apresentar chaves (passo 16).`
},
{lines: [
`&nbsp;`,
`POSICIONE&nbsp;TRANSP`,
`&nbsp;E&nbsp;PRESSIONE&nbsp;OK.`,
`<br />`,
],
help: `Posicione o transponder no módulo de transponder e tecle OK.`
},
{lines: [
`&nbsp;`,
`&nbsp;Gravando&nbsp;ID48`,
`&nbsp;&nbsp;&nbsp;Aguarde...`,
`<br />`,
],
help: `Aguarde enquanto o OBDMap realiza a gravação do transponder`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;&nbsp;CONCLUIDO!`,
`<br />`,
`<br />`,
],
help: `Transponder dedicado com sucesso.`
},
{lines: [
`&nbsp;`,
`Gerar&nbsp;outro&nbsp;ID48`,
`(X)Nao&nbsp;/&nbsp;(OK)Sim`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;Prog.&nbsp;chaves&nbsp;?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (X) NÃO para cancelar o procedimento, ou (OK) SIM para iniciar a apresentação de chaves (passo 17).`
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
`Insira&nbsp;chave`,
`na&nbsp;IGNICAO,&nbsp;OK`,
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
`CHAVES&nbsp;PROG:&nbsp;1/8`,
`OK&nbsp;p/&nbsp;prosseguir`,
`<br />`,
],
help: `Tecle OK!`
},
{lines: [
`&nbsp;`,
`Programar&nbsp;mais?`,
`(X)NAO&nbsp;/&nbsp;(OK)SIM`,
`<br />`,
],
help: `Selecione (X) NÃO para finalizar o procedimento (passo 21), ou (OK) SIM para programar mais chaves (passo 20).`
},
{lines: [
`&nbsp;&nbsp;&nbsp;&nbsp;Insira&nbsp;a`,
`&nbsp;proxima&nbsp;chave!`,
`&nbsp;&nbsp;No&nbsp;final&nbsp;da`,
`prog.&nbsp;Tecle&nbsp;OK!`,
],
help: `Tecle OK e vá ao passo 18.`
},
{lines: [
`&nbsp;`,
`Programacao`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Concluida!`,
`<br />`,
],
help: `Programação concluída com sucesso.`
},
]}
];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro no Transponder!`,
screens: [
`&nbsp;`,
`Erro&nbsp;no`,
`&nbsp;&nbsp;&nbsp;&nbsp;Transponder!`,
`<br />`,
],
causes: [
`Não foi realizando o procedimento de geração de chaves.`,],
solutions: [
`Para realizar o procedimento de programação, é necessário realizar a dedicação de transponders.`,]
},

{ label: `Transponder Bloqueado!`,
screens: [
`&nbsp;`,
`Transponder`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Bloqueado!`,
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
`Transponder&nbsp;nao`,
`Encontrado!`,
`<br />`,
],
causes: [
`O transponder não foi encontrado ou não está inserido corretamente no módulo,`,`O transponder utilizado não é ID48,`,`Mau contato no cabo Fiat com o módulo de transponder ou do jacaré vermelho com a bateria.`,],
solutions: [
`Insira o transponder na posição correta no módulo e repita a operação,`,`Conferir conexão do cabo Fiat com o módulo de transponder e do jacaré vermelho com a bateria.`,]
},

{ label: `Erro de Comunicacao!`,
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

{ label: `Painel Invalido!`,
screens: [
`&nbsp;`,
`Painel&nbsp;Invalido!`,
`<br />`,
`<br />`,
],
causes: [
`O painel não é o mesmo da aplicação.`,],
solutions: [
`Verificar o modelo do painel.`,]
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
