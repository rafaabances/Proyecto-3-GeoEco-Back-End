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
***
4. Blogs: En esta página se van a poder disfrutar de los artículos y noticias agrupados en 2 categorías Geología y Economía, también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***
5. Vídeos: Aquí el suscriptor podrá visualizar todo tipo de vídeos agrupados en 2 categorías Geología y Economía,  también se podrá responder con comentarios a esas noticias y artículos, solo podrá acceder quien se haya suscrito y realizado el pago.
***

# Para poder acceder hemos utilizado 2 tipos de usuarios:

1. Administrador: Es el que se va a encargar de subir los contenidos a la página y se va a ocupar del mantenimiento.
2. Suscriptor: Van a ser los clientes que hayan realizado el registro y el pago, estos usuarios podrán acceder a los contenidos de vídeos y del blog.

# El arbolado que hemos utilizado para los Modelos e Id es:
![Arbolado de Modelos](https://user-images.githubusercontent.com/96442220/154519194-7be661f4-7166-47eb-a93f-bf11788a37ce.jpg)


### Tenologías hemos empleado: 

![Tecnología](https://user-images.githubusercontent.com/96442220/154520352-864a310d-901e-429e-8808-2ef3f37bafa2.jpg)
![Postman](https://user-images.githubusercontent.com/96442220/153619900-b7e046bc-6146-4175-ba61-23f6d37c7fed.png)


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



***

### Funcionalidades:

### Funciones más relevantes:

- Fetch: Nos ha permitido conectarnos ala Api, de manera que recibimos los datos acrualizados y permitimos que nuestra web sea dinámica. La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como peticiones y respuestas. También provee un método global fetch() (en-US) que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red. En concreto nosotros recuperamos un archivo JSON.

- For Loop: Lo hemos usado para iterar en el objeto y contruir las tablas. El bucle for de JavaScript se utiliza para recorrer la matriz o los elementos durante un número específico de veces. Si se conoce una cierta cantidad de iteración, debe usarse. 

- ForEach: lo hemos usado para manipular objetos y obtener datos diferentes a los mostrados por el objeto, entre ellos la media.
El método forEach() también se usa para recorrer arreglos, pero usa una función diferente a la del clásico “bucle for”. Pasa una función de devolución de llamada para cada elemento de una matriz junto con los siguientes parámetros. Para cada elemento de la matriz, se ejecutará la función. La devolución de llamada debe tener al menos un parámetro que represente los elementos de una matriz.


- Filter: Lo hemos usado junto a los condicionales if para posibilitar los filtros de la página de partidos (ganados, perdidos o empatados, próximos partidos o por jornada)
El método Filter crea un nuevo arreglo, el cual no busca modificar el valor de los elementos para el nuevo arreglo, únicamente retorna aquellos elementos que cumplan con las condiciones del filtro, los cuales serán almacenados en otro arreglo.

- Append y Appenchild: Son métodos qde JavaScript que sirven para insertar un nuevo nodo (elemento, array o div) dentro de la estructura DOM (otro div padre) de un documento

***
Contacto: Hotmail: **rafaelabancesserrate@hotmail.com**
Telf: **+34 608 292 160**

