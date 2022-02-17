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
2. Pago: Esta página se abrirá al cliente que haya rellenado el formulario de suscripción y podrá realizar el pago del tipo de suscripción que haya elegido.
3. ***
4. Blogs: En esta página se van a poder disfrutar de los artículos y noticias agrupados en 2 categorías Geología y Economía, también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***
5. Vídeos: Aquí el suscriptor podrá visualizar todo tipo de vídeos agrupados en 2 categorías Geología y Economía,  también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***

# Para poder acceder hemos utilizado 2 tipos de usuarios:

1. Administrador: Es el que se va a encargar de subir los contenidos a la página y se va a ocupar del mantenimiento.
2. Suscriptor: Van a ser los clientes que hayan realizado el registro y el pago, estos usuarios podrán acceder a los contenidos de vídeos y del blog.

# El arbolado que hemos utilizado para los modelos e Id es:
![2](https://user-images.githubusercontent.com/96442220/154519194-7be661f4-7166-47eb-a93f-bf11788a37ce.jpg)


### Tenologías hemos empleado: 

<!-- - HTML: Es un lenguaje de marcado que lo hemos usado para estructurar las páginas y poner los ids, clases y scripts de conexion a CSS y JS. 
***
- CSS: Lo hemos usado para darle estilo a las páginas y hemos usado diferentes propiedas y alguna animación como el spinner/loading.
***
- Bootstrap: Lo hemos usado para darle un diseño más estandarizado a todas las páginas usando diferentes clases en sus correspondientes etiquetas, por ejemplo un carrusel de vídeo e imágenes.
***
- JavaScript: Ha sido la tecnología más utilizada con ella le hemos dado dinamismo a la página, hemos realizado distintas funciones, bucles For, ForEach cuyo resultado ha sido la manipulación de objetos (DOM) de la API, hemos obtenidos los objetos los hemos recoorrido y filtrado y hemos creado nuevas tablas con sus correspondientes buscadores botones y filtros.
*** -->
- Node JS: Ha sido el lenguaje de Backend que hemos utilizado,
***
- Mongo DB: Es el tipo de base de datos que hemos utilizado para el proyecto.
***

Y para conectarnos a la API hemos usado la función Fetch a la aplicación de Postman:

---

![Postman](https://user-images.githubusercontent.com/96442220/153619900-b7e046bc-6146-4175-ba61-23f6d37c7fed.png)

***

### Funcionalidades:

-Spinner/Loading: Se ha incluido un símbolo de carga cuando se cargan las tablas para que el usuario no piense que se ha quedado bloqueado.

-Alerts y Modals:

Consta de 1aler de Java Script y 3 Modal/alerts:

  1. El alert, salta en el caso de que si hay algún error en la carga de datos despliega un cuadro que dice: "Ha ocurrido un error".
  ***
  3. El 1º de los Modals ocurre cuando no has introducido nada en el buscador y le das a buscar, te salta un modal que te dice: "Debes introducir el nombre de tu equipo."
  ***
  5. El 2º de los Modals ocurre cuando has introducido mal el nombre del equipo o has introducido un equipo que no pertenece a esa liga, en tal caso se despliega otro modal con el mensaje: "El Equipo que buscas no se encuentra en esta Liga."
  ***
  7. El 3º Modal/alert está comentado, ya que hemos decidido que el filtro por jornada se introduce en el mismo search, de manera que si se descomenta, saltaría cuando introdujeras un número en lugar de un nombre y en tal caso se desplegaría el alert con el mensaje: "Debes introducir un Nombre y no un Número"

### Funciones más relevantes:

- Fetch: Nos ha permitido conectarnos ala Api, de manera que recibimos los datos acrualizados y permitimos que nuestra web sea dinámica. La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red. En concreto nosotros recuperamos un archivo JSON.

- For Loop: Lo hemos usado para iterar en el objeto y contruir las tablas. El bucle for de JavaScript se utiliza para recorrer la matriz o los elementos durante un número específico de veces. Si se conoce una cierta cantidad de iteración, debe usarse. 

- ForEach: lo hemos usado para manipular objetos y obtener datos diferentes a los mostrados por el objeto, entre ellos la media.
El método forEach() también se usa para recorrer arreglos, pero usa una función diferente a la del clásico “bucle for”. Pasa una función de devolución de llamada para cada elemento de una matriz junto con los siguientes parámetros:

  - Valor actual (obligatorio): el valor del elemento de matriz actual
  - Índice (opcional): el número de índice del elemento actual
  - Array (opcional): el objeto de matriz al que pertenece el elemento actual
  - Necesitamos una función de devolución de llamada para recorrer una matriz utilizando el método forEach.

Para cada elemento de la matriz, se ejecutará la función. La devolución de llamada debe tener al menos un parámetro que represente los elementos de una matriz.

La diferencia entre el bucle For y el ForEach se resume en la siguiente imagen:
![Diferencia Bucle For y ForEach](https://user-images.githubusercontent.com/96442220/153895201-c406a403-accf-4a53-ade1-14258f513b05.jpg)


- Filter: Lo hemos usado junto a los condicionales if para posibilitar los filtros de la página de partidos (ganados, perdidos o empatados, próximos partidos o por jornada)
El método Filter crea un nuevo arreglo, el cual no busca modificar el valor de los elementos para el nuevo arreglo, únicamente retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.

- Append y Appenchild: Son métodos qde JavaScript que sirven para insertar un nuevo nodo (elemento, array o div) dentro de la estructura DOM (otro div padre) de un documento

***
Contacto: Hotmail: **rafaelabancesserrate@hotmail.com**
Telf: **+34 608 292 160**

