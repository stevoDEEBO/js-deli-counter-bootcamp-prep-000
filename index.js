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
  }
  return katzDeliLine.shift()
}

function currentLine (katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  }
  
  else {
    for (var i = 0; i < katzDeliLine.length; i++) {
      const currList = []
      var person = String(katzDeliLine.indexOf(i) + ". " + katzDeliLine[i]) + ", "
      currList.push(person)
      return "The line is currently: " + currList
    }
  }
}