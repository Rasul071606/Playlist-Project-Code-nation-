// task 5: read through the JavaScript starter code to determine where each given function is declared and where each given function is called.
// input variables
let songImage = document.querySelector(".image");
let songName = document.querySelector(".song-name");
let songArtist = document.querySelector(".artist");
let songLink = document.querySelector(".song-link");

// button variable
let addBtn = document.querySelector(".add");


// task 6: declare variables for your display divs: the image url, song name, artist, and song link. Go back to the HTML to check that you are using the correct class names.
let display = document.querySelector(".display");
let displaySong = document.querySelector(".display-song");
let displayArtist = document.querySelector(".display-artist");
let displayImage = document.querySelector(".display-image");
let displayLink = document.querySelector(".display-link");


//Storing a count so that I can append this value to my object
let count = 0;

// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.


//Commented out arrays
// let imageArray = ["https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2022/07/PRESS-1.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Tory_Lanez_2500x1669.jpg/800px-Tory_Lanez_2500x1669.jpg"]
// let songNamesArray = ["Bad Habit", "The Color Violet"]
// let artistsArray = ["Steve Lacy", "Tory Lanez"]
// let songLinksArray = ["https://www.youtube.com/watch?v=VF-FGf_ZZiI", "https://www.youtube.com/watch?v=6HNFGLCaVFI"]


//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.

//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.

// const Obj = {};
// Obj.name = 'Rasul';
// console.log('Obj:', Obj);

//Declaring an object
let song1 = {
    image: "<img src = https://cdn.smehost.net/rcarecordscom-usrcaprod/wp-content/uploads/2022/07/PRESS-1.jpg>",
    artistName: "<p> Steve Lacy </p> ",
    songName: "<p> Bad Habits </p> ",
    songLink: "<a href = https://www.youtube.com/watch?v=VF-FGf_ZZiI> Click here for Bad Habits</p>"
}

//Fixing object
//total number of songs on the list means the highest number will be the total number - 1 (0 index)
//key: [image, artistName, songName, songLink]




let playListArr = [song1]
console.log(playListArr)

function addSongInfo() {
    // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.
    //This is getting us the values in the boxes
    let userInputSongLink = songLink.value;
    let userInputSongName = songName.value;
    let userInputArtist = songArtist.value;
    let userInputImageURL = songImage.value;

    if(songLink.value == ''||songName.value == '' || songArtist.value == '' || songLink.value == ''){
        alert("Please enter information in the empty boxes")
    }
    else{
        // task 10: use `.push()` to add each input value to the correct array.
        //Objects pushing new values
        let obj = {
            image: `<img src = ${userInputImageURL}>`,
            songName: `<p>${userInputSongName}</p>`,
            artistName: `<p>${userInputArtist}</p>`,
            songLink: `<a href = ${userInputSongLink}>Click here for ${userInputSongName}</p>`
        }

    playListArr.push(obj)
    console.log(obj)
    console.log(playListArr)
    }
    
    
}


//Right when you click add, this will delete all the information in the boxes so it can be used again
function emptyDisplay() {
    displayImage.innerHTML = "";
    displaySong.innerHTML = "";
    displayArtist.innerHTML = "";
    displayLink.innerHTML = "";
}


function displaySongInfo() {
    // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.


    playListArr.forEach(element => {
        for (const key in element) {
            // console.log(element[key])
            if (key == "image") {
                displayImage.insertAdjacentHTML("beforeend", element[key])
            }
            else if (key == "artistName") {
                displayArtist.insertAdjacentHTML("beforeend", element[key])
            }
            else if (key == "songName") {
                displaySong.insertAdjacentHTML("beforeend", element[key])
            }
            else if (key == "songLink") {
                displayLink.insertAdjacentHTML("beforeend", element[key])
            }
    }
    })

}


// click event to add and display songs
addBtn.onclick = function() {
    console.log("hello");
    addSongInfo();
    emptyDisplay();
    displaySongInfo();
};

// function call to display stored songs
displaySongInfo();



//Works perfectly besides one problem. Whenever you put in a new person, it deletes the old things entirely