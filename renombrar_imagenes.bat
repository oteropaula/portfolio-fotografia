@echo off
setlocal enabledelayedexpansion

:: ruta de la carpeta donde están las imágenes (ir cambiándola para cada carpeta)
set carpeta=C:\Users\paula\Documents\PORTFOLIOFOTOGRAFICO\imagenes\deporte

:: Contador de imágenes
set contador=1

:: Recorremos todos los archivos .jpg de la carpeta
for %%f in (%carpeta%\*.jpg) do (
    :: Renombra cada archivo con image1.jpg, image2.jpg, ...
    ren "%%f" "image!contador!.jpg"
    set /a contador+=1
    if !contador! GTR 14 goto fin
)

echo Las imágenes han sido renombradas correctamente!
pause
