import { NamedCodec } from 'codecs'
import * as msg from '@msgpack/msgpack'

type input = Parameters<typeof msg.encode>
type output = ReturnType<typeof msg.decode>

/* eslint-disable @typescript-eslint/no-redeclare */
declare namespace msgpack {
  interface MsgPackCodec <Name extends string = 'msgpack'> extends NamedCodec<Name, input[0], output> {
    encode: (input: input[0], options?: input[1]) => Buffer
    decode: (input: Buffer, options?: Parameters<typeof msg.decode>[1]) => output
    Encoder: typeof msg.Encoder
    Decoder: typeof msg.Decoder
    ExtData: typeof msg.ExtData
    ExtensionCodec: typeof msg.ExtensionCodec
  }
  type DecodeOptions <ContextType = undefined> = msg.DecodeOptions<ContextType>
  type EncodeOptions <ContextType = undefined> = msg.EncodeOptions<ContextType>
}

declare const msgpack: msgpack.MsgPackCodec

export = msgpack
