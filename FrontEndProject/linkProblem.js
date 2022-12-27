
// // link at the end 
// const description1 = "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter. Visit http://forecast.weather.gov/MapClick.php?lat=35.1346&lon=-81.7036#.VhkrZ-xVhBc"

// // link at the beginning 
// const description2 = "http://forecast.weather.gov/MapClick.php?lat=35.1346&lon=-81.7036#.VhkrZ-xVhBc Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter."

// // no link 
// const description3 = "Temperatures for the area range from very hot and humid in the summer to cool and moderate in the winter."

// const result1 = description1.split(/http/);
// console.log(`link at the end: ${result1[0]}`)
// const result2 = description2.split(/http/);
// console.log(`link at the beginning: ${result2}`)
// const result3 = description3.split(/http/);
// console.log(`no link: ${result3[0]}`)



// description length
// longest possible description: length: 387
// const description = "Charles Pinckney was a principal author and signer of the United States Constitution, and went on to be a political leader in South Carolina for over 40 years. The park preserves Snee Farm, one of his plantation properties, where visitors can learn about the politician's influences on Charleston, the African people he enslaved, plantation operations, and the legacy of Pinckney's life."
// const description = 'How far would you travel to find a better life? What if the journey took weeks under difficult conditions? If you answered "Whatever it takes," you echo the feelings of the 12 million immigrants who passed through these now quiet halls from 1892 to 1954. Ellis Island afforded them the opportunity to attain the American dream for themselves and their descendants. Come hear their stories.'
const length = description2.length;
console.log(length)

// const checkDescriptionLength = (str) => {
//     if (str.length > 389) {
//         const str2 = str.slice(0, 389)
//         const str3 = str2 + "..."
//         console.log(str3)
//     } else {
//         const str3 = str
//         console.log(str3)
//     }
// }

// checkDescriptionLength(description)

// space states out 
// str = "NC,SC,WY,NY,CA,FL,OR,HI,GA,FL,AK,CO"
// const addSpace = (str) => {
//     newStr = str.split(',').join(', ');
//     console.log(newStr)
// }

// addSpace(str)