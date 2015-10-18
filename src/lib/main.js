ScrollHandler = require('./ScrollHandler');

$(document).ready(function() {
	// sh = new ScrollHandler();

    window.spy = new ScrollSpy('#content-main', {
        nav: '.toc > li > a',
        className: 'is-inview'
    });
});
