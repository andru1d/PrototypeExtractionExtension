'use strict';

class Logging {
  constructor(ext_name) {
    this.ext_name = ext_name
  }
  info(msg) {
    console.log('[INFO] ' + this.ext_name + ': ' + msg)
  }
  warn(msg) {
    console.warn('[WARN] ' + this.ext_name + ': ' + msg)
  }
  error(msg) {
    console.error('[ERROR] ' + this.ext_name + ': ' + msg)
  }
}

const logging = new Logging('SimpleExtraction')