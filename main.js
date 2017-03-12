function bookSearch() {
    // store user input
    var search = document.getElementById("searchInput").value
    // remove  previously strored  data
    document.getElementById("searchResults").innerHTML = ""

    // make a data request to api url
    $.ajax({
        // url for database
        url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
        dataType: "json",
        type: 'GET',
        // on success, execute this
        success: function(data) {
            console.log(data)
            // loop through data in data.items
            for (var i = 0; i < data.items.length; i++) {
                // store current books volume info
                var hdata = data.items[i].volumeInfo

                // create elements
                var container = document.createElement('div');
                var dp = document.createElement('img')
                var bookName = document.createElement('h2');
                var bookAuth = document.createElement('h3');
                var year = document.createElement('h4')
                var moreInfo = document.createElement('a');

                // add classes to elements
                container.className = 'col-sm-12 col-md-8 col-md-offset-2 item jumbotron clearfix'

                moreInfo.className = 'btn btn-danger btn-lg'

                // add text to tags
                bookName.innerText = hdata.title
                moreInfo.innerText = 'see more'

                // add href
                moreInfo.href = hdata.infoLink
                // set target
                moreInfo.setAttribute('target', '_blank');

                // create image if one exists
                if (hdata.imageLinks) {
                    dp.src = hdata.imageLinks.thumbnail
                } else {
                    dp.src = 'noCover.jpg'
                }

                // create publish date if one exists
                if (hdata.publishedDate) {
                    year.innerText = hdata.publishedDate
                } else {
                    year.innerText = 'no publish date found'
                }

                // create author if one exists
                if (hdata.authors) {
                    bookAuth.innerText = hdata.authors[0]
                } else {
                    bookAuth.innerText = "author's name not available"
                }

                // add tags to document
                container.appendChild(dp)
                container.appendChild(bookName)
                container.appendChild(bookAuth)
                container.appendChild(year)
                container.appendChild(moreInfo)

                // add results to the screen
                var results = document.getElementById("searchResults")
                results.appendChild(container)
            }
        }




    })





};








document.getElementById('button').addEventListener('click', bookSearch, false)










// It's not the most DRY code but I tried my best to add the features with minimalistic look, thanks
