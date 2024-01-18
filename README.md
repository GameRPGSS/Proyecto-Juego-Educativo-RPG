# 🚀 Proyecto de Servicio Social: Juego Educativo RPG 🚀

Este repositorio almacena nuestro emocionante juego educativo con temática RPG, creado como parte de nuestro servicio social. El juego está desarrollado usando Strapi para el Back-End y Phaser.js para el desarrollo del juego.

## Instrucciones para ejecutar el juego de manera local:
En este contenedor existen 4 carpetas que contienen partes importantes del proyecto. Es importante revisar el **Manual Técnico** proporcionado para obtener información más detallada sobre la instalación y puesta en marcha del proyecto.

1. **Importar la base de datos:** Para ello, usaremos XAMPP. Necesitamos crear una nueva base de datos llamada **datosjuego** e importar el archivo .sql de la carpeta **Base de Datos**.

2. **Iniciar el Back-End:** En la carpeta **api-REST**, necesitamos buscar el archivo ejecutable **Instalar-Dependencias** e iniciarlo. Terminada la instalación de las dependencias, buscamos el archivo ejecutable **Ejecutar-Servidor** y esperamos a que se inicie. En la ventana que se abrirá se mostrará cuando el servicio esté listo (es importante tener activos los servicios de Apache y MySQL de la aplicación XAMPP para que este servicio se ejecute correctamente).

3. **Ejecutar el juego:** En la carpeta **Juego**, se encuentra el juego de Conquista Matemática. Es necesario buscar el archivo ejecutable **GameRPG** e iniciarlo. Se abrirá una ventana que nos mostrará la dirección en http://localhost:8080/. Copiamos y pegamos esta dirección en un navegador y podremos disfrutar de nuestro juego.

## Modificaciones:
Para realizar modificaciones y continuar con el desarrollo del proyecto, se podrá encontrar el código fuente en la carpeta llamada **Codigo**. Para ejecutarlo, necesitamos:

1. Puede usar su editor de texto favorito para realizar las modificaciones (Visual Studio Code, Sublime Text, etc.). Este ejemplo está basado en el uso de Visual Studio Code.

2. Abra la carpeta **Codigo** con Visual Studio Code. Es necesario abrir la terminal, para ello puede usar el comando ctrl + Mayús + ñ e introducir los siguientes códigos.

3. Instale las dependencias de node para este proyecto.
```
npm install
```
4. En este punto, podrá realizar las modificaciones necesarias. Para ver dichas actualizaciones reflejadas en el juego, tendrá que usar el comando:
```
npm run dev
```
5. El comando anterior ejecutará el juego de manera local. Para abrir la página en su navegador, presione ctrl + clic en la dirección que aparece o ingrese escribiendo en el navegador http://localhost:3000/.

**Para terminar la ejecución del programa, en la consola presione Q o ctrl + c.**

6. Para compilar el proyecto y tenerlo listo para un entorno de producción, se necesita el siguiente comando:
```
npm run build
```


**El resultado de la compilación se alojará en una carpeta generada llamada dist.**

## Después de la compilación:
Una vez generada la carpeta **dist**, es importante tener en cuenta que pueden surgir fallas durante la compilación del proyecto. En este caso particular, los recursos son compilados como URIs y las rutas no son encontradas. Por ende, los errores en la consola del navegador arrojan mensajes como URIs not supported, path not found, source not found, o similares.

Una solución es buscar los recursos dentro de la carpeta src (o donde estén alojados) y colocarlos dentro de la carpeta assets dentro de la carpeta dist (carpeta de compilación común para aplicaciones web). Dentro de los archivos JavaScript compilados, busque las URIs o rutas no encontradas o resueltas y reemplácelas por las rutas correctas, comúnmente será /assets/Nombre_Archivo.extensión.

Para más información lea el archivo **Manual Tecnico - Correcion de Errores de Compilación.pdf**

## Uso del archivo ejecutable:
El archivo ejecutable dentro de la carpeta **Juego**, llamado **GameRPG**, puede ser utilizado en los nuevos cambios o versiones nuevas del juego. Solamente tendremos que copiar el archivo ejecutable y colocarlo en la carpeta donde se ubiquen los archivos compilados con los cambios.

## Sobre el Back-End:
Para la realización de este proyecto, usamos Strapi. Si necesitamos subir la base de datos o la información de la misma en algún servicio web, es importante realizar cambios en el archivo **.env** ubicado en la carpeta de **api-REST**. En dicho archivo, podrá encontrar la información de la base de datos en el apartado **Database** y podrá realizar las modificaciones necesarias de la base de datos. Para más información, vea el README de la carpeta **api-REST** y el documento **Back-End:Strapi**.
