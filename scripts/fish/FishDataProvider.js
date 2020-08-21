const fishCollection = [
    {
        givenName: "Buford",
        species: "Male Beta",
        length: 3,
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Orange Pants",
        species: "Orange Fish",
        length: 72,
        diet: "Cheetos",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "orangefish.jpg"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: 6,
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "pinkfish.jpg"
    },
    {
        givenName: "Bo",
        species: "Siberian Rainbow Fish",
        length: 2,
        diet: "Fish Kibble",
        harvestLocation: "Siberian Sea",
        image: "yellowbluefish.jpg"
    },
    {
        givenName: "Carlton",
        species: "Male Beta",
        length: 5,
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Izzie",
        species: "Male Beta",
        length: 3.3,
        diet: "Cheetos",
        harvestLocation: "Tibet",
        image: "bluefish.jpg"
    },
    {
        givenName: "Samson",
        species: "Peruvian Jam Fish",
        length: 3,
        diet: "Fish Kibble",
        harvestLocation: "Peru",
        image: "bluefish.jpg"
    },
    {
        givenName: "Pinky",
        species: "unknown",
        length: 10,            
        diet: "Fish Kibble",
        harvestLocation: "Harvest Location: Jimmys Fish & Air Baloon Emporium",
        image: "bluefish.jpg"
    },
    {
        givenName: "The Situation",
        species: "New Jersey Gutter Fish",
        length: 3.4,
        diet: "Creatine",
        harvestLocation: "New Jersey",
        image: "bluefish.jpg"
    },
    {
        givenName: "Romeo",
        species: "Catfish",
        length: 8.4,
        diet: "bugs",
        harvestLocation: "Percy Priest Lake",
        image: "bluefish.jpg"
    },
    {
        givenName: "Lance Bass",
        species: "Bass",
        length: 15,
        diet: "bugs",
        harvestLocation: "Pond outside of Billys house",
        image: "bluefish.jpg"
    },
    {
        givenName: "Larry",
        species: "Gold Fish",
        length: 2.6,
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Curly",
        species: "Gold Fish",
        length: 2.1,
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Moe",
        species: "Gold Fish",
        length: 15,
        diet: "Fish Kibble",
        harvestLocation: "Petco",
        image: "bluefish.jpg"
    },
    {
        givenName: "Donnie",
        species: "Guppy",
        length: 4.1,
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "GupGup",
        species: "Guppy",
        length: 4.1,
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Luigi",
        species: "Guppy",
        length: 4.1,
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Marth",
        species: "Guppy",
        length: 4.2,
        diet: "Fish Kibble",
        harvestLocation: "Northeast South America",
        image: "bluefish.jpg"
    },
    {
        givenName: "Horatio",
        species: "unknown",
        length: 3.1,
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


export const makeMostHolyFish = () => {
    //Lengths divisible by 3
    const mostHolyFishArray = [];
    for(const theFish of fishCollection) {
        if (theFish.length % 3 === 0) {
            mostHolyFishArray.push(theFish);
        }
    }
    console.log("mostHolyFishArray", mostHolyFishArray);
    return mostHolyFishArray;
}

export const makeSoldierFish = () => {
    const soldierArray = [];
    //Divisible by 5 but NOT 3
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 === 0 && fishObj.length % 3 !== 0) {
            soldierArray.push(fishObj);
        }
       
    }
    console.log("soldierArray", soldierArray);
    return soldierArray;
}

export const makeUnworthy = () => {
    // not divisible by 3 or 5
    const unworthyArray = [];
    for (const fishObj of fishCollection) {
        if (fishObj.length % 5 !== 0 && fishObj.length % 3 !== 0) {
            unworthyArray.push(fishObj);
        }
    }
    console.log('unworthyArray', unworthyArray);
    return unworthyArray;
}