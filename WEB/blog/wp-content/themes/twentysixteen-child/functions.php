<?php
  function theme_enqueue_jquery() {
    wp_enqueue_script('jquery');
  }
  add_action('wp_enqueue_script','theme_enqueue_jquery');
  add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
  function theme_enqueue_styles() {
      wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
  }
  function fontawesome_enqueue_styles() {
      wp_enqueue_style( 'fontawesome', '/wp-content/themes/twentysixteen-child/fontawesome/css/font-awesome.css' );
  }
  add_action( 'wp_enqueue_scripts', 'fontawesome_enqueue_styles' );


  function masonry_enqueue_scripts() {
    	wp_register_script('masonry', plugins_url('masonry.pkgd.min.js', __FILE__), array('jquery'),'1.1', true);
      wp_enqueue_script( 'masonry');
  }
  /*Controla la longitud de la previsualización del texto y lo limita a 20 palabras*/
  add_action( 'wp_enqueue_scripts', 'masonry_enqueue_scripts' );
    function new_excerpt_length($length) {
  	return 10;
  }
  add_filter('excerpt_length', 'new_excerpt_length');

  add_action('wp_enqueue_scripts', 'navbar_enqueue_scripts' );
  function navbar_enqueue_scripts() {
      wp_register_script('navbar', '/wp-content/themes/twentysixteen-child/js/navbar.js',array(),false,true);
      wp_enqueue_script( 'navbar');
  }
  
  add_action( 'wp_enqueue_scripts', 'wd_enqueue_lazyload' );
  function wd_enqueue_lazyload() {
    wp_enqueue_script( 'jquery-lazyload', '/wp-content/themes/twentysixteen-child/js/jquery.lazyload.js', array('jquery'), '1.9.3', true );
  }

/* @param string/integer $no_comments
 * @param string/integer $comment_len
 * @param string/integer $avatar_size
 * 
 * @echo string $comm
 */
function bg_recent_comments($no_comments = 5, $comment_len = 80, $avatar_size = 48) {
  $comments_query = new WP_Comment_Query();
  $comments = $comments_query->query( array( 'number' => $no_comments ) );
  $comm = '';
  if ( $comments ) : foreach ( $comments as $comment ) :
    $comm .= '<li><a class="author" href="' . get_permalink( $comment->comment_post_ID ) . '#comment-' . $comment->comment_ID . '">';
    $comm .= get_avatar( $comment->comment_author_email, $avatar_size );
    $comm .= get_comment_author( $comment->comment_ID ) . ':</a> ';
    $comm .= '<p>' . strip_tags( substr( apply_filters( 'get_comment_text', $comment->comment_content ), 0, $comment_len ) ) . '...</p></li>';
  endforeach; else :
    $comm .= 'No comments.';
  endif;
  echo $comm; 
}
    
?>
