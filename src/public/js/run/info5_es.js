//Capa
nomeCarga = `Manual Actualización -  OBD0005<br />IMMO 3 GM - Valeo Lectura del PIN y Programación de Llaves`;
revCarga = `Rev. 2`;
dataManual = `January 2016`;
imgTopPath = `/images/obd.png`;
imgObdPath = `/images/obdEquip.png`;
imgChipPath = `/images/chip.png`;

// introdução
introTitle = `Introducción`;
introSubtitle = `Esta actualización realiza las siguientes funciones:`;
lstFunc = [
`Lectura del PIN del inmovilizador IMMO3 GM en banco.`,
`Lectura del PIN del inmovilizador IMMO3 GM en el vehículo.`,
`Programación de llaves del inmovilizador IMMO3 GM (Valeo).`,
`Borrar llaves del inmovilizador IMMO3 GM (Valeo).`,

];
introObs = createObs();


// aplicação 
applicationTitle = `Aplicación`;
applicationTable = `<th>Marca</th><th>Modelo</th><th>Año</th>`;
models = [
{
manufacturer: `GM`,
model: `Blazer 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `Blazer 2.8`,
years: `2002 a 2012`
},
{
manufacturer: `GM`,
model: `S10 2.4`,
years: `2002 a 2007`
},
{
manufacturer: `GM`,
model: `S10 2.8`,
years: `2002 a 2012`
},
];
applicationObs = ``;
applicationObs += createObs(undefined, undefined, undefined);




resources = [
{title: ``, 
description: ``, 
ballon: `Utilice el chip virgen PCF7936 (ID46) Crypto 2.`, 
image: `/images/Transponders/PCF7936 (ID46) Crypto 2 virgem.jpg`},

{title: `Accessories used:`, 
description: ``, 
ballon: `Fuente de alimentación. Necesaria para utilizar el OBDMap en banco de pruebas.`, 
image: `/images/Acessórios/Fonte de Alimentacao.jpg`},

{title: ``, 
description: ``, 
ballon: `Pinza soic 8. Conecta la memoria al OBDMap.`, 
image: `/images/Acessórios/Pinça SOIC8.jpg`},

{title: ``, 
description: ``, 
ballon: `Cable universal + adaptador A2.`, 
image: `/images/Acessórios/Cabo Universal mais Adaptador A2 DESCONECTADOS.jpg`},

{title: ``, 
description: `Para realizar el procedimiento en banco es necesário tener el inmovilizador fuera del vehículo. Si no es posible quitar el inmovilizador, realice el procedimiento en el veículo con la función Lectura del PIN del inmovilizador IMMO3 GM en el vehículo.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/ID IMOB.jpg`},

{title: ``, 
description: `Para realizar el procedimiento en banco es necesário tener el inmovilizador fuera del vehículo. Si no es posible quitar el inmovilizador, realice el procedimiento en el veículo con la función Lectura del PIN del inmovilizador IMMO3 GM en el vehículo.<br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imob IMMO3.jpg`},

{title: ``, 
description: `Atención: El pin '1' de la pinza tiene que coincidir con el pin '1' de la memoria soic. Cuando no hay la marca del pin '1' en el cuerpo del componente debese mirar el chip de frente, para leer sus datos de la izquierda para la derecha. En ese caso, '24C04', pin '1' del componente es el primero de la izquierda en la parte inferior. <br /><br />`, 
ballon: ``, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Conectando a pinça no IMMO3.jpg`},

{title: ``, 
description: ``, 
ballon: `Para tener acceso al inmovilizador debe quitar la cubierta de protección que se encuentra debajo del volante de dirección. Utilice una llave Torks 20 para quitar los tornillos de la cubierta.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador.jpg`},

{title: ``, 
description: ``, 
ballon: `Tire la cubierta protectora para tener acceso al inmovilizador.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando o imobilizador1.jpg`},

{title: ``, 
description: ``, 
ballon: `Atención: Es necesario quitar los arnés de cableado del automóvil del inmovilizador, porque si la pinza fuer conectada en el inmovilizador con los arnés de cableado del automóvil también conectado puede dañar e inmovilizador o el OBDMap. Presione las trabas que se muestran en la imagen para quitar los arnés de cableado del automóvil.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Retirando o chicote.jpg`},

{title: ``, 
description: ``, 
ballon: `Arnés de cableado del automóvil quitado.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Chicote já retirado.jpg`},

{title: ``, 
description: ``, 
ballon: `Utilice un destornillador para quitar la cubierta de protección del inmovilizador.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Desmontando o imobilizador 2 imagens.jpg`},

{title: ``, 
description: ``, 
ballon: `Memoria que será leída.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 1.jpg`},

{title: ``, 
description: ``, 
ballon: `Posición del pin "1" de la memoria indicada por la flecha.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 2.jpg`},

{title: ``, 
description: ``, 
ballon: `Conectando la pinza en la memoria.`, 
image: `/images/Funções Específicas/OBD0005 Immo3 S10 Blazer/Localizando e conectando a pinça 3.jpg`},
];
lblStep = "Paso";
lblCause = "Causas Probables:";
lblSolution = "Soluciones:";
lblSummary = "Tabla de contenidos";
lblErrorMessage = "Mensajes de error";

