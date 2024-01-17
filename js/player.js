let myAlbums = [
    'Operation Ivy : Energy',
    'Blink 182 : Dude Ranch',
    'New Found Glory : Sticks and Stones',
    'The Off Season : J. Cole',
    'Chilombo : Jhene Aiko'
]

const dropdown = document.getElementById('songs');
document.addEventListener('DOMContentLoaded', function () {
    for(let i = 0; i < myAlbums.length; i++) {
        let option = document.createElement('option');
        option.text = myAlbums[i];
        option.value = myAlbums[i];
        dropdown.appendChild(option);
    }
})


class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}

let jbox = new Jukebox()
for (let i = 0; i < myAlbums.length; i++) {
    let [artist, title] = myAlbums[i].split(' : ');
    let album = new Album(artist, title);
    jbox.addAlbum(album);
}

let playButton = document.getElementById('playBtn');

playButton.addEventListener('click', function() {
    console.log('button pressed')
    let selection = dropdown.value;
    let selectedAlbum = jbox.albums.find(album => `${album.artist} : ${album.title}` === selection)
    if (selectedAlbum) {
        selectedAlbum.play();
        console.log(`${selection} was played.`)
        console.log(jbox);
    }
})

let faveButton = document.getElementById('faveBtn');

faveButton.addEventListener('click', function() {
    let faveAlbum = jbox.favoriteAlbum();
    document.getElementById('favoriteAlbum').innerHTML = `Your favorite album is: ${faveAlbum}`;
})














// const album1 = new Album('Operation Ivy', 'Energy')
// const album2 = new Album('Blink 182', 'Dude Ranch')
// const album3 = new Album('New Found Glory', 'Sticks and Stones')

// jbox.addAlbum(album1)
// jbox.addAlbum(album2)
// jbox.addAlbum(album3)

// album1.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album2.play()
// album3.play()

// console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)