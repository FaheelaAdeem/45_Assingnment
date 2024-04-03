"use strict";
function make_album(artist, titel, tracks) {
    const album = {
        artist: artist,
        titel: titel
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
const album1 = make_album('Artist 1', 'Album titel 1');
console.log(album1);
const album2 = make_album('Artist 2', 'Album titel 2');
console.log(album2);
const album3 = make_album('Artist 3', 'Album titel 3', 12);
console.log(album3);
