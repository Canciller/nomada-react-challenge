# nomada-react-challenge
### Problema
No saber cómo se llama un actor ni las películas en las que ha trabajado, sólo cuentas con una foto.
### Solución
Crear una interfaz hecha con react que conecte varias APIs para lograr saber como se llama un actor y sus películas. Tendrás que hacer dos peticiones, una para saber que actor es el de una imagen y después buscar por el nombre los datos de este.

## Requisitos cumplidos
### Requeridos
- [x] Con ayuda de un sistema de diseño como ant o material design crear una interface similar.
- [x] Debo poder arrastrar un archivo de imagen o poder elegirlo desde el explorador de archivos del sistema.
- [x] Solo debo poder arrastrar o seleccionar un archivo.
- [x] Primero debes subir la imagen a nuestra API para obtener el nombre del actor que aparece en la imagen.
- [x] Una vez tengas el nombre del actor debes consultar la API de “The movie Database”.
- [x] Dibujar la información: Foto del actor, Género del actor, Nombre del actor, Popularidad, Películas en las que ha participado: Nombre de la película, Foto de la película, Descripción de la película, Fecha en la que se estrenó, Valoración de la película.
- [x] Debe haber un botón para reiniciar el proceso.
### Puntos Extra
- [x] Guardar el estado de la aplicación en redux.
- [x] Usar react-router para las dos vistas.
- [ ] Usar normalizr 
## Instalación
Comandos para instalación del proyecto:
```bash
git clone https://github.com/Canciller/nomada-react-challenge.git
cd nomada-react-challenge
npm install
```
Despues de ejecutar esos comandos deberiamos de tener el proyecto instalado con todas las dependencias necesarias.
## Configuración
Antes de ejecutar el servidor localmente, se requiere crear un archivo `.env` en el directorio raíz del proyecto con el siguiente contenido:
```bash
REACT_APP_NOMADA_KEY=
REACT_APP_MOVIE_DB_KEY=

REACT_APP_NOMADA_URL=https://whois.nomada.cloud
REACT_APP_MOVIE_DB_URL=https://api.themoviedb.org/3
REACT_APP_MOVIE_DB_PICTURES_URL=https://image.tmdb.org/t/p
```
Las unicas variables que se tienen que llenar son las siguientes:\
\
`REACT_APP_NOMADA_KEY` es tu clave de API proporcionada para nomada.\
`REACT_APP_MOVIE_DB_KEY` es tu clave de API proporcionada para the movie db.\
\
Dejar las otras variables sin modificar.
## Correr servidor de prueba
Para correr el servidor de prueba ejecutamos el siguiente comando en el directorio raíz del proyecto:
```bash
npm start
```
