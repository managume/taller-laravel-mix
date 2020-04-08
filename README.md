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
ddev import-db -f .ddev/db_backup/taller-laravel-mix.sql.gz
ddev drush cr
```

Puedes hacer login con los siguientes credenciales:

```sh
#user: admin
#password: admin
```
