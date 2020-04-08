# Taller Laravel Mix

Puedes consultar la presentación en el [siguiente PDF](taller_laravel_mix.pdf).

## Instrucciones de uso

Este proyecto utiliza [DDEV-Local](https://ddev.readthedocs.io/en/stable/) para levantar un entorno de desarrollo rápido basado en Docker.

Para levantar el proyecto ejecutar los siguientes comandos:

```sh
git clone https://github.com/managume/taller-laravel-mix.git
cd taller-laravel-mix
ddev start
ddev composer install
ddev drush then tailmix -y
ddev drush cr
```

