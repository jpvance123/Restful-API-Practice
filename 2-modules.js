// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only shared minimum)

const names = require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5-alternative-flavor')
require('./6-mind-grenade')

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)