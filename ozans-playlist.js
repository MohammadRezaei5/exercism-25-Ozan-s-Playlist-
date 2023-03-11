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
