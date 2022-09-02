
// Format Card Numbers

export function cardNumbFormat(cardNumber) {
    let value = cardNumber
    if(value) {
        console.log(value)
        const characters = value.split("")
    
        const addedSpaces = characters.map((character, index) => {
        index++
        const isMultiple = Math.round(index / 4) / (1 / 4) === index
        
        if (isMultiple && index !== 0) {
          return character + "x"
        }
    
        return character
      })
    
      return addedSpaces.join("")
    } 
    else {
        return '';
    }
}