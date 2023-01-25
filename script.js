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



// task 7: create and populate an array to store your image urls. Create three more arrays. One to store your song names, one for the artists, and a last one for the song links.
let imageArray = ["https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.theatlantic.com%2Fculture%2Farchive%2F2022%2F08%2Fsteve-lacy-bad-habit-gemini-rights%2F671166%2F&psig=AOvVaw3zZjt3hkHDjLCUQC-Zk7ld&ust=1674775753465000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCLjhtYHw4_wCFQAAAAAdAAAAABAE", "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftheshaderoom.com%2Fcelebrity-tory-lanez%2F&psig=AOvVaw07ZcSv9JgapiHQFP9nWnsW&ust=1674775791354000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCNDI2JPw4_wCFQAAAAAdAAAAABAE"]
let songNamesArray = ["Bad Habit", "The Color Violet"]
let artistsArray = ["Steve Lacy", "Tory Lanez"]
let songLinksArray = ["https://www.youtube.com/watch?v=VF-FGf_ZZiI", "https://www.youtube.com/watch?v=6HNFGLCaVFI"]




//REFACTOR ARRAYS DAY 
// task 11: comment out the arrays data.
// task 12: create an object for each of your songs.
// task 13: inside each object, add key/value pairs to store the image url, song name, artist, and song link.
// task 14: create an array that stores all of the objects.



//REFACTOR LOOPS DAY 
// task 15: update your `addSongInfo` function so the input values are saved in as values in a new object.
// task 16: update your `.push()` so the input object is added to your array of objects.
// task 17: update your loops based on your new array of objects.





function addSongInfo() {

  // task 9: declare a variable to save the user input of the image url. Declare three more variables that save user input: One for the song names, one for the artists, and a last one for the song links.


  let userInputSongLink = songLink.value;
  let userInputSongName = songName.value;
  let userInputArtist = songArtist.value;
  let userInputImageURL = songImage.value

  // task 10: use `.push()` to add each input value to the correct array.

  imageArray.push(userInputImageURL)
  songNamesArray.push(userInputSongName)
  artistsArray.push(userInputArtist)
  songLinksArray.push(userInputSongLink)


}




/******** this function empties the display divs each time the button is clicked so that your playlist does not repeatedly add the data too many times. Where should this function be placed???********/
// At the end of the add function, so it's ready to be used again
function emptyDisplay() {
  displayImage.innerHTML = "";
  displaySong.innerHTML = "";
  displayArtist.innerHTML = "";
  displayLink.innerHTML = "";
}




function displaySongInfo() {

  // task 8: loop through your images array and display the images to your songs in the correct div. Create three more loops. One for the song names, one for the artists, and a last one for the song links.

  //Images Array
  for (let i = 0; i < imageArray.length; i++) {

    // songImage.src = imageArray[i]
    // <img src= />
    console.log(imageArray[i])
    console.log('images')
    displayImage.insertAdjacentHTML("beforeend", `<img src = ${imageArray[i]}>`)
  }

  //Song Name array
  for (let i = 0; i < songNamesArray.length; i++) {
    console.log('songs')
    console.log(songNamesArray[i])
    displaySong.insertAdjacentHTML("beforeend", `<p>${songNamesArray[i]}</p>`)
  }

  //Song Artist array
  for (let i = 0; i < artistsArray.length; i++) {

  }

  //Song lings array
  for (let i = 0; i < songLinksArray.length; i++) {

  }


}




// click event to add and display songs
addBtn.onclick = function() {
  console.log("hello");
  emptyDisplay();
  addSongInfo();
  displaySongInfo();
};

  // function call to display stored songs
displaySongInfo();
