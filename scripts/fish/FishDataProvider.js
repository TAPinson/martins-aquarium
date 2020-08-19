const fishCollection = [
    {
        givenName: "Buford",
        species: "Male Beta",
        length: "3 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Orange Pants",
        species: "Orange Fish",
        length: "72 inches",
        diet: "Cheetos",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "orangefish.jpg"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: "4.2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "pinkfish.jpg"
    },
    {
        givenName: "Bo",
        species: "Siberian Rainbow Fish",
        length: "2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Siberian Sea",
        image: "yellowbluefish.jpg"
    },
    {
        givenName: "Carlton",
        species: "Male Beta",
        length: "2.7 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Izzie",
        species: "Male Beta",
        length: "3.3 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Samson",
        species: "Peruvian Jam Fish",
        length: "2.4 inches",
        diet: "Fish Kibble",
        harvestLocation: "Peru",
        image: "bluefish.jpg"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: "2.7 inches",            
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "bluefish.jpg"
    },
    {
        givenName: "The Situation",
        species: "New Jersey Gutter Fish",
        length: "3.4 inches",
        diet: "Creatine",
        harvestLocation: "New Jersey",
        image: "bluefish.jpg"
    },
    {
        givenName: "Romeo",
        species: "Catfish",
        length: "8.4 inches",
        diet: "bugs",
        harvestLocation: "Percy Priest Lake",
        image: "bluefish.jpg"
    },
    {
        givenName: "Lance Bass",
        species: "Bass",
        length: "8.1 inches",
        diet: "bugs",
        harvestLocation: "Pond outside of Billys house",
        image: "bluefish.jpg"
    },
    {
        givenName: "Larry",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Curly",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Moe",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Donnie",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "GupGup",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Luigi",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Marth",
        species: "Guppy",
        length: "4.2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Horatio",
        species: "unknown",
        length: "3.1 inches",
        diet: "Diet Fish Kibble",
        harvestLocation: "Pond outside of Billys house",
        image: "bluefish.jpg"
    },
]

// export a function that will return a copy of the priginal array
// this uses the slice method to make the copy
export const useFish = () => {
    return fishCollection.slice()
}