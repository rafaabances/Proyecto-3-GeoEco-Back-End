## Proyecto-3-GeoEco-Back-End

### GeoEco.Com
<!-- 
Accede a la web: [FútbolRafi.com](https://futbolrafi.netlify.app/home) --> // poner la URL del web buena cuando se cree.

![Árbol de Páginas](https://user-images.githubusercontent.com/96442220/154500211-2725fc5e-44ba-4382-bfbe-e7c063d52f43.png)


Se trata de un proyecto en el cual se va a desarrollar una web de contenidos sobre Geología y Economía y también a futuro diversos temas sobre ciencia, política economía, esta destinado a personas curiosas que les guste aprender sobre este tipo de temas, va a constar de una página Home otra de contactos, otra de vñídeos y otra de blog de artículos y noticias en los cuales se va a poder realizar comentarios, para acceder a la Home y a la página de contacto no va a ser necesario suscribirse y pagar pero para acceder alos contenidos del blog y vídeos sí. Esto se va a controlar estableciendo un acceso en le que será necesario escribir tu usuario y contraseña y para poder validar este usuario o contraseña que obtienes registrandote en el formulario de la página de contactos, deberás haber pagado el importe mensual/anual que se haya establecido.

### La estructura de la web se compone de:

1. HOME: Es la página principal, en ella tenemos una NavBar que te lleva al resto de páginas,en ella ponemos a que nos dedicamos y que es lo que ofrecemos, además consta de enlaces que te llevan a contacto que es donde puedes ver nuestras redes sociales, correos y donde se encuentra el formulario de registro a la suscripción.
***
2. Contacto: En esta página podemos observar nuestras redes sociales, explicamos la diferencia entre una suscripción u otra (quizás hacer otra página para el formulario ( aquí eligirá la suscripción) y explicar aquí el pago) y es donde va estar el formulario de registro y el enlace que te lleva al pago.
***
3. Pago: Esta página se abrirá al cliente que haya rellenado el formulario de suscripción y podrá realizar el pago del tipo de suscripción que haya elegido.
***
4. Blogs: En esta página se van a poder disfrutar de los artículos y noticias agrupados en 2 categorías Geología y Economía, también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***
5. Vídeos: Aquí el suscriptor podrá visualizar todo tipo de vídeos agrupados en 2 categorías Geología y Economía,  también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***

* En blogs y videos se podrá poner comentarios.

# Para poder acceder hemos utilizado 2 tipos de usuarios:

1. Administrador: Es el que se va a encargar de subir los contenidos a la página y se va a ocupar del mantenimiento. El rol es 1.

3. Suscriptor: Van a ser los clientes que hayan realizado el registro y el pago, estos usuarios podrán acceder a los contenidos de vídeos y del blog asi como realizaer comentarios a los mismos. El rol es 2.

*Para poder ser usuario de la página es necesario proceder al pago.

# El arbolado que hemos utilizado para los Modelos e Id es:
![Home](https://user-images.githubusercontent.com/96442220/157062458-465a45de-127e-4a6b-a2b1-9f34238f9b71.png)




### Tenologías hemos empleado: 

![Tecnología](https://user-images.githubusercontent.com/96442220/154520352-864a310d-901e-429e-8808-2ef3f37bafa2.jpg)
![Postman](https://user-images.githubusercontent.com/96442220/153619900-b7e046bc-6146-4175-ba61-23f6d37c7fed.png)

- Node JS: Ha sido el lenguaje de Backend que hemos utilizado, lo hemos usado para realizar las rutas al servidor así como describir los modelos, exportarlos y conectarlos vía node modules.

     Dependencias:
            
     Se han utilizado varias dependencias, que nos han permitido diversas funcionalidades:
            * Mongoose: Mongoose es una librería para Node. js que nos permite escribir consultas para una base de datos de MongooDB, con características como validaciones,                   construcción de queries, middlewares, conversión de tipos y algunas otras, que enriquecen la funcionalidad de la base de datos.
            
    * Nodemoon: es una utilidad de interfaz de línea de comandos (CLI) desarrollada por @rem que envuelve su aplicación Node, vigila el sistema de archivos y reinicia                 automáticamente el proceso ( no necesitas reiniciar el servidor cada vez que realizas un cambio)
            
     * Express: Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona                 mecanismos para:

      - Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
                  
      - Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.

      - Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.

      - Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.
            
     * Dotenv: La librería dotenv nos permitirá cargar a traves del método config() y el objecto path, el archivo . env que necesitemos de acuerdo al entorno deseado.                  Agregamos 2 nuevas tareas en nuestro archivo package.
            
     * Bcrypt: Es una función de hashing de passwords diseñado por Niels Provos y David Maxieres, basado en el cifrado de Blowfish. Lleva incorporado un valor llamado                  salt, que es un fragmento aleatorio que se usará para generar el hash asociado a la password, y se guardará junto con ella en la base de datos. Así se evita que                  dos passwords iguales generen el mismo hash y los problemas que ello conlleva, por ejemplo, ataque por fuerza bruta a todas las passwords del sistema a la vez. Con              el salt, se añade un grado de complejidad que evita que el hash asociado a una password sea único.
            
     * JWT (JsonWebToken): Es un token de seguridad que nosotros creamos al momento que el usuario se registra con sus credenciales.
        Este token se devuelve al cliente el cual tendrá que enviar cada vez que solicita información al servidor. Nos permite utentificarnos cuando realizamos el Login.
            


***
- Mongo DB: Es el tipo de base de datos que hemos utilizado para el proyecto, se trata de una base NOSQL donde hemos almacenado todos nuestros datos de la web.
***
- PostMan: Se trata de una aplicación que nos permite realizar pruebas API. Es un cliente HTTP que nos da la posibilidad de testear ‘HTTP requests’ a través de una interfaz gráfica de usuario, por medio de la cual obtendremos diferentes tipos de respuesta que posteriormente deberán ser validados.

      - Métodos:
      
          Postman nos ofrece muchos métodos para interactuar con los ‘endpoints’. Los más utilizados y sus funciones son:

          * GET: Obtener información
          * POST: Agregar información
          * PUT: Reemplazar la información 
          * PATCH: Actualizar alguna información
          * DELETE: Borrar información

---

### Modelos:

Los modelos dentro de NodeJS van a representar a una entidad de la base de datos y más concretamente van a representar a un único registro o documento de nuestra base de de datos.

Por ejemplo, si tenemos una colección en la base de datos llamada pagos, dentro de ella se guardarán documentos de tipo Pago. Pues en nuestro código tendremos el modelo de Pago con todos sus campos y cuando queramos crear un Pago haremos una instancia de ese modelo.

Se han establecido varios modelos: CommentVideo, CommentBlog, Users, Pay, Video, Blog y Category.

### Rutas:

El direccionamiento hace referencia a la determinación de cómo responde una aplicación a una solicitud de cliente en un determinado punto final, que es un URI (o una vía de acceso) y un método de solicitud HTTP específico (GET, POST, etc.).

Cada ruta puede tener una o varias funciones de manejador, que se excluyen cuando se correlaciona la ruta.

La definición de ruta tiene la siguiente estructura:

* app es una instancia de express.
* METHOD es un método de solicitud HTTP.
* PATH es una vía de acceso en el servidor.
* HANDLER es la función que se ejecuta cuando se correlaciona la ruta.

En nuestro proyecto hemos realizado diversas rutas que interrealcionan modelos y hacen diversas solicitudes o llamdas:

- CommentBlogRouter: Consta todo de Auth (es necesario estar logueado y disponer de un usuario) No hace falta ser administrador.

    - Get: Permite ver todos los comentarios.
    - Find: Permite ver un comentario en concreto gracias a la ID.
    - Post: Permite crear un nuevo comentario, este se almacena en la propiedad del blog commentNew (es una array []).
    - Update: Permite modificar un comentario que hayas realizado tú, no otra persona.
    - Delete: Permite borrar un usuario que hayas realizado tú, no otra persona.


- CommentVideoRouter: Todas las rutas constan de la función Auth (es necesario estar logueado y disponer de un usuario) No hace falta ser administrador.

    - Get: Permite ver todos los comentarios.
    - Find: Permite ver un comentario en concreto gracias a la ID.
    - Post: Permite crear un nuevo comentario, este se almacena en la propiedad del video commentV (es una array []).
    - Update: Permite modificar un comentario que hayas realizado tú, no otra persona.
    - Delete: Permite borrar un usuario que hayas realizado tú, no otra persona.

- PayRouter: No disponen de la solicitud de modificar ni borrar debido a la seguridad.

    - Get: Permite ver todos los pagos, es necesario loguearte y ser administrador.
    - Find: Permite ver un pago en concreto gracias a la ID, es necesario loguearte y solo podrás ver el tuyo.
    - Post: Permite crear un nuevo pago,  No es necesario loguearte ni ser administrador para facilitar que puedas realizarlo ya que es paso previo 
     a poder crerar un usuario nuevo.


- UserRouter: Todas las rutas constan de la función Auth salvo el Post.

    - Get: Permite ver todos los usuarios, para verlos todos es necesario tener el rol de aministrador.
    - Find: Permite ver un usuario en concreto gracias a la ID.
    - Post: Permite crear un nuevo usuario Es la única que no lleva auth ya que tiene que permitir crear los usuarios, en React lo configuraremos para que haste después de             haber realizado el pago no se cree el usuario.
    - Update: Permite modificar un usuario creado por ti.
    - Delete: Permite borrar un usuario creado por ti.
    - Login: Permite al usuario registrarse gracias a la función AccessToken que crear el token y la función Auth revisa si es válido así como la función Admin revisas i es            administrador o No.

- CategoryRouter: No dispone de find (GetbyID), ya que solo va a ver dos categorías (Geología y Economía), tampoco dispone de borrar por aumentar la seguridad.

    - Get: Permite ver todos las categorías, es necesario loguearte.
    - Post: Permite crear una nueva categoría, es necesario loguearte y ser administrador.
    - Update: Permite modificar una categoría, es necesario loguearte y ser administrador.

- BlogRoter: Todas las rutas constan de la función Auth (ya que solo tienen acceso los uasuarios)

    - Get: Permite ver todas las noticias.
    - Find: Permite ver una noticia en concreto gracias a la ID.
    - Post: Permite crear una nueva noticia, es necesario ser administrador pues él es el encargado del mantenimiento del contenido.
    - Update: Permite modificar una noticia, es necesario ser administrador.
    - Delete: Permite borrar una noticia, es necesario ser administrador.

- VideoRouter: Todas las rutas constan de la función Auth (ya que solo tienen acceso los uasuarios)

    - Get: Permite ver todos los videos.
    - Find: Permite ver un video en concreto gracias a la ID.
    - Post: Permite crear un nuevo video, es necesario ser administrador pues él es el encargado del mantenimiento del contenido.
    - Update: Permite modificar un vídeo, es necesario ser administrador.
    - Delete: Permite borrar un vídeo, es necesario ser administrador.


***

### Funcionalidades:

* Login: Hemos realizado un control, estableciendo la necesidad de loguearse para saber quién ha procedido al pago y pueda visualizar los contenidos, para ello nos hemos apoyado en las funcionalidades de Auth (authorization) y Admin (adminsitrador)

* Auth: Nos permite comprobar si el usuario se ha logueado a través del token, una vez comprobado el token, el usuario ya puede acceder a los contenidos y comentarlos, esto se ha configurado poniendo esta funcionalidad en la rutas dirigidas al servidor.

* Admin: Nos permite comprobar si el usuario es administrador o es suscriptor, si es administrador se le habilita a poder subir, modificar o borrar contenidos, esto se comprueba gracias al establecimiento de una propiedad en el modelo de usuario, el rol, 1 si es administrador, 0 si es suscriptor. Esto también se ha configurado poniendo esta funcionalidad en la rutas dirigidas al servidor.

### Funciones más relevantes:


***
Contacto: Hotmail: **rafaelabancesserrate@hotmail.com**
Telf: **+34 608 292 160**

