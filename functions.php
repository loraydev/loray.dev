<?php

  // Loading Scripts
  function loreact_scripts() {
    wp_enqueue_style('master', get_template_directory_uri(). "/build/static/css/main.css"); 
    wp_register_script('main', get_template_directory_uri(). "/build/static/js/main.js", '', '1.0', true); 
    wp_enqueue_script('main');
  }
  add_action('wp_enqueue_scripts', 'loreact_scripts');
  
  // ACF Options Pages  
  if ( function_exists( 'acf_add_options_page' ) ) {
    acf_add_options_page(array(
      'page_title'  => 'Navigation Settings',
      'menu_title'  => 'Navigation',
      'menu_slug'   => 'navigation_settings'
    ));
  }

  // SVG Files
  function wpc_mime_types($mimes) {
      $mimes['svg'] = 'image/svg+xml';
        return $mimes;
  }
  add_filter('upload_mimes', 'wpc_mime_types');
