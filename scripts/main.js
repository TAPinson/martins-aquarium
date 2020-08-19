// import useFish from a seperate js page. Location is relative to the location of this page.
import { useFish } from './FishDataProvider.js'

// This will give the result of useFish as the variable allTheFish
const allTheFish = useFish();
console.log("all the fish", allTheFish);

// Loop through allTheFish and log to the console
for (const fish of allTheFish) {
    console.log("the item is", fish)
}