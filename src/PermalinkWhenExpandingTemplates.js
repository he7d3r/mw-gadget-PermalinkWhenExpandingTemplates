/**
 * Add a permanent link to [[Special:ExpandTemplates]]
 *
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
( function ( mw, $ ) {
	'use strict';

	var addPermaLink = function () {
		var param = {
			wpInput: $( '#input textarea' ).val(),
			wpContextTitle: $.trim( $( '#contexttitle input' ).val() )
		};
		if ( $( '#removecomments input' ).is( ':checked' ) ) {
			param.wpRemoveComments = true;
		}
		if ( $( '#removenowiki input' ).is( ':checked' ) ) {
			param.wpRemoveNowiki = true;
		}
		if ( $( '#generate_xml input' ).is( ':checked' ) ) {
			param.wpGenerateXml = true;
		}
		if ( $( '#generate_rawhtml input' ).is( ':checked' ) ) {
			param.wpGenerateRawHtml = true;
		}
		$( '#ooui-0' ).before( ' (<a href="' +
			mw.util.getUrl( 'Special:ExpandTemplates' ) +
			'?' + $.param( param ) +
			'">link permanente para o teste atual</a>)' );
	};

	if ( mw.config.get( 'wgCanonicalSpecialPageName' ) === 'ExpandTemplates' ) {
		$( addPermaLink );
	}

}( mediaWiki, jQuery ) );
