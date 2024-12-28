const value = 4444
console.log("sending analytics value...", value)

function sendAnalytics(data: string) {
  console.log(data)
}

sendAnalytics("The data")
