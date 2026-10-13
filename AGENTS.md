# AGENTS.md
# Instrucciones del proyecto

## Stack

- Next.js (App Router) con TypeScript.
- CSS global (app/globals.css) + Tailwind CSS v4 (utilities puntuales).
- Convención: toda ruta/asset interno debe pasar por withBasePath() de app/lib/base-path.ts (basePath /soff-portfolio en prod).

## Figma (diseno de referencia)

Este proyecto usa el MCP de Figma vía Framelink (`figma-developer-mcp`, local, con
Personal Access Token en la env var `FIGMA_API_KEY`). Es solo lectura: trae
contexto de diseño, no escribe en el canvas.

- Archivo de diseno de referencia: https://www.figma.com/design/dZQ5i3kajfDHwXHK79V4Mt/Porfolio?node-id=0-1&p=f&t=yuM3CN0p75f5VLw5-0

Cuando se pida implementar o ajustar un UI, usa el MCP de Figma para traer el
contexto del frame correspondiente usando el link de arriba como base (cambia el
`node-id` al frame específico que toque). Copia el link desde Figma con click
derecho sobre el frame -> "Copy link to selection".

La evidencia ya descargada del análisis Figma (renders de referencia, portadas y
mapeo de frames) está en `figma-refs/` — leer `figma-refs/EVIDENCIA.md` antes de
tocar UI para no re-fetchear Figma (hay rate limit activo; detalles ahí).

## Objetivos principales

- No retocar componentes ni interfaz preexistente que coincida con el diseño del figma, por ejemplo el navbar, y el concepto de tema claro y oscuro, ni tampoco la animacion del principio, ni el logo del navbar.
- Tomar los aspectos del diseño de figma que no estan presentes en el app actualmente y agregarlos, reformar estructura del proyecto si es necesario.
- Obtener un reflejo de los cambios efectuados en el figma, agregar lo que falta agregar, no retocar innecesariamente lo que ya existe.
- Crear una interfaz responsive.

## Que no hacer

- Agregar dependencias nuevas sin consultar.
- Modificar el diseño del proyecto fuera de lo actual y el figma.
- Utilizar la skill de responsive solo para el diseño de responsive.
- Guardar avances en MEMORY.md.
