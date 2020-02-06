// capa
const nomeCarga = 'Manual Carga – WOBD0072 Programação de chaves Ford Pats4 (Ecosport 2015-2017)';
const revCarga = 'Rev. 2';
const dataManual = 'Dezembro 2019';
const imgTopPath = '../public/images/obd.png';
const imgObdPath = '../public/images/obdEquip.png';
const imgChipPath = '../public/images/chip.png';

// introdução
const introTitle = 'Introdução';
const introSubtitle = 'Esta carga realiza as seguintes funções:';
const lstFunc = [
    'Realiza teste de compatibilidade do veículo',
    'Apagamento com reprogramação de 2 chaves para o veículo. ',
    'Programação de até 8 chaves para o veículo. ',
    'Apaga falhas passadas no imobilizador e na ECU.',
    'Exibe o número de falhas presentes no imobilizador e na ECU',
    'Exibe o número de chaves programadas. '
];
const descIntroObs = 'Teste'
const introObs = createObs();

// aplicação
const applicationTitle = 'Aplicação:';
const applicationTable = '<th>Marca</th><th>Modelo</th><th>Ano</th>';
const models = [
    {
        manufacturer: 'Ford',
        model: 'Ecosport 1.6',
        years: '2015 a 2017'
    },
    {
        manufacturer: 'Ford',
        model: 'Ecosport 2.0',
        years: '2015 a 2017'
    }
];
const descObs = `Podem existir veículos que estejam na faixa de anos da aplicação, mas que não pertencem ao 
    sistema desta carga. O modelo de painel desta carga NÃO possui presença de luz de code conforme indicado 
    na figura abaixo:`;

const applicationObs = createObs('Observação', descObs, '../public/images/painelEcosport15.png');

// recursos
const resources = [
    {
        title: 'Transponder utilizado:',
        description: '',
        ballon: 'O transponder utilizado no sistema, pode ser tanto o <br /> ID 4D63 como o ID 4D63 DST+.<br /> <br /> A dedicação pode ser feita com a carga OBD0206.<br />',
        image: '../public/images/Transponders/ID 4D63 DST Dedicado para Ford.jpg'
    },
    {
        title: 'Acessórios utilizados:',
        description: '',
        ballon: 'Utilize o cabo universal <br />  + adaptador A3.<br />',
        image: '../public/images/acessory/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg'
    }, {
        title: 'Todos os acessórios conectados:',
        description: '',
        ballon: 'Todos os acessórios conectados  <br /> para procedimento via diagnose. <br />',
        image: '../public/images/acessory/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg'
    }
]

// localização
const local = {
    title: 'Localizando a tomada de diagnóstico do veículo:',
    description: 'A tomada de diagnóstico fica localizada na posição A5.',
    image: '../public/images/obdConnector/Car/A5.jpg'
};

// instruções
const descWebService = `Durante a execução das funções Web Service, existem diversas mensagens que apresentam
    informações sobre as possíveis condições do usuário no sistema. Reforçando que as funções agendadas não
    possuem parcelas e sempre serão cobradas.
    <br /><br /><span class="bold">Saldo:***.***c:</span>
    Informa o saldo total disponível para realização de qualquer função.
    <br /><br /><span class="bold">Parcelas:**/**:</span>
    Informa a parcela atual de uso da função, e a quantidade total de parcelas, sendo
    que ao atingir a quantidade total de uso, o serviço será totalmente liberado.
    <br /><br /><span class="bold">Valor do servico ***c:</span>
    Informa o valor do serviço atual selecionado.
    <br /><br /><span class="bold">Serao debitados ***c do saldo:</span>
    Informa o valor a ser debitado dos créditos, pedindo a confirmação para a
    realização da cobrança. Caso não ocorra a confirmação, nada será debitado.
    <br /><br /><span class="bold">Servico Web Liberado!:</span>
    Informa que o serviço atual selecionado, está liberado para uso sem cobranças de créditos.
    <br /><br /><span class="bold">Saldo Web Service Insuficiente!:</span>
    Informa que o saldo está abaixo do necessário para a realização do serviço atual selecionado.
    <br /><br /><span class="bold">Conecte o mobile!:</span>
    Informa que o OBDMap está aguardando a conexão via bluetooth com o aplicativo no
    dispositivo mobile.
    <br /><br /><span class="bold">Servico nao autorizado:</span>
    Contate o suporte técnico.`;

const instruction = [
    {
        title: 'Web Service',
        description: descWebService
        //pode conter imagens. Ex: image: '../public/images/acessory/Obdmap mais pinça mais painel.jpg'
    }
];


