# 🚀 Proyecto de Servicio Social: Backend para Juego Educativo RPG 

Este repositorio almacena el código del backend diseñado para un emocionante juego educativo con temática RPG, creado como parte de mi servicio social. El backend está construido con Strapi y está destinado a ser utilizado para pruebas y desarrollo. El servicio esta diseñado para ejecutarse localmente.
## Características del Proyecto

- **Tecnología Utilizada:** Strapi
- **Objetivo:** Servir como backend para un juego educativo de temática RPG.

## Objetivos Principales

El objetivo principal de este proyecto es proporcionar una sólida base de backend para el juego educativo, permitiendo la gestión eficiente de contenido, usuarios y otras funcionalidades esenciales para el juego RPG. Además, el alojamiento en Render garantiza un acceso rápido y sencillo para pruebas y demostraciones.

## Recursos

- **Strapi:** Herramienta principal utilizada para la creación del backend.

## Estructura del Repositorio

El repositorio está organizado de manera que sea intuitiva y fácil de navegar. Los directorios y archivos están dispuestos de acuerdo con las convenciones estándar de Strapi y las prácticas recomendadas para proyectos de backend.

## Uso

Para probar este backend localmente o integrarlo en tu proyecto, sigue estos pasos:

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias necesarias de node ejecutando el archivo Instalar-Dependencias.exe según la versión de su dispositivo o con:
  ```
npm install
# or
yarn install
```
3. Inicia el servidor backend ejecutando el archivo Ejecutar-Servidor.exe según la versión de su dispositivo o con:
```
npm run start
# or
yarn start
```
5. ¡Explora y disfruta utilizando el backend para tu juego RPG educativo!

## Tener en cuenta lo siguiente
Las dependencias de node y el archivo para las variables de entorno no se guardan en el repositorio, por lo tanto al clonar el repositorio instalar las dependencias de node y considerar estos pasos adicionales
1. Existe un archivo llamado .env en el se guarda las variables de entorno del proyecto 
2. La base de datos necesita ser creada y almacenada con el nombre datosjuego para más información vea el Manual Técnico
3. Si vas a manejar otra base de datos necesitas modificar las variables de entorno en la parte de # Database con los datos de tu nueva base de datos
6. Si vas a subir el proyecto como servicio web como render considerar que DATABASE_SSL se cambia a false (true cuando se ejecuta localmente en tu computadora) y no es necesario hacer el archivo .env, render te permite agregarlos en la interfaz de subida o en el apartado de Environment (Todo lo anterior es solo si la base de datos se aloja en algun servicio web)
   

## Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas, mejoras o correcciones, no dudes en abrir problemas o enviar solicitudes de extracción. Tu aporte es fundamental para mejorar este proyecto.

## Agradecimientos

Agradezco enormemente tu interés y cualquier contribución que puedas realizar para mejorar este proyecto. ¡Gracias por formar parte de este viaje educativo RPG!

---

<sub>🚀 Desarrollado con Strapi en Render como parte del servicio social.</sub>


# 🚀 Iniciándose con Strapi

Strapi viene con una [Interfaz de Línea de Comando](https://docs.strapi.io/dev-docs/cli) (CLI) completa que te permite estructurar y gestionar tu proyecto en segundos.

### `develop`

Inicia tu aplicación de Strapi con autoReload habilitado. [Aprende más](https://docs.strapi.io/dev-docs/cli#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Inicia tu aplicación de Strapi con autoReload deshabilitado. [Aprende más](https://docs.strapi.io/dev-docs/cli#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Construye tu panel de administración. [Aprende más](https://docs.strapi.io/dev-docs/cli#strapi-build)

```
npm run build
# or
yarn build
```

### ⚙️ Implementación

Strapi te ofrece muchas opciones de implementación para tu proyecto, incluyendo [Strapi Cloud](https://cloud.strapi.io). Explora la [sección de implementación en la documentación](https://docs.strapi.io/dev-docs/deployment) para encontrar la mejor solución para tu caso de uso.

### 📚 Aprende más

- [Centro de recursos](https://strapi.io/resource-center) - Centro de recursos de Strapi.
- [Documentación de Strapi](https://docs.strapi.io) - Documentación oficial de Strapi.
- [Tutoriales de Strapi](https://strapi.io/tutorials) - Lista de tutoriales realizados por el equipo central y la comunidad.
- [Blog de Strapi](https://strapi.io/blog) - Blog oficial de Strapi con artículos realizados por el equipo de Strapi y la comunidad.
- [Registro de cambios](https://strapi.io/changelog) - Infórmate sobre las actualizaciones del producto Strapi, nuevas funciones y mejoras generales.

Siéntete libre de revisar el [repositorio de GitHub de Strapi](https://github.com/strapi/strapi). ¡Se agradecen tus comentarios y contribuciones!

### ✨ Comunidad

- [Discord](https://discord.strapi.io) - Ven a charlar con la comunidad de Strapi, incluyendo al equipo central.
- [Foro](https://forum.strapi.io/) - Lugar para discutir, hacer preguntas y encontrar respuestas, mostrar tu proyecto de Strapi y obtener comentarios o simplemente hablar con otros miembros de la comunidad.
- [Impresionante Strapi](https://github.com/strapi/awesome-strapi) - Una lista seleccionada de cosas increíbles relacionadas con Strapi.

---

<sub>🤫 Psst! [Strapi está contratando](https://strapi.io/careers).</sub>

