import { useFish } from './FishDataProvider.js'

const allTheFish = useFish();

console.log("all the fish", allTheFish);

for (const fish of allTheFish) {
    console.log("the item is", fish)
}