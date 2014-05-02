(function () {
    var api = "http://api.openweathermap.org/data/2.5/";

    // create a variable on the window to hold all of our custom code
    window.app = {};

    // get a random joke by category
    var getRandomJoke = function (category, viewModel) {
        $.get(api + "weather?q=Caracas,ve&type=" + category, function (data) {
            // update the view model
            viewModel.set("joke", data.name);
        });
    };

    // create a funny model to encapsulate all of the logic needed for the funny jokes view
    window.app.funny = (function () {

        // create a view model which we can bind to the HTML
        var viewModel = kendo.observable({
            joke: null,
            refresh: function () {
                getRandomJoke("funny", this)
            }
        });

        // anything that is returned out of this function will be avaialble
        // on window.app.funny
        return {
            getRandomJoke: function () {
                // call the random joke method passing in the category and viewmodel to be updated
                getRandomJoke("funny", viewModel);
            },
            viewModel: viewModel
        }

    }());

    // create a nerdyModel to encapsulate all of the logic needed for the nerdy jokes view
    window.app.nerdy = (function () {

        // create a view model which we can bind to the HTML
        var viewModel = kendo.observable({
            joke: null,
            refresh: function () {
                getRandomJoke("nerdy", this)
            }
        });

        // anything that is returned out of this function will be avaialble
        // on window.app.nerdy
        return {
            getRandomJoke: function () {
                // call the random joke method passing in the category and viewmodel to be updated
                getRandomJoke("nerdy", viewModel);
            },
            viewModel: viewModel
        }

    }());

    // create a new kendo ui mobile app using the whole page
    new kendo.mobile.Application(document.body, { transition: "slide" });

}());