// This page is to store the tip data

const tipList = [
    {tip: "Feed It"},
    {tip: "No Glitter in Tank"},
    {tip: "Keep Tank Clean!!!"},
    {tip: "Fish LOVE tiny castles / treasure chests"},
    {tip: "Tiny diver action figures make fish feel at home"}
]

// export a function that will return a copy of the priginal array
// this uses the slice method to make the copy
export const useTip = () => {
    return tipList.slice()
}