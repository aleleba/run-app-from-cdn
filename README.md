# README.md

# Run App From CDN

Esta es una aplicación sencilla construida con Express que sirve cualquier aplicación a través de un enlace CDN. Utiliza `dotenv` para leer la URL del enlace como variable de entorno.

## Requisitos

- Node.js
- npm

## Instalación

1. Clona el repositorio:

   ```
   git clone <URL_DEL_REPOSITORIO>
   ```

2. Navega al directorio del proyecto:

   ```
   cd run-app-from-cdn
   ```

3. Instala las dependencias:

   ```
   npm install
   ```

4. Crea un archivo `.env` en la raíz del proyecto y añade la URL del enlace CDN:

   ```
   CDN_URL=<TU_URL_CDN>
   ```

## Ejecución

Para ejecutar la aplicación, utiliza el siguiente comando:

```
npm start
```

La aplicación estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- `src/app.ts`: Punto de entrada de la aplicación.
- `src/types/index.ts`: Definiciones de tipos personalizados.
- `.env`: Variables de entorno.
- `tsconfig.json`: Configuración de TypeScript.
- `package.json`: Configuración de npm.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor abre un issue o envía un pull request.