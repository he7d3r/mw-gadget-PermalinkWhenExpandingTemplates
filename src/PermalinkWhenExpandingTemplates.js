/**
 * Add a permanent link to [[Special:ExpandTemplates]]
 * @author: Helder (https://github.com/he7d3r)
 * @license: CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0/>
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $, mw /* , undefined */ ) {
'use strict';

var addPermaLink = function () {
	var param = {
		'wpInput': $('#wpInput').val(),
		'wpContextTitle': $.trim( $('#contexttitle').val() )
	};
	if ($('#removecomments').is(':checked')) {
		param.wpRemoveComments = true;
	}
	if ($('#removenowiki').is(':checked')) {
		param.wpRemoveNowiki = true;
	}
	if ($('#generate_xml').is(':checked')) {
		param.wpGenerateXml = true;
	}
	if ($('#generate_rawhtml').is(':checked')) {
		param.wpGenerateRawHtml = true;
	}
	$('legend').append(' (<a href="' +
		mw.util.getUrl('Special:ExpandTemplates') +
		'?' + $.param(param) +
		'">link permanente para o teste atual</a>)');
};

if (mw.config.get('wgCanonicalSpecialPageName') === 'ExpandTemplates') {
	$(addPermaLink);
}

}( jQuery, mediaWiki ) );