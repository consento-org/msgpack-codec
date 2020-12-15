# msgpack-codec

`msgpack-codec` is a [`codecs`][codecs] compatible adapter to [msgpack][msgpack]

[codecs]: (https://github.com/mafintosh/codecs)
[msgpack]: https://github.com/msgpack/msgpack-javascript

## Usage

```javascript
const msgpack = require('msgpack-codec')

msgpack.decode(
  msgpack.encode({ hello: 'world' })
)
```

## License

[MIT](./LICENSE)
