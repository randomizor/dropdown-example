import*as e from"has-property-descriptors";import*as r from"get-intrinsic";import*as o from"es-errors/syntax";import*as t from"es-errors/type";import*as n from"gopd";var a=e;try{"default"in e&&(a=e.default)}catch(e){}var l=r;try{"default"in r&&(l=r.default)}catch(e){}var i=o;try{"default"in o&&(i=o.default)}catch(e){}var f=t;try{"default"in t&&(f=t.default)}catch(e){}var u=n;try{"default"in n&&(u=n.default)}catch(e){}var b={};var s=a();var p=l;var d=s&&p("%Object.defineProperty%",true);if(d)try{d({},"a",{value:1})}catch(e){d=false}var v=i;var c=f;var h=u;
/** @type {(obj: Record<PropertyKey, unknown>, property: PropertyKey, value: unknown, nonEnumerable?: boolean | null, nonWritable?: boolean | null, nonConfigurable?: boolean | null, loose?: boolean) => void} */b=function defineDataProperty(e,r,o){if(!e||typeof e!=="object"&&typeof e!=="function")throw new c("`obj` must be an object or a function`");if(typeof r!=="string"&&typeof r!=="symbol")throw new c("`property` must be a string or a symbol`");if(arguments.length>3&&typeof arguments[3]!=="boolean"&&arguments[3]!==null)throw new c("`nonEnumerable`, if provided, must be a boolean or null");if(arguments.length>4&&typeof arguments[4]!=="boolean"&&arguments[4]!==null)throw new c("`nonWritable`, if provided, must be a boolean or null");if(arguments.length>5&&typeof arguments[5]!=="boolean"&&arguments[5]!==null)throw new c("`nonConfigurable`, if provided, must be a boolean or null");if(arguments.length>6&&typeof arguments[6]!=="boolean")throw new c("`loose`, if provided, must be a boolean");var t=arguments.length>3?arguments[3]:null;var n=arguments.length>4?arguments[4]:null;var a=arguments.length>5?arguments[5]:null;var l=arguments.length>6&&arguments[6];
/* @type {false | TypedPropertyDescriptor<unknown>} */var i=!!h&&h(e,r);if(d)d(e,r,{configurable:a===null&&i?i.configurable:!a,enumerable:t===null&&i?i.enumerable:!t,value:o,writable:n===null&&i?i.writable:!n});else{if(!l&&(t||n||a))throw new v("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");e[r]=o}};var m=b;export{m as default};
