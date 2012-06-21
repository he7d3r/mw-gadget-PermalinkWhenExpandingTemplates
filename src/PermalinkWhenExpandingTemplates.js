/**
 * Add a permanent link to [[Special:ExpandTemplates]]
 * @author: [[User:Helder.wiki]]
 * @tracking: [[Special:GlobalUsage/User:Helder.wiki/Tools/PermalinkWhenExpandingTemplates.js]] ([[File:User:Helder.wiki/Tools/PermalinkWhenExpandingTemplates.js]])
 */
/*jslint browser: true, white: true*/
/*global jQuery, mediaWiki */
( function ( $, mw /* , undefined */ ) {
'use strict';

var addPermaLink = function () {
	var param = {
		'input': $('#input').val(),
		'contexttitle': $.trim( $('#contexttitle').val() )
	};
	if ($('#removecomments').is(':checked')) {
		param.removecomments = true;
	}
	if ($('#removenowiki').is(':checked')) {
		param.removenowiki = true;
	}
	if ($('#generate_xml').is(':checked')) {
		param.generate_xml = true;
	}
	$('legend').append(' (<a href="' +
		mw.util.wikiGetlink('Special:ExpandTemplates') +
		'?' + $.param(param) +
		'">link permanente para o teste atual</a>)');
};

if (mw.config.get('wgCanonicalSpecialPageName') === 'ExpandTemplates') {
	$(addPermaLink);
}

}( jQuery, mediaWiki ) );