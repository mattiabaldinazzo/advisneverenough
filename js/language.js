
function langChange(lang, tag) {
	var tagname = typeof tag !== 'undefined' ? tag : 'span';
	var elements = document.body.getElementsByTagName(tagname);
	for (var i = 0; i < elements.length; i++) {
		if (typeof elements[i].lang !== 'undefined') {
			if (typeof elements[i].lang === 'string' && elements[i].lang.length > 0) {
				if (elements[i].lang == lang) elements[i].style.display = 'inline';
				else elements[i].style.display = 'none';
			}
		}
	}
}
