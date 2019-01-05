$(document).ready(function() {
    var topics = [];
    var giphyApiKey = "2v55AyY7Y7729IeqPx6P0jAIbx1iv3pb"
    
    function showEntertainment() {
        var names = $(this).data("look");
        console.log(names);
        
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + names + "&api_key=2v55AyY7Y7729IeqPx6P0jAIbx1iv3pb&limit=10";
        
        console.log(queryURL);
        
        $.ajax({
            url: queryURL,
            method: "GET"
        }).done(function(response) {
            var answers = response.data;
            console.log(answers);
            for (var i = 0; i < answers.length; i++) {
                
                var displayDivs = $("<div class='col-xl-12'>");
                var rating = answers[i].rating;
                var normalGiphs = answers[i].images.fixed_height.url;
                var fixed = answers[i].images.fixed_height_still.url;
                var displayImages = $("<img>");
                var input = $("<h4>").text("Rating: " + rating);
                
                displayImages.attr("src", fixed);
                displayImages.addClass("entertainmentGiphys");
                displayImages.attr("entertainFirst", "game"); 
                displayImages.attr("entertainSecond", fixed); 
                displayImages.attr("entertainGiph", normalGiphs);  
                
                displayDivs.append(input);
                displayDivs.append(displayImages);
                $("#locatedGif").prepend(displayDivs);
            }
        });
    }

    $("#appendEntertainment").on("click", function(match) {
        match.preventDefault();
        
        var array = $("#entertainmentUnit").val().trim();
        topics.push(array);
        console.log(topics);
        $("#entertainmentUnit").val('');
        myButtons();
    });

    function myButtons() {
        $("#madeupButtons").empty();
        for (var i = 0; i < topics.length; i++) {
            var gifButtons = $('<button class="btn btn-warning">');
            gifButtons .attr("id", "data");
            gifButtons.attr("data-look", topics[i]);
            gifButtons.text(topics[i]);
            $("#madeupButtons").append(gifButtons);
        }
    }

    myButtons();
    
    $(document).on("click", "#data", showEntertainment);
    $(document).on("click", ".entertainmentGiphys", playandPausegiphys);

    function playandPausegiphys() {
        var finalInputs = $(this).attr("entertainFirst");
        if (finalInputs === "game") {
            $(this).attr("src", $(this).attr("entertainGiph"));
            $(this).attr("entertainFirst", "entertain");
        } 
        else {
            $(this).attr("src", $(this).attr("entertainSecond"));
            $(this).attr("entertainFirst", "game");
        }
    }
});

