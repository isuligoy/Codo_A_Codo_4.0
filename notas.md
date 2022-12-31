# notas sueltas

### _Si no hay carpetas de la clase es porque no se hizo nada_

## class1-Estructura_proyecto_web

#### Primer video

- Crear index.html hacer p y tener un h1 al h6, tener un indentado correcto, con la estructura de HTML, header, body y que contiene cada cosa

#### img - Consola desarrollador

- Elemento img que necesita un src, o alt por si no se renderiza bien, que por ceo el alt va a leer eso y posicionarlo mejor,
- Como no sabemos css a la img le agregamos height="500px" y width de ser necesario
- El uso de la consola, en Google, con click derecho permite hacer diferentes cosas, pero cuando recargo vuelve a lo anterior

#### Elemento bloque/línea - Formularios

- Bloque va a ocupar toda la fila que tenga disponible
- En línea no empieza en una nueva línea
- Form sirve para que nos envíen información, con una etiqueta FORM principal para luego tener un label con sus respectivos inputs
- El Form tendrá un action="" a que página va a mandar esta información, o la respuesta del formulario y el method="" siendo el método HTTP que se usara para enviar el formulario
- Si la información va a viajar al back, a cada input ponerle un name para así tenerlo identificado

## class2-Elementos_multimediales

#### Video

- Soporte y compatibilidad de cosas CAN I USE
- La etiqueta video tiene los atributos, autoplay, controles, etc., y viene en 2 formatos mp4 y Ogg, lo que hace es ser lo más compatible con los usuarios del otro lado
- Dentro de la etiqueta video se puede poner texto que si no se puede reproducir el formato se muestra ese texto

#### Audio

- Comentarios <!-- -->
- Los formatos que son soportados para cada navegador, está en w3s
- Como embeber un video de YouTube en HTML, el siendo iframe,
- Con ir al video que quiero compartir en mi HTML y toco compartir y en insertar, campo eso en HTML

#### Web semántica

