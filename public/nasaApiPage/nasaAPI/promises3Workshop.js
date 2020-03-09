var api_key = 'vK6COjihiwba4OW8A8y23gBMSrOZ9BPW9SG7NpLQ';
var baseUrl = "https://api.nasa.gov/planetary/apod";

var url = new URL(baseUrl);
console.log(url);
url.searchParams.set('api_key', api_key);

function getAstronomyPictureOfTheDayPromise(selectedDate) {

    console.log(selectedDate)
    if (selectedDate) {
        url.searchParams.set('date', selectedDate);
    }

    return new Promise(function (resolve, reject) {
        fetch(url.href)
            .then(function (response) {
                if (response.status === 200) {
                    resolve(response)
                } else {
                    response.json().then(function (reason) {
                        reject(reason)
                    });
                }
            })
            .catch(function (error) {
                return new Error("Something went wrong! Please try again!")
            })
    })
}

function displayError(error) {
    var errorContainer = document.getElementById("error");
    errorContainer.innerText = "Error: " + JSON.stringify(error);
}

function displayPicture(pictureUrl) {
    var img = document.getElementById("picture");
    img.src = pictureUrl;
}

function displayTitle(pictureTitle, pictureDate) {
    var title = document.getElementById('title');
    var inputDate = document.getElementById("date").value;

    var dateString = inputDate === "" ? "Today's picture: " : "The picture from " + inputDate + " is : ";
    title.innerText = dateString + pictureTitle;
}

function parseResponse(response) {
    return response.json();
}

function showLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.classList.add("show");
}

function hideLoader() {
    var loader = document.getElementsByClassName("loader")[0];
    loader.classList.remove("show");
}

function hideLoaderForSuccess(){
    var img = document.getElementById("picture");
    img.addEventListener("load", hideLoader);
    img.addEventListener("error", function(){
        displayError();
        hideLoader();
    });
}

function getTodaysPicture() {
    showLoader();
    getAstronomyPictureOfTheDayPromise()
        .then(parseResponse)
        .then(
            function (response) {
                displayPicture(response.url);
                displayTitle(response.title);
                hideLoaderForSuccess();
            }
            //, function (error) {
            //     displayError(error);
            // }
        )
        .catch(function (error) {
            displayError(error);
            hideLoader();
        })
        // .finally(hideLoader)
}

function getSelectedDayPicture() {

    var input = document.getElementById("date").value;
    console.log("Input is: " + input);

    showLoader();
    getAstronomyPictureOfTheDayPromise(input)
        .then(parseResponse)
        .then(
            function (response) {
                displayPicture(response.url);
                displayTitle(response.title);
                hideLoaderForSuccess();

                var errorContainer = document.getElementById("error");
                errorContainer.innerText = "";
            }
        )
        .catch(function (error) {
            displayError(error);
            hideLoader();
        })
        // .finally(hideLoader);
}


window.addEventListener('DOMContentLoaded', getTodaysPicture);

var btnPhotoOfTheDay = document.getElementById("btn");
console.log(btnPhotoOfTheDay);
btnPhotoOfTheDay.addEventListener("click", getSelectedDayPicture);