(function () {
	var elems = document.getElementsByTagName('a');
	for (var i = 0; i < elems.length; i++) {
		var a = elems[i];
		if (a.href.indexOf('https://www.bol.com/') === 0) {
			a.onclick = function () {
				this.href = 'https://partnerprogramma.bol.com/click/click?p=1&t=url&s=40062&url=' + encodeURIComponent(this.href) + '&f=TXL&name=ScriptieSchrijven';
			};
		}
	}
})();
