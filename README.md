# airport_dataset_from_csv_to_json
Un simple transformador de csv a json, para los datos obtenidos desde https://www.kaggle.com/yuanyuwendymu/airline-delay-and-cancellation-data-2009-2018?select=2018.csv
***
### Requisistos

Simplemente tener descargado `NODEJs` y tener algún archivo de la página señalada

***
### Ejecución:

Cambiar `exitFileName` por la ruta y el nombre del archivo donde se guardará el resutlado, ejemplo: `2017.json`.


Cambiar `inputFileName` por la ruta y el nombre del archivo a extraer los datos, ejemplo: `../airport/2017.csv`.


Cambiar `charDelimited` por el caracter delimitador del archivo `.csv`, ejemplo: `;` o `,`.

Ejecutar `node index.js`
