const { encode, decode } = require('@msgpack/msgpack')

module.exports = {
  name: 'msgpack',
  decode,
  encode (obj) {
    const arr = encode(obj)
    return Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength)
  }
}
