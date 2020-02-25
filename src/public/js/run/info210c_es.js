//Capa
nomeCarga = `Manual Actualización -  OBD0210<br />Programación de llaves de proximidad Hyundai Keyless1`;
revCarga = `Rev. 4`;
dataManual = `January 2017`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/conEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del número de llaves de proximidad programadas en el vehículo. `,
`Programación de hasta 4 llaves de proximidad para los vehículos contenidos en la aplicación.`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `Hyundai`,
model: `Ix35`,
years: `2010 a 2017`
},
{
manufacturer: `Hyundai`,
model: `Veloster`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Sonata`,
years: `2011 a 2013`
},
{
manufacturer: `Hyundai`,
model: `Elantra`,
years: `2012 a 2013`
},
{
manufacturer: `KIA`,
model: `Sportage 2.0`,
years: `2012 a `
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: ``, 
image: `/images/Chaves e Telecomandos/keyless kia hyundai.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Cable universal Connect`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A1 DESCONECTADOS.jpg`},

{title: `All accessories connected:`, 
description: ``, 
ballon: `Todos los accesorios conectados.`, 
image: `/images/Connect/Acessórios/Obdmap mais Cabo Universal mais Adaptador A1 CONECTADOS.jpg`},

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
{title: `Realizando la lectura del número de llaves de proximidad`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Deje&nbsp;la&nbsp;ignicion&nbsp;en&nbsp;posicion&nbsp;OFF`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abrir&nbsp;puerta&nbsp;del&nbsp;conductor&nbsp;`,
`&lt;OK&gt;`,
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
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves actualmente programadas en el vehículo. Pulsa OK!`
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
help: ``
},
]
}, {title: `Realizando la programación de las llaves de proximidad Tipo 1 (Vehículos ix35 y Sonata)`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`ATENCION:&nbsp;No`,
`inserta&nbsp;el&nbsp;PIN`,
`incorrecto&nbsp;más&nbsp;que`,
`3x&nbsp;&lt;OK&gt;`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Vehículo&nbsp;puede`,
`ser&nbsp;bloqueado!`,
`<br />`,
],
help: ``
},
{lines: [
`&nbsp;`,
`Deje&nbsp;la&nbsp;ignicion&nbsp;en&nbsp;posicion&nbsp;OFF`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`Todas&nbsp;las&nbsp;Llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir&nbsp;&nbsp;`,
`<br />`,
],
help: `Las llaves de proximidad programadas serán borradas. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;`,
`Llaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Elige el número de llaves para programación. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: `Ingrese el PIN del vehículo (Obtenido por medio del concesionario). Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Inserta&nbsp;Llave&nbsp;en&nbsp;el&nbsp;slot&nbsp;`,
`e&nbsp;pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
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
`Remueva&nbsp;la&nbsp;Llave`,
`del&nbsp;slot&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Si elegir programar más de una llave siga el paso 16, caso contrario siga el paso 17. Pulsa OK!`
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
`Inserta&nbsp;la&nbsp;siguiente`,
`Llave&nbsp;en&nbsp;el&nbsp;slot`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Inserta la próxima llave para ser programada en el slot. Pulsa OK!`
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
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves actualmente programadas en el vehículo. Pulsa OK!`
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
help: ``
},
]
}, {title: `Realizando la programación de las llaves de proximidad Tipo 2 (Vehículos Elantra y Veloster)`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [
`&nbsp;`,
`Deje&nbsp;la&nbsp;ignicion&nbsp;en&nbsp;posicion&nbsp;OFF`,
`Pulsa&nbsp;&lt;OK&gt;&nbsp;para&nbsp;continuar`,
`<br />`,
],
help: `Pulsa OK!`
},
{lines: [
`Todas&nbsp;las&nbsp;Llaves&nbsp;seran&nbsp;borradas!`,
`&lt;OK&gt;&nbsp;Continuar`,
`&lt;VOLTA&gt;&nbsp;Salir&nbsp;&nbsp;`,
`<br />`,
],
help: `Las llaves de proximidad programadas serán borradas. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abrir&nbsp;puerta&nbsp;del&nbsp;conductor&nbsp;`,
`&lt;OK&gt;`,
`<br />`,
],
help: `Durante el procedimiento, mantenga la puerta del conductor abierta. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;`,
`Llaves:&nbsp;*&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Elige el número de llaves para programación. Pulsa OK!`
},
{lines: [
`&nbsp;`,
`PIN..:`,
`<br />`,
`<br />`,
],
help: `Ingrese el PIN del vehículo (Obtenido por medio del concesionario). Pulsa OK!`
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
`Pulse&nbsp;el&nbsp;botón`,
`START&nbsp;para`,
`poseer&nbsp;llave`,
`por&nbsp;2&nbsp;segundos`,
],
help: `Pulsa el botón START con la llave para ser programada por 2 segundos. Pulsa OK! Si escoger programar más de una llave siga el paso 16, caso contrario siga el paso 17.`
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
`con&nbsp;la&nbsp;proxima`,
`llave!!!`,
`<br />`,
],
help: `Utilizando la próxima llave para ser programada, regresa al paso 14.`
},
{lines: [
`&nbsp;`,
`Numero&nbsp;de&nbsp;llaves`,
`Programadas:&nbsp;*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;OK&gt;`,
`<br />`,
],
help: `Número de llaves actualmente programadas en el vehículo. Pulsa OK!`
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
help: ``
},
]}];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la&nbsp;Comunicacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha expirado,`,`Mala conexión de los accesorios.`,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más reciente con el soporte técnico, tal vez esta carga tenga sido alterada.`,]
},
{ label: `Falla en la Programacion!`,
screens: [
`Falla&nbsp;en&nbsp;la`,
`Programacion!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`Batería del control remoto está baja,`,`Las antenas de recepción del control remoto puede no estar en perfecito funcionamiento,`,`El control remoto no está en el interior del vehículo,`,`La llave no está en la ignición,`,`La programación no fue completada,`,`El chip no está programado en el coche,`,`Defecto en el coche, parte eléctrica, sensores de proximidad.`,``,],
solutions: [
`Revise la batería del control remoto,`,`Revise las antenas del sistema de proximidad en el techo del vehículo,`,`Ponga el control remoto en el interior del vehículo,`,`Ponga la llave en la ignición,`,`Revise si el chip está programado al vehículo,`,`Realice el procedimiento nuevamente,`,`Revise la parte eléctrica del coche, fusibles, sensores de proximidad, etc.`,]
},
{ label: `PIN Incorrecto!`,
screens: [
`PIN`,
`Incorrecto!`,
`Pulsa&nbsp;&lt;OK&gt;`,
`<br />`,
],
causes: [
`El PIN ingresado está incorrecto,`,`Vehículo está con tiempo de espera debido a consecutivos intentos con PIN's incorrectos. `,``,],
solutions: [
`Revise el PIN ingresado,`,`Espere 1 hora con el coche encendido y intente nuevamente con el PIN correcto. `,``,``,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
