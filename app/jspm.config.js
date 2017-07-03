SystemJS.config({
  paths: {
    "github:": "lib/github/",
    "npm:": "lib/npm/",
    "morpheus/": "js/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  meta: {
    "*.css": {
      "loader": "css"
    }
  },
  devConfig: {
    "map": {
      "babel-runtime": "npm:babel-runtime@5.8.38",
      "core-js": "npm:core-js@1.2.7",
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.21"
    },
    "packages": {
      "npm:babel-runtime@5.8.38": {
        "map": {}
      },
      "npm:core-js@1.2.7": {
        "map": {
          "systemjs-json": "github:systemjs/plugin-json@0.1.2"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  map: {
    "babel": "npm:babel-core@5.8.38",
    "web-animations": "github:web-animations/web-animations-js@2.2.5",
    "zingtouch": "github:zingchart/zingtouch@1.0.5",
    "web-animations/web-animations-js": "github:web-animations/web-animations-js@2.2.5",
    "zingchart/zingtouch": "github:zingchart/zingtouch@1.0.5"
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "buffer": "npm:jspm-nodelibs-buffer@0.2.3",
    "child_process": "npm:jspm-nodelibs-child_process@0.2.1",
    "constants": "npm:jspm-nodelibs-constants@0.2.1",
    "crypto": "npm:jspm-nodelibs-crypto@0.2.1",
    "fs": "npm:jspm-nodelibs-fs@0.2.1",
    "http": "npm:jspm-nodelibs-http@0.2.0",
    "mapbox-gl": "npm:mapbox-gl@0.38.0",
    "module": "npm:jspm-nodelibs-module@0.2.1",
    "net": "npm:jspm-nodelibs-net@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "path": "npm:jspm-nodelibs-path@0.2.3",
    "source-map": "npm:source-map@0.1.43",
    "stream": "npm:jspm-nodelibs-stream@0.2.1",
    "string_decoder": "npm:jspm-nodelibs-string_decoder@0.2.1",
    "tls": "npm:jspm-nodelibs-tls@0.2.1",
    "url": "npm:jspm-nodelibs-url@0.2.1",
    "util": "npm:jspm-nodelibs-util@0.2.2",
    "vm": "npm:jspm-nodelibs-vm@0.2.1",
    "process": "npm:jspm-nodelibs-process@0.2.1",
    "mapbox/mapbox-gl-js": "github:mapbox/mapbox-gl-js@0.38.0",
    "json": "github:systemjs/plugin-json@0.3.0",
    "vue-router": "npm:vue-router@2.5.3",
    "studio-fonkel/sprinkhaan": "github:studio-fonkel/sprinkhaan@master",
    "css": "github:systemjs/plugin-css@0.1.35",
    "jquery": "npm:jquery@3.2.1",
    "OwlCarousel2/OwlCarousel2": "github:OwlCarousel2/OwlCarousel2@2.2.1",
    "vue": "npm:vue@2.3.4",
    "events": "npm:jspm-nodelibs-events@0.2.0",
    "zlib": "npm:jspm-nodelibs-zlib@0.2.3"
  },
  packages: {
    "npm:mapbox-gl@0.38.0": {
      "map": {
        "geojson-rewind": "npm:geojson-rewind@0.1.0",
        "bubleify": "npm:bubleify@0.7.0",
        "brfs": "npm:brfs@1.4.3",
        "through2": "npm:through2@2.0.3",
        "mapbox-gl-supported": "npm:mapbox-gl-supported@1.2.0",
        "grid-index": "npm:grid-index@1.0.0",
        "package-json-versionify": "npm:package-json-versionify@1.0.4",
        "tinyqueue": "npm:tinyqueue@1.2.2",
        "unflowify": "npm:unflowify@1.0.1",
        "quickselect": "npm:quickselect@1.0.0",
        "point-geometry": "npm:point-geometry@0.0.0",
        "unassertify": "npm:unassertify@2.0.4",
        "vector-tile": "npm:vector-tile@1.3.0",
        "geojson-vt": "npm:geojson-vt@2.4.0",
        "pbf": "npm:pbf@1.3.7",
        "earcut": "npm:earcut@2.1.1",
        "supercluster": "npm:supercluster@2.3.0",
        "webworkify": "npm:webworkify@1.4.0",
        "vt-pbf": "npm:vt-pbf@2.1.2",
        "@mapbox/unitbezier": "npm:@mapbox/unitbezier@0.0.0",
        "@mapbox/whoots-js": "npm:@mapbox/whoots-js@3.0.0",
        "@mapbox/gl-matrix": "npm:@mapbox/gl-matrix@0.0.1",
        "@mapbox/shelf-pack": "npm:@mapbox/shelf-pack@3.0.0"
      }
    },
    "npm:brfs@1.4.3": {
      "map": {
        "through2": "npm:through2@2.0.3",
        "quote-stream": "npm:quote-stream@1.0.2",
        "static-module": "npm:static-module@1.3.2",
        "resolve": "npm:resolve@1.3.3"
      }
    },
    "npm:geojson-rewind@0.1.0": {
      "map": {
        "geojson-area": "npm:geojson-area@0.1.0",
        "minimist": "npm:minimist@0.0.5",
        "concat-stream": "npm:concat-stream@1.2.1"
      }
    },
    "npm:bubleify@0.7.0": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "buble": "npm:buble@0.15.2"
      }
    },
    "npm:through2@2.0.3": {
      "map": {
        "xtend": "npm:xtend@4.0.1",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:quote-stream@1.0.2": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "through2": "npm:through2@2.0.3",
        "buffer-equal": "npm:buffer-equal@0.0.1"
      }
    },
    "npm:static-module@1.3.2": {
      "map": {
        "concat-stream": "npm:concat-stream@1.6.0",
        "quote-stream": "npm:quote-stream@0.0.0",
        "through2": "npm:through2@0.4.2",
        "readable-stream": "npm:readable-stream@1.0.34",
        "shallow-copy": "npm:shallow-copy@0.0.1",
        "static-eval": "npm:static-eval@0.2.4",
        "falafel": "npm:falafel@1.2.0",
        "object-inspect": "npm:object-inspect@0.4.0",
        "has": "npm:has@1.0.1",
        "duplexer2": "npm:duplexer2@0.0.2",
        "escodegen": "npm:escodegen@1.3.3"
      }
    },
    "npm:geojson-area@0.1.0": {
      "map": {
        "wgs84": "npm:wgs84@0.0.0"
      }
    },
    "npm:buble@0.15.2": {
      "map": {
        "minimist": "npm:minimist@1.2.0",
        "acorn-object-spread": "npm:acorn-object-spread@1.0.0",
        "os-homedir": "npm:os-homedir@1.0.2",
        "acorn-jsx": "npm:acorn-jsx@3.0.1",
        "chalk": "npm:chalk@1.1.3",
        "magic-string": "npm:magic-string@0.14.0",
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:vector-tile@1.3.0": {
      "map": {
        "point-geometry": "npm:point-geometry@0.0.0"
      }
    },
    "npm:concat-stream@1.6.0": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "inherits": "npm:inherits@2.0.3",
        "typedarray": "npm:typedarray@0.0.6"
      }
    },
    "npm:quote-stream@0.0.0": {
      "map": {
        "minimist": "npm:minimist@0.0.8",
        "through2": "npm:through2@0.4.2"
      }
    },
    "npm:through2@0.4.2": {
      "map": {
        "xtend": "npm:xtend@2.1.2",
        "readable-stream": "npm:readable-stream@1.0.34"
      }
    },
    "npm:concat-stream@1.2.1": {
      "map": {
        "bops": "npm:bops@0.0.6"
      }
    },
    "npm:readable-stream@2.3.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@1.0.0",
        "string_decoder": "npm:string_decoder@1.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "util-deprecate": "npm:util-deprecate@1.0.2",
        "process-nextick-args": "npm:process-nextick-args@1.0.7"
      }
    },
    "npm:readable-stream@1.0.34": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:vt-pbf@2.1.2": {
      "map": {
        "pbf": "npm:pbf@1.3.7",
        "point-geometry": "npm:point-geometry@0.0.0",
        "vector-tile": "npm:vector-tile@1.3.0"
      }
    },
    "npm:pbf@1.3.7": {
      "map": {
        "ieee754": "npm:ieee754@1.1.8",
        "resolve-protobuf-schema": "npm:resolve-protobuf-schema@2.0.0"
      }
    },
    "npm:unflowify@1.0.1": {
      "map": {
        "through": "npm:through@2.3.8",
        "flow-remove-types": "npm:flow-remove-types@1.2.1"
      }
    },
    "npm:unassertify@2.0.4": {
      "map": {
        "through": "npm:through@2.3.8",
        "multi-stage-sourcemap": "npm:multi-stage-sourcemap@0.2.1",
        "convert-source-map": "npm:convert-source-map@1.5.0",
        "unassert": "npm:unassert@1.5.1",
        "escodegen": "npm:escodegen@1.8.1",
        "acorn": "npm:acorn@4.0.13"
      }
    },
    "npm:package-json-versionify@1.0.4": {
      "map": {
        "browserify-package-json": "npm:browserify-package-json@1.0.1"
      }
    },
    "npm:falafel@1.2.0": {
      "map": {
        "isarray": "npm:isarray@0.0.1",
        "object-keys": "npm:object-keys@1.0.11",
        "acorn": "npm:acorn@1.2.2",
        "foreach": "npm:foreach@2.0.5"
      }
    },
    "npm:resolve@1.3.3": {
      "map": {
        "path-parse": "npm:path-parse@1.0.5"
      }
    },
    "npm:duplexer2@0.0.2": {
      "map": {
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:static-eval@0.2.4": {
      "map": {
        "escodegen": "npm:escodegen@0.0.28"
      }
    },
    "npm:bops@0.0.6": {
      "map": {
        "base64-js": "npm:base64-js@0.0.2",
        "to-utf8": "npm:to-utf8@0.0.1"
      }
    },
    "npm:supercluster@2.3.0": {
      "map": {
        "kdbush": "npm:kdbush@1.0.1"
      }
    },
    "npm:readable-stream@1.1.14": {
      "map": {
        "core-util-is": "npm:core-util-is@1.0.2",
        "isarray": "npm:isarray@0.0.1",
        "string_decoder": "npm:string_decoder@0.10.31",
        "inherits": "npm:inherits@2.0.3",
        "stream-browserify": "npm:stream-browserify@1.0.0"
      }
    },
    "npm:unassert@1.5.1": {
      "map": {
        "object-assign": "npm:object-assign@4.1.1",
        "acorn": "npm:acorn@4.0.13",
        "esutils": "npm:esutils@2.0.2",
        "call-matcher": "npm:call-matcher@1.0.1",
        "deep-equal": "npm:deep-equal@1.0.1",
        "espurify": "npm:espurify@1.7.0",
        "estraverse": "npm:estraverse@4.2.0"
      }
    },
    "npm:stream-browserify@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@1.1.14"
      }
    },
    "npm:xtend@2.1.2": {
      "map": {
        "object-keys": "npm:object-keys@0.4.0"
      }
    },
    "npm:string_decoder@1.0.3": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:acorn-object-spread@1.0.0": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:acorn-jsx@3.0.1": {
      "map": {
        "acorn": "npm:acorn@3.3.0"
      }
    },
    "npm:multi-stage-sourcemap@0.2.1": {
      "map": {
        "source-map": "npm:source-map@0.1.43"
      }
    },
    "npm:escodegen@1.8.1": {
      "map": {
        "esutils": "npm:esutils@2.0.2",
        "optionator": "npm:optionator@0.8.2",
        "estraverse": "npm:estraverse@1.9.3",
        "esprima": "npm:esprima@2.7.3"
      }
    },
    "npm:escodegen@1.3.3": {
      "map": {
        "esutils": "npm:esutils@1.0.0",
        "estraverse": "npm:estraverse@1.5.1",
        "esprima": "npm:esprima@1.1.1"
      }
    },
    "npm:has@1.0.1": {
      "map": {
        "function-bind": "npm:function-bind@1.1.0"
      }
    },
    "npm:flow-remove-types@1.2.1": {
      "map": {
        "vlq": "npm:vlq@0.2.2",
        "babylon": "npm:babylon@6.17.4"
      }
    },
    "npm:magic-string@0.14.0": {
      "map": {
        "vlq": "npm:vlq@0.2.2"
      }
    },
    "npm:resolve-protobuf-schema@2.0.0": {
      "map": {
        "protocol-buffers-schema": "npm:protocol-buffers-schema@2.2.0"
      }
    },
    "npm:chalk@1.1.3": {
      "map": {
        "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
        "has-ansi": "npm:has-ansi@2.0.0",
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "supports-color": "npm:supports-color@2.0.0",
        "strip-ansi": "npm:strip-ansi@3.0.1"
      }
    },
    "npm:call-matcher@1.0.1": {
      "map": {
        "deep-equal": "npm:deep-equal@1.0.1",
        "espurify": "npm:espurify@1.7.0",
        "estraverse": "npm:estraverse@4.2.0",
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:escodegen@0.0.28": {
      "map": {
        "estraverse": "npm:estraverse@1.3.2",
        "esprima": "npm:esprima@1.0.4"
      }
    },
    "npm:espurify@1.7.0": {
      "map": {
        "core-js": "npm:core-js@2.4.1"
      }
    },
    "npm:source-map@0.1.43": {
      "map": {
        "amdefine": "npm:amdefine@1.0.1"
      }
    },
    "npm:optionator@0.8.2": {
      "map": {
        "deep-is": "npm:deep-is@0.1.3",
        "levn": "npm:levn@0.3.0",
        "fast-levenshtein": "npm:fast-levenshtein@2.0.6",
        "type-check": "npm:type-check@0.3.2",
        "wordwrap": "npm:wordwrap@1.0.0",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:jspm-nodelibs-buffer@0.2.3": {
      "map": {
        "buffer": "npm:buffer@5.0.6"
      }
    },
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    },
    "npm:buffer@5.0.6": {
      "map": {
        "base64-js": "npm:base64-js@1.2.1",
        "ieee754": "npm:ieee754@1.1.8"
      }
    },
    "npm:levn@0.3.0": {
      "map": {
        "type-check": "npm:type-check@0.3.2",
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:type-check@0.3.2": {
      "map": {
        "prelude-ls": "npm:prelude-ls@1.1.2"
      }
    },
    "npm:has-ansi@2.0.0": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:strip-ansi@3.0.1": {
      "map": {
        "ansi-regex": "npm:ansi-regex@2.1.1"
      }
    },
    "npm:jspm-nodelibs-stream@0.2.1": {
      "map": {
        "stream-browserify": "npm:stream-browserify@2.0.1"
      }
    },
    "npm:jspm-nodelibs-crypto@0.2.1": {
      "map": {
        "crypto-browserify": "npm:crypto-browserify@3.11.0"
      }
    },
    "npm:stream-browserify@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3"
      }
    },
    "npm:crypto-browserify@3.11.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "browserify-cipher": "npm:browserify-cipher@1.0.0",
        "create-ecdh": "npm:create-ecdh@4.0.0",
        "browserify-sign": "npm:browserify-sign@4.0.4",
        "create-hmac": "npm:create-hmac@1.1.6",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "diffie-hellman": "npm:diffie-hellman@5.0.2",
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "public-encrypt": "npm:public-encrypt@4.0.0"
      }
    },
    "npm:browserify-sign@4.0.4": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "inherits": "npm:inherits@2.0.3",
        "bn.js": "npm:bn.js@4.11.7",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "elliptic": "npm:elliptic@6.4.0",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:create-hmac@1.1.6": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:create-hash@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:public-encrypt@4.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3",
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7",
        "browserify-rsa": "npm:browserify-rsa@4.0.1",
        "parse-asn1": "npm:parse-asn1@5.1.0"
      }
    },
    "npm:diffie-hellman@5.0.2": {
      "map": {
        "randombytes": "npm:randombytes@2.0.5",
        "bn.js": "npm:bn.js@4.11.7",
        "miller-rabin": "npm:miller-rabin@4.0.0"
      }
    },
    "npm:randombytes@2.0.5": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1"
      }
    },
    "npm:pbkdf2@3.0.12": {
      "map": {
        "safe-buffer": "npm:safe-buffer@5.1.1",
        "create-hash": "npm:create-hash@1.1.3",
        "create-hmac": "npm:create-hmac@1.1.6",
        "sha.js": "npm:sha.js@2.4.8",
        "ripemd160": "npm:ripemd160@2.0.1"
      }
    },
    "npm:browserify-cipher@1.0.0": {
      "map": {
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "browserify-des": "npm:browserify-des@1.0.0",
        "browserify-aes": "npm:browserify-aes@1.0.6"
      }
    },
    "npm:create-ecdh@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "elliptic": "npm:elliptic@6.4.0"
      }
    },
    "npm:evp_bytestokey@1.0.0": {
      "map": {
        "create-hash": "npm:create-hash@1.1.3"
      }
    },
    "npm:browserify-des@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "cipher-base": "npm:cipher-base@1.0.3",
        "des.js": "npm:des.js@1.0.0"
      }
    },
    "npm:cipher-base@1.0.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:elliptic@6.4.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "brorand": "npm:brorand@1.1.0",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hmac-drbg": "npm:hmac-drbg@1.0.1",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
        "hash.js": "npm:hash.js@1.1.3"
      }
    },
    "npm:browserify-aes@1.0.6": {
      "map": {
        "cipher-base": "npm:cipher-base@1.0.3",
        "create-hash": "npm:create-hash@1.1.3",
        "inherits": "npm:inherits@2.0.3",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "buffer-xor": "npm:buffer-xor@1.0.3"
      }
    },
    "npm:browserify-rsa@4.0.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "randombytes": "npm:randombytes@2.0.5"
      }
    },
    "npm:parse-asn1@5.1.0": {
      "map": {
        "browserify-aes": "npm:browserify-aes@1.0.6",
        "create-hash": "npm:create-hash@1.1.3",
        "pbkdf2": "npm:pbkdf2@3.0.12",
        "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
        "asn1.js": "npm:asn1.js@4.9.1"
      }
    },
    "npm:sha.js@2.4.8": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:ripemd160@2.0.1": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "hash-base": "npm:hash-base@2.0.2"
      }
    },
    "npm:miller-rabin@4.0.0": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "brorand": "npm:brorand@1.1.0"
      }
    },
    "npm:des.js@1.0.0": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hmac-drbg@1.0.1": {
      "map": {
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
        "hash.js": "npm:hash.js@1.1.3",
        "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1"
      }
    },
    "npm:asn1.js@4.9.1": {
      "map": {
        "bn.js": "npm:bn.js@4.11.7",
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:jspm-nodelibs-string_decoder@0.2.1": {
      "map": {
        "string_decoder": "npm:string_decoder@0.10.31"
      }
    },
    "npm:hash.js@1.1.3": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
      }
    },
    "npm:hash-base@2.0.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3"
      }
    },
    "npm:jspm-nodelibs-http@0.2.0": {
      "map": {
        "http-browserify": "npm:stream-http@2.7.2"
      }
    },
    "npm:jspm-nodelibs-url@0.2.1": {
      "map": {
        "url": "npm:url@0.11.0"
      }
    },
    "npm:stream-http@2.7.2": {
      "map": {
        "inherits": "npm:inherits@2.0.3",
        "readable-stream": "npm:readable-stream@2.3.3",
        "xtend": "npm:xtend@4.0.1",
        "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
        "builtin-status-codes": "npm:builtin-status-codes@3.0.0"
      }
    },
    "npm:url@0.11.0": {
      "map": {
        "punycode": "npm:punycode@1.3.2",
        "querystring": "npm:querystring@0.2.0"
      }
    },
    "npm:jspm-nodelibs-zlib@0.2.3": {
      "map": {
        "browserify-zlib": "npm:browserify-zlib@0.1.4"
      }
    },
    "npm:browserify-zlib@0.1.4": {
      "map": {
        "readable-stream": "npm:readable-stream@2.3.3",
        "pako": "npm:pako@0.2.9"
      }
    }
  }
});
