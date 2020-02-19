//Capa
nomeCarga = "Programação de Chaves Jeep Fiat Code2 (Renegade 15 - 18)";
revCarga = "Rev. 1";
dataManual = "Novembro 2018";
imgTopPath = "/images/obd.png";
imgObdPath = "/images/conEquip.png";
imgChipPath = "/images/chip.png";

// introdução
introTitle = `Introdução`;
introSubtitle = `Esta carga realiza as seguintes funções:`;
lstFunc = [
`Teste de compatibilidade do sistema`,
`Apagamento de falhas passadas da ECU, BC, Painel, Airbag e ABS`,
`Leitura de falhas presentes na ECU, BC, Painel, Airbag e ABS`,
`Leitura do código eletrônico `,
`Programação de chaves canivetes`,
`Todos os serviçõs via OBD`,

];
introObs = createObs();


// aplicação 
applicationTitle = "Aplicação";
applicationTable = "<th>Marca</th><th>Modelo</th><th>Ano</th>";
models = [
{
manufacturer: "Jeep",
model: "Renegade Flex 1.8",
years: "2015 a 2018"
},
];
applicationObs = createObs("Possivel modelo: Renegade Diesel 2.0 2015 a 2018", undefined, undefined)



resources = [
{title: "Transponder utilizado:", 
description: "", 
ballon: "", 
image: "/images/Chaves e Telecomandos/renagede keyless.jpg"},

{title: "Acessórios utilizados:", 
description: "", 
ballon: "Usado para realizar o procedimento via diagnóstico.", 
image: "/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg"},

{title: "Todos os acessórios conectados:", 
description: "", 
ballon: "Todos os acessórios conectados para procedimento via diagnose.", 
image: "/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg"},

{title: "Localizando a tomada de diagnóstico no veículo:", 
description: "", 
ballon: "• O BC dos veículos citados na página 3 fica localizada na posição A5 da foto.", 
image: "/images/Tomada de Diagnostico/Carro/A5.jpg"},
];
instruction = [];
obdmap = false;
services = 
[
{title: `Realizando teste de compatibilidade`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Jeep`], help: `Tecle OK`, menu: 1000},
{lines: [`Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Compatibilidade`], help: `Tecle OK`, menu: 1000},

]},{title: `Realizando a programação de chaves`,
description: `Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap:`,
screens: [
{lines: [`Jeep`], help: `Tecle OK`, menu: 1000},
{lines: [`Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Chaves`], help: `Tecle OK`, menu: 1000},
{lines: [`BC Renegade`], help: `Tecle OK`, menu: 1000},
{lines: [`Programação de chaves`], help: `Tecle OK`, menu: 1000},

]},];
//Outras mensagens
othersMessageTitle = `Outras Mensagens`;
othersMessage = [{ label: `Erro de Comunicacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
`&nbsp;&nbsp;Comunicacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito no veículo, parte elétrica,`,`Software do OBDMap desatualizado,`,`Má conexão dos acessórios.`,],
solutions: [
`Conferir se a bateria está carregada,`,`Conferir parte elétrica do veículo, fusíveis, etc,`,`Conferir se utiliza cabo universal e adaptador A3,`,`Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,`Desconectar todos os cabos, aguardar 10 segundos e conectar novamente,`,`Conferir atualização mais recente com suporte técnico.`,]
},

{ label: `Veiculo incompativel! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
`&nbsp;incompativel!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,`A função pode estar desatualizada`,],
solutions: [
`Caso o veículo esteja nos anos de aplicação, contate o suporte`,`Caso não esteja, fique atento as próximas atualizações `,]
},

{ label: `Erro interno codigo **`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;**`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},

{ label: `Use o cabo CAN ou adap. A3 CAN!`,
screens: [
`&nbsp;`,
`Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
`ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
`O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,],
solutions: [
`Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,]
},

{ label: `Acesso Negado! ** `,
screens: [
`&nbsp;Acesso&nbsp;Negado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`BC com software diferente`,],
solutions: [
` `,]
},

{ label: `Senha Incorreta! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
`&nbsp;&nbsp;&nbsp;Incorreta!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`A senha inserida está incorreta,`,`Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. `,],
solutions: [
`Desconectar da bateria, aguardar 10 segundos, reconectar a bateria e repetir o processo`,`Aguardar 1 hora com a ignição ligada e tentar novamente com a senha correta. `,]
},

{ label: `Erro na Programacao! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
`&nbsp;&nbsp;Programacao!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Bateria do telecomando está fraca,`,`As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,`O telecomando não está no interior do veículo,`,`A chave não está na ignição,`,`A programação não foi completada,`,`O transponder não está programado no carro,`,`Defeito no carro, parte elétrica, sensores de aproximação.`,],
solutions: [
`Verifique a bateria do telecomando,`,`Verifique as antenas do sistema de aproximação no teto do veículo,`,`Coloque o telecomando no interior do veículo,`,`Coloque a chave na ignição,`,`Conferir se o transponder está programado ao veículo,`,`Refazer o procedimento novamente,`,`Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,]
},

{ label: `Erro no Transponder! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;no`,
`&nbsp;&nbsp;Transponder!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder não é válido`,`A chave não tem transponder`,`O transponder pode estar com defeito`,`A identificação do transponder não está correta`,],
solutions: [
`Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,`Verifique a procedência do transponder e se o mesmo é de boa qualidade`,`Tente realizar a codificação com outro transponder de lote diferente`,`Repita o procedimento`,`Em caso de dúvida, contate o suporte`,]
},

{ label: `Transponder Bloqueado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;&nbsp;Bloqueado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder já se encontra programado e travado.`,],
solutions: [
`Utilize um transponder válido.`,]
},

{ label: `Senha nao Encontrada! `,
screens: [
`&nbsp;&nbsp;&nbsp;Senha&nbsp;nao`,
`&nbsp;&nbsp;Encontrada!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Arquivo da BC está corrompido,`,`Arquivo inválido da BC,`,`A senha da BC pode estar resetada.`,],
solutions: [
]
},

{ label: `Erro interno codigo XX`,
screens: [
`&nbsp;`,
`&nbsp;Erro&nbsp;interno`,
`&nbsp;&nbsp;&nbsp;codigo&nbsp;XX`,
`<br />`,
],
causes: [
`Ocorreu um erro inesperado internamente no OBDMAP`,`O veículo pode estar com defeito`,`O OBDMAP pode estar com defeito`,`A função escolhida pode estar desatualizada`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,]
},

{ label: `Erro Desconhecido (XX) `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Erro`,
`&nbsp;&nbsp;Desconhecido`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(XX)`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`Defeito na parte elétrica do carro`,`O pisca alerta não foi acendido quando solicitado`,],
solutions: [
`Confira a Rede CAN do veículo`,`Confira parte elétrica, fusíveis, etc`,`Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, BC, ABS, airbag, painel e imobilizador, caso o veículo possua`,`Repita o procedimento`,`Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro desconhecido"`,]
},

{ label: `Transponder Rejeitado ou nao encontrado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;&nbsp;Rejeitado&nbsp;ou`,
`nao&nbsp;encontrado!`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder inserido não é válido`,`Não existe transponder dentro da chave`,],
solutions: [
`Verifique o tranponder que está na chave`,`Transponder de má qualidade`,`Use um transponder confiável e repita o procedimento`,]
},

{ label: `Transponder ja Programado! `,
screens: [
`&nbsp;&nbsp;Transponder`,
`&nbsp;ja&nbsp;Programado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
],
causes: [
`O transponder já foi inserido no mesmo processo de programação`,],
solutions: [
`Organize os transponders e repita o procedimento`,]
},

];
//Last Message
lastMsg = `Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.`;
