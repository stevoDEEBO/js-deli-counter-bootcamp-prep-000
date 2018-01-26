var katzDeli = []

function takeANumber (katzDeliLine, name) {
  var katzDeli = katzDeliLine.push(name)
  const number = katzDeliLine.length
  return "Welcome, " + name + ". You are number " + number + " in line."
}

function nowServing (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  }
  
  else {
    return "Currently serving " + katzDeliLine[0] + "."
    katzDeliLine.slice(0)
  }
  return katzDeliLine
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else {
    const currList = []
    let i = 0
    while (i < katzDeliLine.length) {
      currList.push(" " + (i+1) + ". " + katzDeliLine[i])
      i++
    }
    return "The line is currently:" + currList
  }
}