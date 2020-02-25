//Capa
nomeCarga = `Manual Actualización -  OBD0283<br />`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Testear a compatibilidade do sistema`,
`Apaga falhas passadas do calculador`,
`Leitura de senha (É necessario ter uma chave válida)`,
`Apaga chaves antigas`,
`Realiza cópia de chaves`,
`Programação de telecomando automatico`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Renault`,
model: `Kwid 1.0`,
years: `2017 a 2020`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: ``, 
image: ``},

{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/Chave kwid edit.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal connect`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/I4.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = false;
services = 
[
{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`Pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Probando&nbsp;la&nbsp;compatibilidad...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Vehiculo&nbsp;compatible!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`Atención!`,
`La&nbsp;bateria&nbsp;debe&nbsp;estar&nbsp;cargada.`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Cuidado, si la batería está baja puede
causar daños al tablero. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`Pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Borrando&nbsp;fallas&nbsp;pasadas...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Si está grabando la última llave vaya al
      paso`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`Pulsa&nbsp;OK!`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Probando&nbsp;la&nbsp;compatibilidad...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Levendo&nbsp;PIN`,
`Espera...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Lectura&nbsp;BC.`,
`Aguarda...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Grabar&nbsp;BC.`,
`Espera...`,
`<br />`,
],
help: ``
},
{lines: [
`El&nbsp;servicio&nbsp;dura&nbsp;aproximadamente&nbsp;**&nbsp;`,
`minutos`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Atención!
La bateria debe estar cargada.`
},
{lines: [
`Todas&nbsp;llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir`,
`<br />`,
],
help: `Las llaves ya programadas serán
   borradas.`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch!`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`Numero&nbsp;de&nbsp;llaves:&nbsp;*`,
`Programar&nbsp;más?`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)SI`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Espere...`,
`<br />`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Procedimiento&nbsp;Finalizado!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Cerra&nbsp;switch`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Si está grabando la última llave vaya al
      paso`
},
{lines: [
`Alerta!&nbsp;`,
`No&nbsp;girar&nbsp;el&nbsp;motor&nbsp;con&nbsp;OBDMAP&nbsp;conectado&nbsp;`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Falla en la Comunicacion! `,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la&nbsp;Comunicacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Falla en la Programacion! `,
screens: [
`Falla&nbsp;en&nbsp;la`,
`Programacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Batería del control remoto está baja,`,`Las antenas de recepción del control remoto puede no estar en perfecito funcionamiento,`,`El control remoto no está en el interior del vehículo,`,`La llave no está en la ignición,`,`La programación no fue completada,`,`El chip no está programado en el coche,`,`Defecto en el coche, parte eléctrica, sensores de aproximación.`,],
solutions: [
`Revise la batería del control remoto,`,`Revise las antenas del sistema de aproximación en el techo del vehículo,`,`Ponga el control remoto en el interior del vehículo,`,`Ponga la llave en la ignición,`,`Revise si el chip está programado al vehículo,`,`Realice el procedimiento nuevamente,`,`Revise la parte eléctrica del coche, fusibles, sensores de aproximación, etc.`,]
},
{ label: `PIN Incorrecto! `,
screens: [
`PIN`,
`Incorrecto!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`·	El PIN insertado está incorrecto,`,`·	Vehículo está con tiempo de espera debido a consecutivas tentativas con PIN's incorrectos. (dependendo del sistema)`,],
solutions: [
`·	Revise el PIN code digitado,`,`·	Espere x segundos con el coche encendido y intente nuevamente con el PIN code correcto. (dependiendo del sistema)`,]
},
{ label: `Falla en el Chip! `,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;el&nbsp;Transponder!`,
`Pulse&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
``,],
solutions: [
` `,]
},
{ label: `Error en la red CAN!!! `,
screens: [
`&nbsp;`,
`Error&nbsp;en&nbsp;la&nbsp;red&nbsp;CAN!!!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Vehiculo incompatible! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Vehiculo`,
`&nbsp;incompatible!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Favor pongase en contacto con el sopoete tecnico [A.K.A.**]`,
screens: [
`Favor&nbsp;pongase&nbsp;en&nbsp;contacto&nbsp;con&nbsp;el&nbsp;`,
`soporte&nbsp;tecnico`,
`[A.K.A.**]`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla em la comunicacion o vehiculo incompatible!`,
screens: [
`Falla&nbsp;em&nbsp;la&nbsp;comunicacion&nbsp;o&nbsp;vehiculo&nbsp;`,
`incompatible!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Error desconocido (**) `,
screens: [
`&nbsp;`,
`Falla&nbsp;Desconocida&nbsp;(**)`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `ERROR Interno codigo: ** `,
screens: [
`&nbsp;`,
`ERROR&nbsp;Interno&nbsp;codigo:&nbsp;**`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro modulo Bluetooth!`,
screens: [
`&nbsp;`,
`Erro&nbsp;modulo&nbsp;Bluetooth!`,
`<br />`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Utilice cable CAN o adaptador A3 CAN!`,
screens: [
`&nbsp;`,
`Utilice&nbsp;cable&nbsp;CAN`,
`o&nbsp;adaptador&nbsp;A3&nbsp;CAN!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `PIN no Encontrado! `,
screens: [
`&nbsp;`,
`PIN&nbsp;no&nbsp;Encontrado!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`Archivo de la ECU está dañado,`,`Archivo inválido de la ECU,`,`El codigo PIN de la ECU puede estar reseteada.`,],
solutions: [
]
},
{ label: `Alerta! No girar el motor con OBDMAP conectado `,
screens: [
`Alerta!&nbsp;`,
`No&nbsp;girar&nbsp;el&nbsp;motor&nbsp;con&nbsp;OBDMAP&nbsp;conectado&nbsp;`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla Interna PP-PG 0* `,
screens: [
`Falla&nbsp;Interna&nbsp;PP-PG`,
`0*`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
