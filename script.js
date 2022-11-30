//add current day at the top of the planner.
var element = document.querySelector("#date")

function setTime() {
    $("#date").text(dayjs().format("MMMM-DD-YYYY hh:mm:ss A"))
}
setInterval(setTime, 1000)

//function hour block for past (gray), present (green), or future (red)

function setColors() {
    var currentHour = parseInt(dayjs().format("hh"));

    for (var i = 9; i <= 5; i++) {
        if (i < currentHour) {
            $("#" + "hour-" + i).addClass("past")
        }
        if (i === currentHour) {
            $("#" + "hour-" + i).addClass("present")
        }
        if (i > currentHour) {
            $("#" + "hour-" + i).addClass("future")
        }
    }
}
setColors();


var rowTimeBlock = document.querySelector('.container-lg px-5')

//if save button clicked, set item to local storage
$('.saveBtn').on('click', function () {
    var text = $(this).siblings(".container-lg px-5").text();
    var time = $(this).parent().attr('id');

    localStorage.setItem(time, text);
});

$('#hour9').text(localStorage.getItem('hour9'));
$('#hour10').text(localStorage.getItem('hour10'));
$('#hour11').text(localStorage.getItem('hour11'));
$('#hour12').text(localStorage.getItem('hour12'));
$('#hour1').text(localStorage.getItem('hour1'));
$('#hour2').text(localStorage.getItem('hour2'));
$('#hour3').text(localStorage.getItem('hour3'));
$('#hour4').text(localStorage.getItem('hour4'));
$('#hour5').text(localStorage.getItem('hour5'));
