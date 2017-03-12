function generateQuote() {
    $.ajax({
      // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=famous', 
        type: 'POST', // The HTTP Method
        data: {}, // Additional parameters here
        datatype: 'json',
        success: function(data) {
            quote = JSON.parse(data);
            $('.quote').html('&quot;' + quote.quote + '&quot;');
            $('.author').html('-= ' + quote.author + ' =-');
        },
        error: function(err) {
            console.log(err);
        },
        beforeSend: function(xhr) {
          // Enter here your Mashape key

            xhr.setRequestHeader("X-Mashape-Authorization", "c3Ylhc7ZXbmshY1lb0rYQRiRmLX9p1sJqiYjsnToJMCxt3XNhP");         }
    });
};
setInterval(function() {
    $(document).ready(function() {
        var quote;

        generateQuote();



        $('.quoteButton').load(function(event) {
            generateQuote();
        });


    });
}, 15000);
