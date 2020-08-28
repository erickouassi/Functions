# Protect wordpress against malicious URL requests<br />
This snippet is great for the security to protect wordpress against malicious URL requests. <br />
Credit link [here](https://wp-snippet.com/snippets/protect-wordpress-against-malicious-url-requests/)

Instructions<br />
Add this to your functions.php file.
```
global $user_ID; if($user_ID) {
 if(!current_user_can('administrator')) {
 if (strlen($_SERVER['REQUEST_URI']) > 255 ||
 stripos($_SERVER['REQUEST_URI'], "eval(") ||
 stripos($_SERVER['REQUEST_URI'], "CONCAT") ||
 stripos($_SERVER['REQUEST_URI'], "UNION+SELECT") ||
 stripos($_SERVER['REQUEST_URI'], "base64")) {
 @header("HTTP/1.1 414 Request-URI Too Long");
 @header("Status: 414 Request-URI Too Long");
 @header("Connection: Close");
 @exit;
 }
 }
}
```

#Change any WordPress Text on your entire site   <br />
Credit link [here](https://www.wpfixit.com/change-any-wordpress-text-on-entire-site/) <br/>

```
/* Change Text Site Wide */

function wpfi_change_text1( $translated_text ) {
	if ( $translated_text == '  SVP' ) {
		$translated_text = 'Deja abonné';
	}
	return $translated_text;
}
add_filter( 'gettext', 'wpfi_change_text1', 20 );

```
