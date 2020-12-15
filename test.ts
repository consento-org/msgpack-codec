/* eslint-disable @typescript-eslint/no-floating-promises */
import { test } from 'zora'
import msgpack, { MsgPackCodec } from '.'

test('basics', t => {
  const codec: MsgPackCodec = msgpack
  t.equals(codec.name, 'msgpack', 'correct name')
  const input = { hello: 'world', data: Buffer.from('hello world') }
  const any = codec.encode(input)
  t.ok(any instanceof Buffer, 'converts to buffer instance')
  t.deepEqual(codec.decode(any), input, 'output matches input')
})
