/* eslint:ignore @typescript-eslint/no-floating-promises */
import { test } from 'zora'
import codec from '.'

test('basics', t => {
  t.equals(codec.name, 'msgpack')
  const input = { hello: 'world', data: Buffer.from('hello world') }
  const any = codec.encode(input)
  t.ok(any instanceof Buffer, 'converts to buffer instance')
  t.deepEqual(codec.decode(any), input)
})
