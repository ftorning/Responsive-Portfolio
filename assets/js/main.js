$( document ).ready(function() {
    console.log("Ayyyoooo");
   
    $("#btn-submit").click( function() {
        var cname = $("#name").val();
        var cemail = $("#email").val();
        var cmsg = $("#message").val();
        alert("Can't send an email without ajax\n\n" + "\nName = " + cname + "\nEmail = " + cemail + "\nMessage = " + cmsg);
        $("#name").val("");
        $("#email").val("");
        $("#message").val("");
    });
});

