<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Sixteen
 * @since Twenty Sixteen 1.0
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<?php if ( is_singular() && pings_open( get_queried_object() ) ) : ?>
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	
	<?php endif; ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<div class="site-inner">
		<a class="skip-link screen-reader-text" href="#content"><?php _e( 'Skip to content', 'twentysixteen' ); ?></a>
		
		<div id="navbar">
			<nav class="navbar f-navbar">
				<a id="touch-menu" class="mobile-menu" href="#">Menú <i class="fa fa-bars"></i></a>
				<div class="menu_logo">
					<object type="image/svg+xml" data="/Iconos/logo_nav.svg">Imágen de logo</object>
				</div>
				<div class="element">
					<ul class="menu">
						<li><a href="http://aori.mx/inicio">Inicio</a></li>
            			<li><a href="http://aori.mx/inicio#servicios">Nuestros servicios</a>
                			<ul class="sub-menu">
                    			<li><a href="http://aori.mx/inicio#modelosNegocio">Desarrollo de Modelos de Negocio</a></li>
                    			<li><a href="http://aori.mx/inicio#modelosFranquicia">Desarrollo Franquicias o Sucursales</a></li>
                    			<li><a href="http://aori.mx/inicio#redes">Marketing BTL: redes sociales, google tools y pr</a></li>
                    			<li><a href="http://aori.mx/inicio#apps">App development</a></li>
                    			<li><a href="http://aori.mx/inicio#webDesign">Diseño gráfico y web design</a></li>
                    			<li><a href="http://aori.mx/inicio#inteligenciaFiscal">Inteligencia fiscal y contabilidad</a></li>
                    			<li><a href="http://aori.mx/inicio#importacionExportacion">Importacion/Exportacion y colocación de productos</a></li>
                    			<li><a href="http://aori.mx/inicio#diplomadosCursos">Cursos y diplomados para emprendedores o PYMES</a></li>
                    			<li><a href="http://aori.mx/inicio#incubacionEmpresas">Incubacion y financiamiento de empresas</a></li>
                			</ul>
            			</li>
            			<li><a href="http://aori.mx/unete">únete al equipo</a></li>
            			<li><a href="http://aori.mx/blog">Blog</a></li>
            			<li><a href="http://aori.mx/inicio#contacto">Contacto</a></li>
            			<li><a href="#MX"><span>Español </span><img src="/images/mexico.jpg"></a></li>
            			<li><a href="#USA"><span>English </span><img src="/images/eu.jpg"></a></li>
        			</ul>
        		</div>
    		</nav>
		</div>
		<header id="masthead" class="site-header" role="banner">
			<div class="site-header-main">
				<div class="site-branding">
					<?php twentysixteen_the_custom_logo(); ?>

					<?php if ( is_front_page() && is_home() ) : ?>
						<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<?php else : ?>
						<p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></p>
					<?php endif;

					$description = get_bloginfo( 'description', 'display' );
					if ( $description || is_customize_preview() ) : ?>
						<p class="site-description"><?php echo $description; ?></p>
					<?php endif; ?>
				</div><!-- .site-branding -->

				<?php if ( has_nav_menu( 'primary' ) || has_nav_menu( 'social' ) ) : ?>
					<button id="menu-toggle" class="menu-toggle"><?php _e( 'Menu', 'twentysixteen' ); ?></button>

					<div id="site-header-menu" class="site-header-menu">
						<?php if ( has_nav_menu( 'primary' ) ) : ?>
							<nav id="site-navigation" class="main-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Primary Menu', 'twentysixteen' ); ?>">
								<?php
									wp_nav_menu( array(
										'theme_location' => 'primary',
										'menu_class'     => 'primary-menu',
									 ) );
								?>
							</nav><!-- .main-navigation -->
						<?php endif; ?>

						<?php if ( has_nav_menu( 'social' ) ) : ?>
							<nav id="social-navigation" class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Social Links Menu', 'twentysixteen' ); ?>">
								<?php
									wp_nav_menu( array(
										'theme_location' => 'social',
										'menu_class'     => 'social-links-menu',
										'depth'          => 1,
										'link_before'    => '<span class="screen-reader-text">',
										'link_after'     => '</span>',
									) );
								?>
							</nav><!-- .social-navigation -->
						<?php endif; ?>
					</div><!-- .site-header-menu -->
				<?php endif; ?>
			</div><!-- .site-header-main -->

			<!--ENLACE AL ARCHIVO-->
			<!--<a href="archivo">ARCHIVO</a>-->
			<?php if ( get_header_image() ) : ?>
				<?php
					/**
					 * Filter the default twentysixteen custom header sizes attribute.
					 *
					 * @since Twenty Sixteen 1.0
					 *
					 * @param string $custom_header_sizes sizes attribute
					 * for Custom Header. Default '(max-width: 709px) 85vw,
					 * (max-width: 909px) 81vw, (max-width: 1362px) 88vw, 1200px'.
					 */
					$custom_header_sizes = apply_filters( 'twentysixteen_custom_header_sizes', '(max-width: 709px) 85vw, (max-width: 909px) 81vw, (max-width: 1362px) 88vw, 1200px' );
				?>
				<div class="header-image">
					<a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home">
						<img src="<?php header_image(); ?>" srcset="<?php echo esc_attr( wp_get_attachment_image_srcset( get_custom_header()->attachment_id ) ); ?>" sizes="<?php echo esc_attr( $custom_header_sizes ); ?>" width="<?php echo esc_attr( get_custom_header()->width ); ?>" height="<?php echo esc_attr( get_custom_header()->height ); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>">
					</a>
				</div><!-- .header-image -->
			<?php endif; // End header image check. ?>
		</header><!-- .site-header -->
		<div class="sub-header">
			<span class="flechita"><i class="fa fa-caret-down" aria-hidden="true"></i></span>
		</div>
		<div id="content" class="site-content">
