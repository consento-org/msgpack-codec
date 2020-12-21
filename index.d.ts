import { NamedCodec } from 'codecs'
import { encode, decode } from '@msgpack/msgpack'

type input = Parameters<typeof encode>
type output = ReturnType<typeof decode>

/* eslint-disable @typescript-eslint/no-redeclare */
declare namespace msgpack {
  interface MsgPackCodec extends NamedCodec<'msgpack', input[0], output> {
    encode: (input: input[0], options?: input[1]) => Buffer
    decode: (input: Buffer, options?: Parameters<typeof decode>[1]) => output
  }
}

declare const msgpack: msgpack.MsgPackCodec

export = msgpack
