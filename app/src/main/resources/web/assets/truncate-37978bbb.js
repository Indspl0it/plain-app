import{aK as j,aL as A,aM as v,aN as L,aO as M,ar as N,aP as R,aQ as x}from"./index-89decb33.js";import{h as m,s as z,c as F}from"./stringToArray-ce29ac4f.js";import{a as _}from"./toInteger-3fab7e5d.js";var k="[object RegExp]";function P(e){return j(e)&&A(e)==k}var b=v&&v.isRegExp,$=b?L(b):P;const p=$;var w=M("length");const y=w;var E="\\ud800-\\udfff",D="\\u0300-\\u036f",G="\\ufe20-\\ufe2f",H="\\u20d0-\\u20ff",J=D+G+H,V="\\ufe0e\\ufe0f",q="["+E+"]",d="["+J+"]",c="\\ud83c[\\udffb-\\udfff]",K="(?:"+d+"|"+c+")",O="[^"+E+"]",S="(?:\\ud83c[\\udde6-\\uddff]){2}",T="[\\ud800-\\udbff][\\udc00-\\udfff]",Q="\\u200d",I=K+"?",U="["+V+"]?",W="(?:"+Q+"(?:"+[O,S,T].join("|")+")"+U+I+")*",Z=U+I+W,B="(?:"+[O+d+"?",d,S,T,q].join("|")+")",h=RegExp(c+"(?="+c+")|"+B+Z,"g");function X(e){for(var a=h.lastIndex=0;h.test(e);)++a;return a}function Y(e){return m(e)?X(e):y(e)}var ee=30,re="...",ae=/\w*$/;function ne(e,a){var n=ee,s=re;if(N(a)){var r="separator"in a?a.separator:r;n="length"in a?_(a.length):n,s="omission"in a?R(a.omission):s}e=x(e);var o=e.length;if(m(e)){var u=z(e);o=u.length}if(n>=o)return e;var i=n-Y(s);if(i<1)return s;var f=u?F(u,0,i).join(""):e.slice(0,i);if(r===void 0)return f+s;if(u&&(i+=f.length-i),p(r)){if(e.slice(i).search(r)){var t,C=f;for(r.global||(r=RegExp(r.source,x(ae.exec(r))+"g")),r.lastIndex=0;t=r.exec(C);)var l=t.index;f=f.slice(0,l===void 0?i:l)}}else if(e.indexOf(R(r),i)!=i){var g=f.lastIndexOf(r);g>-1&&(f=f.slice(0,g))}return f+s}export{ne as t};