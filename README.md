# Listado de Artículos

Este proyecto es una aplicación web que permite visualizar un listado de artículos de internet. Los usuarios pueden navegar a través de una serie de artículos, cada uno con una imagen, título, y descripción. La aplicación también incluye un encabezado que permite cambiar el tema de la página, ofreciendo una experiencia personalizada y adaptable a las preferencias del usuario.

## Características

- **Listado de Artículos**: Muestra una lista de artículos con detalles como imagen, título, autor y descripción.
- **Cambio de Tema**: Permite a los usuarios cambiar el tema de la página a través del encabezado para una experiencia visual personalizada.
- **Interactividad**: Los usuarios pueden hacer clic en un artículo para ser redirigidos al enlace del artículo original.


## Requisitos

Antes de ejecutar este proyecto, asegúrate de tener las siguientes herramientas instaladas:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Comandos de Ejecución
Para ejecutar el proyecto en modo desarrollo, necesitarás el siguiente comando:
npm run start-app-dev
Este comando inicia tanto el backend como el frontend en modo desarrollo.
Para iniciar en modo producción, necesitarás el siguiente comando:
Desarrollo Backend: npm run start-back
Desarrollo Frontend: npm run start-client-dev

## Configuración

Para correr este proyecto, necesitas configurar la variable de entorno `MONGODB_URI`. Puedes hacerlo creando un archivo `.env` en la raíz del proyecto backend con el siguiente contenido:

```env
MONGODB_URI= "URL base de datos mongo";