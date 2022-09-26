# TestMyHotel
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.1.
Forma parte del test de ingreso a MyHotel.

## Install & scripts
En `src`
- * `npm install`: Instalar dependenciasUna vez descargado, debe instalar las dependencias del proyecto corriendo el comando NPM INSTALL ,dentro del proyecto, en cualquier terminal.
- Si esta todo bien instalado, debe correr el comande ng serve --o para levantar el servidor. Automaticamente se abrirá el navegador con la portada del proyecto.
Como bien se explica en la siguiente línea:
## Development server
* `ng serve`: Inicia server para desarrollo
Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Al ingresar a la página tendra la portada donde me presento y puede acceder a mi github, esta es la pestaña home.
Si ingresa a la pestaña customerList, podra ver una lista de usuarios consumida en una url creada a fines de consumir datos de usuarios moqueados.

Podra visualizar una tabla, donde podra filtrar por cualquier campo, y tambien ordenar la misma tabla haciendo click en las cabecera de la misma. ( los titulos ciudad nombre id, etc).
Cabe aclarar que esta disponible para visualizarse desde cualquier dispositivo, si, incluye vista mobile ;) y una l+ogica que detecta el tipo de pantalla (HostListener) se queda escuchando y segun el tamaño muestra mobile o no. ( la tabla en version mobile son unas cards).

El mètodo  `buildHeaderTable()` es el que construye el header de la tabla, se le pasa un objeto con los campos headerName y field.
Con el mètodo `buildBodyTable()`, se llama al servicio, cuya respuesta sera la data que se pasara a la tabla por medio de un input.
El componente `reusableTable` es el que recibe la data y renderiza la tabla, el compopnente es hijo del componente `customerlist`que es el padre donde se propduce la mayor parte de la lógica.

Reusable table debe recibir para renderizarse correctamente los siguientes inputs:
[data]="dataCustomers" [columns]="columns"  [action]="true ==> habilita las acciones, Ejemplo editar el usuario.

Podra ver que al pasar el mousse por cada campo, se visualizaran tres puntos por los cuales al acceder al link podra editar este campo o usuario tanto en un modal o en otra ruta o page, dicho formulario de edición esta hecho con reactive forms.

Debajo de la tabla podrá ver un paginador, que se alimenta de la data source, pagina cada 10 elementos en este caso, pero es configurable.
Dentro del proyecto se utiliza a modo de ejemplo la pipe personalizada "capitalizado", podrà ver su lògica en dicha carpeta PIPE, la idea de esta pipe es capitalizar un texto cuando este lo lo  esté, es decir poner su primer letra en mayuscula, acepta false o true.

En la carpeta de assest podremos en contrar el archivo myHotel-variables cuya idea es centralizar alli ciertos estilos compartidos e importarlos donde se requeieran. (se agregan diferentes variables a modo de ejemplo)

Por último podremos ver que la app consta de dos mòdulos, el principal app.module y uno llamado material.module donde  se realizan las importaciones de los modulos de angular material utilizados, de esta manera el modulo principal solo importa el modulo de angular material entero y queda mas limpio.

pd: aclaración, los metodos de editar simulan una edición, pero nunca se va a consumir esta edicion, por lo tanto no se verá reflejada en la tabla, solo es una simulación.

extra: en la tab REDUX APP se puede accceder a una pequeña implementación del patrón REDUX, es algo sencillo, nunca use anteriormente redux, pero aproveche esta oportunidad para seguir la documentación y hacer algo básico, en este caso un contador.