obdmap = true;
services = 
[{title: `Lectura del PIN del inmovilizador IMMO3 GM en el vehículo:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Pinza`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Pinza`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Inmo 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Inmo 3`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
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
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN.`
},
{lines: [
`&nbsp;`,
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Procedimiento finalizado con éxito.`
},
]
}, {title: `Lectura del PIN del inmovilizador IMMO3 GM en banco:`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Pinza`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Pinza`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Inmo 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Inmo 3`, `>Lectura?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`PIN..:&nbsp;****`,
`<br />`,
`<br />`,
],
help: `Escriba el PIN.`
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
`Procedimiento`,
`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finalizado!`,
`<br />`,
],
help: `Procedimiento finalizado con éxito.`
},
]
}, {title: `Programación de llaves del inmovilizador IMMO3 GM (Valeo)`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Inmo 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Inmo 3`, `>Prog. Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN leído anteriormente y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
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
`&nbsp;&nbsp;Llave&nbsp;`,
`&nbsp;&nbsp;&nbsp;Programada!`,
`<br />`,
],
help: `Pulsa OK!`
},
]
}, {title: `Borrar llaves del inmovilizador IMMO3 GM (Valeo)`,
description: `Después de conectar todos los accesorios, siga los siguientes pasos en la pantalla del OBDMap:`,
screens: [
{lines: [`Seleccione:`, `>Diagnostico`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Diagnostico`, `>GM / OPEL`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`GM / OPEL`, `>Inmo 3`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`Inmo 3`, `>Borrar Llaves?`, `<br /><br />`], help: `Pulsa OK`, menu: 1000},
{lines: [`<br />Cargando...<br />Espere<br /><br />`], help: ``},
{lines: [
`&nbsp;`,
`Introduzca&nbsp;PIN:`,
`****`,
`<br />`,
],
help: `Ingrese el PIN leído anteriormente y pulsa OK!`
},
{lines: [
`&nbsp;`,
`Abre&nbsp;switch`,
`&nbsp;&nbsp;y&nbsp;pulsa&nbsp;OK.`,
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
`Llave&nbsp;borrada!`,
`<br />`,
`<br />`,
],
help: ``
},
]}
];
//Outras mensagens
othersMessageTitle = `Otros Mensajes`;
othersMessage = [{ label: `Pinza invertida!`,
screens: [
`&nbsp;`,
`Pinza`,
`&nbsp;&nbsp;invertida!`,
`<br />`,
],
causes: [
`La pinza fue conectada invertida en la memoria, o sea, el pin 1 de la pinza no coincide con el pin 1 de la memoria (el pin 1 se queda del lado rojo del cable).`,],
solutions: [
`Revise la correcta posición de la pinza en la memoria.`,]
},
{ label: `Cortocircuito!`,
screens: [
`&nbsp;`,
`Cortocircuito!`,
`<br />`,
`<br />`,
],
causes: [
`La pinza no ha sido conectada correctamente,`,`El inmovilizador está con avería.`,],
solutions: [
`Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben apoyarse a los terminales correspondientes de la memoria.`,]
},
{ label: `Falla en Programacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;&nbsp;Programacion!`,
`<br />`,
],
causes: [
`·	Malo contacto de la pinza con la memoria,`,`·	Malo contacto de la pinza con el OBDMap,`,`·	Memoria o módulo con problema,`,`·	La pinza fue conectada en otro componente, (si existir otro componente SOIC8 en la placa)`,`·	Los terminales de la memoria o de la própia pinza pueden estar con resina o suciedad.`,],
solutions: [
`·	Revisar la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben enconstarse a los terminales correspondentes de la memoria,`,`·	Revisar si los tornillos que fijan la pinza al OBDMap están bien fijos,`,`·	Revisar el estado del módulo,`,`·	Revisar si los terminales de la memoria y de la pinza están limpos, con resina o sucios.`,]
},
{ label: `Falla en lectura!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en`,
`&nbsp;&nbsp;lectura!`,
`<br />`,
],
causes: [
`Malo contacto de la pinza con la memoria,`,`Malo contacto de la pinza o cable MCU con el OBDMap,`,`Módulo con avería,`,`La pinza fue conectada en otro componente.`,],
solutions: [
`Revise la correcta posición de la pinza en la memoria, todos los terminales de la pinza deben encostarse a los  terminales correspondentes de la memoria,`,`Revise si los tornillos que prenden l pinza al OBDMap están bien fijos,`,`Revise el buen estado del módulo,`,`Revise si los terminales de la memoria y de la pinza estan limpios, sin resina o suciedad.`,]
},
{ label: `PIN Incorrecto!`,
screens: [
`&nbsp;`,
`PIN`,
`&nbsp;Incorrecto!`,
`<br />`,
],
causes: [
`El PIN ingresado está incorrecto.`,],
solutions: [
`Ingrese el PIN correcto.`,]
},
{ label: `Falla en la Comunicacion!`,
screens: [
`&nbsp;`,
`Falla&nbsp;en&nbsp;la`,
`&nbsp;&nbsp;&nbsp;Comunicacion!`,
`<br />`,
],
causes: [
`Defecto en el vehículo, parte eléctrica,`,`Software del OBDMap ha expirado,`,`Mala conexión de los accesorios.`,``,],
solutions: [
`Revise si la batería está cargando,`,`Revise la parte eléctrica del vehículo, fusibles, etc,`,`Revise si el cable universal y adaptador A1 está siendo usado,`,`Revise la conexión del OBDMap, en el conector de diagnosis del vehículo y otras conexiones,`,`Desconecte todos los cables, espere 10 segundos y los conecte nuevamente,`,`Revise la actualización más reciente con el soporte técnico, tal vez esta carga tenga sido alterada.`,]
},

];
//Last Message
lastMsg = `Si persistieran los errores anteriores, o a otros mensajes consulte el soporte técnico`;
