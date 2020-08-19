const fishCollection = [
    {
        givenName: "Buford",
        species: "Male Beta",
        length: "3 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet"
    },
    {
        givenName: "Orange Pants",
        species: "Orange Fish",
        length: "72 inches",
        diet: "Cheetos",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: "4.2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium"
    },
    {
        givenName: "Bo",
        species: "Siberian Rainbow Fish",
        length: "2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Siberian Sea"
    },
    {
        givenName: "Carlton",
        species: "Male Beta",
        length: "2.7 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet"
    },
    {
        givenName: "Izzie",
        species: "Male Beta",
        length: "3.3 inches",
        diet: "Cheetos",
        harvestLocation: "Tibet"
    },
    {
        givenName: "Samson",
        species: "Peruvian Jam Fish",
        length: "2.4 inches",
        diet: "Fish Kibble",
        harvestLocation: "Peru"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: "2.7 inches",            
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium"
    },
    {
        givenName: "The Situation",
        species: "New Jersey Gutter Fish",
        length: "3.4 inches",
        diet: "Creatine",
        harvestLocation: "New Jersey"
    },
    {
        givenName: "Romeo",
        species: "Catfish",
        length: "8.4 inches",
        diet: "bugs",
        harvestLocation: "Percy Priest Lake"
    },
    {
        givenName: "Lance Bass",
        species: "Bass",
        length: "8.1 inches",
        diet: "bugs",
        harvestLocation: "Pond outside of Billys house"
    },
    {
        givenName: "Larry",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco"
    },
    {
        givenName: "Curly",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco"
    },
    {
        givenName: "Moe",
        species: "Gold Fish",
        length: "2.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Petco"
    },
    {
        givenName: "Donnie",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America"
    },
    {
        givenName: "GupGup",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America"
    },
    {
        givenName: "Luigi",
        species: "Guppy",
        length: "4.1 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America"
    },
    {
        givenName: "Marth",
        species: "Guppy",
        length: "4.2 inches",
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America"
    },
    {
        givenName: "Horatio",
        species: "unknown",
        length: "3.1 inches",
        diet: "Diet Fish Kibble",
        harvestLocation: "Pond outside of Billys house"
    },
]

// export a function that will return a copy of the priginal array
// this uses the slice method to make the copy
export const useFish = () => {
    return fishCollection.slice()
}