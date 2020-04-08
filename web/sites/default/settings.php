<?php

if (file_exists($app_root . '/' . $site_path . '/settings.local.php')){
  include $app_root . '/' . $site_path . '/settings.local.php';
}
if (file_exists($app_root . '/' . $site_path . '/settings.ddev.php') && getenv('IS_DDEV_PROJECT') == 'true') {
  include $app_root . '/' . $site_path . '/settings.ddev.php';
}
