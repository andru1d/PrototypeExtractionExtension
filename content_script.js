'use strict';

function is_selected(url, selector) {
  if (selector.host !== url.host) return false
  if (!selector.path_regex.test(url.pathname)) return false
  return true
}

function find_wrapper() {
  let url = document.location
  for (let i = 0; i < wrappers.length; ++i) {
    let wrapper = wrappers[i]
    for (let j = 0; j < wrapper.selector.length; ++j) {
      if (is_selected(url, wrapper.selector[j])) {
        return wrapper
      }
    }
  }
  return null
}

function main() {
  let wrapper = find_wrapper()
  if (wrapper) {
    console.log("Wrapper found: " + wrapper.name)
    let extractor = new Extractor()
    let extracted = extractor.extract(wrapper)
    console.log("Extraction result: ", extracted)
  } else {
    console.log("Wrapper not found.")
  }
}

main()