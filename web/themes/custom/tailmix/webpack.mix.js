let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss')

/**
 * Declaramos el directorio assets como nuestro directorio público
 */
mix.setPublicPath('assets');

/**
 * Los archivos JS de desarrollo se compilarán en assets/js/app.js
 */
mix.js('src/js/tailmix.script.js', 'js')

/**
 * Los archivos SCSS de desarrollo se compilarán en assets/css/style.css
 */
mix.sass ('src/sass/tailmix.style.scss', 'css')
  .options({
    processCssUrls: false,
    postCss: [ tailwindcss('tailwind.config.js') ],
  })

/**
 * Desactivamos las notificaciones que Laravel Mix lanza por cada compilación
 */
mix.disableNotifications()

/**
 * Browsersync
 */
mix.browserSync({
  proxy: 'taller-laravel-mix.ddev.site',
  files: ['assets/js/**/*.js', 'assets/css/**/*.css', 'templates/**/*.html.twig'],
  stream: true
})
