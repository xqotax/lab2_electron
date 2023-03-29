$("#answer").val("");
$(document).ready(function () {
    $('#next').on('click', function () {
        Answers[Index] = $("#answer").val();
        $("#answer").val("");
        if(Index === Questions.length - 1){
            $("#save").css({"display": "flex"});
            $("#next").css({"display": "none"});
            $("#answer").css({"display": "none"});
            $(".poll-row").text("Зберегти дані?");
            return;
        }
        Index++;
        $(".poll-row").text(Questions[Index]);
    });

    $('#onStart').on('click', function () {
        $("#answer").val("");
        $("#next").css({"display": "flex"});
        $("#save").css({"display": "none"});
        $("#answer").css({"display": "flex"});
        Answers = ["","","","",""];;
        Index = 0;
        $(".poll-row").text(Questions[Index]);
    });
    $('#save').on('click', function () {
        $("#next").css({"display": "flex"});
        $("#save").css({"display": "none"});
        $("#answer").css({"display": "flex"});

        const currentDate = new Date();
        const fileName = `${currentDate.toISOString().slice(0, 10)}.txt`;

        let answerText  = "";
        for (let i = 0; i < Questions.length; i++) {
            answerText += `${i+1}: ${Questions[i]} - ${Answers[i]} | `;
        }
        window.Bridge.saveData(answerText);

        // const blob = new Blob([answerText], {type: 'text/plain'});

        // const url = URL.createObjectURL(blob);
        
        // $('<a>', {
        //   href: url,
        //   download: fileName,
        //   click: function() {
        //     URL.revokeObjectURL(url);
        //   }
        // }).appendTo('body')[0].click();
  
        $('#poll').removeClass("selected");
        $('#info').addClass("selected");
        $('#col-content').empty();
        $("#col-content").html(InfoHtml);
        Answers = ["","","","",""];;
        Index = 0;
    });
    
});


