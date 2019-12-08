window.onload =
    tocbot.init({
                // Where to render the table of contents.
                tocSelector: '.js-toc',
                // Where to grab the headings to build the table of contents.
                contentSelector: '.js-toc-content',
                // Which headings to grab inside of the contentSelector element.
                headingSelector: 'h3, h4, h5',
                // Class to add to list items.
                extraLinkClasses: 'nav-item',
    });
    console.log(window.screen.width);

window.onresize =
    console.log(window.screen.width);
    console.log(window.availWidth);
