## Decisiones que se tomaron

- Arquitectura modular: Se implementó una arquitectura modular en la que cada módulo cumple con una responsabilidad específica, lo que permite reducir las dependencias entre ellos y facilita el mantenimiento y escalabilidad del sistema.
- Seguridad: Para los endpoints donde se hacia algun tipo de modificacion en la base de datos se agrego autenticacion utilizando jwt.
- Patrón Repository: Para manejar la conexión con la base de datos, se utilizó el patrón Repository. Este enfoque desacopla la lógica de acceso a datos del resto de la aplicación, lo que hace posible cambiar el ORM o incluso la base de datos en el futuro sin realizar modificaciones significativas en el código.
- Patrón Factory: Además, se aplicó un patrón Factory que permite configurar el sistema para que un cambio de base de datos solo requiera ajustar un parámetro. Esto asegura flexibilidad y simplicidad en la adaptación a nuevas tecnologías en el futuro

## Requisitos para la utilizacion del proyecto

- Tener docker instalado

## Pasos para ejecutar el proyecto

1. Clonar el repositorio
2. Instalar las dependencias
3. Levantar la base de datos utilizando docker-compose
4. Ejecutar el proyecto

## Instrucciones para usar la colección

1. Descarga la colección desde [aquí](./mindfactory-challenge_postman-collection.json).
2. Abre Postman y selecciona **Importar** en la esquina superior izquierda.
3. Sube el archivo `mindfactory-challenge_postman-collection.json`.
4. Una vez importada, encontrarás todos los endpoints disponibles organizados en la colección.

## Requisitos para usar la colección

Asegúrate de tener Postman instalado
