browser.protocol.registerProtocol("dweb", request => {
  return {
    contentType: "text/html",
    content: (async function*() {
      const encoder = new TextEncoder("utf-8")
      yield encoder.encode("<h1>Hi there!</h1>\n").buffer
      yield encoder.encode(
        `<p>You've succesfully loaded <strong>${request.url}</strong><p>`
      ).buffer
    })()
  }
})