// serviços
const services = [
    {
        title: 'Realizando teste de compatibilidade',
        description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
        screens: [{
            lines: [
                'Renault'
            ],
            help: 'Tecle OK!',
            menu: 1000
        },
        {
            lines: [
                'Kwid',
            ],
            help: 'Tecle OK!',
            menu: 1000
        },
        {
            lines: [
                'Chaves',
            ],
            help: 'Tecle OK!',
            menu: 1000
        },
        {
            lines: [
                'UCH-4 Jonhson Control',
            ],
            help: 'Tecle OK!',
            menu: 1000
        },
        {
            lines: [
                'Apagar e Programar chaves',
            ],
            help: 'Tecle OK!',
            menu: 1000
        }
        ]
    },
    {
        title: 'Realizando programação de chaves',
        description: 'Após todos os acessórios conectados, seguir os seguintes passos no visor do OBDMap',
        screens: [{
            lines: [
                'Web Service',
                '>Ford'
            ],
            help: 'Tecle OK!'
        },
        {
            lines: [
                'Apagar chaves',
                'Adicionar chaves',
                'Sair'
            ],
            help: 'Tecle OK!',
            menu: 0
        },
        {
            lines: [
                'Web Service',
                '>Ford'
            ],
            help: 'Tecle OK!'
        }
        ]
    }
];


