<?php
  function theme_enqueue_jquery() {
    wp_enqueue_script('jquery');
  }
  add_action('wp_enqueue_script','theme_enqueue_jquery');
  add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
  function theme_enqueue_styles() {
      wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
  }
  function masonry_enqueue_scripts() {
    	wp_register_script('masonry', plugins_url('masonry.pkgd.min.js', __FILE__), array('jquery'),'1.1', true);
      wp_enqueue_script( 'masonry');
  }
  /*Controla la longitud de la previsualización del texto y lo limita a 20 palabras*/
  add_action( 'wp_enqueue_scripts', 'masonry_enqueue_scripts' );
    function new_excerpt_length($length) {
  	return 20;
  }
  add_filter('excerpt_length', 'new_excerpt_length');;
?>
