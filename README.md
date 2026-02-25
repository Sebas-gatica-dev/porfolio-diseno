This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

# Este instructivo es para vos SOffi

 - si tenes las ganas de levantar este proyecto en tu compu, para verlo y proyectar el diseño...

 Deberias seguir lo sigueintes pasos, es muy sencillo...


 ## Paso 1 instalar Nodejs y Gitbash

 Nodejs te va  a servir para correr javascript y Gitbash te sirve para clonar el codigo en tu compu... (de paso aprendes git, que lo usan todos... diseñadores desarrolladores, tester, etc)

- enlace a descarga de nodejs: **https://nodejs.org/en**
-enlace de descarga a gitbash : **https://git-scm.com/install/windows**

Las instalaciones son sencillas como cualquier programa... tenes qeu darle todo que si nomas

Cuando entres al enlace de gitbash, tenes que instalar el que dice Git for Windows/x64 Setup.

<img width="838" height="112" alt="image" src="https://github.com/user-attachments/assets/c8ed8750-3598-4795-95c7-222e57f8aba5" />

Lo unico que tenes que tener en cuenta en la instalacion es que, te asegures de que el check de open git bash here lo selecciones... eso es util, porque vas a poder abrir cualquier carpeta con la terminal de gitbaash usanod el boton derecho del mouse, te va a aparecer la opcion "open git bash here", podrias clonar cualquier repositorio de codigo dentro de la carpeta seleccionada(igual VSC tiene una terminal integrada)


<img width="913" height="687" alt="Captura de pantalla 2026-02-24 191859" src="https://github.com/user-attachments/assets/774628e7-40f5-4b80-b0cb-d2e6b4bcc2bd" />


perfecto ahora el tema de node js, eso si es darle todo que si, cualquier duda este articulo te lo explica sencillo https://codigofacilito.com/articulos/instalar-nodejs-windows


## Levantar el proyecto de manera local


Una vez tengas eso instalado... tenes que hacer esto es muy sencillo, de hecho te voy a pasar capturas de como yo clono el proyecto...

1- creas un carpeta con el nombre que quieras(ahi va aestar el proyecto)

<img width="1581" height="739" alt="image" src="https://github.com/user-attachments/assets/8ed15d7f-f8e3-4847-89cc-f2d3edb39265" />

si instalaste bine git bash vas a ver esa opcion de open gitbash here, ignorala por el momento, y apreta la opcion abrir en code, y te va a abri la carpeta vacia en visual studio code...

2- abrir el enlace del repositorio y apretar en el boton de copiar cuando esta en la opcion HTTPS

 
<img width="1856" height="787" alt="Captura de pantalla 2026-02-24 192512" src="https://github.com/user-attachments/assets/09f9b9f0-b901-4749-9866-2413c42d39ed" />

3- volver a vsc, vas a File, Open folder y abrir tu carpeta vacia que acabas de crear... una vez ahi apretas crtl + j eso te va  abrir un terminal integrada(podes abrir varias a la vez)

Lo que vas a hacer es abrir otra, pero tenes qeu seleccionar git bash..

<img width="1682" height="677" alt="Captura de pantalla 2026-02-24 193236" src="https://github.com/user-attachments/assets/ac433bc3-7747-4ee9-9122-f6fc69a10e55" />

ahora... esto es muy importante, copias el comando que copias en donde te indique anteriormente que seria este https://github.com/Sebas-gatica-dev/porfolio-diseno.git, pero antes de copiar escribis git clone luego tan solo con apretar el boton derecho dle mouse deberia pegarte la url del repo y luego apretas espacio y escribir un punto, si no haces esto te va a crear una carpeta dentro(con el nombre dle repo porfolio-diseno), pero lo queremos es que clone el codigo dentro de la carpeta en la que estamos para hacer eso escribimos un punto al final...

<img width="1908" height="1012" alt="image" src="https://github.com/user-attachments/assets/a8de3333-c8fa-4710-9f0c-0d3a68b7ff6d" />


deberia verse asi... en ese momento dar enter...y listo ya tendrias el codigo fuente del proyecto..




Primero ejecutar el siguiente comando en consola en la carpeta  una vez o clonado:


Asi deberia verse despues de clonar y luego cuando ejecutas npm i

<img width="1604" height="833" alt="image" src="https://github.com/user-attachments/assets/b6afa998-7042-4a21-ab96-c64a22f4447f" />


```bash
#Para instalar dependencias
npm i 

#despues tiras este comando para levantar el proyecto, y nada mas....

npm run dev



# Para detener el proceso apretar crtl + c
# si lo queres volver a ejecutar volves a apretar npm run dev...
# y si queres despejar la termina ejecutas la palabra clear y se limpia.

```

Otra cosa cuando ejecutes npm run dev, van a aparecer un monton de cosas entre ellas un enlace a localhost:3000 hacele crtl + click y va  abrir automaticamente la app corriendo de local en tu navegador...

Para que lo entiendas visualmente es este enlace


<img width="1834" height="932" alt="image" src="https://github.com/user-attachments/assets/a16709f6-f101-489d-ab8f-8f5a11a53eb1" />


SI llegaste hasta ahi.. abriste el enlace y te llevo a la app en local, dejame felicitarte... porqeu hiciste algo que la mayoria de la gente no puede ah

Abrir [http://localhost:3000](http://localhost:3000) con ctrl + click.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# porfolio-dise-o
