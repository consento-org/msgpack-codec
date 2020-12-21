import { NamedCodec } from 'codecs'
import * as msg from '@msgpack/msgpack'

type input = Parameters<typeof msg.encode>
type output = ReturnType<typeof msg.decode>

/* eslint-disable @typescript-eslint/no-redeclare */
declare namespace msgpack {
  interface MsgPackCodec extends NamedCodec<'msgpack', input[0], output> {
    encode: (input: input[0], options?: input[1]) => Buffer
    decode: (input: Buffer, options?: Parameters<typeof msg.decode>[1]) => output
  }
  type Decoder <ContextType> = msg.Decoder<ContextType>
  type DecodeOptions <ContextType = undefined> = msg.DecodeOptions<ContextType>
  type Encoder <ContextType> = msg.Encoder<ContextType>
  type EncodeOptions <ContextType = undefined> = msg.EncodeOptions<ContextType>
  type ExtData = msg.ExtData
  type ExtensionCodec <ContextType> = msg.ExtensionCodec<ContextType>
}

declare const msgpack: msgpack.MsgPackCodec

export = msgpack
