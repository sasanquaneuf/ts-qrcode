# ts-qrcode

Pure TypeScript QRCode generator, for browser use.

# usage

```
npm install ts-qrcode
```

and import QRCode. Or, add script tag for qrcode.min.js.
Then, you can generate qrcode as follows:

```
QRCode.setCanvas('id-of-target-element', { text: 'qrcode-text' });
```

where first argument is the id of target element.
Look at the [sample/index.html](https://sasanquaneuf.github.io/ts-qrcode/sample/index.html) for more information.


# License

MIT

# Note

This code was written with reference to [jquery.qrcode.js](https://github.com/jeromeetienne/jquery-qrcode).
(Especially, qrcode.js as know as "QRCode for JavaScript", Copyright (c) 2009 Kazuhiko Arase)

