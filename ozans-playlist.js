// look back, read more ...

// const playlist = [
//   "Court and Spark - Joni Mitchell",
//   "Big Yellow Taxi - Joni Mitchell",
//   "Court and Spark - Joni Mitchell"
// ];

function removeDuplicates(playlist) {
  return Array.from(new Set(playlist));
}

// console.log(removeDuplicates(playlist));

///---///

// const playlist = [
//   "The Fashion Show - Grace Jones",
//   "Dr. Funkenstein - Parliament"
// ];

function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

// console.log(hasTrack(playlist, "Dr. Funkenstein - Parliament"));
// console.log(hasTrack(playlist, "Walking in the Rain - Grace Jones"));

///---///

// const playlist = ["Selma - Bijelo Dugme"];

function addTrack(playlist, track) {
  playlist = new Set(playlist);
  playlist.add(track);
  return Array.from(playlist);
}

// console.log(addTrack(playlist, "Atomic Dog - George Clinton"));
// console.log(addTrack(playlist, "Selma - Bijelo Dugme"));

///---///

// const playlist = [
//   "The Treasure - Fra Lippo Lippi",
//   "After the Fall - Klaus Nomi"
// ];

function deleteTrack(playlist, track) {
  playlist = new Set(playlist);
  playlist.delete(track);
  return Array.from(playlist);
}

// console.log(deleteTrack(playlist, "The Treasure - Fra Lippo Lippi"));
// console.log(deleteTrack(playlist, "I Feel the Magic - Belinda Carlisle"));
