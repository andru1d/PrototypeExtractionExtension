'use strict';

class Extractor {
  #node_to_value(node, type) {
    let text = node.textContent.trim()
    switch (type) {
      case 'int':
        return Number.parseInt(text.replace(/,/g, ''))
      case 'float':
      case 'double':
        return Number.parseFloat(text.replace(/,/g, ''))
      case 'bool':
        return Boolean(text)
      default:
        // Default type is string
        return text
    }
  }

  extract(wrapper) {
    let result = {
      _wrapper_name: wrapper.name,
      title: document.title,
      location: document.location.toString(),
    }
    for (let i = 0; i < wrapper.fields.length; ++i) {
      let field = wrapper.fields[i]
      if (!field.name) continue;
      if (!field.xpath || !field.xpath.length) continue;

      // Iterate through all xpaths and find the first one that gets us result.
      let xresult = null
      for (let j = 0; j < field.xpath.length; ++j) {
        xresult = document.evaluate(field.xpath[j], document, null,
          XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null)
        if (xresult && xresult.snapshotLength > 0) break;
      }

      if (xresult && xresult.snapshotLength > 0) {
        // For the first iteration, we only process the first node from the
        // result set.
        result[field.name] =
          this.#node_to_value(xresult.snapshotItem(0), field.type)
      }
    }
    return result
  }
}