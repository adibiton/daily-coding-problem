    'use strict'
// Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.
//
//     Do this in linear time and in-place.
//
//     For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].
export const rgbArray = (input) => {
    if(!Array.isArray(input) || input.length <= 0 || !containsRGB(input)){
        throw new Error('Input is not valid')
    }
    if(input.length === 1)
        return input

    const length = input.length
    let currentIndex = 0

    while(currentIndex < length && input[currentIndex] === 'R')
        currentIndex++

    if(currentIndex === length)
        return input

    currentIndex = swapChar(input, length, 'R', currentIndex)

    currentIndex = swapChar(input, length, 'G', currentIndex)

    swapChar(input, length, 'B', currentIndex)
    return input
}

const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

const swapChar = (arr, length, char, currentIndex) => {
    let runnerIndex = currentIndex
    while(runnerIndex < length){
        if(arr[runnerIndex] === char){
            swap(arr, runnerIndex, currentIndex)
            currentIndex++
        }
        runnerIndex++
    }
    return currentIndex
}
const containsRGB = (arr) => {
    return arr.every(char => char === 'R' || char === 'G' || char === 'B')
}