- La página web no solo es para un cliente, sino que también para el robot de Google, que lo que hace es posicionar la página, con lo que yo busque en el navegador
- Favicon
- Los meta OG (Open Graph) - Facebook debugger, article[https://shorturl.at/ftNZ5]

## class3-Capa_de_presentacion

#### CSS básico

- Aplicar estilos a de manera selectiva a los elementos de HTML
- Tenemos 3 formas de darle estilos, style en el head, estilo en línea y en otro archivo .css
- Se trabaja con key/valué(clave/valor)
- https://htmlcheatsheet.com/css/
- Crea un directorio de carpeta css y adentro style.css y los conecto al HTML con enlace
- Comentarios /\*\*\*/

#### CSS box-model

- Todos los elementos de HTML son cajas, margin border padding content
- PX: pixeles
- em: unidad de medida 1 em = tamaño fuente actual
- rem: unidad de medida 1 rem = tamaño fuente body
- %: percentage
- Background - image - repeat - position

#### CSS selectors

- clases / id y selectores por cascada y especificidad

## class4-Extendiendo_CSS_frameworks

#### RESPONSIVE

- Para empezar, se debe tener la meta tag viewport en el head (nunca scrollear horizontal siempre vertical)
- Se trabaja con una vista de grilla (normal 12 columnas y width 100%), tomamos el ancho de pantalla y la partimos en pedacitos (cada framework tiene su propia grilla de pantalla)
- Construir una grilla responsiva, tener box-sizing: border-box;
- Media queries aplicar estilos según el tamaño de pantalla que tengamos

#### MEDIA QUERIES

- una regla de media queries para el navegador que está ingresando, sea para la pantalla para de esas dimensiones
- Para cada tipo de pantalla hay que hacer una media queries. pero si se usa un framework con las clases definidas que tiene ya va a estar el responsive

#### BOOTSTRAP

- Ya se heredan propiedades y las utiliza en el archivo de HTML
- Unas propiedades se deben aplicar para que las imágenes no se deformen cuando trabajamos en responsive, máx.-width: 100%; height: auto;

## class5-Alojamiento_tipo_servidores

#### GITHUB

- Modelo cliente servidor, el navegador al hacerle una petición nos lleva al servidor de "Google" y devuelve la página (archivos)
- Los servidores tiene ip, se trabaja con ipv4
- GitHub para levantar el servidor sin pagar un hosting (Hostinger/ don web), se necesita un nombre de dominio
- Los nombres de dominio en ARG se compra por nic.ar
- ¿Hace falta tener un servidor para subir el proyecto? / Es necesario contratar un proveedor de hosting, que te brinde una parte del servidor en el cual puedas subir los archivos que forman parte de tu proyecto.

#### INTRODUCCION GIT Y VERSIONES

- Git, para crear un historial de cambios
- git --version
- git init / git config user.name "Nombre" / git config user.email "mail@gmail.com"
- git status
- git add .
- git commit -m "Primer escritura en el repo"
- git log (ver cuando se hizo commit) --oneline
- git diff

- git blame Nombre archive.ext

## class5-Podcast

#### Podcast: Cómo encarar un proyecto web

- Llamada con el cliente en papel que es lo que espera el cliente, aunque no va a saber que quiere
- Dibujar en una hoja como se lo va a ir imaginarlo, etapa del bocetado, no ir directa a la maqueta
- Mostrar primero el boceto para hacer los cambios sobre los bocetos y no sobre la maqueta porque cambiar eso va a dar dolores de cabezas
- Ser realista y con que terminamos haciendo para esa semana
- Validar semánticamente el HTML para que el ceo

#### Podcast: Lógica de negocio y algo más

- Se via HTML5, CSS3, GIT, JavaScript, Node, React
- PHP JAVA C++ C# PYTHON, Lo que llega del lado del cliente lo procesamos y lo guardamos en una base de datos

- Relevamiento de lo que espera el cliente, cuanto a diseño contenido editorial imagen, presentamos bocetos, maqueta, y para terminar le sumamos la lógica del negocio y la programación en si (JS)

## class6-Pensamiento_lógico

#### Pensamiento lógico

- Pensamiento lógico, es codificar la solución al problema que yo tenga, pensar en los posibles problemas que pueden suceder
- Resolver un problema empezando con un diagrama de flujo [draw.io]
- Hacemos un algoritmo, instrucciones definidas ordenas y acotadas para resolver un problema, realizar un cálculo o desarrollar una tarea
- Si hay que pensar en todo nos volvemos locos por eso esta divide y vencerás
- DYV método está basado en la resolución recursiva de un problema dividiéndolo en dos o más subproblemas de igual tipo o similar
- Pensar de un problema siendo el general y dividirlo en pequeños pasos para hacer una a la vez
- DRY do not repeat yourself, no repeat
- WET write every twice (major no)
- UML lenguaje de modelado unificado

#### Algoritmos de programación

- Pensar en todas las decisiones que tomara el usuario y que pasos tomara
- Pseudo código
- Algoritmo : Proceso de datos y secuencia que producen un resultado.

## class7-Tipos_lenguajes_programación

#### Lenguaje programación

- Lenguaje formal, que le proporciona a una persona (programador), escribir o programar una serie de instrucciones o secuencias de ordenes en forma de algoritmos con el fin de controlar el comportamiento físico o lógico de un sistema informático
- JS se puede trabajar desde el lado del cliente como del servidor (backend)
- Complicado: Código fuente que escribimos se va a compilación y va a producir un binario y puede ser ejecutados en el sistema operativo, como una aplicación
- Interpretado: solo cuando se ejecuta el programa se interpreta lo que está desarrollado y produce la ejecución
- Desarrollar la documentación

#### Compilador Interprete

- Compilado: programa que traduce código escrito en un lenguaje de programación (código fuente) a otro lenguaje (objeto), toma el código fuente del lenguaje que elegir y lo baja a código de maquina (assembly), produce un "ejecutable" con lenguaje de maquina
- Interprete: programa de analizar y ejecutar otros programas, traducir el programa a medida que se va ejecutando, a medida que lee y lo va interpretando
- Clasificación alto nivel y bajo nivel
- Dependiendo el lenguaje de programación que se use va a estar más cerca de hablarle al procesador casi directa Alto nivel: más lejos de hablar al procesador y pasa a bajo nivel y bajo nivel: más cerca de hablar al procesador
- **_Tipo de Paradigma de programación_**, diferentes corrientes para llegar a la resolución de problemas, **_procedural_**: receta de la cocina paso a paso, o **_orientados a objetos_**: más sofisticado, es como un robot que toma lo que necesita para seguir la receta, bien estructurado, **_por eventos_**
- **_Plataformas_**: diferentes tipos de plataformas, arquitecturas, etc.

#### Tipos de lenguaje de programación ejemplos

- **_Fuertemente tipado_**: hay que declarar que tipo de dato se va a guardar en la variable
- **_No Fuertemente tipado_**: no se requiere declarar que tipo de dato se va a guardar en la variable

## class8-Estructuras_de_programación

#### Tipos de variables

- **_Variables_**: es un espacio en el sistema de almacenaje (la memoria) y un identificador que se asocia a dicho espacio, tipo de valores, números, string, booleano, undefinded, null
- El tipo de dato en JS es mutable de tipado débil

#### Condicionales e iteradores y funciones para reutilizar código.

- if con mayor o igual, que, si no es verdadera la primera, se escapa por el else
- **_For_**: cuando sabemos cuántas iteraciones va a tener mientras que **_while_**: no sabemos cuántas iteraciones va a tener, mientras que el **_do/while_**: ejecuto una vez la sentencia después pregunto si sigo ejecutando o no
- Sentencia **_break_**: iterador, si mi variable vale tanto quiero que termine con el iterador, también esta **_continue_**: si se cumple eso sigue adelante con el próximo bucle
- **_Funciones_**: encapsula un bloque de código

## class9-Fundamentos_JavaScript_I

#### Sintaxis

- Sintaxis var, let, const
- Las variables tiene que ser identificadores únicos, los nombres pueden ser tener números letras, pero tiene que empezar con letra, es case sensitive (y != Y)
- // /\*\* \*/ comentario, es para cuando algo no esta tan claro de que hace o porque se hace
- JS le suma comportamiento a la pagina

#### Integrando JavaScript a HTML

- El JS se puede agregar **_Dentro HTML_**: <script></script> en el HTML, cuando solo tengo una hoja de HTML se puede entender, **_Script externo_**: es un archivo aparte unido con la <script src="*"></script>
- [Eventos DevMozilla](https://developer.mozilla.org/es/docs/Web/Events)
- [Eventos W3Schools](https://www.w3schools.com/jsref/dom_obj_event.asp)

#### introducción a los Eventos JS

- Variante de onclick siendo, al document agrégale un escuchador de ese evento que yo le diga

## class10-Pensamiento lógico

#### Dom y su relación con JS

- El DOM, document object model, saber del dom va a permitir manipular el HTML y CSS como quiera,
- El "problema" de ser un leguaje no tipado es que cuando suma un numero con un string, lo vuelve un string
- [this/that](https://thisthat.dev/)
- Parseint() or Number()

#### JSON, trabajando con API

- **_JSON_**: es un formato estándar de comunicación de datos, se puede representar los tipos básicos de datos de JS
- **_Clave_** string que identifica una propiedad / **_Valor_**: valor asignado a una propiedad. (string, number, boolean, null, array, object)
- **_JSON.Parse_**: convertir string a objeto, Desde JS tomar el json y transformarlo en variables para poder manipularlo
- **_JSON.Stringify_**: convert object a string
- **_Fetch_**: [Json Placeholder](https://jsonplaceholder.typicode.com/)

#### Localstorage PWA

- **_Localstorage_**: almacenar información dentro del navegador, no se borra, aunque el navegador se cierre, si el usuario borra los datos de navegador ahí si
- No estar siempre pegándole a la base de datos, sino que traerlo una vez y guardarlo en el localstorage
- **_API Geolocalización_**: va a mostrarme la latitud como la longitud,
- En las propiedades de desarrollado, en los 3 puntidos / more tools / sensores, el navegador viene predefinido para que pruebe diferentes lugares
- **_PWA_**: aplicaciones web progresivas usa api del navegador, como lo de arriba, de manera tal que se parezca una aplicación nativa, para acercarse a la experiencia de usuario,
- **_PWA_** (extra): aplicaciones web que utilizan APIs y funciones emergentes del navegador web junto con una estrategia tradicional de mejora progresiva para ofrecer una aplicación nativa.

## class11-Podcast

#### Podcast: Lógica de negocio

- Entender lo importante que es desarrollar una página web y el alcance que tendrá el proyecto
- Veremos como ver el alcance del negocio, la lógica que tendrá este negocio, y tener una idea de lo que se tiene que construir
- Relevar todas las funcionalidades que el cliente espera y ver que tan viable son
- No empezar con el código, 1º validar con el cliente 2º la lógica diagrama de flujo algoritmos 3º ahí si nos sentamos a codificar, porque lleva mucho tiempo
- Armar documentos, diagrama de flujo de que es lo que va a llevar a código [MarverApp](https://marvelapp.com/), [balsamiq](https://balsamiq.com/), para crear un prototipo de cómo se comportaría la pagina
- Testar y probar las fallas

#### Podcast: Algunos consejos

- No quedase con un solo lenguaje de programación
- El mejor lenguaje es aquel que se acople mejor al proyecto
- No tener una ensalada de lenguajes, pero si saber cuáles existe y tener un conocimiento en que es bueno en que es óptimo, en que flaquea etc.
- Buscar buenas prácticas de programación
