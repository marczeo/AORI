<?php
/*
  Template Name: Archives
*/
get_header(); ?>
<div >
	<div id="archive-container">
		<div id="archive-content" role="main">

			<h1 class="entry-title"><?php the_title(); ?></h1>

			<?php get_search_form(); ?>

			<h2>Publicaciones por mes:</h2>
			<ul class="post-mes">
				<?php wp_get_archives('type=monthly'); ?>
			</ul>

			<h2>Publicaciones por categoria:</h2>
			<ul class="post-categoria">
				 <?php wp_list_categories(); ?>
			</ul>

		</div><!-- #content -->
	</div><!-- #container -->
</div>

<?php get_footer(); ?>
