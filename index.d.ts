import { NamedCodec } from 'codecs'
import { encode, decode } from '@msgpack/msgpack'

declare const msgpack: NamedCodec<'msgpack', Parameters<typeof encode>[0], ReturnType<typeof decode>>

export = msgpack
