import { QRMode } from '~/plugins/qrcode/constants'

export default class QR8bitByte {
  mode: any
  data: any

  getLength(buffer: any) {
    return this.data.length
  }

  write(buffer: any) {
    for (let i = 0; i < this.data.length; i++) {
      // not JIS ...
      buffer.put(this.data.charCodeAt(i), 8)
    }
  }

  constructor(data: any) {
    this.mode = QRMode.MODE_8BIT_BYTE
    this.data = data
  }
}
