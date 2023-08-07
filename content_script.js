'use strict';

async function extract_page() {
  let resp = await chrome.runtime.sendMessage({
    query_wrapper: {
      location: document.location
    }
  })
  if (!resp.wrapper) {
    console.log("Wrapper not found.")
    return null
  }
  console.log("Wrapper received: ", resp.wrapper)
  let extractor = new Extractor()
  return extractor.extract(resp.wrapper)
}

async function main() {
  let extracted = await extract_page()
  if (!extracted) {
    console.error("Extraction failed.")
    return
  }
  console.log("Extraction result: ", extracted)
}

main()