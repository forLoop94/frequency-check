function frequencyFunc(arr, brr, crr, drr) {
  let hashes = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    hashes[key] = 0;
  }

  for (let i = 0; i < brr.length; i++) {
    let key = brr[i];
    hashes[key] += 1;
  }

  for (let i = 0; i < crr.length; i++) {
    let key = crr[i];
    hashes[key] += 1;
  }

  for (let i = 0; i < drr.length; i++) {
    let key = drr[i];
    hashes[key] += 1;
  }
  return hashes;
}

console.log(frequencyFunc([1, 2, 3, 4, 5, 6, 7], [3, 2, 5, 5], [1, 6, 7], [2, 2, 2]));
