(function() {
  "use strict";
  try {
    if (typeof document != "undefined") {
      var elementStyle = document.createElement("style");
      elementStyle.appendChild(document.createTextNode("/* 在伪元素中显示表达式，方便开发 */\r\n.expr-plugin [custom-expr]::before {\r\n  content: attr(custom-expr);\r\n  display: block;\r\n  background-color: #f0f0f0;\r\n  padding: 1px;\r\n  font-family: monospace;\r\n  font-size: x-small;\r\n\r\n  white-space: nowrap; /* 文本不换行 */\r\n  overflow: hidden; /* 隐藏超出部分 */\r\n  text-overflow: ellipsis; /* 显示省略号 */\r\n}\r\n[custom-expr]:hover::before {\r\n  overflow: visible; /* 允许溢出 */\r\n  white-space: normal; /* 允许文本换行 */\r\n  word-wrap: break-word; /* 长单词也能换行 */\r\n}\r\n/* .expr-plugin [custom-expr-value]::after {\r\n  content: attr(custom-expr-value);\r\n  background-color: #d25656;\r\n  padding: 1px;\r\n  font-family: monospace;\r\n} */"));
      document.head.appendChild(elementStyle);
    }
  } catch (e) {
    console.error("vite-plugin-css-injected-by-js", e);
  }
})();
"use strict";
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getAugmentedNamespace(n) {
  if (n.__esModule) return n;
  var f = n.default;
  if (typeof f == "function") {
    var a = function a2() {
      if (this instanceof a2) {
        return Reflect.construct(f, arguments, this.constructor);
      }
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
}
var src = {};
var decorator$1 = {};
var guard$1 = {};
var afterBefore = {};
var __awaiter$1 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
Object.defineProperty(afterBefore, "__esModule", { value: true });
afterBefore.run_before = afterBefore.run_after = void 0;
function run_after(f) {
  return function name(target, propertyKey, descriptor) {
    return Object.assign(Object.assign({}, descriptor), { value(...arg) {
      return __awaiter$1(this, void 0, void 0, function* () {
        const res = yield descriptor.value(...arg);
        yield f(res);
        return res;
      });
    } });
  };
}
afterBefore.run_after = run_after;
function run_before(f) {
  return function name(target, propertyKey, descriptor) {
    return Object.assign(Object.assign({}, descriptor), { value(...arg) {
      return __awaiter$1(this, void 0, void 0, function* () {
        yield f();
        const res = yield descriptor.value(...arg);
        return res;
      });
    } });
  };
}
afterBefore.run_before = run_before;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(afterBefore, exports2);
})(guard$1);
var __createBinding$3 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$3 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$3 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$3(result, mod, k);
  }
  __setModuleDefault$3(result, mod);
  return result;
};
Object.defineProperty(decorator$1, "__esModule", { value: true });
decorator$1.guard = void 0;
const guard = __importStar$3(guard$1);
decorator$1.guard = guard;
var hash$1 = {};
var time33 = {};
Object.defineProperty(time33, "__esModule", { value: true });
time33.hash_time33 = void 0;
function hash_time33(text) {
  let hash2 = 5381, index = text.length;
  while (index) {
    hash2 = hash2 * 33 ^ text.codePointAt(--index);
  }
  return hash2 >>> 0;
}
time33.hash_time33 = hash_time33;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(time33, exports2);
})(hash$1);
var adap$1 = {};
Object.defineProperty(adap$1, "__esModule", { value: true });
adap$1.test = void 0;
adap$1.test = 1;
var jsCore = {};
var mixin$2 = {};
var mixin$1 = {};
Object.defineProperty(mixin$1, "__esModule", { value: true });
mixin$1.merge_obj = mixin$1.applyMixins = void 0;
function applyMixins(derivedCtor, baseCtors) {
  baseCtors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
mixin$1.applyMixins = applyMixins;
function merge_obj(...objs) {
  let obj = {};
  for (let i = 0; i < objs.length; i++) {
    const el = objs[i];
    if (el instanceof Object)
      obj = Object.assign(Object.assign({}, obj), el);
  }
  return obj;
}
mixin$1.merge_obj = merge_obj;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(mixin$1, exports2);
})(mixin$2);
var number$2 = {};
var number$1 = {};
Object.defineProperty(number$1, "__esModule", { value: true });
number$1.take_two_decimal_places = void 0;
function take_two_decimal_places(num) {
  return Number(num).toFixed(2);
}
number$1.take_two_decimal_places = take_two_decimal_places;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(number$1, exports2);
})(number$2);
var promise$1 = {};
var awaitPromise$1 = {};
Object.defineProperty(awaitPromise$1, "__esModule", { value: true });
awaitPromise$1.awaitPromise = void 0;
function awaitPromise({
  getPromise,
  /** 这里的也要描述类型？ */
  succeed = (r) => {
  },
  error = () => {
  },
  end = () => {
  },
  midway = () => {
  }
}) {
  let running = false;
  return function(...arg) {
    if (running) {
      midway();
    } else {
      running = true;
      const promise2 = getPromise.apply(this, arg);
      promise2.then((r) => {
        succeed(r);
      }).catch(error).finally(() => {
        end();
        running = false;
      });
    }
  };
}
awaitPromise$1.awaitPromise = awaitPromise;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(awaitPromise$1, exports2);
})(promise$1);
var string$1 = {};
var url = {};
Object.defineProperty(url, "__esModule", { value: true });
url._URL = void 0;
class _URL {
  constructor(url2) {
    this.par_obj = _URL.getParameters(url2);
  }
  /** 解析url中的参数 最少会返回一个{}对象 */
  static getParameters(url_str) {
    const url2 = decodeURIComponent(url_str);
    let obj = url2.match(/([^?=&]+)(=([^&]*))/g);
    if (obj === null) {
      return {};
    }
    const par = obj.reduce((a, v) => (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1), a), {});
    return par;
  }
  /** 获取对应key的值，没有的情况下返回空字符串 */
  getValue(key) {
    const value = this.par_obj[key];
    if (value === void 0) {
      return "";
    }
    return value;
  }
}
url._URL = _URL;
(function(exports2) {
  var __createBinding2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() {
        return m[k];
      } };
    }
    Object.defineProperty(o, k2, desc);
  } : function(o, m, k, k2) {
    if (k2 === void 0) k2 = k;
    o[k2] = m[k];
  });
  var __exportStar2 = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p)) __createBinding2(exports3, m, p);
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  __exportStar2(url, exports2);
})(string$1);
var __createBinding$2 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$2 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$2 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
  }
  __setModuleDefault$2(result, mod);
  return result;
};
Object.defineProperty(jsCore, "__esModule", { value: true });
jsCore.string = jsCore.promise = jsCore.number = jsCore.mixin = void 0;
const mixin = __importStar$2(mixin$2);
jsCore.mixin = mixin;
const number = __importStar$2(number$2);
jsCore.number = number;
const promise = __importStar$2(promise$1);
jsCore.promise = promise;
const string = __importStar$2(string$1);
jsCore.string = string;
var siyuan$1 = {};
var mergePluginPackage$1 = {};
Object.defineProperty(mergePluginPackage$1, "__esModule", { value: true });
mergePluginPackage$1.mergePluginPackage = void 0;
function mergePluginPackage(pkg, plugin) {
  return Object.assign(Object.assign({}, plugin), { version: pkg.version, name: pkg.name, url: pkg.repository, author: pkg.author });
}
mergePluginPackage$1.mergePluginPackage = mergePluginPackage;
(function(exports2) {
  var __awaiter2 = commonjsGlobal && commonjsGlobal.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.bindData = exports2.mergePluginPackage = void 0;
  const mergePluginPackage_1 = mergePluginPackage$1;
  Object.defineProperty(exports2, "mergePluginPackage", { enumerable: true, get: function() {
    return mergePluginPackage_1.mergePluginPackage;
  } });
  function bindData(opt) {
    const { that, storageName, initValue } = opt;
    let _value = initValue;
    const loadValue = () => __awaiter2(this, void 0, void 0, function* () {
      const value = yield that.loadData(storageName);
      if (value !== "") {
        _value = value;
      }
      return _value;
    });
    loadValue();
    return {
      /** 会执行 loadData 然后再返回结果*/
      loadValue,
      value: () => _value,
      set(value) {
        _value = value;
        that.saveData(storageName, _value);
      }
    };
  }
  exports2.bindData = bindData;
})(siyuan$1);
var __createBinding$1 = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
});
var __setModuleDefault$1 = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
});
var __importStar$1 = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
  }
  __setModuleDefault$1(result, mod);
  return result;
};
Object.defineProperty(src, "__esModule", { value: true });
var siyuan_1 = src.siyuan = src.js_core = src.adap = src.hash = src.decorator = void 0;
const decorator = __importStar$1(decorator$1);
src.decorator = decorator;
const hash = __importStar$1(hash$1);
src.hash = hash;
const adap = __importStar$1(adap$1);
src.adap = adap;
const js_core = __importStar$1(jsCore);
src.js_core = js_core;
const siyuan = __importStar$1(siyuan$1);
siyuan_1 = src.siyuan = siyuan;
const { fetchSyncPost } = require("siyuan");
async function request(url2, data) {
  let response = await fetchSyncPost(url2, data);
  let res = response.code === 0 ? response.data : null;
  return res;
}
async function updateBlock(dataType, data, id) {
  let payload = {
    dataType,
    data,
    id
  };
  let url2 = "/api/block/updateBlock";
  return request(url2, payload);
}
async function sql(sql2) {
  let sqldata = {
    stmt: sql2
  };
  let url2 = "/api/query/sql";
  return request(url2, sqldata);
}
const pluginClassName = "expr-plugin";
const exprName = "custom-expr";
async function get_exprBlocks(exprIDs, updated2) {
  const exprIDsStr = exprIDs.map((id) => `"${id}"`).join(",");
  const exprBlock = await sql(
    `SELECT b.*,a.id AS a_id,a."name" AS a_name,a."value" as a_value,a."type" AS a_type,a.block_id AS a_block_id,a.root_id AS a_root_id,a.box AS a_box,a."path" AS a_path
      FROM blocks AS  b
      INNER JOIN attributes AS a
      ON b.id = a.block_id
      WHERE
          a.name = "${exprName}"
        AND
          (
            ( b.id IN (${exprIDsStr}) )
            ${""}
          )
      ORDER BY b.updated DESC;`
  ) ?? [];
  return exprBlock;
}
var main$1 = {};
var extendStatics = function(d, b2) {
  extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b3) {
    d2.__proto__ = b3;
  } || function(d2, b3) {
    for (var p in b3) if (Object.prototype.hasOwnProperty.call(b3, p)) d2[p] = b3[p];
  };
  return extendStatics(d, b2);
};
function __extends(d, b2) {
  if (typeof b2 !== "function" && b2 !== null)
    throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
  extendStatics(d, b2);
  function __() {
    this.constructor = d;
  }
  d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
}
var __assign = function() {
  __assign = Object.assign || function __assign2(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator2) {
  return function(target, key) {
    decorator2(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body2) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body2.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() {
      return m[k];
    } };
  }
  Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
  if (k2 === void 0) k2 = k;
  o[k2] = m[k];
};
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b2) {
          q.push([n, v, a, b2]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
var __setModuleDefault = Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
} : function(o, v) {
  o["default"] = v;
};
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) {
          fail(e);
          return next();
        });
      } catch (e) {
        fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}
const tslib_es6 = {
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources
};
const tslib_es6$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource,
  get __assign() {
    return __assign;
  },
  __asyncDelegator,
  __asyncGenerator,
  __asyncValues,
  __await,
  __awaiter,
  __classPrivateFieldGet,
  __classPrivateFieldIn,
  __classPrivateFieldSet,
  __createBinding,
  __decorate,
  __disposeResources,
  __esDecorate,
  __exportStar,
  __extends,
  __generator,
  __importDefault,
  __importStar,
  __makeTemplateObject,
  __metadata,
  __param,
  __propKey,
  __read,
  __rest,
  __runInitializers,
  __setFunctionName,
  __spread,
  __spreadArray,
  __spreadArrays,
  __values,
  default: tslib_es6
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(tslib_es6$1);
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$1 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
var main = {};
var fork = { exports: {} };
var types = { exports: {} };
var shared = {};
var hasRequiredShared;
function requireShared() {
  if (hasRequiredShared) return shared;
  hasRequiredShared = 1;
  Object.defineProperty(shared, "__esModule", { value: true });
  shared.maybeSetModuleExports = void 0;
  var tslib_1 = require$$0;
  var types_1 = tslib_1.__importDefault(requireTypes());
  function default_1(fork2) {
    var types2 = fork2.use(types_1.default);
    var Type = types2.Type;
    var builtin = types2.builtInTypes;
    var isNumber = builtin.number;
    function geq(than) {
      return Type.from(function(value) {
        return isNumber.check(value) && value >= than;
      }, isNumber + " >= " + than);
    }
    var defaults = {
      // Functions were used because (among other reasons) that's the most
      // elegant way to allow for the emptyArray one always to give a new
      // array instance.
      "null": function() {
        return null;
      },
      "emptyArray": function() {
        return [];
      },
      "false": function() {
        return false;
      },
      "true": function() {
        return true;
      },
      "undefined": function() {
      },
      "use strict": function() {
        return "use strict";
      }
    };
    var naiveIsPrimitive = Type.or(builtin.string, builtin.number, builtin.boolean, builtin.null, builtin.undefined);
    var isPrimitive = Type.from(function(value) {
      if (value === null)
        return true;
      var type = typeof value;
      if (type === "object" || type === "function") {
        return false;
      }
      return true;
    }, naiveIsPrimitive.toString());
    return {
      geq,
      defaults,
      isPrimitive
    };
  }
  shared.default = default_1;
  function maybeSetModuleExports(moduleGetter) {
    try {
      var nodeModule = moduleGetter();
      var originalExports = nodeModule.exports;
      var defaultExport = originalExports["default"];
    } catch (_a) {
      return;
    }
    if (defaultExport && defaultExport !== originalExports && typeof originalExports === "object") {
      Object.assign(defaultExport, originalExports, { "default": defaultExport });
      if (originalExports.__esModule) {
        Object.defineProperty(defaultExport, "__esModule", { value: true });
      }
      nodeModule.exports = defaultExport;
    }
  }
  shared.maybeSetModuleExports = maybeSetModuleExports;
  return shared;
}
types.exports;
var hasRequiredTypes;
function requireTypes() {
  if (hasRequiredTypes) return types.exports;
  hasRequiredTypes = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Def = void 0;
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var Op = Object.prototype;
    var objToStr = Op.toString;
    var hasOwn = Op.hasOwnProperty;
    var BaseType = (
      /** @class */
      function() {
        function BaseType2() {
        }
        BaseType2.prototype.assert = function(value, deep) {
          if (!this.check(value, deep)) {
            var str = shallowStringify(value);
            throw new Error(str + " does not match type " + this);
          }
          return true;
        };
        BaseType2.prototype.arrayOf = function() {
          var elemType = this;
          return new ArrayType(elemType);
        };
        return BaseType2;
      }()
    );
    var ArrayType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(ArrayType2, _super);
        function ArrayType2(elemType) {
          var _this = _super.call(this) || this;
          _this.elemType = elemType;
          _this.kind = "ArrayType";
          return _this;
        }
        ArrayType2.prototype.toString = function() {
          return "[" + this.elemType + "]";
        };
        ArrayType2.prototype.check = function(value, deep) {
          var _this = this;
          return Array.isArray(value) && value.every(function(elem) {
            return _this.elemType.check(elem, deep);
          });
        };
        return ArrayType2;
      }(BaseType)
    );
    var IdentityType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(IdentityType2, _super);
        function IdentityType2(value) {
          var _this = _super.call(this) || this;
          _this.value = value;
          _this.kind = "IdentityType";
          return _this;
        }
        IdentityType2.prototype.toString = function() {
          return String(this.value);
        };
        IdentityType2.prototype.check = function(value, deep) {
          var result = value === this.value;
          if (!result && typeof deep === "function") {
            deep(this, value);
          }
          return result;
        };
        return IdentityType2;
      }(BaseType)
    );
    var ObjectType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(ObjectType2, _super);
        function ObjectType2(fields) {
          var _this = _super.call(this) || this;
          _this.fields = fields;
          _this.kind = "ObjectType";
          return _this;
        }
        ObjectType2.prototype.toString = function() {
          return "{ " + this.fields.join(", ") + " }";
        };
        ObjectType2.prototype.check = function(value, deep) {
          return objToStr.call(value) === objToStr.call({}) && this.fields.every(function(field) {
            return field.type.check(value[field.name], deep);
          });
        };
        return ObjectType2;
      }(BaseType)
    );
    var OrType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(OrType2, _super);
        function OrType2(types2) {
          var _this = _super.call(this) || this;
          _this.types = types2;
          _this.kind = "OrType";
          return _this;
        }
        OrType2.prototype.toString = function() {
          return this.types.join(" | ");
        };
        OrType2.prototype.check = function(value, deep) {
          if (this.types.some(function(type) {
            return type.check(value, !!deep);
          })) {
            return true;
          }
          if (typeof deep === "function") {
            deep(this, value);
          }
          return false;
        };
        return OrType2;
      }(BaseType)
    );
    var PredicateType = (
      /** @class */
      function(_super) {
        tslib_1.__extends(PredicateType2, _super);
        function PredicateType2(name, predicate) {
          var _this = _super.call(this) || this;
          _this.name = name;
          _this.predicate = predicate;
          _this.kind = "PredicateType";
          return _this;
        }
        PredicateType2.prototype.toString = function() {
          return this.name;
        };
        PredicateType2.prototype.check = function(value, deep) {
          var result = this.predicate(value, deep);
          if (!result && typeof deep === "function") {
            deep(this, value);
          }
          return result;
        };
        return PredicateType2;
      }(BaseType)
    );
    var Def = (
      /** @class */
      function() {
        function Def2(type, typeName) {
          this.type = type;
          this.typeName = typeName;
          this.baseNames = [];
          this.ownFields = /* @__PURE__ */ Object.create(null);
          this.allSupertypes = /* @__PURE__ */ Object.create(null);
          this.supertypeList = [];
          this.allFields = /* @__PURE__ */ Object.create(null);
          this.fieldNames = [];
          this.finalized = false;
          this.buildable = false;
          this.buildParams = [];
        }
        Def2.prototype.isSupertypeOf = function(that) {
          if (that instanceof Def2) {
            if (this.finalized !== true || that.finalized !== true) {
              throw new Error("");
            }
            return hasOwn.call(that.allSupertypes, this.typeName);
          } else {
            throw new Error(that + " is not a Def");
          }
        };
        Def2.prototype.checkAllFields = function(value, deep) {
          var allFields = this.allFields;
          if (this.finalized !== true) {
            throw new Error("" + this.typeName);
          }
          function checkFieldByName(name) {
            var field = allFields[name];
            var type = field.type;
            var child = field.getValue(value);
            return type.check(child, deep);
          }
          return value !== null && typeof value === "object" && Object.keys(allFields).every(checkFieldByName);
        };
        Def2.prototype.bases = function() {
          var supertypeNames = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            supertypeNames[_i] = arguments[_i];
          }
          var bases = this.baseNames;
          if (this.finalized) {
            if (supertypeNames.length !== bases.length) {
              throw new Error("");
            }
            for (var i = 0; i < supertypeNames.length; i++) {
              if (supertypeNames[i] !== bases[i]) {
                throw new Error("");
              }
            }
            return this;
          }
          supertypeNames.forEach(function(baseName) {
            if (bases.indexOf(baseName) < 0) {
              bases.push(baseName);
            }
          });
          return this;
        };
        return Def2;
      }()
    );
    exports2.Def = Def;
    var Field = (
      /** @class */
      function() {
        function Field2(name, type, defaultFn, hidden) {
          this.name = name;
          this.type = type;
          this.defaultFn = defaultFn;
          this.hidden = !!hidden;
        }
        Field2.prototype.toString = function() {
          return JSON.stringify(this.name) + ": " + this.type;
        };
        Field2.prototype.getValue = function(obj) {
          var value = obj[this.name];
          if (typeof value !== "undefined") {
            return value;
          }
          if (typeof this.defaultFn === "function") {
            value = this.defaultFn.call(obj);
          }
          return value;
        };
        return Field2;
      }()
    );
    function shallowStringify(value) {
      if (Array.isArray(value)) {
        return "[" + value.map(shallowStringify).join(", ") + "]";
      }
      if (value && typeof value === "object") {
        return "{ " + Object.keys(value).map(function(key) {
          return key + ": " + value[key];
        }).join(", ") + " }";
      }
      return JSON.stringify(value);
    }
    function typesPlugin(_fork) {
      var Type = {
        or: function() {
          var types2 = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            types2[_i] = arguments[_i];
          }
          return new OrType(types2.map(function(type) {
            return Type.from(type);
          }));
        },
        from: function(value, name) {
          if (value instanceof ArrayType || value instanceof IdentityType || value instanceof ObjectType || value instanceof OrType || value instanceof PredicateType) {
            return value;
          }
          if (value instanceof Def) {
            return value.type;
          }
          if (isArray.check(value)) {
            if (value.length !== 1) {
              throw new Error("only one element type is permitted for typed arrays");
            }
            return new ArrayType(Type.from(value[0]));
          }
          if (isObject.check(value)) {
            return new ObjectType(Object.keys(value).map(function(name2) {
              return new Field(name2, Type.from(value[name2], name2));
            }));
          }
          if (typeof value === "function") {
            var bicfIndex = builtInCtorFns.indexOf(value);
            if (bicfIndex >= 0) {
              return builtInCtorTypes[bicfIndex];
            }
            if (typeof name !== "string") {
              throw new Error("missing name");
            }
            return new PredicateType(name, value);
          }
          return new IdentityType(value);
        },
        // Define a type whose name is registered in a namespace (the defCache) so
        // that future definitions will return the same type given the same name.
        // In particular, this system allows for circular and forward definitions.
        // The Def object d returned from Type.def may be used to configure the
        // type d.type by calling methods such as d.bases, d.build, and d.field.
        def: function(typeName) {
          return hasOwn.call(defCache, typeName) ? defCache[typeName] : defCache[typeName] = new DefImpl(typeName);
        },
        hasDef: function(typeName) {
          return hasOwn.call(defCache, typeName);
        }
      };
      var builtInCtorFns = [];
      var builtInCtorTypes = [];
      function defBuiltInType(name, example) {
        var objStr = objToStr.call(example);
        var type = new PredicateType(name, function(value) {
          return objToStr.call(value) === objStr;
        });
        if (example && typeof example.constructor === "function") {
          builtInCtorFns.push(example.constructor);
          builtInCtorTypes.push(type);
        }
        return type;
      }
      var isString = defBuiltInType("string", "truthy");
      var isFunction = defBuiltInType("function", function() {
      });
      var isArray = defBuiltInType("array", []);
      var isObject = defBuiltInType("object", {});
      var isRegExp = defBuiltInType("RegExp", /./);
      var isDate = defBuiltInType("Date", /* @__PURE__ */ new Date());
      var isNumber = defBuiltInType("number", 3);
      var isBoolean = defBuiltInType("boolean", true);
      var isNull = defBuiltInType("null", null);
      var isUndefined = defBuiltInType("undefined", void 0);
      var isBigInt = typeof BigInt === "function" ? defBuiltInType("BigInt", BigInt(1234)) : new PredicateType("BigInt", function() {
        return false;
      });
      var builtInTypes = {
        string: isString,
        function: isFunction,
        array: isArray,
        object: isObject,
        RegExp: isRegExp,
        Date: isDate,
        number: isNumber,
        boolean: isBoolean,
        null: isNull,
        undefined: isUndefined,
        BigInt: isBigInt
      };
      var defCache = /* @__PURE__ */ Object.create(null);
      function defFromValue(value) {
        if (value && typeof value === "object") {
          var type = value.type;
          if (typeof type === "string" && hasOwn.call(defCache, type)) {
            var d = defCache[type];
            if (d.finalized) {
              return d;
            }
          }
        }
        return null;
      }
      var DefImpl = (
        /** @class */
        function(_super) {
          tslib_1.__extends(DefImpl2, _super);
          function DefImpl2(typeName) {
            var _this = _super.call(this, new PredicateType(typeName, function(value, deep) {
              return _this.check(value, deep);
            }), typeName) || this;
            return _this;
          }
          DefImpl2.prototype.check = function(value, deep) {
            if (this.finalized !== true) {
              throw new Error("prematurely checking unfinalized type " + this.typeName);
            }
            if (value === null || typeof value !== "object") {
              return false;
            }
            var vDef = defFromValue(value);
            if (!vDef) {
              if (this.typeName === "SourceLocation" || this.typeName === "Position") {
                return this.checkAllFields(value, deep);
              }
              return false;
            }
            if (deep && vDef === this) {
              return this.checkAllFields(value, deep);
            }
            if (!this.isSupertypeOf(vDef)) {
              return false;
            }
            if (!deep) {
              return true;
            }
            return vDef.checkAllFields(value, deep) && this.checkAllFields(value, false);
          };
          DefImpl2.prototype.build = function() {
            var _this = this;
            var buildParams = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              buildParams[_i] = arguments[_i];
            }
            this.buildParams = buildParams;
            if (this.buildable) {
              return this;
            }
            this.field("type", String, function() {
              return _this.typeName;
            });
            this.buildable = true;
            var addParam = function(built, param, arg, isArgAvailable) {
              if (hasOwn.call(built, param))
                return;
              var all = _this.allFields;
              if (!hasOwn.call(all, param)) {
                throw new Error("" + param);
              }
              var field = all[param];
              var type = field.type;
              var value;
              if (isArgAvailable) {
                value = arg;
              } else if (field.defaultFn) {
                value = field.defaultFn.call(built);
              } else {
                var message = "no value or default function given for field " + JSON.stringify(param) + " of " + _this.typeName + "(" + _this.buildParams.map(function(name) {
                  return all[name];
                }).join(", ") + ")";
                throw new Error(message);
              }
              if (!type.check(value)) {
                throw new Error(shallowStringify(value) + " does not match field " + field + " of type " + _this.typeName);
              }
              built[param] = value;
            };
            var builder = function() {
              var args = [];
              for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                args[_i2] = arguments[_i2];
              }
              var argc = args.length;
              if (!_this.finalized) {
                throw new Error("attempting to instantiate unfinalized type " + _this.typeName);
              }
              var built = Object.create(nodePrototype);
              _this.buildParams.forEach(function(param, i) {
                if (i < argc) {
                  addParam(built, param, args[i], true);
                } else {
                  addParam(built, param, null, false);
                }
              });
              Object.keys(_this.allFields).forEach(function(param) {
                addParam(built, param, null, false);
              });
              if (built.type !== _this.typeName) {
                throw new Error("");
              }
              return built;
            };
            builder.from = function(obj) {
              if (!_this.finalized) {
                throw new Error("attempting to instantiate unfinalized type " + _this.typeName);
              }
              var built = Object.create(nodePrototype);
              Object.keys(_this.allFields).forEach(function(param) {
                if (hasOwn.call(obj, param)) {
                  addParam(built, param, obj[param], true);
                } else {
                  addParam(built, param, null, false);
                }
              });
              if (built.type !== _this.typeName) {
                throw new Error("");
              }
              return built;
            };
            Object.defineProperty(builders, getBuilderName(this.typeName), {
              enumerable: true,
              value: builder
            });
            return this;
          };
          DefImpl2.prototype.field = function(name, type, defaultFn, hidden) {
            if (this.finalized) {
              console.error("Ignoring attempt to redefine field " + JSON.stringify(name) + " of finalized type " + JSON.stringify(this.typeName));
              return this;
            }
            this.ownFields[name] = new Field(name, Type.from(type), defaultFn, hidden);
            return this;
          };
          DefImpl2.prototype.finalize = function() {
            var _this = this;
            if (!this.finalized) {
              var allFields = this.allFields;
              var allSupertypes = this.allSupertypes;
              this.baseNames.forEach(function(name) {
                var def = defCache[name];
                if (def instanceof Def) {
                  def.finalize();
                  extend(allFields, def.allFields);
                  extend(allSupertypes, def.allSupertypes);
                } else {
                  var message = "unknown supertype name " + JSON.stringify(name) + " for subtype " + JSON.stringify(_this.typeName);
                  throw new Error(message);
                }
              });
              extend(allFields, this.ownFields);
              allSupertypes[this.typeName] = this;
              this.fieldNames.length = 0;
              for (var fieldName in allFields) {
                if (hasOwn.call(allFields, fieldName) && !allFields[fieldName].hidden) {
                  this.fieldNames.push(fieldName);
                }
              }
              Object.defineProperty(namedTypes2, this.typeName, {
                enumerable: true,
                value: this.type
              });
              this.finalized = true;
              populateSupertypeList(this.typeName, this.supertypeList);
              if (this.buildable && this.supertypeList.lastIndexOf("Expression") >= 0) {
                wrapExpressionBuilderWithStatement(this.typeName);
              }
            }
          };
          return DefImpl2;
        }(Def)
      );
      function getSupertypeNames(typeName) {
        if (!hasOwn.call(defCache, typeName)) {
          throw new Error("");
        }
        var d = defCache[typeName];
        if (d.finalized !== true) {
          throw new Error("");
        }
        return d.supertypeList.slice(1);
      }
      function computeSupertypeLookupTable(candidates) {
        var table = {};
        var typeNames = Object.keys(defCache);
        var typeNameCount = typeNames.length;
        for (var i = 0; i < typeNameCount; ++i) {
          var typeName = typeNames[i];
          var d = defCache[typeName];
          if (d.finalized !== true) {
            throw new Error("" + typeName);
          }
          for (var j = 0; j < d.supertypeList.length; ++j) {
            var superTypeName = d.supertypeList[j];
            if (hasOwn.call(candidates, superTypeName)) {
              table[typeName] = superTypeName;
              break;
            }
          }
        }
        return table;
      }
      var builders = /* @__PURE__ */ Object.create(null);
      var nodePrototype = {};
      function defineMethod(name, func) {
        var old = nodePrototype[name];
        if (isUndefined.check(func)) {
          delete nodePrototype[name];
        } else {
          isFunction.assert(func);
          Object.defineProperty(nodePrototype, name, {
            enumerable: true,
            configurable: true,
            value: func
          });
        }
        return old;
      }
      function getBuilderName(typeName) {
        return typeName.replace(/^[A-Z]+/, function(upperCasePrefix) {
          var len = upperCasePrefix.length;
          switch (len) {
            case 0:
              return "";
            case 1:
              return upperCasePrefix.toLowerCase();
            default:
              return upperCasePrefix.slice(0, len - 1).toLowerCase() + upperCasePrefix.charAt(len - 1);
          }
        });
      }
      function getStatementBuilderName(typeName) {
        typeName = getBuilderName(typeName);
        return typeName.replace(/(Expression)?$/, "Statement");
      }
      var namedTypes2 = {};
      function getFieldNames(object) {
        var d = defFromValue(object);
        if (d) {
          return d.fieldNames.slice(0);
        }
        if ("type" in object) {
          throw new Error("did not recognize object of type " + JSON.stringify(object.type));
        }
        return Object.keys(object);
      }
      function getFieldValue(object, fieldName) {
        var d = defFromValue(object);
        if (d) {
          var field = d.allFields[fieldName];
          if (field) {
            return field.getValue(object);
          }
        }
        return object && object[fieldName];
      }
      function eachField(object, callback, context) {
        getFieldNames(object).forEach(function(name) {
          callback.call(this, name, getFieldValue(object, name));
        }, context);
      }
      function someField(object, callback, context) {
        return getFieldNames(object).some(function(name) {
          return callback.call(this, name, getFieldValue(object, name));
        }, context);
      }
      function wrapExpressionBuilderWithStatement(typeName) {
        var wrapperName = getStatementBuilderName(typeName);
        if (builders[wrapperName])
          return;
        var wrapped = builders[getBuilderName(typeName)];
        if (!wrapped)
          return;
        var builder = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return builders.expressionStatement(wrapped.apply(builders, args));
        };
        builder.from = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return builders.expressionStatement(wrapped.from.apply(builders, args));
        };
        builders[wrapperName] = builder;
      }
      function populateSupertypeList(typeName, list) {
        list.length = 0;
        list.push(typeName);
        var lastSeen = /* @__PURE__ */ Object.create(null);
        for (var pos = 0; pos < list.length; ++pos) {
          typeName = list[pos];
          var d = defCache[typeName];
          if (d.finalized !== true) {
            throw new Error("");
          }
          if (hasOwn.call(lastSeen, typeName)) {
            delete list[lastSeen[typeName]];
          }
          lastSeen[typeName] = pos;
          list.push.apply(list, d.baseNames);
        }
        for (var to = 0, from = to, len = list.length; from < len; ++from) {
          if (hasOwn.call(list, from)) {
            list[to++] = list[from];
          }
        }
        list.length = to;
      }
      function extend(into, from) {
        Object.keys(from).forEach(function(name) {
          into[name] = from[name];
        });
        return into;
      }
      function finalize() {
        Object.keys(defCache).forEach(function(name) {
          defCache[name].finalize();
        });
      }
      return {
        Type,
        builtInTypes,
        getSupertypeNames,
        computeSupertypeLookupTable,
        builders,
        defineMethod,
        getBuilderName,
        getStatementBuilderName,
        namedTypes: namedTypes2,
        getFieldNames,
        getFieldValue,
        eachField,
        someField,
        finalize
      };
    }
    exports2.default = typesPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(types, types.exports);
  return types.exports;
}
var pathVisitor = { exports: {} };
var nodePath = { exports: {} };
var path = { exports: {} };
path.exports;
var hasRequiredPath;
function requirePath() {
  if (hasRequiredPath) return path.exports;
  hasRequiredPath = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var types_1 = tslib_1.__importDefault(requireTypes());
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    function pathPlugin(fork2) {
      var types2 = fork2.use(types_1.default);
      var isArray = types2.builtInTypes.array;
      var isNumber = types2.builtInTypes.number;
      var Path = function Path2(value, parentPath, name) {
        if (!(this instanceof Path2)) {
          throw new Error("Path constructor cannot be invoked without 'new'");
        }
        if (parentPath) {
          if (!(parentPath instanceof Path2)) {
            throw new Error("");
          }
        } else {
          parentPath = null;
          name = null;
        }
        this.value = value;
        this.parentPath = parentPath;
        this.name = name;
        this.__childCache = null;
      };
      var Pp = Path.prototype;
      function getChildCache(path2) {
        return path2.__childCache || (path2.__childCache = /* @__PURE__ */ Object.create(null));
      }
      function getChildPath(path2, name) {
        var cache = getChildCache(path2);
        var actualChildValue = path2.getValueProperty(name);
        var childPath = cache[name];
        if (!hasOwn.call(cache, name) || // Ensure consistency between cache and reality.
        childPath.value !== actualChildValue) {
          childPath = cache[name] = new path2.constructor(actualChildValue, path2, name);
        }
        return childPath;
      }
      Pp.getValueProperty = function getValueProperty(name) {
        return this.value[name];
      };
      Pp.get = function get() {
        var names = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          names[_i] = arguments[_i];
        }
        var path2 = this;
        var count = names.length;
        for (var i = 0; i < count; ++i) {
          path2 = getChildPath(path2, names[i]);
        }
        return path2;
      };
      Pp.each = function each(callback, context) {
        var childPaths = [];
        var len = this.value.length;
        var i = 0;
        for (var i = 0; i < len; ++i) {
          if (hasOwn.call(this.value, i)) {
            childPaths[i] = this.get(i);
          }
        }
        context = context || this;
        for (i = 0; i < len; ++i) {
          if (hasOwn.call(childPaths, i)) {
            callback.call(context, childPaths[i]);
          }
        }
      };
      Pp.map = function map(callback, context) {
        var result = [];
        this.each(function(childPath) {
          result.push(callback.call(this, childPath));
        }, context);
        return result;
      };
      Pp.filter = function filter(callback, context) {
        var result = [];
        this.each(function(childPath) {
          if (callback.call(this, childPath)) {
            result.push(childPath);
          }
        }, context);
        return result;
      };
      function emptyMoves() {
      }
      function getMoves(path2, offset, start, end) {
        isArray.assert(path2.value);
        if (offset === 0) {
          return emptyMoves;
        }
        var length = path2.value.length;
        if (length < 1) {
          return emptyMoves;
        }
        var argc = arguments.length;
        if (argc === 2) {
          start = 0;
          end = length;
        } else if (argc === 3) {
          start = Math.max(start, 0);
          end = length;
        } else {
          start = Math.max(start, 0);
          end = Math.min(end, length);
        }
        isNumber.assert(start);
        isNumber.assert(end);
        var moves = /* @__PURE__ */ Object.create(null);
        var cache = getChildCache(path2);
        for (var i = start; i < end; ++i) {
          if (hasOwn.call(path2.value, i)) {
            var childPath = path2.get(i);
            if (childPath.name !== i) {
              throw new Error("");
            }
            var newIndex = i + offset;
            childPath.name = newIndex;
            moves[newIndex] = childPath;
            delete cache[i];
          }
        }
        delete cache.length;
        return function() {
          for (var newIndex2 in moves) {
            var childPath2 = moves[newIndex2];
            if (childPath2.name !== +newIndex2) {
              throw new Error("");
            }
            cache[newIndex2] = childPath2;
            path2.value[newIndex2] = childPath2.value;
          }
        };
      }
      Pp.shift = function shift() {
        var move = getMoves(this, -1);
        var result = this.value.shift();
        move();
        return result;
      };
      Pp.unshift = function unshift() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var move = getMoves(this, args.length);
        var result = this.value.unshift.apply(this.value, args);
        move();
        return result;
      };
      Pp.push = function push() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        isArray.assert(this.value);
        delete getChildCache(this).length;
        return this.value.push.apply(this.value, args);
      };
      Pp.pop = function pop() {
        isArray.assert(this.value);
        var cache = getChildCache(this);
        delete cache[this.value.length - 1];
        delete cache.length;
        return this.value.pop();
      };
      Pp.insertAt = function insertAt(index) {
        var argc = arguments.length;
        var move = getMoves(this, argc - 1, index);
        if (move === emptyMoves && argc <= 1) {
          return this;
        }
        index = Math.max(index, 0);
        for (var i = 1; i < argc; ++i) {
          this.value[index + i - 1] = arguments[i];
        }
        move();
        return this;
      };
      Pp.insertBefore = function insertBefore() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var pp = this.parentPath;
        var argc = args.length;
        var insertAtArgs = [this.name];
        for (var i = 0; i < argc; ++i) {
          insertAtArgs.push(args[i]);
        }
        return pp.insertAt.apply(pp, insertAtArgs);
      };
      Pp.insertAfter = function insertAfter() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var pp = this.parentPath;
        var argc = args.length;
        var insertAtArgs = [this.name + 1];
        for (var i = 0; i < argc; ++i) {
          insertAtArgs.push(args[i]);
        }
        return pp.insertAt.apply(pp, insertAtArgs);
      };
      function repairRelationshipWithParent(path2) {
        if (!(path2 instanceof Path)) {
          throw new Error("");
        }
        var pp = path2.parentPath;
        if (!pp) {
          return path2;
        }
        var parentValue = pp.value;
        var parentCache = getChildCache(pp);
        if (parentValue[path2.name] === path2.value) {
          parentCache[path2.name] = path2;
        } else if (isArray.check(parentValue)) {
          var i = parentValue.indexOf(path2.value);
          if (i >= 0) {
            parentCache[path2.name = i] = path2;
          }
        } else {
          parentValue[path2.name] = path2.value;
          parentCache[path2.name] = path2;
        }
        if (parentValue[path2.name] !== path2.value) {
          throw new Error("");
        }
        if (path2.parentPath.get(path2.name) !== path2) {
          throw new Error("");
        }
        return path2;
      }
      Pp.replace = function replace(replacement) {
        var results = [];
        var parentValue = this.parentPath.value;
        var parentCache = getChildCache(this.parentPath);
        var count = arguments.length;
        repairRelationshipWithParent(this);
        if (isArray.check(parentValue)) {
          var originalLength = parentValue.length;
          var move = getMoves(this.parentPath, count - 1, this.name + 1);
          var spliceArgs = [this.name, 1];
          for (var i = 0; i < count; ++i) {
            spliceArgs.push(arguments[i]);
          }
          var splicedOut = parentValue.splice.apply(parentValue, spliceArgs);
          if (splicedOut[0] !== this.value) {
            throw new Error("");
          }
          if (parentValue.length !== originalLength - 1 + count) {
            throw new Error("");
          }
          move();
          if (count === 0) {
            delete this.value;
            delete parentCache[this.name];
            this.__childCache = null;
          } else {
            if (parentValue[this.name] !== replacement) {
              throw new Error("");
            }
            if (this.value !== replacement) {
              this.value = replacement;
              this.__childCache = null;
            }
            for (i = 0; i < count; ++i) {
              results.push(this.parentPath.get(this.name + i));
            }
            if (results[0] !== this) {
              throw new Error("");
            }
          }
        } else if (count === 1) {
          if (this.value !== replacement) {
            this.__childCache = null;
          }
          this.value = parentValue[this.name] = replacement;
          results.push(this);
        } else if (count === 0) {
          delete parentValue[this.name];
          delete this.value;
          this.__childCache = null;
        } else {
          throw new Error("Could not replace path");
        }
        return results;
      };
      return Path;
    }
    exports2.default = pathPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(path, path.exports);
  return path.exports;
}
var scope = { exports: {} };
scope.exports;
var hasRequiredScope;
function requireScope() {
  if (hasRequiredScope) return scope.exports;
  hasRequiredScope = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var types_1 = tslib_1.__importDefault(requireTypes());
    var hasOwn = Object.prototype.hasOwnProperty;
    function scopePlugin(fork2) {
      var types2 = fork2.use(types_1.default);
      var Type = types2.Type;
      var namedTypes2 = types2.namedTypes;
      var Node = namedTypes2.Node;
      var Expression = namedTypes2.Expression;
      var isArray = types2.builtInTypes.array;
      var b2 = types2.builders;
      var Scope = function Scope2(path2, parentScope) {
        if (!(this instanceof Scope2)) {
          throw new Error("Scope constructor cannot be invoked without 'new'");
        }
        if (!TypeParameterScopeType.check(path2.value)) {
          ScopeType.assert(path2.value);
        }
        var depth;
        if (parentScope) {
          if (!(parentScope instanceof Scope2)) {
            throw new Error("");
          }
          depth = parentScope.depth + 1;
        } else {
          parentScope = null;
          depth = 0;
        }
        Object.defineProperties(this, {
          path: { value: path2 },
          node: { value: path2.value },
          isGlobal: { value: !parentScope, enumerable: true },
          depth: { value: depth },
          parent: { value: parentScope },
          bindings: { value: {} },
          types: { value: {} }
        });
      };
      var ScopeType = Type.or(
        // Program nodes introduce global scopes.
        namedTypes2.Program,
        // Function is the supertype of FunctionExpression,
        // FunctionDeclaration, ArrowExpression, etc.
        namedTypes2.Function,
        // In case you didn't know, the caught parameter shadows any variable
        // of the same name in an outer scope.
        namedTypes2.CatchClause
      );
      var TypeParameterScopeType = Type.or(namedTypes2.Function, namedTypes2.ClassDeclaration, namedTypes2.ClassExpression, namedTypes2.InterfaceDeclaration, namedTypes2.TSInterfaceDeclaration, namedTypes2.TypeAlias, namedTypes2.TSTypeAliasDeclaration);
      var FlowOrTSTypeParameterType = Type.or(namedTypes2.TypeParameter, namedTypes2.TSTypeParameter);
      Scope.isEstablishedBy = function(node) {
        return ScopeType.check(node) || TypeParameterScopeType.check(node);
      };
      var Sp = Scope.prototype;
      Sp.didScan = false;
      Sp.declares = function(name) {
        this.scan();
        return hasOwn.call(this.bindings, name);
      };
      Sp.declaresType = function(name) {
        this.scan();
        return hasOwn.call(this.types, name);
      };
      Sp.declareTemporary = function(prefix) {
        if (prefix) {
          if (!/^[a-z$_]/i.test(prefix)) {
            throw new Error("");
          }
        } else {
          prefix = "t$";
        }
        prefix += this.depth.toString(36) + "$";
        this.scan();
        var index = 0;
        while (this.declares(prefix + index)) {
          ++index;
        }
        var name = prefix + index;
        return this.bindings[name] = types2.builders.identifier(name);
      };
      Sp.injectTemporary = function(identifier, init) {
        identifier || (identifier = this.declareTemporary());
        var bodyPath = this.path.get("body");
        if (namedTypes2.BlockStatement.check(bodyPath.value)) {
          bodyPath = bodyPath.get("body");
        }
        bodyPath.unshift(b2.variableDeclaration("var", [b2.variableDeclarator(identifier, init || null)]));
        return identifier;
      };
      Sp.scan = function(force) {
        if (force || !this.didScan) {
          for (var name in this.bindings) {
            delete this.bindings[name];
          }
          for (var name in this.types) {
            delete this.types[name];
          }
          scanScope(this.path, this.bindings, this.types);
          this.didScan = true;
        }
      };
      Sp.getBindings = function() {
        this.scan();
        return this.bindings;
      };
      Sp.getTypes = function() {
        this.scan();
        return this.types;
      };
      function scanScope(path2, bindings, scopeTypes) {
        var node = path2.value;
        if (TypeParameterScopeType.check(node)) {
          var params = path2.get("typeParameters", "params");
          if (isArray.check(params.value)) {
            params.each(function(childPath) {
              addTypeParameter(childPath, scopeTypes);
            });
          }
        }
        if (ScopeType.check(node)) {
          if (namedTypes2.CatchClause.check(node)) {
            addPattern(path2.get("param"), bindings);
          } else {
            recursiveScanScope(path2, bindings, scopeTypes);
          }
        }
      }
      function recursiveScanScope(path2, bindings, scopeTypes) {
        var node = path2.value;
        if (path2.parent && namedTypes2.FunctionExpression.check(path2.parent.node) && path2.parent.node.id) {
          addPattern(path2.parent.get("id"), bindings);
        }
        if (!node) ;
        else if (isArray.check(node)) {
          path2.each(function(childPath) {
            recursiveScanChild(childPath, bindings, scopeTypes);
          });
        } else if (namedTypes2.Function.check(node)) {
          path2.get("params").each(function(paramPath) {
            addPattern(paramPath, bindings);
          });
          recursiveScanChild(path2.get("body"), bindings, scopeTypes);
          recursiveScanScope(path2.get("typeParameters"), bindings, scopeTypes);
        } else if (namedTypes2.TypeAlias && namedTypes2.TypeAlias.check(node) || namedTypes2.InterfaceDeclaration && namedTypes2.InterfaceDeclaration.check(node) || namedTypes2.TSTypeAliasDeclaration && namedTypes2.TSTypeAliasDeclaration.check(node) || namedTypes2.TSInterfaceDeclaration && namedTypes2.TSInterfaceDeclaration.check(node)) {
          addTypePattern(path2.get("id"), scopeTypes);
        } else if (namedTypes2.VariableDeclarator.check(node)) {
          addPattern(path2.get("id"), bindings);
          recursiveScanChild(path2.get("init"), bindings, scopeTypes);
        } else if (node.type === "ImportSpecifier" || node.type === "ImportNamespaceSpecifier" || node.type === "ImportDefaultSpecifier") {
          addPattern(
            // Esprima used to use the .name field to refer to the local
            // binding identifier for ImportSpecifier nodes, but .id for
            // ImportNamespaceSpecifier and ImportDefaultSpecifier nodes.
            // ESTree/Acorn/ESpree use .local for all three node types.
            path2.get(node.local ? "local" : node.name ? "name" : "id"),
            bindings
          );
        } else if (Node.check(node) && !Expression.check(node)) {
          types2.eachField(node, function(name, child) {
            var childPath = path2.get(name);
            if (!pathHasValue(childPath, child)) {
              throw new Error("");
            }
            recursiveScanChild(childPath, bindings, scopeTypes);
          });
        }
      }
      function pathHasValue(path2, value) {
        if (path2.value === value) {
          return true;
        }
        if (Array.isArray(path2.value) && path2.value.length === 0 && Array.isArray(value) && value.length === 0) {
          return true;
        }
        return false;
      }
      function recursiveScanChild(path2, bindings, scopeTypes) {
        var node = path2.value;
        if (!node || Expression.check(node)) ;
        else if (namedTypes2.FunctionDeclaration.check(node) && node.id !== null) {
          addPattern(path2.get("id"), bindings);
        } else if (namedTypes2.ClassDeclaration && namedTypes2.ClassDeclaration.check(node) && node.id !== null) {
          addPattern(path2.get("id"), bindings);
          recursiveScanScope(path2.get("typeParameters"), bindings, scopeTypes);
        } else if (namedTypes2.InterfaceDeclaration && namedTypes2.InterfaceDeclaration.check(node) || namedTypes2.TSInterfaceDeclaration && namedTypes2.TSInterfaceDeclaration.check(node)) {
          addTypePattern(path2.get("id"), scopeTypes);
        } else if (ScopeType.check(node)) {
          if (namedTypes2.CatchClause.check(node) && // TODO Broaden this to accept any pattern.
          namedTypes2.Identifier.check(node.param)) {
            var catchParamName = node.param.name;
            var hadBinding = hasOwn.call(bindings, catchParamName);
            recursiveScanScope(path2.get("body"), bindings, scopeTypes);
            if (!hadBinding) {
              delete bindings[catchParamName];
            }
          }
        } else {
          recursiveScanScope(path2, bindings, scopeTypes);
        }
      }
      function addPattern(patternPath, bindings) {
        var pattern = patternPath.value;
        namedTypes2.Pattern.assert(pattern);
        if (namedTypes2.Identifier.check(pattern)) {
          if (hasOwn.call(bindings, pattern.name)) {
            bindings[pattern.name].push(patternPath);
          } else {
            bindings[pattern.name] = [patternPath];
          }
        } else if (namedTypes2.AssignmentPattern && namedTypes2.AssignmentPattern.check(pattern)) {
          addPattern(patternPath.get("left"), bindings);
        } else if (namedTypes2.ObjectPattern && namedTypes2.ObjectPattern.check(pattern)) {
          patternPath.get("properties").each(function(propertyPath) {
            var property = propertyPath.value;
            if (namedTypes2.Pattern.check(property)) {
              addPattern(propertyPath, bindings);
            } else if (namedTypes2.Property.check(property) || namedTypes2.ObjectProperty && namedTypes2.ObjectProperty.check(property)) {
              addPattern(propertyPath.get("value"), bindings);
            } else if (namedTypes2.SpreadProperty && namedTypes2.SpreadProperty.check(property)) {
              addPattern(propertyPath.get("argument"), bindings);
            }
          });
        } else if (namedTypes2.ArrayPattern && namedTypes2.ArrayPattern.check(pattern)) {
          patternPath.get("elements").each(function(elementPath) {
            var element = elementPath.value;
            if (namedTypes2.Pattern.check(element)) {
              addPattern(elementPath, bindings);
            } else if (namedTypes2.SpreadElement && namedTypes2.SpreadElement.check(element)) {
              addPattern(elementPath.get("argument"), bindings);
            }
          });
        } else if (namedTypes2.PropertyPattern && namedTypes2.PropertyPattern.check(pattern)) {
          addPattern(patternPath.get("pattern"), bindings);
        } else if (namedTypes2.SpreadElementPattern && namedTypes2.SpreadElementPattern.check(pattern) || namedTypes2.RestElement && namedTypes2.RestElement.check(pattern) || namedTypes2.SpreadPropertyPattern && namedTypes2.SpreadPropertyPattern.check(pattern)) {
          addPattern(patternPath.get("argument"), bindings);
        }
      }
      function addTypePattern(patternPath, types3) {
        var pattern = patternPath.value;
        namedTypes2.Pattern.assert(pattern);
        if (namedTypes2.Identifier.check(pattern)) {
          if (hasOwn.call(types3, pattern.name)) {
            types3[pattern.name].push(patternPath);
          } else {
            types3[pattern.name] = [patternPath];
          }
        }
      }
      function addTypeParameter(parameterPath, types3) {
        var parameter = parameterPath.value;
        FlowOrTSTypeParameterType.assert(parameter);
        if (hasOwn.call(types3, parameter.name)) {
          types3[parameter.name].push(parameterPath);
        } else {
          types3[parameter.name] = [parameterPath];
        }
      }
      Sp.lookup = function(name) {
        for (var scope2 = this; scope2; scope2 = scope2.parent)
          if (scope2.declares(name))
            break;
        return scope2;
      };
      Sp.lookupType = function(name) {
        for (var scope2 = this; scope2; scope2 = scope2.parent)
          if (scope2.declaresType(name))
            break;
        return scope2;
      };
      Sp.getGlobalScope = function() {
        var scope2 = this;
        while (!scope2.isGlobal)
          scope2 = scope2.parent;
        return scope2;
      };
      return Scope;
    }
    exports2.default = scopePlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(scope, scope.exports);
  return scope.exports;
}
nodePath.exports;
var hasRequiredNodePath;
function requireNodePath() {
  if (hasRequiredNodePath) return nodePath.exports;
  hasRequiredNodePath = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var path_1 = tslib_1.__importDefault(requirePath());
    var scope_1 = tslib_1.__importDefault(requireScope());
    var shared_1 = requireShared();
    function nodePathPlugin(fork2) {
      var types2 = fork2.use(types_1.default);
      var n = types2.namedTypes;
      var b2 = types2.builders;
      var isNumber = types2.builtInTypes.number;
      var isArray = types2.builtInTypes.array;
      var Path = fork2.use(path_1.default);
      var Scope = fork2.use(scope_1.default);
      var NodePath = function NodePath2(value, parentPath, name) {
        if (!(this instanceof NodePath2)) {
          throw new Error("NodePath constructor cannot be invoked without 'new'");
        }
        Path.call(this, value, parentPath, name);
      };
      var NPp = NodePath.prototype = Object.create(Path.prototype, {
        constructor: {
          value: NodePath,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      Object.defineProperties(NPp, {
        node: {
          get: function() {
            Object.defineProperty(this, "node", {
              configurable: true,
              value: this._computeNode()
            });
            return this.node;
          }
        },
        parent: {
          get: function() {
            Object.defineProperty(this, "parent", {
              configurable: true,
              value: this._computeParent()
            });
            return this.parent;
          }
        },
        scope: {
          get: function() {
            Object.defineProperty(this, "scope", {
              configurable: true,
              value: this._computeScope()
            });
            return this.scope;
          }
        }
      });
      NPp.replace = function() {
        delete this.node;
        delete this.parent;
        delete this.scope;
        return Path.prototype.replace.apply(this, arguments);
      };
      NPp.prune = function() {
        var remainingNodePath = this.parent;
        this.replace();
        return cleanUpNodesAfterPrune(remainingNodePath);
      };
      NPp._computeNode = function() {
        var value = this.value;
        if (n.Node.check(value)) {
          return value;
        }
        var pp = this.parentPath;
        return pp && pp.node || null;
      };
      NPp._computeParent = function() {
        var value = this.value;
        var pp = this.parentPath;
        if (!n.Node.check(value)) {
          while (pp && !n.Node.check(pp.value)) {
            pp = pp.parentPath;
          }
          if (pp) {
            pp = pp.parentPath;
          }
        }
        while (pp && !n.Node.check(pp.value)) {
          pp = pp.parentPath;
        }
        return pp || null;
      };
      NPp._computeScope = function() {
        var value = this.value;
        var pp = this.parentPath;
        var scope2 = pp && pp.scope;
        if (n.Node.check(value) && Scope.isEstablishedBy(value)) {
          scope2 = new Scope(this, scope2);
        }
        return scope2 || null;
      };
      NPp.getValueProperty = function(name) {
        return types2.getFieldValue(this.value, name);
      };
      NPp.needsParens = function(assumeExpressionContext) {
        var pp = this.parentPath;
        if (!pp) {
          return false;
        }
        var node = this.value;
        if (!n.Expression.check(node)) {
          return false;
        }
        if (node.type === "Identifier") {
          return false;
        }
        while (!n.Node.check(pp.value)) {
          pp = pp.parentPath;
          if (!pp) {
            return false;
          }
        }
        var parent = pp.value;
        switch (node.type) {
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
            return parent.type === "MemberExpression" && this.name === "object" && parent.object === node;
          case "BinaryExpression":
          case "LogicalExpression":
            switch (parent.type) {
              case "CallExpression":
                return this.name === "callee" && parent.callee === node;
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
                return true;
              case "MemberExpression":
                return this.name === "object" && parent.object === node;
              case "BinaryExpression":
              case "LogicalExpression": {
                var n_1 = node;
                var po = parent.operator;
                var pp_1 = PRECEDENCE[po];
                var no = n_1.operator;
                var np = PRECEDENCE[no];
                if (pp_1 > np) {
                  return true;
                }
                if (pp_1 === np && this.name === "right") {
                  if (parent.right !== n_1) {
                    throw new Error("Nodes must be equal");
                  }
                  return true;
                }
              }
              default:
                return false;
            }
          case "SequenceExpression":
            switch (parent.type) {
              case "ForStatement":
                return false;
              case "ExpressionStatement":
                return this.name !== "expression";
              default:
                return true;
            }
          case "YieldExpression":
            switch (parent.type) {
              case "BinaryExpression":
              case "LogicalExpression":
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
              case "CallExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ConditionalExpression":
              case "YieldExpression":
                return true;
              default:
                return false;
            }
          case "Literal":
            return parent.type === "MemberExpression" && isNumber.check(node.value) && this.name === "object" && parent.object === node;
          case "AssignmentExpression":
          case "ConditionalExpression":
            switch (parent.type) {
              case "UnaryExpression":
              case "SpreadElement":
              case "SpreadProperty":
              case "BinaryExpression":
              case "LogicalExpression":
                return true;
              case "CallExpression":
                return this.name === "callee" && parent.callee === node;
              case "ConditionalExpression":
                return this.name === "test" && parent.test === node;
              case "MemberExpression":
                return this.name === "object" && parent.object === node;
              default:
                return false;
            }
          default:
            if (parent.type === "NewExpression" && this.name === "callee" && parent.callee === node) {
              return containsCallExpression(node);
            }
        }
        if (assumeExpressionContext !== true && !this.canBeFirstInStatement() && this.firstInStatement())
          return true;
        return false;
      };
      function isBinary(node) {
        return n.BinaryExpression.check(node) || n.LogicalExpression.check(node);
      }
      var PRECEDENCE = {};
      [
        ["||"],
        ["&&"],
        ["|"],
        ["^"],
        ["&"],
        ["==", "===", "!=", "!=="],
        ["<", ">", "<=", ">=", "in", "instanceof"],
        [">>", "<<", ">>>"],
        ["+", "-"],
        ["*", "/", "%"]
      ].forEach(function(tier, i) {
        tier.forEach(function(op) {
          PRECEDENCE[op] = i;
        });
      });
      function containsCallExpression(node) {
        if (n.CallExpression.check(node)) {
          return true;
        }
        if (isArray.check(node)) {
          return node.some(containsCallExpression);
        }
        if (n.Node.check(node)) {
          return types2.someField(node, function(_name, child) {
            return containsCallExpression(child);
          });
        }
        return false;
      }
      NPp.canBeFirstInStatement = function() {
        var node = this.node;
        return !n.FunctionExpression.check(node) && !n.ObjectExpression.check(node);
      };
      NPp.firstInStatement = function() {
        return firstInStatement(this);
      };
      function firstInStatement(path2) {
        for (var node, parent; path2.parent; path2 = path2.parent) {
          node = path2.node;
          parent = path2.parent.node;
          if (n.BlockStatement.check(parent) && path2.parent.name === "body" && path2.name === 0) {
            if (parent.body[0] !== node) {
              throw new Error("Nodes must be equal");
            }
            return true;
          }
          if (n.ExpressionStatement.check(parent) && path2.name === "expression") {
            if (parent.expression !== node) {
              throw new Error("Nodes must be equal");
            }
            return true;
          }
          if (n.SequenceExpression.check(parent) && path2.parent.name === "expressions" && path2.name === 0) {
            if (parent.expressions[0] !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.CallExpression.check(parent) && path2.name === "callee") {
            if (parent.callee !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.MemberExpression.check(parent) && path2.name === "object") {
            if (parent.object !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.ConditionalExpression.check(parent) && path2.name === "test") {
            if (parent.test !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (isBinary(parent) && path2.name === "left") {
            if (parent.left !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          if (n.UnaryExpression.check(parent) && !parent.prefix && path2.name === "argument") {
            if (parent.argument !== node) {
              throw new Error("Nodes must be equal");
            }
            continue;
          }
          return false;
        }
        return true;
      }
      function cleanUpNodesAfterPrune(remainingNodePath) {
        if (n.VariableDeclaration.check(remainingNodePath.node)) {
          var declarations = remainingNodePath.get("declarations").value;
          if (!declarations || declarations.length === 0) {
            return remainingNodePath.prune();
          }
        } else if (n.ExpressionStatement.check(remainingNodePath.node)) {
          if (!remainingNodePath.get("expression").value) {
            return remainingNodePath.prune();
          }
        } else if (n.IfStatement.check(remainingNodePath.node)) {
          cleanUpIfStatementAfterPrune(remainingNodePath);
        }
        return remainingNodePath;
      }
      function cleanUpIfStatementAfterPrune(ifStatement) {
        var testExpression = ifStatement.get("test").value;
        var alternate = ifStatement.get("alternate").value;
        var consequent = ifStatement.get("consequent").value;
        if (!consequent && !alternate) {
          var testExpressionStatement = b2.expressionStatement(testExpression);
          ifStatement.replace(testExpressionStatement);
        } else if (!consequent && alternate) {
          var negatedTestExpression = b2.unaryExpression("!", testExpression, true);
          if (n.UnaryExpression.check(testExpression) && testExpression.operator === "!") {
            negatedTestExpression = testExpression.argument;
          }
          ifStatement.get("test").replace(negatedTestExpression);
          ifStatement.get("consequent").replace(alternate);
          ifStatement.get("alternate").replace();
        }
      }
      return NodePath;
    }
    exports2.default = nodePathPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(nodePath, nodePath.exports);
  return nodePath.exports;
}
pathVisitor.exports;
var hasRequiredPathVisitor;
function requirePathVisitor() {
  if (hasRequiredPathVisitor) return pathVisitor.exports;
  hasRequiredPathVisitor = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var node_path_1 = tslib_1.__importDefault(requireNodePath());
    var shared_1 = requireShared();
    var hasOwn = Object.prototype.hasOwnProperty;
    function pathVisitorPlugin(fork2) {
      var types2 = fork2.use(types_1.default);
      var NodePath = fork2.use(node_path_1.default);
      var isArray = types2.builtInTypes.array;
      var isObject = types2.builtInTypes.object;
      var isFunction = types2.builtInTypes.function;
      var undefined$1;
      var PathVisitor = function PathVisitor2() {
        if (!(this instanceof PathVisitor2)) {
          throw new Error("PathVisitor constructor cannot be invoked without 'new'");
        }
        this._reusableContextStack = [];
        this._methodNameTable = computeMethodNameTable(this);
        this._shouldVisitComments = hasOwn.call(this._methodNameTable, "Block") || hasOwn.call(this._methodNameTable, "Line");
        this.Context = makeContextConstructor(this);
        this._visiting = false;
        this._changeReported = false;
      };
      function computeMethodNameTable(visitor) {
        var typeNames = /* @__PURE__ */ Object.create(null);
        for (var methodName in visitor) {
          if (/^visit[A-Z]/.test(methodName)) {
            typeNames[methodName.slice("visit".length)] = true;
          }
        }
        var supertypeTable = types2.computeSupertypeLookupTable(typeNames);
        var methodNameTable = /* @__PURE__ */ Object.create(null);
        var typeNameKeys = Object.keys(supertypeTable);
        var typeNameCount = typeNameKeys.length;
        for (var i = 0; i < typeNameCount; ++i) {
          var typeName = typeNameKeys[i];
          methodName = "visit" + supertypeTable[typeName];
          if (isFunction.check(visitor[methodName])) {
            methodNameTable[typeName] = methodName;
          }
        }
        return methodNameTable;
      }
      PathVisitor.fromMethodsObject = function fromMethodsObject(methods) {
        if (methods instanceof PathVisitor) {
          return methods;
        }
        if (!isObject.check(methods)) {
          return new PathVisitor();
        }
        var Visitor = function Visitor2() {
          if (!(this instanceof Visitor2)) {
            throw new Error("Visitor constructor cannot be invoked without 'new'");
          }
          PathVisitor.call(this);
        };
        var Vp = Visitor.prototype = Object.create(PVp);
        Vp.constructor = Visitor;
        extend(Vp, methods);
        extend(Visitor, PathVisitor);
        isFunction.assert(Visitor.fromMethodsObject);
        isFunction.assert(Visitor.visit);
        return new Visitor();
      };
      function extend(target, source) {
        for (var property in source) {
          if (hasOwn.call(source, property)) {
            target[property] = source[property];
          }
        }
        return target;
      }
      PathVisitor.visit = function visit(node, methods) {
        return PathVisitor.fromMethodsObject(methods).visit(node);
      };
      var PVp = PathVisitor.prototype;
      PVp.visit = function() {
        if (this._visiting) {
          throw new Error("Recursively calling visitor.visit(path) resets visitor state. Try this.visit(path) or this.traverse(path) instead.");
        }
        this._visiting = true;
        this._changeReported = false;
        this._abortRequested = false;
        var argc = arguments.length;
        var args = new Array(argc);
        for (var i = 0; i < argc; ++i) {
          args[i] = arguments[i];
        }
        if (!(args[0] instanceof NodePath)) {
          args[0] = new NodePath({ root: args[0] }).get("root");
        }
        this.reset.apply(this, args);
        var didNotThrow;
        try {
          var root = this.visitWithoutReset(args[0]);
          didNotThrow = true;
        } finally {
          this._visiting = false;
          if (!didNotThrow && this._abortRequested) {
            return args[0].value;
          }
        }
        return root;
      };
      PVp.AbortRequest = function AbortRequest() {
      };
      PVp.abort = function() {
        var visitor = this;
        visitor._abortRequested = true;
        var request2 = new visitor.AbortRequest();
        request2.cancel = function() {
          visitor._abortRequested = false;
        };
        throw request2;
      };
      PVp.reset = function(_path) {
      };
      PVp.visitWithoutReset = function(path2) {
        if (this instanceof this.Context) {
          return this.visitor.visitWithoutReset(path2);
        }
        if (!(path2 instanceof NodePath)) {
          throw new Error("");
        }
        var value = path2.value;
        var methodName = value && typeof value === "object" && typeof value.type === "string" && this._methodNameTable[value.type];
        if (methodName) {
          var context = this.acquireContext(path2);
          try {
            return context.invokeVisitorMethod(methodName);
          } finally {
            this.releaseContext(context);
          }
        } else {
          return visitChildren(path2, this);
        }
      };
      function visitChildren(path2, visitor) {
        if (!(path2 instanceof NodePath)) {
          throw new Error("");
        }
        if (!(visitor instanceof PathVisitor)) {
          throw new Error("");
        }
        var value = path2.value;
        if (isArray.check(value)) {
          path2.each(visitor.visitWithoutReset, visitor);
        } else if (!isObject.check(value)) ;
        else {
          var childNames = types2.getFieldNames(value);
          if (visitor._shouldVisitComments && value.comments && childNames.indexOf("comments") < 0) {
            childNames.push("comments");
          }
          var childCount = childNames.length;
          var childPaths = [];
          for (var i = 0; i < childCount; ++i) {
            var childName = childNames[i];
            if (!hasOwn.call(value, childName)) {
              value[childName] = types2.getFieldValue(value, childName);
            }
            childPaths.push(path2.get(childName));
          }
          for (var i = 0; i < childCount; ++i) {
            visitor.visitWithoutReset(childPaths[i]);
          }
        }
        return path2.value;
      }
      PVp.acquireContext = function(path2) {
        if (this._reusableContextStack.length === 0) {
          return new this.Context(path2);
        }
        return this._reusableContextStack.pop().reset(path2);
      };
      PVp.releaseContext = function(context) {
        if (!(context instanceof this.Context)) {
          throw new Error("");
        }
        this._reusableContextStack.push(context);
        context.currentPath = null;
      };
      PVp.reportChanged = function() {
        this._changeReported = true;
      };
      PVp.wasChangeReported = function() {
        return this._changeReported;
      };
      function makeContextConstructor(visitor) {
        function Context(path2) {
          if (!(this instanceof Context)) {
            throw new Error("");
          }
          if (!(this instanceof PathVisitor)) {
            throw new Error("");
          }
          if (!(path2 instanceof NodePath)) {
            throw new Error("");
          }
          Object.defineProperty(this, "visitor", {
            value: visitor,
            writable: false,
            enumerable: true,
            configurable: false
          });
          this.currentPath = path2;
          this.needToCallTraverse = true;
          Object.seal(this);
        }
        if (!(visitor instanceof PathVisitor)) {
          throw new Error("");
        }
        var Cp = Context.prototype = Object.create(visitor);
        Cp.constructor = Context;
        extend(Cp, sharedContextProtoMethods);
        return Context;
      }
      var sharedContextProtoMethods = /* @__PURE__ */ Object.create(null);
      sharedContextProtoMethods.reset = function reset(path2) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path2 instanceof NodePath)) {
          throw new Error("");
        }
        this.currentPath = path2;
        this.needToCallTraverse = true;
        return this;
      };
      sharedContextProtoMethods.invokeVisitorMethod = function invokeVisitorMethod(methodName) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        var result = this.visitor[methodName].call(this, this.currentPath);
        if (result === false) {
          this.needToCallTraverse = false;
        } else if (result !== undefined$1) {
          this.currentPath = this.currentPath.replace(result)[0];
          if (this.needToCallTraverse) {
            this.traverse(this.currentPath);
          }
        }
        if (this.needToCallTraverse !== false) {
          throw new Error("Must either call this.traverse or return false in " + methodName);
        }
        var path2 = this.currentPath;
        return path2 && path2.value;
      };
      sharedContextProtoMethods.traverse = function traverse(path2, newVisitor) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path2 instanceof NodePath)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        this.needToCallTraverse = false;
        return visitChildren(path2, PathVisitor.fromMethodsObject(newVisitor || this.visitor));
      };
      sharedContextProtoMethods.visit = function visit(path2, newVisitor) {
        if (!(this instanceof this.Context)) {
          throw new Error("");
        }
        if (!(path2 instanceof NodePath)) {
          throw new Error("");
        }
        if (!(this.currentPath instanceof NodePath)) {
          throw new Error("");
        }
        this.needToCallTraverse = false;
        return PathVisitor.fromMethodsObject(newVisitor || this.visitor).visitWithoutReset(path2);
      };
      sharedContextProtoMethods.reportChanged = function reportChanged() {
        this.visitor.reportChanged();
      };
      sharedContextProtoMethods.abort = function abort() {
        this.needToCallTraverse = false;
        this.visitor.abort();
      };
      return PathVisitor;
    }
    exports2.default = pathVisitorPlugin;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(pathVisitor, pathVisitor.exports);
  return pathVisitor.exports;
}
var equiv = { exports: {} };
equiv.exports;
var hasRequiredEquiv;
function requireEquiv() {
  if (hasRequiredEquiv) return equiv.exports;
  hasRequiredEquiv = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var types_1 = tslib_1.__importDefault(requireTypes());
    function default_1(fork2) {
      var types2 = fork2.use(types_1.default);
      var getFieldNames = types2.getFieldNames;
      var getFieldValue = types2.getFieldValue;
      var isArray = types2.builtInTypes.array;
      var isObject = types2.builtInTypes.object;
      var isDate = types2.builtInTypes.Date;
      var isRegExp = types2.builtInTypes.RegExp;
      var hasOwn = Object.prototype.hasOwnProperty;
      function astNodesAreEquivalent(a, b2, problemPath) {
        if (isArray.check(problemPath)) {
          problemPath.length = 0;
        } else {
          problemPath = null;
        }
        return areEquivalent(a, b2, problemPath);
      }
      astNodesAreEquivalent.assert = function(a, b2) {
        var problemPath = [];
        if (!astNodesAreEquivalent(a, b2, problemPath)) {
          if (problemPath.length === 0) {
            if (a !== b2) {
              throw new Error("Nodes must be equal");
            }
          } else {
            throw new Error("Nodes differ in the following path: " + problemPath.map(subscriptForProperty).join(""));
          }
        }
      };
      function subscriptForProperty(property) {
        if (/[_$a-z][_$a-z0-9]*/i.test(property)) {
          return "." + property;
        }
        return "[" + JSON.stringify(property) + "]";
      }
      function areEquivalent(a, b2, problemPath) {
        if (a === b2) {
          return true;
        }
        if (isArray.check(a)) {
          return arraysAreEquivalent(a, b2, problemPath);
        }
        if (isObject.check(a)) {
          return objectsAreEquivalent(a, b2, problemPath);
        }
        if (isDate.check(a)) {
          return isDate.check(b2) && +a === +b2;
        }
        if (isRegExp.check(a)) {
          return isRegExp.check(b2) && (a.source === b2.source && a.global === b2.global && a.multiline === b2.multiline && a.ignoreCase === b2.ignoreCase);
        }
        return a == b2;
      }
      function arraysAreEquivalent(a, b2, problemPath) {
        isArray.assert(a);
        var aLength = a.length;
        if (!isArray.check(b2) || b2.length !== aLength) {
          if (problemPath) {
            problemPath.push("length");
          }
          return false;
        }
        for (var i = 0; i < aLength; ++i) {
          if (problemPath) {
            problemPath.push(i);
          }
          if (i in a !== i in b2) {
            return false;
          }
          if (!areEquivalent(a[i], b2[i], problemPath)) {
            return false;
          }
          if (problemPath) {
            var problemPathTail = problemPath.pop();
            if (problemPathTail !== i) {
              throw new Error("" + problemPathTail);
            }
          }
        }
        return true;
      }
      function objectsAreEquivalent(a, b2, problemPath) {
        isObject.assert(a);
        if (!isObject.check(b2)) {
          return false;
        }
        if (a.type !== b2.type) {
          if (problemPath) {
            problemPath.push("type");
          }
          return false;
        }
        var aNames = getFieldNames(a);
        var aNameCount = aNames.length;
        var bNames = getFieldNames(b2);
        var bNameCount = bNames.length;
        if (aNameCount === bNameCount) {
          for (var i = 0; i < aNameCount; ++i) {
            var name = aNames[i];
            var aChild = getFieldValue(a, name);
            var bChild = getFieldValue(b2, name);
            if (problemPath) {
              problemPath.push(name);
            }
            if (!areEquivalent(aChild, bChild, problemPath)) {
              return false;
            }
            if (problemPath) {
              var problemPathTail = problemPath.pop();
              if (problemPathTail !== name) {
                throw new Error("" + problemPathTail);
              }
            }
          }
          return true;
        }
        if (!problemPath) {
          return false;
        }
        var seenNames = /* @__PURE__ */ Object.create(null);
        for (i = 0; i < aNameCount; ++i) {
          seenNames[aNames[i]] = true;
        }
        for (i = 0; i < bNameCount; ++i) {
          name = bNames[i];
          if (!hasOwn.call(seenNames, name)) {
            problemPath.push(name);
            return false;
          }
          delete seenNames[name];
        }
        for (name in seenNames) {
          problemPath.push(name);
          break;
        }
        return false;
      }
      return astNodesAreEquivalent;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(equiv, equiv.exports);
  return equiv.exports;
}
fork.exports;
var hasRequiredFork;
function requireFork() {
  if (hasRequiredFork) return fork.exports;
  hasRequiredFork = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var path_visitor_1 = tslib_1.__importDefault(requirePathVisitor());
    var equiv_1 = tslib_1.__importDefault(requireEquiv());
    var path_1 = tslib_1.__importDefault(requirePath());
    var node_path_1 = tslib_1.__importDefault(requireNodePath());
    var shared_1 = requireShared();
    function default_1(plugins) {
      var fork2 = createFork();
      var types2 = fork2.use(types_1.default);
      plugins.forEach(fork2.use);
      types2.finalize();
      var PathVisitor = fork2.use(path_visitor_1.default);
      return {
        Type: types2.Type,
        builtInTypes: types2.builtInTypes,
        namedTypes: types2.namedTypes,
        builders: types2.builders,
        defineMethod: types2.defineMethod,
        getFieldNames: types2.getFieldNames,
        getFieldValue: types2.getFieldValue,
        eachField: types2.eachField,
        someField: types2.someField,
        getSupertypeNames: types2.getSupertypeNames,
        getBuilderName: types2.getBuilderName,
        astNodesAreEquivalent: fork2.use(equiv_1.default),
        finalize: types2.finalize,
        Path: fork2.use(path_1.default),
        NodePath: fork2.use(node_path_1.default),
        PathVisitor,
        use: fork2.use,
        visit: PathVisitor.visit
      };
    }
    exports2.default = default_1;
    function createFork() {
      var used = [];
      var usedResult = [];
      function use(plugin) {
        var idx = used.indexOf(plugin);
        if (idx === -1) {
          idx = used.length;
          used.push(plugin);
          usedResult[idx] = plugin(fork2);
        }
        return usedResult[idx];
      }
      var fork2 = { use };
      return fork2;
    }
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(fork, fork.exports);
  return fork.exports;
}
var esProposals = { exports: {} };
var es2022 = { exports: {} };
var es2021$1 = { exports: {} };
var es2021 = { exports: {} };
var es2020$1 = { exports: {} };
var es2016$1 = { exports: {} };
var core$1 = { exports: {} };
core$1.exports;
var hasRequiredCore$1;
function requireCore$1() {
  if (hasRequiredCore$1) return core$1.exports;
  hasRequiredCore$1 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var shared_1 = requireShared();
    function default_1() {
      return {
        BinaryOperators: [
          "==",
          "!=",
          "===",
          "!==",
          "<",
          "<=",
          ">",
          ">=",
          "<<",
          ">>",
          ">>>",
          "+",
          "-",
          "*",
          "/",
          "%",
          "&",
          "|",
          "^",
          "in",
          "instanceof"
        ],
        AssignmentOperators: [
          "=",
          "+=",
          "-=",
          "*=",
          "/=",
          "%=",
          "<<=",
          ">>=",
          ">>>=",
          "|=",
          "^=",
          "&="
        ],
        LogicalOperators: [
          "||",
          "&&"
        ]
      };
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(core$1, core$1.exports);
  return core$1.exports;
}
es2016$1.exports;
var hasRequiredEs2016$1;
function requireEs2016$1() {
  if (hasRequiredEs2016$1) return es2016$1.exports;
  hasRequiredEs2016$1 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var core_1 = tslib_1.__importDefault(requireCore$1());
    function default_1(fork2) {
      var result = fork2.use(core_1.default);
      if (result.BinaryOperators.indexOf("**") < 0) {
        result.BinaryOperators.push("**");
      }
      if (result.AssignmentOperators.indexOf("**=") < 0) {
        result.AssignmentOperators.push("**=");
      }
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2016$1, es2016$1.exports);
  return es2016$1.exports;
}
es2020$1.exports;
var hasRequiredEs2020$1;
function requireEs2020$1() {
  if (hasRequiredEs2020$1) return es2020$1.exports;
  hasRequiredEs2020$1 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var es2016_1 = tslib_1.__importDefault(requireEs2016$1());
    function default_1(fork2) {
      var result = fork2.use(es2016_1.default);
      if (result.LogicalOperators.indexOf("??") < 0) {
        result.LogicalOperators.push("??");
      }
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2020$1, es2020$1.exports);
  return es2020$1.exports;
}
es2021.exports;
var hasRequiredEs2021$1;
function requireEs2021$1() {
  if (hasRequiredEs2021$1) return es2021.exports;
  hasRequiredEs2021$1 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var shared_1 = requireShared();
    var es2020_1 = tslib_1.__importDefault(requireEs2020$1());
    function default_1(fork2) {
      var result = fork2.use(es2020_1.default);
      result.LogicalOperators.forEach(function(op) {
        var assignOp = op + "=";
        if (result.AssignmentOperators.indexOf(assignOp) < 0) {
          result.AssignmentOperators.push(assignOp);
        }
      });
      return result;
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2021, es2021.exports);
  return es2021.exports;
}
var es2020 = { exports: {} };
var es2019 = { exports: {} };
var es2018 = { exports: {} };
var es2017 = { exports: {} };
var es2016 = { exports: {} };
var es6 = { exports: {} };
var core = { exports: {} };
core.exports;
var hasRequiredCore;
function requireCore() {
  if (hasRequiredCore) return core.exports;
  hasRequiredCore = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var core_1 = tslib_1.__importDefault(requireCore$1());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      var types2 = fork2.use(types_1.default);
      var Type = types2.Type;
      var def = Type.def;
      var or = Type.or;
      var shared2 = fork2.use(shared_1.default);
      var defaults = shared2.defaults;
      var geq = shared2.geq;
      var _a = fork2.use(core_1.default), BinaryOperators = _a.BinaryOperators, AssignmentOperators = _a.AssignmentOperators, LogicalOperators = _a.LogicalOperators;
      def("Printable").field("loc", or(def("SourceLocation"), null), defaults["null"], true);
      def("Node").bases("Printable").field("type", String).field("comments", or([def("Comment")], null), defaults["null"], true);
      def("SourceLocation").field("start", def("Position")).field("end", def("Position")).field("source", or(String, null), defaults["null"]);
      def("Position").field("line", geq(1)).field("column", geq(0));
      def("File").bases("Node").build("program", "name").field("program", def("Program")).field("name", or(String, null), defaults["null"]);
      def("Program").bases("Node").build("body").field("body", [def("Statement")]);
      def("Function").bases("Node").field("id", or(def("Identifier"), null), defaults["null"]).field("params", [def("Pattern")]).field("body", def("BlockStatement")).field("generator", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]);
      def("Statement").bases("Node");
      def("EmptyStatement").bases("Statement").build();
      def("BlockStatement").bases("Statement").build("body").field("body", [def("Statement")]);
      def("ExpressionStatement").bases("Statement").build("expression").field("expression", def("Expression"));
      def("IfStatement").bases("Statement").build("test", "consequent", "alternate").field("test", def("Expression")).field("consequent", def("Statement")).field("alternate", or(def("Statement"), null), defaults["null"]);
      def("LabeledStatement").bases("Statement").build("label", "body").field("label", def("Identifier")).field("body", def("Statement"));
      def("BreakStatement").bases("Statement").build("label").field("label", or(def("Identifier"), null), defaults["null"]);
      def("ContinueStatement").bases("Statement").build("label").field("label", or(def("Identifier"), null), defaults["null"]);
      def("WithStatement").bases("Statement").build("object", "body").field("object", def("Expression")).field("body", def("Statement"));
      def("SwitchStatement").bases("Statement").build("discriminant", "cases", "lexical").field("discriminant", def("Expression")).field("cases", [def("SwitchCase")]).field("lexical", Boolean, defaults["false"]);
      def("ReturnStatement").bases("Statement").build("argument").field("argument", or(def("Expression"), null));
      def("ThrowStatement").bases("Statement").build("argument").field("argument", def("Expression"));
      def("TryStatement").bases("Statement").build("block", "handler", "finalizer").field("block", def("BlockStatement")).field("handler", or(def("CatchClause"), null), function() {
        return this.handlers && this.handlers[0] || null;
      }).field("handlers", [def("CatchClause")], function() {
        return this.handler ? [this.handler] : [];
      }, true).field("guardedHandlers", [def("CatchClause")], defaults.emptyArray).field("finalizer", or(def("BlockStatement"), null), defaults["null"]);
      def("CatchClause").bases("Node").build("param", "guard", "body").field("param", def("Pattern")).field("guard", or(def("Expression"), null), defaults["null"]).field("body", def("BlockStatement"));
      def("WhileStatement").bases("Statement").build("test", "body").field("test", def("Expression")).field("body", def("Statement"));
      def("DoWhileStatement").bases("Statement").build("body", "test").field("body", def("Statement")).field("test", def("Expression"));
      def("ForStatement").bases("Statement").build("init", "test", "update", "body").field("init", or(def("VariableDeclaration"), def("Expression"), null)).field("test", or(def("Expression"), null)).field("update", or(def("Expression"), null)).field("body", def("Statement"));
      def("ForInStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Expression"))).field("right", def("Expression")).field("body", def("Statement"));
      def("DebuggerStatement").bases("Statement").build();
      def("Declaration").bases("Statement");
      def("FunctionDeclaration").bases("Function", "Declaration").build("id", "params", "body").field("id", def("Identifier"));
      def("FunctionExpression").bases("Function", "Expression").build("id", "params", "body");
      def("VariableDeclaration").bases("Declaration").build("kind", "declarations").field("kind", or("var", "let", "const")).field("declarations", [def("VariableDeclarator")]);
      def("VariableDeclarator").bases("Node").build("id", "init").field("id", def("Pattern")).field("init", or(def("Expression"), null), defaults["null"]);
      def("Expression").bases("Node");
      def("ThisExpression").bases("Expression").build();
      def("ArrayExpression").bases("Expression").build("elements").field("elements", [or(def("Expression"), null)]);
      def("ObjectExpression").bases("Expression").build("properties").field("properties", [def("Property")]);
      def("Property").bases("Node").build("kind", "key", "value").field("kind", or("init", "get", "set")).field("key", or(def("Literal"), def("Identifier"))).field("value", def("Expression"));
      def("SequenceExpression").bases("Expression").build("expressions").field("expressions", [def("Expression")]);
      var UnaryOperator = or("-", "+", "!", "~", "typeof", "void", "delete");
      def("UnaryExpression").bases("Expression").build("operator", "argument", "prefix").field("operator", UnaryOperator).field("argument", def("Expression")).field("prefix", Boolean, defaults["true"]);
      var BinaryOperator = or.apply(void 0, BinaryOperators);
      def("BinaryExpression").bases("Expression").build("operator", "left", "right").field("operator", BinaryOperator).field("left", def("Expression")).field("right", def("Expression"));
      var AssignmentOperator = or.apply(void 0, AssignmentOperators);
      def("AssignmentExpression").bases("Expression").build("operator", "left", "right").field("operator", AssignmentOperator).field("left", or(def("Pattern"), def("MemberExpression"))).field("right", def("Expression"));
      var UpdateOperator = or("++", "--");
      def("UpdateExpression").bases("Expression").build("operator", "argument", "prefix").field("operator", UpdateOperator).field("argument", def("Expression")).field("prefix", Boolean);
      var LogicalOperator = or.apply(void 0, LogicalOperators);
      def("LogicalExpression").bases("Expression").build("operator", "left", "right").field("operator", LogicalOperator).field("left", def("Expression")).field("right", def("Expression"));
      def("ConditionalExpression").bases("Expression").build("test", "consequent", "alternate").field("test", def("Expression")).field("consequent", def("Expression")).field("alternate", def("Expression"));
      def("NewExpression").bases("Expression").build("callee", "arguments").field("callee", def("Expression")).field("arguments", [def("Expression")]);
      def("CallExpression").bases("Expression").build("callee", "arguments").field("callee", def("Expression")).field("arguments", [def("Expression")]);
      def("MemberExpression").bases("Expression").build("object", "property", "computed").field("object", def("Expression")).field("property", or(def("Identifier"), def("Expression"))).field("computed", Boolean, function() {
        var type = this.property.type;
        if (type === "Literal" || type === "MemberExpression" || type === "BinaryExpression") {
          return true;
        }
        return false;
      });
      def("Pattern").bases("Node");
      def("SwitchCase").bases("Node").build("test", "consequent").field("test", or(def("Expression"), null)).field("consequent", [def("Statement")]);
      def("Identifier").bases("Expression", "Pattern").build("name").field("name", String).field("optional", Boolean, defaults["false"]);
      def("Literal").bases("Expression").build("value").field("value", or(String, Boolean, null, Number, RegExp, BigInt));
      def("Comment").bases("Printable").field("value", String).field("leading", Boolean, defaults["true"]).field("trailing", Boolean, defaults["false"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(core, core.exports);
  return core.exports;
}
es6.exports;
var hasRequiredEs6;
function requireEs6() {
  if (hasRequiredEs6) return es6.exports;
  hasRequiredEs6 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var core_1 = tslib_1.__importDefault(requireCore());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(core_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      def("Function").field("generator", Boolean, defaults["false"]).field("expression", Boolean, defaults["false"]).field("defaults", [or(def("Expression"), null)], defaults.emptyArray).field("rest", or(def("Identifier"), null), defaults["null"]);
      def("RestElement").bases("Pattern").build("argument").field("argument", def("Pattern")).field(
        "typeAnnotation",
        // for Babylon. Flow parser puts it on the identifier
        or(def("TypeAnnotation"), def("TSTypeAnnotation"), null),
        defaults["null"]
      );
      def("SpreadElementPattern").bases("Pattern").build("argument").field("argument", def("Pattern"));
      def("FunctionDeclaration").build("id", "params", "body", "generator", "expression").field("id", or(def("Identifier"), null));
      def("FunctionExpression").build("id", "params", "body", "generator", "expression");
      def("ArrowFunctionExpression").bases("Function", "Expression").build("params", "body", "expression").field("id", null, defaults["null"]).field("body", or(def("BlockStatement"), def("Expression"))).field("generator", false, defaults["false"]);
      def("ForOfStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Pattern"))).field("right", def("Expression")).field("body", def("Statement"));
      def("YieldExpression").bases("Expression").build("argument", "delegate").field("argument", or(def("Expression"), null)).field("delegate", Boolean, defaults["false"]);
      def("GeneratorExpression").bases("Expression").build("body", "blocks", "filter").field("body", def("Expression")).field("blocks", [def("ComprehensionBlock")]).field("filter", or(def("Expression"), null));
      def("ComprehensionExpression").bases("Expression").build("body", "blocks", "filter").field("body", def("Expression")).field("blocks", [def("ComprehensionBlock")]).field("filter", or(def("Expression"), null));
      def("ComprehensionBlock").bases("Node").build("left", "right", "each").field("left", def("Pattern")).field("right", def("Expression")).field("each", Boolean);
      def("Property").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("value", or(def("Expression"), def("Pattern"))).field("method", Boolean, defaults["false"]).field("shorthand", Boolean, defaults["false"]).field("computed", Boolean, defaults["false"]);
      def("ObjectProperty").field("shorthand", Boolean, defaults["false"]);
      def("PropertyPattern").bases("Pattern").build("key", "pattern").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("pattern", def("Pattern")).field("computed", Boolean, defaults["false"]);
      def("ObjectPattern").bases("Pattern").build("properties").field("properties", [or(def("PropertyPattern"), def("Property"))]);
      def("ArrayPattern").bases("Pattern").build("elements").field("elements", [or(def("Pattern"), null)]);
      def("SpreadElement").bases("Node").build("argument").field("argument", def("Expression"));
      def("ArrayExpression").field("elements", [or(def("Expression"), def("SpreadElement"), def("RestElement"), null)]);
      def("NewExpression").field("arguments", [or(def("Expression"), def("SpreadElement"))]);
      def("CallExpression").field("arguments", [or(def("Expression"), def("SpreadElement"))]);
      def("AssignmentPattern").bases("Pattern").build("left", "right").field("left", def("Pattern")).field("right", def("Expression"));
      def("MethodDefinition").bases("Declaration").build("kind", "key", "value", "static").field("kind", or("constructor", "method", "get", "set")).field("key", def("Expression")).field("value", def("Function")).field("computed", Boolean, defaults["false"]).field("static", Boolean, defaults["false"]);
      var ClassBodyElement = or(def("MethodDefinition"), def("VariableDeclarator"), def("ClassPropertyDefinition"), def("ClassProperty"), def("StaticBlock"));
      def("ClassProperty").bases("Declaration").build("key").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("computed", Boolean, defaults["false"]);
      def("ClassPropertyDefinition").bases("Declaration").build("definition").field("definition", ClassBodyElement);
      def("ClassBody").bases("Declaration").build("body").field("body", [ClassBodyElement]);
      def("ClassDeclaration").bases("Declaration").build("id", "body", "superClass").field("id", or(def("Identifier"), null)).field("body", def("ClassBody")).field("superClass", or(def("Expression"), null), defaults["null"]);
      def("ClassExpression").bases("Expression").build("id", "body", "superClass").field("id", or(def("Identifier"), null), defaults["null"]).field("body", def("ClassBody")).field("superClass", or(def("Expression"), null), defaults["null"]);
      def("Super").bases("Expression").build();
      def("Specifier").bases("Node");
      def("ModuleSpecifier").bases("Specifier").field("local", or(def("Identifier"), null), defaults["null"]).field("id", or(def("Identifier"), null), defaults["null"]).field("name", or(def("Identifier"), null), defaults["null"]);
      def("ImportSpecifier").bases("ModuleSpecifier").build("imported", "local").field("imported", def("Identifier"));
      def("ImportDefaultSpecifier").bases("ModuleSpecifier").build("local");
      def("ImportNamespaceSpecifier").bases("ModuleSpecifier").build("local");
      def("ImportDeclaration").bases("Declaration").build("specifiers", "source", "importKind").field("specifiers", [or(def("ImportSpecifier"), def("ImportNamespaceSpecifier"), def("ImportDefaultSpecifier"))], defaults.emptyArray).field("source", def("Literal")).field("importKind", or("value", "type"), function() {
        return "value";
      });
      def("ExportNamedDeclaration").bases("Declaration").build("declaration", "specifiers", "source").field("declaration", or(def("Declaration"), null)).field("specifiers", [def("ExportSpecifier")], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("ExportSpecifier").bases("ModuleSpecifier").build("local", "exported").field("exported", def("Identifier"));
      def("ExportDefaultDeclaration").bases("Declaration").build("declaration").field("declaration", or(def("Declaration"), def("Expression")));
      def("ExportAllDeclaration").bases("Declaration").build("source").field("source", def("Literal"));
      def("TaggedTemplateExpression").bases("Expression").build("tag", "quasi").field("tag", def("Expression")).field("quasi", def("TemplateLiteral"));
      def("TemplateLiteral").bases("Expression").build("quasis", "expressions").field("quasis", [def("TemplateElement")]).field("expressions", [def("Expression")]);
      def("TemplateElement").bases("Node").build("value", "tail").field("value", { "cooked": String, "raw": String }).field("tail", Boolean);
      def("MetaProperty").bases("Expression").build("meta", "property").field("meta", def("Identifier")).field("property", def("Identifier"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es6, es6.exports);
  return es6.exports;
}
es2016.exports;
var hasRequiredEs2016;
function requireEs2016() {
  if (hasRequiredEs2016) return es2016.exports;
  hasRequiredEs2016 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2016_1 = tslib_1.__importDefault(requireEs2016$1());
    var es6_1 = tslib_1.__importDefault(requireEs6());
    var shared_1 = requireShared();
    function default_1(fork2) {
      fork2.use(es2016_1.default);
      fork2.use(es6_1.default);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2016, es2016.exports);
  return es2016.exports;
}
es2017.exports;
var hasRequiredEs2017;
function requireEs2017() {
  if (hasRequiredEs2017) return es2017.exports;
  hasRequiredEs2017 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2016_1 = tslib_1.__importDefault(requireEs2016());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es2016_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var defaults = fork2.use(shared_1.default).defaults;
      def("Function").field("async", Boolean, defaults["false"]);
      def("AwaitExpression").bases("Expression").build("argument").field("argument", def("Expression"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2017, es2017.exports);
  return es2017.exports;
}
es2018.exports;
var hasRequiredEs2018;
function requireEs2018() {
  if (hasRequiredEs2018) return es2018.exports;
  hasRequiredEs2018 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2017_1 = tslib_1.__importDefault(requireEs2017());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es2017_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      def("ForOfStatement").field("await", Boolean, defaults["false"]);
      def("SpreadProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("ObjectExpression").field("properties", [or(
        def("Property"),
        def("SpreadProperty"),
        // Legacy
        def("SpreadElement")
      )]);
      def("TemplateElement").field("value", { "cooked": or(String, null), "raw": String });
      def("SpreadPropertyPattern").bases("Pattern").build("argument").field("argument", def("Pattern"));
      def("ObjectPattern").field("properties", [or(def("PropertyPattern"), def("Property"), def("RestElement"), def("SpreadPropertyPattern"))]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2018, es2018.exports);
  return es2018.exports;
}
es2019.exports;
var hasRequiredEs2019;
function requireEs2019() {
  if (hasRequiredEs2019) return es2019.exports;
  hasRequiredEs2019 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2018_1 = tslib_1.__importDefault(requireEs2018());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es2018_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      def("CatchClause").field("param", or(def("Pattern"), null), defaults["null"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2019, es2019.exports);
  return es2019.exports;
}
es2020.exports;
var hasRequiredEs2020;
function requireEs2020() {
  if (hasRequiredEs2020) return es2020.exports;
  hasRequiredEs2020 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2020_1 = tslib_1.__importDefault(requireEs2020$1());
    var es2019_1 = tslib_1.__importDefault(requireEs2019());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es2020_1.default);
      fork2.use(es2019_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var shared2 = fork2.use(shared_1.default);
      var defaults = shared2.defaults;
      def("ImportExpression").bases("Expression").build("source").field("source", def("Expression"));
      def("ExportAllDeclaration").bases("Declaration").build("source", "exported").field("source", def("Literal")).field("exported", or(def("Identifier"), null, void 0), defaults["null"]);
      def("ChainElement").bases("Node").field("optional", Boolean, defaults["false"]);
      def("CallExpression").bases("Expression", "ChainElement");
      def("MemberExpression").bases("Expression", "ChainElement");
      def("ChainExpression").bases("Expression").build("expression").field("expression", def("ChainElement"));
      def("OptionalCallExpression").bases("CallExpression").build("callee", "arguments", "optional").field("optional", Boolean, defaults["true"]);
      def("OptionalMemberExpression").bases("MemberExpression").build("object", "property", "computed", "optional").field("optional", Boolean, defaults["true"]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2020, es2020.exports);
  return es2020.exports;
}
es2021$1.exports;
var hasRequiredEs2021;
function requireEs2021() {
  if (hasRequiredEs2021) return es2021$1.exports;
  hasRequiredEs2021 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2021_1 = tslib_1.__importDefault(requireEs2021$1());
    var es2020_1 = tslib_1.__importDefault(requireEs2020());
    var shared_1 = requireShared();
    function default_1(fork2) {
      fork2.use(es2021_1.default);
      fork2.use(es2020_1.default);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2021$1, es2021$1.exports);
  return es2021$1.exports;
}
es2022.exports;
var hasRequiredEs2022;
function requireEs2022() {
  if (hasRequiredEs2022) return es2022.exports;
  hasRequiredEs2022 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es2021_1 = tslib_1.__importDefault(requireEs2021());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = requireShared();
    function default_1(fork2) {
      fork2.use(es2021_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      def("StaticBlock").bases("Declaration").build("body").field("body", [def("Statement")]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(es2022, es2022.exports);
  return es2022.exports;
}
esProposals.exports;
var hasRequiredEsProposals;
function requireEsProposals() {
  if (hasRequiredEsProposals) return esProposals.exports;
  hasRequiredEsProposals = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    var es2022_1 = tslib_1.__importDefault(requireEs2022());
    function default_1(fork2) {
      fork2.use(es2022_1.default);
      var types2 = fork2.use(types_1.default);
      var Type = types2.Type;
      var def = types2.Type.def;
      var or = Type.or;
      var shared2 = fork2.use(shared_1.default);
      var defaults = shared2.defaults;
      def("AwaitExpression").build("argument", "all").field("argument", or(def("Expression"), null)).field("all", Boolean, defaults["false"]);
      def("Decorator").bases("Node").build("expression").field("expression", def("Expression"));
      def("Property").field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("MethodDefinition").field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("PrivateName").bases("Expression", "Pattern").build("id").field("id", def("Identifier"));
      def("ClassPrivateProperty").bases("ClassProperty").build("key", "value").field("key", def("PrivateName")).field("value", or(def("Expression"), null), defaults["null"]);
      def("ImportAttribute").bases("Node").build("key", "value").field("key", or(def("Identifier"), def("Literal"))).field("value", def("Expression"));
      [
        "ImportDeclaration",
        "ExportAllDeclaration",
        "ExportNamedDeclaration"
      ].forEach(function(decl) {
        def(decl).field("assertions", [def("ImportAttribute")], defaults.emptyArray);
      });
      def("RecordExpression").bases("Expression").build("properties").field("properties", [or(def("ObjectProperty"), def("ObjectMethod"), def("SpreadElement"))]);
      def("TupleExpression").bases("Expression").build("elements").field("elements", [or(def("Expression"), def("SpreadElement"), null)]);
      def("ModuleExpression").bases("Node").build("body").field("body", def("Program"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(esProposals, esProposals.exports);
  return esProposals.exports;
}
var jsx = { exports: {} };
jsx.exports;
var hasRequiredJsx;
function requireJsx() {
  if (hasRequiredJsx) return jsx.exports;
  hasRequiredJsx = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es_proposals_1 = tslib_1.__importDefault(requireEsProposals());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es_proposals_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      def("JSXAttribute").bases("Node").build("name", "value").field("name", or(def("JSXIdentifier"), def("JSXNamespacedName"))).field("value", or(
        def("Literal"),
        // attr="value"
        def("JSXExpressionContainer"),
        // attr={value}
        def("JSXElement"),
        // attr=<div />
        def("JSXFragment"),
        // attr=<></>
        null
        // attr= or just attr
      ), defaults["null"]);
      def("JSXIdentifier").bases("Identifier").build("name").field("name", String);
      def("JSXNamespacedName").bases("Node").build("namespace", "name").field("namespace", def("JSXIdentifier")).field("name", def("JSXIdentifier"));
      def("JSXMemberExpression").bases("MemberExpression").build("object", "property").field("object", or(def("JSXIdentifier"), def("JSXMemberExpression"))).field("property", def("JSXIdentifier")).field("computed", Boolean, defaults.false);
      var JSXElementName = or(def("JSXIdentifier"), def("JSXNamespacedName"), def("JSXMemberExpression"));
      def("JSXSpreadAttribute").bases("Node").build("argument").field("argument", def("Expression"));
      var JSXAttributes = [or(def("JSXAttribute"), def("JSXSpreadAttribute"))];
      def("JSXExpressionContainer").bases("Expression").build("expression").field("expression", or(def("Expression"), def("JSXEmptyExpression")));
      var JSXChildren = [or(
        def("JSXText"),
        def("JSXExpressionContainer"),
        def("JSXSpreadChild"),
        def("JSXElement"),
        def("JSXFragment"),
        def("Literal")
        // Legacy: Esprima should return JSXText instead.
      )];
      def("JSXElement").bases("Expression").build("openingElement", "closingElement", "children").field("openingElement", def("JSXOpeningElement")).field("closingElement", or(def("JSXClosingElement"), null), defaults["null"]).field("children", JSXChildren, defaults.emptyArray).field("name", JSXElementName, function() {
        return this.openingElement.name;
      }, true).field("selfClosing", Boolean, function() {
        return this.openingElement.selfClosing;
      }, true).field("attributes", JSXAttributes, function() {
        return this.openingElement.attributes;
      }, true);
      def("JSXOpeningElement").bases("Node").build("name", "attributes", "selfClosing").field("name", JSXElementName).field("attributes", JSXAttributes, defaults.emptyArray).field("selfClosing", Boolean, defaults["false"]);
      def("JSXClosingElement").bases("Node").build("name").field("name", JSXElementName);
      def("JSXFragment").bases("Expression").build("openingFragment", "closingFragment", "children").field("openingFragment", def("JSXOpeningFragment")).field("closingFragment", def("JSXClosingFragment")).field("children", JSXChildren, defaults.emptyArray);
      def("JSXOpeningFragment").bases("Node").build();
      def("JSXClosingFragment").bases("Node").build();
      def("JSXText").bases("Literal").build("value", "raw").field("value", String).field("raw", String, function() {
        return this.value;
      });
      def("JSXEmptyExpression").bases("Node").build();
      def("JSXSpreadChild").bases("Node").build("expression").field("expression", def("Expression"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(jsx, jsx.exports);
  return jsx.exports;
}
var flow = { exports: {} };
var typeAnnotations = { exports: {} };
typeAnnotations.exports;
var hasRequiredTypeAnnotations;
function requireTypeAnnotations() {
  if (hasRequiredTypeAnnotations) return typeAnnotations.exports;
  hasRequiredTypeAnnotations = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      var TypeAnnotation = or(def("TypeAnnotation"), def("TSTypeAnnotation"), null);
      var TypeParamDecl = or(def("TypeParameterDeclaration"), def("TSTypeParameterDeclaration"), null);
      def("Identifier").field("typeAnnotation", TypeAnnotation, defaults["null"]);
      def("ObjectPattern").field("typeAnnotation", TypeAnnotation, defaults["null"]);
      def("Function").field("returnType", TypeAnnotation, defaults["null"]).field("typeParameters", TypeParamDecl, defaults["null"]);
      def("ClassProperty").build("key", "value", "typeAnnotation", "static").field("value", or(def("Expression"), null)).field("static", Boolean, defaults["false"]).field("typeAnnotation", TypeAnnotation, defaults["null"]);
      [
        "ClassDeclaration",
        "ClassExpression"
      ].forEach(function(typeName) {
        def(typeName).field("typeParameters", TypeParamDecl, defaults["null"]).field("superTypeParameters", or(def("TypeParameterInstantiation"), def("TSTypeParameterInstantiation"), null), defaults["null"]).field("implements", or([def("ClassImplements")], [def("TSExpressionWithTypeArguments")]), defaults.emptyArray);
      });
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(typeAnnotations, typeAnnotations.exports);
  return typeAnnotations.exports;
}
flow.exports;
var hasRequiredFlow;
function requireFlow() {
  if (hasRequiredFlow) return flow.exports;
  hasRequiredFlow = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es_proposals_1 = tslib_1.__importDefault(requireEsProposals());
    var type_annotations_1 = tslib_1.__importDefault(requireTypeAnnotations());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es_proposals_1.default);
      fork2.use(type_annotations_1.default);
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      def("Flow").bases("Node");
      def("FlowType").bases("Flow");
      def("AnyTypeAnnotation").bases("FlowType").build();
      def("EmptyTypeAnnotation").bases("FlowType").build();
      def("MixedTypeAnnotation").bases("FlowType").build();
      def("VoidTypeAnnotation").bases("FlowType").build();
      def("SymbolTypeAnnotation").bases("FlowType").build();
      def("NumberTypeAnnotation").bases("FlowType").build();
      def("BigIntTypeAnnotation").bases("FlowType").build();
      def("NumberLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Number).field("raw", String);
      def("NumericLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Number).field("raw", String);
      def("BigIntLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", null).field("raw", String);
      def("StringTypeAnnotation").bases("FlowType").build();
      def("StringLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", String).field("raw", String);
      def("BooleanTypeAnnotation").bases("FlowType").build();
      def("BooleanLiteralTypeAnnotation").bases("FlowType").build("value", "raw").field("value", Boolean).field("raw", String);
      def("TypeAnnotation").bases("Node").build("typeAnnotation").field("typeAnnotation", def("FlowType"));
      def("NullableTypeAnnotation").bases("FlowType").build("typeAnnotation").field("typeAnnotation", def("FlowType"));
      def("NullLiteralTypeAnnotation").bases("FlowType").build();
      def("NullTypeAnnotation").bases("FlowType").build();
      def("ThisTypeAnnotation").bases("FlowType").build();
      def("ExistsTypeAnnotation").bases("FlowType").build();
      def("ExistentialTypeParam").bases("FlowType").build();
      def("FunctionTypeAnnotation").bases("FlowType").build("params", "returnType", "rest", "typeParameters").field("params", [def("FunctionTypeParam")]).field("returnType", def("FlowType")).field("rest", or(def("FunctionTypeParam"), null)).field("typeParameters", or(def("TypeParameterDeclaration"), null));
      def("FunctionTypeParam").bases("Node").build("name", "typeAnnotation", "optional").field("name", or(def("Identifier"), null)).field("typeAnnotation", def("FlowType")).field("optional", Boolean);
      def("ArrayTypeAnnotation").bases("FlowType").build("elementType").field("elementType", def("FlowType"));
      def("ObjectTypeAnnotation").bases("FlowType").build("properties", "indexers", "callProperties").field("properties", [
        or(def("ObjectTypeProperty"), def("ObjectTypeSpreadProperty"))
      ]).field("indexers", [def("ObjectTypeIndexer")], defaults.emptyArray).field("callProperties", [def("ObjectTypeCallProperty")], defaults.emptyArray).field("inexact", or(Boolean, void 0), defaults["undefined"]).field("exact", Boolean, defaults["false"]).field("internalSlots", [def("ObjectTypeInternalSlot")], defaults.emptyArray);
      def("Variance").bases("Node").build("kind").field("kind", or("plus", "minus"));
      var LegacyVariance = or(def("Variance"), "plus", "minus", null);
      def("ObjectTypeProperty").bases("Node").build("key", "value", "optional").field("key", or(def("Literal"), def("Identifier"))).field("value", def("FlowType")).field("optional", Boolean).field("variance", LegacyVariance, defaults["null"]);
      def("ObjectTypeIndexer").bases("Node").build("id", "key", "value").field("id", def("Identifier")).field("key", def("FlowType")).field("value", def("FlowType")).field("variance", LegacyVariance, defaults["null"]).field("static", Boolean, defaults["false"]);
      def("ObjectTypeCallProperty").bases("Node").build("value").field("value", def("FunctionTypeAnnotation")).field("static", Boolean, defaults["false"]);
      def("QualifiedTypeIdentifier").bases("Node").build("qualification", "id").field("qualification", or(def("Identifier"), def("QualifiedTypeIdentifier"))).field("id", def("Identifier"));
      def("GenericTypeAnnotation").bases("FlowType").build("id", "typeParameters").field("id", or(def("Identifier"), def("QualifiedTypeIdentifier"))).field("typeParameters", or(def("TypeParameterInstantiation"), null));
      def("MemberTypeAnnotation").bases("FlowType").build("object", "property").field("object", def("Identifier")).field("property", or(def("MemberTypeAnnotation"), def("GenericTypeAnnotation")));
      def("IndexedAccessType").bases("FlowType").build("objectType", "indexType").field("objectType", def("FlowType")).field("indexType", def("FlowType"));
      def("OptionalIndexedAccessType").bases("FlowType").build("objectType", "indexType", "optional").field("objectType", def("FlowType")).field("indexType", def("FlowType")).field("optional", Boolean);
      def("UnionTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("IntersectionTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("TypeofTypeAnnotation").bases("FlowType").build("argument").field("argument", def("FlowType"));
      def("ObjectTypeSpreadProperty").bases("Node").build("argument").field("argument", def("FlowType"));
      def("ObjectTypeInternalSlot").bases("Node").build("id", "value", "optional", "static", "method").field("id", def("Identifier")).field("value", def("FlowType")).field("optional", Boolean).field("static", Boolean).field("method", Boolean);
      def("TypeParameterDeclaration").bases("Node").build("params").field("params", [def("TypeParameter")]);
      def("TypeParameterInstantiation").bases("Node").build("params").field("params", [def("FlowType")]);
      def("TypeParameter").bases("FlowType").build("name", "variance", "bound", "default").field("name", String).field("variance", LegacyVariance, defaults["null"]).field("bound", or(def("TypeAnnotation"), null), defaults["null"]).field("default", or(def("FlowType"), null), defaults["null"]);
      def("ClassProperty").field("variance", LegacyVariance, defaults["null"]);
      def("ClassImplements").bases("Node").build("id").field("id", def("Identifier")).field("superClass", or(def("Expression"), null), defaults["null"]).field("typeParameters", or(def("TypeParameterInstantiation"), null), defaults["null"]);
      def("InterfaceTypeAnnotation").bases("FlowType").build("body", "extends").field("body", def("ObjectTypeAnnotation")).field("extends", or([def("InterfaceExtends")], null), defaults["null"]);
      def("InterfaceDeclaration").bases("Declaration").build("id", "body", "extends").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null), defaults["null"]).field("body", def("ObjectTypeAnnotation")).field("extends", [def("InterfaceExtends")]);
      def("DeclareInterface").bases("InterfaceDeclaration").build("id", "body", "extends");
      def("InterfaceExtends").bases("Node").build("id").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterInstantiation"), null), defaults["null"]);
      def("TypeAlias").bases("Declaration").build("id", "typeParameters", "right").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null)).field("right", def("FlowType"));
      def("DeclareTypeAlias").bases("TypeAlias").build("id", "typeParameters", "right");
      def("OpaqueType").bases("Declaration").build("id", "typeParameters", "impltype", "supertype").field("id", def("Identifier")).field("typeParameters", or(def("TypeParameterDeclaration"), null)).field("impltype", def("FlowType")).field("supertype", or(def("FlowType"), null));
      def("DeclareOpaqueType").bases("OpaqueType").build("id", "typeParameters", "supertype").field("impltype", or(def("FlowType"), null));
      def("TypeCastExpression").bases("Expression").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TypeAnnotation"));
      def("TupleTypeAnnotation").bases("FlowType").build("types").field("types", [def("FlowType")]);
      def("DeclareVariable").bases("Statement").build("id").field("id", def("Identifier"));
      def("DeclareFunction").bases("Statement").build("id").field("id", def("Identifier")).field("predicate", or(def("FlowPredicate"), null), defaults["null"]);
      def("DeclareClass").bases("InterfaceDeclaration").build("id");
      def("DeclareModule").bases("Statement").build("id", "body").field("id", or(def("Identifier"), def("Literal"))).field("body", def("BlockStatement"));
      def("DeclareModuleExports").bases("Statement").build("typeAnnotation").field("typeAnnotation", def("TypeAnnotation"));
      def("DeclareExportDeclaration").bases("Declaration").build("default", "declaration", "specifiers", "source").field("default", Boolean).field("declaration", or(
        def("DeclareVariable"),
        def("DeclareFunction"),
        def("DeclareClass"),
        def("FlowType"),
        // Implies default.
        def("TypeAlias"),
        // Implies named type
        def("DeclareOpaqueType"),
        // Implies named opaque type
        def("InterfaceDeclaration"),
        null
      )).field("specifiers", [or(def("ExportSpecifier"), def("ExportBatchSpecifier"))], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("DeclareExportAllDeclaration").bases("Declaration").build("source").field("source", or(def("Literal"), null), defaults["null"]);
      def("ImportDeclaration").field("importKind", or("value", "type", "typeof"), function() {
        return "value";
      });
      def("FlowPredicate").bases("Flow");
      def("InferredPredicate").bases("FlowPredicate").build();
      def("DeclaredPredicate").bases("FlowPredicate").build("value").field("value", def("Expression"));
      def("Function").field("predicate", or(def("FlowPredicate"), null), defaults["null"]);
      def("CallExpression").field("typeArguments", or(null, def("TypeParameterInstantiation")), defaults["null"]);
      def("NewExpression").field("typeArguments", or(null, def("TypeParameterInstantiation")), defaults["null"]);
      def("EnumDeclaration").bases("Declaration").build("id", "body").field("id", def("Identifier")).field("body", or(def("EnumBooleanBody"), def("EnumNumberBody"), def("EnumStringBody"), def("EnumSymbolBody")));
      def("EnumBooleanBody").build("members", "explicitType").field("members", [def("EnumBooleanMember")]).field("explicitType", Boolean);
      def("EnumNumberBody").build("members", "explicitType").field("members", [def("EnumNumberMember")]).field("explicitType", Boolean);
      def("EnumStringBody").build("members", "explicitType").field("members", or([def("EnumStringMember")], [def("EnumDefaultedMember")])).field("explicitType", Boolean);
      def("EnumSymbolBody").build("members").field("members", [def("EnumDefaultedMember")]);
      def("EnumBooleanMember").build("id", "init").field("id", def("Identifier")).field("init", or(def("Literal"), Boolean));
      def("EnumNumberMember").build("id", "init").field("id", def("Identifier")).field("init", def("Literal"));
      def("EnumStringMember").build("id", "init").field("id", def("Identifier")).field("init", def("Literal"));
      def("EnumDefaultedMember").build("id").field("id", def("Identifier"));
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(flow, flow.exports);
  return flow.exports;
}
var esprima$2 = { exports: {} };
esprima$2.exports;
var hasRequiredEsprima$2;
function requireEsprima$2() {
  if (hasRequiredEsprima$2) return esprima$2.exports;
  hasRequiredEsprima$2 = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es_proposals_1 = tslib_1.__importDefault(requireEsProposals());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(es_proposals_1.default);
      var types2 = fork2.use(types_1.default);
      var defaults = fork2.use(shared_1.default).defaults;
      var def = types2.Type.def;
      var or = types2.Type.or;
      def("VariableDeclaration").field("declarations", [or(
        def("VariableDeclarator"),
        def("Identifier")
        // Esprima deviation.
      )]);
      def("Property").field("value", or(
        def("Expression"),
        def("Pattern")
        // Esprima deviation.
      ));
      def("ArrayPattern").field("elements", [or(def("Pattern"), def("SpreadElement"), null)]);
      def("ObjectPattern").field("properties", [or(
        def("Property"),
        def("PropertyPattern"),
        def("SpreadPropertyPattern"),
        def("SpreadProperty")
        // Used by Esprima.
      )]);
      def("ExportSpecifier").bases("ModuleSpecifier").build("id", "name");
      def("ExportBatchSpecifier").bases("Specifier").build();
      def("ExportDeclaration").bases("Declaration").build("default", "declaration", "specifiers", "source").field("default", Boolean).field("declaration", or(
        def("Declaration"),
        def("Expression"),
        // Implies default.
        null
      )).field("specifiers", [or(def("ExportSpecifier"), def("ExportBatchSpecifier"))], defaults.emptyArray).field("source", or(def("Literal"), null), defaults["null"]);
      def("Block").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("Line").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(esprima$2, esprima$2.exports);
  return esprima$2.exports;
}
var babel = { exports: {} };
var babelCore = { exports: {} };
babelCore.exports;
var hasRequiredBabelCore;
function requireBabelCore() {
  if (hasRequiredBabelCore) return babelCore.exports;
  hasRequiredBabelCore = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var es_proposals_1 = tslib_1.__importDefault(requireEsProposals());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      var _a, _b, _c, _d, _e;
      fork2.use(es_proposals_1.default);
      var types2 = fork2.use(types_1.default);
      var defaults = fork2.use(shared_1.default).defaults;
      var def = types2.Type.def;
      var or = types2.Type.or;
      var isUndefined = types2.builtInTypes.undefined;
      def("Noop").bases("Statement").build();
      def("DoExpression").bases("Expression").build("body").field("body", [def("Statement")]);
      def("BindExpression").bases("Expression").build("object", "callee").field("object", or(def("Expression"), null)).field("callee", def("Expression"));
      def("ParenthesizedExpression").bases("Expression").build("expression").field("expression", def("Expression"));
      def("ExportNamespaceSpecifier").bases("Specifier").build("exported").field("exported", def("Identifier"));
      def("ExportDefaultSpecifier").bases("Specifier").build("exported").field("exported", def("Identifier"));
      def("CommentBlock").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("CommentLine").bases("Comment").build(
        "value",
        /*optional:*/
        "leading",
        "trailing"
      );
      def("Directive").bases("Node").build("value").field("value", def("DirectiveLiteral"));
      def("DirectiveLiteral").bases("Node", "Expression").build("value").field("value", String, defaults["use strict"]);
      def("InterpreterDirective").bases("Node").build("value").field("value", String);
      def("BlockStatement").bases("Statement").build("body").field("body", [def("Statement")]).field("directives", [def("Directive")], defaults.emptyArray);
      def("Program").bases("Node").build("body").field("body", [def("Statement")]).field("directives", [def("Directive")], defaults.emptyArray).field("interpreter", or(def("InterpreterDirective"), null), defaults["null"]);
      function makeLiteralExtra(rawValueType, toRaw) {
        if (rawValueType === void 0) {
          rawValueType = String;
        }
        return [
          "extra",
          {
            rawValue: rawValueType,
            raw: String
          },
          function getDefault() {
            var value = types2.getFieldValue(this, "value");
            return {
              rawValue: value,
              raw: toRaw ? toRaw(value) : String(value)
            };
          }
        ];
      }
      (_a = def("StringLiteral").bases("Literal").build("value").field("value", String)).field.apply(_a, makeLiteralExtra(String, function(val) {
        return JSON.stringify(val);
      }));
      (_b = def("NumericLiteral").bases("Literal").build("value").field("value", Number).field("raw", or(String, null), defaults["null"])).field.apply(_b, makeLiteralExtra(Number));
      (_c = def("BigIntLiteral").bases("Literal").build("value").field("value", or(String, Number))).field.apply(_c, makeLiteralExtra(String, function(val) {
        return val + "n";
      }));
      (_d = def("DecimalLiteral").bases("Literal").build("value").field("value", String)).field.apply(_d, makeLiteralExtra(String, function(val) {
        return val + "m";
      }));
      def("NullLiteral").bases("Literal").build().field("value", null, defaults["null"]);
      def("BooleanLiteral").bases("Literal").build("value").field("value", Boolean);
      (_e = def("RegExpLiteral").bases("Literal").build("pattern", "flags").field("pattern", String).field("flags", String).field("value", RegExp, function() {
        return new RegExp(this.pattern, this.flags);
      })).field.apply(_e, makeLiteralExtra(or(RegExp, isUndefined), function(exp) {
        return "/".concat(exp.pattern, "/").concat(exp.flags || "");
      })).field("regex", {
        pattern: String,
        flags: String
      }, function() {
        return {
          pattern: this.pattern,
          flags: this.flags
        };
      });
      var ObjectExpressionProperty = or(def("Property"), def("ObjectMethod"), def("ObjectProperty"), def("SpreadProperty"), def("SpreadElement"));
      def("ObjectExpression").bases("Expression").build("properties").field("properties", [ObjectExpressionProperty]);
      def("ObjectMethod").bases("Node", "Function").build("kind", "key", "params", "body", "computed").field("kind", or("method", "get", "set")).field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("params", [def("Pattern")]).field("body", def("BlockStatement")).field("computed", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]).field(
        "accessibility",
        // TypeScript
        or(def("Literal"), null),
        defaults["null"]
      ).field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("ObjectProperty").bases("Node").build("key", "value").field("key", or(def("Literal"), def("Identifier"), def("Expression"))).field("value", or(def("Expression"), def("Pattern"))).field(
        "accessibility",
        // TypeScript
        or(def("Literal"), null),
        defaults["null"]
      ).field("computed", Boolean, defaults["false"]);
      var ClassBodyElement = or(def("MethodDefinition"), def("VariableDeclarator"), def("ClassPropertyDefinition"), def("ClassProperty"), def("ClassPrivateProperty"), def("ClassMethod"), def("ClassPrivateMethod"), def("ClassAccessorProperty"), def("StaticBlock"));
      def("ClassBody").bases("Declaration").build("body").field("body", [ClassBodyElement]);
      def("ClassMethod").bases("Declaration", "Function").build("kind", "key", "params", "body", "computed", "static").field("key", or(def("Literal"), def("Identifier"), def("Expression")));
      def("ClassPrivateMethod").bases("Declaration", "Function").build("key", "params", "body", "kind", "computed", "static").field("key", def("PrivateName"));
      def("ClassAccessorProperty").bases("Declaration").build("key", "value", "decorators", "computed", "static").field("key", or(
        def("Literal"),
        def("Identifier"),
        def("PrivateName"),
        // Only when .computed is true (TODO enforce this)
        def("Expression")
      )).field("value", or(def("Expression"), null), defaults["null"]);
      [
        "ClassMethod",
        "ClassPrivateMethod"
      ].forEach(function(typeName) {
        def(typeName).field("kind", or("get", "set", "method", "constructor"), function() {
          return "method";
        }).field("body", def("BlockStatement")).field("access", or("public", "private", "protected", null), defaults["null"]);
      });
      [
        "ClassMethod",
        "ClassPrivateMethod",
        "ClassAccessorProperty"
      ].forEach(function(typeName) {
        def(typeName).field("computed", Boolean, defaults["false"]).field("static", Boolean, defaults["false"]).field("abstract", Boolean, defaults["false"]).field("accessibility", or("public", "private", "protected", null), defaults["null"]).field("decorators", or([def("Decorator")], null), defaults["null"]).field("definite", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("override", Boolean, defaults["false"]).field("readonly", Boolean, defaults["false"]);
      });
      var ObjectPatternProperty = or(
        def("Property"),
        def("PropertyPattern"),
        def("SpreadPropertyPattern"),
        def("SpreadProperty"),
        // Used by Esprima
        def("ObjectProperty"),
        // Babel 6
        def("RestProperty"),
        // Babel 6
        def("RestElement")
      );
      def("ObjectPattern").bases("Pattern").build("properties").field("properties", [ObjectPatternProperty]).field("decorators", or([def("Decorator")], null), defaults["null"]);
      def("SpreadProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("RestProperty").bases("Node").build("argument").field("argument", def("Expression"));
      def("ForAwaitStatement").bases("Statement").build("left", "right", "body").field("left", or(def("VariableDeclaration"), def("Expression"))).field("right", def("Expression")).field("body", def("Statement"));
      def("Import").bases("Expression").build();
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(babelCore, babelCore.exports);
  return babelCore.exports;
}
babel.exports;
var hasRequiredBabel;
function requireBabel() {
  if (hasRequiredBabel) return babel.exports;
  hasRequiredBabel = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var types_1 = tslib_1.__importDefault(requireTypes());
    var babel_core_1 = tslib_1.__importDefault(requireBabelCore());
    var flow_1 = tslib_1.__importDefault(requireFlow());
    var shared_1 = requireShared();
    function default_1(fork2) {
      var types2 = fork2.use(types_1.default);
      var def = types2.Type.def;
      fork2.use(babel_core_1.default);
      fork2.use(flow_1.default);
      def("V8IntrinsicIdentifier").bases("Expression").build("name").field("name", String);
      def("TopicReference").bases("Expression").build();
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(babel, babel.exports);
  return babel.exports;
}
var typescript = { exports: {} };
typescript.exports;
var hasRequiredTypescript;
function requireTypescript() {
  if (hasRequiredTypescript) return typescript.exports;
  hasRequiredTypescript = 1;
  (function(module2, exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = require$$0;
    var babel_core_1 = tslib_1.__importDefault(requireBabelCore());
    var type_annotations_1 = tslib_1.__importDefault(requireTypeAnnotations());
    var types_1 = tslib_1.__importDefault(requireTypes());
    var shared_1 = tslib_1.__importStar(requireShared());
    function default_1(fork2) {
      fork2.use(babel_core_1.default);
      fork2.use(type_annotations_1.default);
      var types2 = fork2.use(types_1.default);
      var n = types2.namedTypes;
      var def = types2.Type.def;
      var or = types2.Type.or;
      var defaults = fork2.use(shared_1.default).defaults;
      var StringLiteral = types2.Type.from(function(value, deep) {
        if (n.StringLiteral && n.StringLiteral.check(value, deep)) {
          return true;
        }
        if (n.Literal && n.Literal.check(value, deep) && typeof value.value === "string") {
          return true;
        }
        return false;
      }, "StringLiteral");
      def("TSType").bases("Node");
      var TSEntityName = or(def("Identifier"), def("TSQualifiedName"));
      def("TSTypeReference").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("typeName", "typeParameters").field("typeName", TSEntityName);
      def("TSHasOptionalTypeParameterInstantiation").field("typeParameters", or(def("TSTypeParameterInstantiation"), null), defaults["null"]);
      def("TSHasOptionalTypeParameters").field("typeParameters", or(def("TSTypeParameterDeclaration"), null, void 0), defaults["null"]);
      def("TSHasOptionalTypeAnnotation").field("typeAnnotation", or(def("TSTypeAnnotation"), null), defaults["null"]);
      def("TSQualifiedName").bases("Node").build("left", "right").field("left", TSEntityName).field("right", TSEntityName);
      def("TSAsExpression").bases("Expression", "Pattern").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType")).field("extra", or({ parenthesized: Boolean }, null), defaults["null"]);
      def("TSTypeCastExpression").bases("Expression").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType"));
      def("TSSatisfiesExpression").bases("Expression", "Pattern").build("expression", "typeAnnotation").field("expression", def("Expression")).field("typeAnnotation", def("TSType"));
      def("TSNonNullExpression").bases("Expression", "Pattern").build("expression").field("expression", def("Expression"));
      [
        "TSAnyKeyword",
        "TSBigIntKeyword",
        "TSBooleanKeyword",
        "TSNeverKeyword",
        "TSNullKeyword",
        "TSNumberKeyword",
        "TSObjectKeyword",
        "TSStringKeyword",
        "TSSymbolKeyword",
        "TSUndefinedKeyword",
        "TSUnknownKeyword",
        "TSVoidKeyword",
        "TSIntrinsicKeyword",
        "TSThisType"
      ].forEach(function(keywordType) {
        def(keywordType).bases("TSType").build();
      });
      def("TSArrayType").bases("TSType").build("elementType").field("elementType", def("TSType"));
      def("TSLiteralType").bases("TSType").build("literal").field("literal", or(def("NumericLiteral"), def("StringLiteral"), def("BooleanLiteral"), def("TemplateLiteral"), def("UnaryExpression"), def("BigIntLiteral")));
      def("TemplateLiteral").field("expressions", or([def("Expression")], [def("TSType")]));
      [
        "TSUnionType",
        "TSIntersectionType"
      ].forEach(function(typeName) {
        def(typeName).bases("TSType").build("types").field("types", [def("TSType")]);
      });
      def("TSConditionalType").bases("TSType").build("checkType", "extendsType", "trueType", "falseType").field("checkType", def("TSType")).field("extendsType", def("TSType")).field("trueType", def("TSType")).field("falseType", def("TSType"));
      def("TSInferType").bases("TSType").build("typeParameter").field("typeParameter", def("TSTypeParameter"));
      def("TSParenthesizedType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      var ParametersType = [or(def("Identifier"), def("RestElement"), def("ArrayPattern"), def("ObjectPattern"))];
      [
        "TSFunctionType",
        "TSConstructorType"
      ].forEach(function(typeName) {
        def(typeName).bases("TSType", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("parameters").field("parameters", ParametersType);
      });
      def("TSDeclareFunction").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "params", "returnType").field("declare", Boolean, defaults["false"]).field("async", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("id", or(def("Identifier"), null), defaults["null"]).field("params", [def("Pattern")]).field("returnType", or(
        def("TSTypeAnnotation"),
        def("Noop"),
        // Still used?
        null
      ), defaults["null"]);
      def("TSDeclareMethod").bases("Declaration", "TSHasOptionalTypeParameters").build("key", "params", "returnType").field("async", Boolean, defaults["false"]).field("generator", Boolean, defaults["false"]).field("params", [def("Pattern")]).field("abstract", Boolean, defaults["false"]).field("accessibility", or("public", "private", "protected", void 0), defaults["undefined"]).field("static", Boolean, defaults["false"]).field("computed", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("key", or(
        def("Identifier"),
        def("StringLiteral"),
        def("NumericLiteral"),
        // Only allowed if .computed is true.
        def("Expression")
      )).field("kind", or("get", "set", "method", "constructor"), function getDefault() {
        return "method";
      }).field(
        "access",
        // Not "accessibility"?
        or("public", "private", "protected", void 0),
        defaults["undefined"]
      ).field("decorators", or([def("Decorator")], null), defaults["null"]).field("returnType", or(
        def("TSTypeAnnotation"),
        def("Noop"),
        // Still used?
        null
      ), defaults["null"]);
      def("TSMappedType").bases("TSType").build("typeParameter", "typeAnnotation").field("readonly", or(Boolean, "+", "-"), defaults["false"]).field("typeParameter", def("TSTypeParameter")).field("optional", or(Boolean, "+", "-"), defaults["false"]).field("typeAnnotation", or(def("TSType"), null), defaults["null"]);
      def("TSTupleType").bases("TSType").build("elementTypes").field("elementTypes", [or(def("TSType"), def("TSNamedTupleMember"))]);
      def("TSNamedTupleMember").bases("TSType").build("label", "elementType", "optional").field("label", def("Identifier")).field("optional", Boolean, defaults["false"]).field("elementType", def("TSType"));
      def("TSRestType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      def("TSOptionalType").bases("TSType").build("typeAnnotation").field("typeAnnotation", def("TSType"));
      def("TSIndexedAccessType").bases("TSType").build("objectType", "indexType").field("objectType", def("TSType")).field("indexType", def("TSType"));
      def("TSTypeOperator").bases("TSType").build("operator").field("operator", String).field("typeAnnotation", def("TSType"));
      def("TSTypeAnnotation").bases("Node").build("typeAnnotation").field("typeAnnotation", or(def("TSType"), def("TSTypeAnnotation")));
      def("TSIndexSignature").bases("Declaration", "TSHasOptionalTypeAnnotation").build("parameters", "typeAnnotation").field("parameters", [def("Identifier")]).field("readonly", Boolean, defaults["false"]);
      def("TSPropertySignature").bases("Declaration", "TSHasOptionalTypeAnnotation").build("key", "typeAnnotation", "optional").field("key", def("Expression")).field("computed", Boolean, defaults["false"]).field("readonly", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSMethodSignature").bases("Declaration", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("key", "parameters", "typeAnnotation").field("key", def("Expression")).field("computed", Boolean, defaults["false"]).field("optional", Boolean, defaults["false"]).field("parameters", ParametersType);
      def("TSTypePredicate").bases("TSTypeAnnotation", "TSType").build("parameterName", "typeAnnotation", "asserts").field("parameterName", or(def("Identifier"), def("TSThisType"))).field("typeAnnotation", or(def("TSTypeAnnotation"), null), defaults["null"]).field("asserts", Boolean, defaults["false"]);
      [
        "TSCallSignatureDeclaration",
        "TSConstructSignatureDeclaration"
      ].forEach(function(typeName) {
        def(typeName).bases("Declaration", "TSHasOptionalTypeParameters", "TSHasOptionalTypeAnnotation").build("parameters", "typeAnnotation").field("parameters", ParametersType);
      });
      def("TSEnumMember").bases("Node").build("id", "initializer").field("id", or(def("Identifier"), StringLiteral)).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSTypeQuery").bases("TSType").build("exprName").field("exprName", or(TSEntityName, def("TSImportType")));
      var TSTypeMember = or(def("TSCallSignatureDeclaration"), def("TSConstructSignatureDeclaration"), def("TSIndexSignature"), def("TSMethodSignature"), def("TSPropertySignature"));
      def("TSTypeLiteral").bases("TSType").build("members").field("members", [TSTypeMember]);
      def("TSTypeParameter").bases("Identifier").build("name", "constraint", "default").field("name", or(def("Identifier"), String)).field("constraint", or(def("TSType"), void 0), defaults["undefined"]).field("default", or(def("TSType"), void 0), defaults["undefined"]);
      def("TSTypeAssertion").bases("Expression", "Pattern").build("typeAnnotation", "expression").field("typeAnnotation", def("TSType")).field("expression", def("Expression")).field("extra", or({ parenthesized: Boolean }, null), defaults["null"]);
      def("TSTypeParameterDeclaration").bases("Declaration").build("params").field("params", [def("TSTypeParameter")]);
      def("TSInstantiationExpression").bases("Expression", "TSHasOptionalTypeParameterInstantiation").build("expression", "typeParameters").field("expression", def("Expression"));
      def("TSTypeParameterInstantiation").bases("Node").build("params").field("params", [def("TSType")]);
      def("TSEnumDeclaration").bases("Declaration").build("id", "members").field("id", def("Identifier")).field("const", Boolean, defaults["false"]).field("declare", Boolean, defaults["false"]).field("members", [def("TSEnumMember")]).field("initializer", or(def("Expression"), null), defaults["null"]);
      def("TSTypeAliasDeclaration").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "typeAnnotation").field("id", def("Identifier")).field("declare", Boolean, defaults["false"]).field("typeAnnotation", def("TSType"));
      def("TSModuleBlock").bases("Node").build("body").field("body", [def("Statement")]);
      def("TSModuleDeclaration").bases("Declaration").build("id", "body").field("id", or(StringLiteral, TSEntityName)).field("declare", Boolean, defaults["false"]).field("global", Boolean, defaults["false"]).field("body", or(def("TSModuleBlock"), def("TSModuleDeclaration"), null), defaults["null"]);
      def("TSImportType").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("argument", "qualifier", "typeParameters").field("argument", StringLiteral).field("qualifier", or(TSEntityName, void 0), defaults["undefined"]);
      def("TSImportEqualsDeclaration").bases("Declaration").build("id", "moduleReference").field("id", def("Identifier")).field("isExport", Boolean, defaults["false"]).field("moduleReference", or(TSEntityName, def("TSExternalModuleReference")));
      def("TSExternalModuleReference").bases("Declaration").build("expression").field("expression", StringLiteral);
      def("TSExportAssignment").bases("Statement").build("expression").field("expression", def("Expression"));
      def("TSNamespaceExportDeclaration").bases("Declaration").build("id").field("id", def("Identifier"));
      def("TSInterfaceBody").bases("Node").build("body").field("body", [TSTypeMember]);
      def("TSExpressionWithTypeArguments").bases("TSType", "TSHasOptionalTypeParameterInstantiation").build("expression", "typeParameters").field("expression", TSEntityName);
      def("TSInterfaceDeclaration").bases("Declaration", "TSHasOptionalTypeParameters").build("id", "body").field("id", TSEntityName).field("declare", Boolean, defaults["false"]).field("extends", or([def("TSExpressionWithTypeArguments")], null), defaults["null"]).field("body", def("TSInterfaceBody"));
      def("TSParameterProperty").bases("Pattern").build("parameter").field("accessibility", or("public", "private", "protected", void 0), defaults["undefined"]).field("readonly", Boolean, defaults["false"]).field("parameter", or(def("Identifier"), def("AssignmentPattern")));
      def("ClassProperty").field(
        "access",
        // Not "accessibility"?
        or("public", "private", "protected", void 0),
        defaults["undefined"]
      );
      def("ClassAccessorProperty").bases("Declaration", "TSHasOptionalTypeAnnotation");
      def("ClassBody").field("body", [or(
        def("MethodDefinition"),
        def("VariableDeclarator"),
        def("ClassPropertyDefinition"),
        def("ClassProperty"),
        def("ClassPrivateProperty"),
        def("ClassAccessorProperty"),
        def("ClassMethod"),
        def("ClassPrivateMethod"),
        def("StaticBlock"),
        // Just need to add these types:
        def("TSDeclareMethod"),
        TSTypeMember
      )]);
    }
    exports2.default = default_1;
    (0, shared_1.maybeSetModuleExports)(function() {
      return module2;
    });
  })(typescript, typescript.exports);
  return typescript.exports;
}
var namedTypes = {};
var hasRequiredNamedTypes;
function requireNamedTypes() {
  if (hasRequiredNamedTypes) return namedTypes;
  hasRequiredNamedTypes = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.namedTypes = void 0;
    /* @__PURE__ */ (function(namedTypes2) {
    })(exports2.namedTypes || (exports2.namedTypes = {}));
  })(namedTypes);
  return namedTypes;
}
var hasRequiredMain;
function requireMain() {
  if (hasRequiredMain) return main;
  hasRequiredMain = 1;
  (function(exports2) {
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.visit = exports2.use = exports2.Type = exports2.someField = exports2.PathVisitor = exports2.Path = exports2.NodePath = exports2.namedTypes = exports2.getSupertypeNames = exports2.getFieldValue = exports2.getFieldNames = exports2.getBuilderName = exports2.finalize = exports2.eachField = exports2.defineMethod = exports2.builtInTypes = exports2.builders = exports2.astNodesAreEquivalent = void 0;
    var tslib_1 = require$$0;
    var fork_1 = tslib_1.__importDefault(requireFork());
    var es_proposals_1 = tslib_1.__importDefault(requireEsProposals());
    var jsx_1 = tslib_1.__importDefault(requireJsx());
    var flow_1 = tslib_1.__importDefault(requireFlow());
    var esprima_1 = tslib_1.__importDefault(requireEsprima$2());
    var babel_1 = tslib_1.__importDefault(requireBabel());
    var typescript_1 = tslib_1.__importDefault(requireTypescript());
    var namedTypes_1 = requireNamedTypes();
    Object.defineProperty(exports2, "namedTypes", { enumerable: true, get: function() {
      return namedTypes_1.namedTypes;
    } });
    var _a = (0, fork_1.default)([
      // Feel free to add to or remove from this list of extension modules to
      // configure the precise type hierarchy that you need.
      es_proposals_1.default,
      jsx_1.default,
      flow_1.default,
      esprima_1.default,
      babel_1.default,
      typescript_1.default
    ]), astNodesAreEquivalent = _a.astNodesAreEquivalent, builders = _a.builders, builtInTypes = _a.builtInTypes, defineMethod = _a.defineMethod, eachField = _a.eachField, finalize = _a.finalize, getBuilderName = _a.getBuilderName, getFieldNames = _a.getFieldNames, getFieldValue = _a.getFieldValue, getSupertypeNames = _a.getSupertypeNames, n = _a.namedTypes, NodePath = _a.NodePath, Path = _a.Path, PathVisitor = _a.PathVisitor, someField = _a.someField, Type = _a.Type, use = _a.use, visit = _a.visit;
    exports2.astNodesAreEquivalent = astNodesAreEquivalent;
    exports2.builders = builders;
    exports2.builtInTypes = builtInTypes;
    exports2.defineMethod = defineMethod;
    exports2.eachField = eachField;
    exports2.finalize = finalize;
    exports2.getBuilderName = getBuilderName;
    exports2.getFieldNames = getFieldNames;
    exports2.getFieldValue = getFieldValue;
    exports2.getSupertypeNames = getSupertypeNames;
    exports2.NodePath = NodePath;
    exports2.Path = Path;
    exports2.PathVisitor = PathVisitor;
    exports2.someField = someField;
    exports2.Type = Type;
    exports2.use = use;
    exports2.visit = visit;
    Object.assign(namedTypes_1.namedTypes, n);
  })(main);
  return main;
}
var parser = {};
var tinyInvariant_cjs;
var hasRequiredTinyInvariant_cjs;
function requireTinyInvariant_cjs() {
  if (hasRequiredTinyInvariant_cjs) return tinyInvariant_cjs;
  hasRequiredTinyInvariant_cjs = 1;
  var isProduction = process.env.NODE_ENV === "production";
  var prefix = "Invariant failed";
  function invariant(condition, message) {
    if (condition) {
      return;
    }
    if (isProduction) {
      throw new Error(prefix);
    }
    var provided = typeof message === "function" ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
  }
  tinyInvariant_cjs = invariant;
  return tinyInvariant_cjs;
}
var options = {};
var util$1 = {};
var sourceMap = {};
var sourceMapGenerator = {};
var base64Vlq = {};
var base64 = {};
var hasRequiredBase64;
function requireBase64() {
  if (hasRequiredBase64) return base64;
  hasRequiredBase64 = 1;
  var intToCharMap = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  base64.encode = function(number2) {
    if (0 <= number2 && number2 < intToCharMap.length) {
      return intToCharMap[number2];
    }
    throw new TypeError("Must be between 0 and 63: " + number2);
  };
  base64.decode = function(charCode) {
    var bigA = 65;
    var bigZ = 90;
    var littleA = 97;
    var littleZ = 122;
    var zero = 48;
    var nine = 57;
    var plus = 43;
    var slash = 47;
    var littleOffset = 26;
    var numberOffset = 52;
    if (bigA <= charCode && charCode <= bigZ) {
      return charCode - bigA;
    }
    if (littleA <= charCode && charCode <= littleZ) {
      return charCode - littleA + littleOffset;
    }
    if (zero <= charCode && charCode <= nine) {
      return charCode - zero + numberOffset;
    }
    if (charCode == plus) {
      return 62;
    }
    if (charCode == slash) {
      return 63;
    }
    return -1;
  };
  return base64;
}
var hasRequiredBase64Vlq;
function requireBase64Vlq() {
  if (hasRequiredBase64Vlq) return base64Vlq;
  hasRequiredBase64Vlq = 1;
  var base642 = requireBase64();
  var VLQ_BASE_SHIFT = 5;
  var VLQ_BASE = 1 << VLQ_BASE_SHIFT;
  var VLQ_BASE_MASK = VLQ_BASE - 1;
  var VLQ_CONTINUATION_BIT = VLQ_BASE;
  function toVLQSigned(aValue) {
    return aValue < 0 ? (-aValue << 1) + 1 : (aValue << 1) + 0;
  }
  function fromVLQSigned(aValue) {
    var isNegative = (aValue & 1) === 1;
    var shifted = aValue >> 1;
    return isNegative ? -shifted : shifted;
  }
  base64Vlq.encode = function base64VLQ_encode(aValue) {
    var encoded = "";
    var digit;
    var vlq = toVLQSigned(aValue);
    do {
      digit = vlq & VLQ_BASE_MASK;
      vlq >>>= VLQ_BASE_SHIFT;
      if (vlq > 0) {
        digit |= VLQ_CONTINUATION_BIT;
      }
      encoded += base642.encode(digit);
    } while (vlq > 0);
    return encoded;
  };
  base64Vlq.decode = function base64VLQ_decode(aStr, aIndex, aOutParam) {
    var strLen = aStr.length;
    var result = 0;
    var shift = 0;
    var continuation, digit;
    do {
      if (aIndex >= strLen) {
        throw new Error("Expected more digits in base 64 VLQ value.");
      }
      digit = base642.decode(aStr.charCodeAt(aIndex++));
      if (digit === -1) {
        throw new Error("Invalid base64 digit: " + aStr.charAt(aIndex - 1));
      }
      continuation = !!(digit & VLQ_CONTINUATION_BIT);
      digit &= VLQ_BASE_MASK;
      result = result + (digit << shift);
      shift += VLQ_BASE_SHIFT;
    } while (continuation);
    aOutParam.value = fromVLQSigned(result);
    aOutParam.rest = aIndex;
  };
  return base64Vlq;
}
var util = {};
var hasRequiredUtil$1;
function requireUtil$1() {
  if (hasRequiredUtil$1) return util;
  hasRequiredUtil$1 = 1;
  (function(exports2) {
    function getArg(aArgs, aName, aDefaultValue) {
      if (aName in aArgs) {
        return aArgs[aName];
      } else if (arguments.length === 3) {
        return aDefaultValue;
      } else {
        throw new Error('"' + aName + '" is a required argument.');
      }
    }
    exports2.getArg = getArg;
    var urlRegexp = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/;
    var dataUrlRegexp = /^data:.+\,.+$/;
    function urlParse(aUrl) {
      var match = aUrl.match(urlRegexp);
      if (!match) {
        return null;
      }
      return {
        scheme: match[1],
        auth: match[2],
        host: match[3],
        port: match[4],
        path: match[5]
      };
    }
    exports2.urlParse = urlParse;
    function urlGenerate(aParsedUrl) {
      var url2 = "";
      if (aParsedUrl.scheme) {
        url2 += aParsedUrl.scheme + ":";
      }
      url2 += "//";
      if (aParsedUrl.auth) {
        url2 += aParsedUrl.auth + "@";
      }
      if (aParsedUrl.host) {
        url2 += aParsedUrl.host;
      }
      if (aParsedUrl.port) {
        url2 += ":" + aParsedUrl.port;
      }
      if (aParsedUrl.path) {
        url2 += aParsedUrl.path;
      }
      return url2;
    }
    exports2.urlGenerate = urlGenerate;
    function normalize(aPath) {
      var path2 = aPath;
      var url2 = urlParse(aPath);
      if (url2) {
        if (!url2.path) {
          return aPath;
        }
        path2 = url2.path;
      }
      var isAbsolute = exports2.isAbsolute(path2);
      var parts = path2.split(/\/+/);
      for (var part, up = 0, i = parts.length - 1; i >= 0; i--) {
        part = parts[i];
        if (part === ".") {
          parts.splice(i, 1);
        } else if (part === "..") {
          up++;
        } else if (up > 0) {
          if (part === "") {
            parts.splice(i + 1, up);
            up = 0;
          } else {
            parts.splice(i, 2);
            up--;
          }
        }
      }
      path2 = parts.join("/");
      if (path2 === "") {
        path2 = isAbsolute ? "/" : ".";
      }
      if (url2) {
        url2.path = path2;
        return urlGenerate(url2);
      }
      return path2;
    }
    exports2.normalize = normalize;
    function join(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      if (aPath === "") {
        aPath = ".";
      }
      var aPathUrl = urlParse(aPath);
      var aRootUrl = urlParse(aRoot);
      if (aRootUrl) {
        aRoot = aRootUrl.path || "/";
      }
      if (aPathUrl && !aPathUrl.scheme) {
        if (aRootUrl) {
          aPathUrl.scheme = aRootUrl.scheme;
        }
        return urlGenerate(aPathUrl);
      }
      if (aPathUrl || aPath.match(dataUrlRegexp)) {
        return aPath;
      }
      if (aRootUrl && !aRootUrl.host && !aRootUrl.path) {
        aRootUrl.host = aPath;
        return urlGenerate(aRootUrl);
      }
      var joined = aPath.charAt(0) === "/" ? aPath : normalize(aRoot.replace(/\/+$/, "") + "/" + aPath);
      if (aRootUrl) {
        aRootUrl.path = joined;
        return urlGenerate(aRootUrl);
      }
      return joined;
    }
    exports2.join = join;
    exports2.isAbsolute = function(aPath) {
      return aPath.charAt(0) === "/" || urlRegexp.test(aPath);
    };
    function relative(aRoot, aPath) {
      if (aRoot === "") {
        aRoot = ".";
      }
      aRoot = aRoot.replace(/\/$/, "");
      var level = 0;
      while (aPath.indexOf(aRoot + "/") !== 0) {
        var index = aRoot.lastIndexOf("/");
        if (index < 0) {
          return aPath;
        }
        aRoot = aRoot.slice(0, index);
        if (aRoot.match(/^([^\/]+:\/)?\/*$/)) {
          return aPath;
        }
        ++level;
      }
      return Array(level + 1).join("../") + aPath.substr(aRoot.length + 1);
    }
    exports2.relative = relative;
    var supportsNullProto = function() {
      var obj = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in obj);
    }();
    function identity(s) {
      return s;
    }
    function toSetString(aStr) {
      if (isProtoString(aStr)) {
        return "$" + aStr;
      }
      return aStr;
    }
    exports2.toSetString = supportsNullProto ? identity : toSetString;
    function fromSetString(aStr) {
      if (isProtoString(aStr)) {
        return aStr.slice(1);
      }
      return aStr;
    }
    exports2.fromSetString = supportsNullProto ? identity : fromSetString;
    function isProtoString(s) {
      if (!s) {
        return false;
      }
      var length = s.length;
      if (length < 9) {
        return false;
      }
      if (s.charCodeAt(length - 1) !== 95 || s.charCodeAt(length - 2) !== 95 || s.charCodeAt(length - 3) !== 111 || s.charCodeAt(length - 4) !== 116 || s.charCodeAt(length - 5) !== 111 || s.charCodeAt(length - 6) !== 114 || s.charCodeAt(length - 7) !== 112 || s.charCodeAt(length - 8) !== 95 || s.charCodeAt(length - 9) !== 95) {
        return false;
      }
      for (var i = length - 10; i >= 0; i--) {
        if (s.charCodeAt(i) !== 36) {
          return false;
        }
      }
      return true;
    }
    function compareByOriginalPositions(mappingA, mappingB, onlyCompareOriginal) {
      var cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0 || onlyCompareOriginal) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByOriginalPositions = compareByOriginalPositions;
    function compareByGeneratedPositionsDeflated(mappingA, mappingB, onlyCompareGenerated) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0 || onlyCompareGenerated) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsDeflated = compareByGeneratedPositionsDeflated;
    function strcmp(aStr1, aStr2) {
      if (aStr1 === aStr2) {
        return 0;
      }
      if (aStr1 === null) {
        return 1;
      }
      if (aStr2 === null) {
        return -1;
      }
      if (aStr1 > aStr2) {
        return 1;
      }
      return -1;
    }
    function compareByGeneratedPositionsInflated(mappingA, mappingB) {
      var cmp = mappingA.generatedLine - mappingB.generatedLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.generatedColumn - mappingB.generatedColumn;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = strcmp(mappingA.source, mappingB.source);
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalLine - mappingB.originalLine;
      if (cmp !== 0) {
        return cmp;
      }
      cmp = mappingA.originalColumn - mappingB.originalColumn;
      if (cmp !== 0) {
        return cmp;
      }
      return strcmp(mappingA.name, mappingB.name);
    }
    exports2.compareByGeneratedPositionsInflated = compareByGeneratedPositionsInflated;
    function parseSourceMapInput(str) {
      return JSON.parse(str.replace(/^\)]}'[^\n]*\n/, ""));
    }
    exports2.parseSourceMapInput = parseSourceMapInput;
    function computeSourceURL(sourceRoot, sourceURL, sourceMapURL) {
      sourceURL = sourceURL || "";
      if (sourceRoot) {
        if (sourceRoot[sourceRoot.length - 1] !== "/" && sourceURL[0] !== "/") {
          sourceRoot += "/";
        }
        sourceURL = sourceRoot + sourceURL;
      }
      if (sourceMapURL) {
        var parsed = urlParse(sourceMapURL);
        if (!parsed) {
          throw new Error("sourceMapURL could not be parsed");
        }
        if (parsed.path) {
          var index = parsed.path.lastIndexOf("/");
          if (index >= 0) {
            parsed.path = parsed.path.substring(0, index + 1);
          }
        }
        sourceURL = join(urlGenerate(parsed), sourceURL);
      }
      return normalize(sourceURL);
    }
    exports2.computeSourceURL = computeSourceURL;
  })(util);
  return util;
}
var arraySet = {};
var hasRequiredArraySet;
function requireArraySet() {
  if (hasRequiredArraySet) return arraySet;
  hasRequiredArraySet = 1;
  var util2 = requireUtil$1();
  var has = Object.prototype.hasOwnProperty;
  var hasNativeMap = typeof Map !== "undefined";
  function ArraySet() {
    this._array = [];
    this._set = hasNativeMap ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  ArraySet.fromArray = function ArraySet_fromArray(aArray, aAllowDuplicates) {
    var set = new ArraySet();
    for (var i = 0, len = aArray.length; i < len; i++) {
      set.add(aArray[i], aAllowDuplicates);
    }
    return set;
  };
  ArraySet.prototype.size = function ArraySet_size() {
    return hasNativeMap ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  };
  ArraySet.prototype.add = function ArraySet_add(aStr, aAllowDuplicates) {
    var sStr = hasNativeMap ? aStr : util2.toSetString(aStr);
    var isDuplicate = hasNativeMap ? this.has(aStr) : has.call(this._set, sStr);
    var idx = this._array.length;
    if (!isDuplicate || aAllowDuplicates) {
      this._array.push(aStr);
    }
    if (!isDuplicate) {
      if (hasNativeMap) {
        this._set.set(aStr, idx);
      } else {
        this._set[sStr] = idx;
      }
    }
  };
  ArraySet.prototype.has = function ArraySet_has(aStr) {
    if (hasNativeMap) {
      return this._set.has(aStr);
    } else {
      var sStr = util2.toSetString(aStr);
      return has.call(this._set, sStr);
    }
  };
  ArraySet.prototype.indexOf = function ArraySet_indexOf(aStr) {
    if (hasNativeMap) {
      var idx = this._set.get(aStr);
      if (idx >= 0) {
        return idx;
      }
    } else {
      var sStr = util2.toSetString(aStr);
      if (has.call(this._set, sStr)) {
        return this._set[sStr];
      }
    }
    throw new Error('"' + aStr + '" is not in the set.');
  };
  ArraySet.prototype.at = function ArraySet_at(aIdx) {
    if (aIdx >= 0 && aIdx < this._array.length) {
      return this._array[aIdx];
    }
    throw new Error("No element indexed by " + aIdx);
  };
  ArraySet.prototype.toArray = function ArraySet_toArray() {
    return this._array.slice();
  };
  arraySet.ArraySet = ArraySet;
  return arraySet;
}
var mappingList = {};
var hasRequiredMappingList;
function requireMappingList() {
  if (hasRequiredMappingList) return mappingList;
  hasRequiredMappingList = 1;
  var util2 = requireUtil$1();
  function generatedPositionAfter(mappingA, mappingB) {
    var lineA = mappingA.generatedLine;
    var lineB = mappingB.generatedLine;
    var columnA = mappingA.generatedColumn;
    var columnB = mappingB.generatedColumn;
    return lineB > lineA || lineB == lineA && columnB >= columnA || util2.compareByGeneratedPositionsInflated(mappingA, mappingB) <= 0;
  }
  function MappingList() {
    this._array = [];
    this._sorted = true;
    this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  MappingList.prototype.unsortedForEach = function MappingList_forEach(aCallback, aThisArg) {
    this._array.forEach(aCallback, aThisArg);
  };
  MappingList.prototype.add = function MappingList_add(aMapping) {
    if (generatedPositionAfter(this._last, aMapping)) {
      this._last = aMapping;
      this._array.push(aMapping);
    } else {
      this._sorted = false;
      this._array.push(aMapping);
    }
  };
  MappingList.prototype.toArray = function MappingList_toArray() {
    if (!this._sorted) {
      this._array.sort(util2.compareByGeneratedPositionsInflated);
      this._sorted = true;
    }
    return this._array;
  };
  mappingList.MappingList = MappingList;
  return mappingList;
}
var hasRequiredSourceMapGenerator;
function requireSourceMapGenerator() {
  if (hasRequiredSourceMapGenerator) return sourceMapGenerator;
  hasRequiredSourceMapGenerator = 1;
  var base64VLQ = requireBase64Vlq();
  var util2 = requireUtil$1();
  var ArraySet = requireArraySet().ArraySet;
  var MappingList = requireMappingList().MappingList;
  function SourceMapGenerator(aArgs) {
    if (!aArgs) {
      aArgs = {};
    }
    this._file = util2.getArg(aArgs, "file", null);
    this._sourceRoot = util2.getArg(aArgs, "sourceRoot", null);
    this._skipValidation = util2.getArg(aArgs, "skipValidation", false);
    this._sources = new ArraySet();
    this._names = new ArraySet();
    this._mappings = new MappingList();
    this._sourcesContents = null;
  }
  SourceMapGenerator.prototype._version = 3;
  SourceMapGenerator.fromSourceMap = function SourceMapGenerator_fromSourceMap(aSourceMapConsumer) {
    var sourceRoot = aSourceMapConsumer.sourceRoot;
    var generator = new SourceMapGenerator({
      file: aSourceMapConsumer.file,
      sourceRoot
    });
    aSourceMapConsumer.eachMapping(function(mapping2) {
      var newMapping = {
        generated: {
          line: mapping2.generatedLine,
          column: mapping2.generatedColumn
        }
      };
      if (mapping2.source != null) {
        newMapping.source = mapping2.source;
        if (sourceRoot != null) {
          newMapping.source = util2.relative(sourceRoot, newMapping.source);
        }
        newMapping.original = {
          line: mapping2.originalLine,
          column: mapping2.originalColumn
        };
        if (mapping2.name != null) {
          newMapping.name = mapping2.name;
        }
      }
      generator.addMapping(newMapping);
    });
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var sourceRelative = sourceFile;
      if (sourceRoot !== null) {
        sourceRelative = util2.relative(sourceRoot, sourceFile);
      }
      if (!generator._sources.has(sourceRelative)) {
        generator._sources.add(sourceRelative);
      }
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        generator.setSourceContent(sourceFile, content);
      }
    });
    return generator;
  };
  SourceMapGenerator.prototype.addMapping = function SourceMapGenerator_addMapping(aArgs) {
    var generated = util2.getArg(aArgs, "generated");
    var original = util2.getArg(aArgs, "original", null);
    var source = util2.getArg(aArgs, "source", null);
    var name = util2.getArg(aArgs, "name", null);
    if (!this._skipValidation) {
      this._validateMapping(generated, original, source, name);
    }
    if (source != null) {
      source = String(source);
      if (!this._sources.has(source)) {
        this._sources.add(source);
      }
    }
    if (name != null) {
      name = String(name);
      if (!this._names.has(name)) {
        this._names.add(name);
      }
    }
    this._mappings.add({
      generatedLine: generated.line,
      generatedColumn: generated.column,
      originalLine: original != null && original.line,
      originalColumn: original != null && original.column,
      source,
      name
    });
  };
  SourceMapGenerator.prototype.setSourceContent = function SourceMapGenerator_setSourceContent(aSourceFile, aSourceContent) {
    var source = aSourceFile;
    if (this._sourceRoot != null) {
      source = util2.relative(this._sourceRoot, source);
    }
    if (aSourceContent != null) {
      if (!this._sourcesContents) {
        this._sourcesContents = /* @__PURE__ */ Object.create(null);
      }
      this._sourcesContents[util2.toSetString(source)] = aSourceContent;
    } else if (this._sourcesContents) {
      delete this._sourcesContents[util2.toSetString(source)];
      if (Object.keys(this._sourcesContents).length === 0) {
        this._sourcesContents = null;
      }
    }
  };
  SourceMapGenerator.prototype.applySourceMap = function SourceMapGenerator_applySourceMap(aSourceMapConsumer, aSourceFile, aSourceMapPath) {
    var sourceFile = aSourceFile;
    if (aSourceFile == null) {
      if (aSourceMapConsumer.file == null) {
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      }
      sourceFile = aSourceMapConsumer.file;
    }
    var sourceRoot = this._sourceRoot;
    if (sourceRoot != null) {
      sourceFile = util2.relative(sourceRoot, sourceFile);
    }
    var newSources = new ArraySet();
    var newNames = new ArraySet();
    this._mappings.unsortedForEach(function(mapping2) {
      if (mapping2.source === sourceFile && mapping2.originalLine != null) {
        var original = aSourceMapConsumer.originalPositionFor({
          line: mapping2.originalLine,
          column: mapping2.originalColumn
        });
        if (original.source != null) {
          mapping2.source = original.source;
          if (aSourceMapPath != null) {
            mapping2.source = util2.join(aSourceMapPath, mapping2.source);
          }
          if (sourceRoot != null) {
            mapping2.source = util2.relative(sourceRoot, mapping2.source);
          }
          mapping2.originalLine = original.line;
          mapping2.originalColumn = original.column;
          if (original.name != null) {
            mapping2.name = original.name;
          }
        }
      }
      var source = mapping2.source;
      if (source != null && !newSources.has(source)) {
        newSources.add(source);
      }
      var name = mapping2.name;
      if (name != null && !newNames.has(name)) {
        newNames.add(name);
      }
    }, this);
    this._sources = newSources;
    this._names = newNames;
    aSourceMapConsumer.sources.forEach(function(sourceFile2) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile2);
      if (content != null) {
        if (aSourceMapPath != null) {
          sourceFile2 = util2.join(aSourceMapPath, sourceFile2);
        }
        if (sourceRoot != null) {
          sourceFile2 = util2.relative(sourceRoot, sourceFile2);
        }
        this.setSourceContent(sourceFile2, content);
      }
    }, this);
  };
  SourceMapGenerator.prototype._validateMapping = function SourceMapGenerator_validateMapping(aGenerated, aOriginal, aSource, aName) {
    if (aOriginal && typeof aOriginal.line !== "number" && typeof aOriginal.column !== "number") {
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    }
    if (aGenerated && "line" in aGenerated && "column" in aGenerated && aGenerated.line > 0 && aGenerated.column >= 0 && !aOriginal && !aSource && !aName) {
      return;
    } else if (aGenerated && "line" in aGenerated && "column" in aGenerated && aOriginal && "line" in aOriginal && "column" in aOriginal && aGenerated.line > 0 && aGenerated.column >= 0 && aOriginal.line > 0 && aOriginal.column >= 0 && aSource) {
      return;
    } else {
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: aGenerated,
        source: aSource,
        original: aOriginal,
        name: aName
      }));
    }
  };
  SourceMapGenerator.prototype._serializeMappings = function SourceMapGenerator_serializeMappings() {
    var previousGeneratedColumn = 0;
    var previousGeneratedLine = 1;
    var previousOriginalColumn = 0;
    var previousOriginalLine = 0;
    var previousName = 0;
    var previousSource = 0;
    var result = "";
    var next;
    var mapping2;
    var nameIdx;
    var sourceIdx;
    var mappings = this._mappings.toArray();
    for (var i = 0, len = mappings.length; i < len; i++) {
      mapping2 = mappings[i];
      next = "";
      if (mapping2.generatedLine !== previousGeneratedLine) {
        previousGeneratedColumn = 0;
        while (mapping2.generatedLine !== previousGeneratedLine) {
          next += ";";
          previousGeneratedLine++;
        }
      } else {
        if (i > 0) {
          if (!util2.compareByGeneratedPositionsInflated(mapping2, mappings[i - 1])) {
            continue;
          }
          next += ",";
        }
      }
      next += base64VLQ.encode(mapping2.generatedColumn - previousGeneratedColumn);
      previousGeneratedColumn = mapping2.generatedColumn;
      if (mapping2.source != null) {
        sourceIdx = this._sources.indexOf(mapping2.source);
        next += base64VLQ.encode(sourceIdx - previousSource);
        previousSource = sourceIdx;
        next += base64VLQ.encode(mapping2.originalLine - 1 - previousOriginalLine);
        previousOriginalLine = mapping2.originalLine - 1;
        next += base64VLQ.encode(mapping2.originalColumn - previousOriginalColumn);
        previousOriginalColumn = mapping2.originalColumn;
        if (mapping2.name != null) {
          nameIdx = this._names.indexOf(mapping2.name);
          next += base64VLQ.encode(nameIdx - previousName);
          previousName = nameIdx;
        }
      }
      result += next;
    }
    return result;
  };
  SourceMapGenerator.prototype._generateSourcesContent = function SourceMapGenerator_generateSourcesContent(aSources, aSourceRoot) {
    return aSources.map(function(source) {
      if (!this._sourcesContents) {
        return null;
      }
      if (aSourceRoot != null) {
        source = util2.relative(aSourceRoot, source);
      }
      var key = util2.toSetString(source);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, key) ? this._sourcesContents[key] : null;
    }, this);
  };
  SourceMapGenerator.prototype.toJSON = function SourceMapGenerator_toJSON() {
    var map = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    if (this._file != null) {
      map.file = this._file;
    }
    if (this._sourceRoot != null) {
      map.sourceRoot = this._sourceRoot;
    }
    if (this._sourcesContents) {
      map.sourcesContent = this._generateSourcesContent(map.sources, map.sourceRoot);
    }
    return map;
  };
  SourceMapGenerator.prototype.toString = function SourceMapGenerator_toString() {
    return JSON.stringify(this.toJSON());
  };
  sourceMapGenerator.SourceMapGenerator = SourceMapGenerator;
  return sourceMapGenerator;
}
var sourceMapConsumer = {};
var binarySearch = {};
var hasRequiredBinarySearch;
function requireBinarySearch() {
  if (hasRequiredBinarySearch) return binarySearch;
  hasRequiredBinarySearch = 1;
  (function(exports2) {
    exports2.GREATEST_LOWER_BOUND = 1;
    exports2.LEAST_UPPER_BOUND = 2;
    function recursiveSearch(aLow, aHigh, aNeedle, aHaystack, aCompare, aBias) {
      var mid = Math.floor((aHigh - aLow) / 2) + aLow;
      var cmp = aCompare(aNeedle, aHaystack[mid], true);
      if (cmp === 0) {
        return mid;
      } else if (cmp > 0) {
        if (aHigh - mid > 1) {
          return recursiveSearch(mid, aHigh, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return aHigh < aHaystack.length ? aHigh : -1;
        } else {
          return mid;
        }
      } else {
        if (mid - aLow > 1) {
          return recursiveSearch(aLow, mid, aNeedle, aHaystack, aCompare, aBias);
        }
        if (aBias == exports2.LEAST_UPPER_BOUND) {
          return mid;
        } else {
          return aLow < 0 ? -1 : aLow;
        }
      }
    }
    exports2.search = function search(aNeedle, aHaystack, aCompare, aBias) {
      if (aHaystack.length === 0) {
        return -1;
      }
      var index = recursiveSearch(
        -1,
        aHaystack.length,
        aNeedle,
        aHaystack,
        aCompare,
        aBias || exports2.GREATEST_LOWER_BOUND
      );
      if (index < 0) {
        return -1;
      }
      while (index - 1 >= 0) {
        if (aCompare(aHaystack[index], aHaystack[index - 1], true) !== 0) {
          break;
        }
        --index;
      }
      return index;
    };
  })(binarySearch);
  return binarySearch;
}
var quickSort = {};
var hasRequiredQuickSort;
function requireQuickSort() {
  if (hasRequiredQuickSort) return quickSort;
  hasRequiredQuickSort = 1;
  function swap(ary, x, y) {
    var temp = ary[x];
    ary[x] = ary[y];
    ary[y] = temp;
  }
  function randomIntInRange(low, high) {
    return Math.round(low + Math.random() * (high - low));
  }
  function doQuickSort(ary, comparator, p, r) {
    if (p < r) {
      var pivotIndex = randomIntInRange(p, r);
      var i = p - 1;
      swap(ary, pivotIndex, r);
      var pivot = ary[r];
      for (var j = p; j < r; j++) {
        if (comparator(ary[j], pivot) <= 0) {
          i += 1;
          swap(ary, i, j);
        }
      }
      swap(ary, i + 1, j);
      var q = i + 1;
      doQuickSort(ary, comparator, p, q - 1);
      doQuickSort(ary, comparator, q + 1, r);
    }
  }
  quickSort.quickSort = function(ary, comparator) {
    doQuickSort(ary, comparator, 0, ary.length - 1);
  };
  return quickSort;
}
var hasRequiredSourceMapConsumer;
function requireSourceMapConsumer() {
  if (hasRequiredSourceMapConsumer) return sourceMapConsumer;
  hasRequiredSourceMapConsumer = 1;
  var util2 = requireUtil$1();
  var binarySearch2 = requireBinarySearch();
  var ArraySet = requireArraySet().ArraySet;
  var base64VLQ = requireBase64Vlq();
  var quickSort2 = requireQuickSort().quickSort;
  function SourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    return sourceMap2.sections != null ? new IndexedSourceMapConsumer(sourceMap2, aSourceMapURL) : new BasicSourceMapConsumer(sourceMap2, aSourceMapURL);
  }
  SourceMapConsumer.fromSourceMap = function(aSourceMap, aSourceMapURL) {
    return BasicSourceMapConsumer.fromSourceMap(aSourceMap, aSourceMapURL);
  };
  SourceMapConsumer.prototype._version = 3;
  SourceMapConsumer.prototype.__generatedMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_generatedMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__generatedMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__generatedMappings;
    }
  });
  SourceMapConsumer.prototype.__originalMappings = null;
  Object.defineProperty(SourceMapConsumer.prototype, "_originalMappings", {
    configurable: true,
    enumerable: true,
    get: function() {
      if (!this.__originalMappings) {
        this._parseMappings(this._mappings, this.sourceRoot);
      }
      return this.__originalMappings;
    }
  });
  SourceMapConsumer.prototype._charIsMappingSeparator = function SourceMapConsumer_charIsMappingSeparator(aStr, index) {
    var c = aStr.charAt(index);
    return c === ";" || c === ",";
  };
  SourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    throw new Error("Subclasses must implement _parseMappings");
  };
  SourceMapConsumer.GENERATED_ORDER = 1;
  SourceMapConsumer.ORIGINAL_ORDER = 2;
  SourceMapConsumer.GREATEST_LOWER_BOUND = 1;
  SourceMapConsumer.LEAST_UPPER_BOUND = 2;
  SourceMapConsumer.prototype.eachMapping = function SourceMapConsumer_eachMapping(aCallback, aContext, aOrder) {
    var context = aContext || null;
    var order = aOrder || SourceMapConsumer.GENERATED_ORDER;
    var mappings;
    switch (order) {
      case SourceMapConsumer.GENERATED_ORDER:
        mappings = this._generatedMappings;
        break;
      case SourceMapConsumer.ORIGINAL_ORDER:
        mappings = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var sourceRoot = this.sourceRoot;
    mappings.map(function(mapping2) {
      var source = mapping2.source === null ? null : this._sources.at(mapping2.source);
      source = util2.computeSourceURL(sourceRoot, source, this._sourceMapURL);
      return {
        source,
        generatedLine: mapping2.generatedLine,
        generatedColumn: mapping2.generatedColumn,
        originalLine: mapping2.originalLine,
        originalColumn: mapping2.originalColumn,
        name: mapping2.name === null ? null : this._names.at(mapping2.name)
      };
    }, this).forEach(aCallback, context);
  };
  SourceMapConsumer.prototype.allGeneratedPositionsFor = function SourceMapConsumer_allGeneratedPositionsFor(aArgs) {
    var line = util2.getArg(aArgs, "line");
    var needle = {
      source: util2.getArg(aArgs, "source"),
      originalLine: line,
      originalColumn: util2.getArg(aArgs, "column", 0)
    };
    needle.source = this._findSourceIndex(needle.source);
    if (needle.source < 0) {
      return [];
    }
    var mappings = [];
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      binarySearch2.LEAST_UPPER_BOUND
    );
    if (index >= 0) {
      var mapping2 = this._originalMappings[index];
      if (aArgs.column === void 0) {
        var originalLine = mapping2.originalLine;
        while (mapping2 && mapping2.originalLine === originalLine) {
          mappings.push({
            line: util2.getArg(mapping2, "generatedLine", null),
            column: util2.getArg(mapping2, "generatedColumn", null),
            lastColumn: util2.getArg(mapping2, "lastGeneratedColumn", null)
          });
          mapping2 = this._originalMappings[++index];
        }
      } else {
        var originalColumn = mapping2.originalColumn;
        while (mapping2 && mapping2.originalLine === line && mapping2.originalColumn == originalColumn) {
          mappings.push({
            line: util2.getArg(mapping2, "generatedLine", null),
            column: util2.getArg(mapping2, "generatedColumn", null),
            lastColumn: util2.getArg(mapping2, "lastGeneratedColumn", null)
          });
          mapping2 = this._originalMappings[++index];
        }
      }
    }
    return mappings;
  };
  sourceMapConsumer.SourceMapConsumer = SourceMapConsumer;
  function BasicSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version = util2.getArg(sourceMap2, "version");
    var sources = util2.getArg(sourceMap2, "sources");
    var names = util2.getArg(sourceMap2, "names", []);
    var sourceRoot = util2.getArg(sourceMap2, "sourceRoot", null);
    var sourcesContent = util2.getArg(sourceMap2, "sourcesContent", null);
    var mappings = util2.getArg(sourceMap2, "mappings");
    var file = util2.getArg(sourceMap2, "file", null);
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    if (sourceRoot) {
      sourceRoot = util2.normalize(sourceRoot);
    }
    sources = sources.map(String).map(util2.normalize).map(function(source) {
      return sourceRoot && util2.isAbsolute(sourceRoot) && util2.isAbsolute(source) ? util2.relative(sourceRoot, source) : source;
    });
    this._names = ArraySet.fromArray(names.map(String), true);
    this._sources = ArraySet.fromArray(sources, true);
    this._absoluteSources = this._sources.toArray().map(function(s) {
      return util2.computeSourceURL(sourceRoot, s, aSourceMapURL);
    });
    this.sourceRoot = sourceRoot;
    this.sourcesContent = sourcesContent;
    this._mappings = mappings;
    this._sourceMapURL = aSourceMapURL;
    this.file = file;
  }
  BasicSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  BasicSourceMapConsumer.prototype.consumer = SourceMapConsumer;
  BasicSourceMapConsumer.prototype._findSourceIndex = function(aSource) {
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    if (this._sources.has(relativeSource)) {
      return this._sources.indexOf(relativeSource);
    }
    var i;
    for (i = 0; i < this._absoluteSources.length; ++i) {
      if (this._absoluteSources[i] == aSource) {
        return i;
      }
    }
    return -1;
  };
  BasicSourceMapConsumer.fromSourceMap = function SourceMapConsumer_fromSourceMap(aSourceMap, aSourceMapURL) {
    var smc = Object.create(BasicSourceMapConsumer.prototype);
    var names = smc._names = ArraySet.fromArray(aSourceMap._names.toArray(), true);
    var sources = smc._sources = ArraySet.fromArray(aSourceMap._sources.toArray(), true);
    smc.sourceRoot = aSourceMap._sourceRoot;
    smc.sourcesContent = aSourceMap._generateSourcesContent(
      smc._sources.toArray(),
      smc.sourceRoot
    );
    smc.file = aSourceMap._file;
    smc._sourceMapURL = aSourceMapURL;
    smc._absoluteSources = smc._sources.toArray().map(function(s) {
      return util2.computeSourceURL(smc.sourceRoot, s, aSourceMapURL);
    });
    var generatedMappings = aSourceMap._mappings.toArray().slice();
    var destGeneratedMappings = smc.__generatedMappings = [];
    var destOriginalMappings = smc.__originalMappings = [];
    for (var i = 0, length = generatedMappings.length; i < length; i++) {
      var srcMapping = generatedMappings[i];
      var destMapping = new Mapping();
      destMapping.generatedLine = srcMapping.generatedLine;
      destMapping.generatedColumn = srcMapping.generatedColumn;
      if (srcMapping.source) {
        destMapping.source = sources.indexOf(srcMapping.source);
        destMapping.originalLine = srcMapping.originalLine;
        destMapping.originalColumn = srcMapping.originalColumn;
        if (srcMapping.name) {
          destMapping.name = names.indexOf(srcMapping.name);
        }
        destOriginalMappings.push(destMapping);
      }
      destGeneratedMappings.push(destMapping);
    }
    quickSort2(smc.__originalMappings, util2.compareByOriginalPositions);
    return smc;
  };
  BasicSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(BasicSourceMapConsumer.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function Mapping() {
    this.generatedLine = 0;
    this.generatedColumn = 0;
    this.source = null;
    this.originalLine = null;
    this.originalColumn = null;
    this.name = null;
  }
  BasicSourceMapConsumer.prototype._parseMappings = function SourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    var generatedLine = 1;
    var previousGeneratedColumn = 0;
    var previousOriginalLine = 0;
    var previousOriginalColumn = 0;
    var previousSource = 0;
    var previousName = 0;
    var length = aStr.length;
    var index = 0;
    var cachedSegments = {};
    var temp = {};
    var originalMappings = [];
    var generatedMappings = [];
    var mapping2, str, segment, end, value;
    while (index < length) {
      if (aStr.charAt(index) === ";") {
        generatedLine++;
        index++;
        previousGeneratedColumn = 0;
      } else if (aStr.charAt(index) === ",") {
        index++;
      } else {
        mapping2 = new Mapping();
        mapping2.generatedLine = generatedLine;
        for (end = index; end < length; end++) {
          if (this._charIsMappingSeparator(aStr, end)) {
            break;
          }
        }
        str = aStr.slice(index, end);
        segment = cachedSegments[str];
        if (segment) {
          index += str.length;
        } else {
          segment = [];
          while (index < end) {
            base64VLQ.decode(aStr, index, temp);
            value = temp.value;
            index = temp.rest;
            segment.push(value);
          }
          if (segment.length === 2) {
            throw new Error("Found a source, but no line and column");
          }
          if (segment.length === 3) {
            throw new Error("Found a source and line, but no column");
          }
          cachedSegments[str] = segment;
        }
        mapping2.generatedColumn = previousGeneratedColumn + segment[0];
        previousGeneratedColumn = mapping2.generatedColumn;
        if (segment.length > 1) {
          mapping2.source = previousSource + segment[1];
          previousSource += segment[1];
          mapping2.originalLine = previousOriginalLine + segment[2];
          previousOriginalLine = mapping2.originalLine;
          mapping2.originalLine += 1;
          mapping2.originalColumn = previousOriginalColumn + segment[3];
          previousOriginalColumn = mapping2.originalColumn;
          if (segment.length > 4) {
            mapping2.name = previousName + segment[4];
            previousName += segment[4];
          }
        }
        generatedMappings.push(mapping2);
        if (typeof mapping2.originalLine === "number") {
          originalMappings.push(mapping2);
        }
      }
    }
    quickSort2(generatedMappings, util2.compareByGeneratedPositionsDeflated);
    this.__generatedMappings = generatedMappings;
    quickSort2(originalMappings, util2.compareByOriginalPositions);
    this.__originalMappings = originalMappings;
  };
  BasicSourceMapConsumer.prototype._findMapping = function SourceMapConsumer_findMapping(aNeedle, aMappings, aLineName, aColumnName, aComparator, aBias) {
    if (aNeedle[aLineName] <= 0) {
      throw new TypeError("Line must be greater than or equal to 1, got " + aNeedle[aLineName]);
    }
    if (aNeedle[aColumnName] < 0) {
      throw new TypeError("Column must be greater than or equal to 0, got " + aNeedle[aColumnName]);
    }
    return binarySearch2.search(aNeedle, aMappings, aComparator, aBias);
  };
  BasicSourceMapConsumer.prototype.computeColumnSpans = function SourceMapConsumer_computeColumnSpans() {
    for (var index = 0; index < this._generatedMappings.length; ++index) {
      var mapping2 = this._generatedMappings[index];
      if (index + 1 < this._generatedMappings.length) {
        var nextMapping = this._generatedMappings[index + 1];
        if (mapping2.generatedLine === nextMapping.generatedLine) {
          mapping2.lastGeneratedColumn = nextMapping.generatedColumn - 1;
          continue;
        }
      }
      mapping2.lastGeneratedColumn = Infinity;
    }
  };
  BasicSourceMapConsumer.prototype.originalPositionFor = function SourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      util2.compareByGeneratedPositionsDeflated,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping2 = this._generatedMappings[index];
      if (mapping2.generatedLine === needle.generatedLine) {
        var source = util2.getArg(mapping2, "source", null);
        if (source !== null) {
          source = this._sources.at(source);
          source = util2.computeSourceURL(this.sourceRoot, source, this._sourceMapURL);
        }
        var name = util2.getArg(mapping2, "name", null);
        if (name !== null) {
          name = this._names.at(name);
        }
        return {
          source,
          line: util2.getArg(mapping2, "originalLine", null),
          column: util2.getArg(mapping2, "originalColumn", null),
          name
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  };
  BasicSourceMapConsumer.prototype.hasContentsOfAllSources = function BasicSourceMapConsumer_hasContentsOfAllSources() {
    if (!this.sourcesContent) {
      return false;
    }
    return this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(sc) {
      return sc == null;
    });
  };
  BasicSourceMapConsumer.prototype.sourceContentFor = function SourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    if (!this.sourcesContent) {
      return null;
    }
    var index = this._findSourceIndex(aSource);
    if (index >= 0) {
      return this.sourcesContent[index];
    }
    var relativeSource = aSource;
    if (this.sourceRoot != null) {
      relativeSource = util2.relative(this.sourceRoot, relativeSource);
    }
    var url2;
    if (this.sourceRoot != null && (url2 = util2.urlParse(this.sourceRoot))) {
      var fileUriAbsPath = relativeSource.replace(/^file:\/\//, "");
      if (url2.scheme == "file" && this._sources.has(fileUriAbsPath)) {
        return this.sourcesContent[this._sources.indexOf(fileUriAbsPath)];
      }
      if ((!url2.path || url2.path == "/") && this._sources.has("/" + relativeSource)) {
        return this.sourcesContent[this._sources.indexOf("/" + relativeSource)];
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + relativeSource + '" is not in the SourceMap.');
    }
  };
  BasicSourceMapConsumer.prototype.generatedPositionFor = function SourceMapConsumer_generatedPositionFor(aArgs) {
    var source = util2.getArg(aArgs, "source");
    source = this._findSourceIndex(source);
    if (source < 0) {
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    }
    var needle = {
      source,
      originalLine: util2.getArg(aArgs, "line"),
      originalColumn: util2.getArg(aArgs, "column")
    };
    var index = this._findMapping(
      needle,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      util2.compareByOriginalPositions,
      util2.getArg(aArgs, "bias", SourceMapConsumer.GREATEST_LOWER_BOUND)
    );
    if (index >= 0) {
      var mapping2 = this._originalMappings[index];
      if (mapping2.source === needle.source) {
        return {
          line: util2.getArg(mapping2, "generatedLine", null),
          column: util2.getArg(mapping2, "generatedColumn", null),
          lastColumn: util2.getArg(mapping2, "lastGeneratedColumn", null)
        };
      }
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  };
  sourceMapConsumer.BasicSourceMapConsumer = BasicSourceMapConsumer;
  function IndexedSourceMapConsumer(aSourceMap, aSourceMapURL) {
    var sourceMap2 = aSourceMap;
    if (typeof aSourceMap === "string") {
      sourceMap2 = util2.parseSourceMapInput(aSourceMap);
    }
    var version = util2.getArg(sourceMap2, "version");
    var sections = util2.getArg(sourceMap2, "sections");
    if (version != this._version) {
      throw new Error("Unsupported version: " + version);
    }
    this._sources = new ArraySet();
    this._names = new ArraySet();
    var lastOffset = {
      line: -1,
      column: 0
    };
    this._sections = sections.map(function(s) {
      if (s.url) {
        throw new Error("Support for url field in sections not implemented.");
      }
      var offset = util2.getArg(s, "offset");
      var offsetLine = util2.getArg(offset, "line");
      var offsetColumn = util2.getArg(offset, "column");
      if (offsetLine < lastOffset.line || offsetLine === lastOffset.line && offsetColumn < lastOffset.column) {
        throw new Error("Section offsets must be ordered and non-overlapping.");
      }
      lastOffset = offset;
      return {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: offsetLine + 1,
          generatedColumn: offsetColumn + 1
        },
        consumer: new SourceMapConsumer(util2.getArg(s, "map"), aSourceMapURL)
      };
    });
  }
  IndexedSourceMapConsumer.prototype = Object.create(SourceMapConsumer.prototype);
  IndexedSourceMapConsumer.prototype.constructor = SourceMapConsumer;
  IndexedSourceMapConsumer.prototype._version = 3;
  Object.defineProperty(IndexedSourceMapConsumer.prototype, "sources", {
    get: function() {
      var sources = [];
      for (var i = 0; i < this._sections.length; i++) {
        for (var j = 0; j < this._sections[i].consumer.sources.length; j++) {
          sources.push(this._sections[i].consumer.sources[j]);
        }
      }
      return sources;
    }
  });
  IndexedSourceMapConsumer.prototype.originalPositionFor = function IndexedSourceMapConsumer_originalPositionFor(aArgs) {
    var needle = {
      generatedLine: util2.getArg(aArgs, "line"),
      generatedColumn: util2.getArg(aArgs, "column")
    };
    var sectionIndex = binarySearch2.search(
      needle,
      this._sections,
      function(needle2, section2) {
        var cmp = needle2.generatedLine - section2.generatedOffset.generatedLine;
        if (cmp) {
          return cmp;
        }
        return needle2.generatedColumn - section2.generatedOffset.generatedColumn;
      }
    );
    var section = this._sections[sectionIndex];
    if (!section) {
      return {
        source: null,
        line: null,
        column: null,
        name: null
      };
    }
    return section.consumer.originalPositionFor({
      line: needle.generatedLine - (section.generatedOffset.generatedLine - 1),
      column: needle.generatedColumn - (section.generatedOffset.generatedLine === needle.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
      bias: aArgs.bias
    });
  };
  IndexedSourceMapConsumer.prototype.hasContentsOfAllSources = function IndexedSourceMapConsumer_hasContentsOfAllSources() {
    return this._sections.every(function(s) {
      return s.consumer.hasContentsOfAllSources();
    });
  };
  IndexedSourceMapConsumer.prototype.sourceContentFor = function IndexedSourceMapConsumer_sourceContentFor(aSource, nullOnMissing) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var content = section.consumer.sourceContentFor(aSource, true);
      if (content) {
        return content;
      }
    }
    if (nullOnMissing) {
      return null;
    } else {
      throw new Error('"' + aSource + '" is not in the SourceMap.');
    }
  };
  IndexedSourceMapConsumer.prototype.generatedPositionFor = function IndexedSourceMapConsumer_generatedPositionFor(aArgs) {
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      if (section.consumer._findSourceIndex(util2.getArg(aArgs, "source")) === -1) {
        continue;
      }
      var generatedPosition = section.consumer.generatedPositionFor(aArgs);
      if (generatedPosition) {
        var ret = {
          line: generatedPosition.line + (section.generatedOffset.generatedLine - 1),
          column: generatedPosition.column + (section.generatedOffset.generatedLine === generatedPosition.line ? section.generatedOffset.generatedColumn - 1 : 0)
        };
        return ret;
      }
    }
    return {
      line: null,
      column: null
    };
  };
  IndexedSourceMapConsumer.prototype._parseMappings = function IndexedSourceMapConsumer_parseMappings(aStr, aSourceRoot) {
    this.__generatedMappings = [];
    this.__originalMappings = [];
    for (var i = 0; i < this._sections.length; i++) {
      var section = this._sections[i];
      var sectionMappings = section.consumer._generatedMappings;
      for (var j = 0; j < sectionMappings.length; j++) {
        var mapping2 = sectionMappings[j];
        var source = section.consumer._sources.at(mapping2.source);
        source = util2.computeSourceURL(section.consumer.sourceRoot, source, this._sourceMapURL);
        this._sources.add(source);
        source = this._sources.indexOf(source);
        var name = null;
        if (mapping2.name) {
          name = section.consumer._names.at(mapping2.name);
          this._names.add(name);
          name = this._names.indexOf(name);
        }
        var adjustedMapping = {
          source,
          generatedLine: mapping2.generatedLine + (section.generatedOffset.generatedLine - 1),
          generatedColumn: mapping2.generatedColumn + (section.generatedOffset.generatedLine === mapping2.generatedLine ? section.generatedOffset.generatedColumn - 1 : 0),
          originalLine: mapping2.originalLine,
          originalColumn: mapping2.originalColumn,
          name
        };
        this.__generatedMappings.push(adjustedMapping);
        if (typeof adjustedMapping.originalLine === "number") {
          this.__originalMappings.push(adjustedMapping);
        }
      }
    }
    quickSort2(this.__generatedMappings, util2.compareByGeneratedPositionsDeflated);
    quickSort2(this.__originalMappings, util2.compareByOriginalPositions);
  };
  sourceMapConsumer.IndexedSourceMapConsumer = IndexedSourceMapConsumer;
  return sourceMapConsumer;
}
var sourceNode = {};
var hasRequiredSourceNode;
function requireSourceNode() {
  if (hasRequiredSourceNode) return sourceNode;
  hasRequiredSourceNode = 1;
  var SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  var util2 = requireUtil$1();
  var REGEX_NEWLINE = /(\r?\n)/;
  var NEWLINE_CODE = 10;
  var isSourceNode = "$$$isSourceNode$$$";
  function SourceNode(aLine, aColumn, aSource, aChunks, aName) {
    this.children = [];
    this.sourceContents = {};
    this.line = aLine == null ? null : aLine;
    this.column = aColumn == null ? null : aColumn;
    this.source = aSource == null ? null : aSource;
    this.name = aName == null ? null : aName;
    this[isSourceNode] = true;
    if (aChunks != null) this.add(aChunks);
  }
  SourceNode.fromStringWithSourceMap = function SourceNode_fromStringWithSourceMap(aGeneratedCode, aSourceMapConsumer, aRelativePath) {
    var node = new SourceNode();
    var remainingLines = aGeneratedCode.split(REGEX_NEWLINE);
    var remainingLinesIndex = 0;
    var shiftNextLine = function() {
      var lineContents = getNextLine();
      var newLine = getNextLine() || "";
      return lineContents + newLine;
      function getNextLine() {
        return remainingLinesIndex < remainingLines.length ? remainingLines[remainingLinesIndex++] : void 0;
      }
    };
    var lastGeneratedLine = 1, lastGeneratedColumn = 0;
    var lastMapping = null;
    aSourceMapConsumer.eachMapping(function(mapping2) {
      if (lastMapping !== null) {
        if (lastGeneratedLine < mapping2.generatedLine) {
          addMappingWithCode(lastMapping, shiftNextLine());
          lastGeneratedLine++;
          lastGeneratedColumn = 0;
        } else {
          var nextLine = remainingLines[remainingLinesIndex] || "";
          var code2 = nextLine.substr(0, mapping2.generatedColumn - lastGeneratedColumn);
          remainingLines[remainingLinesIndex] = nextLine.substr(mapping2.generatedColumn - lastGeneratedColumn);
          lastGeneratedColumn = mapping2.generatedColumn;
          addMappingWithCode(lastMapping, code2);
          lastMapping = mapping2;
          return;
        }
      }
      while (lastGeneratedLine < mapping2.generatedLine) {
        node.add(shiftNextLine());
        lastGeneratedLine++;
      }
      if (lastGeneratedColumn < mapping2.generatedColumn) {
        var nextLine = remainingLines[remainingLinesIndex] || "";
        node.add(nextLine.substr(0, mapping2.generatedColumn));
        remainingLines[remainingLinesIndex] = nextLine.substr(mapping2.generatedColumn);
        lastGeneratedColumn = mapping2.generatedColumn;
      }
      lastMapping = mapping2;
    }, this);
    if (remainingLinesIndex < remainingLines.length) {
      if (lastMapping) {
        addMappingWithCode(lastMapping, shiftNextLine());
      }
      node.add(remainingLines.splice(remainingLinesIndex).join(""));
    }
    aSourceMapConsumer.sources.forEach(function(sourceFile) {
      var content = aSourceMapConsumer.sourceContentFor(sourceFile);
      if (content != null) {
        if (aRelativePath != null) {
          sourceFile = util2.join(aRelativePath, sourceFile);
        }
        node.setSourceContent(sourceFile, content);
      }
    });
    return node;
    function addMappingWithCode(mapping2, code2) {
      if (mapping2 === null || mapping2.source === void 0) {
        node.add(code2);
      } else {
        var source = aRelativePath ? util2.join(aRelativePath, mapping2.source) : mapping2.source;
        node.add(new SourceNode(
          mapping2.originalLine,
          mapping2.originalColumn,
          source,
          code2,
          mapping2.name
        ));
      }
    }
  };
  SourceNode.prototype.add = function SourceNode_add(aChunk) {
    if (Array.isArray(aChunk)) {
      aChunk.forEach(function(chunk) {
        this.add(chunk);
      }, this);
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      if (aChunk) {
        this.children.push(aChunk);
      }
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.prepend = function SourceNode_prepend(aChunk) {
    if (Array.isArray(aChunk)) {
      for (var i = aChunk.length - 1; i >= 0; i--) {
        this.prepend(aChunk[i]);
      }
    } else if (aChunk[isSourceNode] || typeof aChunk === "string") {
      this.children.unshift(aChunk);
    } else {
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + aChunk
      );
    }
    return this;
  };
  SourceNode.prototype.walk = function SourceNode_walk(aFn) {
    var chunk;
    for (var i = 0, len = this.children.length; i < len; i++) {
      chunk = this.children[i];
      if (chunk[isSourceNode]) {
        chunk.walk(aFn);
      } else {
        if (chunk !== "") {
          aFn(chunk, {
            source: this.source,
            line: this.line,
            column: this.column,
            name: this.name
          });
        }
      }
    }
  };
  SourceNode.prototype.join = function SourceNode_join(aSep) {
    var newChildren;
    var i;
    var len = this.children.length;
    if (len > 0) {
      newChildren = [];
      for (i = 0; i < len - 1; i++) {
        newChildren.push(this.children[i]);
        newChildren.push(aSep);
      }
      newChildren.push(this.children[i]);
      this.children = newChildren;
    }
    return this;
  };
  SourceNode.prototype.replaceRight = function SourceNode_replaceRight(aPattern, aReplacement) {
    var lastChild = this.children[this.children.length - 1];
    if (lastChild[isSourceNode]) {
      lastChild.replaceRight(aPattern, aReplacement);
    } else if (typeof lastChild === "string") {
      this.children[this.children.length - 1] = lastChild.replace(aPattern, aReplacement);
    } else {
      this.children.push("".replace(aPattern, aReplacement));
    }
    return this;
  };
  SourceNode.prototype.setSourceContent = function SourceNode_setSourceContent(aSourceFile, aSourceContent) {
    this.sourceContents[util2.toSetString(aSourceFile)] = aSourceContent;
  };
  SourceNode.prototype.walkSourceContents = function SourceNode_walkSourceContents(aFn) {
    for (var i = 0, len = this.children.length; i < len; i++) {
      if (this.children[i][isSourceNode]) {
        this.children[i].walkSourceContents(aFn);
      }
    }
    var sources = Object.keys(this.sourceContents);
    for (var i = 0, len = sources.length; i < len; i++) {
      aFn(util2.fromSetString(sources[i]), this.sourceContents[sources[i]]);
    }
  };
  SourceNode.prototype.toString = function SourceNode_toString() {
    var str = "";
    this.walk(function(chunk) {
      str += chunk;
    });
    return str;
  };
  SourceNode.prototype.toStringWithSourceMap = function SourceNode_toStringWithSourceMap(aArgs) {
    var generated = {
      code: "",
      line: 1,
      column: 0
    };
    var map = new SourceMapGenerator(aArgs);
    var sourceMappingActive = false;
    var lastOriginalSource = null;
    var lastOriginalLine = null;
    var lastOriginalColumn = null;
    var lastOriginalName = null;
    this.walk(function(chunk, original) {
      generated.code += chunk;
      if (original.source !== null && original.line !== null && original.column !== null) {
        if (lastOriginalSource !== original.source || lastOriginalLine !== original.line || lastOriginalColumn !== original.column || lastOriginalName !== original.name) {
          map.addMapping({
            source: original.source,
            original: {
              line: original.line,
              column: original.column
            },
            generated: {
              line: generated.line,
              column: generated.column
            },
            name: original.name
          });
        }
        lastOriginalSource = original.source;
        lastOriginalLine = original.line;
        lastOriginalColumn = original.column;
        lastOriginalName = original.name;
        sourceMappingActive = true;
      } else if (sourceMappingActive) {
        map.addMapping({
          generated: {
            line: generated.line,
            column: generated.column
          }
        });
        lastOriginalSource = null;
        sourceMappingActive = false;
      }
      for (var idx = 0, length = chunk.length; idx < length; idx++) {
        if (chunk.charCodeAt(idx) === NEWLINE_CODE) {
          generated.line++;
          generated.column = 0;
          if (idx + 1 === length) {
            lastOriginalSource = null;
            sourceMappingActive = false;
          } else if (sourceMappingActive) {
            map.addMapping({
              source: original.source,
              original: {
                line: original.line,
                column: original.column
              },
              generated: {
                line: generated.line,
                column: generated.column
              },
              name: original.name
            });
          }
        } else {
          generated.column++;
        }
      }
    });
    this.walkSourceContents(function(sourceFile, sourceContent) {
      map.setSourceContent(sourceFile, sourceContent);
    });
    return { code: generated.code, map };
  };
  sourceNode.SourceNode = SourceNode;
  return sourceNode;
}
var hasRequiredSourceMap;
function requireSourceMap() {
  if (hasRequiredSourceMap) return sourceMap;
  hasRequiredSourceMap = 1;
  sourceMap.SourceMapGenerator = requireSourceMapGenerator().SourceMapGenerator;
  sourceMap.SourceMapConsumer = requireSourceMapConsumer().SourceMapConsumer;
  sourceMap.SourceNode = requireSourceNode().SourceNode;
  return sourceMap;
}
var hasRequiredUtil;
function requireUtil() {
  if (hasRequiredUtil) return util$1;
  hasRequiredUtil = 1;
  Object.defineProperty(util$1, "__esModule", { value: true });
  util$1.isTrailingCommaEnabled = util$1.getParentExportDeclaration = util$1.isExportDeclaration = util$1.fixFaultyLocations = util$1.getTrueLoc = util$1.composeSourceMaps = util$1.copyPos = util$1.comparePos = util$1.getUnionOfKeys = util$1.getOption = util$1.isBrowser = util$1.getLineTerminator = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var types2 = tslib_1.__importStar(requireMain());
  var n = types2.namedTypes;
  var source_map_1 = tslib_1.__importDefault(requireSourceMap());
  var SourceMapConsumer = source_map_1.default.SourceMapConsumer;
  var SourceMapGenerator = source_map_1.default.SourceMapGenerator;
  var hasOwn = Object.prototype.hasOwnProperty;
  function getLineTerminator() {
    return isBrowser() ? "\n" : require$$1.EOL || "\n";
  }
  util$1.getLineTerminator = getLineTerminator;
  function isBrowser() {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
  }
  util$1.isBrowser = isBrowser;
  function getOption(options2, key, defaultValue) {
    if (options2 && hasOwn.call(options2, key)) {
      return options2[key];
    }
    return defaultValue;
  }
  util$1.getOption = getOption;
  function getUnionOfKeys() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }
    var result = {};
    var argc = args.length;
    for (var i = 0; i < argc; ++i) {
      var keys = Object.keys(args[i]);
      var keyCount = keys.length;
      for (var j = 0; j < keyCount; ++j) {
        result[keys[j]] = true;
      }
    }
    return result;
  }
  util$1.getUnionOfKeys = getUnionOfKeys;
  function comparePos(pos1, pos2) {
    return pos1.line - pos2.line || pos1.column - pos2.column;
  }
  util$1.comparePos = comparePos;
  function copyPos(pos) {
    return {
      line: pos.line,
      column: pos.column
    };
  }
  util$1.copyPos = copyPos;
  function composeSourceMaps(formerMap, latterMap) {
    if (formerMap) {
      if (!latterMap) {
        return formerMap;
      }
    } else {
      return latterMap || null;
    }
    var smcFormer = new SourceMapConsumer(formerMap);
    var smcLatter = new SourceMapConsumer(latterMap);
    var smg = new SourceMapGenerator({
      file: latterMap.file,
      sourceRoot: latterMap.sourceRoot
    });
    var sourcesToContents = {};
    smcLatter.eachMapping(function(mapping2) {
      var origPos = smcFormer.originalPositionFor({
        line: mapping2.originalLine,
        column: mapping2.originalColumn
      });
      var sourceName = origPos.source;
      if (sourceName === null) {
        return;
      }
      smg.addMapping({
        source: sourceName,
        original: copyPos(origPos),
        generated: {
          line: mapping2.generatedLine,
          column: mapping2.generatedColumn
        },
        name: mapping2.name
      });
      var sourceContent = smcFormer.sourceContentFor(sourceName);
      if (sourceContent && !hasOwn.call(sourcesToContents, sourceName)) {
        sourcesToContents[sourceName] = sourceContent;
        smg.setSourceContent(sourceName, sourceContent);
      }
    });
    return smg.toJSON();
  }
  util$1.composeSourceMaps = composeSourceMaps;
  function getTrueLoc(node, lines2) {
    if (!node.loc) {
      return null;
    }
    var result = {
      start: node.loc.start,
      end: node.loc.end
    };
    function include(node2) {
      expandLoc(result, node2.loc);
    }
    if (node.declaration && node.declaration.decorators && isExportDeclaration(node)) {
      node.declaration.decorators.forEach(include);
    }
    if (comparePos(result.start, result.end) < 0) {
      result.start = copyPos(result.start);
      lines2.skipSpaces(result.start, false, true);
      if (comparePos(result.start, result.end) < 0) {
        result.end = copyPos(result.end);
        lines2.skipSpaces(result.end, true, true);
      }
    }
    if (node.comments) {
      node.comments.forEach(include);
    }
    return result;
  }
  util$1.getTrueLoc = getTrueLoc;
  function expandLoc(parentLoc, childLoc) {
    if (parentLoc && childLoc) {
      if (comparePos(childLoc.start, parentLoc.start) < 0) {
        parentLoc.start = childLoc.start;
      }
      if (comparePos(parentLoc.end, childLoc.end) < 0) {
        parentLoc.end = childLoc.end;
      }
    }
  }
  function fixFaultyLocations(node, lines2) {
    var loc = node.loc;
    if (loc) {
      if (loc.start.line < 1) {
        loc.start.line = 1;
      }
      if (loc.end.line < 1) {
        loc.end.line = 1;
      }
    }
    if (node.type === "File") {
      loc.start = lines2.firstPos();
      loc.end = lines2.lastPos();
    }
    fixForLoopHead(node, lines2);
    fixTemplateLiteral(node, lines2);
    if (loc && node.decorators) {
      node.decorators.forEach(function(decorator2) {
        expandLoc(loc, decorator2.loc);
      });
    } else if (node.declaration && isExportDeclaration(node)) {
      node.declaration.loc = null;
      var decorators = node.declaration.decorators;
      if (decorators) {
        decorators.forEach(function(decorator2) {
          expandLoc(loc, decorator2.loc);
        });
      }
    } else if (n.MethodDefinition && n.MethodDefinition.check(node) || n.Property.check(node) && (node.method || node.shorthand)) {
      node.value.loc = null;
      if (n.FunctionExpression.check(node.value)) {
        node.value.id = null;
      }
    } else if (node.type === "ObjectTypeProperty") {
      var loc_1 = node.loc;
      var end = loc_1 && loc_1.end;
      if (end) {
        end = copyPos(end);
        if (lines2.prevPos(end) && lines2.charAt(end) === ",") {
          if (end = lines2.skipSpaces(end, true, true)) {
            loc_1.end = end;
          }
        }
      }
    }
  }
  util$1.fixFaultyLocations = fixFaultyLocations;
  function fixForLoopHead(node, lines2) {
    if (node.type !== "ForStatement") {
      return;
    }
    function fix(child) {
      var loc = child && child.loc;
      var start = loc && loc.start;
      var end = loc && copyPos(loc.end);
      while (start && end && comparePos(start, end) < 0) {
        lines2.prevPos(end);
        if (lines2.charAt(end) === ";") {
          loc.end.line = end.line;
          loc.end.column = end.column;
        } else {
          break;
        }
      }
    }
    fix(node.init);
    fix(node.test);
    fix(node.update);
  }
  function fixTemplateLiteral(node, lines2) {
    if (node.type !== "TemplateLiteral") {
      return;
    }
    if (node.quasis.length === 0) {
      return;
    }
    if (node.loc) {
      var afterLeftBackTickPos = copyPos(node.loc.start);
      (0, tiny_invariant_1.default)(lines2.charAt(afterLeftBackTickPos) === "`");
      (0, tiny_invariant_1.default)(lines2.nextPos(afterLeftBackTickPos));
      var firstQuasi = node.quasis[0];
      if (comparePos(firstQuasi.loc.start, afterLeftBackTickPos) < 0) {
        firstQuasi.loc.start = afterLeftBackTickPos;
      }
      var rightBackTickPos = copyPos(node.loc.end);
      (0, tiny_invariant_1.default)(lines2.prevPos(rightBackTickPos));
      (0, tiny_invariant_1.default)(lines2.charAt(rightBackTickPos) === "`");
      var lastQuasi = node.quasis[node.quasis.length - 1];
      if (comparePos(rightBackTickPos, lastQuasi.loc.end) < 0) {
        lastQuasi.loc.end = rightBackTickPos;
      }
    }
    node.expressions.forEach(function(expr, i) {
      var dollarCurlyPos = lines2.skipSpaces(expr.loc.start, true, false);
      if (lines2.prevPos(dollarCurlyPos) && lines2.charAt(dollarCurlyPos) === "{" && lines2.prevPos(dollarCurlyPos) && lines2.charAt(dollarCurlyPos) === "$") {
        var quasiBefore = node.quasis[i];
        if (comparePos(dollarCurlyPos, quasiBefore.loc.end) < 0) {
          quasiBefore.loc.end = dollarCurlyPos;
        }
      }
      var rightCurlyPos = lines2.skipSpaces(expr.loc.end, false, false);
      if (lines2.charAt(rightCurlyPos) === "}") {
        (0, tiny_invariant_1.default)(lines2.nextPos(rightCurlyPos));
        var quasiAfter = node.quasis[i + 1];
        if (comparePos(quasiAfter.loc.start, rightCurlyPos) < 0) {
          quasiAfter.loc.start = rightCurlyPos;
        }
      }
    });
  }
  function isExportDeclaration(node) {
    if (node)
      switch (node.type) {
        case "ExportDeclaration":
        case "ExportDefaultDeclaration":
        case "ExportDefaultSpecifier":
        case "DeclareExportDeclaration":
        case "ExportNamedDeclaration":
        case "ExportAllDeclaration":
          return true;
      }
    return false;
  }
  util$1.isExportDeclaration = isExportDeclaration;
  function getParentExportDeclaration(path2) {
    var parentNode = path2.getParentNode();
    if (path2.getName() === "declaration" && isExportDeclaration(parentNode)) {
      return parentNode;
    }
    return null;
  }
  util$1.getParentExportDeclaration = getParentExportDeclaration;
  function isTrailingCommaEnabled(options2, context) {
    var trailingComma = options2.trailingComma;
    if (typeof trailingComma === "object") {
      return !!trailingComma[context];
    }
    return !!trailingComma;
  }
  util$1.isTrailingCommaEnabled = isTrailingCommaEnabled;
  return util$1;
}
var esprima$1 = {};
var esprima = { exports: {} };
var hasRequiredEsprima$1;
function requireEsprima$1() {
  if (hasRequiredEsprima$1) return esprima.exports;
  hasRequiredEsprima$1 = 1;
  (function(module2, exports2) {
    (function webpackUniversalModuleDefinition(root, factory) {
      module2.exports = factory();
    })(commonjsGlobal, function() {
      return (
        /******/
        function(modules) {
          var installedModules = {};
          function __webpack_require__(moduleId) {
            if (installedModules[moduleId])
              return installedModules[moduleId].exports;
            var module3 = installedModules[moduleId] = {
              /******/
              exports: {},
              /******/
              id: moduleId,
              /******/
              loaded: false
              /******/
            };
            modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
            module3.loaded = true;
            return module3.exports;
          }
          __webpack_require__.m = modules;
          __webpack_require__.c = installedModules;
          __webpack_require__.p = "";
          return __webpack_require__(0);
        }([
          /* 0 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var comment_handler_1 = __webpack_require__(1);
            var jsx_parser_1 = __webpack_require__(3);
            var parser_1 = __webpack_require__(8);
            var tokenizer_1 = __webpack_require__(15);
            function parse(code2, options2, delegate) {
              var commentHandler = null;
              var proxyDelegate = function(node, metadata) {
                if (delegate) {
                  delegate(node, metadata);
                }
                if (commentHandler) {
                  commentHandler.visit(node, metadata);
                }
              };
              var parserDelegate = typeof delegate === "function" ? proxyDelegate : null;
              var collectComment = false;
              if (options2) {
                collectComment = typeof options2.comment === "boolean" && options2.comment;
                var attachComment = typeof options2.attachComment === "boolean" && options2.attachComment;
                if (collectComment || attachComment) {
                  commentHandler = new comment_handler_1.CommentHandler();
                  commentHandler.attach = attachComment;
                  options2.comment = true;
                  parserDelegate = proxyDelegate;
                }
              }
              var isModule = false;
              if (options2 && typeof options2.sourceType === "string") {
                isModule = options2.sourceType === "module";
              }
              var parser2;
              if (options2 && typeof options2.jsx === "boolean" && options2.jsx) {
                parser2 = new jsx_parser_1.JSXParser(code2, options2, parserDelegate);
              } else {
                parser2 = new parser_1.Parser(code2, options2, parserDelegate);
              }
              var program = isModule ? parser2.parseModule() : parser2.parseScript();
              var ast2 = program;
              if (collectComment && commentHandler) {
                ast2.comments = commentHandler.comments;
              }
              if (parser2.config.tokens) {
                ast2.tokens = parser2.tokens;
              }
              if (parser2.config.tolerant) {
                ast2.errors = parser2.errorHandler.errors;
              }
              return ast2;
            }
            exports3.parse = parse;
            function parseModule(code2, options2, delegate) {
              var parsingOptions = options2 || {};
              parsingOptions.sourceType = "module";
              return parse(code2, parsingOptions, delegate);
            }
            exports3.parseModule = parseModule;
            function parseScript(code2, options2, delegate) {
              var parsingOptions = options2 || {};
              parsingOptions.sourceType = "script";
              return parse(code2, parsingOptions, delegate);
            }
            exports3.parseScript = parseScript;
            function tokenize(code2, options2, delegate) {
              var tokenizer = new tokenizer_1.Tokenizer(code2, options2);
              var tokens;
              tokens = [];
              try {
                while (true) {
                  var token = tokenizer.getNextToken();
                  if (!token) {
                    break;
                  }
                  if (delegate) {
                    token = delegate(token);
                  }
                  tokens.push(token);
                }
              } catch (e) {
                tokenizer.errorHandler.tolerate(e);
              }
              if (tokenizer.errorHandler.tolerant) {
                tokens.errors = tokenizer.errors();
              }
              return tokens;
            }
            exports3.tokenize = tokenize;
            var syntax_1 = __webpack_require__(2);
            exports3.Syntax = syntax_1.Syntax;
            exports3.version = "4.0.1";
          },
          /* 1 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var syntax_1 = __webpack_require__(2);
            var CommentHandler = function() {
              function CommentHandler2() {
                this.attach = false;
                this.comments = [];
                this.stack = [];
                this.leading = [];
                this.trailing = [];
              }
              CommentHandler2.prototype.insertInnerComments = function(node, metadata) {
                if (node.type === syntax_1.Syntax.BlockStatement && node.body.length === 0) {
                  var innerComments = [];
                  for (var i = this.leading.length - 1; i >= 0; --i) {
                    var entry = this.leading[i];
                    if (metadata.end.offset >= entry.start) {
                      innerComments.unshift(entry.comment);
                      this.leading.splice(i, 1);
                      this.trailing.splice(i, 1);
                    }
                  }
                  if (innerComments.length) {
                    node.innerComments = innerComments;
                  }
                }
              };
              CommentHandler2.prototype.findTrailingComments = function(metadata) {
                var trailingComments = [];
                if (this.trailing.length > 0) {
                  for (var i = this.trailing.length - 1; i >= 0; --i) {
                    var entry_1 = this.trailing[i];
                    if (entry_1.start >= metadata.end.offset) {
                      trailingComments.unshift(entry_1.comment);
                    }
                  }
                  this.trailing.length = 0;
                  return trailingComments;
                }
                var entry = this.stack[this.stack.length - 1];
                if (entry && entry.node.trailingComments) {
                  var firstComment = entry.node.trailingComments[0];
                  if (firstComment && firstComment.range[0] >= metadata.end.offset) {
                    trailingComments = entry.node.trailingComments;
                    delete entry.node.trailingComments;
                  }
                }
                return trailingComments;
              };
              CommentHandler2.prototype.findLeadingComments = function(metadata) {
                var leadingComments = [];
                var target;
                while (this.stack.length > 0) {
                  var entry = this.stack[this.stack.length - 1];
                  if (entry && entry.start >= metadata.start.offset) {
                    target = entry.node;
                    this.stack.pop();
                  } else {
                    break;
                  }
                }
                if (target) {
                  var count = target.leadingComments ? target.leadingComments.length : 0;
                  for (var i = count - 1; i >= 0; --i) {
                    var comment = target.leadingComments[i];
                    if (comment.range[1] <= metadata.start.offset) {
                      leadingComments.unshift(comment);
                      target.leadingComments.splice(i, 1);
                    }
                  }
                  if (target.leadingComments && target.leadingComments.length === 0) {
                    delete target.leadingComments;
                  }
                  return leadingComments;
                }
                for (var i = this.leading.length - 1; i >= 0; --i) {
                  var entry = this.leading[i];
                  if (entry.start <= metadata.start.offset) {
                    leadingComments.unshift(entry.comment);
                    this.leading.splice(i, 1);
                  }
                }
                return leadingComments;
              };
              CommentHandler2.prototype.visitNode = function(node, metadata) {
                if (node.type === syntax_1.Syntax.Program && node.body.length > 0) {
                  return;
                }
                this.insertInnerComments(node, metadata);
                var trailingComments = this.findTrailingComments(metadata);
                var leadingComments = this.findLeadingComments(metadata);
                if (leadingComments.length > 0) {
                  node.leadingComments = leadingComments;
                }
                if (trailingComments.length > 0) {
                  node.trailingComments = trailingComments;
                }
                this.stack.push({
                  node,
                  start: metadata.start.offset
                });
              };
              CommentHandler2.prototype.visitComment = function(node, metadata) {
                var type = node.type[0] === "L" ? "Line" : "Block";
                var comment = {
                  type,
                  value: node.value
                };
                if (node.range) {
                  comment.range = node.range;
                }
                if (node.loc) {
                  comment.loc = node.loc;
                }
                this.comments.push(comment);
                if (this.attach) {
                  var entry = {
                    comment: {
                      type,
                      value: node.value,
                      range: [metadata.start.offset, metadata.end.offset]
                    },
                    start: metadata.start.offset
                  };
                  if (node.loc) {
                    entry.comment.loc = node.loc;
                  }
                  node.type = type;
                  this.leading.push(entry);
                  this.trailing.push(entry);
                }
              };
              CommentHandler2.prototype.visit = function(node, metadata) {
                if (node.type === "LineComment") {
                  this.visitComment(node, metadata);
                } else if (node.type === "BlockComment") {
                  this.visitComment(node, metadata);
                } else if (this.attach) {
                  this.visitNode(node, metadata);
                }
              };
              return CommentHandler2;
            }();
            exports3.CommentHandler = CommentHandler;
          },
          /* 2 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.Syntax = {
              AssignmentExpression: "AssignmentExpression",
              AssignmentPattern: "AssignmentPattern",
              ArrayExpression: "ArrayExpression",
              ArrayPattern: "ArrayPattern",
              ArrowFunctionExpression: "ArrowFunctionExpression",
              AwaitExpression: "AwaitExpression",
              BlockStatement: "BlockStatement",
              BinaryExpression: "BinaryExpression",
              BreakStatement: "BreakStatement",
              CallExpression: "CallExpression",
              CatchClause: "CatchClause",
              ClassBody: "ClassBody",
              ClassDeclaration: "ClassDeclaration",
              ClassExpression: "ClassExpression",
              ConditionalExpression: "ConditionalExpression",
              ContinueStatement: "ContinueStatement",
              DoWhileStatement: "DoWhileStatement",
              DebuggerStatement: "DebuggerStatement",
              EmptyStatement: "EmptyStatement",
              ExportAllDeclaration: "ExportAllDeclaration",
              ExportDefaultDeclaration: "ExportDefaultDeclaration",
              ExportNamedDeclaration: "ExportNamedDeclaration",
              ExportSpecifier: "ExportSpecifier",
              ExpressionStatement: "ExpressionStatement",
              ForStatement: "ForStatement",
              ForOfStatement: "ForOfStatement",
              ForInStatement: "ForInStatement",
              FunctionDeclaration: "FunctionDeclaration",
              FunctionExpression: "FunctionExpression",
              Identifier: "Identifier",
              IfStatement: "IfStatement",
              ImportDeclaration: "ImportDeclaration",
              ImportDefaultSpecifier: "ImportDefaultSpecifier",
              ImportNamespaceSpecifier: "ImportNamespaceSpecifier",
              ImportSpecifier: "ImportSpecifier",
              Literal: "Literal",
              LabeledStatement: "LabeledStatement",
              LogicalExpression: "LogicalExpression",
              MemberExpression: "MemberExpression",
              MetaProperty: "MetaProperty",
              MethodDefinition: "MethodDefinition",
              NewExpression: "NewExpression",
              ObjectExpression: "ObjectExpression",
              ObjectPattern: "ObjectPattern",
              Program: "Program",
              Property: "Property",
              RestElement: "RestElement",
              ReturnStatement: "ReturnStatement",
              SequenceExpression: "SequenceExpression",
              SpreadElement: "SpreadElement",
              Super: "Super",
              SwitchCase: "SwitchCase",
              SwitchStatement: "SwitchStatement",
              TaggedTemplateExpression: "TaggedTemplateExpression",
              TemplateElement: "TemplateElement",
              TemplateLiteral: "TemplateLiteral",
              ThisExpression: "ThisExpression",
              ThrowStatement: "ThrowStatement",
              TryStatement: "TryStatement",
              UnaryExpression: "UnaryExpression",
              UpdateExpression: "UpdateExpression",
              VariableDeclaration: "VariableDeclaration",
              VariableDeclarator: "VariableDeclarator",
              WhileStatement: "WhileStatement",
              WithStatement: "WithStatement",
              YieldExpression: "YieldExpression"
            };
          },
          /* 3 */
          /***/
          function(module3, exports3, __webpack_require__) {
            var __extends2 = this && this.__extends || function() {
              var extendStatics2 = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b2) {
                d.__proto__ = b2;
              } || function(d, b2) {
                for (var p in b2) if (b2.hasOwnProperty(p)) d[p] = b2[p];
              };
              return function(d, b2) {
                extendStatics2(d, b2);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
              };
            }();
            Object.defineProperty(exports3, "__esModule", { value: true });
            var character_1 = __webpack_require__(4);
            var JSXNode = __webpack_require__(5);
            var jsx_syntax_1 = __webpack_require__(6);
            var Node = __webpack_require__(7);
            var parser_1 = __webpack_require__(8);
            var token_1 = __webpack_require__(13);
            var xhtml_entities_1 = __webpack_require__(14);
            token_1.TokenName[
              100
              /* Identifier */
            ] = "JSXIdentifier";
            token_1.TokenName[
              101
              /* Text */
            ] = "JSXText";
            function getQualifiedElementName(elementName) {
              var qualifiedName;
              switch (elementName.type) {
                case jsx_syntax_1.JSXSyntax.JSXIdentifier:
                  var id = elementName;
                  qualifiedName = id.name;
                  break;
                case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
                  var ns = elementName;
                  qualifiedName = getQualifiedElementName(ns.namespace) + ":" + getQualifiedElementName(ns.name);
                  break;
                case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
                  var expr = elementName;
                  qualifiedName = getQualifiedElementName(expr.object) + "." + getQualifiedElementName(expr.property);
                  break;
              }
              return qualifiedName;
            }
            var JSXParser = function(_super) {
              __extends2(JSXParser2, _super);
              function JSXParser2(code2, options2, delegate) {
                return _super.call(this, code2, options2, delegate) || this;
              }
              JSXParser2.prototype.parsePrimaryExpression = function() {
                return this.match("<") ? this.parseJSXRoot() : _super.prototype.parsePrimaryExpression.call(this);
              };
              JSXParser2.prototype.startJSX = function() {
                this.scanner.index = this.startMarker.index;
                this.scanner.lineNumber = this.startMarker.line;
                this.scanner.lineStart = this.startMarker.index - this.startMarker.column;
              };
              JSXParser2.prototype.finishJSX = function() {
                this.nextToken();
              };
              JSXParser2.prototype.reenterJSX = function() {
                this.startJSX();
                this.expectJSX("}");
                if (this.config.tokens) {
                  this.tokens.pop();
                }
              };
              JSXParser2.prototype.createJSXNode = function() {
                this.collectComments();
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser2.prototype.createJSXChildNode = function() {
                return {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              };
              JSXParser2.prototype.scanXHTMLEntity = function(quote) {
                var result = "&";
                var valid = true;
                var terminated = false;
                var numeric = false;
                var hex = false;
                while (!this.scanner.eof() && valid && !terminated) {
                  var ch = this.scanner.source[this.scanner.index];
                  if (ch === quote) {
                    break;
                  }
                  terminated = ch === ";";
                  result += ch;
                  ++this.scanner.index;
                  if (!terminated) {
                    switch (result.length) {
                      case 2:
                        numeric = ch === "#";
                        break;
                      case 3:
                        if (numeric) {
                          hex = ch === "x";
                          valid = hex || character_1.Character.isDecimalDigit(ch.charCodeAt(0));
                          numeric = numeric && !hex;
                        }
                        break;
                      default:
                        valid = valid && !(numeric && !character_1.Character.isDecimalDigit(ch.charCodeAt(0)));
                        valid = valid && !(hex && !character_1.Character.isHexDigit(ch.charCodeAt(0)));
                        break;
                    }
                  }
                }
                if (valid && terminated && result.length > 2) {
                  var str = result.substr(1, result.length - 2);
                  if (numeric && str.length > 1) {
                    result = String.fromCharCode(parseInt(str.substr(1), 10));
                  } else if (hex && str.length > 2) {
                    result = String.fromCharCode(parseInt("0" + str.substr(1), 16));
                  } else if (!numeric && !hex && xhtml_entities_1.XHTMLEntities[str]) {
                    result = xhtml_entities_1.XHTMLEntities[str];
                  }
                }
                return result;
              };
              JSXParser2.prototype.lexJSX = function() {
                var cp = this.scanner.source.charCodeAt(this.scanner.index);
                if (cp === 60 || cp === 62 || cp === 47 || cp === 58 || cp === 61 || cp === 123 || cp === 125) {
                  var value = this.scanner.source[this.scanner.index++];
                  return {
                    type: 7,
                    value,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index - 1,
                    end: this.scanner.index
                  };
                }
                if (cp === 34 || cp === 39) {
                  var start = this.scanner.index;
                  var quote = this.scanner.source[this.scanner.index++];
                  var str = "";
                  while (!this.scanner.eof()) {
                    var ch = this.scanner.source[this.scanner.index++];
                    if (ch === quote) {
                      break;
                    } else if (ch === "&") {
                      str += this.scanXHTMLEntity(quote);
                    } else {
                      str += ch;
                    }
                  }
                  return {
                    type: 8,
                    value: str,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                if (cp === 46) {
                  var n1 = this.scanner.source.charCodeAt(this.scanner.index + 1);
                  var n2 = this.scanner.source.charCodeAt(this.scanner.index + 2);
                  var value = n1 === 46 && n2 === 46 ? "..." : ".";
                  var start = this.scanner.index;
                  this.scanner.index += value.length;
                  return {
                    type: 7,
                    value,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                if (cp === 96) {
                  return {
                    type: 10,
                    value: "",
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start: this.scanner.index,
                    end: this.scanner.index
                  };
                }
                if (character_1.Character.isIdentifierStart(cp) && cp !== 92) {
                  var start = this.scanner.index;
                  ++this.scanner.index;
                  while (!this.scanner.eof()) {
                    var ch = this.scanner.source.charCodeAt(this.scanner.index);
                    if (character_1.Character.isIdentifierPart(ch) && ch !== 92) {
                      ++this.scanner.index;
                    } else if (ch === 45) {
                      ++this.scanner.index;
                    } else {
                      break;
                    }
                  }
                  var id = this.scanner.source.slice(start, this.scanner.index);
                  return {
                    type: 100,
                    value: id,
                    lineNumber: this.scanner.lineNumber,
                    lineStart: this.scanner.lineStart,
                    start,
                    end: this.scanner.index
                  };
                }
                return this.scanner.lex();
              };
              JSXParser2.prototype.nextJSXToken = function() {
                this.collectComments();
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                var token = this.lexJSX();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                if (this.config.tokens) {
                  this.tokens.push(this.convertToken(token));
                }
                return token;
              };
              JSXParser2.prototype.nextJSXText = function() {
                this.startMarker.index = this.scanner.index;
                this.startMarker.line = this.scanner.lineNumber;
                this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                var start = this.scanner.index;
                var text = "";
                while (!this.scanner.eof()) {
                  var ch = this.scanner.source[this.scanner.index];
                  if (ch === "{" || ch === "<") {
                    break;
                  }
                  ++this.scanner.index;
                  text += ch;
                  if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    ++this.scanner.lineNumber;
                    if (ch === "\r" && this.scanner.source[this.scanner.index] === "\n") {
                      ++this.scanner.index;
                    }
                    this.scanner.lineStart = this.scanner.index;
                  }
                }
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                var token = {
                  type: 101,
                  value: text,
                  lineNumber: this.scanner.lineNumber,
                  lineStart: this.scanner.lineStart,
                  start,
                  end: this.scanner.index
                };
                if (text.length > 0 && this.config.tokens) {
                  this.tokens.push(this.convertToken(token));
                }
                return token;
              };
              JSXParser2.prototype.peekJSXToken = function() {
                var state = this.scanner.saveState();
                this.scanner.scanComments();
                var next = this.lexJSX();
                this.scanner.restoreState(state);
                return next;
              };
              JSXParser2.prototype.expectJSX = function(value) {
                var token = this.nextJSXToken();
                if (token.type !== 7 || token.value !== value) {
                  this.throwUnexpectedToken(token);
                }
              };
              JSXParser2.prototype.matchJSX = function(value) {
                var next = this.peekJSXToken();
                return next.type === 7 && next.value === value;
              };
              JSXParser2.prototype.parseJSXIdentifier = function() {
                var node = this.createJSXNode();
                var token = this.nextJSXToken();
                if (token.type !== 100) {
                  this.throwUnexpectedToken(token);
                }
                return this.finalize(node, new JSXNode.JSXIdentifier(token.value));
              };
              JSXParser2.prototype.parseJSXElementName = function() {
                var node = this.createJSXNode();
                var elementName = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var namespace = elementName;
                  this.expectJSX(":");
                  var name_1 = this.parseJSXIdentifier();
                  elementName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_1));
                } else if (this.matchJSX(".")) {
                  while (this.matchJSX(".")) {
                    var object = elementName;
                    this.expectJSX(".");
                    var property = this.parseJSXIdentifier();
                    elementName = this.finalize(node, new JSXNode.JSXMemberExpression(object, property));
                  }
                }
                return elementName;
              };
              JSXParser2.prototype.parseJSXAttributeName = function() {
                var node = this.createJSXNode();
                var attributeName;
                var identifier = this.parseJSXIdentifier();
                if (this.matchJSX(":")) {
                  var namespace = identifier;
                  this.expectJSX(":");
                  var name_2 = this.parseJSXIdentifier();
                  attributeName = this.finalize(node, new JSXNode.JSXNamespacedName(namespace, name_2));
                } else {
                  attributeName = identifier;
                }
                return attributeName;
              };
              JSXParser2.prototype.parseJSXStringLiteralAttribute = function() {
                var node = this.createJSXNode();
                var token = this.nextJSXToken();
                if (token.type !== 8) {
                  this.throwUnexpectedToken(token);
                }
                var raw = this.getTokenRaw(token);
                return this.finalize(node, new Node.Literal(token.value, raw));
              };
              JSXParser2.prototype.parseJSXExpressionAttribute = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                this.finishJSX();
                if (this.match("}")) {
                  this.tolerateError("JSX attributes must only be assigned a non-empty expression");
                }
                var expression = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
              };
              JSXParser2.prototype.parseJSXAttributeValue = function() {
                return this.matchJSX("{") ? this.parseJSXExpressionAttribute() : this.matchJSX("<") ? this.parseJSXElement() : this.parseJSXStringLiteralAttribute();
              };
              JSXParser2.prototype.parseJSXNameValueAttribute = function() {
                var node = this.createJSXNode();
                var name = this.parseJSXAttributeName();
                var value = null;
                if (this.matchJSX("=")) {
                  this.expectJSX("=");
                  value = this.parseJSXAttributeValue();
                }
                return this.finalize(node, new JSXNode.JSXAttribute(name, value));
              };
              JSXParser2.prototype.parseJSXSpreadAttribute = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                this.expectJSX("...");
                this.finishJSX();
                var argument = this.parseAssignmentExpression();
                this.reenterJSX();
                return this.finalize(node, new JSXNode.JSXSpreadAttribute(argument));
              };
              JSXParser2.prototype.parseJSXAttributes = function() {
                var attributes = [];
                while (!this.matchJSX("/") && !this.matchJSX(">")) {
                  var attribute = this.matchJSX("{") ? this.parseJSXSpreadAttribute() : this.parseJSXNameValueAttribute();
                  attributes.push(attribute);
                }
                return attributes;
              };
              JSXParser2.prototype.parseJSXOpeningElement = function() {
                var node = this.createJSXNode();
                this.expectJSX("<");
                var name = this.parseJSXElementName();
                var attributes = this.parseJSXAttributes();
                var selfClosing = this.matchJSX("/");
                if (selfClosing) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
              };
              JSXParser2.prototype.parseJSXBoundaryElement = function() {
                var node = this.createJSXNode();
                this.expectJSX("<");
                if (this.matchJSX("/")) {
                  this.expectJSX("/");
                  var name_3 = this.parseJSXElementName();
                  this.expectJSX(">");
                  return this.finalize(node, new JSXNode.JSXClosingElement(name_3));
                }
                var name = this.parseJSXElementName();
                var attributes = this.parseJSXAttributes();
                var selfClosing = this.matchJSX("/");
                if (selfClosing) {
                  this.expectJSX("/");
                }
                this.expectJSX(">");
                return this.finalize(node, new JSXNode.JSXOpeningElement(name, selfClosing, attributes));
              };
              JSXParser2.prototype.parseJSXEmptyExpression = function() {
                var node = this.createJSXChildNode();
                this.collectComments();
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                return this.finalize(node, new JSXNode.JSXEmptyExpression());
              };
              JSXParser2.prototype.parseJSXExpressionContainer = function() {
                var node = this.createJSXNode();
                this.expectJSX("{");
                var expression;
                if (this.matchJSX("}")) {
                  expression = this.parseJSXEmptyExpression();
                  this.expectJSX("}");
                } else {
                  this.finishJSX();
                  expression = this.parseAssignmentExpression();
                  this.reenterJSX();
                }
                return this.finalize(node, new JSXNode.JSXExpressionContainer(expression));
              };
              JSXParser2.prototype.parseJSXChildren = function() {
                var children = [];
                while (!this.scanner.eof()) {
                  var node = this.createJSXChildNode();
                  var token = this.nextJSXText();
                  if (token.start < token.end) {
                    var raw = this.getTokenRaw(token);
                    var child = this.finalize(node, new JSXNode.JSXText(token.value, raw));
                    children.push(child);
                  }
                  if (this.scanner.source[this.scanner.index] === "{") {
                    var container = this.parseJSXExpressionContainer();
                    children.push(container);
                  } else {
                    break;
                  }
                }
                return children;
              };
              JSXParser2.prototype.parseComplexJSXElement = function(el) {
                var stack = [];
                while (!this.scanner.eof()) {
                  el.children = el.children.concat(this.parseJSXChildren());
                  var node = this.createJSXChildNode();
                  var element = this.parseJSXBoundaryElement();
                  if (element.type === jsx_syntax_1.JSXSyntax.JSXOpeningElement) {
                    var opening = element;
                    if (opening.selfClosing) {
                      var child = this.finalize(node, new JSXNode.JSXElement(opening, [], null));
                      el.children.push(child);
                    } else {
                      stack.push(el);
                      el = { node, opening, closing: null, children: [] };
                    }
                  }
                  if (element.type === jsx_syntax_1.JSXSyntax.JSXClosingElement) {
                    el.closing = element;
                    var open_1 = getQualifiedElementName(el.opening.name);
                    var close_1 = getQualifiedElementName(el.closing.name);
                    if (open_1 !== close_1) {
                      this.tolerateError("Expected corresponding JSX closing tag for %0", open_1);
                    }
                    if (stack.length > 0) {
                      var child = this.finalize(el.node, new JSXNode.JSXElement(el.opening, el.children, el.closing));
                      el = stack[stack.length - 1];
                      el.children.push(child);
                      stack.pop();
                    } else {
                      break;
                    }
                  }
                }
                return el;
              };
              JSXParser2.prototype.parseJSXElement = function() {
                var node = this.createJSXNode();
                var opening = this.parseJSXOpeningElement();
                var children = [];
                var closing = null;
                if (!opening.selfClosing) {
                  var el = this.parseComplexJSXElement({ node, opening, closing, children });
                  children = el.children;
                  closing = el.closing;
                }
                return this.finalize(node, new JSXNode.JSXElement(opening, children, closing));
              };
              JSXParser2.prototype.parseJSXRoot = function() {
                if (this.config.tokens) {
                  this.tokens.pop();
                }
                this.startJSX();
                var element = this.parseJSXElement();
                this.finishJSX();
                return element;
              };
              JSXParser2.prototype.isStartOfExpression = function() {
                return _super.prototype.isStartOfExpression.call(this) || this.match("<");
              };
              return JSXParser2;
            }(parser_1.Parser);
            exports3.JSXParser = JSXParser;
          },
          /* 4 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var Regex = {
              // Unicode v8.0.0 NonAsciiIdentifierStart:
              NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
              // Unicode v8.0.0 NonAsciiIdentifierPart:
              NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
            };
            exports3.Character = {
              /* tslint:disable:no-bitwise */
              fromCodePoint: function(cp) {
                return cp < 65536 ? String.fromCharCode(cp) : String.fromCharCode(55296 + (cp - 65536 >> 10)) + String.fromCharCode(56320 + (cp - 65536 & 1023));
              },
              // https://tc39.github.io/ecma262/#sec-white-space
              isWhiteSpace: function(cp) {
                return cp === 32 || cp === 9 || cp === 11 || cp === 12 || cp === 160 || cp >= 5760 && [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279].indexOf(cp) >= 0;
              },
              // https://tc39.github.io/ecma262/#sec-line-terminators
              isLineTerminator: function(cp) {
                return cp === 10 || cp === 13 || cp === 8232 || cp === 8233;
              },
              // https://tc39.github.io/ecma262/#sec-names-and-keywords
              isIdentifierStart: function(cp) {
                return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierStart.test(exports3.Character.fromCodePoint(cp));
              },
              isIdentifierPart: function(cp) {
                return cp === 36 || cp === 95 || cp >= 65 && cp <= 90 || cp >= 97 && cp <= 122 || cp >= 48 && cp <= 57 || cp === 92 || cp >= 128 && Regex.NonAsciiIdentifierPart.test(exports3.Character.fromCodePoint(cp));
              },
              // https://tc39.github.io/ecma262/#sec-literals-numeric-literals
              isDecimalDigit: function(cp) {
                return cp >= 48 && cp <= 57;
              },
              isHexDigit: function(cp) {
                return cp >= 48 && cp <= 57 || cp >= 65 && cp <= 70 || cp >= 97 && cp <= 102;
              },
              isOctalDigit: function(cp) {
                return cp >= 48 && cp <= 55;
              }
            };
          },
          /* 5 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var jsx_syntax_1 = __webpack_require__(6);
            var JSXClosingElement = /* @__PURE__ */ function() {
              function JSXClosingElement2(name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXClosingElement;
                this.name = name;
              }
              return JSXClosingElement2;
            }();
            exports3.JSXClosingElement = JSXClosingElement;
            var JSXElement = /* @__PURE__ */ function() {
              function JSXElement2(openingElement, children, closingElement) {
                this.type = jsx_syntax_1.JSXSyntax.JSXElement;
                this.openingElement = openingElement;
                this.children = children;
                this.closingElement = closingElement;
              }
              return JSXElement2;
            }();
            exports3.JSXElement = JSXElement;
            var JSXEmptyExpression = /* @__PURE__ */ function() {
              function JSXEmptyExpression2() {
                this.type = jsx_syntax_1.JSXSyntax.JSXEmptyExpression;
              }
              return JSXEmptyExpression2;
            }();
            exports3.JSXEmptyExpression = JSXEmptyExpression;
            var JSXExpressionContainer = /* @__PURE__ */ function() {
              function JSXExpressionContainer2(expression) {
                this.type = jsx_syntax_1.JSXSyntax.JSXExpressionContainer;
                this.expression = expression;
              }
              return JSXExpressionContainer2;
            }();
            exports3.JSXExpressionContainer = JSXExpressionContainer;
            var JSXIdentifier = /* @__PURE__ */ function() {
              function JSXIdentifier2(name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXIdentifier;
                this.name = name;
              }
              return JSXIdentifier2;
            }();
            exports3.JSXIdentifier = JSXIdentifier;
            var JSXMemberExpression = /* @__PURE__ */ function() {
              function JSXMemberExpression2(object, property) {
                this.type = jsx_syntax_1.JSXSyntax.JSXMemberExpression;
                this.object = object;
                this.property = property;
              }
              return JSXMemberExpression2;
            }();
            exports3.JSXMemberExpression = JSXMemberExpression;
            var JSXAttribute = /* @__PURE__ */ function() {
              function JSXAttribute2(name, value) {
                this.type = jsx_syntax_1.JSXSyntax.JSXAttribute;
                this.name = name;
                this.value = value;
              }
              return JSXAttribute2;
            }();
            exports3.JSXAttribute = JSXAttribute;
            var JSXNamespacedName = /* @__PURE__ */ function() {
              function JSXNamespacedName2(namespace, name) {
                this.type = jsx_syntax_1.JSXSyntax.JSXNamespacedName;
                this.namespace = namespace;
                this.name = name;
              }
              return JSXNamespacedName2;
            }();
            exports3.JSXNamespacedName = JSXNamespacedName;
            var JSXOpeningElement = /* @__PURE__ */ function() {
              function JSXOpeningElement2(name, selfClosing, attributes) {
                this.type = jsx_syntax_1.JSXSyntax.JSXOpeningElement;
                this.name = name;
                this.selfClosing = selfClosing;
                this.attributes = attributes;
              }
              return JSXOpeningElement2;
            }();
            exports3.JSXOpeningElement = JSXOpeningElement;
            var JSXSpreadAttribute = /* @__PURE__ */ function() {
              function JSXSpreadAttribute2(argument) {
                this.type = jsx_syntax_1.JSXSyntax.JSXSpreadAttribute;
                this.argument = argument;
              }
              return JSXSpreadAttribute2;
            }();
            exports3.JSXSpreadAttribute = JSXSpreadAttribute;
            var JSXText = /* @__PURE__ */ function() {
              function JSXText2(value, raw) {
                this.type = jsx_syntax_1.JSXSyntax.JSXText;
                this.value = value;
                this.raw = raw;
              }
              return JSXText2;
            }();
            exports3.JSXText = JSXText;
          },
          /* 6 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.JSXSyntax = {
              JSXAttribute: "JSXAttribute",
              JSXClosingElement: "JSXClosingElement",
              JSXElement: "JSXElement",
              JSXEmptyExpression: "JSXEmptyExpression",
              JSXExpressionContainer: "JSXExpressionContainer",
              JSXIdentifier: "JSXIdentifier",
              JSXMemberExpression: "JSXMemberExpression",
              JSXNamespacedName: "JSXNamespacedName",
              JSXOpeningElement: "JSXOpeningElement",
              JSXSpreadAttribute: "JSXSpreadAttribute",
              JSXText: "JSXText"
            };
          },
          /* 7 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var syntax_1 = __webpack_require__(2);
            var ArrayExpression = /* @__PURE__ */ function() {
              function ArrayExpression2(elements) {
                this.type = syntax_1.Syntax.ArrayExpression;
                this.elements = elements;
              }
              return ArrayExpression2;
            }();
            exports3.ArrayExpression = ArrayExpression;
            var ArrayPattern = /* @__PURE__ */ function() {
              function ArrayPattern2(elements) {
                this.type = syntax_1.Syntax.ArrayPattern;
                this.elements = elements;
              }
              return ArrayPattern2;
            }();
            exports3.ArrayPattern = ArrayPattern;
            var ArrowFunctionExpression = /* @__PURE__ */ function() {
              function ArrowFunctionExpression2(params, body2, expression) {
                this.type = syntax_1.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = params;
                this.body = body2;
                this.generator = false;
                this.expression = expression;
                this.async = false;
              }
              return ArrowFunctionExpression2;
            }();
            exports3.ArrowFunctionExpression = ArrowFunctionExpression;
            var AssignmentExpression = /* @__PURE__ */ function() {
              function AssignmentExpression2(operator, left, right) {
                this.type = syntax_1.Syntax.AssignmentExpression;
                this.operator = operator;
                this.left = left;
                this.right = right;
              }
              return AssignmentExpression2;
            }();
            exports3.AssignmentExpression = AssignmentExpression;
            var AssignmentPattern = /* @__PURE__ */ function() {
              function AssignmentPattern2(left, right) {
                this.type = syntax_1.Syntax.AssignmentPattern;
                this.left = left;
                this.right = right;
              }
              return AssignmentPattern2;
            }();
            exports3.AssignmentPattern = AssignmentPattern;
            var AsyncArrowFunctionExpression = /* @__PURE__ */ function() {
              function AsyncArrowFunctionExpression2(params, body2, expression) {
                this.type = syntax_1.Syntax.ArrowFunctionExpression;
                this.id = null;
                this.params = params;
                this.body = body2;
                this.generator = false;
                this.expression = expression;
                this.async = true;
              }
              return AsyncArrowFunctionExpression2;
            }();
            exports3.AsyncArrowFunctionExpression = AsyncArrowFunctionExpression;
            var AsyncFunctionDeclaration = /* @__PURE__ */ function() {
              function AsyncFunctionDeclaration2(id, params, body2) {
                this.type = syntax_1.Syntax.FunctionDeclaration;
                this.id = id;
                this.params = params;
                this.body = body2;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionDeclaration2;
            }();
            exports3.AsyncFunctionDeclaration = AsyncFunctionDeclaration;
            var AsyncFunctionExpression = /* @__PURE__ */ function() {
              function AsyncFunctionExpression2(id, params, body2) {
                this.type = syntax_1.Syntax.FunctionExpression;
                this.id = id;
                this.params = params;
                this.body = body2;
                this.generator = false;
                this.expression = false;
                this.async = true;
              }
              return AsyncFunctionExpression2;
            }();
            exports3.AsyncFunctionExpression = AsyncFunctionExpression;
            var AwaitExpression = /* @__PURE__ */ function() {
              function AwaitExpression2(argument) {
                this.type = syntax_1.Syntax.AwaitExpression;
                this.argument = argument;
              }
              return AwaitExpression2;
            }();
            exports3.AwaitExpression = AwaitExpression;
            var BinaryExpression = /* @__PURE__ */ function() {
              function BinaryExpression2(operator, left, right) {
                var logical = operator === "||" || operator === "&&";
                this.type = logical ? syntax_1.Syntax.LogicalExpression : syntax_1.Syntax.BinaryExpression;
                this.operator = operator;
                this.left = left;
                this.right = right;
              }
              return BinaryExpression2;
            }();
            exports3.BinaryExpression = BinaryExpression;
            var BlockStatement = /* @__PURE__ */ function() {
              function BlockStatement2(body2) {
                this.type = syntax_1.Syntax.BlockStatement;
                this.body = body2;
              }
              return BlockStatement2;
            }();
            exports3.BlockStatement = BlockStatement;
            var BreakStatement = /* @__PURE__ */ function() {
              function BreakStatement2(label) {
                this.type = syntax_1.Syntax.BreakStatement;
                this.label = label;
              }
              return BreakStatement2;
            }();
            exports3.BreakStatement = BreakStatement;
            var CallExpression = /* @__PURE__ */ function() {
              function CallExpression2(callee, args) {
                this.type = syntax_1.Syntax.CallExpression;
                this.callee = callee;
                this.arguments = args;
              }
              return CallExpression2;
            }();
            exports3.CallExpression = CallExpression;
            var CatchClause = /* @__PURE__ */ function() {
              function CatchClause2(param, body2) {
                this.type = syntax_1.Syntax.CatchClause;
                this.param = param;
                this.body = body2;
              }
              return CatchClause2;
            }();
            exports3.CatchClause = CatchClause;
            var ClassBody = /* @__PURE__ */ function() {
              function ClassBody2(body2) {
                this.type = syntax_1.Syntax.ClassBody;
                this.body = body2;
              }
              return ClassBody2;
            }();
            exports3.ClassBody = ClassBody;
            var ClassDeclaration = /* @__PURE__ */ function() {
              function ClassDeclaration2(id, superClass, body2) {
                this.type = syntax_1.Syntax.ClassDeclaration;
                this.id = id;
                this.superClass = superClass;
                this.body = body2;
              }
              return ClassDeclaration2;
            }();
            exports3.ClassDeclaration = ClassDeclaration;
            var ClassExpression = /* @__PURE__ */ function() {
              function ClassExpression2(id, superClass, body2) {
                this.type = syntax_1.Syntax.ClassExpression;
                this.id = id;
                this.superClass = superClass;
                this.body = body2;
              }
              return ClassExpression2;
            }();
            exports3.ClassExpression = ClassExpression;
            var ComputedMemberExpression = /* @__PURE__ */ function() {
              function ComputedMemberExpression2(object, property) {
                this.type = syntax_1.Syntax.MemberExpression;
                this.computed = true;
                this.object = object;
                this.property = property;
              }
              return ComputedMemberExpression2;
            }();
            exports3.ComputedMemberExpression = ComputedMemberExpression;
            var ConditionalExpression = /* @__PURE__ */ function() {
              function ConditionalExpression2(test, consequent, alternate) {
                this.type = syntax_1.Syntax.ConditionalExpression;
                this.test = test;
                this.consequent = consequent;
                this.alternate = alternate;
              }
              return ConditionalExpression2;
            }();
            exports3.ConditionalExpression = ConditionalExpression;
            var ContinueStatement = /* @__PURE__ */ function() {
              function ContinueStatement2(label) {
                this.type = syntax_1.Syntax.ContinueStatement;
                this.label = label;
              }
              return ContinueStatement2;
            }();
            exports3.ContinueStatement = ContinueStatement;
            var DebuggerStatement = /* @__PURE__ */ function() {
              function DebuggerStatement2() {
                this.type = syntax_1.Syntax.DebuggerStatement;
              }
              return DebuggerStatement2;
            }();
            exports3.DebuggerStatement = DebuggerStatement;
            var Directive = /* @__PURE__ */ function() {
              function Directive2(expression, directive) {
                this.type = syntax_1.Syntax.ExpressionStatement;
                this.expression = expression;
                this.directive = directive;
              }
              return Directive2;
            }();
            exports3.Directive = Directive;
            var DoWhileStatement = /* @__PURE__ */ function() {
              function DoWhileStatement2(body2, test) {
                this.type = syntax_1.Syntax.DoWhileStatement;
                this.body = body2;
                this.test = test;
              }
              return DoWhileStatement2;
            }();
            exports3.DoWhileStatement = DoWhileStatement;
            var EmptyStatement = /* @__PURE__ */ function() {
              function EmptyStatement2() {
                this.type = syntax_1.Syntax.EmptyStatement;
              }
              return EmptyStatement2;
            }();
            exports3.EmptyStatement = EmptyStatement;
            var ExportAllDeclaration = /* @__PURE__ */ function() {
              function ExportAllDeclaration2(source) {
                this.type = syntax_1.Syntax.ExportAllDeclaration;
                this.source = source;
              }
              return ExportAllDeclaration2;
            }();
            exports3.ExportAllDeclaration = ExportAllDeclaration;
            var ExportDefaultDeclaration = /* @__PURE__ */ function() {
              function ExportDefaultDeclaration2(declaration) {
                this.type = syntax_1.Syntax.ExportDefaultDeclaration;
                this.declaration = declaration;
              }
              return ExportDefaultDeclaration2;
            }();
            exports3.ExportDefaultDeclaration = ExportDefaultDeclaration;
            var ExportNamedDeclaration = /* @__PURE__ */ function() {
              function ExportNamedDeclaration2(declaration, specifiers, source) {
                this.type = syntax_1.Syntax.ExportNamedDeclaration;
                this.declaration = declaration;
                this.specifiers = specifiers;
                this.source = source;
              }
              return ExportNamedDeclaration2;
            }();
            exports3.ExportNamedDeclaration = ExportNamedDeclaration;
            var ExportSpecifier = /* @__PURE__ */ function() {
              function ExportSpecifier2(local, exported) {
                this.type = syntax_1.Syntax.ExportSpecifier;
                this.exported = exported;
                this.local = local;
              }
              return ExportSpecifier2;
            }();
            exports3.ExportSpecifier = ExportSpecifier;
            var ExpressionStatement = /* @__PURE__ */ function() {
              function ExpressionStatement2(expression) {
                this.type = syntax_1.Syntax.ExpressionStatement;
                this.expression = expression;
              }
              return ExpressionStatement2;
            }();
            exports3.ExpressionStatement = ExpressionStatement;
            var ForInStatement = /* @__PURE__ */ function() {
              function ForInStatement2(left, right, body2) {
                this.type = syntax_1.Syntax.ForInStatement;
                this.left = left;
                this.right = right;
                this.body = body2;
                this.each = false;
              }
              return ForInStatement2;
            }();
            exports3.ForInStatement = ForInStatement;
            var ForOfStatement = /* @__PURE__ */ function() {
              function ForOfStatement2(left, right, body2) {
                this.type = syntax_1.Syntax.ForOfStatement;
                this.left = left;
                this.right = right;
                this.body = body2;
              }
              return ForOfStatement2;
            }();
            exports3.ForOfStatement = ForOfStatement;
            var ForStatement = /* @__PURE__ */ function() {
              function ForStatement2(init, test, update, body2) {
                this.type = syntax_1.Syntax.ForStatement;
                this.init = init;
                this.test = test;
                this.update = update;
                this.body = body2;
              }
              return ForStatement2;
            }();
            exports3.ForStatement = ForStatement;
            var FunctionDeclaration = /* @__PURE__ */ function() {
              function FunctionDeclaration2(id, params, body2, generator) {
                this.type = syntax_1.Syntax.FunctionDeclaration;
                this.id = id;
                this.params = params;
                this.body = body2;
                this.generator = generator;
                this.expression = false;
                this.async = false;
              }
              return FunctionDeclaration2;
            }();
            exports3.FunctionDeclaration = FunctionDeclaration;
            var FunctionExpression = /* @__PURE__ */ function() {
              function FunctionExpression2(id, params, body2, generator) {
                this.type = syntax_1.Syntax.FunctionExpression;
                this.id = id;
                this.params = params;
                this.body = body2;
                this.generator = generator;
                this.expression = false;
                this.async = false;
              }
              return FunctionExpression2;
            }();
            exports3.FunctionExpression = FunctionExpression;
            var Identifier = /* @__PURE__ */ function() {
              function Identifier2(name) {
                this.type = syntax_1.Syntax.Identifier;
                this.name = name;
              }
              return Identifier2;
            }();
            exports3.Identifier = Identifier;
            var IfStatement = /* @__PURE__ */ function() {
              function IfStatement2(test, consequent, alternate) {
                this.type = syntax_1.Syntax.IfStatement;
                this.test = test;
                this.consequent = consequent;
                this.alternate = alternate;
              }
              return IfStatement2;
            }();
            exports3.IfStatement = IfStatement;
            var ImportDeclaration = /* @__PURE__ */ function() {
              function ImportDeclaration2(specifiers, source) {
                this.type = syntax_1.Syntax.ImportDeclaration;
                this.specifiers = specifiers;
                this.source = source;
              }
              return ImportDeclaration2;
            }();
            exports3.ImportDeclaration = ImportDeclaration;
            var ImportDefaultSpecifier = /* @__PURE__ */ function() {
              function ImportDefaultSpecifier2(local) {
                this.type = syntax_1.Syntax.ImportDefaultSpecifier;
                this.local = local;
              }
              return ImportDefaultSpecifier2;
            }();
            exports3.ImportDefaultSpecifier = ImportDefaultSpecifier;
            var ImportNamespaceSpecifier = /* @__PURE__ */ function() {
              function ImportNamespaceSpecifier2(local) {
                this.type = syntax_1.Syntax.ImportNamespaceSpecifier;
                this.local = local;
              }
              return ImportNamespaceSpecifier2;
            }();
            exports3.ImportNamespaceSpecifier = ImportNamespaceSpecifier;
            var ImportSpecifier = /* @__PURE__ */ function() {
              function ImportSpecifier2(local, imported) {
                this.type = syntax_1.Syntax.ImportSpecifier;
                this.local = local;
                this.imported = imported;
              }
              return ImportSpecifier2;
            }();
            exports3.ImportSpecifier = ImportSpecifier;
            var LabeledStatement = /* @__PURE__ */ function() {
              function LabeledStatement2(label, body2) {
                this.type = syntax_1.Syntax.LabeledStatement;
                this.label = label;
                this.body = body2;
              }
              return LabeledStatement2;
            }();
            exports3.LabeledStatement = LabeledStatement;
            var Literal = /* @__PURE__ */ function() {
              function Literal2(value, raw) {
                this.type = syntax_1.Syntax.Literal;
                this.value = value;
                this.raw = raw;
              }
              return Literal2;
            }();
            exports3.Literal = Literal;
            var MetaProperty = /* @__PURE__ */ function() {
              function MetaProperty2(meta, property) {
                this.type = syntax_1.Syntax.MetaProperty;
                this.meta = meta;
                this.property = property;
              }
              return MetaProperty2;
            }();
            exports3.MetaProperty = MetaProperty;
            var MethodDefinition = /* @__PURE__ */ function() {
              function MethodDefinition2(key, computed, value, kind, isStatic) {
                this.type = syntax_1.Syntax.MethodDefinition;
                this.key = key;
                this.computed = computed;
                this.value = value;
                this.kind = kind;
                this.static = isStatic;
              }
              return MethodDefinition2;
            }();
            exports3.MethodDefinition = MethodDefinition;
            var Module = /* @__PURE__ */ function() {
              function Module2(body2) {
                this.type = syntax_1.Syntax.Program;
                this.body = body2;
                this.sourceType = "module";
              }
              return Module2;
            }();
            exports3.Module = Module;
            var NewExpression = /* @__PURE__ */ function() {
              function NewExpression2(callee, args) {
                this.type = syntax_1.Syntax.NewExpression;
                this.callee = callee;
                this.arguments = args;
              }
              return NewExpression2;
            }();
            exports3.NewExpression = NewExpression;
            var ObjectExpression = /* @__PURE__ */ function() {
              function ObjectExpression2(properties) {
                this.type = syntax_1.Syntax.ObjectExpression;
                this.properties = properties;
              }
              return ObjectExpression2;
            }();
            exports3.ObjectExpression = ObjectExpression;
            var ObjectPattern = /* @__PURE__ */ function() {
              function ObjectPattern2(properties) {
                this.type = syntax_1.Syntax.ObjectPattern;
                this.properties = properties;
              }
              return ObjectPattern2;
            }();
            exports3.ObjectPattern = ObjectPattern;
            var Property = /* @__PURE__ */ function() {
              function Property2(kind, key, computed, value, method, shorthand) {
                this.type = syntax_1.Syntax.Property;
                this.key = key;
                this.computed = computed;
                this.value = value;
                this.kind = kind;
                this.method = method;
                this.shorthand = shorthand;
              }
              return Property2;
            }();
            exports3.Property = Property;
            var RegexLiteral = /* @__PURE__ */ function() {
              function RegexLiteral2(value, raw, pattern, flags) {
                this.type = syntax_1.Syntax.Literal;
                this.value = value;
                this.raw = raw;
                this.regex = { pattern, flags };
              }
              return RegexLiteral2;
            }();
            exports3.RegexLiteral = RegexLiteral;
            var RestElement = /* @__PURE__ */ function() {
              function RestElement2(argument) {
                this.type = syntax_1.Syntax.RestElement;
                this.argument = argument;
              }
              return RestElement2;
            }();
            exports3.RestElement = RestElement;
            var ReturnStatement = /* @__PURE__ */ function() {
              function ReturnStatement2(argument) {
                this.type = syntax_1.Syntax.ReturnStatement;
                this.argument = argument;
              }
              return ReturnStatement2;
            }();
            exports3.ReturnStatement = ReturnStatement;
            var Script = /* @__PURE__ */ function() {
              function Script2(body2) {
                this.type = syntax_1.Syntax.Program;
                this.body = body2;
                this.sourceType = "script";
              }
              return Script2;
            }();
            exports3.Script = Script;
            var SequenceExpression = /* @__PURE__ */ function() {
              function SequenceExpression2(expressions) {
                this.type = syntax_1.Syntax.SequenceExpression;
                this.expressions = expressions;
              }
              return SequenceExpression2;
            }();
            exports3.SequenceExpression = SequenceExpression;
            var SpreadElement = /* @__PURE__ */ function() {
              function SpreadElement2(argument) {
                this.type = syntax_1.Syntax.SpreadElement;
                this.argument = argument;
              }
              return SpreadElement2;
            }();
            exports3.SpreadElement = SpreadElement;
            var StaticMemberExpression = /* @__PURE__ */ function() {
              function StaticMemberExpression2(object, property) {
                this.type = syntax_1.Syntax.MemberExpression;
                this.computed = false;
                this.object = object;
                this.property = property;
              }
              return StaticMemberExpression2;
            }();
            exports3.StaticMemberExpression = StaticMemberExpression;
            var Super = /* @__PURE__ */ function() {
              function Super2() {
                this.type = syntax_1.Syntax.Super;
              }
              return Super2;
            }();
            exports3.Super = Super;
            var SwitchCase = /* @__PURE__ */ function() {
              function SwitchCase2(test, consequent) {
                this.type = syntax_1.Syntax.SwitchCase;
                this.test = test;
                this.consequent = consequent;
              }
              return SwitchCase2;
            }();
            exports3.SwitchCase = SwitchCase;
            var SwitchStatement = /* @__PURE__ */ function() {
              function SwitchStatement2(discriminant, cases) {
                this.type = syntax_1.Syntax.SwitchStatement;
                this.discriminant = discriminant;
                this.cases = cases;
              }
              return SwitchStatement2;
            }();
            exports3.SwitchStatement = SwitchStatement;
            var TaggedTemplateExpression = /* @__PURE__ */ function() {
              function TaggedTemplateExpression2(tag, quasi) {
                this.type = syntax_1.Syntax.TaggedTemplateExpression;
                this.tag = tag;
                this.quasi = quasi;
              }
              return TaggedTemplateExpression2;
            }();
            exports3.TaggedTemplateExpression = TaggedTemplateExpression;
            var TemplateElement = /* @__PURE__ */ function() {
              function TemplateElement2(value, tail) {
                this.type = syntax_1.Syntax.TemplateElement;
                this.value = value;
                this.tail = tail;
              }
              return TemplateElement2;
            }();
            exports3.TemplateElement = TemplateElement;
            var TemplateLiteral = /* @__PURE__ */ function() {
              function TemplateLiteral2(quasis, expressions) {
                this.type = syntax_1.Syntax.TemplateLiteral;
                this.quasis = quasis;
                this.expressions = expressions;
              }
              return TemplateLiteral2;
            }();
            exports3.TemplateLiteral = TemplateLiteral;
            var ThisExpression = /* @__PURE__ */ function() {
              function ThisExpression2() {
                this.type = syntax_1.Syntax.ThisExpression;
              }
              return ThisExpression2;
            }();
            exports3.ThisExpression = ThisExpression;
            var ThrowStatement = /* @__PURE__ */ function() {
              function ThrowStatement2(argument) {
                this.type = syntax_1.Syntax.ThrowStatement;
                this.argument = argument;
              }
              return ThrowStatement2;
            }();
            exports3.ThrowStatement = ThrowStatement;
            var TryStatement = /* @__PURE__ */ function() {
              function TryStatement2(block2, handler, finalizer) {
                this.type = syntax_1.Syntax.TryStatement;
                this.block = block2;
                this.handler = handler;
                this.finalizer = finalizer;
              }
              return TryStatement2;
            }();
            exports3.TryStatement = TryStatement;
            var UnaryExpression = /* @__PURE__ */ function() {
              function UnaryExpression2(operator, argument) {
                this.type = syntax_1.Syntax.UnaryExpression;
                this.operator = operator;
                this.argument = argument;
                this.prefix = true;
              }
              return UnaryExpression2;
            }();
            exports3.UnaryExpression = UnaryExpression;
            var UpdateExpression = /* @__PURE__ */ function() {
              function UpdateExpression2(operator, argument, prefix) {
                this.type = syntax_1.Syntax.UpdateExpression;
                this.operator = operator;
                this.argument = argument;
                this.prefix = prefix;
              }
              return UpdateExpression2;
            }();
            exports3.UpdateExpression = UpdateExpression;
            var VariableDeclaration = /* @__PURE__ */ function() {
              function VariableDeclaration2(declarations, kind) {
                this.type = syntax_1.Syntax.VariableDeclaration;
                this.declarations = declarations;
                this.kind = kind;
              }
              return VariableDeclaration2;
            }();
            exports3.VariableDeclaration = VariableDeclaration;
            var VariableDeclarator = /* @__PURE__ */ function() {
              function VariableDeclarator2(id, init) {
                this.type = syntax_1.Syntax.VariableDeclarator;
                this.id = id;
                this.init = init;
              }
              return VariableDeclarator2;
            }();
            exports3.VariableDeclarator = VariableDeclarator;
            var WhileStatement = /* @__PURE__ */ function() {
              function WhileStatement2(test, body2) {
                this.type = syntax_1.Syntax.WhileStatement;
                this.test = test;
                this.body = body2;
              }
              return WhileStatement2;
            }();
            exports3.WhileStatement = WhileStatement;
            var WithStatement = /* @__PURE__ */ function() {
              function WithStatement2(object, body2) {
                this.type = syntax_1.Syntax.WithStatement;
                this.object = object;
                this.body = body2;
              }
              return WithStatement2;
            }();
            exports3.WithStatement = WithStatement;
            var YieldExpression = /* @__PURE__ */ function() {
              function YieldExpression2(argument, delegate) {
                this.type = syntax_1.Syntax.YieldExpression;
                this.argument = argument;
                this.delegate = delegate;
              }
              return YieldExpression2;
            }();
            exports3.YieldExpression = YieldExpression;
          },
          /* 8 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var assert_1 = __webpack_require__(9);
            var error_handler_1 = __webpack_require__(10);
            var messages_1 = __webpack_require__(11);
            var Node = __webpack_require__(7);
            var scanner_1 = __webpack_require__(12);
            var syntax_1 = __webpack_require__(2);
            var token_1 = __webpack_require__(13);
            var ArrowParameterPlaceHolder = "ArrowParameterPlaceHolder";
            var Parser = function() {
              function Parser2(code2, options2, delegate) {
                if (options2 === void 0) {
                  options2 = {};
                }
                this.config = {
                  range: typeof options2.range === "boolean" && options2.range,
                  loc: typeof options2.loc === "boolean" && options2.loc,
                  source: null,
                  tokens: typeof options2.tokens === "boolean" && options2.tokens,
                  comment: typeof options2.comment === "boolean" && options2.comment,
                  tolerant: typeof options2.tolerant === "boolean" && options2.tolerant
                };
                if (this.config.loc && options2.source && options2.source !== null) {
                  this.config.source = String(options2.source);
                }
                this.delegate = delegate;
                this.errorHandler = new error_handler_1.ErrorHandler();
                this.errorHandler.tolerant = this.config.tolerant;
                this.scanner = new scanner_1.Scanner(code2, this.errorHandler);
                this.scanner.trackComment = this.config.comment;
                this.operatorPrecedence = {
                  ")": 0,
                  ";": 0,
                  ",": 0,
                  "=": 0,
                  "]": 0,
                  "||": 1,
                  "&&": 2,
                  "|": 3,
                  "^": 4,
                  "&": 5,
                  "==": 6,
                  "!=": 6,
                  "===": 6,
                  "!==": 6,
                  "<": 7,
                  ">": 7,
                  "<=": 7,
                  ">=": 7,
                  "<<": 8,
                  ">>": 8,
                  ">>>": 8,
                  "+": 9,
                  "-": 9,
                  "*": 11,
                  "/": 11,
                  "%": 11
                };
                this.lookahead = {
                  type: 2,
                  value: "",
                  lineNumber: this.scanner.lineNumber,
                  lineStart: 0,
                  start: 0,
                  end: 0
                };
                this.hasLineTerminator = false;
                this.context = {
                  isModule: false,
                  await: false,
                  allowIn: true,
                  allowStrictDirective: true,
                  allowYield: true,
                  firstCoverInitializedNameError: null,
                  isAssignmentTarget: false,
                  isBindingElement: false,
                  inFunctionBody: false,
                  inIteration: false,
                  inSwitch: false,
                  labelSet: {},
                  strict: false
                };
                this.tokens = [];
                this.startMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.lastMarker = {
                  index: 0,
                  line: this.scanner.lineNumber,
                  column: 0
                };
                this.nextToken();
                this.lastMarker = {
                  index: this.scanner.index,
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart
                };
              }
              Parser2.prototype.throwError = function(messageFormat) {
                var args = Array.prototype.slice.call(arguments, 1);
                var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                  assert_1.assert(idx < args.length, "Message reference must be in range");
                  return args[idx];
                });
                var index = this.lastMarker.index;
                var line = this.lastMarker.line;
                var column = this.lastMarker.column + 1;
                throw this.errorHandler.createError(index, line, column, msg);
              };
              Parser2.prototype.tolerateError = function(messageFormat) {
                var args = Array.prototype.slice.call(arguments, 1);
                var msg = messageFormat.replace(/%(\d)/g, function(whole, idx) {
                  assert_1.assert(idx < args.length, "Message reference must be in range");
                  return args[idx];
                });
                var index = this.lastMarker.index;
                var line = this.scanner.lineNumber;
                var column = this.lastMarker.column + 1;
                this.errorHandler.tolerateError(index, line, column, msg);
              };
              Parser2.prototype.unexpectedTokenError = function(token, message) {
                var msg = message || messages_1.Messages.UnexpectedToken;
                var value;
                if (token) {
                  if (!message) {
                    msg = token.type === 2 ? messages_1.Messages.UnexpectedEOS : token.type === 3 ? messages_1.Messages.UnexpectedIdentifier : token.type === 6 ? messages_1.Messages.UnexpectedNumber : token.type === 8 ? messages_1.Messages.UnexpectedString : token.type === 10 ? messages_1.Messages.UnexpectedTemplate : messages_1.Messages.UnexpectedToken;
                    if (token.type === 4) {
                      if (this.scanner.isFutureReservedWord(token.value)) {
                        msg = messages_1.Messages.UnexpectedReserved;
                      } else if (this.context.strict && this.scanner.isStrictModeReservedWord(token.value)) {
                        msg = messages_1.Messages.StrictReservedWord;
                      }
                    }
                  }
                  value = token.value;
                } else {
                  value = "ILLEGAL";
                }
                msg = msg.replace("%0", value);
                if (token && typeof token.lineNumber === "number") {
                  var index = token.start;
                  var line = token.lineNumber;
                  var lastMarkerLineStart = this.lastMarker.index - this.lastMarker.column;
                  var column = token.start - lastMarkerLineStart + 1;
                  return this.errorHandler.createError(index, line, column, msg);
                } else {
                  var index = this.lastMarker.index;
                  var line = this.lastMarker.line;
                  var column = this.lastMarker.column + 1;
                  return this.errorHandler.createError(index, line, column, msg);
                }
              };
              Parser2.prototype.throwUnexpectedToken = function(token, message) {
                throw this.unexpectedTokenError(token, message);
              };
              Parser2.prototype.tolerateUnexpectedToken = function(token, message) {
                this.errorHandler.tolerate(this.unexpectedTokenError(token, message));
              };
              Parser2.prototype.collectComments = function() {
                if (!this.config.comment) {
                  this.scanner.scanComments();
                } else {
                  var comments2 = this.scanner.scanComments();
                  if (comments2.length > 0 && this.delegate) {
                    for (var i = 0; i < comments2.length; ++i) {
                      var e = comments2[i];
                      var node = void 0;
                      node = {
                        type: e.multiLine ? "BlockComment" : "LineComment",
                        value: this.scanner.source.slice(e.slice[0], e.slice[1])
                      };
                      if (this.config.range) {
                        node.range = e.range;
                      }
                      if (this.config.loc) {
                        node.loc = e.loc;
                      }
                      var metadata = {
                        start: {
                          line: e.loc.start.line,
                          column: e.loc.start.column,
                          offset: e.range[0]
                        },
                        end: {
                          line: e.loc.end.line,
                          column: e.loc.end.column,
                          offset: e.range[1]
                        }
                      };
                      this.delegate(node, metadata);
                    }
                  }
                }
              };
              Parser2.prototype.getTokenRaw = function(token) {
                return this.scanner.source.slice(token.start, token.end);
              };
              Parser2.prototype.convertToken = function(token) {
                var t = {
                  type: token_1.TokenName[token.type],
                  value: this.getTokenRaw(token)
                };
                if (this.config.range) {
                  t.range = [token.start, token.end];
                }
                if (this.config.loc) {
                  t.loc = {
                    start: {
                      line: this.startMarker.line,
                      column: this.startMarker.column
                    },
                    end: {
                      line: this.scanner.lineNumber,
                      column: this.scanner.index - this.scanner.lineStart
                    }
                  };
                }
                if (token.type === 9) {
                  var pattern = token.pattern;
                  var flags = token.flags;
                  t.regex = { pattern, flags };
                }
                return t;
              };
              Parser2.prototype.nextToken = function() {
                var token = this.lookahead;
                this.lastMarker.index = this.scanner.index;
                this.lastMarker.line = this.scanner.lineNumber;
                this.lastMarker.column = this.scanner.index - this.scanner.lineStart;
                this.collectComments();
                if (this.scanner.index !== this.startMarker.index) {
                  this.startMarker.index = this.scanner.index;
                  this.startMarker.line = this.scanner.lineNumber;
                  this.startMarker.column = this.scanner.index - this.scanner.lineStart;
                }
                var next = this.scanner.lex();
                this.hasLineTerminator = token.lineNumber !== next.lineNumber;
                if (next && this.context.strict && next.type === 3) {
                  if (this.scanner.isStrictModeReservedWord(next.value)) {
                    next.type = 4;
                  }
                }
                this.lookahead = next;
                if (this.config.tokens && next.type !== 2) {
                  this.tokens.push(this.convertToken(next));
                }
                return token;
              };
              Parser2.prototype.nextRegexToken = function() {
                this.collectComments();
                var token = this.scanner.scanRegExp();
                if (this.config.tokens) {
                  this.tokens.pop();
                  this.tokens.push(this.convertToken(token));
                }
                this.lookahead = token;
                this.nextToken();
                return token;
              };
              Parser2.prototype.createNode = function() {
                return {
                  index: this.startMarker.index,
                  line: this.startMarker.line,
                  column: this.startMarker.column
                };
              };
              Parser2.prototype.startNode = function(token, lastLineStart) {
                if (lastLineStart === void 0) {
                  lastLineStart = 0;
                }
                var column = token.start - token.lineStart;
                var line = token.lineNumber;
                if (column < 0) {
                  column += lastLineStart;
                  line--;
                }
                return {
                  index: token.start,
                  line,
                  column
                };
              };
              Parser2.prototype.finalize = function(marker, node) {
                if (this.config.range) {
                  node.range = [marker.index, this.lastMarker.index];
                }
                if (this.config.loc) {
                  node.loc = {
                    start: {
                      line: marker.line,
                      column: marker.column
                    },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column
                    }
                  };
                  if (this.config.source) {
                    node.loc.source = this.config.source;
                  }
                }
                if (this.delegate) {
                  var metadata = {
                    start: {
                      line: marker.line,
                      column: marker.column,
                      offset: marker.index
                    },
                    end: {
                      line: this.lastMarker.line,
                      column: this.lastMarker.column,
                      offset: this.lastMarker.index
                    }
                  };
                  this.delegate(node, metadata);
                }
                return node;
              };
              Parser2.prototype.expect = function(value) {
                var token = this.nextToken();
                if (token.type !== 7 || token.value !== value) {
                  this.throwUnexpectedToken(token);
                }
              };
              Parser2.prototype.expectCommaSeparator = function() {
                if (this.config.tolerant) {
                  var token = this.lookahead;
                  if (token.type === 7 && token.value === ",") {
                    this.nextToken();
                  } else if (token.type === 7 && token.value === ";") {
                    this.nextToken();
                    this.tolerateUnexpectedToken(token);
                  } else {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.UnexpectedToken);
                  }
                } else {
                  this.expect(",");
                }
              };
              Parser2.prototype.expectKeyword = function(keyword) {
                var token = this.nextToken();
                if (token.type !== 4 || token.value !== keyword) {
                  this.throwUnexpectedToken(token);
                }
              };
              Parser2.prototype.match = function(value) {
                return this.lookahead.type === 7 && this.lookahead.value === value;
              };
              Parser2.prototype.matchKeyword = function(keyword) {
                return this.lookahead.type === 4 && this.lookahead.value === keyword;
              };
              Parser2.prototype.matchContextualKeyword = function(keyword) {
                return this.lookahead.type === 3 && this.lookahead.value === keyword;
              };
              Parser2.prototype.matchAssign = function() {
                if (this.lookahead.type !== 7) {
                  return false;
                }
                var op = this.lookahead.value;
                return op === "=" || op === "*=" || op === "**=" || op === "/=" || op === "%=" || op === "+=" || op === "-=" || op === "<<=" || op === ">>=" || op === ">>>=" || op === "&=" || op === "^=" || op === "|=";
              };
              Parser2.prototype.isolateCoverGrammar = function(parseFunction) {
                var previousIsBindingElement = this.context.isBindingElement;
                var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var result = parseFunction.call(this);
                if (this.context.firstCoverInitializedNameError !== null) {
                  this.throwUnexpectedToken(this.context.firstCoverInitializedNameError);
                }
                this.context.isBindingElement = previousIsBindingElement;
                this.context.isAssignmentTarget = previousIsAssignmentTarget;
                this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError;
                return result;
              };
              Parser2.prototype.inheritCoverGrammar = function(parseFunction) {
                var previousIsBindingElement = this.context.isBindingElement;
                var previousIsAssignmentTarget = this.context.isAssignmentTarget;
                var previousFirstCoverInitializedNameError = this.context.firstCoverInitializedNameError;
                this.context.isBindingElement = true;
                this.context.isAssignmentTarget = true;
                this.context.firstCoverInitializedNameError = null;
                var result = parseFunction.call(this);
                this.context.isBindingElement = this.context.isBindingElement && previousIsBindingElement;
                this.context.isAssignmentTarget = this.context.isAssignmentTarget && previousIsAssignmentTarget;
                this.context.firstCoverInitializedNameError = previousFirstCoverInitializedNameError || this.context.firstCoverInitializedNameError;
                return result;
              };
              Parser2.prototype.consumeSemicolon = function() {
                if (this.match(";")) {
                  this.nextToken();
                } else if (!this.hasLineTerminator) {
                  if (this.lookahead.type !== 2 && !this.match("}")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.lastMarker.index = this.startMarker.index;
                  this.lastMarker.line = this.startMarker.line;
                  this.lastMarker.column = this.startMarker.column;
                }
              };
              Parser2.prototype.parsePrimaryExpression = function() {
                var node = this.createNode();
                var expr;
                var token, raw;
                switch (this.lookahead.type) {
                  case 3:
                    if ((this.context.isModule || this.context.await) && this.lookahead.value === "await") {
                      this.tolerateUnexpectedToken(this.lookahead);
                    }
                    expr = this.matchAsyncFunction() ? this.parseFunctionExpression() : this.finalize(node, new Node.Identifier(this.nextToken().value));
                    break;
                  case 6:
                  case 8:
                    if (this.context.strict && this.lookahead.octal) {
                      this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.StrictOctalLiteral);
                    }
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(token.value, raw));
                    break;
                  case 1:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(token.value === "true", raw));
                    break;
                  case 5:
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    token = this.nextToken();
                    raw = this.getTokenRaw(token);
                    expr = this.finalize(node, new Node.Literal(null, raw));
                    break;
                  case 10:
                    expr = this.parseTemplateLiteral();
                    break;
                  case 7:
                    switch (this.lookahead.value) {
                      case "(":
                        this.context.isBindingElement = false;
                        expr = this.inheritCoverGrammar(this.parseGroupExpression);
                        break;
                      case "[":
                        expr = this.inheritCoverGrammar(this.parseArrayInitializer);
                        break;
                      case "{":
                        expr = this.inheritCoverGrammar(this.parseObjectInitializer);
                        break;
                      case "/":
                      case "/=":
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                        this.scanner.index = this.startMarker.index;
                        token = this.nextRegexToken();
                        raw = this.getTokenRaw(token);
                        expr = this.finalize(node, new Node.RegexLiteral(token.regex, raw, token.pattern, token.flags));
                        break;
                      default:
                        expr = this.throwUnexpectedToken(this.nextToken());
                    }
                    break;
                  case 4:
                    if (!this.context.strict && this.context.allowYield && this.matchKeyword("yield")) {
                      expr = this.parseIdentifierName();
                    } else if (!this.context.strict && this.matchKeyword("let")) {
                      expr = this.finalize(node, new Node.Identifier(this.nextToken().value));
                    } else {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      if (this.matchKeyword("function")) {
                        expr = this.parseFunctionExpression();
                      } else if (this.matchKeyword("this")) {
                        this.nextToken();
                        expr = this.finalize(node, new Node.ThisExpression());
                      } else if (this.matchKeyword("class")) {
                        expr = this.parseClassExpression();
                      } else {
                        expr = this.throwUnexpectedToken(this.nextToken());
                      }
                    }
                    break;
                  default:
                    expr = this.throwUnexpectedToken(this.nextToken());
                }
                return expr;
              };
              Parser2.prototype.parseSpreadElement = function() {
                var node = this.createNode();
                this.expect("...");
                var arg = this.inheritCoverGrammar(this.parseAssignmentExpression);
                return this.finalize(node, new Node.SpreadElement(arg));
              };
              Parser2.prototype.parseArrayInitializer = function() {
                var node = this.createNode();
                var elements = [];
                this.expect("[");
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    elements.push(null);
                  } else if (this.match("...")) {
                    var element = this.parseSpreadElement();
                    if (!this.match("]")) {
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      this.expect(",");
                    }
                    elements.push(element);
                  } else {
                    elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(node, new Node.ArrayExpression(elements));
              };
              Parser2.prototype.parsePropertyMethod = function(params) {
                this.context.isAssignmentTarget = false;
                this.context.isBindingElement = false;
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = params.simple;
                var body2 = this.isolateCoverGrammar(this.parseFunctionSourceElements);
                if (this.context.strict && params.firstRestricted) {
                  this.tolerateUnexpectedToken(params.firstRestricted, params.message);
                }
                if (this.context.strict && params.stricted) {
                  this.tolerateUnexpectedToken(params.stricted, params.message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                return body2;
              };
              Parser2.prototype.parsePropertyMethodFunction = function() {
                var isGenerator = false;
                var node = this.createNode();
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = true;
                var params = this.parseFormalParameters();
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
              };
              Parser2.prototype.parsePropertyMethodAsyncFunction = function() {
                var node = this.createNode();
                var previousAllowYield = this.context.allowYield;
                var previousAwait = this.context.await;
                this.context.allowYield = false;
                this.context.await = true;
                var params = this.parseFormalParameters();
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                this.context.await = previousAwait;
                return this.finalize(node, new Node.AsyncFunctionExpression(null, params.params, method));
              };
              Parser2.prototype.parseObjectPropertyKey = function() {
                var node = this.createNode();
                var token = this.nextToken();
                var key;
                switch (token.type) {
                  case 8:
                  case 6:
                    if (this.context.strict && token.octal) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictOctalLiteral);
                    }
                    var raw = this.getTokenRaw(token);
                    key = this.finalize(node, new Node.Literal(token.value, raw));
                    break;
                  case 3:
                  case 1:
                  case 5:
                  case 4:
                    key = this.finalize(node, new Node.Identifier(token.value));
                    break;
                  case 7:
                    if (token.value === "[") {
                      key = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      this.expect("]");
                    } else {
                      key = this.throwUnexpectedToken(token);
                    }
                    break;
                  default:
                    key = this.throwUnexpectedToken(token);
                }
                return key;
              };
              Parser2.prototype.isPropertyKey = function(key, value) {
                return key.type === syntax_1.Syntax.Identifier && key.name === value || key.type === syntax_1.Syntax.Literal && key.value === value;
              };
              Parser2.prototype.parseObjectProperty = function(hasProto) {
                var node = this.createNode();
                var token = this.lookahead;
                var kind;
                var key = null;
                var value = null;
                var computed = false;
                var method = false;
                var shorthand = false;
                var isAsync = false;
                if (token.type === 3) {
                  var id = token.value;
                  this.nextToken();
                  computed = this.match("[");
                  isAsync = !this.hasLineTerminator && id === "async" && !this.match(":") && !this.match("(") && !this.match("*") && !this.match(",");
                  key = isAsync ? this.parseObjectPropertyKey() : this.finalize(node, new Node.Identifier(id));
                } else if (this.match("*")) {
                  this.nextToken();
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                }
                var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                if (token.type === 3 && !isAsync && token.value === "get" && lookaheadPropertyKey) {
                  kind = "get";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  this.context.allowYield = false;
                  value = this.parseGetterMethod();
                } else if (token.type === 3 && !isAsync && token.value === "set" && lookaheadPropertyKey) {
                  kind = "set";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseSetterMethod();
                } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                  kind = "init";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseGeneratorMethod();
                  method = true;
                } else {
                  if (!key) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  kind = "init";
                  if (this.match(":") && !isAsync) {
                    if (!computed && this.isPropertyKey(key, "__proto__")) {
                      if (hasProto.value) {
                        this.tolerateError(messages_1.Messages.DuplicateProtoProperty);
                      }
                      hasProto.value = true;
                    }
                    this.nextToken();
                    value = this.inheritCoverGrammar(this.parseAssignmentExpression);
                  } else if (this.match("(")) {
                    value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                    method = true;
                  } else if (token.type === 3) {
                    var id = this.finalize(node, new Node.Identifier(token.value));
                    if (this.match("=")) {
                      this.context.firstCoverInitializedNameError = this.lookahead;
                      this.nextToken();
                      shorthand = true;
                      var init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      value = this.finalize(node, new Node.AssignmentPattern(id, init));
                    } else {
                      shorthand = true;
                      value = id;
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(node, new Node.Property(kind, key, computed, value, method, shorthand));
              };
              Parser2.prototype.parseObjectInitializer = function() {
                var node = this.createNode();
                this.expect("{");
                var properties = [];
                var hasProto = { value: false };
                while (!this.match("}")) {
                  properties.push(this.parseObjectProperty(hasProto));
                  if (!this.match("}")) {
                    this.expectCommaSeparator();
                  }
                }
                this.expect("}");
                return this.finalize(node, new Node.ObjectExpression(properties));
              };
              Parser2.prototype.parseTemplateHead = function() {
                assert_1.assert(this.lookahead.head, "Template literal must start with a template head");
                var node = this.createNode();
                var token = this.nextToken();
                var raw = token.value;
                var cooked = token.cooked;
                return this.finalize(node, new Node.TemplateElement({ raw, cooked }, token.tail));
              };
              Parser2.prototype.parseTemplateElement = function() {
                if (this.lookahead.type !== 10) {
                  this.throwUnexpectedToken();
                }
                var node = this.createNode();
                var token = this.nextToken();
                var raw = token.value;
                var cooked = token.cooked;
                return this.finalize(node, new Node.TemplateElement({ raw, cooked }, token.tail));
              };
              Parser2.prototype.parseTemplateLiteral = function() {
                var node = this.createNode();
                var expressions = [];
                var quasis = [];
                var quasi = this.parseTemplateHead();
                quasis.push(quasi);
                while (!quasi.tail) {
                  expressions.push(this.parseExpression());
                  quasi = this.parseTemplateElement();
                  quasis.push(quasi);
                }
                return this.finalize(node, new Node.TemplateLiteral(quasis, expressions));
              };
              Parser2.prototype.reinterpretExpressionAsPattern = function(expr) {
                switch (expr.type) {
                  case syntax_1.Syntax.Identifier:
                  case syntax_1.Syntax.MemberExpression:
                  case syntax_1.Syntax.RestElement:
                  case syntax_1.Syntax.AssignmentPattern:
                    break;
                  case syntax_1.Syntax.SpreadElement:
                    expr.type = syntax_1.Syntax.RestElement;
                    this.reinterpretExpressionAsPattern(expr.argument);
                    break;
                  case syntax_1.Syntax.ArrayExpression:
                    expr.type = syntax_1.Syntax.ArrayPattern;
                    for (var i = 0; i < expr.elements.length; i++) {
                      if (expr.elements[i] !== null) {
                        this.reinterpretExpressionAsPattern(expr.elements[i]);
                      }
                    }
                    break;
                  case syntax_1.Syntax.ObjectExpression:
                    expr.type = syntax_1.Syntax.ObjectPattern;
                    for (var i = 0; i < expr.properties.length; i++) {
                      this.reinterpretExpressionAsPattern(expr.properties[i].value);
                    }
                    break;
                  case syntax_1.Syntax.AssignmentExpression:
                    expr.type = syntax_1.Syntax.AssignmentPattern;
                    delete expr.operator;
                    this.reinterpretExpressionAsPattern(expr.left);
                    break;
                }
              };
              Parser2.prototype.parseGroupExpression = function() {
                var expr;
                this.expect("(");
                if (this.match(")")) {
                  this.nextToken();
                  if (!this.match("=>")) {
                    this.expect("=>");
                  }
                  expr = {
                    type: ArrowParameterPlaceHolder,
                    params: [],
                    async: false
                  };
                } else {
                  var startToken = this.lookahead;
                  var params = [];
                  if (this.match("...")) {
                    expr = this.parseRestElement(params);
                    this.expect(")");
                    if (!this.match("=>")) {
                      this.expect("=>");
                    }
                    expr = {
                      type: ArrowParameterPlaceHolder,
                      params: [expr],
                      async: false
                    };
                  } else {
                    var arrow = false;
                    this.context.isBindingElement = true;
                    expr = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    if (this.match(",")) {
                      var expressions = [];
                      this.context.isAssignmentTarget = false;
                      expressions.push(expr);
                      while (this.lookahead.type !== 2) {
                        if (!this.match(",")) {
                          break;
                        }
                        this.nextToken();
                        if (this.match(")")) {
                          this.nextToken();
                          for (var i = 0; i < expressions.length; i++) {
                            this.reinterpretExpressionAsPattern(expressions[i]);
                          }
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: expressions,
                            async: false
                          };
                        } else if (this.match("...")) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          expressions.push(this.parseRestElement(params));
                          this.expect(")");
                          if (!this.match("=>")) {
                            this.expect("=>");
                          }
                          this.context.isBindingElement = false;
                          for (var i = 0; i < expressions.length; i++) {
                            this.reinterpretExpressionAsPattern(expressions[i]);
                          }
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: expressions,
                            async: false
                          };
                        } else {
                          expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression));
                        }
                        if (arrow) {
                          break;
                        }
                      }
                      if (!arrow) {
                        expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                      }
                    }
                    if (!arrow) {
                      this.expect(")");
                      if (this.match("=>")) {
                        if (expr.type === syntax_1.Syntax.Identifier && expr.name === "yield") {
                          arrow = true;
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: [expr],
                            async: false
                          };
                        }
                        if (!arrow) {
                          if (!this.context.isBindingElement) {
                            this.throwUnexpectedToken(this.lookahead);
                          }
                          if (expr.type === syntax_1.Syntax.SequenceExpression) {
                            for (var i = 0; i < expr.expressions.length; i++) {
                              this.reinterpretExpressionAsPattern(expr.expressions[i]);
                            }
                          } else {
                            this.reinterpretExpressionAsPattern(expr);
                          }
                          var parameters = expr.type === syntax_1.Syntax.SequenceExpression ? expr.expressions : [expr];
                          expr = {
                            type: ArrowParameterPlaceHolder,
                            params: parameters,
                            async: false
                          };
                        }
                      }
                      this.context.isBindingElement = false;
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseArguments = function() {
                this.expect("(");
                var args = [];
                if (!this.match(")")) {
                  while (true) {
                    var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAssignmentExpression);
                    args.push(expr);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return args;
              };
              Parser2.prototype.isIdentifierName = function(token) {
                return token.type === 3 || token.type === 4 || token.type === 1 || token.type === 5;
              };
              Parser2.prototype.parseIdentifierName = function() {
                var node = this.createNode();
                var token = this.nextToken();
                if (!this.isIdentifierName(token)) {
                  this.throwUnexpectedToken(token);
                }
                return this.finalize(node, new Node.Identifier(token.value));
              };
              Parser2.prototype.parseNewExpression = function() {
                var node = this.createNode();
                var id = this.parseIdentifierName();
                assert_1.assert(id.name === "new", "New expression must start with `new`");
                var expr;
                if (this.match(".")) {
                  this.nextToken();
                  if (this.lookahead.type === 3 && this.context.inFunctionBody && this.lookahead.value === "target") {
                    var property = this.parseIdentifierName();
                    expr = new Node.MetaProperty(id, property);
                  } else {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  var callee = this.isolateCoverGrammar(this.parseLeftHandSideExpression);
                  var args = this.match("(") ? this.parseArguments() : [];
                  expr = new Node.NewExpression(callee, args);
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return this.finalize(node, expr);
              };
              Parser2.prototype.parseAsyncArgument = function() {
                var arg = this.parseAssignmentExpression();
                this.context.firstCoverInitializedNameError = null;
                return arg;
              };
              Parser2.prototype.parseAsyncArguments = function() {
                this.expect("(");
                var args = [];
                if (!this.match(")")) {
                  while (true) {
                    var expr = this.match("...") ? this.parseSpreadElement() : this.isolateCoverGrammar(this.parseAsyncArgument);
                    args.push(expr);
                    if (this.match(")")) {
                      break;
                    }
                    this.expectCommaSeparator();
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return args;
              };
              Parser2.prototype.parseLeftHandSideExpressionAllowCall = function() {
                var startToken = this.lookahead;
                var maybeAsync = this.matchContextualKeyword("async");
                var previousAllowIn = this.context.allowIn;
                this.context.allowIn = true;
                var expr;
                if (this.matchKeyword("super") && this.context.inFunctionBody) {
                  expr = this.createNode();
                  this.nextToken();
                  expr = this.finalize(expr, new Node.Super());
                  if (!this.match("(") && !this.match(".") && !this.match("[")) {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                } else {
                  expr = this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                }
                while (true) {
                  if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var property = this.parseIdentifierName();
                    expr = this.finalize(this.startNode(startToken), new Node.StaticMemberExpression(expr, property));
                  } else if (this.match("(")) {
                    var asyncArrow = maybeAsync && startToken.lineNumber === this.lookahead.lineNumber;
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = false;
                    var args = asyncArrow ? this.parseAsyncArguments() : this.parseArguments();
                    expr = this.finalize(this.startNode(startToken), new Node.CallExpression(expr, args));
                    if (asyncArrow && this.match("=>")) {
                      for (var i = 0; i < args.length; ++i) {
                        this.reinterpretExpressionAsPattern(args[i]);
                      }
                      expr = {
                        type: ArrowParameterPlaceHolder,
                        params: args,
                        async: true
                      };
                    }
                  } else if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var property = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    expr = this.finalize(this.startNode(startToken), new Node.ComputedMemberExpression(expr, property));
                  } else if (this.lookahead.type === 10 && this.lookahead.head) {
                    var quasi = this.parseTemplateLiteral();
                    expr = this.finalize(this.startNode(startToken), new Node.TaggedTemplateExpression(expr, quasi));
                  } else {
                    break;
                  }
                }
                this.context.allowIn = previousAllowIn;
                return expr;
              };
              Parser2.prototype.parseSuper = function() {
                var node = this.createNode();
                this.expectKeyword("super");
                if (!this.match("[") && !this.match(".")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                return this.finalize(node, new Node.Super());
              };
              Parser2.prototype.parseLeftHandSideExpression = function() {
                assert_1.assert(this.context.allowIn, "callee of new expression always allow in keyword.");
                var node = this.startNode(this.lookahead);
                var expr = this.matchKeyword("super") && this.context.inFunctionBody ? this.parseSuper() : this.inheritCoverGrammar(this.matchKeyword("new") ? this.parseNewExpression : this.parsePrimaryExpression);
                while (true) {
                  if (this.match("[")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect("[");
                    var property = this.isolateCoverGrammar(this.parseExpression);
                    this.expect("]");
                    expr = this.finalize(node, new Node.ComputedMemberExpression(expr, property));
                  } else if (this.match(".")) {
                    this.context.isBindingElement = false;
                    this.context.isAssignmentTarget = true;
                    this.expect(".");
                    var property = this.parseIdentifierName();
                    expr = this.finalize(node, new Node.StaticMemberExpression(expr, property));
                  } else if (this.lookahead.type === 10 && this.lookahead.head) {
                    var quasi = this.parseTemplateLiteral();
                    expr = this.finalize(node, new Node.TaggedTemplateExpression(expr, quasi));
                  } else {
                    break;
                  }
                }
                return expr;
              };
              Parser2.prototype.parseUpdateExpression = function() {
                var expr;
                var startToken = this.lookahead;
                if (this.match("++") || this.match("--")) {
                  var node = this.startNode(startToken);
                  var token = this.nextToken();
                  expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                  if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                    this.tolerateError(messages_1.Messages.StrictLHSPrefix);
                  }
                  if (!this.context.isAssignmentTarget) {
                    this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                  }
                  var prefix = true;
                  expr = this.finalize(node, new Node.UpdateExpression(token.value, expr, prefix));
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else {
                  expr = this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                  if (!this.hasLineTerminator && this.lookahead.type === 7) {
                    if (this.match("++") || this.match("--")) {
                      if (this.context.strict && expr.type === syntax_1.Syntax.Identifier && this.scanner.isRestrictedWord(expr.name)) {
                        this.tolerateError(messages_1.Messages.StrictLHSPostfix);
                      }
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                      }
                      this.context.isAssignmentTarget = false;
                      this.context.isBindingElement = false;
                      var operator = this.nextToken().value;
                      var prefix = false;
                      expr = this.finalize(this.startNode(startToken), new Node.UpdateExpression(operator, expr, prefix));
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseAwaitExpression = function() {
                var node = this.createNode();
                this.nextToken();
                var argument = this.parseUnaryExpression();
                return this.finalize(node, new Node.AwaitExpression(argument));
              };
              Parser2.prototype.parseUnaryExpression = function() {
                var expr;
                if (this.match("+") || this.match("-") || this.match("~") || this.match("!") || this.matchKeyword("delete") || this.matchKeyword("void") || this.matchKeyword("typeof")) {
                  var node = this.startNode(this.lookahead);
                  var token = this.nextToken();
                  expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                  expr = this.finalize(node, new Node.UnaryExpression(token.value, expr));
                  if (this.context.strict && expr.operator === "delete" && expr.argument.type === syntax_1.Syntax.Identifier) {
                    this.tolerateError(messages_1.Messages.StrictDelete);
                  }
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                } else if (this.context.await && this.matchContextualKeyword("await")) {
                  expr = this.parseAwaitExpression();
                } else {
                  expr = this.parseUpdateExpression();
                }
                return expr;
              };
              Parser2.prototype.parseExponentiationExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseUnaryExpression);
                if (expr.type !== syntax_1.Syntax.UnaryExpression && this.match("**")) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var left = expr;
                  var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                  expr = this.finalize(this.startNode(startToken), new Node.BinaryExpression("**", left, right));
                }
                return expr;
              };
              Parser2.prototype.binaryPrecedence = function(token) {
                var op = token.value;
                var precedence;
                if (token.type === 7) {
                  precedence = this.operatorPrecedence[op] || 0;
                } else if (token.type === 4) {
                  precedence = op === "instanceof" || this.context.allowIn && op === "in" ? 7 : 0;
                } else {
                  precedence = 0;
                }
                return precedence;
              };
              Parser2.prototype.parseBinaryExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseExponentiationExpression);
                var token = this.lookahead;
                var prec = this.binaryPrecedence(token);
                if (prec > 0) {
                  this.nextToken();
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                  var markers = [startToken, this.lookahead];
                  var left = expr;
                  var right = this.isolateCoverGrammar(this.parseExponentiationExpression);
                  var stack = [left, token.value, right];
                  var precedences = [prec];
                  while (true) {
                    prec = this.binaryPrecedence(this.lookahead);
                    if (prec <= 0) {
                      break;
                    }
                    while (stack.length > 2 && prec <= precedences[precedences.length - 1]) {
                      right = stack.pop();
                      var operator = stack.pop();
                      precedences.pop();
                      left = stack.pop();
                      markers.pop();
                      var node = this.startNode(markers[markers.length - 1]);
                      stack.push(this.finalize(node, new Node.BinaryExpression(operator, left, right)));
                    }
                    stack.push(this.nextToken().value);
                    precedences.push(prec);
                    markers.push(this.lookahead);
                    stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression));
                  }
                  var i = stack.length - 1;
                  expr = stack[i];
                  var lastMarker = markers.pop();
                  while (i > 1) {
                    var marker = markers.pop();
                    var lastLineStart = lastMarker && lastMarker.lineStart;
                    var node = this.startNode(marker, lastLineStart);
                    var operator = stack[i - 1];
                    expr = this.finalize(node, new Node.BinaryExpression(operator, stack[i - 2], expr));
                    i -= 2;
                    lastMarker = marker;
                  }
                }
                return expr;
              };
              Parser2.prototype.parseConditionalExpression = function() {
                var startToken = this.lookahead;
                var expr = this.inheritCoverGrammar(this.parseBinaryExpression);
                if (this.match("?")) {
                  this.nextToken();
                  var previousAllowIn = this.context.allowIn;
                  this.context.allowIn = true;
                  var consequent = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  this.context.allowIn = previousAllowIn;
                  this.expect(":");
                  var alternate = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  expr = this.finalize(this.startNode(startToken), new Node.ConditionalExpression(expr, consequent, alternate));
                  this.context.isAssignmentTarget = false;
                  this.context.isBindingElement = false;
                }
                return expr;
              };
              Parser2.prototype.checkPatternParam = function(options2, param) {
                switch (param.type) {
                  case syntax_1.Syntax.Identifier:
                    this.validateParam(options2, param, param.name);
                    break;
                  case syntax_1.Syntax.RestElement:
                    this.checkPatternParam(options2, param.argument);
                    break;
                  case syntax_1.Syntax.AssignmentPattern:
                    this.checkPatternParam(options2, param.left);
                    break;
                  case syntax_1.Syntax.ArrayPattern:
                    for (var i = 0; i < param.elements.length; i++) {
                      if (param.elements[i] !== null) {
                        this.checkPatternParam(options2, param.elements[i]);
                      }
                    }
                    break;
                  case syntax_1.Syntax.ObjectPattern:
                    for (var i = 0; i < param.properties.length; i++) {
                      this.checkPatternParam(options2, param.properties[i].value);
                    }
                    break;
                }
                options2.simple = options2.simple && param instanceof Node.Identifier;
              };
              Parser2.prototype.reinterpretAsCoverFormalsList = function(expr) {
                var params = [expr];
                var options2;
                var asyncArrow = false;
                switch (expr.type) {
                  case syntax_1.Syntax.Identifier:
                    break;
                  case ArrowParameterPlaceHolder:
                    params = expr.params;
                    asyncArrow = expr.async;
                    break;
                  default:
                    return null;
                }
                options2 = {
                  simple: true,
                  paramSet: {}
                };
                for (var i = 0; i < params.length; ++i) {
                  var param = params[i];
                  if (param.type === syntax_1.Syntax.AssignmentPattern) {
                    if (param.right.type === syntax_1.Syntax.YieldExpression) {
                      if (param.right.argument) {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                      param.right.type = syntax_1.Syntax.Identifier;
                      param.right.name = "yield";
                      delete param.right.argument;
                      delete param.right.delegate;
                    }
                  } else if (asyncArrow && param.type === syntax_1.Syntax.Identifier && param.name === "await") {
                    this.throwUnexpectedToken(this.lookahead);
                  }
                  this.checkPatternParam(options2, param);
                  params[i] = param;
                }
                if (this.context.strict || !this.context.allowYield) {
                  for (var i = 0; i < params.length; ++i) {
                    var param = params[i];
                    if (param.type === syntax_1.Syntax.YieldExpression) {
                      this.throwUnexpectedToken(this.lookahead);
                    }
                  }
                }
                if (options2.message === messages_1.Messages.StrictParamDupe) {
                  var token = this.context.strict ? options2.stricted : options2.firstRestricted;
                  this.throwUnexpectedToken(token, options2.message);
                }
                return {
                  simple: options2.simple,
                  params,
                  stricted: options2.stricted,
                  firstRestricted: options2.firstRestricted,
                  message: options2.message
                };
              };
              Parser2.prototype.parseAssignmentExpression = function() {
                var expr;
                if (!this.context.allowYield && this.matchKeyword("yield")) {
                  expr = this.parseYieldExpression();
                } else {
                  var startToken = this.lookahead;
                  var token = startToken;
                  expr = this.parseConditionalExpression();
                  if (token.type === 3 && token.lineNumber === this.lookahead.lineNumber && token.value === "async") {
                    if (this.lookahead.type === 3 || this.matchKeyword("yield")) {
                      var arg = this.parsePrimaryExpression();
                      this.reinterpretExpressionAsPattern(arg);
                      expr = {
                        type: ArrowParameterPlaceHolder,
                        params: [arg],
                        async: true
                      };
                    }
                  }
                  if (expr.type === ArrowParameterPlaceHolder || this.match("=>")) {
                    this.context.isAssignmentTarget = false;
                    this.context.isBindingElement = false;
                    var isAsync = expr.async;
                    var list = this.reinterpretAsCoverFormalsList(expr);
                    if (list) {
                      if (this.hasLineTerminator) {
                        this.tolerateUnexpectedToken(this.lookahead);
                      }
                      this.context.firstCoverInitializedNameError = null;
                      var previousStrict = this.context.strict;
                      var previousAllowStrictDirective = this.context.allowStrictDirective;
                      this.context.allowStrictDirective = list.simple;
                      var previousAllowYield = this.context.allowYield;
                      var previousAwait = this.context.await;
                      this.context.allowYield = true;
                      this.context.await = isAsync;
                      var node = this.startNode(startToken);
                      this.expect("=>");
                      var body2 = void 0;
                      if (this.match("{")) {
                        var previousAllowIn = this.context.allowIn;
                        this.context.allowIn = true;
                        body2 = this.parseFunctionSourceElements();
                        this.context.allowIn = previousAllowIn;
                      } else {
                        body2 = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      }
                      var expression = body2.type !== syntax_1.Syntax.BlockStatement;
                      if (this.context.strict && list.firstRestricted) {
                        this.throwUnexpectedToken(list.firstRestricted, list.message);
                      }
                      if (this.context.strict && list.stricted) {
                        this.tolerateUnexpectedToken(list.stricted, list.message);
                      }
                      expr = isAsync ? this.finalize(node, new Node.AsyncArrowFunctionExpression(list.params, body2, expression)) : this.finalize(node, new Node.ArrowFunctionExpression(list.params, body2, expression));
                      this.context.strict = previousStrict;
                      this.context.allowStrictDirective = previousAllowStrictDirective;
                      this.context.allowYield = previousAllowYield;
                      this.context.await = previousAwait;
                    }
                  } else {
                    if (this.matchAssign()) {
                      if (!this.context.isAssignmentTarget) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInAssignment);
                      }
                      if (this.context.strict && expr.type === syntax_1.Syntax.Identifier) {
                        var id = expr;
                        if (this.scanner.isRestrictedWord(id.name)) {
                          this.tolerateUnexpectedToken(token, messages_1.Messages.StrictLHSAssignment);
                        }
                        if (this.scanner.isStrictModeReservedWord(id.name)) {
                          this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                        }
                      }
                      if (!this.match("=")) {
                        this.context.isAssignmentTarget = false;
                        this.context.isBindingElement = false;
                      } else {
                        this.reinterpretExpressionAsPattern(expr);
                      }
                      token = this.nextToken();
                      var operator = token.value;
                      var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                      expr = this.finalize(this.startNode(startToken), new Node.AssignmentExpression(operator, expr, right));
                      this.context.firstCoverInitializedNameError = null;
                    }
                  }
                }
                return expr;
              };
              Parser2.prototype.parseExpression = function() {
                var startToken = this.lookahead;
                var expr = this.isolateCoverGrammar(this.parseAssignmentExpression);
                if (this.match(",")) {
                  var expressions = [];
                  expressions.push(expr);
                  while (this.lookahead.type !== 2) {
                    if (!this.match(",")) {
                      break;
                    }
                    this.nextToken();
                    expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                  }
                  expr = this.finalize(this.startNode(startToken), new Node.SequenceExpression(expressions));
                }
                return expr;
              };
              Parser2.prototype.parseStatementListItem = function() {
                var statement;
                this.context.isAssignmentTarget = true;
                this.context.isBindingElement = true;
                if (this.lookahead.type === 4) {
                  switch (this.lookahead.value) {
                    case "export":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalExportDeclaration);
                      }
                      statement = this.parseExportDeclaration();
                      break;
                    case "import":
                      if (!this.context.isModule) {
                        this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.IllegalImportDeclaration);
                      }
                      statement = this.parseImportDeclaration();
                      break;
                    case "const":
                      statement = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "function":
                      statement = this.parseFunctionDeclaration();
                      break;
                    case "class":
                      statement = this.parseClassDeclaration();
                      break;
                    case "let":
                      statement = this.isLexicalDeclaration() ? this.parseLexicalDeclaration({ inFor: false }) : this.parseStatement();
                      break;
                    default:
                      statement = this.parseStatement();
                      break;
                  }
                } else {
                  statement = this.parseStatement();
                }
                return statement;
              };
              Parser2.prototype.parseBlock = function() {
                var node = this.createNode();
                this.expect("{");
                var block2 = [];
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  block2.push(this.parseStatementListItem());
                }
                this.expect("}");
                return this.finalize(node, new Node.BlockStatement(block2));
              };
              Parser2.prototype.parseLexicalBinding = function(kind, options2) {
                var node = this.createNode();
                var params = [];
                var id = this.parsePattern(params, kind);
                if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(id.name)) {
                    this.tolerateError(messages_1.Messages.StrictVarName);
                  }
                }
                var init = null;
                if (kind === "const") {
                  if (!this.matchKeyword("in") && !this.matchContextualKeyword("of")) {
                    if (this.match("=")) {
                      this.nextToken();
                      init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                    } else {
                      this.throwError(messages_1.Messages.DeclarationMissingInitializer, "const");
                    }
                  }
                } else if (!options2.inFor && id.type !== syntax_1.Syntax.Identifier || this.match("=")) {
                  this.expect("=");
                  init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                }
                return this.finalize(node, new Node.VariableDeclarator(id, init));
              };
              Parser2.prototype.parseBindingList = function(kind, options2) {
                var list = [this.parseLexicalBinding(kind, options2)];
                while (this.match(",")) {
                  this.nextToken();
                  list.push(this.parseLexicalBinding(kind, options2));
                }
                return list;
              };
              Parser2.prototype.isLexicalDeclaration = function() {
                var state = this.scanner.saveState();
                this.scanner.scanComments();
                var next = this.scanner.lex();
                this.scanner.restoreState(state);
                return next.type === 3 || next.type === 7 && next.value === "[" || next.type === 7 && next.value === "{" || next.type === 4 && next.value === "let" || next.type === 4 && next.value === "yield";
              };
              Parser2.prototype.parseLexicalDeclaration = function(options2) {
                var node = this.createNode();
                var kind = this.nextToken().value;
                assert_1.assert(kind === "let" || kind === "const", "Lexical declaration must be either let or const");
                var declarations = this.parseBindingList(kind, options2);
                this.consumeSemicolon();
                return this.finalize(node, new Node.VariableDeclaration(declarations, kind));
              };
              Parser2.prototype.parseBindingRestElement = function(params, kind) {
                var node = this.createNode();
                this.expect("...");
                var arg = this.parsePattern(params, kind);
                return this.finalize(node, new Node.RestElement(arg));
              };
              Parser2.prototype.parseArrayPattern = function(params, kind) {
                var node = this.createNode();
                this.expect("[");
                var elements = [];
                while (!this.match("]")) {
                  if (this.match(",")) {
                    this.nextToken();
                    elements.push(null);
                  } else {
                    if (this.match("...")) {
                      elements.push(this.parseBindingRestElement(params, kind));
                      break;
                    } else {
                      elements.push(this.parsePatternWithDefault(params, kind));
                    }
                    if (!this.match("]")) {
                      this.expect(",");
                    }
                  }
                }
                this.expect("]");
                return this.finalize(node, new Node.ArrayPattern(elements));
              };
              Parser2.prototype.parsePropertyPattern = function(params, kind) {
                var node = this.createNode();
                var computed = false;
                var shorthand = false;
                var method = false;
                var key;
                var value;
                if (this.lookahead.type === 3) {
                  var keyToken = this.lookahead;
                  key = this.parseVariableIdentifier();
                  var init = this.finalize(node, new Node.Identifier(keyToken.value));
                  if (this.match("=")) {
                    params.push(keyToken);
                    shorthand = true;
                    this.nextToken();
                    var expr = this.parseAssignmentExpression();
                    value = this.finalize(this.startNode(keyToken), new Node.AssignmentPattern(init, expr));
                  } else if (!this.match(":")) {
                    params.push(keyToken);
                    shorthand = true;
                    value = init;
                  } else {
                    this.expect(":");
                    value = this.parsePatternWithDefault(params, kind);
                  }
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  this.expect(":");
                  value = this.parsePatternWithDefault(params, kind);
                }
                return this.finalize(node, new Node.Property("init", key, computed, value, method, shorthand));
              };
              Parser2.prototype.parseObjectPattern = function(params, kind) {
                var node = this.createNode();
                var properties = [];
                this.expect("{");
                while (!this.match("}")) {
                  properties.push(this.parsePropertyPattern(params, kind));
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return this.finalize(node, new Node.ObjectPattern(properties));
              };
              Parser2.prototype.parsePattern = function(params, kind) {
                var pattern;
                if (this.match("[")) {
                  pattern = this.parseArrayPattern(params, kind);
                } else if (this.match("{")) {
                  pattern = this.parseObjectPattern(params, kind);
                } else {
                  if (this.matchKeyword("let") && (kind === "const" || kind === "let")) {
                    this.tolerateUnexpectedToken(this.lookahead, messages_1.Messages.LetInLexicalBinding);
                  }
                  params.push(this.lookahead);
                  pattern = this.parseVariableIdentifier(kind);
                }
                return pattern;
              };
              Parser2.prototype.parsePatternWithDefault = function(params, kind) {
                var startToken = this.lookahead;
                var pattern = this.parsePattern(params, kind);
                if (this.match("=")) {
                  this.nextToken();
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = true;
                  var right = this.isolateCoverGrammar(this.parseAssignmentExpression);
                  this.context.allowYield = previousAllowYield;
                  pattern = this.finalize(this.startNode(startToken), new Node.AssignmentPattern(pattern, right));
                }
                return pattern;
              };
              Parser2.prototype.parseVariableIdentifier = function(kind) {
                var node = this.createNode();
                var token = this.nextToken();
                if (token.type === 4 && token.value === "yield") {
                  if (this.context.strict) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                  } else if (!this.context.allowYield) {
                    this.throwUnexpectedToken(token);
                  }
                } else if (token.type !== 3) {
                  if (this.context.strict && token.type === 4 && this.scanner.isStrictModeReservedWord(token.value)) {
                    this.tolerateUnexpectedToken(token, messages_1.Messages.StrictReservedWord);
                  } else {
                    if (this.context.strict || token.value !== "let" || kind !== "var") {
                      this.throwUnexpectedToken(token);
                    }
                  }
                } else if ((this.context.isModule || this.context.await) && token.type === 3 && token.value === "await") {
                  this.tolerateUnexpectedToken(token);
                }
                return this.finalize(node, new Node.Identifier(token.value));
              };
              Parser2.prototype.parseVariableDeclaration = function(options2) {
                var node = this.createNode();
                var params = [];
                var id = this.parsePattern(params, "var");
                if (this.context.strict && id.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(id.name)) {
                    this.tolerateError(messages_1.Messages.StrictVarName);
                  }
                }
                var init = null;
                if (this.match("=")) {
                  this.nextToken();
                  init = this.isolateCoverGrammar(this.parseAssignmentExpression);
                } else if (id.type !== syntax_1.Syntax.Identifier && !options2.inFor) {
                  this.expect("=");
                }
                return this.finalize(node, new Node.VariableDeclarator(id, init));
              };
              Parser2.prototype.parseVariableDeclarationList = function(options2) {
                var opt = { inFor: options2.inFor };
                var list = [];
                list.push(this.parseVariableDeclaration(opt));
                while (this.match(",")) {
                  this.nextToken();
                  list.push(this.parseVariableDeclaration(opt));
                }
                return list;
              };
              Parser2.prototype.parseVariableStatement = function() {
                var node = this.createNode();
                this.expectKeyword("var");
                var declarations = this.parseVariableDeclarationList({ inFor: false });
                this.consumeSemicolon();
                return this.finalize(node, new Node.VariableDeclaration(declarations, "var"));
              };
              Parser2.prototype.parseEmptyStatement = function() {
                var node = this.createNode();
                this.expect(";");
                return this.finalize(node, new Node.EmptyStatement());
              };
              Parser2.prototype.parseExpressionStatement = function() {
                var node = this.createNode();
                var expr = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(node, new Node.ExpressionStatement(expr));
              };
              Parser2.prototype.parseIfClause = function() {
                if (this.context.strict && this.matchKeyword("function")) {
                  this.tolerateError(messages_1.Messages.StrictFunction);
                }
                return this.parseStatement();
              };
              Parser2.prototype.parseIfStatement = function() {
                var node = this.createNode();
                var consequent;
                var alternate = null;
                this.expectKeyword("if");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  consequent = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  consequent = this.parseIfClause();
                  if (this.matchKeyword("else")) {
                    this.nextToken();
                    alternate = this.parseIfClause();
                  }
                }
                return this.finalize(node, new Node.IfStatement(test, consequent, alternate));
              };
              Parser2.prototype.parseDoWhileStatement = function() {
                var node = this.createNode();
                this.expectKeyword("do");
                var previousInIteration = this.context.inIteration;
                this.context.inIteration = true;
                var body2 = this.parseStatement();
                this.context.inIteration = previousInIteration;
                this.expectKeyword("while");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                } else {
                  this.expect(")");
                  if (this.match(";")) {
                    this.nextToken();
                  }
                }
                return this.finalize(node, new Node.DoWhileStatement(body2, test));
              };
              Parser2.prototype.parseWhileStatement = function() {
                var node = this.createNode();
                var body2;
                this.expectKeyword("while");
                this.expect("(");
                var test = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body2 = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  var previousInIteration = this.context.inIteration;
                  this.context.inIteration = true;
                  body2 = this.parseStatement();
                  this.context.inIteration = previousInIteration;
                }
                return this.finalize(node, new Node.WhileStatement(test, body2));
              };
              Parser2.prototype.parseForStatement = function() {
                var init = null;
                var test = null;
                var update = null;
                var forIn = true;
                var left, right;
                var node = this.createNode();
                this.expectKeyword("for");
                this.expect("(");
                if (this.match(";")) {
                  this.nextToken();
                } else {
                  if (this.matchKeyword("var")) {
                    init = this.createNode();
                    this.nextToken();
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = false;
                    var declarations = this.parseVariableDeclarationList({ inFor: true });
                    this.context.allowIn = previousAllowIn;
                    if (declarations.length === 1 && this.matchKeyword("in")) {
                      var decl = declarations[0];
                      if (decl.init && (decl.id.type === syntax_1.Syntax.ArrayPattern || decl.id.type === syntax_1.Syntax.ObjectPattern || this.context.strict)) {
                        this.tolerateError(messages_1.Messages.ForInOfLoopInitializer, "for-in");
                      }
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.nextToken();
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.nextToken();
                      left = init;
                      right = this.parseAssignmentExpression();
                      init = null;
                      forIn = false;
                    } else {
                      init = this.finalize(init, new Node.VariableDeclaration(declarations, "var"));
                      this.expect(";");
                    }
                  } else if (this.matchKeyword("const") || this.matchKeyword("let")) {
                    init = this.createNode();
                    var kind = this.nextToken().value;
                    if (!this.context.strict && this.lookahead.value === "in") {
                      init = this.finalize(init, new Node.Identifier(kind));
                      this.nextToken();
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else {
                      var previousAllowIn = this.context.allowIn;
                      this.context.allowIn = false;
                      var declarations = this.parseBindingList(kind, { inFor: true });
                      this.context.allowIn = previousAllowIn;
                      if (declarations.length === 1 && declarations[0].init === null && this.matchKeyword("in")) {
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                        this.nextToken();
                        left = init;
                        right = this.parseExpression();
                        init = null;
                      } else if (declarations.length === 1 && declarations[0].init === null && this.matchContextualKeyword("of")) {
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                        this.nextToken();
                        left = init;
                        right = this.parseAssignmentExpression();
                        init = null;
                        forIn = false;
                      } else {
                        this.consumeSemicolon();
                        init = this.finalize(init, new Node.VariableDeclaration(declarations, kind));
                      }
                    }
                  } else {
                    var initStartToken = this.lookahead;
                    var previousAllowIn = this.context.allowIn;
                    this.context.allowIn = false;
                    init = this.inheritCoverGrammar(this.parseAssignmentExpression);
                    this.context.allowIn = previousAllowIn;
                    if (this.matchKeyword("in")) {
                      if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInForIn);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(init);
                      left = init;
                      right = this.parseExpression();
                      init = null;
                    } else if (this.matchContextualKeyword("of")) {
                      if (!this.context.isAssignmentTarget || init.type === syntax_1.Syntax.AssignmentExpression) {
                        this.tolerateError(messages_1.Messages.InvalidLHSInForLoop);
                      }
                      this.nextToken();
                      this.reinterpretExpressionAsPattern(init);
                      left = init;
                      right = this.parseAssignmentExpression();
                      init = null;
                      forIn = false;
                    } else {
                      if (this.match(",")) {
                        var initSeq = [init];
                        while (this.match(",")) {
                          this.nextToken();
                          initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression));
                        }
                        init = this.finalize(this.startNode(initStartToken), new Node.SequenceExpression(initSeq));
                      }
                      this.expect(";");
                    }
                  }
                }
                if (typeof left === "undefined") {
                  if (!this.match(";")) {
                    test = this.parseExpression();
                  }
                  this.expect(";");
                  if (!this.match(")")) {
                    update = this.parseExpression();
                  }
                }
                var body2;
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body2 = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  var previousInIteration = this.context.inIteration;
                  this.context.inIteration = true;
                  body2 = this.isolateCoverGrammar(this.parseStatement);
                  this.context.inIteration = previousInIteration;
                }
                return typeof left === "undefined" ? this.finalize(node, new Node.ForStatement(init, test, update, body2)) : forIn ? this.finalize(node, new Node.ForInStatement(left, right, body2)) : this.finalize(node, new Node.ForOfStatement(left, right, body2));
              };
              Parser2.prototype.parseContinueStatement = function() {
                var node = this.createNode();
                this.expectKeyword("continue");
                var label = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var id = this.parseVariableIdentifier();
                  label = id;
                  var key = "$" + id.name;
                  if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.UnknownLabel, id.name);
                  }
                }
                this.consumeSemicolon();
                if (label === null && !this.context.inIteration) {
                  this.throwError(messages_1.Messages.IllegalContinue);
                }
                return this.finalize(node, new Node.ContinueStatement(label));
              };
              Parser2.prototype.parseBreakStatement = function() {
                var node = this.createNode();
                this.expectKeyword("break");
                var label = null;
                if (this.lookahead.type === 3 && !this.hasLineTerminator) {
                  var id = this.parseVariableIdentifier();
                  var key = "$" + id.name;
                  if (!Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.UnknownLabel, id.name);
                  }
                  label = id;
                }
                this.consumeSemicolon();
                if (label === null && !this.context.inIteration && !this.context.inSwitch) {
                  this.throwError(messages_1.Messages.IllegalBreak);
                }
                return this.finalize(node, new Node.BreakStatement(label));
              };
              Parser2.prototype.parseReturnStatement = function() {
                if (!this.context.inFunctionBody) {
                  this.tolerateError(messages_1.Messages.IllegalReturn);
                }
                var node = this.createNode();
                this.expectKeyword("return");
                var hasArgument = !this.match(";") && !this.match("}") && !this.hasLineTerminator && this.lookahead.type !== 2 || this.lookahead.type === 8 || this.lookahead.type === 10;
                var argument = hasArgument ? this.parseExpression() : null;
                this.consumeSemicolon();
                return this.finalize(node, new Node.ReturnStatement(argument));
              };
              Parser2.prototype.parseWithStatement = function() {
                if (this.context.strict) {
                  this.tolerateError(messages_1.Messages.StrictModeWith);
                }
                var node = this.createNode();
                var body2;
                this.expectKeyword("with");
                this.expect("(");
                var object = this.parseExpression();
                if (!this.match(")") && this.config.tolerant) {
                  this.tolerateUnexpectedToken(this.nextToken());
                  body2 = this.finalize(this.createNode(), new Node.EmptyStatement());
                } else {
                  this.expect(")");
                  body2 = this.parseStatement();
                }
                return this.finalize(node, new Node.WithStatement(object, body2));
              };
              Parser2.prototype.parseSwitchCase = function() {
                var node = this.createNode();
                var test;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  test = null;
                } else {
                  this.expectKeyword("case");
                  test = this.parseExpression();
                }
                this.expect(":");
                var consequent = [];
                while (true) {
                  if (this.match("}") || this.matchKeyword("default") || this.matchKeyword("case")) {
                    break;
                  }
                  consequent.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.SwitchCase(test, consequent));
              };
              Parser2.prototype.parseSwitchStatement = function() {
                var node = this.createNode();
                this.expectKeyword("switch");
                this.expect("(");
                var discriminant = this.parseExpression();
                this.expect(")");
                var previousInSwitch = this.context.inSwitch;
                this.context.inSwitch = true;
                var cases = [];
                var defaultFound = false;
                this.expect("{");
                while (true) {
                  if (this.match("}")) {
                    break;
                  }
                  var clause = this.parseSwitchCase();
                  if (clause.test === null) {
                    if (defaultFound) {
                      this.throwError(messages_1.Messages.MultipleDefaultsInSwitch);
                    }
                    defaultFound = true;
                  }
                  cases.push(clause);
                }
                this.expect("}");
                this.context.inSwitch = previousInSwitch;
                return this.finalize(node, new Node.SwitchStatement(discriminant, cases));
              };
              Parser2.prototype.parseLabelledStatement = function() {
                var node = this.createNode();
                var expr = this.parseExpression();
                var statement;
                if (expr.type === syntax_1.Syntax.Identifier && this.match(":")) {
                  this.nextToken();
                  var id = expr;
                  var key = "$" + id.name;
                  if (Object.prototype.hasOwnProperty.call(this.context.labelSet, key)) {
                    this.throwError(messages_1.Messages.Redeclaration, "Label", id.name);
                  }
                  this.context.labelSet[key] = true;
                  var body2 = void 0;
                  if (this.matchKeyword("class")) {
                    this.tolerateUnexpectedToken(this.lookahead);
                    body2 = this.parseClassDeclaration();
                  } else if (this.matchKeyword("function")) {
                    var token = this.lookahead;
                    var declaration = this.parseFunctionDeclaration();
                    if (this.context.strict) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunction);
                    } else if (declaration.generator) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.GeneratorInLegacyContext);
                    }
                    body2 = declaration;
                  } else {
                    body2 = this.parseStatement();
                  }
                  delete this.context.labelSet[key];
                  statement = new Node.LabeledStatement(id, body2);
                } else {
                  this.consumeSemicolon();
                  statement = new Node.ExpressionStatement(expr);
                }
                return this.finalize(node, statement);
              };
              Parser2.prototype.parseThrowStatement = function() {
                var node = this.createNode();
                this.expectKeyword("throw");
                if (this.hasLineTerminator) {
                  this.throwError(messages_1.Messages.NewlineAfterThrow);
                }
                var argument = this.parseExpression();
                this.consumeSemicolon();
                return this.finalize(node, new Node.ThrowStatement(argument));
              };
              Parser2.prototype.parseCatchClause = function() {
                var node = this.createNode();
                this.expectKeyword("catch");
                this.expect("(");
                if (this.match(")")) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                var params = [];
                var param = this.parsePattern(params);
                var paramMap = {};
                for (var i = 0; i < params.length; i++) {
                  var key = "$" + params[i].value;
                  if (Object.prototype.hasOwnProperty.call(paramMap, key)) {
                    this.tolerateError(messages_1.Messages.DuplicateBinding, params[i].value);
                  }
                  paramMap[key] = true;
                }
                if (this.context.strict && param.type === syntax_1.Syntax.Identifier) {
                  if (this.scanner.isRestrictedWord(param.name)) {
                    this.tolerateError(messages_1.Messages.StrictCatchVariable);
                  }
                }
                this.expect(")");
                var body2 = this.parseBlock();
                return this.finalize(node, new Node.CatchClause(param, body2));
              };
              Parser2.prototype.parseFinallyClause = function() {
                this.expectKeyword("finally");
                return this.parseBlock();
              };
              Parser2.prototype.parseTryStatement = function() {
                var node = this.createNode();
                this.expectKeyword("try");
                var block2 = this.parseBlock();
                var handler = this.matchKeyword("catch") ? this.parseCatchClause() : null;
                var finalizer = this.matchKeyword("finally") ? this.parseFinallyClause() : null;
                if (!handler && !finalizer) {
                  this.throwError(messages_1.Messages.NoCatchOrFinally);
                }
                return this.finalize(node, new Node.TryStatement(block2, handler, finalizer));
              };
              Parser2.prototype.parseDebuggerStatement = function() {
                var node = this.createNode();
                this.expectKeyword("debugger");
                this.consumeSemicolon();
                return this.finalize(node, new Node.DebuggerStatement());
              };
              Parser2.prototype.parseStatement = function() {
                var statement;
                switch (this.lookahead.type) {
                  case 1:
                  case 5:
                  case 6:
                  case 8:
                  case 10:
                  case 9:
                    statement = this.parseExpressionStatement();
                    break;
                  case 7:
                    var value = this.lookahead.value;
                    if (value === "{") {
                      statement = this.parseBlock();
                    } else if (value === "(") {
                      statement = this.parseExpressionStatement();
                    } else if (value === ";") {
                      statement = this.parseEmptyStatement();
                    } else {
                      statement = this.parseExpressionStatement();
                    }
                    break;
                  case 3:
                    statement = this.matchAsyncFunction() ? this.parseFunctionDeclaration() : this.parseLabelledStatement();
                    break;
                  case 4:
                    switch (this.lookahead.value) {
                      case "break":
                        statement = this.parseBreakStatement();
                        break;
                      case "continue":
                        statement = this.parseContinueStatement();
                        break;
                      case "debugger":
                        statement = this.parseDebuggerStatement();
                        break;
                      case "do":
                        statement = this.parseDoWhileStatement();
                        break;
                      case "for":
                        statement = this.parseForStatement();
                        break;
                      case "function":
                        statement = this.parseFunctionDeclaration();
                        break;
                      case "if":
                        statement = this.parseIfStatement();
                        break;
                      case "return":
                        statement = this.parseReturnStatement();
                        break;
                      case "switch":
                        statement = this.parseSwitchStatement();
                        break;
                      case "throw":
                        statement = this.parseThrowStatement();
                        break;
                      case "try":
                        statement = this.parseTryStatement();
                        break;
                      case "var":
                        statement = this.parseVariableStatement();
                        break;
                      case "while":
                        statement = this.parseWhileStatement();
                        break;
                      case "with":
                        statement = this.parseWithStatement();
                        break;
                      default:
                        statement = this.parseExpressionStatement();
                        break;
                    }
                    break;
                  default:
                    statement = this.throwUnexpectedToken(this.lookahead);
                }
                return statement;
              };
              Parser2.prototype.parseFunctionSourceElements = function() {
                var node = this.createNode();
                this.expect("{");
                var body2 = this.parseDirectivePrologues();
                var previousLabelSet = this.context.labelSet;
                var previousInIteration = this.context.inIteration;
                var previousInSwitch = this.context.inSwitch;
                var previousInFunctionBody = this.context.inFunctionBody;
                this.context.labelSet = {};
                this.context.inIteration = false;
                this.context.inSwitch = false;
                this.context.inFunctionBody = true;
                while (this.lookahead.type !== 2) {
                  if (this.match("}")) {
                    break;
                  }
                  body2.push(this.parseStatementListItem());
                }
                this.expect("}");
                this.context.labelSet = previousLabelSet;
                this.context.inIteration = previousInIteration;
                this.context.inSwitch = previousInSwitch;
                this.context.inFunctionBody = previousInFunctionBody;
                return this.finalize(node, new Node.BlockStatement(body2));
              };
              Parser2.prototype.validateParam = function(options2, param, name) {
                var key = "$" + name;
                if (this.context.strict) {
                  if (this.scanner.isRestrictedWord(name)) {
                    options2.stricted = param;
                    options2.message = messages_1.Messages.StrictParamName;
                  }
                  if (Object.prototype.hasOwnProperty.call(options2.paramSet, key)) {
                    options2.stricted = param;
                    options2.message = messages_1.Messages.StrictParamDupe;
                  }
                } else if (!options2.firstRestricted) {
                  if (this.scanner.isRestrictedWord(name)) {
                    options2.firstRestricted = param;
                    options2.message = messages_1.Messages.StrictParamName;
                  } else if (this.scanner.isStrictModeReservedWord(name)) {
                    options2.firstRestricted = param;
                    options2.message = messages_1.Messages.StrictReservedWord;
                  } else if (Object.prototype.hasOwnProperty.call(options2.paramSet, key)) {
                    options2.stricted = param;
                    options2.message = messages_1.Messages.StrictParamDupe;
                  }
                }
                if (typeof Object.defineProperty === "function") {
                  Object.defineProperty(options2.paramSet, key, { value: true, enumerable: true, writable: true, configurable: true });
                } else {
                  options2.paramSet[key] = true;
                }
              };
              Parser2.prototype.parseRestElement = function(params) {
                var node = this.createNode();
                this.expect("...");
                var arg = this.parsePattern(params);
                if (this.match("=")) {
                  this.throwError(messages_1.Messages.DefaultRestParameter);
                }
                if (!this.match(")")) {
                  this.throwError(messages_1.Messages.ParameterAfterRestParameter);
                }
                return this.finalize(node, new Node.RestElement(arg));
              };
              Parser2.prototype.parseFormalParameter = function(options2) {
                var params = [];
                var param = this.match("...") ? this.parseRestElement(params) : this.parsePatternWithDefault(params);
                for (var i = 0; i < params.length; i++) {
                  this.validateParam(options2, params[i], params[i].value);
                }
                options2.simple = options2.simple && param instanceof Node.Identifier;
                options2.params.push(param);
              };
              Parser2.prototype.parseFormalParameters = function(firstRestricted) {
                var options2;
                options2 = {
                  simple: true,
                  params: [],
                  firstRestricted
                };
                this.expect("(");
                if (!this.match(")")) {
                  options2.paramSet = {};
                  while (this.lookahead.type !== 2) {
                    this.parseFormalParameter(options2);
                    if (this.match(")")) {
                      break;
                    }
                    this.expect(",");
                    if (this.match(")")) {
                      break;
                    }
                  }
                }
                this.expect(")");
                return {
                  simple: options2.simple,
                  params: options2.params,
                  stricted: options2.stricted,
                  firstRestricted: options2.firstRestricted,
                  message: options2.message
                };
              };
              Parser2.prototype.matchAsyncFunction = function() {
                var match = this.matchContextualKeyword("async");
                if (match) {
                  var state = this.scanner.saveState();
                  this.scanner.scanComments();
                  var next = this.scanner.lex();
                  this.scanner.restoreState(state);
                  match = state.lineNumber === next.lineNumber && next.type === 4 && next.value === "function";
                }
                return match;
              };
              Parser2.prototype.parseFunctionDeclaration = function(identifierIsOptional) {
                var node = this.createNode();
                var isAsync = this.matchContextualKeyword("async");
                if (isAsync) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var isGenerator = isAsync ? false : this.match("*");
                if (isGenerator) {
                  this.nextToken();
                }
                var message;
                var id = null;
                var firstRestricted = null;
                if (!identifierIsOptional || !this.match("(")) {
                  var token = this.lookahead;
                  id = this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictReservedWord;
                    }
                  }
                }
                var previousAllowAwait = this.context.await;
                var previousAllowYield = this.context.allowYield;
                this.context.await = isAsync;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters(firstRestricted);
                var params = formalParameters.params;
                var stricted = formalParameters.stricted;
                firstRestricted = formalParameters.firstRestricted;
                if (formalParameters.message) {
                  message = formalParameters.message;
                }
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = formalParameters.simple;
                var body2 = this.parseFunctionSourceElements();
                if (this.context.strict && firstRestricted) {
                  this.throwUnexpectedToken(firstRestricted, message);
                }
                if (this.context.strict && stricted) {
                  this.tolerateUnexpectedToken(stricted, message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                this.context.await = previousAllowAwait;
                this.context.allowYield = previousAllowYield;
                return isAsync ? this.finalize(node, new Node.AsyncFunctionDeclaration(id, params, body2)) : this.finalize(node, new Node.FunctionDeclaration(id, params, body2, isGenerator));
              };
              Parser2.prototype.parseFunctionExpression = function() {
                var node = this.createNode();
                var isAsync = this.matchContextualKeyword("async");
                if (isAsync) {
                  this.nextToken();
                }
                this.expectKeyword("function");
                var isGenerator = isAsync ? false : this.match("*");
                if (isGenerator) {
                  this.nextToken();
                }
                var message;
                var id = null;
                var firstRestricted;
                var previousAllowAwait = this.context.await;
                var previousAllowYield = this.context.allowYield;
                this.context.await = isAsync;
                this.context.allowYield = !isGenerator;
                if (!this.match("(")) {
                  var token = this.lookahead;
                  id = !this.context.strict && !isGenerator && this.matchKeyword("yield") ? this.parseIdentifierName() : this.parseVariableIdentifier();
                  if (this.context.strict) {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.StrictFunctionName);
                    }
                  } else {
                    if (this.scanner.isRestrictedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictFunctionName;
                    } else if (this.scanner.isStrictModeReservedWord(token.value)) {
                      firstRestricted = token;
                      message = messages_1.Messages.StrictReservedWord;
                    }
                  }
                }
                var formalParameters = this.parseFormalParameters(firstRestricted);
                var params = formalParameters.params;
                var stricted = formalParameters.stricted;
                firstRestricted = formalParameters.firstRestricted;
                if (formalParameters.message) {
                  message = formalParameters.message;
                }
                var previousStrict = this.context.strict;
                var previousAllowStrictDirective = this.context.allowStrictDirective;
                this.context.allowStrictDirective = formalParameters.simple;
                var body2 = this.parseFunctionSourceElements();
                if (this.context.strict && firstRestricted) {
                  this.throwUnexpectedToken(firstRestricted, message);
                }
                if (this.context.strict && stricted) {
                  this.tolerateUnexpectedToken(stricted, message);
                }
                this.context.strict = previousStrict;
                this.context.allowStrictDirective = previousAllowStrictDirective;
                this.context.await = previousAllowAwait;
                this.context.allowYield = previousAllowYield;
                return isAsync ? this.finalize(node, new Node.AsyncFunctionExpression(id, params, body2)) : this.finalize(node, new Node.FunctionExpression(id, params, body2, isGenerator));
              };
              Parser2.prototype.parseDirective = function() {
                var token = this.lookahead;
                var node = this.createNode();
                var expr = this.parseExpression();
                var directive = expr.type === syntax_1.Syntax.Literal ? this.getTokenRaw(token).slice(1, -1) : null;
                this.consumeSemicolon();
                return this.finalize(node, directive ? new Node.Directive(expr, directive) : new Node.ExpressionStatement(expr));
              };
              Parser2.prototype.parseDirectivePrologues = function() {
                var firstRestricted = null;
                var body2 = [];
                while (true) {
                  var token = this.lookahead;
                  if (token.type !== 8) {
                    break;
                  }
                  var statement = this.parseDirective();
                  body2.push(statement);
                  var directive = statement.directive;
                  if (typeof directive !== "string") {
                    break;
                  }
                  if (directive === "use strict") {
                    this.context.strict = true;
                    if (firstRestricted) {
                      this.tolerateUnexpectedToken(firstRestricted, messages_1.Messages.StrictOctalLiteral);
                    }
                    if (!this.context.allowStrictDirective) {
                      this.tolerateUnexpectedToken(token, messages_1.Messages.IllegalLanguageModeDirective);
                    }
                  } else {
                    if (!firstRestricted && token.octal) {
                      firstRestricted = token;
                    }
                  }
                }
                return body2;
              };
              Parser2.prototype.qualifiedPropertyName = function(token) {
                switch (token.type) {
                  case 3:
                  case 8:
                  case 1:
                  case 5:
                  case 6:
                  case 4:
                    return true;
                  case 7:
                    return token.value === "[";
                }
                return false;
              };
              Parser2.prototype.parseGetterMethod = function() {
                var node = this.createNode();
                var isGenerator = false;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters();
                if (formalParameters.params.length > 0) {
                  this.tolerateError(messages_1.Messages.BadGetterArity);
                }
                var method = this.parsePropertyMethod(formalParameters);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
              };
              Parser2.prototype.parseSetterMethod = function() {
                var node = this.createNode();
                var isGenerator = false;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = !isGenerator;
                var formalParameters = this.parseFormalParameters();
                if (formalParameters.params.length !== 1) {
                  this.tolerateError(messages_1.Messages.BadSetterArity);
                } else if (formalParameters.params[0] instanceof Node.RestElement) {
                  this.tolerateError(messages_1.Messages.BadSetterRestParameter);
                }
                var method = this.parsePropertyMethod(formalParameters);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, formalParameters.params, method, isGenerator));
              };
              Parser2.prototype.parseGeneratorMethod = function() {
                var node = this.createNode();
                var isGenerator = true;
                var previousAllowYield = this.context.allowYield;
                this.context.allowYield = true;
                var params = this.parseFormalParameters();
                this.context.allowYield = false;
                var method = this.parsePropertyMethod(params);
                this.context.allowYield = previousAllowYield;
                return this.finalize(node, new Node.FunctionExpression(null, params.params, method, isGenerator));
              };
              Parser2.prototype.isStartOfExpression = function() {
                var start = true;
                var value = this.lookahead.value;
                switch (this.lookahead.type) {
                  case 7:
                    start = value === "[" || value === "(" || value === "{" || value === "+" || value === "-" || value === "!" || value === "~" || value === "++" || value === "--" || value === "/" || value === "/=";
                    break;
                  case 4:
                    start = value === "class" || value === "delete" || value === "function" || value === "let" || value === "new" || value === "super" || value === "this" || value === "typeof" || value === "void" || value === "yield";
                    break;
                }
                return start;
              };
              Parser2.prototype.parseYieldExpression = function() {
                var node = this.createNode();
                this.expectKeyword("yield");
                var argument = null;
                var delegate = false;
                if (!this.hasLineTerminator) {
                  var previousAllowYield = this.context.allowYield;
                  this.context.allowYield = false;
                  delegate = this.match("*");
                  if (delegate) {
                    this.nextToken();
                    argument = this.parseAssignmentExpression();
                  } else if (this.isStartOfExpression()) {
                    argument = this.parseAssignmentExpression();
                  }
                  this.context.allowYield = previousAllowYield;
                }
                return this.finalize(node, new Node.YieldExpression(argument, delegate));
              };
              Parser2.prototype.parseClassElement = function(hasConstructor) {
                var token = this.lookahead;
                var node = this.createNode();
                var kind = "";
                var key = null;
                var value = null;
                var computed = false;
                var method = false;
                var isStatic = false;
                var isAsync = false;
                if (this.match("*")) {
                  this.nextToken();
                } else {
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  var id = key;
                  if (id.name === "static" && (this.qualifiedPropertyName(this.lookahead) || this.match("*"))) {
                    token = this.lookahead;
                    isStatic = true;
                    computed = this.match("[");
                    if (this.match("*")) {
                      this.nextToken();
                    } else {
                      key = this.parseObjectPropertyKey();
                    }
                  }
                  if (token.type === 3 && !this.hasLineTerminator && token.value === "async") {
                    var punctuator = this.lookahead.value;
                    if (punctuator !== ":" && punctuator !== "(" && punctuator !== "*") {
                      isAsync = true;
                      token = this.lookahead;
                      key = this.parseObjectPropertyKey();
                      if (token.type === 3 && token.value === "constructor") {
                        this.tolerateUnexpectedToken(token, messages_1.Messages.ConstructorIsAsync);
                      }
                    }
                  }
                }
                var lookaheadPropertyKey = this.qualifiedPropertyName(this.lookahead);
                if (token.type === 3) {
                  if (token.value === "get" && lookaheadPropertyKey) {
                    kind = "get";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    this.context.allowYield = false;
                    value = this.parseGetterMethod();
                  } else if (token.value === "set" && lookaheadPropertyKey) {
                    kind = "set";
                    computed = this.match("[");
                    key = this.parseObjectPropertyKey();
                    value = this.parseSetterMethod();
                  }
                } else if (token.type === 7 && token.value === "*" && lookaheadPropertyKey) {
                  kind = "init";
                  computed = this.match("[");
                  key = this.parseObjectPropertyKey();
                  value = this.parseGeneratorMethod();
                  method = true;
                }
                if (!kind && key && this.match("(")) {
                  kind = "init";
                  value = isAsync ? this.parsePropertyMethodAsyncFunction() : this.parsePropertyMethodFunction();
                  method = true;
                }
                if (!kind) {
                  this.throwUnexpectedToken(this.lookahead);
                }
                if (kind === "init") {
                  kind = "method";
                }
                if (!computed) {
                  if (isStatic && this.isPropertyKey(key, "prototype")) {
                    this.throwUnexpectedToken(token, messages_1.Messages.StaticPrototype);
                  }
                  if (!isStatic && this.isPropertyKey(key, "constructor")) {
                    if (kind !== "method" || !method || value && value.generator) {
                      this.throwUnexpectedToken(token, messages_1.Messages.ConstructorSpecialMethod);
                    }
                    if (hasConstructor.value) {
                      this.throwUnexpectedToken(token, messages_1.Messages.DuplicateConstructor);
                    } else {
                      hasConstructor.value = true;
                    }
                    kind = "constructor";
                  }
                }
                return this.finalize(node, new Node.MethodDefinition(key, computed, value, kind, isStatic));
              };
              Parser2.prototype.parseClassElementList = function() {
                var body2 = [];
                var hasConstructor = { value: false };
                this.expect("{");
                while (!this.match("}")) {
                  if (this.match(";")) {
                    this.nextToken();
                  } else {
                    body2.push(this.parseClassElement(hasConstructor));
                  }
                }
                this.expect("}");
                return body2;
              };
              Parser2.prototype.parseClassBody = function() {
                var node = this.createNode();
                var elementList = this.parseClassElementList();
                return this.finalize(node, new Node.ClassBody(elementList));
              };
              Parser2.prototype.parseClassDeclaration = function(identifierIsOptional) {
                var node = this.createNode();
                var previousStrict = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var id = identifierIsOptional && this.lookahead.type !== 3 ? null : this.parseVariableIdentifier();
                var superClass = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                }
                var classBody = this.parseClassBody();
                this.context.strict = previousStrict;
                return this.finalize(node, new Node.ClassDeclaration(id, superClass, classBody));
              };
              Parser2.prototype.parseClassExpression = function() {
                var node = this.createNode();
                var previousStrict = this.context.strict;
                this.context.strict = true;
                this.expectKeyword("class");
                var id = this.lookahead.type === 3 ? this.parseVariableIdentifier() : null;
                var superClass = null;
                if (this.matchKeyword("extends")) {
                  this.nextToken();
                  superClass = this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall);
                }
                var classBody = this.parseClassBody();
                this.context.strict = previousStrict;
                return this.finalize(node, new Node.ClassExpression(id, superClass, classBody));
              };
              Parser2.prototype.parseModule = function() {
                this.context.strict = true;
                this.context.isModule = true;
                this.scanner.isModule = true;
                var node = this.createNode();
                var body2 = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  body2.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.Module(body2));
              };
              Parser2.prototype.parseScript = function() {
                var node = this.createNode();
                var body2 = this.parseDirectivePrologues();
                while (this.lookahead.type !== 2) {
                  body2.push(this.parseStatementListItem());
                }
                return this.finalize(node, new Node.Script(body2));
              };
              Parser2.prototype.parseModuleSpecifier = function() {
                var node = this.createNode();
                if (this.lookahead.type !== 8) {
                  this.throwError(messages_1.Messages.InvalidModuleSpecifier);
                }
                var token = this.nextToken();
                var raw = this.getTokenRaw(token);
                return this.finalize(node, new Node.Literal(token.value, raw));
              };
              Parser2.prototype.parseImportSpecifier = function() {
                var node = this.createNode();
                var imported;
                var local;
                if (this.lookahead.type === 3) {
                  imported = this.parseVariableIdentifier();
                  local = imported;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    local = this.parseVariableIdentifier();
                  }
                } else {
                  imported = this.parseIdentifierName();
                  local = imported;
                  if (this.matchContextualKeyword("as")) {
                    this.nextToken();
                    local = this.parseVariableIdentifier();
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                }
                return this.finalize(node, new Node.ImportSpecifier(local, imported));
              };
              Parser2.prototype.parseNamedImports = function() {
                this.expect("{");
                var specifiers = [];
                while (!this.match("}")) {
                  specifiers.push(this.parseImportSpecifier());
                  if (!this.match("}")) {
                    this.expect(",");
                  }
                }
                this.expect("}");
                return specifiers;
              };
              Parser2.prototype.parseImportDefaultSpecifier = function() {
                var node = this.createNode();
                var local = this.parseIdentifierName();
                return this.finalize(node, new Node.ImportDefaultSpecifier(local));
              };
              Parser2.prototype.parseImportNamespaceSpecifier = function() {
                var node = this.createNode();
                this.expect("*");
                if (!this.matchContextualKeyword("as")) {
                  this.throwError(messages_1.Messages.NoAsAfterImportNamespace);
                }
                this.nextToken();
                var local = this.parseIdentifierName();
                return this.finalize(node, new Node.ImportNamespaceSpecifier(local));
              };
              Parser2.prototype.parseImportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(messages_1.Messages.IllegalImportDeclaration);
                }
                var node = this.createNode();
                this.expectKeyword("import");
                var src2;
                var specifiers = [];
                if (this.lookahead.type === 8) {
                  src2 = this.parseModuleSpecifier();
                } else {
                  if (this.match("{")) {
                    specifiers = specifiers.concat(this.parseNamedImports());
                  } else if (this.match("*")) {
                    specifiers.push(this.parseImportNamespaceSpecifier());
                  } else if (this.isIdentifierName(this.lookahead) && !this.matchKeyword("default")) {
                    specifiers.push(this.parseImportDefaultSpecifier());
                    if (this.match(",")) {
                      this.nextToken();
                      if (this.match("*")) {
                        specifiers.push(this.parseImportNamespaceSpecifier());
                      } else if (this.match("{")) {
                        specifiers = specifiers.concat(this.parseNamedImports());
                      } else {
                        this.throwUnexpectedToken(this.lookahead);
                      }
                    }
                  } else {
                    this.throwUnexpectedToken(this.nextToken());
                  }
                  if (!this.matchContextualKeyword("from")) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  }
                  this.nextToken();
                  src2 = this.parseModuleSpecifier();
                }
                this.consumeSemicolon();
                return this.finalize(node, new Node.ImportDeclaration(specifiers, src2));
              };
              Parser2.prototype.parseExportSpecifier = function() {
                var node = this.createNode();
                var local = this.parseIdentifierName();
                var exported = local;
                if (this.matchContextualKeyword("as")) {
                  this.nextToken();
                  exported = this.parseIdentifierName();
                }
                return this.finalize(node, new Node.ExportSpecifier(local, exported));
              };
              Parser2.prototype.parseExportDeclaration = function() {
                if (this.context.inFunctionBody) {
                  this.throwError(messages_1.Messages.IllegalExportDeclaration);
                }
                var node = this.createNode();
                this.expectKeyword("export");
                var exportDeclaration;
                if (this.matchKeyword("default")) {
                  this.nextToken();
                  if (this.matchKeyword("function")) {
                    var declaration = this.parseFunctionDeclaration(true);
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else if (this.matchKeyword("class")) {
                    var declaration = this.parseClassDeclaration(true);
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else if (this.matchContextualKeyword("async")) {
                    var declaration = this.matchAsyncFunction() ? this.parseFunctionDeclaration(true) : this.parseAssignmentExpression();
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  } else {
                    if (this.matchContextualKeyword("from")) {
                      this.throwError(messages_1.Messages.UnexpectedToken, this.lookahead.value);
                    }
                    var declaration = this.match("{") ? this.parseObjectInitializer() : this.match("[") ? this.parseArrayInitializer() : this.parseAssignmentExpression();
                    this.consumeSemicolon();
                    exportDeclaration = this.finalize(node, new Node.ExportDefaultDeclaration(declaration));
                  }
                } else if (this.match("*")) {
                  this.nextToken();
                  if (!this.matchContextualKeyword("from")) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  }
                  this.nextToken();
                  var src2 = this.parseModuleSpecifier();
                  this.consumeSemicolon();
                  exportDeclaration = this.finalize(node, new Node.ExportAllDeclaration(src2));
                } else if (this.lookahead.type === 4) {
                  var declaration = void 0;
                  switch (this.lookahead.value) {
                    case "let":
                    case "const":
                      declaration = this.parseLexicalDeclaration({ inFor: false });
                      break;
                    case "var":
                    case "class":
                    case "function":
                      declaration = this.parseStatementListItem();
                      break;
                    default:
                      this.throwUnexpectedToken(this.lookahead);
                  }
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                } else if (this.matchAsyncFunction()) {
                  var declaration = this.parseFunctionDeclaration();
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(declaration, [], null));
                } else {
                  var specifiers = [];
                  var source = null;
                  var isExportFromIdentifier = false;
                  this.expect("{");
                  while (!this.match("}")) {
                    isExportFromIdentifier = isExportFromIdentifier || this.matchKeyword("default");
                    specifiers.push(this.parseExportSpecifier());
                    if (!this.match("}")) {
                      this.expect(",");
                    }
                  }
                  this.expect("}");
                  if (this.matchContextualKeyword("from")) {
                    this.nextToken();
                    source = this.parseModuleSpecifier();
                    this.consumeSemicolon();
                  } else if (isExportFromIdentifier) {
                    var message = this.lookahead.value ? messages_1.Messages.UnexpectedToken : messages_1.Messages.MissingFromClause;
                    this.throwError(message, this.lookahead.value);
                  } else {
                    this.consumeSemicolon();
                  }
                  exportDeclaration = this.finalize(node, new Node.ExportNamedDeclaration(null, specifiers, source));
                }
                return exportDeclaration;
              };
              return Parser2;
            }();
            exports3.Parser = Parser;
          },
          /* 9 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            function assert(condition, message) {
              if (!condition) {
                throw new Error("ASSERT: " + message);
              }
            }
            exports3.assert = assert;
          },
          /* 10 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var ErrorHandler = function() {
              function ErrorHandler2() {
                this.errors = [];
                this.tolerant = false;
              }
              ErrorHandler2.prototype.recordError = function(error) {
                this.errors.push(error);
              };
              ErrorHandler2.prototype.tolerate = function(error) {
                if (this.tolerant) {
                  this.recordError(error);
                } else {
                  throw error;
                }
              };
              ErrorHandler2.prototype.constructError = function(msg, column) {
                var error = new Error(msg);
                try {
                  throw error;
                } catch (base) {
                  if (Object.create && Object.defineProperty) {
                    error = Object.create(base);
                    Object.defineProperty(error, "column", { value: column });
                  }
                }
                return error;
              };
              ErrorHandler2.prototype.createError = function(index, line, col, description) {
                var msg = "Line " + line + ": " + description;
                var error = this.constructError(msg, col);
                error.index = index;
                error.lineNumber = line;
                error.description = description;
                return error;
              };
              ErrorHandler2.prototype.throwError = function(index, line, col, description) {
                throw this.createError(index, line, col, description);
              };
              ErrorHandler2.prototype.tolerateError = function(index, line, col, description) {
                var error = this.createError(index, line, col, description);
                if (this.tolerant) {
                  this.recordError(error);
                } else {
                  throw error;
                }
              };
              return ErrorHandler2;
            }();
            exports3.ErrorHandler = ErrorHandler;
          },
          /* 11 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.Messages = {
              BadGetterArity: "Getter must not have any formal parameters",
              BadSetterArity: "Setter must have exactly one formal parameter",
              BadSetterRestParameter: "Setter function argument must not be a rest parameter",
              ConstructorIsAsync: "Class constructor may not be an async method",
              ConstructorSpecialMethod: "Class constructor may not be an accessor",
              DeclarationMissingInitializer: "Missing initializer in %0 declaration",
              DefaultRestParameter: "Unexpected token =",
              DuplicateBinding: "Duplicate binding %0",
              DuplicateConstructor: "A class may only have one constructor",
              DuplicateProtoProperty: "Duplicate __proto__ fields are not allowed in object literals",
              ForInOfLoopInitializer: "%0 loop variable declaration may not have an initializer",
              GeneratorInLegacyContext: "Generator declarations are not allowed in legacy contexts",
              IllegalBreak: "Illegal break statement",
              IllegalContinue: "Illegal continue statement",
              IllegalExportDeclaration: "Unexpected token",
              IllegalImportDeclaration: "Unexpected token",
              IllegalLanguageModeDirective: "Illegal 'use strict' directive in function with non-simple parameter list",
              IllegalReturn: "Illegal return statement",
              InvalidEscapedReservedWord: "Keyword must not contain escaped characters",
              InvalidHexEscapeSequence: "Invalid hexadecimal escape sequence",
              InvalidLHSInAssignment: "Invalid left-hand side in assignment",
              InvalidLHSInForIn: "Invalid left-hand side in for-in",
              InvalidLHSInForLoop: "Invalid left-hand side in for-loop",
              InvalidModuleSpecifier: "Unexpected token",
              InvalidRegExp: "Invalid regular expression",
              LetInLexicalBinding: "let is disallowed as a lexically bound name",
              MissingFromClause: "Unexpected token",
              MultipleDefaultsInSwitch: "More than one default clause in switch statement",
              NewlineAfterThrow: "Illegal newline after throw",
              NoAsAfterImportNamespace: "Unexpected token",
              NoCatchOrFinally: "Missing catch or finally after try",
              ParameterAfterRestParameter: "Rest parameter must be last formal parameter",
              Redeclaration: "%0 '%1' has already been declared",
              StaticPrototype: "Classes may not have static property named prototype",
              StrictCatchVariable: "Catch variable may not be eval or arguments in strict mode",
              StrictDelete: "Delete of an unqualified identifier in strict mode.",
              StrictFunction: "In strict mode code, functions can only be declared at top level or inside a block",
              StrictFunctionName: "Function name may not be eval or arguments in strict mode",
              StrictLHSAssignment: "Assignment to eval or arguments is not allowed in strict mode",
              StrictLHSPostfix: "Postfix increment/decrement may not have eval or arguments operand in strict mode",
              StrictLHSPrefix: "Prefix increment/decrement may not have eval or arguments operand in strict mode",
              StrictModeWith: "Strict mode code may not include a with statement",
              StrictOctalLiteral: "Octal literals are not allowed in strict mode.",
              StrictParamDupe: "Strict mode function may not have duplicate parameter names",
              StrictParamName: "Parameter name eval or arguments is not allowed in strict mode",
              StrictReservedWord: "Use of future reserved word in strict mode",
              StrictVarName: "Variable name may not be eval or arguments in strict mode",
              TemplateOctalLiteral: "Octal literals are not allowed in template strings.",
              UnexpectedEOS: "Unexpected end of input",
              UnexpectedIdentifier: "Unexpected identifier",
              UnexpectedNumber: "Unexpected number",
              UnexpectedReserved: "Unexpected reserved word",
              UnexpectedString: "Unexpected string",
              UnexpectedTemplate: "Unexpected quasi %0",
              UnexpectedToken: "Unexpected token %0",
              UnexpectedTokenIllegal: "Unexpected token ILLEGAL",
              UnknownLabel: "Undefined label '%0'",
              UnterminatedRegExp: "Invalid regular expression: missing /"
            };
          },
          /* 12 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var assert_1 = __webpack_require__(9);
            var character_1 = __webpack_require__(4);
            var messages_1 = __webpack_require__(11);
            function hexValue(ch) {
              return "0123456789abcdef".indexOf(ch.toLowerCase());
            }
            function octalValue(ch) {
              return "01234567".indexOf(ch);
            }
            var Scanner = function() {
              function Scanner2(code2, handler) {
                this.source = code2;
                this.errorHandler = handler;
                this.trackComment = false;
                this.isModule = false;
                this.length = code2.length;
                this.index = 0;
                this.lineNumber = code2.length > 0 ? 1 : 0;
                this.lineStart = 0;
                this.curlyStack = [];
              }
              Scanner2.prototype.saveState = function() {
                return {
                  index: this.index,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart
                };
              };
              Scanner2.prototype.restoreState = function(state) {
                this.index = state.index;
                this.lineNumber = state.lineNumber;
                this.lineStart = state.lineStart;
              };
              Scanner2.prototype.eof = function() {
                return this.index >= this.length;
              };
              Scanner2.prototype.throwUnexpectedToken = function(message) {
                if (message === void 0) {
                  message = messages_1.Messages.UnexpectedTokenIllegal;
                }
                return this.errorHandler.throwError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
              };
              Scanner2.prototype.tolerateUnexpectedToken = function(message) {
                if (message === void 0) {
                  message = messages_1.Messages.UnexpectedTokenIllegal;
                }
                this.errorHandler.tolerateError(this.index, this.lineNumber, this.index - this.lineStart + 1, message);
              };
              Scanner2.prototype.skipSingleLineComment = function(offset) {
                var comments2 = [];
                var start, loc;
                if (this.trackComment) {
                  comments2 = [];
                  start = this.index - offset;
                  loc = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - offset
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  ++this.index;
                  if (character_1.Character.isLineTerminator(ch)) {
                    if (this.trackComment) {
                      loc.end = {
                        line: this.lineNumber,
                        column: this.index - this.lineStart - 1
                      };
                      var entry = {
                        multiLine: false,
                        slice: [start + offset, this.index - 1],
                        range: [start, this.index - 1],
                        loc
                      };
                      comments2.push(entry);
                    }
                    if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    return comments2;
                  }
                }
                if (this.trackComment) {
                  loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var entry = {
                    multiLine: false,
                    slice: [start + offset, this.index],
                    range: [start, this.index],
                    loc
                  };
                  comments2.push(entry);
                }
                return comments2;
              };
              Scanner2.prototype.skipMultiLineComment = function() {
                var comments2 = [];
                var start, loc;
                if (this.trackComment) {
                  comments2 = [];
                  start = this.index - 2;
                  loc = {
                    start: {
                      line: this.lineNumber,
                      column: this.index - this.lineStart - 2
                    },
                    end: {}
                  };
                }
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isLineTerminator(ch)) {
                    if (ch === 13 && this.source.charCodeAt(this.index + 1) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    ++this.index;
                    this.lineStart = this.index;
                  } else if (ch === 42) {
                    if (this.source.charCodeAt(this.index + 1) === 47) {
                      this.index += 2;
                      if (this.trackComment) {
                        loc.end = {
                          line: this.lineNumber,
                          column: this.index - this.lineStart
                        };
                        var entry = {
                          multiLine: true,
                          slice: [start + 2, this.index - 2],
                          range: [start, this.index],
                          loc
                        };
                        comments2.push(entry);
                      }
                      return comments2;
                    }
                    ++this.index;
                  } else {
                    ++this.index;
                  }
                }
                if (this.trackComment) {
                  loc.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart
                  };
                  var entry = {
                    multiLine: true,
                    slice: [start + 2, this.index],
                    range: [start, this.index],
                    loc
                  };
                  comments2.push(entry);
                }
                this.tolerateUnexpectedToken();
                return comments2;
              };
              Scanner2.prototype.scanComments = function() {
                var comments2;
                if (this.trackComment) {
                  comments2 = [];
                }
                var start = this.index === 0;
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isWhiteSpace(ch)) {
                    ++this.index;
                  } else if (character_1.Character.isLineTerminator(ch)) {
                    ++this.index;
                    if (ch === 13 && this.source.charCodeAt(this.index) === 10) {
                      ++this.index;
                    }
                    ++this.lineNumber;
                    this.lineStart = this.index;
                    start = true;
                  } else if (ch === 47) {
                    ch = this.source.charCodeAt(this.index + 1);
                    if (ch === 47) {
                      this.index += 2;
                      var comment = this.skipSingleLineComment(2);
                      if (this.trackComment) {
                        comments2 = comments2.concat(comment);
                      }
                      start = true;
                    } else if (ch === 42) {
                      this.index += 2;
                      var comment = this.skipMultiLineComment();
                      if (this.trackComment) {
                        comments2 = comments2.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else if (start && ch === 45) {
                    if (this.source.charCodeAt(this.index + 1) === 45 && this.source.charCodeAt(this.index + 2) === 62) {
                      this.index += 3;
                      var comment = this.skipSingleLineComment(3);
                      if (this.trackComment) {
                        comments2 = comments2.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else if (ch === 60 && !this.isModule) {
                    if (this.source.slice(this.index + 1, this.index + 4) === "!--") {
                      this.index += 4;
                      var comment = this.skipSingleLineComment(4);
                      if (this.trackComment) {
                        comments2 = comments2.concat(comment);
                      }
                    } else {
                      break;
                    }
                  } else {
                    break;
                  }
                }
                return comments2;
              };
              Scanner2.prototype.isFutureReservedWord = function(id) {
                switch (id) {
                  case "enum":
                  case "export":
                  case "import":
                  case "super":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner2.prototype.isStrictModeReservedWord = function(id) {
                switch (id) {
                  case "implements":
                  case "interface":
                  case "package":
                  case "private":
                  case "protected":
                  case "public":
                  case "static":
                  case "yield":
                  case "let":
                    return true;
                  default:
                    return false;
                }
              };
              Scanner2.prototype.isRestrictedWord = function(id) {
                return id === "eval" || id === "arguments";
              };
              Scanner2.prototype.isKeyword = function(id) {
                switch (id.length) {
                  case 2:
                    return id === "if" || id === "in" || id === "do";
                  case 3:
                    return id === "var" || id === "for" || id === "new" || id === "try" || id === "let";
                  case 4:
                    return id === "this" || id === "else" || id === "case" || id === "void" || id === "with" || id === "enum";
                  case 5:
                    return id === "while" || id === "break" || id === "catch" || id === "throw" || id === "const" || id === "yield" || id === "class" || id === "super";
                  case 6:
                    return id === "return" || id === "typeof" || id === "delete" || id === "switch" || id === "export" || id === "import";
                  case 7:
                    return id === "default" || id === "finally" || id === "extends";
                  case 8:
                    return id === "function" || id === "continue" || id === "debugger";
                  case 10:
                    return id === "instanceof";
                  default:
                    return false;
                }
              };
              Scanner2.prototype.codePointAt = function(i) {
                var cp = this.source.charCodeAt(i);
                if (cp >= 55296 && cp <= 56319) {
                  var second = this.source.charCodeAt(i + 1);
                  if (second >= 56320 && second <= 57343) {
                    var first = cp;
                    cp = (first - 55296) * 1024 + second - 56320 + 65536;
                  }
                }
                return cp;
              };
              Scanner2.prototype.scanHexEscape = function(prefix) {
                var len = prefix === "u" ? 4 : 2;
                var code2 = 0;
                for (var i = 0; i < len; ++i) {
                  if (!this.eof() && character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                    code2 = code2 * 16 + hexValue(this.source[this.index++]);
                  } else {
                    return null;
                  }
                }
                return String.fromCharCode(code2);
              };
              Scanner2.prototype.scanUnicodeCodePointEscape = function() {
                var ch = this.source[this.index];
                var code2 = 0;
                if (ch === "}") {
                  this.throwUnexpectedToken();
                }
                while (!this.eof()) {
                  ch = this.source[this.index++];
                  if (!character_1.Character.isHexDigit(ch.charCodeAt(0))) {
                    break;
                  }
                  code2 = code2 * 16 + hexValue(ch);
                }
                if (code2 > 1114111 || ch !== "}") {
                  this.throwUnexpectedToken();
                }
                return character_1.Character.fromCodePoint(code2);
              };
              Scanner2.prototype.getIdentifier = function() {
                var start = this.index++;
                while (!this.eof()) {
                  var ch = this.source.charCodeAt(this.index);
                  if (ch === 92) {
                    this.index = start;
                    return this.getComplexIdentifier();
                  } else if (ch >= 55296 && ch < 57343) {
                    this.index = start;
                    return this.getComplexIdentifier();
                  }
                  if (character_1.Character.isIdentifierPart(ch)) {
                    ++this.index;
                  } else {
                    break;
                  }
                }
                return this.source.slice(start, this.index);
              };
              Scanner2.prototype.getComplexIdentifier = function() {
                var cp = this.codePointAt(this.index);
                var id = character_1.Character.fromCodePoint(cp);
                this.index += id.length;
                var ch;
                if (cp === 92) {
                  if (this.source.charCodeAt(this.index) !== 117) {
                    this.throwUnexpectedToken();
                  }
                  ++this.index;
                  if (this.source[this.index] === "{") {
                    ++this.index;
                    ch = this.scanUnicodeCodePointEscape();
                  } else {
                    ch = this.scanHexEscape("u");
                    if (ch === null || ch === "\\" || !character_1.Character.isIdentifierStart(ch.charCodeAt(0))) {
                      this.throwUnexpectedToken();
                    }
                  }
                  id = ch;
                }
                while (!this.eof()) {
                  cp = this.codePointAt(this.index);
                  if (!character_1.Character.isIdentifierPart(cp)) {
                    break;
                  }
                  ch = character_1.Character.fromCodePoint(cp);
                  id += ch;
                  this.index += ch.length;
                  if (cp === 92) {
                    id = id.substr(0, id.length - 1);
                    if (this.source.charCodeAt(this.index) !== 117) {
                      this.throwUnexpectedToken();
                    }
                    ++this.index;
                    if (this.source[this.index] === "{") {
                      ++this.index;
                      ch = this.scanUnicodeCodePointEscape();
                    } else {
                      ch = this.scanHexEscape("u");
                      if (ch === null || ch === "\\" || !character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                        this.throwUnexpectedToken();
                      }
                    }
                    id += ch;
                  }
                }
                return id;
              };
              Scanner2.prototype.octalToDecimal = function(ch) {
                var octal = ch !== "0";
                var code2 = octalValue(ch);
                if (!this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                  octal = true;
                  code2 = code2 * 8 + octalValue(this.source[this.index++]);
                  if ("0123".indexOf(ch) >= 0 && !this.eof() && character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    code2 = code2 * 8 + octalValue(this.source[this.index++]);
                  }
                }
                return {
                  code: code2,
                  octal
                };
              };
              Scanner2.prototype.scanIdentifier = function() {
                var type;
                var start = this.index;
                var id = this.source.charCodeAt(start) === 92 ? this.getComplexIdentifier() : this.getIdentifier();
                if (id.length === 1) {
                  type = 3;
                } else if (this.isKeyword(id)) {
                  type = 4;
                } else if (id === "null") {
                  type = 5;
                } else if (id === "true" || id === "false") {
                  type = 1;
                } else {
                  type = 3;
                }
                if (type !== 3 && start + id.length !== this.index) {
                  var restore = this.index;
                  this.index = start;
                  this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord);
                  this.index = restore;
                }
                return {
                  type,
                  value: id,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanPunctuator = function() {
                var start = this.index;
                var str = this.source[this.index];
                switch (str) {
                  case "(":
                  case "{":
                    if (str === "{") {
                      this.curlyStack.push("{");
                    }
                    ++this.index;
                    break;
                  case ".":
                    ++this.index;
                    if (this.source[this.index] === "." && this.source[this.index + 1] === ".") {
                      this.index += 2;
                      str = "...";
                    }
                    break;
                  case "}":
                    ++this.index;
                    this.curlyStack.pop();
                    break;
                  case ")":
                  case ";":
                  case ",":
                  case "[":
                  case "]":
                  case ":":
                  case "?":
                  case "~":
                    ++this.index;
                    break;
                  default:
                    str = this.source.substr(this.index, 4);
                    if (str === ">>>=") {
                      this.index += 4;
                    } else {
                      str = str.substr(0, 3);
                      if (str === "===" || str === "!==" || str === ">>>" || str === "<<=" || str === ">>=" || str === "**=") {
                        this.index += 3;
                      } else {
                        str = str.substr(0, 2);
                        if (str === "&&" || str === "||" || str === "==" || str === "!=" || str === "+=" || str === "-=" || str === "*=" || str === "/=" || str === "++" || str === "--" || str === "<<" || str === ">>" || str === "&=" || str === "|=" || str === "^=" || str === "%=" || str === "<=" || str === ">=" || str === "=>" || str === "**") {
                          this.index += 2;
                        } else {
                          str = this.source[this.index];
                          if ("<>=!+-*%&|^/".indexOf(str) >= 0) {
                            ++this.index;
                          }
                        }
                      }
                    }
                }
                if (this.index === start) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 7,
                  value: str,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanHexLiteral = function(start) {
                var num = "";
                while (!this.eof()) {
                  if (!character_1.Character.isHexDigit(this.source.charCodeAt(this.index))) {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt("0x" + num, 16),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanBinaryLiteral = function(start) {
                var num = "";
                var ch;
                while (!this.eof()) {
                  ch = this.source[this.index];
                  if (ch !== "0" && ch !== "1") {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (!this.eof()) {
                  ch = this.source.charCodeAt(this.index);
                  if (character_1.Character.isIdentifierStart(ch) || character_1.Character.isDecimalDigit(ch)) {
                    this.throwUnexpectedToken();
                  }
                }
                return {
                  type: 6,
                  value: parseInt(num, 2),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanOctalLiteral = function(prefix, start) {
                var num = "";
                var octal = false;
                if (character_1.Character.isOctalDigit(prefix.charCodeAt(0))) {
                  octal = true;
                  num = "0" + this.source[this.index++];
                } else {
                  ++this.index;
                }
                while (!this.eof()) {
                  if (!character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))) {
                    break;
                  }
                  num += this.source[this.index++];
                }
                if (!octal && num.length === 0) {
                  this.throwUnexpectedToken();
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index)) || character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseInt(num, 8),
                  octal,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.isImplicitOctalLiteral = function() {
                for (var i = this.index + 1; i < this.length; ++i) {
                  var ch = this.source[i];
                  if (ch === "8" || ch === "9") {
                    return false;
                  }
                  if (!character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                    return true;
                  }
                }
                return true;
              };
              Scanner2.prototype.scanNumericLiteral = function() {
                var start = this.index;
                var ch = this.source[start];
                assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0)) || ch === ".", "Numeric literal must start with a decimal digit or a decimal point");
                var num = "";
                if (ch !== ".") {
                  num = this.source[this.index++];
                  ch = this.source[this.index];
                  if (num === "0") {
                    if (ch === "x" || ch === "X") {
                      ++this.index;
                      return this.scanHexLiteral(start);
                    }
                    if (ch === "b" || ch === "B") {
                      ++this.index;
                      return this.scanBinaryLiteral(start);
                    }
                    if (ch === "o" || ch === "O") {
                      return this.scanOctalLiteral(ch, start);
                    }
                    if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                      if (this.isImplicitOctalLiteral()) {
                        return this.scanOctalLiteral(ch, start);
                      }
                    }
                  }
                  while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    num += this.source[this.index++];
                  }
                  ch = this.source[this.index];
                }
                if (ch === ".") {
                  num += this.source[this.index++];
                  while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    num += this.source[this.index++];
                  }
                  ch = this.source[this.index];
                }
                if (ch === "e" || ch === "E") {
                  num += this.source[this.index++];
                  ch = this.source[this.index];
                  if (ch === "+" || ch === "-") {
                    num += this.source[this.index++];
                  }
                  if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                    while (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                      num += this.source[this.index++];
                    }
                  } else {
                    this.throwUnexpectedToken();
                  }
                }
                if (character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))) {
                  this.throwUnexpectedToken();
                }
                return {
                  type: 6,
                  value: parseFloat(num),
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanStringLiteral = function() {
                var start = this.index;
                var quote = this.source[start];
                assert_1.assert(quote === "'" || quote === '"', "String literal must starts with a quote");
                ++this.index;
                var octal = false;
                var str = "";
                while (!this.eof()) {
                  var ch = this.source[this.index++];
                  if (ch === quote) {
                    quote = "";
                    break;
                  } else if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (!ch || !character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      switch (ch) {
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            str += this.scanUnicodeCodePointEscape();
                          } else {
                            var unescaped_1 = this.scanHexEscape(ch);
                            if (unescaped_1 === null) {
                              this.throwUnexpectedToken();
                            }
                            str += unescaped_1;
                          }
                          break;
                        case "x":
                          var unescaped = this.scanHexEscape(ch);
                          if (unescaped === null) {
                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                          }
                          str += unescaped;
                          break;
                        case "n":
                          str += "\n";
                          break;
                        case "r":
                          str += "\r";
                          break;
                        case "t":
                          str += "	";
                          break;
                        case "b":
                          str += "\b";
                          break;
                        case "f":
                          str += "\f";
                          break;
                        case "v":
                          str += "\v";
                          break;
                        case "8":
                        case "9":
                          str += ch;
                          this.tolerateUnexpectedToken();
                          break;
                        default:
                          if (ch && character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                            var octToDec = this.octalToDecimal(ch);
                            octal = octToDec.octal || octal;
                            str += String.fromCharCode(octToDec.code);
                          } else {
                            str += ch;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (ch === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    break;
                  } else {
                    str += ch;
                  }
                }
                if (quote !== "") {
                  this.index = start;
                  this.throwUnexpectedToken();
                }
                return {
                  type: 8,
                  value: str,
                  octal,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.scanTemplate = function() {
                var cooked = "";
                var terminated = false;
                var start = this.index;
                var head = this.source[start] === "`";
                var tail = false;
                var rawOffset = 2;
                ++this.index;
                while (!this.eof()) {
                  var ch = this.source[this.index++];
                  if (ch === "`") {
                    rawOffset = 1;
                    tail = true;
                    terminated = true;
                    break;
                  } else if (ch === "$") {
                    if (this.source[this.index] === "{") {
                      this.curlyStack.push("${");
                      ++this.index;
                      terminated = true;
                      break;
                    }
                    cooked += ch;
                  } else if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (!character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      switch (ch) {
                        case "n":
                          cooked += "\n";
                          break;
                        case "r":
                          cooked += "\r";
                          break;
                        case "t":
                          cooked += "	";
                          break;
                        case "u":
                          if (this.source[this.index] === "{") {
                            ++this.index;
                            cooked += this.scanUnicodeCodePointEscape();
                          } else {
                            var restore = this.index;
                            var unescaped_2 = this.scanHexEscape(ch);
                            if (unescaped_2 !== null) {
                              cooked += unescaped_2;
                            } else {
                              this.index = restore;
                              cooked += ch;
                            }
                          }
                          break;
                        case "x":
                          var unescaped = this.scanHexEscape(ch);
                          if (unescaped === null) {
                            this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence);
                          }
                          cooked += unescaped;
                          break;
                        case "b":
                          cooked += "\b";
                          break;
                        case "f":
                          cooked += "\f";
                          break;
                        case "v":
                          cooked += "\v";
                          break;
                        default:
                          if (ch === "0") {
                            if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))) {
                              this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                            }
                            cooked += "\0";
                          } else if (character_1.Character.isOctalDigit(ch.charCodeAt(0))) {
                            this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral);
                          } else {
                            cooked += ch;
                          }
                          break;
                      }
                    } else {
                      ++this.lineNumber;
                      if (ch === "\r" && this.source[this.index] === "\n") {
                        ++this.index;
                      }
                      this.lineStart = this.index;
                    }
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    ++this.lineNumber;
                    if (ch === "\r" && this.source[this.index] === "\n") {
                      ++this.index;
                    }
                    this.lineStart = this.index;
                    cooked += "\n";
                  } else {
                    cooked += ch;
                  }
                }
                if (!terminated) {
                  this.throwUnexpectedToken();
                }
                if (!head) {
                  this.curlyStack.pop();
                }
                return {
                  type: 10,
                  value: this.source.slice(start + 1, this.index - rawOffset),
                  cooked,
                  head,
                  tail,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.testRegExp = function(pattern, flags) {
                var astralSubstitute = "￿";
                var tmp = pattern;
                var self2 = this;
                if (flags.indexOf("u") >= 0) {
                  tmp = tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g, function($0, $1, $2) {
                    var codePoint = parseInt($1 || $2, 16);
                    if (codePoint > 1114111) {
                      self2.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                    }
                    if (codePoint <= 65535) {
                      return String.fromCharCode(codePoint);
                    }
                    return astralSubstitute;
                  }).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, astralSubstitute);
                }
                try {
                  RegExp(tmp);
                } catch (e) {
                  this.throwUnexpectedToken(messages_1.Messages.InvalidRegExp);
                }
                try {
                  return new RegExp(pattern, flags);
                } catch (exception) {
                  return null;
                }
              };
              Scanner2.prototype.scanRegExpBody = function() {
                var ch = this.source[this.index];
                assert_1.assert(ch === "/", "Regular expression literal must start with a slash");
                var str = this.source[this.index++];
                var classMarker = false;
                var terminated = false;
                while (!this.eof()) {
                  ch = this.source[this.index++];
                  str += ch;
                  if (ch === "\\") {
                    ch = this.source[this.index++];
                    if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                      this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                    }
                    str += ch;
                  } else if (character_1.Character.isLineTerminator(ch.charCodeAt(0))) {
                    this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                  } else if (classMarker) {
                    if (ch === "]") {
                      classMarker = false;
                    }
                  } else {
                    if (ch === "/") {
                      terminated = true;
                      break;
                    } else if (ch === "[") {
                      classMarker = true;
                    }
                  }
                }
                if (!terminated) {
                  this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);
                }
                return str.substr(1, str.length - 2);
              };
              Scanner2.prototype.scanRegExpFlags = function() {
                var str = "";
                var flags = "";
                while (!this.eof()) {
                  var ch = this.source[this.index];
                  if (!character_1.Character.isIdentifierPart(ch.charCodeAt(0))) {
                    break;
                  }
                  ++this.index;
                  if (ch === "\\" && !this.eof()) {
                    ch = this.source[this.index];
                    if (ch === "u") {
                      ++this.index;
                      var restore = this.index;
                      var char = this.scanHexEscape("u");
                      if (char !== null) {
                        flags += char;
                        for (str += "\\u"; restore < this.index; ++restore) {
                          str += this.source[restore];
                        }
                      } else {
                        this.index = restore;
                        flags += "u";
                        str += "\\u";
                      }
                      this.tolerateUnexpectedToken();
                    } else {
                      str += "\\";
                      this.tolerateUnexpectedToken();
                    }
                  } else {
                    flags += ch;
                    str += ch;
                  }
                }
                return flags;
              };
              Scanner2.prototype.scanRegExp = function() {
                var start = this.index;
                var pattern = this.scanRegExpBody();
                var flags = this.scanRegExpFlags();
                var value = this.testRegExp(pattern, flags);
                return {
                  type: 9,
                  value: "",
                  pattern,
                  flags,
                  regex: value,
                  lineNumber: this.lineNumber,
                  lineStart: this.lineStart,
                  start,
                  end: this.index
                };
              };
              Scanner2.prototype.lex = function() {
                if (this.eof()) {
                  return {
                    type: 2,
                    value: "",
                    lineNumber: this.lineNumber,
                    lineStart: this.lineStart,
                    start: this.index,
                    end: this.index
                  };
                }
                var cp = this.source.charCodeAt(this.index);
                if (character_1.Character.isIdentifierStart(cp)) {
                  return this.scanIdentifier();
                }
                if (cp === 40 || cp === 41 || cp === 59) {
                  return this.scanPunctuator();
                }
                if (cp === 39 || cp === 34) {
                  return this.scanStringLiteral();
                }
                if (cp === 46) {
                  if (character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index + 1))) {
                    return this.scanNumericLiteral();
                  }
                  return this.scanPunctuator();
                }
                if (character_1.Character.isDecimalDigit(cp)) {
                  return this.scanNumericLiteral();
                }
                if (cp === 96 || cp === 125 && this.curlyStack[this.curlyStack.length - 1] === "${") {
                  return this.scanTemplate();
                }
                if (cp >= 55296 && cp < 57343) {
                  if (character_1.Character.isIdentifierStart(this.codePointAt(this.index))) {
                    return this.scanIdentifier();
                  }
                }
                return this.scanPunctuator();
              };
              return Scanner2;
            }();
            exports3.Scanner = Scanner;
          },
          /* 13 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.TokenName = {};
            exports3.TokenName[
              1
              /* BooleanLiteral */
            ] = "Boolean";
            exports3.TokenName[
              2
              /* EOF */
            ] = "<end>";
            exports3.TokenName[
              3
              /* Identifier */
            ] = "Identifier";
            exports3.TokenName[
              4
              /* Keyword */
            ] = "Keyword";
            exports3.TokenName[
              5
              /* NullLiteral */
            ] = "Null";
            exports3.TokenName[
              6
              /* NumericLiteral */
            ] = "Numeric";
            exports3.TokenName[
              7
              /* Punctuator */
            ] = "Punctuator";
            exports3.TokenName[
              8
              /* StringLiteral */
            ] = "String";
            exports3.TokenName[
              9
              /* RegularExpression */
            ] = "RegularExpression";
            exports3.TokenName[
              10
              /* Template */
            ] = "Template";
          },
          /* 14 */
          /***/
          function(module3, exports3) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            exports3.XHTMLEntities = {
              quot: '"',
              amp: "&",
              apos: "'",
              gt: ">",
              nbsp: " ",
              iexcl: "¡",
              cent: "¢",
              pound: "£",
              curren: "¤",
              yen: "¥",
              brvbar: "¦",
              sect: "§",
              uml: "¨",
              copy: "©",
              ordf: "ª",
              laquo: "«",
              not: "¬",
              shy: "­",
              reg: "®",
              macr: "¯",
              deg: "°",
              plusmn: "±",
              sup2: "²",
              sup3: "³",
              acute: "´",
              micro: "µ",
              para: "¶",
              middot: "·",
              cedil: "¸",
              sup1: "¹",
              ordm: "º",
              raquo: "»",
              frac14: "¼",
              frac12: "½",
              frac34: "¾",
              iquest: "¿",
              Agrave: "À",
              Aacute: "Á",
              Acirc: "Â",
              Atilde: "Ã",
              Auml: "Ä",
              Aring: "Å",
              AElig: "Æ",
              Ccedil: "Ç",
              Egrave: "È",
              Eacute: "É",
              Ecirc: "Ê",
              Euml: "Ë",
              Igrave: "Ì",
              Iacute: "Í",
              Icirc: "Î",
              Iuml: "Ï",
              ETH: "Ð",
              Ntilde: "Ñ",
              Ograve: "Ò",
              Oacute: "Ó",
              Ocirc: "Ô",
              Otilde: "Õ",
              Ouml: "Ö",
              times: "×",
              Oslash: "Ø",
              Ugrave: "Ù",
              Uacute: "Ú",
              Ucirc: "Û",
              Uuml: "Ü",
              Yacute: "Ý",
              THORN: "Þ",
              szlig: "ß",
              agrave: "à",
              aacute: "á",
              acirc: "â",
              atilde: "ã",
              auml: "ä",
              aring: "å",
              aelig: "æ",
              ccedil: "ç",
              egrave: "è",
              eacute: "é",
              ecirc: "ê",
              euml: "ë",
              igrave: "ì",
              iacute: "í",
              icirc: "î",
              iuml: "ï",
              eth: "ð",
              ntilde: "ñ",
              ograve: "ò",
              oacute: "ó",
              ocirc: "ô",
              otilde: "õ",
              ouml: "ö",
              divide: "÷",
              oslash: "ø",
              ugrave: "ù",
              uacute: "ú",
              ucirc: "û",
              uuml: "ü",
              yacute: "ý",
              thorn: "þ",
              yuml: "ÿ",
              OElig: "Œ",
              oelig: "œ",
              Scaron: "Š",
              scaron: "š",
              Yuml: "Ÿ",
              fnof: "ƒ",
              circ: "ˆ",
              tilde: "˜",
              Alpha: "Α",
              Beta: "Β",
              Gamma: "Γ",
              Delta: "Δ",
              Epsilon: "Ε",
              Zeta: "Ζ",
              Eta: "Η",
              Theta: "Θ",
              Iota: "Ι",
              Kappa: "Κ",
              Lambda: "Λ",
              Mu: "Μ",
              Nu: "Ν",
              Xi: "Ξ",
              Omicron: "Ο",
              Pi: "Π",
              Rho: "Ρ",
              Sigma: "Σ",
              Tau: "Τ",
              Upsilon: "Υ",
              Phi: "Φ",
              Chi: "Χ",
              Psi: "Ψ",
              Omega: "Ω",
              alpha: "α",
              beta: "β",
              gamma: "γ",
              delta: "δ",
              epsilon: "ε",
              zeta: "ζ",
              eta: "η",
              theta: "θ",
              iota: "ι",
              kappa: "κ",
              lambda: "λ",
              mu: "μ",
              nu: "ν",
              xi: "ξ",
              omicron: "ο",
              pi: "π",
              rho: "ρ",
              sigmaf: "ς",
              sigma: "σ",
              tau: "τ",
              upsilon: "υ",
              phi: "φ",
              chi: "χ",
              psi: "ψ",
              omega: "ω",
              thetasym: "ϑ",
              upsih: "ϒ",
              piv: "ϖ",
              ensp: " ",
              emsp: " ",
              thinsp: " ",
              zwnj: "‌",
              zwj: "‍",
              lrm: "‎",
              rlm: "‏",
              ndash: "–",
              mdash: "—",
              lsquo: "‘",
              rsquo: "’",
              sbquo: "‚",
              ldquo: "“",
              rdquo: "”",
              bdquo: "„",
              dagger: "†",
              Dagger: "‡",
              bull: "•",
              hellip: "…",
              permil: "‰",
              prime: "′",
              Prime: "″",
              lsaquo: "‹",
              rsaquo: "›",
              oline: "‾",
              frasl: "⁄",
              euro: "€",
              image: "ℑ",
              weierp: "℘",
              real: "ℜ",
              trade: "™",
              alefsym: "ℵ",
              larr: "←",
              uarr: "↑",
              rarr: "→",
              darr: "↓",
              harr: "↔",
              crarr: "↵",
              lArr: "⇐",
              uArr: "⇑",
              rArr: "⇒",
              dArr: "⇓",
              hArr: "⇔",
              forall: "∀",
              part: "∂",
              exist: "∃",
              empty: "∅",
              nabla: "∇",
              isin: "∈",
              notin: "∉",
              ni: "∋",
              prod: "∏",
              sum: "∑",
              minus: "−",
              lowast: "∗",
              radic: "√",
              prop: "∝",
              infin: "∞",
              ang: "∠",
              and: "∧",
              or: "∨",
              cap: "∩",
              cup: "∪",
              int: "∫",
              there4: "∴",
              sim: "∼",
              cong: "≅",
              asymp: "≈",
              ne: "≠",
              equiv: "≡",
              le: "≤",
              ge: "≥",
              sub: "⊂",
              sup: "⊃",
              nsub: "⊄",
              sube: "⊆",
              supe: "⊇",
              oplus: "⊕",
              otimes: "⊗",
              perp: "⊥",
              sdot: "⋅",
              lceil: "⌈",
              rceil: "⌉",
              lfloor: "⌊",
              rfloor: "⌋",
              loz: "◊",
              spades: "♠",
              clubs: "♣",
              hearts: "♥",
              diams: "♦",
              lang: "⟨",
              rang: "⟩"
            };
          },
          /* 15 */
          /***/
          function(module3, exports3, __webpack_require__) {
            Object.defineProperty(exports3, "__esModule", { value: true });
            var error_handler_1 = __webpack_require__(10);
            var scanner_1 = __webpack_require__(12);
            var token_1 = __webpack_require__(13);
            var Reader = function() {
              function Reader2() {
                this.values = [];
                this.curly = this.paren = -1;
              }
              Reader2.prototype.beforeFunctionExpression = function(t) {
                return [
                  "(",
                  "{",
                  "[",
                  "in",
                  "typeof",
                  "instanceof",
                  "new",
                  "return",
                  "case",
                  "delete",
                  "throw",
                  "void",
                  // assignment operators
                  "=",
                  "+=",
                  "-=",
                  "*=",
                  "**=",
                  "/=",
                  "%=",
                  "<<=",
                  ">>=",
                  ">>>=",
                  "&=",
                  "|=",
                  "^=",
                  ",",
                  // binary/unary operators
                  "+",
                  "-",
                  "*",
                  "**",
                  "/",
                  "%",
                  "++",
                  "--",
                  "<<",
                  ">>",
                  ">>>",
                  "&",
                  "|",
                  "^",
                  "!",
                  "~",
                  "&&",
                  "||",
                  "?",
                  ":",
                  "===",
                  "==",
                  ">=",
                  "<=",
                  "<",
                  ">",
                  "!=",
                  "!=="
                ].indexOf(t) >= 0;
              };
              Reader2.prototype.isRegexStart = function() {
                var previous = this.values[this.values.length - 1];
                var regex = previous !== null;
                switch (previous) {
                  case "this":
                  case "]":
                    regex = false;
                    break;
                  case ")":
                    var keyword = this.values[this.paren - 1];
                    regex = keyword === "if" || keyword === "while" || keyword === "for" || keyword === "with";
                    break;
                  case "}":
                    regex = false;
                    if (this.values[this.curly - 3] === "function") {
                      var check = this.values[this.curly - 4];
                      regex = check ? !this.beforeFunctionExpression(check) : false;
                    } else if (this.values[this.curly - 4] === "function") {
                      var check = this.values[this.curly - 5];
                      regex = check ? !this.beforeFunctionExpression(check) : true;
                    }
                    break;
                }
                return regex;
              };
              Reader2.prototype.push = function(token) {
                if (token.type === 7 || token.type === 4) {
                  if (token.value === "{") {
                    this.curly = this.values.length;
                  } else if (token.value === "(") {
                    this.paren = this.values.length;
                  }
                  this.values.push(token.value);
                } else {
                  this.values.push(null);
                }
              };
              return Reader2;
            }();
            var Tokenizer = function() {
              function Tokenizer2(code2, config) {
                this.errorHandler = new error_handler_1.ErrorHandler();
                this.errorHandler.tolerant = config ? typeof config.tolerant === "boolean" && config.tolerant : false;
                this.scanner = new scanner_1.Scanner(code2, this.errorHandler);
                this.scanner.trackComment = config ? typeof config.comment === "boolean" && config.comment : false;
                this.trackRange = config ? typeof config.range === "boolean" && config.range : false;
                this.trackLoc = config ? typeof config.loc === "boolean" && config.loc : false;
                this.buffer = [];
                this.reader = new Reader();
              }
              Tokenizer2.prototype.errors = function() {
                return this.errorHandler.errors;
              };
              Tokenizer2.prototype.getNextToken = function() {
                if (this.buffer.length === 0) {
                  var comments2 = this.scanner.scanComments();
                  if (this.scanner.trackComment) {
                    for (var i = 0; i < comments2.length; ++i) {
                      var e = comments2[i];
                      var value = this.scanner.source.slice(e.slice[0], e.slice[1]);
                      var comment = {
                        type: e.multiLine ? "BlockComment" : "LineComment",
                        value
                      };
                      if (this.trackRange) {
                        comment.range = e.range;
                      }
                      if (this.trackLoc) {
                        comment.loc = e.loc;
                      }
                      this.buffer.push(comment);
                    }
                  }
                  if (!this.scanner.eof()) {
                    var loc = void 0;
                    if (this.trackLoc) {
                      loc = {
                        start: {
                          line: this.scanner.lineNumber,
                          column: this.scanner.index - this.scanner.lineStart
                        },
                        end: {}
                      };
                    }
                    var startRegex = this.scanner.source[this.scanner.index] === "/" && this.reader.isRegexStart();
                    var token = startRegex ? this.scanner.scanRegExp() : this.scanner.lex();
                    this.reader.push(token);
                    var entry = {
                      type: token_1.TokenName[token.type],
                      value: this.scanner.source.slice(token.start, token.end)
                    };
                    if (this.trackRange) {
                      entry.range = [token.start, token.end];
                    }
                    if (this.trackLoc) {
                      loc.end = {
                        line: this.scanner.lineNumber,
                        column: this.scanner.index - this.scanner.lineStart
                      };
                      entry.loc = loc;
                    }
                    if (token.type === 9) {
                      var pattern = token.pattern;
                      var flags = token.flags;
                      entry.regex = { pattern, flags };
                    }
                    this.buffer.push(entry);
                  }
                }
                return this.buffer.shift();
              };
              return Tokenizer2;
            }();
            exports3.Tokenizer = Tokenizer;
          }
          /******/
        ])
      );
    });
  })(esprima);
  return esprima.exports;
}
var hasRequiredEsprima;
function requireEsprima() {
  if (hasRequiredEsprima) return esprima$1;
  hasRequiredEsprima = 1;
  Object.defineProperty(esprima$1, "__esModule", { value: true });
  esprima$1.parse = void 0;
  var util_1 = requireUtil();
  function parse(source, options2) {
    var comments2 = [];
    var ast2 = requireEsprima$1().parse(source, {
      loc: true,
      locations: true,
      comment: true,
      onComment: comments2,
      range: (0, util_1.getOption)(options2, "range", false),
      tolerant: (0, util_1.getOption)(options2, "tolerant", true),
      tokens: true,
      jsx: (0, util_1.getOption)(options2, "jsx", false),
      sourceType: (0, util_1.getOption)(options2, "sourceType", "module")
    });
    if (!Array.isArray(ast2.comments)) {
      ast2.comments = comments2;
    }
    return ast2;
  }
  esprima$1.parse = parse;
  return esprima$1;
}
var hasRequiredOptions;
function requireOptions() {
  if (hasRequiredOptions) return options;
  hasRequiredOptions = 1;
  Object.defineProperty(options, "__esModule", { value: true });
  options.normalize = void 0;
  var util_1 = requireUtil();
  var defaults = {
    parser: requireEsprima(),
    tabWidth: 4,
    useTabs: false,
    reuseWhitespace: true,
    lineTerminator: (0, util_1.getLineTerminator)(),
    wrapColumn: 74,
    sourceFileName: null,
    sourceMapName: null,
    sourceRoot: null,
    inputSourceMap: null,
    range: false,
    tolerant: true,
    quote: null,
    trailingComma: false,
    arrayBracketSpacing: false,
    objectCurlySpacing: true,
    arrowParensAlways: false,
    flowObjectCommas: true,
    tokens: true
  };
  var hasOwn = defaults.hasOwnProperty;
  function normalize(opts) {
    var options2 = opts || defaults;
    function get(key) {
      return hasOwn.call(options2, key) ? options2[key] : defaults[key];
    }
    return {
      tabWidth: +get("tabWidth"),
      useTabs: !!get("useTabs"),
      reuseWhitespace: !!get("reuseWhitespace"),
      lineTerminator: get("lineTerminator"),
      wrapColumn: Math.max(get("wrapColumn"), 0),
      sourceFileName: get("sourceFileName"),
      sourceMapName: get("sourceMapName"),
      sourceRoot: get("sourceRoot"),
      inputSourceMap: get("inputSourceMap"),
      parser: get("esprima") || get("parser"),
      range: get("range"),
      tolerant: get("tolerant"),
      quote: get("quote"),
      trailingComma: get("trailingComma"),
      arrayBracketSpacing: get("arrayBracketSpacing"),
      objectCurlySpacing: get("objectCurlySpacing"),
      arrowParensAlways: get("arrowParensAlways"),
      flowObjectCommas: get("flowObjectCommas"),
      tokens: !!get("tokens")
    };
  }
  options.normalize = normalize;
  return options;
}
var lines = {};
var mapping = {};
var hasRequiredMapping;
function requireMapping() {
  if (hasRequiredMapping) return mapping;
  hasRequiredMapping = 1;
  Object.defineProperty(mapping, "__esModule", { value: true });
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var util_1 = requireUtil();
  var Mapping = (
    /** @class */
    function() {
      function Mapping2(sourceLines, sourceLoc, targetLoc) {
        if (targetLoc === void 0) {
          targetLoc = sourceLoc;
        }
        this.sourceLines = sourceLines;
        this.sourceLoc = sourceLoc;
        this.targetLoc = targetLoc;
      }
      Mapping2.prototype.slice = function(lines2, start, end) {
        if (end === void 0) {
          end = lines2.lastPos();
        }
        var sourceLines = this.sourceLines;
        var sourceLoc = this.sourceLoc;
        var targetLoc = this.targetLoc;
        function skip(name) {
          var sourceFromPos = sourceLoc[name];
          var targetFromPos = targetLoc[name];
          var targetToPos = start;
          if (name === "end") {
            targetToPos = end;
          } else {
            (0, tiny_invariant_1.default)(name === "start");
          }
          return skipChars(sourceLines, sourceFromPos, lines2, targetFromPos, targetToPos);
        }
        if ((0, util_1.comparePos)(start, targetLoc.start) <= 0) {
          if ((0, util_1.comparePos)(targetLoc.end, end) <= 0) {
            targetLoc = {
              start: subtractPos(targetLoc.start, start.line, start.column),
              end: subtractPos(targetLoc.end, start.line, start.column)
            };
          } else if ((0, util_1.comparePos)(end, targetLoc.start) <= 0) {
            return null;
          } else {
            sourceLoc = {
              start: sourceLoc.start,
              end: skip("end")
            };
            targetLoc = {
              start: subtractPos(targetLoc.start, start.line, start.column),
              end: subtractPos(end, start.line, start.column)
            };
          }
        } else {
          if ((0, util_1.comparePos)(targetLoc.end, start) <= 0) {
            return null;
          }
          if ((0, util_1.comparePos)(targetLoc.end, end) <= 0) {
            sourceLoc = {
              start: skip("start"),
              end: sourceLoc.end
            };
            targetLoc = {
              // Same as subtractPos(start, start.line, start.column):
              start: { line: 1, column: 0 },
              end: subtractPos(targetLoc.end, start.line, start.column)
            };
          } else {
            sourceLoc = {
              start: skip("start"),
              end: skip("end")
            };
            targetLoc = {
              // Same as subtractPos(start, start.line, start.column):
              start: { line: 1, column: 0 },
              end: subtractPos(end, start.line, start.column)
            };
          }
        }
        return new Mapping2(this.sourceLines, sourceLoc, targetLoc);
      };
      Mapping2.prototype.add = function(line, column) {
        return new Mapping2(this.sourceLines, this.sourceLoc, {
          start: addPos(this.targetLoc.start, line, column),
          end: addPos(this.targetLoc.end, line, column)
        });
      };
      Mapping2.prototype.subtract = function(line, column) {
        return new Mapping2(this.sourceLines, this.sourceLoc, {
          start: subtractPos(this.targetLoc.start, line, column),
          end: subtractPos(this.targetLoc.end, line, column)
        });
      };
      Mapping2.prototype.indent = function(by, skipFirstLine, noNegativeColumns) {
        if (skipFirstLine === void 0) {
          skipFirstLine = false;
        }
        if (noNegativeColumns === void 0) {
          noNegativeColumns = false;
        }
        if (by === 0) {
          return this;
        }
        var targetLoc = this.targetLoc;
        var startLine = targetLoc.start.line;
        var endLine = targetLoc.end.line;
        if (skipFirstLine && startLine === 1 && endLine === 1) {
          return this;
        }
        targetLoc = {
          start: targetLoc.start,
          end: targetLoc.end
        };
        if (!skipFirstLine || startLine > 1) {
          var startColumn = targetLoc.start.column + by;
          targetLoc.start = {
            line: startLine,
            column: noNegativeColumns ? Math.max(0, startColumn) : startColumn
          };
        }
        if (!skipFirstLine || endLine > 1) {
          var endColumn = targetLoc.end.column + by;
          targetLoc.end = {
            line: endLine,
            column: noNegativeColumns ? Math.max(0, endColumn) : endColumn
          };
        }
        return new Mapping2(this.sourceLines, this.sourceLoc, targetLoc);
      };
      return Mapping2;
    }()
  );
  mapping.default = Mapping;
  function addPos(toPos, line, column) {
    return {
      line: toPos.line + line - 1,
      column: toPos.line === 1 ? toPos.column + column : toPos.column
    };
  }
  function subtractPos(fromPos, line, column) {
    return {
      line: fromPos.line - line + 1,
      column: fromPos.line === line ? fromPos.column - column : fromPos.column
    };
  }
  function skipChars(sourceLines, sourceFromPos, targetLines, targetFromPos, targetToPos) {
    var targetComparison = (0, util_1.comparePos)(targetFromPos, targetToPos);
    if (targetComparison === 0) {
      return sourceFromPos;
    }
    var sourceCursor, targetCursor;
    if (targetComparison < 0) {
      sourceCursor = sourceLines.skipSpaces(sourceFromPos) || sourceLines.lastPos();
      targetCursor = targetLines.skipSpaces(targetFromPos) || targetLines.lastPos();
      var lineDiff = targetToPos.line - targetCursor.line;
      sourceCursor.line += lineDiff;
      targetCursor.line += lineDiff;
      if (lineDiff > 0) {
        sourceCursor.column = 0;
        targetCursor.column = 0;
      } else {
        (0, tiny_invariant_1.default)(lineDiff === 0);
      }
      while ((0, util_1.comparePos)(targetCursor, targetToPos) < 0 && targetLines.nextPos(targetCursor, true)) {
        (0, tiny_invariant_1.default)(sourceLines.nextPos(sourceCursor, true));
        (0, tiny_invariant_1.default)(sourceLines.charAt(sourceCursor) === targetLines.charAt(targetCursor));
      }
    } else {
      sourceCursor = sourceLines.skipSpaces(sourceFromPos, true) || sourceLines.firstPos();
      targetCursor = targetLines.skipSpaces(targetFromPos, true) || targetLines.firstPos();
      var lineDiff = targetToPos.line - targetCursor.line;
      sourceCursor.line += lineDiff;
      targetCursor.line += lineDiff;
      if (lineDiff < 0) {
        sourceCursor.column = sourceLines.getLineLength(sourceCursor.line);
        targetCursor.column = targetLines.getLineLength(targetCursor.line);
      } else {
        (0, tiny_invariant_1.default)(lineDiff === 0);
      }
      while ((0, util_1.comparePos)(targetToPos, targetCursor) < 0 && targetLines.prevPos(targetCursor, true)) {
        (0, tiny_invariant_1.default)(sourceLines.prevPos(sourceCursor, true));
        (0, tiny_invariant_1.default)(sourceLines.charAt(sourceCursor) === targetLines.charAt(targetCursor));
      }
    }
    return sourceCursor;
  }
  return mapping;
}
var hasRequiredLines;
function requireLines() {
  if (hasRequiredLines) return lines;
  hasRequiredLines = 1;
  Object.defineProperty(lines, "__esModule", { value: true });
  lines.concat = lines.fromString = lines.countSpaces = lines.Lines = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var source_map_1 = tslib_1.__importDefault(requireSourceMap());
  var options_1 = requireOptions();
  var util_1 = requireUtil();
  var mapping_1 = tslib_1.__importDefault(requireMapping());
  var Lines = (
    /** @class */
    function() {
      function Lines2(infos, sourceFileName) {
        if (sourceFileName === void 0) {
          sourceFileName = null;
        }
        this.infos = infos;
        this.mappings = [];
        this.cachedSourceMap = null;
        this.cachedTabWidth = void 0;
        (0, tiny_invariant_1.default)(infos.length > 0);
        this.length = infos.length;
        this.name = sourceFileName || null;
        if (this.name) {
          this.mappings.push(new mapping_1.default(this, {
            start: this.firstPos(),
            end: this.lastPos()
          }));
        }
      }
      Lines2.prototype.toString = function(options2) {
        return this.sliceString(this.firstPos(), this.lastPos(), options2);
      };
      Lines2.prototype.getSourceMap = function(sourceMapName, sourceRoot) {
        if (!sourceMapName) {
          return null;
        }
        var targetLines = this;
        function updateJSON(json) {
          json = json || {};
          json.file = sourceMapName;
          if (sourceRoot) {
            json.sourceRoot = sourceRoot;
          }
          return json;
        }
        if (targetLines.cachedSourceMap) {
          return updateJSON(targetLines.cachedSourceMap.toJSON());
        }
        var smg = new source_map_1.default.SourceMapGenerator(updateJSON());
        var sourcesToContents = {};
        targetLines.mappings.forEach(function(mapping2) {
          var sourceCursor = mapping2.sourceLines.skipSpaces(mapping2.sourceLoc.start) || mapping2.sourceLines.lastPos();
          var targetCursor = targetLines.skipSpaces(mapping2.targetLoc.start) || targetLines.lastPos();
          while ((0, util_1.comparePos)(sourceCursor, mapping2.sourceLoc.end) < 0 && (0, util_1.comparePos)(targetCursor, mapping2.targetLoc.end) < 0) {
            var sourceChar = mapping2.sourceLines.charAt(sourceCursor);
            var targetChar = targetLines.charAt(targetCursor);
            (0, tiny_invariant_1.default)(sourceChar === targetChar);
            var sourceName = mapping2.sourceLines.name;
            smg.addMapping({
              source: sourceName,
              original: { line: sourceCursor.line, column: sourceCursor.column },
              generated: { line: targetCursor.line, column: targetCursor.column }
            });
            if (!hasOwn.call(sourcesToContents, sourceName)) {
              var sourceContent = mapping2.sourceLines.toString();
              smg.setSourceContent(sourceName, sourceContent);
              sourcesToContents[sourceName] = sourceContent;
            }
            targetLines.nextPos(targetCursor, true);
            mapping2.sourceLines.nextPos(sourceCursor, true);
          }
        });
        targetLines.cachedSourceMap = smg;
        return smg.toJSON();
      };
      Lines2.prototype.bootstrapCharAt = function(pos) {
        (0, tiny_invariant_1.default)(typeof pos === "object");
        (0, tiny_invariant_1.default)(typeof pos.line === "number");
        (0, tiny_invariant_1.default)(typeof pos.column === "number");
        var line = pos.line, column = pos.column, strings = this.toString().split(lineTerminatorSeqExp), string2 = strings[line - 1];
        if (typeof string2 === "undefined")
          return "";
        if (column === string2.length && line < strings.length)
          return "\n";
        if (column >= string2.length)
          return "";
        return string2.charAt(column);
      };
      Lines2.prototype.charAt = function(pos) {
        (0, tiny_invariant_1.default)(typeof pos === "object");
        (0, tiny_invariant_1.default)(typeof pos.line === "number");
        (0, tiny_invariant_1.default)(typeof pos.column === "number");
        var line = pos.line, column = pos.column, secret = this, infos = secret.infos, info = infos[line - 1], c = column;
        if (typeof info === "undefined" || c < 0)
          return "";
        var indent = this.getIndentAt(line);
        if (c < indent)
          return " ";
        c += info.sliceStart - indent;
        if (c === info.sliceEnd && line < this.length)
          return "\n";
        if (c >= info.sliceEnd)
          return "";
        return info.line.charAt(c);
      };
      Lines2.prototype.stripMargin = function(width, skipFirstLine) {
        if (width === 0)
          return this;
        (0, tiny_invariant_1.default)(width > 0, "negative margin: " + width);
        if (skipFirstLine && this.length === 1)
          return this;
        var lines2 = new Lines2(this.infos.map(function(info, i) {
          if (info.line && (i > 0 || !skipFirstLine)) {
            info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: Math.max(0, info.indent - width) });
          }
          return info;
        }));
        if (this.mappings.length > 0) {
          var newMappings_1 = lines2.mappings;
          (0, tiny_invariant_1.default)(newMappings_1.length === 0);
          this.mappings.forEach(function(mapping2) {
            newMappings_1.push(mapping2.indent(width, skipFirstLine, true));
          });
        }
        return lines2;
      };
      Lines2.prototype.indent = function(by) {
        if (by === 0) {
          return this;
        }
        var lines2 = new Lines2(this.infos.map(function(info) {
          if (info.line && !info.locked) {
            info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: info.indent + by });
          }
          return info;
        }));
        if (this.mappings.length > 0) {
          var newMappings_2 = lines2.mappings;
          (0, tiny_invariant_1.default)(newMappings_2.length === 0);
          this.mappings.forEach(function(mapping2) {
            newMappings_2.push(mapping2.indent(by));
          });
        }
        return lines2;
      };
      Lines2.prototype.indentTail = function(by) {
        if (by === 0) {
          return this;
        }
        if (this.length < 2) {
          return this;
        }
        var lines2 = new Lines2(this.infos.map(function(info, i) {
          if (i > 0 && info.line && !info.locked) {
            info = tslib_1.__assign(tslib_1.__assign({}, info), { indent: info.indent + by });
          }
          return info;
        }));
        if (this.mappings.length > 0) {
          var newMappings_3 = lines2.mappings;
          (0, tiny_invariant_1.default)(newMappings_3.length === 0);
          this.mappings.forEach(function(mapping2) {
            newMappings_3.push(mapping2.indent(by, true));
          });
        }
        return lines2;
      };
      Lines2.prototype.lockIndentTail = function() {
        if (this.length < 2) {
          return this;
        }
        return new Lines2(this.infos.map(function(info, i) {
          return tslib_1.__assign(tslib_1.__assign({}, info), { locked: i > 0 });
        }));
      };
      Lines2.prototype.getIndentAt = function(line) {
        (0, tiny_invariant_1.default)(line >= 1, "no line " + line + " (line numbers start from 1)");
        return Math.max(this.infos[line - 1].indent, 0);
      };
      Lines2.prototype.guessTabWidth = function() {
        if (typeof this.cachedTabWidth === "number") {
          return this.cachedTabWidth;
        }
        var counts = [];
        var lastIndent = 0;
        for (var line = 1, last = this.length; line <= last; ++line) {
          var info = this.infos[line - 1];
          var sliced = info.line.slice(info.sliceStart, info.sliceEnd);
          if (isOnlyWhitespace(sliced)) {
            continue;
          }
          var diff = Math.abs(info.indent - lastIndent);
          counts[diff] = ~~counts[diff] + 1;
          lastIndent = info.indent;
        }
        var maxCount = -1;
        var result = 2;
        for (var tabWidth = 1; tabWidth < counts.length; tabWidth += 1) {
          if (hasOwn.call(counts, tabWidth) && counts[tabWidth] > maxCount) {
            maxCount = counts[tabWidth];
            result = tabWidth;
          }
        }
        return this.cachedTabWidth = result;
      };
      Lines2.prototype.startsWithComment = function() {
        if (this.infos.length === 0) {
          return false;
        }
        var firstLineInfo = this.infos[0], sliceStart = firstLineInfo.sliceStart, sliceEnd = firstLineInfo.sliceEnd, firstLine = firstLineInfo.line.slice(sliceStart, sliceEnd).trim();
        return firstLine.length === 0 || firstLine.slice(0, 2) === "//" || firstLine.slice(0, 2) === "/*";
      };
      Lines2.prototype.isOnlyWhitespace = function() {
        return isOnlyWhitespace(this.toString());
      };
      Lines2.prototype.isPrecededOnlyByWhitespace = function(pos) {
        var info = this.infos[pos.line - 1];
        var indent = Math.max(info.indent, 0);
        var diff = pos.column - indent;
        if (diff <= 0) {
          return true;
        }
        var start = info.sliceStart;
        var end = Math.min(start + diff, info.sliceEnd);
        var prefix = info.line.slice(start, end);
        return isOnlyWhitespace(prefix);
      };
      Lines2.prototype.getLineLength = function(line) {
        var info = this.infos[line - 1];
        return this.getIndentAt(line) + info.sliceEnd - info.sliceStart;
      };
      Lines2.prototype.nextPos = function(pos, skipSpaces) {
        if (skipSpaces === void 0) {
          skipSpaces = false;
        }
        var l = Math.max(pos.line, 0), c = Math.max(pos.column, 0);
        if (c < this.getLineLength(l)) {
          pos.column += 1;
          return skipSpaces ? !!this.skipSpaces(pos, false, true) : true;
        }
        if (l < this.length) {
          pos.line += 1;
          pos.column = 0;
          return skipSpaces ? !!this.skipSpaces(pos, false, true) : true;
        }
        return false;
      };
      Lines2.prototype.prevPos = function(pos, skipSpaces) {
        if (skipSpaces === void 0) {
          skipSpaces = false;
        }
        var l = pos.line, c = pos.column;
        if (c < 1) {
          l -= 1;
          if (l < 1)
            return false;
          c = this.getLineLength(l);
        } else {
          c = Math.min(c - 1, this.getLineLength(l));
        }
        pos.line = l;
        pos.column = c;
        return skipSpaces ? !!this.skipSpaces(pos, true, true) : true;
      };
      Lines2.prototype.firstPos = function() {
        return { line: 1, column: 0 };
      };
      Lines2.prototype.lastPos = function() {
        return {
          line: this.length,
          column: this.getLineLength(this.length)
        };
      };
      Lines2.prototype.skipSpaces = function(pos, backward, modifyInPlace) {
        if (backward === void 0) {
          backward = false;
        }
        if (modifyInPlace === void 0) {
          modifyInPlace = false;
        }
        if (pos) {
          pos = modifyInPlace ? pos : {
            line: pos.line,
            column: pos.column
          };
        } else if (backward) {
          pos = this.lastPos();
        } else {
          pos = this.firstPos();
        }
        if (backward) {
          while (this.prevPos(pos)) {
            if (!isOnlyWhitespace(this.charAt(pos)) && this.nextPos(pos)) {
              return pos;
            }
          }
          return null;
        } else {
          while (isOnlyWhitespace(this.charAt(pos))) {
            if (!this.nextPos(pos)) {
              return null;
            }
          }
          return pos;
        }
      };
      Lines2.prototype.trimLeft = function() {
        var pos = this.skipSpaces(this.firstPos(), false, true);
        return pos ? this.slice(pos) : emptyLines;
      };
      Lines2.prototype.trimRight = function() {
        var pos = this.skipSpaces(this.lastPos(), true, true);
        return pos ? this.slice(this.firstPos(), pos) : emptyLines;
      };
      Lines2.prototype.trim = function() {
        var start = this.skipSpaces(this.firstPos(), false, true);
        if (start === null) {
          return emptyLines;
        }
        var end = this.skipSpaces(this.lastPos(), true, true);
        if (end === null) {
          return emptyLines;
        }
        return this.slice(start, end);
      };
      Lines2.prototype.eachPos = function(callback, startPos, skipSpaces) {
        if (startPos === void 0) {
          startPos = this.firstPos();
        }
        if (skipSpaces === void 0) {
          skipSpaces = false;
        }
        var pos = this.firstPos();
        if (startPos) {
          pos.line = startPos.line, pos.column = startPos.column;
        }
        if (skipSpaces && !this.skipSpaces(pos, false, true)) {
          return;
        }
        do
          callback.call(this, pos);
        while (this.nextPos(pos, skipSpaces));
      };
      Lines2.prototype.bootstrapSlice = function(start, end) {
        var strings = this.toString().split(lineTerminatorSeqExp).slice(start.line - 1, end.line);
        if (strings.length > 0) {
          strings.push(strings.pop().slice(0, end.column));
          strings[0] = strings[0].slice(start.column);
        }
        return fromString(strings.join("\n"));
      };
      Lines2.prototype.slice = function(start, end) {
        if (!end) {
          if (!start) {
            return this;
          }
          end = this.lastPos();
        }
        if (!start) {
          throw new Error("cannot slice with end but not start");
        }
        var sliced = this.infos.slice(start.line - 1, end.line);
        if (start.line === end.line) {
          sliced[0] = sliceInfo(sliced[0], start.column, end.column);
        } else {
          (0, tiny_invariant_1.default)(start.line < end.line);
          sliced[0] = sliceInfo(sliced[0], start.column);
          sliced.push(sliceInfo(sliced.pop(), 0, end.column));
        }
        var lines2 = new Lines2(sliced);
        if (this.mappings.length > 0) {
          var newMappings_4 = lines2.mappings;
          (0, tiny_invariant_1.default)(newMappings_4.length === 0);
          this.mappings.forEach(function(mapping2) {
            var sliced2 = mapping2.slice(this, start, end);
            if (sliced2) {
              newMappings_4.push(sliced2);
            }
          }, this);
        }
        return lines2;
      };
      Lines2.prototype.bootstrapSliceString = function(start, end, options2) {
        return this.slice(start, end).toString(options2);
      };
      Lines2.prototype.sliceString = function(start, end, options2) {
        if (start === void 0) {
          start = this.firstPos();
        }
        if (end === void 0) {
          end = this.lastPos();
        }
        var _a = (0, options_1.normalize)(options2), tabWidth = _a.tabWidth, useTabs = _a.useTabs, reuseWhitespace = _a.reuseWhitespace, lineTerminator = _a.lineTerminator;
        var parts = [];
        for (var line = start.line; line <= end.line; ++line) {
          var info = this.infos[line - 1];
          if (line === start.line) {
            if (line === end.line) {
              info = sliceInfo(info, start.column, end.column);
            } else {
              info = sliceInfo(info, start.column);
            }
          } else if (line === end.line) {
            info = sliceInfo(info, 0, end.column);
          }
          var indent = Math.max(info.indent, 0);
          var before_1 = info.line.slice(0, info.sliceStart);
          if (reuseWhitespace && isOnlyWhitespace(before_1) && countSpaces(before_1, tabWidth) === indent) {
            parts.push(info.line.slice(0, info.sliceEnd));
            continue;
          }
          var tabs = 0;
          var spaces = indent;
          if (useTabs) {
            tabs = Math.floor(indent / tabWidth);
            spaces -= tabs * tabWidth;
          }
          var result = "";
          if (tabs > 0) {
            result += new Array(tabs + 1).join("	");
          }
          if (spaces > 0) {
            result += new Array(spaces + 1).join(" ");
          }
          result += info.line.slice(info.sliceStart, info.sliceEnd);
          parts.push(result);
        }
        return parts.join(lineTerminator);
      };
      Lines2.prototype.isEmpty = function() {
        return this.length < 2 && this.getLineLength(1) < 1;
      };
      Lines2.prototype.join = function(elements) {
        var separator = this;
        var infos = [];
        var mappings = [];
        var prevInfo;
        function appendLines(linesOrNull) {
          if (linesOrNull === null) {
            return;
          }
          if (prevInfo) {
            var info = linesOrNull.infos[0];
            var indent = new Array(info.indent + 1).join(" ");
            var prevLine_1 = infos.length;
            var prevColumn_1 = Math.max(prevInfo.indent, 0) + prevInfo.sliceEnd - prevInfo.sliceStart;
            prevInfo.line = prevInfo.line.slice(0, prevInfo.sliceEnd) + indent + info.line.slice(info.sliceStart, info.sliceEnd);
            prevInfo.locked = prevInfo.locked || info.locked;
            prevInfo.sliceEnd = prevInfo.line.length;
            if (linesOrNull.mappings.length > 0) {
              linesOrNull.mappings.forEach(function(mapping2) {
                mappings.push(mapping2.add(prevLine_1, prevColumn_1));
              });
            }
          } else if (linesOrNull.mappings.length > 0) {
            mappings.push.apply(mappings, linesOrNull.mappings);
          }
          linesOrNull.infos.forEach(function(info2, i) {
            if (!prevInfo || i > 0) {
              prevInfo = tslib_1.__assign({}, info2);
              infos.push(prevInfo);
            }
          });
        }
        function appendWithSeparator(linesOrNull, i) {
          if (i > 0)
            appendLines(separator);
          appendLines(linesOrNull);
        }
        elements.map(function(elem) {
          var lines3 = fromString(elem);
          if (lines3.isEmpty())
            return null;
          return lines3;
        }).forEach(function(linesOrNull, i) {
          if (separator.isEmpty()) {
            appendLines(linesOrNull);
          } else {
            appendWithSeparator(linesOrNull, i);
          }
        });
        if (infos.length < 1)
          return emptyLines;
        var lines2 = new Lines2(infos);
        lines2.mappings = mappings;
        return lines2;
      };
      Lines2.prototype.concat = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var list = [this];
        list.push.apply(list, args);
        (0, tiny_invariant_1.default)(list.length === args.length + 1);
        return emptyLines.join(list);
      };
      return Lines2;
    }()
  );
  lines.Lines = Lines;
  var fromStringCache = {};
  var hasOwn = fromStringCache.hasOwnProperty;
  var maxCacheKeyLen = 10;
  function countSpaces(spaces, tabWidth) {
    var count = 0;
    var len = spaces.length;
    for (var i = 0; i < len; ++i) {
      switch (spaces.charCodeAt(i)) {
        case 9: {
          (0, tiny_invariant_1.default)(typeof tabWidth === "number");
          (0, tiny_invariant_1.default)(tabWidth > 0);
          var next = Math.ceil(count / tabWidth) * tabWidth;
          if (next === count) {
            count += tabWidth;
          } else {
            count = next;
          }
          break;
        }
        case 11:
        case 12:
        case 13:
        case 65279:
          break;
        case 32:
        default:
          count += 1;
          break;
      }
    }
    return count;
  }
  lines.countSpaces = countSpaces;
  var leadingSpaceExp = /^\s*/;
  var lineTerminatorSeqExp = /\u000D\u000A|\u000D(?!\u000A)|\u000A|\u2028|\u2029/;
  function fromString(string2, options2) {
    if (string2 instanceof Lines)
      return string2;
    string2 += "";
    var tabWidth = options2 && options2.tabWidth;
    var tabless = string2.indexOf("	") < 0;
    var cacheable = !options2 && tabless && string2.length <= maxCacheKeyLen;
    (0, tiny_invariant_1.default)(tabWidth || tabless, "No tab width specified but encountered tabs in string\n" + string2);
    if (cacheable && hasOwn.call(fromStringCache, string2))
      return fromStringCache[string2];
    var lines2 = new Lines(string2.split(lineTerminatorSeqExp).map(function(line) {
      var spaces = leadingSpaceExp.exec(line)[0];
      return {
        line,
        indent: countSpaces(spaces, tabWidth),
        // Boolean indicating whether this line can be reindented.
        locked: false,
        sliceStart: spaces.length,
        sliceEnd: line.length
      };
    }), (0, options_1.normalize)(options2).sourceFileName);
    if (cacheable)
      fromStringCache[string2] = lines2;
    return lines2;
  }
  lines.fromString = fromString;
  function isOnlyWhitespace(string2) {
    return !/\S/.test(string2);
  }
  function sliceInfo(info, startCol, endCol) {
    var sliceStart = info.sliceStart;
    var sliceEnd = info.sliceEnd;
    var indent = Math.max(info.indent, 0);
    var lineLength = indent + sliceEnd - sliceStart;
    if (typeof endCol === "undefined") {
      endCol = lineLength;
    }
    startCol = Math.max(startCol, 0);
    endCol = Math.min(endCol, lineLength);
    endCol = Math.max(endCol, startCol);
    if (endCol < indent) {
      indent = endCol;
      sliceEnd = sliceStart;
    } else {
      sliceEnd -= lineLength - endCol;
    }
    lineLength = endCol;
    lineLength -= startCol;
    if (startCol < indent) {
      indent -= startCol;
    } else {
      startCol -= indent;
      indent = 0;
      sliceStart += startCol;
    }
    (0, tiny_invariant_1.default)(indent >= 0);
    (0, tiny_invariant_1.default)(sliceStart <= sliceEnd);
    (0, tiny_invariant_1.default)(lineLength === indent + sliceEnd - sliceStart);
    if (info.indent === indent && info.sliceStart === sliceStart && info.sliceEnd === sliceEnd) {
      return info;
    }
    return {
      line: info.line,
      indent,
      // A destructive slice always unlocks indentation.
      locked: false,
      sliceStart,
      sliceEnd
    };
  }
  function concat(elements) {
    return emptyLines.join(elements);
  }
  lines.concat = concat;
  var emptyLines = fromString("");
  return lines;
}
var comments = {};
var hasRequiredComments;
function requireComments() {
  if (hasRequiredComments) return comments;
  hasRequiredComments = 1;
  Object.defineProperty(comments, "__esModule", { value: true });
  comments.printComments = comments.attach = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var types2 = tslib_1.__importStar(requireMain());
  var n = types2.namedTypes;
  var isArray = types2.builtInTypes.array;
  var isObject = types2.builtInTypes.object;
  var lines_1 = requireLines();
  var util_1 = requireUtil();
  var childNodesCache = /* @__PURE__ */ new WeakMap();
  function getSortedChildNodes(node, lines2, resultArray) {
    if (!node) {
      return resultArray;
    }
    (0, util_1.fixFaultyLocations)(node, lines2);
    if (resultArray) {
      if (n.Node.check(node) && n.SourceLocation.check(node.loc)) {
        var i = resultArray.length - 1;
        for (; i >= 0; --i) {
          var child = resultArray[i];
          if (child && child.loc && (0, util_1.comparePos)(child.loc.end, node.loc.start) <= 0) {
            break;
          }
        }
        resultArray.splice(i + 1, 0, node);
        return resultArray;
      }
    } else {
      var childNodes = childNodesCache.get(node);
      if (childNodes) {
        return childNodes;
      }
    }
    var names;
    if (isArray.check(node)) {
      names = Object.keys(node);
    } else if (isObject.check(node)) {
      names = types2.getFieldNames(node);
    } else {
      return resultArray;
    }
    if (!resultArray) {
      childNodesCache.set(node, resultArray = []);
    }
    for (var i = 0, nameCount = names.length; i < nameCount; ++i) {
      getSortedChildNodes(node[names[i]], lines2, resultArray);
    }
    return resultArray;
  }
  function decorateComment(node, comment, lines2) {
    var childNodes = getSortedChildNodes(node, lines2);
    var left = 0;
    var right = childNodes && childNodes.length;
    var precedingNode;
    var followingNode;
    while (typeof right === "number" && left < right) {
      var middle = left + right >> 1;
      var child = childNodes[middle];
      if ((0, util_1.comparePos)(child.loc.start, comment.loc.start) <= 0 && (0, util_1.comparePos)(comment.loc.end, child.loc.end) <= 0) {
        decorateComment(comment.enclosingNode = child, comment, lines2);
        return;
      }
      if ((0, util_1.comparePos)(child.loc.end, comment.loc.start) <= 0) {
        precedingNode = child;
        left = middle + 1;
        continue;
      }
      if ((0, util_1.comparePos)(comment.loc.end, child.loc.start) <= 0) {
        followingNode = child;
        right = middle;
        continue;
      }
      throw new Error("Comment location overlaps with node location");
    }
    if (precedingNode) {
      comment.precedingNode = precedingNode;
    }
    if (followingNode) {
      comment.followingNode = followingNode;
    }
  }
  function attach(comments2, ast2, lines2) {
    if (!isArray.check(comments2)) {
      return;
    }
    var tiesToBreak = [];
    comments2.forEach(function(comment) {
      comment.loc.lines = lines2;
      decorateComment(ast2, comment, lines2);
      var pn = comment.precedingNode;
      var en = comment.enclosingNode;
      var fn = comment.followingNode;
      if (pn && fn) {
        var tieCount = tiesToBreak.length;
        if (tieCount > 0) {
          var lastTie = tiesToBreak[tieCount - 1];
          (0, tiny_invariant_1.default)(lastTie.precedingNode === comment.precedingNode === (lastTie.followingNode === comment.followingNode));
          if (lastTie.followingNode !== comment.followingNode) {
            breakTies(tiesToBreak, lines2);
          }
        }
        tiesToBreak.push(comment);
      } else if (pn) {
        breakTies(tiesToBreak, lines2);
        addTrailingComment(pn, comment);
      } else if (fn) {
        breakTies(tiesToBreak, lines2);
        addLeadingComment(fn, comment);
      } else if (en) {
        breakTies(tiesToBreak, lines2);
        addDanglingComment(en, comment);
      } else {
        throw new Error("AST contains no nodes at all?");
      }
    });
    breakTies(tiesToBreak, lines2);
    comments2.forEach(function(comment) {
      delete comment.precedingNode;
      delete comment.enclosingNode;
      delete comment.followingNode;
    });
  }
  comments.attach = attach;
  function breakTies(tiesToBreak, lines2) {
    var tieCount = tiesToBreak.length;
    if (tieCount === 0) {
      return;
    }
    var pn = tiesToBreak[0].precedingNode;
    var fn = tiesToBreak[0].followingNode;
    var gapEndPos = fn.loc.start;
    var indexOfFirstLeadingComment = tieCount;
    var comment;
    for (; indexOfFirstLeadingComment > 0; --indexOfFirstLeadingComment) {
      comment = tiesToBreak[indexOfFirstLeadingComment - 1];
      (0, tiny_invariant_1.default)(comment.precedingNode === pn);
      (0, tiny_invariant_1.default)(comment.followingNode === fn);
      var gap = lines2.sliceString(comment.loc.end, gapEndPos);
      if (/\S/.test(gap)) {
        break;
      }
      gapEndPos = comment.loc.start;
    }
    while (indexOfFirstLeadingComment <= tieCount && (comment = tiesToBreak[indexOfFirstLeadingComment]) && // If the comment is a //-style comment and indented more
    // deeply than the node itself, reconsider it as trailing.
    (comment.type === "Line" || comment.type === "CommentLine") && comment.loc.start.column > fn.loc.start.column) {
      ++indexOfFirstLeadingComment;
    }
    if (indexOfFirstLeadingComment) {
      var enclosingNode = tiesToBreak[indexOfFirstLeadingComment - 1].enclosingNode;
      if ((enclosingNode === null || enclosingNode === void 0 ? void 0 : enclosingNode.type) === "CallExpression") {
        --indexOfFirstLeadingComment;
      }
    }
    tiesToBreak.forEach(function(comment2, i) {
      if (i < indexOfFirstLeadingComment) {
        addTrailingComment(pn, comment2);
      } else {
        addLeadingComment(fn, comment2);
      }
    });
    tiesToBreak.length = 0;
  }
  function addCommentHelper(node, comment) {
    var comments2 = node.comments || (node.comments = []);
    comments2.push(comment);
  }
  function addLeadingComment(node, comment) {
    comment.leading = true;
    comment.trailing = false;
    addCommentHelper(node, comment);
  }
  function addDanglingComment(node, comment) {
    comment.leading = false;
    comment.trailing = false;
    addCommentHelper(node, comment);
  }
  function addTrailingComment(node, comment) {
    comment.leading = false;
    comment.trailing = true;
    addCommentHelper(node, comment);
  }
  function printLeadingComment(commentPath, print) {
    var comment = commentPath.getValue();
    n.Comment.assert(comment);
    var loc = comment.loc;
    var lines2 = loc && loc.lines;
    var parts = [print(commentPath)];
    if (comment.trailing) {
      parts.push("\n");
    } else if (lines2 instanceof lines_1.Lines) {
      var trailingSpace = lines2.slice(loc.end, lines2.skipSpaces(loc.end) || lines2.lastPos());
      if (trailingSpace.length === 1) {
        parts.push(trailingSpace);
      } else {
        parts.push(new Array(trailingSpace.length).join("\n"));
      }
    } else {
      parts.push("\n");
    }
    return (0, lines_1.concat)(parts);
  }
  function printTrailingComment(commentPath, print) {
    var comment = commentPath.getValue(commentPath);
    n.Comment.assert(comment);
    var loc = comment.loc;
    var lines2 = loc && loc.lines;
    var parts = [];
    if (lines2 instanceof lines_1.Lines) {
      var fromPos = lines2.skipSpaces(loc.start, true) || lines2.firstPos();
      var leadingSpace = lines2.slice(fromPos, loc.start);
      if (leadingSpace.length === 1) {
        parts.push(leadingSpace);
      } else {
        parts.push(new Array(leadingSpace.length).join("\n"));
      }
    }
    parts.push(print(commentPath));
    return (0, lines_1.concat)(parts);
  }
  function printComments(path2, print) {
    var value = path2.getValue();
    var innerLines = print(path2);
    var comments2 = n.Node.check(value) && types2.getFieldValue(value, "comments");
    if (!comments2 || comments2.length === 0) {
      return innerLines;
    }
    var leadingParts = [];
    var trailingParts = [innerLines];
    path2.each(function(commentPath) {
      var comment = commentPath.getValue();
      var leading = types2.getFieldValue(comment, "leading");
      var trailing = types2.getFieldValue(comment, "trailing");
      if (leading || trailing && !(n.Statement.check(value) || comment.type === "Block" || comment.type === "CommentBlock")) {
        leadingParts.push(printLeadingComment(commentPath, print));
      } else if (trailing) {
        trailingParts.push(printTrailingComment(commentPath, print));
      }
    }, "comments");
    leadingParts.push.apply(leadingParts, trailingParts);
    return (0, lines_1.concat)(leadingParts);
  }
  comments.printComments = printComments;
  return comments;
}
var hasRequiredParser;
function requireParser() {
  if (hasRequiredParser) return parser;
  hasRequiredParser = 1;
  Object.defineProperty(parser, "__esModule", { value: true });
  parser.parse = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var types2 = tslib_1.__importStar(requireMain());
  var b2 = types2.builders;
  var isObject = types2.builtInTypes.object;
  var isArray = types2.builtInTypes.array;
  var options_1 = requireOptions();
  var lines_1 = requireLines();
  var comments_1 = requireComments();
  var util2 = tslib_1.__importStar(requireUtil());
  function parse(source, options2) {
    options2 = (0, options_1.normalize)(options2);
    var lines2 = (0, lines_1.fromString)(source, options2);
    var sourceWithoutTabs = lines2.toString({
      tabWidth: options2.tabWidth,
      reuseWhitespace: false,
      useTabs: false
    });
    var comments2 = [];
    var ast2 = options2.parser.parse(sourceWithoutTabs, {
      jsx: true,
      loc: true,
      locations: true,
      range: options2.range,
      comment: true,
      onComment: comments2,
      tolerant: util2.getOption(options2, "tolerant", true),
      ecmaVersion: 6,
      sourceType: util2.getOption(options2, "sourceType", "module")
    });
    var tokens = Array.isArray(ast2.tokens) ? ast2.tokens : requireEsprima$1().tokenize(sourceWithoutTabs, {
      loc: true
    });
    delete ast2.tokens;
    tokens.forEach(function(token) {
      if (typeof token.value !== "string") {
        token.value = lines2.sliceString(token.loc.start, token.loc.end);
      }
    });
    if (Array.isArray(ast2.comments)) {
      comments2 = ast2.comments;
      delete ast2.comments;
    }
    if (ast2.loc) {
      util2.fixFaultyLocations(ast2, lines2);
    } else {
      ast2.loc = {
        start: lines2.firstPos(),
        end: lines2.lastPos()
      };
    }
    ast2.loc.lines = lines2;
    ast2.loc.indent = 0;
    var file;
    var program;
    if (ast2.type === "Program") {
      program = ast2;
      file = b2.file(ast2, options2.sourceFileName || null);
      file.loc = {
        start: lines2.firstPos(),
        end: lines2.lastPos(),
        lines: lines2,
        indent: 0
      };
    } else if (ast2.type === "File") {
      file = ast2;
      program = file.program;
    }
    if (options2.tokens) {
      file.tokens = tokens;
    }
    var trueProgramLoc = util2.getTrueLoc({
      type: program.type,
      loc: program.loc,
      body: [],
      comments: comments2
    }, lines2);
    program.loc.start = trueProgramLoc.start;
    program.loc.end = trueProgramLoc.end;
    (0, comments_1.attach)(comments2, program.body.length ? file.program : file, lines2);
    return new TreeCopier(lines2, tokens).copy(file);
  }
  parser.parse = parse;
  var TreeCopier = function TreeCopier2(lines2, tokens) {
    (0, tiny_invariant_1.default)(this instanceof TreeCopier2);
    this.lines = lines2;
    this.tokens = tokens;
    this.startTokenIndex = 0;
    this.endTokenIndex = tokens.length;
    this.indent = 0;
    this.seen = /* @__PURE__ */ new Map();
  };
  var TCp = TreeCopier.prototype;
  TCp.copy = function(node) {
    if (this.seen.has(node)) {
      return this.seen.get(node);
    }
    if (isArray.check(node)) {
      var copy_1 = new Array(node.length);
      this.seen.set(node, copy_1);
      node.forEach(function(item, i2) {
        copy_1[i2] = this.copy(item);
      }, this);
      return copy_1;
    }
    if (!isObject.check(node)) {
      return node;
    }
    util2.fixFaultyLocations(node, this.lines);
    var copy = Object.create(Object.getPrototypeOf(node), {
      original: {
        // Provide a link from the copy to the original.
        value: node,
        configurable: false,
        enumerable: false,
        writable: true
      }
    });
    this.seen.set(node, copy);
    var loc = node.loc;
    var oldIndent = this.indent;
    var newIndent = oldIndent;
    var oldStartTokenIndex = this.startTokenIndex;
    var oldEndTokenIndex = this.endTokenIndex;
    if (loc) {
      if (node.type === "Block" || node.type === "Line" || node.type === "CommentBlock" || node.type === "CommentLine" || this.lines.isPrecededOnlyByWhitespace(loc.start)) {
        newIndent = this.indent = loc.start.column;
      }
      loc.lines = this.lines;
      loc.tokens = this.tokens;
      loc.indent = newIndent;
      this.findTokenRange(loc);
    }
    var keys = Object.keys(node);
    var keyCount = keys.length;
    for (var i = 0; i < keyCount; ++i) {
      var key = keys[i];
      if (key === "loc") {
        copy[key] = node[key];
      } else if (key === "tokens" && node.type === "File") {
        copy[key] = node[key];
      } else {
        copy[key] = this.copy(node[key]);
      }
    }
    this.indent = oldIndent;
    this.startTokenIndex = oldStartTokenIndex;
    this.endTokenIndex = oldEndTokenIndex;
    return copy;
  };
  TCp.findTokenRange = function(loc) {
    while (this.startTokenIndex > 0) {
      var token = loc.tokens[this.startTokenIndex];
      if (util2.comparePos(loc.start, token.loc.start) < 0) {
        --this.startTokenIndex;
      } else
        break;
    }
    while (this.endTokenIndex < loc.tokens.length) {
      var token = loc.tokens[this.endTokenIndex];
      if (util2.comparePos(token.loc.end, loc.end) < 0) {
        ++this.endTokenIndex;
      } else
        break;
    }
    while (this.startTokenIndex < this.endTokenIndex) {
      var token = loc.tokens[this.startTokenIndex];
      if (util2.comparePos(token.loc.start, loc.start) < 0) {
        ++this.startTokenIndex;
      } else
        break;
    }
    loc.start.token = this.startTokenIndex;
    while (this.endTokenIndex > this.startTokenIndex) {
      var token = loc.tokens[this.endTokenIndex - 1];
      if (util2.comparePos(loc.end, token.loc.end) < 0) {
        --this.endTokenIndex;
      } else
        break;
    }
    loc.end.token = this.endTokenIndex;
  };
  return parser;
}
var printer = {};
var fastPath = {};
var hasRequiredFastPath;
function requireFastPath() {
  if (hasRequiredFastPath) return fastPath;
  hasRequiredFastPath = 1;
  Object.defineProperty(fastPath, "__esModule", { value: true });
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var types2 = tslib_1.__importStar(requireMain());
  var util2 = tslib_1.__importStar(requireUtil());
  var n = types2.namedTypes;
  var isArray = types2.builtInTypes.array;
  var isNumber = types2.builtInTypes.number;
  var PRECEDENCE = {};
  [
    ["??"],
    ["||"],
    ["&&"],
    ["|"],
    ["^"],
    ["&"],
    ["==", "===", "!=", "!=="],
    ["<", ">", "<=", ">=", "in", "instanceof"],
    [">>", "<<", ">>>"],
    ["+", "-"],
    ["*", "/", "%"],
    ["**"]
  ].forEach(function(tier, i) {
    tier.forEach(function(op) {
      PRECEDENCE[op] = i;
    });
  });
  var FastPath = function FastPath2(value) {
    (0, tiny_invariant_1.default)(this instanceof FastPath2);
    this.stack = [value];
  };
  var FPp = FastPath.prototype;
  FastPath.from = function(obj) {
    if (obj instanceof FastPath) {
      return obj.copy();
    }
    if (obj instanceof types2.NodePath) {
      var copy = Object.create(FastPath.prototype);
      var stack = [obj.value];
      for (var pp = void 0; pp = obj.parentPath; obj = pp)
        stack.push(obj.name, pp.value);
      copy.stack = stack.reverse();
      return copy;
    }
    return new FastPath(obj);
  };
  FPp.copy = function copy() {
    var copy2 = Object.create(FastPath.prototype);
    copy2.stack = this.stack.slice(0);
    return copy2;
  };
  FPp.getName = function getName() {
    var s = this.stack;
    var len = s.length;
    if (len > 1) {
      return s[len - 2];
    }
    return null;
  };
  FPp.getValue = function getValue() {
    var s = this.stack;
    return s[s.length - 1];
  };
  FPp.valueIsDuplicate = function() {
    var s = this.stack;
    var valueIndex = s.length - 1;
    return s.lastIndexOf(s[valueIndex], valueIndex - 1) >= 0;
  };
  function getNodeHelper(path2, count) {
    var s = path2.stack;
    for (var i = s.length - 1; i >= 0; i -= 2) {
      var value = s[i];
      if (n.Node.check(value) && --count < 0) {
        return value;
      }
    }
    return null;
  }
  FPp.getNode = function getNode(count) {
    if (count === void 0) {
      count = 0;
    }
    return getNodeHelper(this, ~~count);
  };
  FPp.getParentNode = function getParentNode(count) {
    if (count === void 0) {
      count = 0;
    }
    return getNodeHelper(this, ~~count + 1);
  };
  FPp.getRootValue = function getRootValue() {
    var s = this.stack;
    if (s.length % 2 === 0) {
      return s[1];
    }
    return s[0];
  };
  FPp.call = function call(callback) {
    var s = this.stack;
    var origLen = s.length;
    var value = s[origLen - 1];
    var argc = arguments.length;
    for (var i = 1; i < argc; ++i) {
      var name = arguments[i];
      value = value[name];
      s.push(name, value);
    }
    var result = callback(this);
    s.length = origLen;
    return result;
  };
  FPp.each = function each(callback) {
    var s = this.stack;
    var origLen = s.length;
    var value = s[origLen - 1];
    var argc = arguments.length;
    for (var i = 1; i < argc; ++i) {
      var name = arguments[i];
      value = value[name];
      s.push(name, value);
    }
    for (var i = 0; i < value.length; ++i) {
      if (i in value) {
        s.push(i, value[i]);
        callback(this);
        s.length -= 2;
      }
    }
    s.length = origLen;
  };
  FPp.map = function map(callback) {
    var s = this.stack;
    var origLen = s.length;
    var value = s[origLen - 1];
    var argc = arguments.length;
    for (var i = 1; i < argc; ++i) {
      var name = arguments[i];
      value = value[name];
      s.push(name, value);
    }
    var result = new Array(value.length);
    for (var i = 0; i < value.length; ++i) {
      if (i in value) {
        s.push(i, value[i]);
        result[i] = callback(this, i);
        s.length -= 2;
      }
    }
    s.length = origLen;
    return result;
  };
  FPp.hasParens = function() {
    var node = this.getNode();
    var prevToken = this.getPrevToken(node);
    if (!prevToken) {
      return false;
    }
    var nextToken = this.getNextToken(node);
    if (!nextToken) {
      return false;
    }
    if (prevToken.value === "(") {
      if (nextToken.value === ")") {
        return true;
      }
      var justNeedsOpeningParen = !this.canBeFirstInStatement() && this.firstInStatement() && !this.needsParens(true);
      if (justNeedsOpeningParen) {
        return true;
      }
    }
    return false;
  };
  FPp.getPrevToken = function(node) {
    node = node || this.getNode();
    var loc = node && node.loc;
    var tokens = loc && loc.tokens;
    if (tokens && loc.start.token > 0) {
      var token = tokens[loc.start.token - 1];
      if (token) {
        var rootLoc = this.getRootValue().loc;
        if (util2.comparePos(rootLoc.start, token.loc.start) <= 0) {
          return token;
        }
      }
    }
    return null;
  };
  FPp.getNextToken = function(node) {
    node = node || this.getNode();
    var loc = node && node.loc;
    var tokens = loc && loc.tokens;
    if (tokens && loc.end.token < tokens.length) {
      var token = tokens[loc.end.token];
      if (token) {
        var rootLoc = this.getRootValue().loc;
        if (util2.comparePos(token.loc.end, rootLoc.end) <= 0) {
          return token;
        }
      }
    }
    return null;
  };
  FPp.needsParens = function(assumeExpressionContext) {
    var node = this.getNode();
    if (node.type === "AssignmentExpression" && node.left.type === "ObjectPattern") {
      return true;
    }
    var parent = this.getParentNode();
    var name = this.getName();
    if (this.getValue() !== node) {
      return false;
    }
    if (n.Statement.check(node)) {
      return false;
    }
    if (node.type === "Identifier") {
      return false;
    }
    if (parent && parent.type === "ParenthesizedExpression") {
      return false;
    }
    if (node.extra && node.extra.parenthesized) {
      return true;
    }
    if (!parent)
      return false;
    if (node.type === "UnaryExpression" && parent.type === "BinaryExpression" && name === "left" && parent.left === node && parent.operator === "**") {
      return true;
    }
    switch (node.type) {
      case "UnaryExpression":
      case "SpreadElement":
      case "SpreadProperty":
        return parent.type === "MemberExpression" && name === "object" && parent.object === node;
      case "BinaryExpression":
      case "LogicalExpression":
        switch (parent.type) {
          case "CallExpression":
            return name === "callee" && parent.callee === node;
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
            return true;
          case "MemberExpression":
            return name === "object" && parent.object === node;
          case "BinaryExpression":
          case "LogicalExpression": {
            var po = parent.operator;
            var pp = PRECEDENCE[po];
            var no = node.operator;
            var np = PRECEDENCE[no];
            if (pp > np) {
              return true;
            }
            if (pp === np && name === "right") {
              (0, tiny_invariant_1.default)(parent.right === node);
              return true;
            }
            break;
          }
          default:
            return false;
        }
        break;
      case "SequenceExpression":
        switch (parent.type) {
          case "ReturnStatement":
            return false;
          case "ForStatement":
            return false;
          case "ExpressionStatement":
            return name !== "expression";
          default:
            return true;
        }
      case "OptionalIndexedAccessType":
        return node.optional && parent.type === "IndexedAccessType";
      case "IntersectionTypeAnnotation":
      case "UnionTypeAnnotation":
        return parent.type === "NullableTypeAnnotation";
      case "Literal":
        return parent.type === "MemberExpression" && isNumber.check(node.value) && name === "object" && parent.object === node;
      case "NumericLiteral":
        return parent.type === "MemberExpression" && name === "object" && parent.object === node;
      case "YieldExpression":
      case "AwaitExpression":
      case "AssignmentExpression":
      case "ConditionalExpression":
        switch (parent.type) {
          case "UnaryExpression":
          case "SpreadElement":
          case "SpreadProperty":
          case "BinaryExpression":
          case "LogicalExpression":
            return true;
          case "CallExpression":
          case "NewExpression":
            return name === "callee" && parent.callee === node;
          case "ConditionalExpression":
            return name === "test" && parent.test === node;
          case "MemberExpression":
            return name === "object" && parent.object === node;
          default:
            return false;
        }
      case "ArrowFunctionExpression":
        if (n.CallExpression.check(parent) && name === "callee" && parent.callee === node) {
          return true;
        }
        if (n.MemberExpression.check(parent) && name === "object" && parent.object === node) {
          return true;
        }
        if (n.TSAsExpression && n.TSAsExpression.check(parent) && name === "expression" && parent.expression === node) {
          return true;
        }
        return isBinary(parent);
      case "ObjectExpression":
        if (parent.type === "ArrowFunctionExpression" && name === "body" && parent.body === node) {
          return true;
        }
        break;
      case "TSAsExpression":
        if (parent.type === "ArrowFunctionExpression" && name === "body" && parent.body === node && node.expression.type === "ObjectExpression") {
          return true;
        }
        break;
      case "CallExpression":
        if (name === "declaration" && n.ExportDefaultDeclaration.check(parent) && n.FunctionExpression.check(node.callee)) {
          return true;
        }
    }
    if (parent.type === "NewExpression" && name === "callee" && parent.callee === node) {
      return containsCallExpression(node);
    }
    if (assumeExpressionContext !== true && !this.canBeFirstInStatement() && this.firstInStatement()) {
      return true;
    }
    return false;
  };
  function isBinary(node) {
    return n.BinaryExpression.check(node) || n.LogicalExpression.check(node);
  }
  function containsCallExpression(node) {
    if (n.CallExpression.check(node)) {
      return true;
    }
    if (isArray.check(node)) {
      return node.some(containsCallExpression);
    }
    if (n.Node.check(node)) {
      return types2.someField(node, function(_name, child) {
        return containsCallExpression(child);
      });
    }
    return false;
  }
  FPp.canBeFirstInStatement = function() {
    var node = this.getNode();
    if (n.FunctionExpression.check(node)) {
      return false;
    }
    if (n.ObjectExpression.check(node)) {
      return false;
    }
    if (n.ClassExpression.check(node)) {
      return false;
    }
    return true;
  };
  FPp.firstInStatement = function() {
    var s = this.stack;
    var parentName, parent;
    var childName, child;
    for (var i = s.length - 1; i >= 0; i -= 2) {
      if (n.Node.check(s[i])) {
        childName = parentName;
        child = parent;
        parentName = s[i - 1];
        parent = s[i];
      }
      if (!parent || !child) {
        continue;
      }
      if (n.BlockStatement.check(parent) && parentName === "body" && childName === 0) {
        (0, tiny_invariant_1.default)(parent.body[0] === child);
        return true;
      }
      if (n.ExpressionStatement.check(parent) && childName === "expression") {
        (0, tiny_invariant_1.default)(parent.expression === child);
        return true;
      }
      if (n.AssignmentExpression.check(parent) && childName === "left") {
        (0, tiny_invariant_1.default)(parent.left === child);
        return true;
      }
      if (n.ArrowFunctionExpression.check(parent) && childName === "body") {
        (0, tiny_invariant_1.default)(parent.body === child);
        return true;
      }
      if (n.SequenceExpression.check(parent) && s[i + 1] === "expressions" && childName === 0) {
        (0, tiny_invariant_1.default)(parent.expressions[0] === child);
        continue;
      }
      if (n.CallExpression.check(parent) && childName === "callee") {
        (0, tiny_invariant_1.default)(parent.callee === child);
        continue;
      }
      if (n.MemberExpression.check(parent) && childName === "object") {
        (0, tiny_invariant_1.default)(parent.object === child);
        continue;
      }
      if (n.ConditionalExpression.check(parent) && childName === "test") {
        (0, tiny_invariant_1.default)(parent.test === child);
        continue;
      }
      if (isBinary(parent) && childName === "left") {
        (0, tiny_invariant_1.default)(parent.left === child);
        continue;
      }
      if (n.UnaryExpression.check(parent) && !parent.prefix && childName === "argument") {
        (0, tiny_invariant_1.default)(parent.argument === child);
        continue;
      }
      return false;
    }
    return true;
  };
  fastPath.default = FastPath;
  return fastPath;
}
var patcher = {};
var hasRequiredPatcher;
function requirePatcher() {
  if (hasRequiredPatcher) return patcher;
  hasRequiredPatcher = 1;
  Object.defineProperty(patcher, "__esModule", { value: true });
  patcher.getReprinter = patcher.Patcher = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var linesModule = tslib_1.__importStar(requireLines());
  var types2 = tslib_1.__importStar(requireMain());
  var Printable = types2.namedTypes.Printable;
  var Expression = types2.namedTypes.Expression;
  var ReturnStatement = types2.namedTypes.ReturnStatement;
  var SourceLocation = types2.namedTypes.SourceLocation;
  var util_1 = requireUtil();
  var fast_path_1 = tslib_1.__importDefault(requireFastPath());
  var isObject = types2.builtInTypes.object;
  var isArray = types2.builtInTypes.array;
  var isString = types2.builtInTypes.string;
  var riskyAdjoiningCharExp = /[0-9a-z_$]/i;
  var Patcher = function Patcher2(lines2) {
    (0, tiny_invariant_1.default)(this instanceof Patcher2);
    (0, tiny_invariant_1.default)(lines2 instanceof linesModule.Lines);
    var self2 = this, replacements = [];
    self2.replace = function(loc, lines3) {
      if (isString.check(lines3))
        lines3 = linesModule.fromString(lines3);
      replacements.push({
        lines: lines3,
        start: loc.start,
        end: loc.end
      });
    };
    self2.get = function(loc) {
      loc = loc || {
        start: { line: 1, column: 0 },
        end: { line: lines2.length, column: lines2.getLineLength(lines2.length) }
      };
      var sliceFrom = loc.start, toConcat = [];
      function pushSlice(from, to) {
        (0, tiny_invariant_1.default)((0, util_1.comparePos)(from, to) <= 0);
        toConcat.push(lines2.slice(from, to));
      }
      replacements.sort(function(a, b2) {
        return (0, util_1.comparePos)(a.start, b2.start);
      }).forEach(function(rep) {
        if ((0, util_1.comparePos)(sliceFrom, rep.start) > 0) ;
        else {
          pushSlice(sliceFrom, rep.start);
          toConcat.push(rep.lines);
          sliceFrom = rep.end;
        }
      });
      pushSlice(sliceFrom, loc.end);
      return linesModule.concat(toConcat);
    };
  };
  patcher.Patcher = Patcher;
  var Pp = Patcher.prototype;
  Pp.tryToReprintComments = function(newNode, oldNode, print) {
    var patcher2 = this;
    if (!newNode.comments && !oldNode.comments) {
      return true;
    }
    var newPath = fast_path_1.default.from(newNode);
    var oldPath = fast_path_1.default.from(oldNode);
    newPath.stack.push("comments", getSurroundingComments(newNode));
    oldPath.stack.push("comments", getSurroundingComments(oldNode));
    var reprints = [];
    var ableToReprintComments = findArrayReprints(newPath, oldPath, reprints);
    if (ableToReprintComments && reprints.length > 0) {
      reprints.forEach(function(reprint) {
        var oldComment = reprint.oldPath.getValue();
        (0, tiny_invariant_1.default)(oldComment.leading || oldComment.trailing);
        patcher2.replace(
          oldComment.loc,
          // Comments can't have .comments, so it doesn't matter whether we
          // print with comments or without.
          print(reprint.newPath).indentTail(oldComment.loc.indent)
        );
      });
    }
    return ableToReprintComments;
  };
  function getSurroundingComments(node) {
    var result = [];
    if (node.comments && node.comments.length > 0) {
      node.comments.forEach(function(comment) {
        if (comment.leading || comment.trailing) {
          result.push(comment);
        }
      });
    }
    return result;
  }
  Pp.deleteComments = function(node) {
    if (!node.comments) {
      return;
    }
    var patcher2 = this;
    node.comments.forEach(function(comment) {
      if (comment.leading) {
        patcher2.replace({
          start: comment.loc.start,
          end: node.loc.lines.skipSpaces(comment.loc.end, false, false)
        }, "");
      } else if (comment.trailing) {
        patcher2.replace({
          start: node.loc.lines.skipSpaces(comment.loc.start, true, false),
          end: comment.loc.end
        }, "");
      }
    });
  };
  function getReprinter(path2) {
    (0, tiny_invariant_1.default)(path2 instanceof fast_path_1.default);
    var node = path2.getValue();
    if (!Printable.check(node))
      return;
    var orig = node.original;
    var origLoc = orig && orig.loc;
    var lines2 = origLoc && origLoc.lines;
    var reprints = [];
    if (!lines2 || !findReprints(path2, reprints))
      return;
    return function(print) {
      var patcher2 = new Patcher(lines2);
      reprints.forEach(function(reprint) {
        var newNode = reprint.newPath.getValue();
        var oldNode = reprint.oldPath.getValue();
        SourceLocation.assert(oldNode.loc, true);
        var needToPrintNewPathWithComments = !patcher2.tryToReprintComments(newNode, oldNode, print);
        if (needToPrintNewPathWithComments) {
          patcher2.deleteComments(oldNode);
        }
        var newLines = print(reprint.newPath, {
          includeComments: needToPrintNewPathWithComments,
          // If the oldNode we're replacing already had parentheses, we may
          // not need to print the new node with any extra parentheses,
          // because the existing parentheses will suffice. However, if the
          // newNode has a different type than the oldNode, let the printer
          // decide if reprint.newPath needs parentheses, as usual.
          avoidRootParens: oldNode.type === newNode.type && reprint.oldPath.hasParens()
        }).indentTail(oldNode.loc.indent);
        var nls = needsLeadingSpace(lines2, oldNode.loc, newLines);
        var nts = needsTrailingSpace(lines2, oldNode.loc, newLines);
        if (nls || nts) {
          var newParts = [];
          nls && newParts.push(" ");
          newParts.push(newLines);
          nts && newParts.push(" ");
          newLines = linesModule.concat(newParts);
        }
        patcher2.replace(oldNode.loc, newLines);
      });
      var patchedLines = patcher2.get(origLoc).indentTail(-orig.loc.indent);
      if (path2.needsParens()) {
        return linesModule.concat(["(", patchedLines, ")"]);
      }
      return patchedLines;
    };
  }
  patcher.getReprinter = getReprinter;
  function needsLeadingSpace(oldLines, oldLoc, newLines) {
    var posBeforeOldLoc = (0, util_1.copyPos)(oldLoc.start);
    var charBeforeOldLoc = oldLines.prevPos(posBeforeOldLoc) && oldLines.charAt(posBeforeOldLoc);
    var newFirstChar = newLines.charAt(newLines.firstPos());
    return charBeforeOldLoc && riskyAdjoiningCharExp.test(charBeforeOldLoc) && newFirstChar && riskyAdjoiningCharExp.test(newFirstChar);
  }
  function needsTrailingSpace(oldLines, oldLoc, newLines) {
    var charAfterOldLoc = oldLines.charAt(oldLoc.end);
    var newLastPos = newLines.lastPos();
    var newLastChar = newLines.prevPos(newLastPos) && newLines.charAt(newLastPos);
    return newLastChar && riskyAdjoiningCharExp.test(newLastChar) && charAfterOldLoc && riskyAdjoiningCharExp.test(charAfterOldLoc);
  }
  function findReprints(newPath, reprints) {
    var newNode = newPath.getValue();
    Printable.assert(newNode);
    var oldNode = newNode.original;
    Printable.assert(oldNode);
    (0, tiny_invariant_1.default)(reprints.length === 0);
    if (newNode.type !== oldNode.type) {
      return false;
    }
    var oldPath = new fast_path_1.default(oldNode);
    var canReprint = findChildReprints(newPath, oldPath, reprints);
    if (!canReprint) {
      reprints.length = 0;
    }
    return canReprint;
  }
  function findAnyReprints(newPath, oldPath, reprints) {
    var newNode = newPath.getValue();
    var oldNode = oldPath.getValue();
    if (newNode === oldNode)
      return true;
    if (isArray.check(newNode))
      return findArrayReprints(newPath, oldPath, reprints);
    if (isObject.check(newNode))
      return findObjectReprints(newPath, oldPath, reprints);
    return false;
  }
  function findArrayReprints(newPath, oldPath, reprints) {
    var newNode = newPath.getValue();
    var oldNode = oldPath.getValue();
    if (newNode === oldNode || newPath.valueIsDuplicate() || oldPath.valueIsDuplicate()) {
      return true;
    }
    isArray.assert(newNode);
    var len = newNode.length;
    if (!(isArray.check(oldNode) && oldNode.length === len))
      return false;
    for (var i = 0; i < len; ++i) {
      newPath.stack.push(i, newNode[i]);
      oldPath.stack.push(i, oldNode[i]);
      var canReprint = findAnyReprints(newPath, oldPath, reprints);
      newPath.stack.length -= 2;
      oldPath.stack.length -= 2;
      if (!canReprint) {
        return false;
      }
    }
    return true;
  }
  function findObjectReprints(newPath, oldPath, reprints) {
    var newNode = newPath.getValue();
    isObject.assert(newNode);
    if (newNode.original === null) {
      return false;
    }
    var oldNode = oldPath.getValue();
    if (!isObject.check(oldNode))
      return false;
    if (newNode === oldNode || newPath.valueIsDuplicate() || oldPath.valueIsDuplicate()) {
      return true;
    }
    if (Printable.check(newNode)) {
      if (!Printable.check(oldNode)) {
        return false;
      }
      var newParentNode = newPath.getParentNode();
      var oldParentNode = oldPath.getParentNode();
      if (oldParentNode !== null && oldParentNode.type === "FunctionTypeAnnotation" && newParentNode !== null && newParentNode.type === "FunctionTypeAnnotation") {
        var oldNeedsParens = oldParentNode.params.length !== 1 || !!oldParentNode.params[0].name;
        var newNeedParens = newParentNode.params.length !== 1 || !!newParentNode.params[0].name;
        if (!oldNeedsParens && newNeedParens) {
          return false;
        }
      }
      if (newNode.type === oldNode.type) {
        var childReprints = [];
        if (findChildReprints(newPath, oldPath, childReprints)) {
          reprints.push.apply(reprints, childReprints);
        } else if (oldNode.loc) {
          reprints.push({
            oldPath: oldPath.copy(),
            newPath: newPath.copy()
          });
        } else {
          return false;
        }
        return true;
      }
      if (Expression.check(newNode) && Expression.check(oldNode) && // If we have no .loc information for oldNode, then we won't be
      // able to reprint it.
      oldNode.loc) {
        reprints.push({
          oldPath: oldPath.copy(),
          newPath: newPath.copy()
        });
        return true;
      }
      return false;
    }
    return findChildReprints(newPath, oldPath, reprints);
  }
  function findChildReprints(newPath, oldPath, reprints) {
    var newNode = newPath.getValue();
    var oldNode = oldPath.getValue();
    isObject.assert(newNode);
    isObject.assert(oldNode);
    if (newNode.original === null) {
      return false;
    }
    if (newPath.needsParens() && !oldPath.hasParens()) {
      return false;
    }
    var keys = (0, util_1.getUnionOfKeys)(oldNode, newNode);
    if (oldNode.type === "File" || newNode.type === "File") {
      delete keys.tokens;
    }
    delete keys.loc;
    var originalReprintCount = reprints.length;
    for (var k in keys) {
      if (k.charAt(0) === "_") {
        continue;
      }
      newPath.stack.push(k, types2.getFieldValue(newNode, k));
      oldPath.stack.push(k, types2.getFieldValue(oldNode, k));
      var canReprint = findAnyReprints(newPath, oldPath, reprints);
      newPath.stack.length -= 2;
      oldPath.stack.length -= 2;
      if (!canReprint) {
        return false;
      }
    }
    if (ReturnStatement.check(newPath.getNode()) && reprints.length > originalReprintCount) {
      return false;
    }
    return true;
  }
  return patcher;
}
var hasRequiredPrinter;
function requirePrinter() {
  if (hasRequiredPrinter) return printer;
  hasRequiredPrinter = 1;
  Object.defineProperty(printer, "__esModule", { value: true });
  printer.Printer = void 0;
  var tslib_1 = require$$0;
  var tiny_invariant_1 = tslib_1.__importDefault(requireTinyInvariant_cjs());
  var types2 = tslib_1.__importStar(requireMain());
  var comments_1 = requireComments();
  var fast_path_1 = tslib_1.__importDefault(requireFastPath());
  var lines_1 = requireLines();
  var options_1 = requireOptions();
  var patcher_1 = requirePatcher();
  var util2 = tslib_1.__importStar(requireUtil());
  var namedTypes2 = types2.namedTypes;
  var isString = types2.builtInTypes.string;
  var isObject = types2.builtInTypes.object;
  var PrintResult = function PrintResult2(code2, sourceMap2) {
    (0, tiny_invariant_1.default)(this instanceof PrintResult2);
    isString.assert(code2);
    this.code = code2;
    if (sourceMap2) {
      isObject.assert(sourceMap2);
      this.map = sourceMap2;
    }
  };
  var PRp = PrintResult.prototype;
  var warnedAboutToString = false;
  PRp.toString = function() {
    if (!warnedAboutToString) {
      console.warn("Deprecation warning: recast.print now returns an object with a .code property. You appear to be treating the object as a string, which might still work but is strongly discouraged.");
      warnedAboutToString = true;
    }
    return this.code;
  };
  var emptyPrintResult = new PrintResult("");
  var Printer = function Printer2(config) {
    (0, tiny_invariant_1.default)(this instanceof Printer2);
    var explicitTabWidth = config && config.tabWidth;
    config = (0, options_1.normalize)(config);
    config.sourceFileName = null;
    function makePrintFunctionWith(options2, overrides) {
      options2 = Object.assign({}, options2, overrides);
      return function(path2) {
        return print(path2, options2);
      };
    }
    function print(path2, options2) {
      (0, tiny_invariant_1.default)(path2 instanceof fast_path_1.default);
      options2 = options2 || {};
      if (options2.includeComments) {
        return (0, comments_1.printComments)(path2, makePrintFunctionWith(options2, {
          includeComments: false
        }));
      }
      var oldTabWidth = config.tabWidth;
      if (!explicitTabWidth) {
        var loc = path2.getNode().loc;
        if (loc && loc.lines && loc.lines.guessTabWidth) {
          config.tabWidth = loc.lines.guessTabWidth();
        }
      }
      var reprinter = (0, patcher_1.getReprinter)(path2);
      var lines2 = reprinter ? (
        // Since the print function that we pass to the reprinter will
        // be used to print "new" nodes, it's tempting to think we
        // should pass printRootGenerically instead of print, to avoid
        // calling maybeReprint again, but that would be a mistake
        // because the new nodes might not be entirely new, but merely
        // moved from elsewhere in the AST. The print function is the
        // right choice because it gives us the opportunity to reprint
        // such nodes using their original source.
        reprinter(print)
      ) : genericPrint(path2, config, options2, makePrintFunctionWith(options2, {
        includeComments: true,
        avoidRootParens: false
      }));
      config.tabWidth = oldTabWidth;
      return lines2;
    }
    this.print = function(ast2) {
      if (!ast2) {
        return emptyPrintResult;
      }
      var lines2 = print(fast_path_1.default.from(ast2), {
        includeComments: true,
        avoidRootParens: false
      });
      return new PrintResult(lines2.toString(config), util2.composeSourceMaps(config.inputSourceMap, lines2.getSourceMap(config.sourceMapName, config.sourceRoot)));
    };
    this.printGenerically = function(ast2) {
      if (!ast2) {
        return emptyPrintResult;
      }
      function printGenerically(path3) {
        return (0, comments_1.printComments)(path3, function(path4) {
          return genericPrint(path4, config, {
            includeComments: true,
            avoidRootParens: false
          }, printGenerically);
        });
      }
      var path2 = fast_path_1.default.from(ast2);
      var oldReuseWhitespace = config.reuseWhitespace;
      config.reuseWhitespace = false;
      var pr = new PrintResult(printGenerically(path2).toString(config));
      config.reuseWhitespace = oldReuseWhitespace;
      return pr;
    };
  };
  printer.Printer = Printer;
  function genericPrint(path2, config, options2, printPath) {
    (0, tiny_invariant_1.default)(path2 instanceof fast_path_1.default);
    var node = path2.getValue();
    var parts = [];
    var linesWithoutParens = genericPrintNoParens(path2, config, printPath);
    if (!node || linesWithoutParens.isEmpty()) {
      return linesWithoutParens;
    }
    var shouldAddParens = false;
    var decoratorsLines = printDecorators(path2, printPath);
    if (decoratorsLines.isEmpty()) {
      if (!options2.avoidRootParens) {
        shouldAddParens = path2.needsParens();
      }
    } else {
      parts.push(decoratorsLines);
    }
    if (shouldAddParens) {
      parts.unshift("(");
    }
    parts.push(linesWithoutParens);
    if (shouldAddParens) {
      parts.push(")");
    }
    return (0, lines_1.concat)(parts);
  }
  function genericPrintNoParens(path2, options2, print) {
    var n = path2.getValue();
    if (!n) {
      return (0, lines_1.fromString)("");
    }
    if (typeof n === "string") {
      return (0, lines_1.fromString)(n, options2);
    }
    namedTypes2.Printable.assert(n);
    var parts = [];
    switch (n.type) {
      case "File":
        return path2.call(print, "program");
      case "Program":
        if (n.directives) {
          path2.each(function(childPath) {
            parts.push(print(childPath), ";\n");
          }, "directives");
        }
        if (n.interpreter) {
          parts.push(path2.call(print, "interpreter"));
        }
        parts.push(path2.call(function(bodyPath) {
          return printStatementSequence(bodyPath, options2, print);
        }, "body"));
        return (0, lines_1.concat)(parts);
      case "Noop":
      case "EmptyStatement":
        return (0, lines_1.fromString)("");
      case "ExpressionStatement":
        return (0, lines_1.concat)([path2.call(print, "expression"), ";"]);
      case "ParenthesizedExpression":
        return (0, lines_1.concat)(["(", path2.call(print, "expression"), ")"]);
      case "BinaryExpression":
      case "LogicalExpression":
      case "AssignmentExpression":
        return (0, lines_1.fromString)(" ").join([
          path2.call(print, "left"),
          n.operator,
          path2.call(print, "right")
        ]);
      case "AssignmentPattern":
        return (0, lines_1.concat)([
          path2.call(print, "left"),
          " = ",
          path2.call(print, "right")
        ]);
      case "MemberExpression":
      case "OptionalMemberExpression": {
        parts.push(path2.call(print, "object"));
        var property = path2.call(print, "property");
        var optional = types2.getFieldValue(n, "optional");
        if (n.computed) {
          parts.push(optional ? "?.[" : "[", property, "]");
        } else {
          parts.push(optional ? "?." : ".", property);
        }
        return (0, lines_1.concat)(parts);
      }
      case "ChainExpression":
        return path2.call(print, "expression");
      case "MetaProperty":
        return (0, lines_1.concat)([
          path2.call(print, "meta"),
          ".",
          path2.call(print, "property")
        ]);
      case "BindExpression":
        if (n.object) {
          parts.push(path2.call(print, "object"));
        }
        parts.push("::", path2.call(print, "callee"));
        return (0, lines_1.concat)(parts);
      case "Path":
        return (0, lines_1.fromString)(".").join(n.body);
      case "Identifier":
        return (0, lines_1.concat)([
          (0, lines_1.fromString)(n.name, options2),
          n.optional ? "?" : "",
          path2.call(print, "typeAnnotation")
        ]);
      case "SpreadElement":
      case "SpreadElementPattern":
      case "RestProperty":
      case "SpreadProperty":
      case "SpreadPropertyPattern":
      case "ObjectTypeSpreadProperty":
      case "RestElement":
        return (0, lines_1.concat)([
          "...",
          path2.call(print, "argument"),
          path2.call(print, "typeAnnotation")
        ]);
      case "FunctionDeclaration":
      case "FunctionExpression":
      case "TSDeclareFunction":
        if (n.declare) {
          parts.push("declare ");
        }
        if (n.async) {
          parts.push("async ");
        }
        parts.push("function");
        if (n.generator)
          parts.push("*");
        if (n.id) {
          parts.push(" ", path2.call(print, "id"), path2.call(print, "typeParameters"));
        } else {
          if (n.typeParameters) {
            parts.push(path2.call(print, "typeParameters"));
          }
        }
        parts.push("(", printFunctionParams(path2, options2, print), ")", path2.call(print, "returnType"));
        if (n.body) {
          parts.push(" ", path2.call(print, "body"));
        }
        return (0, lines_1.concat)(parts);
      case "ArrowFunctionExpression":
        if (n.async) {
          parts.push("async ");
        }
        if (n.typeParameters) {
          parts.push(path2.call(print, "typeParameters"));
        }
        if (!options2.arrowParensAlways && n.params.length === 1 && !n.rest && n.params[0].type === "Identifier" && !n.params[0].typeAnnotation && !n.returnType) {
          parts.push(path2.call(print, "params", 0));
        } else {
          parts.push("(", printFunctionParams(path2, options2, print), ")", path2.call(print, "returnType"));
        }
        parts.push(" => ", path2.call(print, "body"));
        return (0, lines_1.concat)(parts);
      case "MethodDefinition":
        return printMethod(path2, options2, print);
      case "YieldExpression":
        parts.push("yield");
        if (n.delegate)
          parts.push("*");
        if (n.argument)
          parts.push(" ", path2.call(print, "argument"));
        return (0, lines_1.concat)(parts);
      case "AwaitExpression":
        parts.push("await");
        if (n.all)
          parts.push("*");
        if (n.argument)
          parts.push(" ", path2.call(print, "argument"));
        return (0, lines_1.concat)(parts);
      case "ModuleExpression":
        return (0, lines_1.concat)([
          "module {\n",
          path2.call(print, "body").indent(options2.tabWidth),
          "\n}"
        ]);
      case "ModuleDeclaration":
        parts.push("module", path2.call(print, "id"));
        if (n.source) {
          (0, tiny_invariant_1.default)(!n.body);
          parts.push("from", path2.call(print, "source"));
        } else {
          parts.push(path2.call(print, "body"));
        }
        return (0, lines_1.fromString)(" ").join(parts);
      case "ImportSpecifier":
        if (n.importKind && n.importKind !== "value") {
          parts.push(n.importKind + " ");
        }
        if (n.imported) {
          parts.push(path2.call(print, "imported"));
          if (n.local && n.local.name !== n.imported.name) {
            parts.push(" as ", path2.call(print, "local"));
          }
        } else if (n.id) {
          parts.push(path2.call(print, "id"));
          if (n.name) {
            parts.push(" as ", path2.call(print, "name"));
          }
        }
        return (0, lines_1.concat)(parts);
      case "ExportSpecifier":
        if (n.exportKind && n.exportKind !== "value") {
          parts.push(n.exportKind + " ");
        }
        if (n.local) {
          parts.push(path2.call(print, "local"));
          if (n.exported && n.exported.name !== n.local.name) {
            parts.push(" as ", path2.call(print, "exported"));
          }
        } else if (n.id) {
          parts.push(path2.call(print, "id"));
          if (n.name) {
            parts.push(" as ", path2.call(print, "name"));
          }
        }
        return (0, lines_1.concat)(parts);
      case "ExportBatchSpecifier":
        return (0, lines_1.fromString)("*");
      case "ImportNamespaceSpecifier":
        parts.push("* as ");
        if (n.local) {
          parts.push(path2.call(print, "local"));
        } else if (n.id) {
          parts.push(path2.call(print, "id"));
        }
        return (0, lines_1.concat)(parts);
      case "ImportDefaultSpecifier":
        if (n.local) {
          return path2.call(print, "local");
        }
        return path2.call(print, "id");
      case "TSExportAssignment":
        return (0, lines_1.concat)(["export = ", path2.call(print, "expression")]);
      case "ExportDeclaration":
      case "ExportDefaultDeclaration":
      case "ExportNamedDeclaration":
        return printExportDeclaration(path2, options2, print);
      case "ExportAllDeclaration":
        parts.push("export *");
        if (n.exported) {
          parts.push(" as ", path2.call(print, "exported"));
        }
        parts.push(" from ", path2.call(print, "source"), ";");
        return (0, lines_1.concat)(parts);
      case "TSNamespaceExportDeclaration":
        parts.push("export as namespace ", path2.call(print, "id"));
        return maybeAddSemicolon((0, lines_1.concat)(parts));
      case "ExportNamespaceSpecifier":
        return (0, lines_1.concat)(["* as ", path2.call(print, "exported")]);
      case "ExportDefaultSpecifier":
        return path2.call(print, "exported");
      case "Import":
        return (0, lines_1.fromString)("import", options2);
      case "ImportExpression":
        return (0, lines_1.concat)(["import(", path2.call(print, "source"), ")"]);
      case "ImportDeclaration": {
        parts.push("import ");
        if (n.importKind && n.importKind !== "value") {
          parts.push(n.importKind + " ");
        }
        if (n.specifiers && n.specifiers.length > 0) {
          var unbracedSpecifiers_1 = [];
          var bracedSpecifiers_1 = [];
          path2.each(function(specifierPath) {
            var spec = specifierPath.getValue();
            if (spec.type === "ImportSpecifier") {
              bracedSpecifiers_1.push(print(specifierPath));
            } else if (spec.type === "ImportDefaultSpecifier" || spec.type === "ImportNamespaceSpecifier") {
              unbracedSpecifiers_1.push(print(specifierPath));
            }
          }, "specifiers");
          unbracedSpecifiers_1.forEach(function(lines3, i) {
            if (i > 0) {
              parts.push(", ");
            }
            parts.push(lines3);
          });
          if (bracedSpecifiers_1.length > 0) {
            var lines2 = (0, lines_1.fromString)(", ").join(bracedSpecifiers_1);
            if (lines2.getLineLength(1) > options2.wrapColumn) {
              lines2 = (0, lines_1.concat)([
                (0, lines_1.fromString)(",\n").join(bracedSpecifiers_1).indent(options2.tabWidth),
                ","
              ]);
            }
            if (unbracedSpecifiers_1.length > 0) {
              parts.push(", ");
            }
            if (lines2.length > 1) {
              parts.push("{\n", lines2, "\n}");
            } else if (options2.objectCurlySpacing) {
              parts.push("{ ", lines2, " }");
            } else {
              parts.push("{", lines2, "}");
            }
          }
          parts.push(" from ");
        }
        parts.push(path2.call(print, "source"), maybePrintImportAssertions(path2, options2, print), ";");
        return (0, lines_1.concat)(parts);
      }
      case "ImportAttribute":
        return (0, lines_1.concat)([path2.call(print, "key"), ": ", path2.call(print, "value")]);
      case "StaticBlock":
        parts.push("static ");
      case "BlockStatement": {
        var naked_1 = path2.call(function(bodyPath) {
          return printStatementSequence(bodyPath, options2, print);
        }, "body");
        if (naked_1.isEmpty()) {
          if (!n.directives || n.directives.length === 0) {
            parts.push("{}");
            return (0, lines_1.concat)(parts);
          }
        }
        parts.push("{\n");
        if (n.directives) {
          path2.each(function(childPath) {
            parts.push(maybeAddSemicolon(print(childPath).indent(options2.tabWidth)), n.directives.length > 1 || !naked_1.isEmpty() ? "\n" : "");
          }, "directives");
        }
        parts.push(naked_1.indent(options2.tabWidth));
        parts.push("\n}");
        return (0, lines_1.concat)(parts);
      }
      case "ReturnStatement": {
        parts.push("return");
        if (n.argument) {
          var argLines = path2.call(print, "argument");
          if (argLines.startsWithComment() || argLines.length > 1 && namedTypes2.JSXElement && namedTypes2.JSXElement.check(n.argument)) {
            parts.push(" (\n", argLines.indent(options2.tabWidth), "\n)");
          } else {
            parts.push(" ", argLines);
          }
        }
        parts.push(";");
        return (0, lines_1.concat)(parts);
      }
      case "CallExpression":
      case "OptionalCallExpression":
        parts.push(path2.call(print, "callee"));
        if (n.typeParameters) {
          parts.push(path2.call(print, "typeParameters"));
        }
        if (n.typeArguments) {
          parts.push(path2.call(print, "typeArguments"));
        }
        if (types2.getFieldValue(n, "optional")) {
          parts.push("?.");
        }
        parts.push(printArgumentsList(path2, options2, print));
        return (0, lines_1.concat)(parts);
      case "RecordExpression":
        parts.push("#");
      case "ObjectExpression":
      case "ObjectPattern":
      case "ObjectTypeAnnotation": {
        var isTypeAnnotation_1 = n.type === "ObjectTypeAnnotation";
        var separator_1 = options2.flowObjectCommas ? "," : isTypeAnnotation_1 ? ";" : ",";
        var fields = [];
        var allowBreak_1 = false;
        if (isTypeAnnotation_1) {
          fields.push("indexers", "callProperties");
          if (n.internalSlots != null) {
            fields.push("internalSlots");
          }
        }
        fields.push("properties");
        var len_1 = 0;
        fields.forEach(function(field) {
          len_1 += n[field].length;
        });
        var oneLine_1 = isTypeAnnotation_1 && len_1 === 1 || len_1 === 0;
        var leftBrace = n.exact ? "{|" : "{";
        var rightBrace = n.exact ? "|}" : "}";
        parts.push(oneLine_1 ? leftBrace : leftBrace + "\n");
        var leftBraceIndex = parts.length - 1;
        var i_1 = 0;
        fields.forEach(function(field) {
          path2.each(function(childPath) {
            var lines3 = print(childPath);
            if (!oneLine_1) {
              lines3 = lines3.indent(options2.tabWidth);
            }
            var multiLine = !isTypeAnnotation_1 && lines3.length > 1;
            if (multiLine && allowBreak_1) {
              parts.push("\n");
            }
            parts.push(lines3);
            if (i_1 < len_1 - 1) {
              parts.push(separator_1 + (multiLine ? "\n\n" : "\n"));
              allowBreak_1 = !multiLine;
            } else if (len_1 !== 1 && isTypeAnnotation_1) {
              parts.push(separator_1);
            } else if (!oneLine_1 && util2.isTrailingCommaEnabled(options2, "objects") && childPath.getValue().type !== "RestElement") {
              parts.push(separator_1);
            }
            i_1++;
          }, field);
        });
        if (n.inexact) {
          var line = (0, lines_1.fromString)("...", options2);
          if (oneLine_1) {
            if (len_1 > 0) {
              parts.push(separator_1, " ");
            }
            parts.push(line);
          } else {
            parts.push("\n", line.indent(options2.tabWidth));
          }
        }
        parts.push(oneLine_1 ? rightBrace : "\n" + rightBrace);
        if (i_1 !== 0 && oneLine_1 && options2.objectCurlySpacing) {
          parts[leftBraceIndex] = leftBrace + " ";
          parts[parts.length - 1] = " " + rightBrace;
        }
        if (n.typeAnnotation) {
          parts.push(path2.call(print, "typeAnnotation"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "PropertyPattern":
        return (0, lines_1.concat)([
          path2.call(print, "key"),
          ": ",
          path2.call(print, "pattern")
        ]);
      case "ObjectProperty":
      case "Property": {
        if (n.method || n.kind === "get" || n.kind === "set") {
          return printMethod(path2, options2, print);
        }
        if (n.shorthand && n.value.type === "AssignmentPattern") {
          return path2.call(print, "value");
        }
        var key = path2.call(print, "key");
        if (n.computed) {
          parts.push("[", key, "]");
        } else {
          parts.push(key);
        }
        if (!n.shorthand || n.key.name !== n.value.name) {
          parts.push(": ", path2.call(print, "value"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "ClassMethod":
      case "ObjectMethod":
      case "ClassPrivateMethod":
      case "TSDeclareMethod":
        return printMethod(path2, options2, print);
      case "PrivateName":
        return (0, lines_1.concat)(["#", path2.call(print, "id")]);
      case "Decorator":
        return (0, lines_1.concat)(["@", path2.call(print, "expression")]);
      case "TupleExpression":
        parts.push("#");
      case "ArrayExpression":
      case "ArrayPattern": {
        var elems = n.elements;
        var len_2 = elems.length;
        var printed_1 = path2.map(print, "elements");
        var joined = (0, lines_1.fromString)(", ").join(printed_1);
        var oneLine_2 = joined.getLineLength(1) <= options2.wrapColumn;
        if (oneLine_2) {
          if (options2.arrayBracketSpacing) {
            parts.push("[ ");
          } else {
            parts.push("[");
          }
        } else {
          parts.push("[\n");
        }
        path2.each(function(elemPath) {
          var i = elemPath.getName();
          var elem = elemPath.getValue();
          if (!elem) {
            parts.push(",");
          } else {
            var lines3 = printed_1[i];
            if (oneLine_2) {
              if (i > 0)
                parts.push(" ");
            } else {
              lines3 = lines3.indent(options2.tabWidth);
            }
            parts.push(lines3);
            if (i < len_2 - 1 || !oneLine_2 && util2.isTrailingCommaEnabled(options2, "arrays"))
              parts.push(",");
            if (!oneLine_2)
              parts.push("\n");
          }
        }, "elements");
        if (oneLine_2 && options2.arrayBracketSpacing) {
          parts.push(" ]");
        } else {
          parts.push("]");
        }
        if (n.typeAnnotation) {
          parts.push(path2.call(print, "typeAnnotation"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "SequenceExpression":
        return (0, lines_1.fromString)(", ").join(path2.map(print, "expressions"));
      case "ThisExpression":
        return (0, lines_1.fromString)("this");
      case "Super":
        return (0, lines_1.fromString)("super");
      case "NullLiteral":
        return (0, lines_1.fromString)("null");
      case "RegExpLiteral":
        return (0, lines_1.fromString)(getPossibleRaw(n) || "/".concat(n.pattern, "/").concat(n.flags || ""), options2);
      case "BigIntLiteral":
        return (0, lines_1.fromString)(getPossibleRaw(n) || n.value + "n", options2);
      case "NumericLiteral":
        return (0, lines_1.fromString)(getPossibleRaw(n) || n.value, options2);
      case "DecimalLiteral":
        return (0, lines_1.fromString)(getPossibleRaw(n) || n.value + "m", options2);
      case "StringLiteral":
        return (0, lines_1.fromString)(nodeStr(n.value, options2));
      case "BooleanLiteral":
      case "Literal":
        return (0, lines_1.fromString)(getPossibleRaw(n) || (typeof n.value === "string" ? nodeStr(n.value, options2) : n.value), options2);
      case "Directive":
        return path2.call(print, "value");
      case "DirectiveLiteral":
        return (0, lines_1.fromString)(getPossibleRaw(n) || nodeStr(n.value, options2), options2);
      case "InterpreterDirective":
        return (0, lines_1.fromString)("#!".concat(n.value, "\n"), options2);
      case "ModuleSpecifier":
        if (n.local) {
          throw new Error("The ESTree ModuleSpecifier type should be abstract");
        }
        return (0, lines_1.fromString)(nodeStr(n.value, options2), options2);
      case "UnaryExpression":
        parts.push(n.operator);
        if (/[a-z]$/.test(n.operator))
          parts.push(" ");
        parts.push(path2.call(print, "argument"));
        return (0, lines_1.concat)(parts);
      case "UpdateExpression":
        parts.push(path2.call(print, "argument"), n.operator);
        if (n.prefix)
          parts.reverse();
        return (0, lines_1.concat)(parts);
      case "ConditionalExpression":
        return (0, lines_1.concat)([
          path2.call(print, "test"),
          " ? ",
          path2.call(print, "consequent"),
          " : ",
          path2.call(print, "alternate")
        ]);
      case "NewExpression": {
        parts.push("new ", path2.call(print, "callee"));
        if (n.typeParameters) {
          parts.push(path2.call(print, "typeParameters"));
        }
        if (n.typeArguments) {
          parts.push(path2.call(print, "typeArguments"));
        }
        var args = n.arguments;
        if (args) {
          parts.push(printArgumentsList(path2, options2, print));
        }
        return (0, lines_1.concat)(parts);
      }
      case "VariableDeclaration": {
        if (n.declare) {
          parts.push("declare ");
        }
        parts.push(n.kind, " ");
        var maxLen_1 = 0;
        var printed = path2.map(function(childPath) {
          var lines3 = print(childPath);
          maxLen_1 = Math.max(lines3.length, maxLen_1);
          return lines3;
        }, "declarations");
        if (maxLen_1 === 1) {
          parts.push((0, lines_1.fromString)(", ").join(printed));
        } else if (printed.length > 1) {
          parts.push((0, lines_1.fromString)(",\n").join(printed).indentTail(n.kind.length + 1));
        } else {
          parts.push(printed[0]);
        }
        var parentNode = path2.getParentNode();
        if (!namedTypes2.ForStatement.check(parentNode) && !namedTypes2.ForInStatement.check(parentNode) && !(namedTypes2.ForOfStatement && namedTypes2.ForOfStatement.check(parentNode)) && !(namedTypes2.ForAwaitStatement && namedTypes2.ForAwaitStatement.check(parentNode))) {
          parts.push(";");
        }
        return (0, lines_1.concat)(parts);
      }
      case "VariableDeclarator":
        return n.init ? (0, lines_1.fromString)(" = ").join([
          path2.call(print, "id"),
          path2.call(print, "init")
        ]) : path2.call(print, "id");
      case "WithStatement":
        return (0, lines_1.concat)([
          "with (",
          path2.call(print, "object"),
          ") ",
          path2.call(print, "body")
        ]);
      case "IfStatement": {
        var con = adjustClause(path2.call(print, "consequent"), options2);
        parts.push("if (", path2.call(print, "test"), ")", con);
        if (n.alternate)
          parts.push(endsWithBrace(con) ? " else" : "\nelse", adjustClause(path2.call(print, "alternate"), options2));
        return (0, lines_1.concat)(parts);
      }
      case "ForStatement": {
        var init = path2.call(print, "init");
        var sep = init.length > 1 ? ";\n" : "; ";
        var forParen = "for (";
        var indented = (0, lines_1.fromString)(sep).join([init, path2.call(print, "test"), path2.call(print, "update")]).indentTail(forParen.length);
        var head = (0, lines_1.concat)([forParen, indented, ")"]);
        var clause = adjustClause(path2.call(print, "body"), options2);
        parts.push(head);
        if (head.length > 1) {
          parts.push("\n");
          clause = clause.trimLeft();
        }
        parts.push(clause);
        return (0, lines_1.concat)(parts);
      }
      case "WhileStatement":
        return (0, lines_1.concat)([
          "while (",
          path2.call(print, "test"),
          ")",
          adjustClause(path2.call(print, "body"), options2)
        ]);
      case "ForInStatement":
        return (0, lines_1.concat)([
          n.each ? "for each (" : "for (",
          path2.call(print, "left"),
          " in ",
          path2.call(print, "right"),
          ")",
          adjustClause(path2.call(print, "body"), options2)
        ]);
      case "ForOfStatement":
      case "ForAwaitStatement":
        parts.push("for ");
        if (n.await || n.type === "ForAwaitStatement") {
          parts.push("await ");
        }
        parts.push("(", path2.call(print, "left"), " of ", path2.call(print, "right"), ")", adjustClause(path2.call(print, "body"), options2));
        return (0, lines_1.concat)(parts);
      case "DoWhileStatement": {
        var doBody = (0, lines_1.concat)([
          "do",
          adjustClause(path2.call(print, "body"), options2)
        ]);
        parts.push(doBody);
        if (endsWithBrace(doBody))
          parts.push(" while");
        else
          parts.push("\nwhile");
        parts.push(" (", path2.call(print, "test"), ");");
        return (0, lines_1.concat)(parts);
      }
      case "DoExpression": {
        var statements = path2.call(function(bodyPath) {
          return printStatementSequence(bodyPath, options2, print);
        }, "body");
        return (0, lines_1.concat)(["do {\n", statements.indent(options2.tabWidth), "\n}"]);
      }
      case "BreakStatement":
        parts.push("break");
        if (n.label)
          parts.push(" ", path2.call(print, "label"));
        parts.push(";");
        return (0, lines_1.concat)(parts);
      case "ContinueStatement":
        parts.push("continue");
        if (n.label)
          parts.push(" ", path2.call(print, "label"));
        parts.push(";");
        return (0, lines_1.concat)(parts);
      case "LabeledStatement":
        return (0, lines_1.concat)([
          path2.call(print, "label"),
          ":\n",
          path2.call(print, "body")
        ]);
      case "TryStatement":
        parts.push("try ", path2.call(print, "block"));
        if (n.handler) {
          parts.push(" ", path2.call(print, "handler"));
        } else if (n.handlers) {
          path2.each(function(handlerPath) {
            parts.push(" ", print(handlerPath));
          }, "handlers");
        }
        if (n.finalizer) {
          parts.push(" finally ", path2.call(print, "finalizer"));
        }
        return (0, lines_1.concat)(parts);
      case "CatchClause":
        parts.push("catch ");
        if (n.param) {
          parts.push("(", path2.call(print, "param"));
        }
        if (n.guard) {
          parts.push(" if ", path2.call(print, "guard"));
        }
        if (n.param) {
          parts.push(") ");
        }
        parts.push(path2.call(print, "body"));
        return (0, lines_1.concat)(parts);
      case "ThrowStatement":
        return (0, lines_1.concat)(["throw ", path2.call(print, "argument"), ";"]);
      case "SwitchStatement":
        return (0, lines_1.concat)([
          "switch (",
          path2.call(print, "discriminant"),
          ") {\n",
          (0, lines_1.fromString)("\n").join(path2.map(print, "cases")),
          "\n}"
        ]);
      case "SwitchCase":
        if (n.test)
          parts.push("case ", path2.call(print, "test"), ":");
        else
          parts.push("default:");
        if (n.consequent.length > 0) {
          parts.push("\n", path2.call(function(consequentPath) {
            return printStatementSequence(consequentPath, options2, print);
          }, "consequent").indent(options2.tabWidth));
        }
        return (0, lines_1.concat)(parts);
      case "DebuggerStatement":
        return (0, lines_1.fromString)("debugger;");
      case "JSXAttribute":
        parts.push(path2.call(print, "name"));
        if (n.value)
          parts.push("=", path2.call(print, "value"));
        return (0, lines_1.concat)(parts);
      case "JSXIdentifier":
        return (0, lines_1.fromString)(n.name, options2);
      case "JSXNamespacedName":
        return (0, lines_1.fromString)(":").join([
          path2.call(print, "namespace"),
          path2.call(print, "name")
        ]);
      case "JSXMemberExpression":
        return (0, lines_1.fromString)(".").join([
          path2.call(print, "object"),
          path2.call(print, "property")
        ]);
      case "JSXSpreadAttribute":
        return (0, lines_1.concat)(["{...", path2.call(print, "argument"), "}"]);
      case "JSXSpreadChild":
        return (0, lines_1.concat)(["{...", path2.call(print, "expression"), "}"]);
      case "JSXExpressionContainer":
        return (0, lines_1.concat)(["{", path2.call(print, "expression"), "}"]);
      case "JSXElement":
      case "JSXFragment": {
        var openingPropName = "opening" + (n.type === "JSXElement" ? "Element" : "Fragment");
        var closingPropName = "closing" + (n.type === "JSXElement" ? "Element" : "Fragment");
        var openingLines = path2.call(print, openingPropName);
        if (n[openingPropName].selfClosing) {
          (0, tiny_invariant_1.default)(!n[closingPropName], "unexpected " + closingPropName + " element in self-closing " + n.type);
          return openingLines;
        }
        var childLines = (0, lines_1.concat)(path2.map(function(childPath) {
          var child = childPath.getValue();
          if (namedTypes2.Literal.check(child) && typeof child.value === "string") {
            if (/\S/.test(child.value)) {
              return child.value.replace(/^\s+/g, "");
            } else if (/\n/.test(child.value)) {
              return "\n";
            }
          }
          return print(childPath);
        }, "children")).indentTail(options2.tabWidth);
        var closingLines = path2.call(print, closingPropName);
        return (0, lines_1.concat)([openingLines, childLines, closingLines]);
      }
      case "JSXOpeningElement": {
        parts.push("<", path2.call(print, "name"));
        var typeDefPart = path2.call(print, "typeParameters");
        if (typeDefPart.length)
          parts.push(typeDefPart);
        var attrParts_1 = [];
        path2.each(function(attrPath) {
          attrParts_1.push(" ", print(attrPath));
        }, "attributes");
        var attrLines = (0, lines_1.concat)(attrParts_1);
        var needLineWrap = attrLines.length > 1 || attrLines.getLineLength(1) > options2.wrapColumn;
        if (needLineWrap) {
          attrParts_1.forEach(function(part, i) {
            if (part === " ") {
              (0, tiny_invariant_1.default)(i % 2 === 0);
              attrParts_1[i] = "\n";
            }
          });
          attrLines = (0, lines_1.concat)(attrParts_1).indentTail(options2.tabWidth);
        }
        parts.push(attrLines, n.selfClosing ? " />" : ">");
        return (0, lines_1.concat)(parts);
      }
      case "JSXClosingElement":
        return (0, lines_1.concat)(["</", path2.call(print, "name"), ">"]);
      case "JSXOpeningFragment":
        return (0, lines_1.fromString)("<>");
      case "JSXClosingFragment":
        return (0, lines_1.fromString)("</>");
      case "JSXText":
        return (0, lines_1.fromString)(n.value, options2);
      case "JSXEmptyExpression":
        return (0, lines_1.fromString)("");
      case "TypeAnnotatedIdentifier":
        return (0, lines_1.concat)([
          path2.call(print, "annotation"),
          " ",
          path2.call(print, "identifier")
        ]);
      case "ClassBody":
        if (n.body.length === 0) {
          return (0, lines_1.fromString)("{}");
        }
        return (0, lines_1.concat)([
          "{\n",
          path2.call(function(bodyPath) {
            return printStatementSequence(bodyPath, options2, print);
          }, "body").indent(options2.tabWidth),
          "\n}"
        ]);
      case "ClassPropertyDefinition":
        parts.push("static ", path2.call(print, "definition"));
        if (!namedTypes2.MethodDefinition.check(n.definition))
          parts.push(";");
        return (0, lines_1.concat)(parts);
      case "ClassProperty": {
        if (n.declare) {
          parts.push("declare ");
        }
        var access = n.accessibility || n.access;
        if (typeof access === "string") {
          parts.push(access, " ");
        }
        if (n.static) {
          parts.push("static ");
        }
        if (n.abstract) {
          parts.push("abstract ");
        }
        if (n.readonly) {
          parts.push("readonly ");
        }
        var key = path2.call(print, "key");
        if (n.computed) {
          key = (0, lines_1.concat)(["[", key, "]"]);
        }
        if (n.variance) {
          key = (0, lines_1.concat)([printVariance(path2, print), key]);
        }
        parts.push(key);
        if (n.optional) {
          parts.push("?");
        }
        if (n.definite) {
          parts.push("!");
        }
        if (n.typeAnnotation) {
          parts.push(path2.call(print, "typeAnnotation"));
        }
        if (n.value) {
          parts.push(" = ", path2.call(print, "value"));
        }
        parts.push(";");
        return (0, lines_1.concat)(parts);
      }
      case "ClassPrivateProperty":
        if (n.static) {
          parts.push("static ");
        }
        parts.push(path2.call(print, "key"));
        if (n.typeAnnotation) {
          parts.push(path2.call(print, "typeAnnotation"));
        }
        if (n.value) {
          parts.push(" = ", path2.call(print, "value"));
        }
        parts.push(";");
        return (0, lines_1.concat)(parts);
      case "ClassAccessorProperty": {
        parts.push.apply(parts, tslib_1.__spreadArray(tslib_1.__spreadArray([], printClassMemberModifiers(n), false), ["accessor "], false));
        if (n.computed) {
          parts.push("[", path2.call(print, "key"), "]");
        } else {
          parts.push(path2.call(print, "key"));
        }
        if (n.optional) {
          parts.push("?");
        }
        if (n.definite) {
          parts.push("!");
        }
        if (n.typeAnnotation) {
          parts.push(path2.call(print, "typeAnnotation"));
        }
        if (n.value) {
          parts.push(" = ", path2.call(print, "value"));
        }
        parts.push(";");
        return (0, lines_1.concat)(parts);
      }
      case "ClassDeclaration":
      case "ClassExpression":
      case "DeclareClass":
        if (n.declare) {
          parts.push("declare ");
        }
        if (n.abstract) {
          parts.push("abstract ");
        }
        parts.push("class");
        if (n.id) {
          parts.push(" ", path2.call(print, "id"));
        }
        if (n.typeParameters) {
          parts.push(path2.call(print, "typeParameters"));
        }
        if (n.superClass) {
          parts.push(" extends ", path2.call(print, "superClass"), path2.call(print, "superTypeParameters"));
        }
        if (n.extends && n.extends.length > 0) {
          parts.push(" extends ", (0, lines_1.fromString)(", ").join(path2.map(print, "extends")));
        }
        if (n["implements"] && n["implements"].length > 0) {
          parts.push(" implements ", (0, lines_1.fromString)(", ").join(path2.map(print, "implements")));
        }
        parts.push(" ", path2.call(print, "body"));
        if (n.type === "DeclareClass") {
          return printFlowDeclaration(path2, parts);
        } else {
          return (0, lines_1.concat)(parts);
        }
      case "TemplateElement":
        return (0, lines_1.fromString)(n.value.raw, options2).lockIndentTail();
      case "TemplateLiteral": {
        var expressions_1 = path2.map(print, "expressions");
        parts.push("`");
        path2.each(function(childPath) {
          var i = childPath.getName();
          parts.push(print(childPath));
          if (i < expressions_1.length) {
            parts.push("${", expressions_1[i], "}");
          }
        }, "quasis");
        parts.push("`");
        return (0, lines_1.concat)(parts).lockIndentTail();
      }
      case "TaggedTemplateExpression":
        return (0, lines_1.concat)([path2.call(print, "tag"), path2.call(print, "quasi")]);
      case "Node":
      case "Printable":
      case "SourceLocation":
      case "Position":
      case "Statement":
      case "Function":
      case "Pattern":
      case "Expression":
      case "Declaration":
      case "Specifier":
      case "NamedSpecifier":
      case "Comment":
      case "Flow":
      case "FlowType":
      case "FlowPredicate":
      case "MemberTypeAnnotation":
      case "Type":
      case "TSHasOptionalTypeParameterInstantiation":
      case "TSHasOptionalTypeParameters":
      case "TSHasOptionalTypeAnnotation":
      case "ChainElement":
        throw new Error("unprintable type: " + JSON.stringify(n.type));
      case "CommentBlock":
      case "Block":
        return (0, lines_1.concat)(["/*", (0, lines_1.fromString)(n.value, options2), "*/"]);
      case "CommentLine":
      case "Line":
        return (0, lines_1.concat)(["//", (0, lines_1.fromString)(n.value, options2)]);
      case "TypeAnnotation":
        if (n.typeAnnotation) {
          if (n.typeAnnotation.type !== "FunctionTypeAnnotation") {
            parts.push(": ");
          }
          parts.push(path2.call(print, "typeAnnotation"));
          return (0, lines_1.concat)(parts);
        }
        return (0, lines_1.fromString)("");
      case "ExistentialTypeParam":
      case "ExistsTypeAnnotation":
        return (0, lines_1.fromString)("*", options2);
      case "EmptyTypeAnnotation":
        return (0, lines_1.fromString)("empty", options2);
      case "AnyTypeAnnotation":
        return (0, lines_1.fromString)("any", options2);
      case "MixedTypeAnnotation":
        return (0, lines_1.fromString)("mixed", options2);
      case "ArrayTypeAnnotation":
        return (0, lines_1.concat)([path2.call(print, "elementType"), "[]"]);
      case "TupleTypeAnnotation": {
        var printed_2 = path2.map(print, "types");
        var joined = (0, lines_1.fromString)(", ").join(printed_2);
        var oneLine_3 = joined.getLineLength(1) <= options2.wrapColumn;
        if (oneLine_3) {
          if (options2.arrayBracketSpacing) {
            parts.push("[ ");
          } else {
            parts.push("[");
          }
        } else {
          parts.push("[\n");
        }
        path2.each(function(elemPath) {
          var i = elemPath.getName();
          var elem = elemPath.getValue();
          if (!elem) {
            parts.push(",");
          } else {
            var lines3 = printed_2[i];
            if (oneLine_3) {
              if (i > 0)
                parts.push(" ");
            } else {
              lines3 = lines3.indent(options2.tabWidth);
            }
            parts.push(lines3);
            if (i < n.types.length - 1 || !oneLine_3 && util2.isTrailingCommaEnabled(options2, "arrays"))
              parts.push(",");
            if (!oneLine_3)
              parts.push("\n");
          }
        }, "types");
        if (oneLine_3 && options2.arrayBracketSpacing) {
          parts.push(" ]");
        } else {
          parts.push("]");
        }
        return (0, lines_1.concat)(parts);
      }
      case "BooleanTypeAnnotation":
        return (0, lines_1.fromString)("boolean", options2);
      case "BooleanLiteralTypeAnnotation":
        (0, tiny_invariant_1.default)(typeof n.value === "boolean");
        return (0, lines_1.fromString)("" + n.value, options2);
      case "InterfaceTypeAnnotation":
        parts.push("interface");
        if (n.extends && n.extends.length > 0) {
          parts.push(" extends ", (0, lines_1.fromString)(", ").join(path2.map(print, "extends")));
        }
        parts.push(" ", path2.call(print, "body"));
        return (0, lines_1.concat)(parts);
      case "DeclareFunction":
        return printFlowDeclaration(path2, [
          "function ",
          path2.call(print, "id"),
          ";"
        ]);
      case "DeclareModule":
        return printFlowDeclaration(path2, [
          "module ",
          path2.call(print, "id"),
          " ",
          path2.call(print, "body")
        ]);
      case "DeclareModuleExports":
        return printFlowDeclaration(path2, [
          "module.exports",
          path2.call(print, "typeAnnotation")
        ]);
      case "DeclareVariable":
        return printFlowDeclaration(path2, ["var ", path2.call(print, "id"), ";"]);
      case "DeclareExportDeclaration":
      case "DeclareExportAllDeclaration":
        return (0, lines_1.concat)(["declare ", printExportDeclaration(path2, options2, print)]);
      case "EnumDeclaration":
        return (0, lines_1.concat)([
          "enum ",
          path2.call(print, "id"),
          path2.call(print, "body")
        ]);
      case "EnumBooleanBody":
      case "EnumNumberBody":
      case "EnumStringBody":
      case "EnumSymbolBody": {
        if (n.type === "EnumSymbolBody" || n.explicitType) {
          parts.push(
            " of ",
            // EnumBooleanBody => boolean, etc.
            n.type.slice(4, -4).toLowerCase()
          );
        }
        parts.push(" {\n", (0, lines_1.fromString)("\n").join(path2.map(print, "members")).indent(options2.tabWidth), "\n}");
        return (0, lines_1.concat)(parts);
      }
      case "EnumDefaultedMember":
        return (0, lines_1.concat)([path2.call(print, "id"), ","]);
      case "EnumBooleanMember":
      case "EnumNumberMember":
      case "EnumStringMember":
        return (0, lines_1.concat)([
          path2.call(print, "id"),
          " = ",
          path2.call(print, "init"),
          ","
        ]);
      case "InferredPredicate":
        return (0, lines_1.fromString)("%checks", options2);
      case "DeclaredPredicate":
        return (0, lines_1.concat)(["%checks(", path2.call(print, "value"), ")"]);
      case "FunctionTypeAnnotation": {
        var parent = path2.getParentNode(0);
        var isArrowFunctionTypeAnnotation = !(namedTypes2.ObjectTypeCallProperty.check(parent) || namedTypes2.ObjectTypeInternalSlot.check(parent) && parent.method || namedTypes2.DeclareFunction.check(path2.getParentNode(2)));
        var needsColon = isArrowFunctionTypeAnnotation && !namedTypes2.FunctionTypeParam.check(parent) && !namedTypes2.TypeAlias.check(parent);
        if (needsColon) {
          parts.push(": ");
        }
        var hasTypeParameters = !!n.typeParameters;
        var needsParens = hasTypeParameters || n.params.length !== 1 || n.params[0].name;
        parts.push(hasTypeParameters ? path2.call(print, "typeParameters") : "", needsParens ? "(" : "", printFunctionParams(path2, options2, print), needsParens ? ")" : "");
        if (n.returnType) {
          parts.push(isArrowFunctionTypeAnnotation ? " => " : ": ", path2.call(print, "returnType"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "FunctionTypeParam": {
        var name = path2.call(print, "name");
        parts.push(name);
        if (n.optional) {
          parts.push("?");
        }
        if (name.infos[0].line) {
          parts.push(": ");
        }
        parts.push(path2.call(print, "typeAnnotation"));
        return (0, lines_1.concat)(parts);
      }
      case "GenericTypeAnnotation":
        return (0, lines_1.concat)([
          path2.call(print, "id"),
          path2.call(print, "typeParameters")
        ]);
      case "DeclareInterface":
        parts.push("declare ");
      case "InterfaceDeclaration":
      case "TSInterfaceDeclaration":
        if (n.declare) {
          parts.push("declare ");
        }
        parts.push("interface ", path2.call(print, "id"), path2.call(print, "typeParameters"), " ");
        if (n["extends"] && n["extends"].length > 0) {
          parts.push("extends ", (0, lines_1.fromString)(", ").join(path2.map(print, "extends")), " ");
        }
        if (n.body) {
          parts.push(path2.call(print, "body"));
        }
        return (0, lines_1.concat)(parts);
      case "ClassImplements":
      case "InterfaceExtends":
        return (0, lines_1.concat)([
          path2.call(print, "id"),
          path2.call(print, "typeParameters")
        ]);
      case "IntersectionTypeAnnotation":
        return (0, lines_1.fromString)(" & ").join(path2.map(print, "types"));
      case "NullableTypeAnnotation":
        return (0, lines_1.concat)(["?", path2.call(print, "typeAnnotation")]);
      case "NullLiteralTypeAnnotation":
        return (0, lines_1.fromString)("null", options2);
      case "ThisTypeAnnotation":
        return (0, lines_1.fromString)("this", options2);
      case "NumberTypeAnnotation":
        return (0, lines_1.fromString)("number", options2);
      case "ObjectTypeCallProperty":
        return path2.call(print, "value");
      case "ObjectTypeIndexer":
        if (n.static) {
          parts.push("static ");
        }
        parts.push(printVariance(path2, print), "[");
        if (n.id) {
          parts.push(path2.call(print, "id"), ": ");
        }
        parts.push(path2.call(print, "key"), "]: ", path2.call(print, "value"));
        return (0, lines_1.concat)(parts);
      case "ObjectTypeProperty":
        return (0, lines_1.concat)([
          printVariance(path2, print),
          path2.call(print, "key"),
          n.optional ? "?" : "",
          ": ",
          path2.call(print, "value")
        ]);
      case "ObjectTypeInternalSlot":
        return (0, lines_1.concat)([
          n.static ? "static " : "",
          "[[",
          path2.call(print, "id"),
          "]]",
          n.optional ? "?" : "",
          n.value.type !== "FunctionTypeAnnotation" ? ": " : "",
          path2.call(print, "value")
        ]);
      case "QualifiedTypeIdentifier":
        return (0, lines_1.concat)([
          path2.call(print, "qualification"),
          ".",
          path2.call(print, "id")
        ]);
      case "StringLiteralTypeAnnotation":
        return (0, lines_1.fromString)(nodeStr(n.value, options2), options2);
      case "NumberLiteralTypeAnnotation":
      case "NumericLiteralTypeAnnotation":
        (0, tiny_invariant_1.default)(typeof n.value === "number");
        return (0, lines_1.fromString)(JSON.stringify(n.value), options2);
      case "BigIntLiteralTypeAnnotation":
        return (0, lines_1.fromString)(n.raw, options2);
      case "StringTypeAnnotation":
        return (0, lines_1.fromString)("string", options2);
      case "DeclareTypeAlias":
        parts.push("declare ");
      case "TypeAlias":
        return (0, lines_1.concat)([
          "type ",
          path2.call(print, "id"),
          path2.call(print, "typeParameters"),
          " = ",
          path2.call(print, "right"),
          ";"
        ]);
      case "DeclareOpaqueType":
        parts.push("declare ");
      case "OpaqueType":
        parts.push("opaque type ", path2.call(print, "id"), path2.call(print, "typeParameters"));
        if (n["supertype"]) {
          parts.push(": ", path2.call(print, "supertype"));
        }
        if (n["impltype"]) {
          parts.push(" = ", path2.call(print, "impltype"));
        }
        parts.push(";");
        return (0, lines_1.concat)(parts);
      case "TypeCastExpression":
        return (0, lines_1.concat)([
          "(",
          path2.call(print, "expression"),
          path2.call(print, "typeAnnotation"),
          ")"
        ]);
      case "TypeParameterDeclaration":
      case "TypeParameterInstantiation":
        return (0, lines_1.concat)([
          "<",
          (0, lines_1.fromString)(", ").join(path2.map(print, "params")),
          ">"
        ]);
      case "Variance":
        if (n.kind === "plus") {
          return (0, lines_1.fromString)("+");
        }
        if (n.kind === "minus") {
          return (0, lines_1.fromString)("-");
        }
        return (0, lines_1.fromString)("");
      case "TypeParameter":
        if (n.variance) {
          parts.push(printVariance(path2, print));
        }
        parts.push(path2.call(print, "name"));
        if (n.bound) {
          parts.push(path2.call(print, "bound"));
        }
        if (n["default"]) {
          parts.push("=", path2.call(print, "default"));
        }
        return (0, lines_1.concat)(parts);
      case "TypeofTypeAnnotation":
        return (0, lines_1.concat)([
          (0, lines_1.fromString)("typeof ", options2),
          path2.call(print, "argument")
        ]);
      case "IndexedAccessType":
      case "OptionalIndexedAccessType":
        return (0, lines_1.concat)([
          path2.call(print, "objectType"),
          n.optional ? "?." : "",
          "[",
          path2.call(print, "indexType"),
          "]"
        ]);
      case "UnionTypeAnnotation":
        return (0, lines_1.fromString)(" | ").join(path2.map(print, "types"));
      case "VoidTypeAnnotation":
        return (0, lines_1.fromString)("void", options2);
      case "NullTypeAnnotation":
        return (0, lines_1.fromString)("null", options2);
      case "SymbolTypeAnnotation":
        return (0, lines_1.fromString)("symbol", options2);
      case "BigIntTypeAnnotation":
        return (0, lines_1.fromString)("bigint", options2);
      case "TSType":
        throw new Error("unprintable type: " + JSON.stringify(n.type));
      case "TSNumberKeyword":
        return (0, lines_1.fromString)("number", options2);
      case "TSBigIntKeyword":
        return (0, lines_1.fromString)("bigint", options2);
      case "TSObjectKeyword":
        return (0, lines_1.fromString)("object", options2);
      case "TSBooleanKeyword":
        return (0, lines_1.fromString)("boolean", options2);
      case "TSStringKeyword":
        return (0, lines_1.fromString)("string", options2);
      case "TSSymbolKeyword":
        return (0, lines_1.fromString)("symbol", options2);
      case "TSAnyKeyword":
        return (0, lines_1.fromString)("any", options2);
      case "TSVoidKeyword":
        return (0, lines_1.fromString)("void", options2);
      case "TSIntrinsicKeyword":
        return (0, lines_1.fromString)("intrinsic", options2);
      case "TSThisType":
        return (0, lines_1.fromString)("this", options2);
      case "TSNullKeyword":
        return (0, lines_1.fromString)("null", options2);
      case "TSUndefinedKeyword":
        return (0, lines_1.fromString)("undefined", options2);
      case "TSUnknownKeyword":
        return (0, lines_1.fromString)("unknown", options2);
      case "TSNeverKeyword":
        return (0, lines_1.fromString)("never", options2);
      case "TSArrayType":
        return (0, lines_1.concat)([path2.call(print, "elementType"), "[]"]);
      case "TSLiteralType":
        return path2.call(print, "literal");
      case "TSUnionType":
        return (0, lines_1.fromString)(" | ").join(path2.map(print, "types"));
      case "TSIntersectionType":
        return (0, lines_1.fromString)(" & ").join(path2.map(print, "types"));
      case "TSConditionalType":
        parts.push(path2.call(print, "checkType"), " extends ", path2.call(print, "extendsType"), " ? ", path2.call(print, "trueType"), " : ", path2.call(print, "falseType"));
        return (0, lines_1.concat)(parts);
      case "TSInferType":
        parts.push("infer ", path2.call(print, "typeParameter"));
        return (0, lines_1.concat)(parts);
      case "TSParenthesizedType":
        return (0, lines_1.concat)(["(", path2.call(print, "typeAnnotation"), ")"]);
      case "TSFunctionType":
        return (0, lines_1.concat)([
          path2.call(print, "typeParameters"),
          "(",
          printFunctionParams(path2, options2, print),
          ") => ",
          path2.call(print, "typeAnnotation", "typeAnnotation")
        ]);
      case "TSConstructorType":
        return (0, lines_1.concat)([
          "new ",
          path2.call(print, "typeParameters"),
          "(",
          printFunctionParams(path2, options2, print),
          ") => ",
          path2.call(print, "typeAnnotation", "typeAnnotation")
        ]);
      case "TSMappedType": {
        parts.push(n.readonly ? "readonly " : "", "[", path2.call(print, "typeParameter"), "]", n.optional ? "?" : "");
        if (n.typeAnnotation) {
          parts.push(": ", path2.call(print, "typeAnnotation"), ";");
        }
        return (0, lines_1.concat)(["{\n", (0, lines_1.concat)(parts).indent(options2.tabWidth), "\n}"]);
      }
      case "TSTupleType":
        return (0, lines_1.concat)([
          "[",
          (0, lines_1.fromString)(", ").join(path2.map(print, "elementTypes")),
          "]"
        ]);
      case "TSNamedTupleMember":
        parts.push(path2.call(print, "label"));
        if (n.optional) {
          parts.push("?");
        }
        parts.push(": ", path2.call(print, "elementType"));
        return (0, lines_1.concat)(parts);
      case "TSRestType":
        return (0, lines_1.concat)(["...", path2.call(print, "typeAnnotation")]);
      case "TSOptionalType":
        return (0, lines_1.concat)([path2.call(print, "typeAnnotation"), "?"]);
      case "TSIndexedAccessType":
        return (0, lines_1.concat)([
          path2.call(print, "objectType"),
          "[",
          path2.call(print, "indexType"),
          "]"
        ]);
      case "TSTypeOperator":
        return (0, lines_1.concat)([
          path2.call(print, "operator"),
          " ",
          path2.call(print, "typeAnnotation")
        ]);
      case "TSTypeLiteral": {
        var members = (0, lines_1.fromString)("\n").join(path2.map(print, "members").map(function(member) {
          if (lastNonSpaceCharacter(member) !== ";") {
            return member.concat(";");
          }
          return member;
        }));
        if (members.isEmpty()) {
          return (0, lines_1.fromString)("{}", options2);
        }
        parts.push("{\n", members.indent(options2.tabWidth), "\n}");
        return (0, lines_1.concat)(parts);
      }
      case "TSEnumMember":
        parts.push(path2.call(print, "id"));
        if (n.initializer) {
          parts.push(" = ", path2.call(print, "initializer"));
        }
        return (0, lines_1.concat)(parts);
      case "TSTypeQuery":
        return (0, lines_1.concat)(["typeof ", path2.call(print, "exprName")]);
      case "TSParameterProperty":
        if (n.accessibility) {
          parts.push(n.accessibility, " ");
        }
        if (n.export) {
          parts.push("export ");
        }
        if (n.static) {
          parts.push("static ");
        }
        if (n.readonly) {
          parts.push("readonly ");
        }
        parts.push(path2.call(print, "parameter"));
        return (0, lines_1.concat)(parts);
      case "TSTypeReference":
        return (0, lines_1.concat)([
          path2.call(print, "typeName"),
          path2.call(print, "typeParameters")
        ]);
      case "TSQualifiedName":
        return (0, lines_1.concat)([path2.call(print, "left"), ".", path2.call(print, "right")]);
      case "TSAsExpression":
      case "TSSatisfiesExpression": {
        var expression = path2.call(print, "expression");
        parts.push(expression, n.type === "TSSatisfiesExpression" ? " satisfies " : " as ", path2.call(print, "typeAnnotation"));
        return (0, lines_1.concat)(parts);
      }
      case "TSTypeCastExpression":
        return (0, lines_1.concat)([
          path2.call(print, "expression"),
          path2.call(print, "typeAnnotation")
        ]);
      case "TSNonNullExpression":
        return (0, lines_1.concat)([path2.call(print, "expression"), "!"]);
      case "TSTypeAnnotation":
        return (0, lines_1.concat)([": ", path2.call(print, "typeAnnotation")]);
      case "TSIndexSignature":
        return (0, lines_1.concat)([
          n.readonly ? "readonly " : "",
          "[",
          path2.map(print, "parameters"),
          "]",
          path2.call(print, "typeAnnotation")
        ]);
      case "TSPropertySignature":
        parts.push(printVariance(path2, print), n.readonly ? "readonly " : "");
        if (n.computed) {
          parts.push("[", path2.call(print, "key"), "]");
        } else {
          parts.push(path2.call(print, "key"));
        }
        parts.push(n.optional ? "?" : "", path2.call(print, "typeAnnotation"));
        return (0, lines_1.concat)(parts);
      case "TSMethodSignature":
        if (n.kind === "get") {
          parts.push("get ");
        } else if (n.kind === "set") {
          parts.push("set ");
        }
        if (n.computed) {
          parts.push("[", path2.call(print, "key"), "]");
        } else {
          parts.push(path2.call(print, "key"));
        }
        if (n.optional) {
          parts.push("?");
        }
        parts.push(path2.call(print, "typeParameters"), "(", printFunctionParams(path2, options2, print), ")", path2.call(print, "typeAnnotation"));
        return (0, lines_1.concat)(parts);
      case "TSTypePredicate":
        if (n.asserts) {
          parts.push("asserts ");
        }
        parts.push(path2.call(print, "parameterName"));
        if (n.typeAnnotation) {
          parts.push(" is ", path2.call(print, "typeAnnotation", "typeAnnotation"));
        }
        return (0, lines_1.concat)(parts);
      case "TSCallSignatureDeclaration":
        return (0, lines_1.concat)([
          path2.call(print, "typeParameters"),
          "(",
          printFunctionParams(path2, options2, print),
          ")",
          path2.call(print, "typeAnnotation")
        ]);
      case "TSConstructSignatureDeclaration":
        if (n.typeParameters) {
          parts.push("new", path2.call(print, "typeParameters"));
        } else {
          parts.push("new ");
        }
        parts.push("(", printFunctionParams(path2, options2, print), ")", path2.call(print, "typeAnnotation"));
        return (0, lines_1.concat)(parts);
      case "TSTypeAliasDeclaration":
        return (0, lines_1.concat)([
          n.declare ? "declare " : "",
          "type ",
          path2.call(print, "id"),
          path2.call(print, "typeParameters"),
          " = ",
          path2.call(print, "typeAnnotation"),
          ";"
        ]);
      case "TSTypeParameter": {
        parts.push(path2.call(print, "name"));
        var parent = path2.getParentNode(0);
        var isInMappedType = namedTypes2.TSMappedType.check(parent);
        if (n.constraint) {
          parts.push(isInMappedType ? " in " : " extends ", path2.call(print, "constraint"));
        }
        if (n["default"]) {
          parts.push(" = ", path2.call(print, "default"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "TSTypeAssertion": {
        parts.push("<", path2.call(print, "typeAnnotation"), "> ", path2.call(print, "expression"));
        return (0, lines_1.concat)(parts);
      }
      case "TSTypeParameterDeclaration":
      case "TSTypeParameterInstantiation":
        return (0, lines_1.concat)([
          "<",
          (0, lines_1.fromString)(", ").join(path2.map(print, "params")),
          ">"
        ]);
      case "TSEnumDeclaration": {
        parts.push(n.declare ? "declare " : "", n.const ? "const " : "", "enum ", path2.call(print, "id"));
        var memberLines = (0, lines_1.fromString)(",\n").join(path2.map(print, "members"));
        if (memberLines.isEmpty()) {
          parts.push(" {}");
        } else {
          parts.push(" {\n", memberLines.indent(options2.tabWidth), "\n}");
        }
        return (0, lines_1.concat)(parts);
      }
      case "TSExpressionWithTypeArguments":
        return (0, lines_1.concat)([
          path2.call(print, "expression"),
          path2.call(print, "typeParameters")
        ]);
      case "TSInterfaceBody": {
        var lines2 = (0, lines_1.fromString)("\n").join(path2.map(print, "body").map(function(element) {
          if (lastNonSpaceCharacter(element) !== ";") {
            return element.concat(";");
          }
          return element;
        }));
        if (lines2.isEmpty()) {
          return (0, lines_1.fromString)("{}", options2);
        }
        return (0, lines_1.concat)(["{\n", lines2.indent(options2.tabWidth), "\n}"]);
      }
      case "TSImportType":
        parts.push("import(", path2.call(print, "argument"), ")");
        if (n.qualifier) {
          parts.push(".", path2.call(print, "qualifier"));
        }
        if (n.typeParameters) {
          parts.push(path2.call(print, "typeParameters"));
        }
        return (0, lines_1.concat)(parts);
      case "TSImportEqualsDeclaration":
        if (n.isExport) {
          parts.push("export ");
        }
        parts.push("import ", path2.call(print, "id"), " = ", path2.call(print, "moduleReference"));
        return maybeAddSemicolon((0, lines_1.concat)(parts));
      case "TSExternalModuleReference":
        return (0, lines_1.concat)(["require(", path2.call(print, "expression"), ")"]);
      case "TSModuleDeclaration": {
        var parent = path2.getParentNode();
        if (parent.type === "TSModuleDeclaration") {
          parts.push(".");
        } else {
          if (n.declare) {
            parts.push("declare ");
          }
          if (!n.global) {
            var isExternal = n.id.type === "StringLiteral" || n.id.type === "Literal" && typeof n.id.value === "string";
            if (isExternal) {
              parts.push("module ");
            } else if (n.loc && n.loc.lines && n.id.loc) {
              var prefix = n.loc.lines.sliceString(n.loc.start, n.id.loc.start);
              if (prefix.indexOf("module") >= 0) {
                parts.push("module ");
              } else {
                parts.push("namespace ");
              }
            } else {
              parts.push("namespace ");
            }
          }
        }
        parts.push(path2.call(print, "id"));
        if (n.body) {
          parts.push(" ");
          parts.push(path2.call(print, "body"));
        }
        return (0, lines_1.concat)(parts);
      }
      case "TSModuleBlock": {
        var naked = path2.call(function(bodyPath) {
          return printStatementSequence(bodyPath, options2, print);
        }, "body");
        if (naked.isEmpty()) {
          parts.push("{}");
        } else {
          parts.push("{\n", naked.indent(options2.tabWidth), "\n}");
        }
        return (0, lines_1.concat)(parts);
      }
      case "TSInstantiationExpression": {
        parts.push(path2.call(print, "expression"), path2.call(print, "typeParameters"));
        return (0, lines_1.concat)(parts);
      }
      case "V8IntrinsicIdentifier":
        return (0, lines_1.concat)(["%", path2.call(print, "name")]);
      case "TopicReference":
        return (0, lines_1.fromString)("#");
      case "ClassHeritage":
      case "ComprehensionBlock":
      case "ComprehensionExpression":
      case "Glob":
      case "GeneratorExpression":
      case "LetStatement":
      case "LetExpression":
      case "GraphExpression":
      case "GraphIndexExpression":
      case "XMLDefaultDeclaration":
      case "XMLAnyName":
      case "XMLQualifiedIdentifier":
      case "XMLFunctionQualifiedIdentifier":
      case "XMLAttributeSelector":
      case "XMLFilterExpression":
      case "XML":
      case "XMLElement":
      case "XMLList":
      case "XMLEscape":
      case "XMLText":
      case "XMLStartTag":
      case "XMLEndTag":
      case "XMLPointTag":
      case "XMLName":
      case "XMLAttribute":
      case "XMLCdata":
      case "XMLComment":
      case "XMLProcessingInstruction":
      default:
        debugger;
        throw new Error("unknown type: " + JSON.stringify(n.type));
    }
  }
  function printDecorators(path2, printPath) {
    var parts = [];
    var node = path2.getValue();
    if (node.decorators && node.decorators.length > 0 && // If the parent node is an export declaration, it will be
    // responsible for printing node.decorators.
    !util2.getParentExportDeclaration(path2)) {
      path2.each(function(decoratorPath) {
        parts.push(printPath(decoratorPath), "\n");
      }, "decorators");
    } else if (util2.isExportDeclaration(node) && node.declaration && node.declaration.decorators) {
      path2.each(function(decoratorPath) {
        parts.push(printPath(decoratorPath), "\n");
      }, "declaration", "decorators");
    }
    return (0, lines_1.concat)(parts);
  }
  function printStatementSequence(path2, options2, print) {
    var filtered = [];
    var sawComment = false;
    var sawStatement = false;
    path2.each(function(stmtPath) {
      var stmt = stmtPath.getValue();
      if (!stmt) {
        return;
      }
      if (stmt.type === "EmptyStatement" && !(stmt.comments && stmt.comments.length > 0)) {
        return;
      }
      if (namedTypes2.Comment.check(stmt)) {
        sawComment = true;
      } else if (namedTypes2.Statement.check(stmt)) {
        sawStatement = true;
      } else {
        isString.assert(stmt);
      }
      filtered.push({
        node: stmt,
        printed: print(stmtPath)
      });
    });
    if (sawComment) {
      (0, tiny_invariant_1.default)(sawStatement === false, "Comments may appear as statements in otherwise empty statement lists, but may not coexist with non-Comment nodes.");
    }
    var prevTrailingSpace = null;
    var len = filtered.length;
    var parts = [];
    filtered.forEach(function(info, i) {
      var printed = info.printed;
      var stmt = info.node;
      var multiLine = printed.length > 1;
      var notFirst = i > 0;
      var notLast = i < len - 1;
      var leadingSpace;
      var trailingSpace;
      var lines2 = stmt && stmt.loc && stmt.loc.lines;
      var trueLoc = lines2 && options2.reuseWhitespace && util2.getTrueLoc(stmt, lines2);
      if (notFirst) {
        if (trueLoc) {
          var beforeStart = lines2.skipSpaces(trueLoc.start, true);
          var beforeStartLine = beforeStart ? beforeStart.line : 1;
          var leadingGap = trueLoc.start.line - beforeStartLine;
          leadingSpace = Array(leadingGap + 1).join("\n");
        } else {
          leadingSpace = multiLine ? "\n\n" : "\n";
        }
      } else {
        leadingSpace = "";
      }
      if (notLast) {
        if (trueLoc) {
          var afterEnd = lines2.skipSpaces(trueLoc.end);
          var afterEndLine = afterEnd ? afterEnd.line : lines2.length;
          var trailingGap = afterEndLine - trueLoc.end.line;
          trailingSpace = Array(trailingGap + 1).join("\n");
        } else {
          trailingSpace = multiLine ? "\n\n" : "\n";
        }
      } else {
        trailingSpace = "";
      }
      parts.push(maxSpace(prevTrailingSpace, leadingSpace), printed);
      if (notLast) {
        prevTrailingSpace = trailingSpace;
      } else if (trailingSpace) {
        parts.push(trailingSpace);
      }
    });
    return (0, lines_1.concat)(parts);
  }
  function maxSpace(s1, s2) {
    if (!s1 && !s2) {
      return (0, lines_1.fromString)("");
    }
    if (!s1) {
      return (0, lines_1.fromString)(s2);
    }
    if (!s2) {
      return (0, lines_1.fromString)(s1);
    }
    var spaceLines1 = (0, lines_1.fromString)(s1);
    var spaceLines2 = (0, lines_1.fromString)(s2);
    if (spaceLines2.length > spaceLines1.length) {
      return spaceLines2;
    }
    return spaceLines1;
  }
  function printClassMemberModifiers(node) {
    var parts = [];
    if (node.declare) {
      parts.push("declare ");
    }
    var access = node.accessibility || node.access;
    if (typeof access === "string") {
      parts.push(access, " ");
    }
    if (node.static) {
      parts.push("static ");
    }
    if (node.override) {
      parts.push("override ");
    }
    if (node.abstract) {
      parts.push("abstract ");
    }
    if (node.readonly) {
      parts.push("readonly ");
    }
    return parts;
  }
  function printMethod(path2, options2, print) {
    var node = path2.getNode();
    var kind = node.kind;
    var parts = [];
    var nodeValue = node.value;
    if (!namedTypes2.FunctionExpression.check(nodeValue)) {
      nodeValue = node;
    }
    parts.push.apply(parts, printClassMemberModifiers(node));
    if (nodeValue.async) {
      parts.push("async ");
    }
    if (nodeValue.generator) {
      parts.push("*");
    }
    if (kind === "get" || kind === "set") {
      parts.push(kind, " ");
    }
    var key = path2.call(print, "key");
    if (node.computed) {
      key = (0, lines_1.concat)(["[", key, "]"]);
    }
    parts.push(key);
    if (node.optional) {
      parts.push("?");
    }
    if (node === nodeValue) {
      parts.push(path2.call(print, "typeParameters"), "(", printFunctionParams(path2, options2, print), ")", path2.call(print, "returnType"));
      if (node.body) {
        parts.push(" ", path2.call(print, "body"));
      } else {
        parts.push(";");
      }
    } else {
      parts.push(path2.call(print, "value", "typeParameters"), "(", path2.call(function(valuePath) {
        return printFunctionParams(valuePath, options2, print);
      }, "value"), ")", path2.call(print, "value", "returnType"));
      if (nodeValue.body) {
        parts.push(" ", path2.call(print, "value", "body"));
      } else {
        parts.push(";");
      }
    }
    return (0, lines_1.concat)(parts);
  }
  function printArgumentsList(path2, options2, print) {
    var printed = path2.map(print, "arguments");
    var trailingComma = util2.isTrailingCommaEnabled(options2, "parameters");
    var joined = (0, lines_1.fromString)(", ").join(printed);
    if (joined.getLineLength(1) > options2.wrapColumn) {
      joined = (0, lines_1.fromString)(",\n").join(printed);
      return (0, lines_1.concat)([
        "(\n",
        joined.indent(options2.tabWidth),
        trailingComma ? ",\n)" : "\n)"
      ]);
    }
    return (0, lines_1.concat)(["(", joined, ")"]);
  }
  function printFunctionParams(path2, options2, print) {
    var fun = path2.getValue();
    var params;
    var printed = [];
    if (fun.params) {
      params = fun.params;
      printed = path2.map(print, "params");
    } else if (fun.parameters) {
      params = fun.parameters;
      printed = path2.map(print, "parameters");
    }
    if (fun.defaults) {
      path2.each(function(defExprPath) {
        var i = defExprPath.getName();
        var p = printed[i];
        if (p && defExprPath.getValue()) {
          printed[i] = (0, lines_1.concat)([p, " = ", print(defExprPath)]);
        }
      }, "defaults");
    }
    if (fun.rest) {
      printed.push((0, lines_1.concat)(["...", path2.call(print, "rest")]));
    }
    var joined = (0, lines_1.fromString)(", ").join(printed);
    if (joined.length > 1 || joined.getLineLength(1) > options2.wrapColumn) {
      joined = (0, lines_1.fromString)(",\n").join(printed);
      if (util2.isTrailingCommaEnabled(options2, "parameters") && !fun.rest && params[params.length - 1].type !== "RestElement") {
        joined = (0, lines_1.concat)([joined, ",\n"]);
      } else {
        joined = (0, lines_1.concat)([joined, "\n"]);
      }
      return (0, lines_1.concat)(["\n", joined.indent(options2.tabWidth)]);
    }
    return joined;
  }
  function maybePrintImportAssertions(path2, options2, print) {
    var n = path2.getValue();
    if (n.assertions && n.assertions.length > 0) {
      var parts = [" assert {"];
      var printed = path2.map(print, "assertions");
      var flat = (0, lines_1.fromString)(", ").join(printed);
      if (flat.length > 1 || flat.getLineLength(1) > options2.wrapColumn) {
        parts.push("\n", (0, lines_1.fromString)(",\n").join(printed).indent(options2.tabWidth), "\n}");
      } else {
        parts.push(" ", flat, " }");
      }
      return (0, lines_1.concat)(parts);
    }
    return (0, lines_1.fromString)("");
  }
  function printExportDeclaration(path2, options2, print) {
    var decl = path2.getValue();
    var parts = ["export "];
    if (decl.exportKind && decl.exportKind === "type") {
      if (!decl.declaration) {
        parts.push("type ");
      }
    }
    var shouldPrintSpaces = options2.objectCurlySpacing;
    namedTypes2.Declaration.assert(decl);
    if (decl["default"] || decl.type === "ExportDefaultDeclaration") {
      parts.push("default ");
    }
    if (decl.declaration) {
      parts.push(path2.call(print, "declaration"));
    } else if (decl.specifiers) {
      if (decl.specifiers.length === 1 && decl.specifiers[0].type === "ExportBatchSpecifier") {
        parts.push("*");
      } else if (decl.specifiers.length === 0) {
        parts.push("{}");
      } else if (decl.specifiers[0].type === "ExportDefaultSpecifier" || decl.specifiers[0].type === "ExportNamespaceSpecifier") {
        var unbracedSpecifiers_2 = [];
        var bracedSpecifiers_2 = [];
        path2.each(function(specifierPath) {
          var spec = specifierPath.getValue();
          if (spec.type === "ExportDefaultSpecifier" || spec.type === "ExportNamespaceSpecifier") {
            unbracedSpecifiers_2.push(print(specifierPath));
          } else {
            bracedSpecifiers_2.push(print(specifierPath));
          }
        }, "specifiers");
        unbracedSpecifiers_2.forEach(function(lines3, i) {
          if (i > 0) {
            parts.push(", ");
          }
          parts.push(lines3);
        });
        if (bracedSpecifiers_2.length > 0) {
          var lines_2 = (0, lines_1.fromString)(", ").join(bracedSpecifiers_2);
          if (lines_2.getLineLength(1) > options2.wrapColumn) {
            lines_2 = (0, lines_1.concat)([
              (0, lines_1.fromString)(",\n").join(bracedSpecifiers_2).indent(options2.tabWidth),
              ","
            ]);
          }
          if (unbracedSpecifiers_2.length > 0) {
            parts.push(", ");
          }
          if (lines_2.length > 1) {
            parts.push("{\n", lines_2, "\n}");
          } else if (options2.objectCurlySpacing) {
            parts.push("{ ", lines_2, " }");
          } else {
            parts.push("{", lines_2, "}");
          }
        }
      } else {
        parts.push(shouldPrintSpaces ? "{ " : "{", (0, lines_1.fromString)(", ").join(path2.map(print, "specifiers")), shouldPrintSpaces ? " }" : "}");
      }
      if (decl.source) {
        parts.push(" from ", path2.call(print, "source"), maybePrintImportAssertions(path2, options2, print));
      }
    }
    var lines2 = (0, lines_1.concat)(parts);
    if (lastNonSpaceCharacter(lines2) !== ";" && !(decl.declaration && (decl.declaration.type === "FunctionDeclaration" || decl.declaration.type === "ClassDeclaration" || decl.declaration.type === "TSModuleDeclaration" || decl.declaration.type === "TSInterfaceDeclaration" || decl.declaration.type === "TSEnumDeclaration"))) {
      lines2 = (0, lines_1.concat)([lines2, ";"]);
    }
    return lines2;
  }
  function printFlowDeclaration(path2, parts) {
    var parentExportDecl = util2.getParentExportDeclaration(path2);
    if (parentExportDecl) {
      (0, tiny_invariant_1.default)(parentExportDecl.type === "DeclareExportDeclaration");
    } else {
      parts.unshift("declare ");
    }
    return (0, lines_1.concat)(parts);
  }
  function printVariance(path2, print) {
    return path2.call(function(variancePath) {
      var value = variancePath.getValue();
      if (value) {
        if (value === "plus") {
          return (0, lines_1.fromString)("+");
        }
        if (value === "minus") {
          return (0, lines_1.fromString)("-");
        }
        return print(variancePath);
      }
      return (0, lines_1.fromString)("");
    }, "variance");
  }
  function adjustClause(clause, options2) {
    if (clause.length > 1)
      return (0, lines_1.concat)([" ", clause]);
    return (0, lines_1.concat)(["\n", maybeAddSemicolon(clause).indent(options2.tabWidth)]);
  }
  function lastNonSpaceCharacter(lines2) {
    var pos = lines2.lastPos();
    do {
      var ch = lines2.charAt(pos);
      if (/\S/.test(ch))
        return ch;
    } while (lines2.prevPos(pos));
  }
  function endsWithBrace(lines2) {
    return lastNonSpaceCharacter(lines2) === "}";
  }
  function swapQuotes(str) {
    return str.replace(/['"]/g, function(m) {
      return m === '"' ? "'" : '"';
    });
  }
  function getPossibleRaw(node) {
    var value = types2.getFieldValue(node, "value");
    var extra = types2.getFieldValue(node, "extra");
    if (extra && typeof extra.raw === "string" && value == extra.rawValue) {
      return extra.raw;
    }
    if (node.type === "Literal") {
      var raw = node.raw;
      if (typeof raw === "string" && value == raw) {
        return raw;
      }
    }
  }
  function jsSafeStringify(str) {
    return JSON.stringify(str).replace(/[\u2028\u2029]/g, function(m) {
      return "\\u" + m.charCodeAt(0).toString(16);
    });
  }
  function nodeStr(str, options2) {
    isString.assert(str);
    switch (options2.quote) {
      case "auto": {
        var double = jsSafeStringify(str);
        var single = swapQuotes(jsSafeStringify(swapQuotes(str)));
        return double.length > single.length ? single : double;
      }
      case "single":
        return swapQuotes(jsSafeStringify(swapQuotes(str)));
      case "double":
      default:
        return jsSafeStringify(str);
    }
  }
  function maybeAddSemicolon(lines2) {
    var eoc = lastNonSpaceCharacter(lines2);
    if (!eoc || "\n};".indexOf(eoc) < 0)
      return (0, lines_1.concat)([lines2, ";"]);
    return lines2;
  }
  return printer;
}
(function(exports2) {
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2.run = exports2.prettyPrint = exports2.print = exports2.visit = exports2.types = exports2.parse = void 0;
  var tslib_1 = require$$0;
  var fs_1 = tslib_1.__importDefault(require$$1);
  var types2 = tslib_1.__importStar(requireMain());
  exports2.types = types2;
  var parser_1 = requireParser();
  Object.defineProperty(exports2, "parse", { enumerable: true, get: function() {
    return parser_1.parse;
  } });
  var printer_1 = requirePrinter();
  var ast_types_1 = requireMain();
  Object.defineProperty(exports2, "visit", { enumerable: true, get: function() {
    return ast_types_1.visit;
  } });
  function print(node, options2) {
    return new printer_1.Printer(options2).print(node);
  }
  exports2.print = print;
  function prettyPrint(node, options2) {
    return new printer_1.Printer(options2).printGenerically(node);
  }
  exports2.prettyPrint = prettyPrint;
  function run(transformer, options2) {
    return runFile(process.argv[2], transformer, options2);
  }
  exports2.run = run;
  function runFile(path2, transformer, options2) {
    fs_1.default.readFile(path2, "utf-8", function(err, code2) {
      if (err) {
        console.error(err);
        return;
      }
      runString(code2, transformer, options2);
    });
  }
  function defaultWriteback(output2) {
    process.stdout.write(output2);
  }
  function runString(code2, transformer, options2) {
    var writeback = options2 && options2.writeback || defaultWriteback;
    transformer((0, parser_1.parse)(code2, options2), function(node) {
      writeback(print(node, options2).code);
    });
  }
})(main$1);
function generateTimestamp() {
  const now = /* @__PURE__ */ new Date();
  return [
    now.getFullYear(),
    now.getMonth() + 1,
    now.getDate(),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  ].map((part) => part.toString().padStart(2, "0")).join("");
}
function encodeHTML(str) {
  return str.replace(/[&<>"'\n]/g, function(match) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "\n": "_esc_newline_"
    }[match];
  });
}
const { Plugin } = require("siyuan");
class SiyuanPlugin extends Plugin {
  constructor() {
    super(...arguments);
    __publicField(this, "onunloadFn", []);
  }
  // 在 unload 时执行注册的函数
  addUnloadFn(fn) {
    this.onunloadFn.push(fn);
  }
  onunload() {
    this.onunloadFn.forEach((fn) => fn());
  }
}
const dev = console.log;
class Expr extends SiyuanPlugin {
  constructor() {
    super(...arguments);
    __publicField(this, "IntervalId", 0);
    /** 主循环的间隔毫秒数 */
    __publicField(this, "intervalMs", 1e3);
    /** 控制sql相关 TODO 添加选项配置 */
    __publicField(this, "intervalUpdateSql", siyuan_1.bindData({
      initValue: true,
      that: this,
      storageName: "intervalUpdateSql.json"
    }));
    /** 只更新这个时间戳以后的表达式 */
    __publicField(this, "updated", siyuan_1.bindData({
      initValue: 0,
      that: this,
      storageName: "updated.json"
    }));
    /** 为 true 代表正在进行求值运算中 */
    __publicField(this, "evalState", false);
    /** 记录计算完成的 id ，不再计算 */
    __publicField(this, "evalExprIDs", []);
  }
  async onload() {
    console.log("[expr]", this);
    globalThis.expr = this;
    this.addUnloadFn(
      () => (
        //@ts-ignore
        delete globalThis.expr
      )
    );
    this.eventBus.on("switch-protyle", () => {
      this.evalExprIDs = [];
    });
    this.IntervalId = setInterval(this.evalAllExpr.bind(this), this.intervalMs);
    this.addUnloadFn(() => clearInterval(this.IntervalId));
    document.body.classList.add(pluginClassName);
    this.addUnloadFn(() => document.body.classList.remove(pluginClassName));
  }
  /** 对所有表达式进行求值 */
  async evalAllExpr() {
    if (this.evalState) {
      return;
    }
    const exprIDs = [...document.querySelectorAll("[custom-expr]")].filter((el) => {
      if (!(el instanceof HTMLElement)) {
        return false;
      }
      if (el.dataset.nodeId && this.evalExprIDs.includes(el.dataset.nodeId)) {
        return false;
      }
      return true;
    }).map((el) => {
      const id = el.dataset.nodeId;
      return id;
    });
    if (!this.intervalUpdateSql.value() && exprIDs.length === 0) {
      return;
    }
    try {
      this.evalState = true;
      const exprBlock = await get_exprBlocks(exprIDs);
      if (exprBlock && exprBlock.length > 0) {
        await Promise.all(exprBlock.map(this.exprEval.bind(this)));
      }
    } catch (error) {
      dev("求值错误", error);
    } finally {
      this.evalState = false;
    }
  }
  /** 对指定id进行求值 */
  async exprEvalByID(block_id) {
    const blocks = await get_exprBlocks([block_id]);
    return this.exprEval(blocks[0]);
  }
  async exprEval(block) {
    const code = `async ()=>{
${block.a_value}
}`;
    const ast = main$1.parse(code);
    const b = main$1.types.builders;
    const body = ast.program.body[0].expression.body.body;
    if (body.find((item) => item.type === "ReturnStatement")) ;
    else {
      const lastExp = body.pop();
      if (lastExp.type = "ExpressionStatement") {
        body.push(b.returnStatement(lastExp.expression));
      }
    }
    const output = main$1.print(ast).code;
    let evalValue = await eval(output)();
    const updated = generateTimestamp();
    if (Number(updated) > this.updated.value()) {
      this.updated.set(Number(updated));
    }
    let newKramdownAttr = block.ial;
    if (/updated="\d+"/.test(newKramdownAttr)) {
      newKramdownAttr = newKramdownAttr.replace(/updated="\d+"/, `updated="${updated}"`);
    } else {
      newKramdownAttr = newKramdownAttr.replace(/}$/, ` updated="${updated}"`);
    }
    const evalValue_string = String(evalValue);
    if (/custom-expr-value=".*?"/.test(newKramdownAttr)) {
      newKramdownAttr = newKramdownAttr.replace(
        /custom-expr-value=".*?"/,
        `custom-expr-value="${encodeHTML(evalValue_string)}"`
      );
    } else {
      newKramdownAttr = newKramdownAttr.replace(
        /}$/,
        ` custom-expr-value="${encodeHTML(evalValue_string)}"}`
      );
    }
    await updateBlock("markdown", String(evalValue_string + "\n" + newKramdownAttr), block.id);
    dev("expr eval:", { id: block.id, expr: block.a_value, evalValue });
    this.evalExprIDs.push(block.id);
    return evalValue;
  }
}
module.exports = Expr;
//# sourceMappingURL=index.js.map
