'use strict';

import { wrappers } from './wrappers.js';

function is_selected(url, selector) {
  if (selector.host !== url.host) return false
  if (!selector.path_regex.test(url.pathname)) return false
  return true
}

function find_wrapper(url) {
  if (!url) return null
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

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.query_wrapper) {
    let wrapper = find_wrapper(message.query_wrapper.location)
    console.log('wrapper found for url ' +
      message.query_wrapper.location.toString() + ': ', wrapper)
    sendResponse({
      wrapper: wrapper
    })
  }
})