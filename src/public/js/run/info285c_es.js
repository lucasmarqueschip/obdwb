//Capa
nomeCarga = `Manual Actualización -  OBD0285<br />`;
revCarga = `Rev. 2`;
dataManual = `January 2019`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Ford`,
model: `EcoSport 1.6`,
years: `2015 a 2017`
},
{
manufacturer: `Ford`,
model: `EcoSport 2.0`,
years: `2015 a 2017`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: `Transponder used:`, 
description: ``, 
ballon: ``, 
image: `/images/Transponders/ID-4D.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal connect`, 
image: `/images/Acessórios/Cabo Universal Mais Adaptador A3 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios enchufados para el procedimiento por OBDII.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A3 CONECTADOS.jpg`},

{title: `Locating the diagnosis connector in the vehicle:`, 
description: ``, 
ballon: ``, 
image: `/images/Tomada de Diagnostico/Carro/A5.jpg`},
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
`Numero&nbsp;de&nbsp;fallas&nbsp;BSI:&nbsp;**`,
`Pulsa&nbsp;&lt;OK&gt;`,
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
`Numero&nbsp;de&nbsp;Llaves&nbsp;programadas:&nbsp;*`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: ``
},
{lines: [
`Anadir&nbsp;llaves`,
`Borrar&nbsp;llaves`,
`Salir`,
`<br />`,
],
help: ``
},
{lines: [
`Todas&nbsp;las&nbsp;Llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir&nbsp;&nbsp;`,
`<br />`,
],
help: ``
},
{lines: [
`ATENCION!`,
`Tenga&nbsp;en&nbsp;manos&nbsp;02&nbsp;llaves!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Utilice&nbsp;el&nbsp;chip&nbsp;ID4D-63&nbsp;especial`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Numero&nbsp;de&nbsp;Llaves&nbsp;programadas:&nbsp;*`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`&nbsp;&nbsp;Conecte&nbsp;la`,
`primera&nbsp;clave&nbsp;a`,
`&nbsp;&nbsp;programar&nbsp;y`,
`&nbsp;&nbsp;&nbsp;pulse&nbsp;&lt;OK&gt;`,
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
`Quite&nbsp;la&nbsp;llave`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Conecte&nbsp;la&nbsp;segundo&nbsp;clave&nbsp;a`,
`programar&nbsp;y&nbsp;pulse&nbsp;&lt;OK&gt;`,
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
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
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
{ label: `Falla comunica cion o vehiculo incompatible! `,
screens: [
`Falla&nbsp;en&nbsp;la&nbsp;Comunicacion!&nbsp;Puedes&nbsp;ser`,
`1.&nbsp;Falla&nbsp;red&nbsp;CAN.&nbsp;Quite&nbsp;todo&nbsp;DTCs`,
`2.&nbsp;Vehiculo&nbsp;incompatible!`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha espirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más recente con el soporte técnico, talvez este software tenga sido alterado.`,]
},
{ label: `Acceso Denegado! ** Press <OK>`,
screens: [
`Acceso&nbsp;Denegado!`,
`**`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
causes: [
`El tablero no es compatible con la aplicación.`,],
solutions: [
`Revise la aplicación.`,]
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

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
