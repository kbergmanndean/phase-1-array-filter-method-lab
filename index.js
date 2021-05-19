

function findMatching(array,string) {
    let newArray = array.filter(function(driver){ return driver.toUpperCase() === string.toUpperCase()})
    return newArray
}

function fuzzyMatch(array,string) {
    let newArray =array.filter(function(driver){ return driver[0]===string[0]})
    return newArray
}

function matchName(array,string) {
    let newArray =array.filter(function(driver){return driver.name===string})
    return newArray
}
