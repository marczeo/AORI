<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'db622473816');

/** MySQL database username */
define('DB_USER', 'dbo622473816');

/** MySQL database password */
define('DB_PASSWORD', '1QaZ2WsX');

/** MySQL hostname */
define('DB_HOST', 'db622473816.db.1and1.com');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'vQge$ZRF:6xoN&5a)RS(Iim+bbHy_H)Aj!;FBY(4opX0@@Jr4oQz+lQ/!s`1CKF`');
define('SECURE_AUTH_KEY',  'O| j A&GM7IKb]^}&!0vu4;*lGil}I8Y,Zbh6|3(-):4c/Ku{7D~22}ZEjU_0f^|');
define('LOGGED_IN_KEY',    'vSghh;uH<}JK,Zkdo[={]F|t.m|bYn9G7l>tn.x32i:l2~M58Q$<%+mp[Rz|$AjD');
define('NONCE_KEY',        '|$x*P|`+/l~2.7w=9`]>fX~uB.|jWgra[~LFc+OCD!kJ9_x->Z~d0a}EYfMMx/rR');
define('AUTH_SALT',        'er)LuNcC/tcSpl*c0-k7UVQdYCvyjMI$FBa5j>lt@x_vidX/Ae%w[Y<fbObRR4]&');
define('SECURE_AUTH_SALT', '4jJQ*H0ixFifmuKry78IIK7ZX@wXYJ$oQ]ZTbPezCoDB<55Ld8}#~..Ws#Wns=u*');
define('LOGGED_IN_SALT',   'R^:)k<|DUDUnc%%9zY7w^=$m0b^-:1j|fi6oMo|fM:?~t+7FX<BkX8ht-:A^wi-+');
define('NONCE_SALT',       '$sR>r<CD`kfr[kSz$+.#k%fN7z)Bk5sAODstO%NE;XK>9ork_N~JIwI+QzMD!7iE');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
