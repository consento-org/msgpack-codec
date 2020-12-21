const { encode, decode, Decoder, Encoder, ExtData, ExtensionCodec } = require('@msgpack/msgpack')

module.exports = {
  name: 'msgpack',
  decode,
  encode (obj, options) {
    const arr = encode(obj, options)
    return Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength)
  },
  Encoder,
  Decoder,
  ExtensionCodec,
  ExtData
}
