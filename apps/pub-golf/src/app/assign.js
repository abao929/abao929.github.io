const fs = require('fs')
const path = require('path')

// Path to your gallery folder
const galleryDir = path.join(__dirname, '../../public/images/gallery')

// Read all image files in the directory
const files = fs
  .readdirSync(galleryDir)
  .filter((file) => /\.(jpe?g|png|gif|webp)$/i.test(file))

// Shuffle function (Fisher-Yates)
function shuffle(array) {
  let m = array.length,
    t,
    i
  while (m) {
    i = Math.floor(Math.random() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}

// Generate numbers 1 to X and shuffle
const numbers = shuffle([...Array(files.length)].map((_, i) => i + 1))

// Assign each file a random number and prepare temp/final paths
const assignments = files.map((file, idx) => ({
  oldPath: path.join(galleryDir, file),
  tempPath: path.join(galleryDir, `temp_${numbers[idx]}.jpeg`),
  newPath: path.join(galleryDir, `${numbers[idx]}.jpeg`),
}))

// First, rename all files to a temporary name to avoid conflicts
assignments.forEach(({ oldPath, tempPath }) => {
  fs.renameSync(oldPath, tempPath)
})

// Then, rename from temporary name to final name
assignments.forEach(({ tempPath, newPath }) => {
  fs.renameSync(tempPath, newPath)
})

console.log('Renaming complete!')

// Optionally, write to a JSON file
// fs.writeFileSync('gallery-assignments.json', JSON.stringify(assignments, null, 2));
