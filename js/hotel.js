//for hotel registration
var test = {
    hotelname: "marriot",
    room: 350,
    booked: 120,
    display: function(){
        return this.hotelname;
    }
};

console.log(test.hotelname);
console.log(test.room);
console.log(test.booked);

//event
$(function(){
    $('submit').click(reservation);
    $('#lists').click(guestgroup);
});

function reservation(){
    var guest = {
        name: $('#name').val(),
        numberofGuest: $('#num').val(),
        checkin: $('#checkin').val()
    };
    console.log(guest);

    $("p:first").html("thank you for your reservation");
    guestgroup.push(guest);
    console.log(guestgroup);
}
//at this point I feel like I'm missing code.
function displayR(){
    $("form").append("<table>");
    for(var i in displayR){
        var theguest = displayR[i];
        var row = "<tr></tr>"+theguest.name+"<td></td>"+theguest.checkin;
        $("table").append(row);
        
    }
}