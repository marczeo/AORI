<?php
/**
 * The template part for displaying content
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */
?>
<div class="grid-item">
  <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="overlay">
    <header class="entry-header">
      <?php if ( is_sticky() && is_home() && ! is_paged() ) : ?>
        <span class="sticky-post"><?php _e( 'Featured', 'twentysixteen' ); ?></span>
      <?php endif; ?>

      <?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
    </header><!-- .entry-header -->

    <?php twentysixteen_post_thumbnail(); ?>
  </div>
    <?php twentysixteen_excerpt(); ?>
    <div class="entry-footer">
      <?php twentysixteen_entry_meta(); ?>
      <?php
        edit_post_link(
          sprintf(
            /* translators: %s: Name of current post */
            __( 'Edit<span class="screen-reader-text"> "%s"</span>', 'twentysixteen' ),
            get_the_title()
          ),
          '<span class="edit-link">',
          '</span>'
        );
      ?>
    </div><!-- .entry-footer -->
  	<div class="entry-content">
  		<?php
  			/* translators: %s: Name of current post */
        /*
          Se cambió para que pudiese decir "seguir leyendo"
        */
  			the_excerpt( sprintf(
  				__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'twentysixteen' ),
  				get_the_title()
  			) );

  			wp_link_pages( array(
  				'before'      => '<div class="page-links"><span class="page-links-title">' . __( 'Pages:', 'twentysixteen' ) . '</span>',
  				'after'       => '</div>',
  				'link_before' => '<span>',
  				'link_after'  => '</span>',
  				'pagelink'    => '<span class="screen-reader-text">' . __( 'Page', 'twentysixteen' ) . ' </span>%',
  				'separator'   => '<span class="screen-reader-text">, </span>',
  			) );
  		?>
  	</div><!-- .entry-content -->


  </article><!-- #post-## -->
</div>
<script type="text/javascript">
jQuery(document).ready(function (){
  var $grid = jQuery('.grid').imagesLoaded( function() {
  // init Masonry after all images have loaded
  $grid.masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    gutter: 10,
    percentPosition: true
  });
});

});
</script>
