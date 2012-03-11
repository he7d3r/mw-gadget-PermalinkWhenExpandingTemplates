/* Add a permanent link to [[Special:ExpandTemplates]] */
/*global $, mw*/
/*jslint maxlen:80*/

var addPermaLink = function () {
	'use strict';
	var param = {
		'input': $('#input').val()
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