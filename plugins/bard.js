function _0x4b5a(){const _0xa530b4=['\x20*يمكنك\x20الأن\x20سؤال\x20نمودج\x20جوجل\x20الجديد\x20\x20Bard\x20بواسطة\x20هاذا\x20الأمر*\x20\x0a\x0a\x20\x20*مثال:*\x20\x0a\x0a\x20*.bard\x20حوار\x20حول\x20اليمن*','7037532tYxpuu','mediaType','test','msg','composing','7080136qezdvc','reply','https://aemt.me/bardimg?url=','4866devCnr','mimetype','error','command','28525968ZvcgPq','بارد','https://aemt.me/bard?text=','4JGDvdL','json','10WoNciA','>\x20ⓘ\x20يمكنك\x20الأن\x20سؤال\x20نمودج\x20جوجل\x20Bard\x20بواسطة\x20هاذا\x20الأمر\x20\x0a\x0a\x20>\x20مثال:\x20\x0a\x20.bard\x20حوار\x20حول\x20المغرب','quoted','269726pgdBvy','result','sendMessage','&text=','\x20حدث\x20خطأ\x20أثناء\x20الإجابة\x20على\x20السؤال','chat','5265408XEMHlD','45178LEHzAP','help','tags','bardai','download','5025rTmDeC','sendPresenceUpdate'];_0x4b5a=function(){return _0xa530b4;};return _0x4b5a();}const _0xe070b=_0x87c0;(function(_0x1b140c,_0x5a7fd0){const _0x3fbb02=_0x87c0,_0x265aa6=_0x1b140c();while(!![]){try{const _0x41dc98=parseInt(_0x3fbb02(0xa7))/0x1*(parseInt(_0x3fbb02(0xa2))/0x2)+parseInt(_0x3fbb02(0x8a))/0x3+parseInt(_0x3fbb02(0x93))/0x4+parseInt(_0x3fbb02(0x90))/0x5*(-parseInt(_0x3fbb02(0x9b))/0x6)+parseInt(_0x3fbb02(0x8b))/0x7+parseInt(_0x3fbb02(0x98))/0x8+parseInt(_0x3fbb02(0x9f))/0x9*(-parseInt(_0x3fbb02(0xa4))/0xa);if(_0x41dc98===_0x5a7fd0)break;else _0x265aa6['push'](_0x265aa6['shift']());}catch(_0x32fbef){_0x265aa6['push'](_0x265aa6['shift']());}}}(_0x4b5a,0xea943));import _0x285fa1 from'node-fetch';function _0x87c0(_0x4b0527,_0x1097e7){const _0x4b5a39=_0x4b5a();return _0x87c0=function(_0x87c04e,_0xf82468){_0x87c04e=_0x87c04e-0x86;let _0x5c5076=_0x4b5a39[_0x87c04e];return _0x5c5076;},_0x87c0(_0x4b0527,_0x1097e7);}import _0x2034fd from'../lib/uploadImage.js';const bardHandler=async(_0x50fc97,{conn:_0x445cdc,text:_0x43f24c,usedPrefix:_0x3420c7,command:_0x306f8d})=>{const _0x356dea=_0x87c0;if(!_0x43f24c)return _0x445cdc[_0x356dea(0x99)](_0x50fc97[_0x356dea(0x89)],_0x356dea(0x92),_0x50fc97);try{_0x445cdc[_0x356dea(0x91)](_0x356dea(0x97),_0x50fc97[_0x356dea(0x89)]);const _0x50f272=await _0x285fa1(_0x356dea(0xa1)+encodeURIComponent(_0x43f24c)),_0x172cb8=await _0x50f272[_0x356dea(0xa3)]();await _0x50fc97['reply'](_0x172cb8['result']);}catch(_0x396ed9){return console[_0x356dea(0x9d)](_0x396ed9),_0x445cdc[_0x356dea(0x99)](_0x50fc97[_0x356dea(0x89)],_0x356dea(0x88),_0x50fc97);}},bardimgHandler=async(_0x5f2511,{conn:_0x59f970,text:_0x4e28a6})=>{const _0x1d33ff=_0x87c0;let _0x6907d5=_0x5f2511[_0x1d33ff(0xa6)]?_0x5f2511[_0x1d33ff(0xa6)]:_0x5f2511,_0x334578=(_0x6907d5[_0x1d33ff(0x96)]||_0x6907d5)[_0x1d33ff(0x9c)]||_0x6907d5[_0x1d33ff(0x94)]||'';if(/image/g['test'](_0x334578)&&!/webp/g[_0x1d33ff(0x95)](_0x334578)){let _0x5afde2=await _0x6907d5[_0x1d33ff(0x8f)]();_0x59f970['sendPresenceUpdate'](_0x1d33ff(0x97),_0x5f2511['chat']);let _0x4cff40=await _0x2034fd(_0x5afde2),_0x4818a0=await(await _0x285fa1(_0x1d33ff(0x9a)+_0x4cff40+_0x1d33ff(0x87)+encodeURIComponent(_0x4e28a6)))[_0x1d33ff(0xa3)]();_0x59f970[_0x1d33ff(0x86)](_0x5f2511[_0x1d33ff(0x89)],{'text':_0x4818a0[_0x1d33ff(0xa8)]},{'quoted':_0x5f2511});}else return _0x59f970['reply'](_0x5f2511[_0x1d33ff(0x89)],_0x1d33ff(0xa5),_0x5f2511);},handler=async(_0x152fa1,{conn:_0x2fbc16,text:_0x409a53,usedPrefix:_0x4707cc,command:_0x11677a})=>{const _0x31b9f1=_0x87c0;_0x152fa1[_0x31b9f1(0xa6)]&&/image/g[_0x31b9f1(0x95)]((_0x152fa1[_0x31b9f1(0xa6)]['msg']||_0x152fa1[_0x31b9f1(0xa6)])[_0x31b9f1(0x9c)]||'')?await bardimgHandler(_0x152fa1,{'conn':_0x2fbc16,'text':_0x409a53}):await bardHandler(_0x152fa1,{'conn':_0x2fbc16,'text':_0x409a53,'usedPrefix':_0x4707cc,'command':_0x11677a});};handler[_0xe070b(0x9e)]=[_0xe070b(0xa0)],handler[_0xe070b(0x8c)]=[_0xe070b(0xa0),_0xe070b(0x8e)],handler[_0xe070b(0x8d)]=['ai'];export{bardHandler,handler as default};
