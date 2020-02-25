//Capa
nomeCarga = `Manual Actualización -  OBD0283<br />`;
revCarga = `Rev. 3`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
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
ballon: `Cable universal + adaptador A3.`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: ``, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

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

obdmap = true;
services = 
[{title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;&nbsp;&nbsp;Pruebas&nbsp;la`,
`&nbsp;Compatibilidad`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;Vehiculo`,
`&nbsp;&nbsp;compatible!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
]
}, {title: ``,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;&nbsp;&nbsp;Atencion!`,
`La&nbsp;bateria&nbsp;debe`,
`&nbsp;estar&nbsp;cargada.`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
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
`Borrando&nbsp;Fallas`,
`&nbsp;&nbsp;&nbsp;&nbsp;Pasadas`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
},
{lines: [
`&nbsp;&nbsp;Abre&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;&nbsp;Pruebas&nbsp;la`,
`&nbsp;Compatibilidad`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Levendo&nbsp;PIN`,
`&nbsp;&nbsp;&nbsp;Espera...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Lectura&nbsp;BC.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Aguarda...`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Grabar&nbsp;BC.`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Espera...`,
`<br />`,
],
help: ``
},
{lines: [
`El&nbsp;servicio&nbsp;dura`,
`aproximadamente`,
`&nbsp;&nbsp;&nbsp;**&nbsp;minutos`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Atención!
La bateria debe estar cargada.`
},
{lines: [
`&nbsp;&nbsp;Todas&nbsp;llaves`,
`seran&nbsp;borradas!`,
`&nbsp;&lt;OK&gt;&nbsp;Continuar`,
`&nbsp;&nbsp;&lt;VOLTA&gt;&nbsp;Salir`,
],
help: `Las llaves ya programadas serán
   borradas.`
},
{lines: [
`&nbsp;`,
`&nbsp;&nbsp;Abre&nbsp;switch!`,
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
`&nbsp;&nbsp;N.&nbsp;llaves:&nbsp;*`,
`Programar&nbsp;mas?`,
`<br />`,
`(X)NO&nbsp;&nbsp;&nbsp;(OK)SI`,
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
`&nbsp;Procedimiento`,
`&nbsp;&nbsp;Finalizado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;&nbsp;Cerra&nbsp;switch`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: `Si está grabando la última llave vaya al
      paso`
},
{lines: [
`Alerta!&nbsp;No&nbsp;girar&nbsp;`,
`el&nbsp;motor&nbsp;con`,
`OBDMAP&nbsp;conectado`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Falla en la Comunicacion! `,
screens: [
`&nbsp;&nbsp;Falla&nbsp;en&nbsp;la`,
`&nbsp;Comunicacion!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Falla en la Programacion! `,
screens: [
`&nbsp;&nbsp;Falla&nbsp;en&nbsp;la`,
`&nbsp;Programacion!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Batería del control remoto está baja,`,`Las antenas de recepción del control remoto puede no estar en perfecito funcionamiento,`,`El control remoto no está en el interior del vehículo,`,`La llave no está en la ignición,`,`La programación no fue completada,`,`El chip no está programado en el coche,`,`Defecto en el coche, parte eléctrica, sensores de aproximación.`,],
solutions: [
`Revise la batería del control remoto,`,`Revise las antenas del sistema de aproximación en el techo del vehículo,`,`Ponga el control remoto en el interior del vehículo,`,`Ponga la llave en la ignición,`,`Revise si el chip está programado al vehículo,`,`Realice el procedimiento nuevamente,`,`Revise la parte eléctrica del coche, fusibles, sensores de aproximación, etc.`,]
},
{ label: `PIN Incorrecto! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIN`,
`&nbsp;&nbsp;Incorrecto!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`·	El PIN insertado está incorrecto,`,`·	Vehículo está con tiempo de espera debido a consecutivas tentativas con PIN's incorrectos. (dependendo del sistema)`,],
solutions: [
`·	Revise el PIN code digitado,`,`·	Espere x segundos con el coche encendido y intente nuevamente con el PIN code correcto. (dependiendo del sistema)`,]
},
{ label: `Falla en el Chip! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;Falla&nbsp;en`,
`&nbsp;&nbsp;&nbsp;&nbsp;el&nbsp;Chip!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
``,],
solutions: [
` `,]
},
{ label: `Error en la red CAN!!! `,
screens: [
`&nbsp;&nbsp;Error&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;red&nbsp;CAN!!!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
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
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Favor pongase en contacto con el sopoete tecnico [A.K.A.**]`,
screens: [
`Favor&nbsp;pongase&nbsp;en`,
`contacto&nbsp;con&nbsp;el`,
`sopoete&nbsp;tecnico`,
`&nbsp;&nbsp;&nbsp;[A.K.A.**]`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla em la comunicacion o vehiculo incompatible!`,
screens: [
`&nbsp;&nbsp;Falla&nbsp;em&nbsp;la`,
`&nbsp;&nbsp;comunicacion`,
`&nbsp;&nbsp;&nbsp;o&nbsp;vehiculo`,
`&nbsp;incompatible!`,
],
causes: [
],
solutions: [
]
},
{ label: `Error desconocido (**) `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Error`,
`&nbsp;&nbsp;desconocido`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(**)`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `ERROR Interno codigo: ** `,
screens: [
`&nbsp;ERROR&nbsp;Interno`,
`&nbsp;&nbsp;&nbsp;codigo:&nbsp;**`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Erro modulo Bluetooth!`,
screens: [
`&nbsp;`,
`&nbsp;&nbsp;Erro&nbsp;modulo`,
`&nbsp;&nbsp;&nbsp;Bluetooth!`,
`<br />`,
],
causes: [
],
solutions: [
]
},
{ label: `Utilice cable CAN o adaptador A3 CAN!`,
screens: [
`Utilice&nbsp;cable&nbsp;`,
`CAN`,
`o&nbsp;adaptador&nbsp;A3&nbsp;`,
`CAN!`,
],
causes: [
],
solutions: [
]
},
{ label: `PIN no Encontrado! `,
screens: [
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PIN&nbsp;no`,
`&nbsp;&nbsp;Encontrado!`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
`Archivo de la ECU está dañado,`,`Archivo inválido de la ECU,`,`El codigo PIN de la ECU puede estar reseteada.`,],
solutions: [
]
},
{ label: `Alerta! No girar el motor con OBDMAP conectado `,
screens: [
`Alerta!&nbsp;No&nbsp;girar&nbsp;`,
`el&nbsp;motor&nbsp;con`,
`OBDMAP&nbsp;conectado`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},
{ label: `Falla Interna PP-PG 0* `,
screens: [
`&nbsp;Falla&nbsp;Interna`,
`&nbsp;&nbsp;&nbsp;&nbsp;PP-PG&nbsp;0*`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`,
`&nbsp;&nbsp;&nbsp;Pulsa&nbsp;&lt;OK&gt;`,
],
causes: [
],
solutions: [
]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
