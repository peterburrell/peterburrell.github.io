(function() {
    "use strict";

    var originalTitle = document.title;

    function updateTitle() {
        var alternateTitle = "I love 🍩s!",
            currentTitle = document.title;

        document.title = currentTitle === originalTitle ? 
            alternateTitle : 
            originalTitle;

        window.setTimeout(updateTitle, 5000);
    }

    //window.setTimeout(updateTitle, 5000);
})();