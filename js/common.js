let Questions = ["Q1", "Q2", "Q3", "Q4", "Q5"];
let Answers = ["","","","",""];
let Index = 0;
let InfoHtml = "";
let PollHtml = "";

$(document).ready(function () {
    $.get('content/info.html', function(fileContent) {
        $("#col-content").html(fileContent);
        InfoHtml = fileContent;
    });

    $.get('content/poll.html', function(fileContent) {
        PollHtml = fileContent;
    });

    $('#info').on('click', function () {
        $("#next").css({"display": "flex"});
        $("#save").css({"display": "none"});
        $("#answer").css({"display": "flex"});
        $('#poll').removeClass("selected");
        $('#info').addClass("selected");
        $('#col-content').empty();
        $("#col-content").html(InfoHtml);
        Answers = ["","","","",""];;
        Index = 0;
    });

    $('#poll').on('click', function () {
        $("#next").css({"display": "flex"});
        $("#save").css({"display": "none"});
        $("#answer").css({"display": "flex"});
        $('#info').removeClass("selected");
        $('#poll').addClass("selected");
        $('#col-content').empty();
        $("#col-content").html(PollHtml);
        Answers = ["","","","",""];;
        Index = 0;
    });
});



