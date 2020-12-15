import { NamedCodec } from 'codecs'
import { encode, decode } from '@msgpack/msgpack'

/* eslint-disable @typescript-eslint/no-redeclare */
declare namespace msgpack {
  type MsgPackCodec = NamedCodec<'msgpack', Parameters<typeof encode>[0], ReturnType<typeof decode>>
}

declare const msgpack: msgpack.MsgPackCodec

export = msgpack