//Outras mensagens
const othersMessageTitle = `Outras Mensagens`;
const othersMessage = [{
    label: `    Falha na   rede CAN!!!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;Falha&nbsp;na`,
        `&nbsp;&nbsp;rede&nbsp;CAN!!!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Não foi possível estabelecer uma comunicação com o veículo, devido a falha na rede CAN;`,
        `O veículo apresenta defeitos elétricos;`,
    ],
    solutions: [
        `Verificar instalação elétrica;`,
        `Verificar se os módulos não estão com defeito.`,
    ],
},
{
    label: `    Erro na   Programacao!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;na`,
        `&nbsp;&nbsp;Programacao!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Bateria do telecomando está fraca,`,
        `As antenas de recepção do telecomando pode não estar em perfeito funcionamento,`,
        `O telecomando não está no interior do veículo,`,
        `A chave não está na ignição,`,
        `A programação não foi completada,`,
        `O transponder não está programado no carro,`,
        `Defeito no carro, parte elétrica, sensores de aproximação.`,
    ],
    solutions: [
        `Verifique a bateria do telecomando,`,
        `Verifique as antenas do sistema de aproximação no teto do veículo,`,
        `Coloque o telecomando no interior do veículo,`,
        `Coloque a chave na ignição,`,
        `Conferir se o transponder está programado ao veículo,`,
        `Refazer o procedimento novamente,`,
        `Conferir parte elétrica do carro, fusíveis, sensores de aproximação, etc.`,
    ],
},
{
    label: `     Senha    Incorreta!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Senha`,
        `&nbsp;&nbsp;&nbsp;Incorreta!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `A senha inserida está incorreta,`,
        `Veículo está com tempo de espera devido consecutivas tentativas com senhas erradas. (dependendo do sistema)`,
    ],
    solutions: [
        `Conferir a senha digitada,`,
        `Aguardar x tempo com a ignição ligada e tentar novamente com a senha correta. (dependendo do sistema)`,
    ],
},
{
    label: `    Erro no   Transponder!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;no`,
        `&nbsp;&nbsp;Transponder!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `O transponder não é válido`,
        `A chave não tem transponder`,
        `O transponder pode estar com defeito`,
        `A identificação do transponder não está correta`,
    ],
    solutions: [
        `Realize uma leitura do transponder e confira se é o mesmo indicado pelo manual`,
        `Verifique a procedência do transponder e se o mesmo é de boa qualidade`,
        `Tente realizar a codificação com outro transponder de lote diferente`,
        `Repita o procedimento`,
        `Em caso de dúvida, contate o suporte`,
    ],
},
{
    label: `    Erro de   Comunicacao!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;Erro&nbsp;de`,
        `&nbsp;&nbsp;Comunicacao!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Defeito no veículo, parte elétrica,`,
        `Software do OBDMap desatualizado,`,
        `Má conexão dos acessórios.`,
    ],
    solutions: [
        `	Conferir se a bateria está carregada,`,
        `	Conferir parte elétrica do veículo, fusíveis, etc,`,
        `	Conferir se utiliza cabo universal e adaptador A3,`,
        `	Conferir boa conexão do cabo no OBDMap, na tomada de diagnose do veículo e demais conexões,`,
        `	Desconectar bateria, aguardar 10 segundos e conectar novamente,`,
        `	Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador (o veículo pode não conter todos os módulos),`,
        `	Repita o procedimento,`,
        `	Caso o erro persista, informe ao suporte as questões acima.`,
    ],
},
{
    label: `   Senha nao   Encontrada!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;Senha&nbsp;nao`,
        `&nbsp;&nbsp;Encontrada!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Arquivo da ECU está corrompido,`,
        `Arquivo inválido da ECU,`,
        `A senha da ECU pode estar resetada.`,
    ],
    solutions: [
    ],
},
{
    label: `    Veiculo  incompativel!             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;Veiculo`,
        `&nbsp;incompativel!`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `O sistema do veículo está fora da aplicação, mesmo se o modelo estiver na faixa de anos`,
        `A função pode estar desatualizada`,
    ],
    solutions: [
        `Caso o veículo esteja nos anos de aplicação, contate o suporte`,
        `Caso não esteja, fique atento as próximas atualizações `,
    ],
},
{
    label: `  Erro interno    codigo: ÇÇ             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;Erro&nbsp;interno`,
        `&nbsp;&nbsp;&nbsp;codigo:&nbsp;**`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Ocorreu um erro inesperado internamente no OBDMAP`,
        `O veículo pode estar com defeito`,
        `O OBDMAP pode estar com defeito`,
        `A função escolhida pode estar desatualizada`,
    ],
    solutions: [
        `Confira a Rede CAN do veículo`,
        `Confira parte elétrica, fusíveis, etc`,
        `Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,
        `Repita o procedimento`,
        `Caso o erro persista, informe ao suporte as questões acima, bem como o código do "Erro Interno"`,
    ],
},
{
    label: ` Erro no modulo    Bluetooth!`,
    screens: [
        `&nbsp;Erro&nbsp;no&nbsp;modulo`,
        `&nbsp;&nbsp;&nbsp;Bluetooth!`,
        `<br />`,
        `<br />`,
    ],
    causes: [
        `O módulo bluetooth pode estar com defeito`,
        `O cabo USB pode estar conectado, sem necessidade`,
    ],
    solutions: [
        `Se o cabo USB estiver conectado, retire-o e repita o procedimento`,
        `Caso não esteja, envie o OBDMAP para a assistência técnica`,
    ],
},
{
    label: `Sem comunicacao  com o veiculo    ou veiculo  incompativel!`,
    screens: [
        `Sem&nbsp;comunicacao`,
        `&nbsp;com&nbsp;o&nbsp;veiculo`,
        `&nbsp;&nbsp;&nbsp;ou&nbsp;veiculo`,
        `&nbsp;incompativel!`,
    ],
    causes: [
        `O veículo pode não estar na aplicação`,
        `O veículo pode estar com defeito`,
        `O OBDMAP ou acessórios podem estar com defeito`,
        `A função escolhida pode estar desatualizada`,
    ],
    solutions: [
        `Verifique a aplicação (isso implica nos modelos, anos, sistemas e hardware)`,
        `Confira a Rede CAN do veículo`,
        `Confira parte elétrica, fusíveis, etc`,
        `Scaneie os erros apresentados no veículos, principalmente nos módulos de ECU, carroceria/conforto, ABS, airbag, painel e imobilizador, caso o veículo possua`,
        `Repita o procedimento`,
        `Caso o erro persista, informe ao suporte as questões acima`,
    ],
},
{
    label: `      Erro   Desconhecido       (ÇÇ)    Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Erro`,
        `&nbsp;&nbsp;Desconhecido`,
        `&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(**)`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Ocorreu uma falha não esperada`,
    ],
    solutions: [
        `Repita o procedimento e se atente as mensagens do OBDMAP`,
        `Caso persista, contate o suporte técnico`,
    ],
},
{
    label: `Entre em contato  com o suporte     tecnico    [A.K.A.ÇÇ]`,
    screens: [
        `Entre&nbsp;em&nbsp;contato`,
        `&nbsp;com&nbsp;o&nbsp;suporte`,
        `&nbsp;&nbsp;&nbsp;&nbsp;tecnico`,
        `&nbsp;&nbsp;&nbsp;[A.K.A.**]`,
    ],
    causes: [
        `Função desatualizada`,
        `Erro no Hardware`,
    ],
    solutions: [
        `Contate o suporte técnico`,
    ],
},
{
    label: `Use o cabo CAN ou adap. A3 CAN!`,
    screens: [
        `Use&nbsp;o&nbsp;cabo&nbsp;CAN`,
        `ou&nbsp;adap.&nbsp;A3&nbsp;CAN!`,
        `<br />`,
        `<br />`,
    ],
    causes: [
        `O cabo que está conectado não é o cabo CAN ou o Adaptador A3`,
    ],
    solutions: [
        `Conecte o cabo universal e o adaptador A3 ou o cabo CAN e repita o procedimento`,
    ],
},
{
    label: `Alerta! Nao dar  partida com o OBDMAP Conectado    Tecle <OK>`,
    screens: [
        `Alerta!&nbsp;Nao&nbsp;dar`,
        `&nbsp;partida&nbsp;com&nbsp;o`,
        `OBDMAP&nbsp;Conectado`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
        `Informação para evitar falhas nos módulos CAN devido a pico de tensão`,
    ],
    solutions: [
    ],
},
{
    label: `  Erro interno     PP-PG 0Ç             Tecle <OK>`,
    screens: [
        `&nbsp;&nbsp;Erro&nbsp;interno`,
        `&nbsp;&nbsp;&nbsp;&nbsp;PP-PG&nbsp;0*`,
        `<br />`,
        `&nbsp;&nbsp;&nbsp;Tecle&nbsp;&lt;OK&gt;`,
    ],
    causes: [
    ],
    solutions: [
    ],
},
];


//Last Message
const lastMsg = 'Se persistirem os erros acima, ou para outras mensagens consulte o suporte técnico.';