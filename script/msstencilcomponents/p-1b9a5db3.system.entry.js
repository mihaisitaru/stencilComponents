var __awaiter=this&&this.__awaiter||function(t,o,e,i){function n(t){return t instanceof e?t:new e((function(o){o(t)}))}return new(e||(e=Promise))((function(e,r){function l(t){try{a(i.next(t))}catch(o){r(o)}}function s(t){try{a(i["throw"](t))}catch(o){r(o)}}function a(t){t.done?e(t.value):n(t.value).then(l,s)}a((i=i.apply(t,o||[])).next())}))};var __generator=this&&this.__generator||function(t,o){var e={label:0,sent:function(){if(r[0]&1)throw r[1];return r[1]},trys:[],ops:[]},i,n,r,l;return l={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(l[Symbol.iterator]=function(){return this}),l;function s(t){return function(o){return a([t,o])}}function a(l){if(i)throw new TypeError("Generator is already executing.");while(e)try{if(i=1,n&&(r=l[0]&2?n["return"]:l[0]?n["throw"]||((r=n["return"])&&r.call(n),0):n.next)&&!(r=r.call(n,l[1])).done)return r;if(n=0,r)l=[l[0]&2,r.value];switch(l[0]){case 0:case 1:r=l;break;case 4:e.label++;return{value:l[1],done:false};case 5:e.label++;n=l[1];l=[0];continue;case 7:l=e.ops.pop();e.trys.pop();continue;default:if(!(r=e.trys,r=r.length>0&&r[r.length-1])&&(l[0]===6||l[0]===2)){e=0;continue}if(l[0]===3&&(!r||l[1]>r[0]&&l[1]<r[3])){e.label=l[1];break}if(l[0]===6&&e.label<r[1]){e.label=r[1];r=l;break}if(r&&e.label<r[2]){e.label=r[2];e.ops.push(l);break}if(r[2])e.ops.pop();e.trys.pop();continue}l=o.call(t,e)}catch(s){l=[6,s];n=0}finally{i=r=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};System.register(["./p-a69bd51b.system.js"],(function(t){"use strict";var o,e,i,n;return{setters:[function(t){o=t.r;e=t.h;i=t.c;n=t.H}],execute:function(){var r=".lds-ripple{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@-webkit-keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}";var l=t("sm_loading",function(){function t(t){o(this,t)}t.prototype.render=function(){return e("div",{class:"lds-ripple"},e("div",null),e("div",null))};return t}());l.style=r;var s="aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background-color:lightgray;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;z-index:100}:host([opened]) aside{left:0}header{padding:1rem;background-color:black}header h1{font-size:1.1rem;color:white;margin:0}header button{position:absolute;padding:10px;top:0;right:0;background-color:white}button{cursor:pointer}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}#tabs button{width:30%;background-color:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:active,#tabs button:hover{background-color:black;color:white}button:focus{outline:none}#contact-info{padding:.5rem 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0, 0, 0, 0.35);z-index:10;display:none;opacity:0;pointer-events:none}:host([opened]) .backdrop{display:block;opacity:1;pointer-events:all}";var a=t("sm_side_drawer",function(){function t(t){o(this,t);this.showContact=false}t.prototype.onHideDrawer=function(){this.opened=false};t.prototype.onContentChange=function(t){this.showContact=t==="contact"};t.prototype.open=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.opened=true;return[2]}))}))};t.prototype.render=function(){var t=e("slot",null);if(this.showContact){t=e("div",{id:"contact-info"},e("h2",null,"Contact information"),e("ul",null,e("li",null,"Phone: +4012345678"),e("li",null,"Email: ",e("a",{href:"mailto:ms@me.com"},"ms@me.com"))))}return[e("div",{class:"backdrop",onClick:this.onHideDrawer.bind(this)}),e("aside",null,e("header",null,e("h1",null,this.drawerTitle),e("button",{onClick:this.onHideDrawer.bind(this)},"X")),e("section",{id:"tabs"},e("button",{class:!this.showContact?"active":"",onClick:this.onContentChange.bind(this,"navigation")},"Navigation"),e("button",{class:this.showContact?"active":"",onClick:this.onContentChange.bind(this,"contact")},"Contact")),e("main",null,t))]};return t}());a.style=s;var c="459DYKBRAAI5UDJJ";var u=":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}form input{color:lightcoral}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}ul{margin:0 .2rem;padding:0}li{list-style:none;border:1px solid black;padding:5px;margin:0;cursor:pointer}li:hover,li:active{background-color:lightcoral;color:var(--color-primary-inverted, whitesmoke)}";var p=t("sm_stock_finder",function(){function t(t){o(this,t);this.placeholder="Search for a stock symbol";this.symbols=[];this.isInputValid=false;this.isLoading=false;this.errorMessage=null;this.smSymbolSelected=i(this,"smSymbolSelected",7)}t.prototype.stockSymbolChanged=function(t,o){if(t!==o){this.onSearchStockPrice(t)}else{this.symbols=null}};t.prototype.onInputChange=function(t){this.stockSymbol=t.target.value;if(this.stockSymbol.trim().length>0){this.isInputValid=true}else{this.isInputValid=false;this.symbols=null;this.isLoading=false}};t.prototype.onSearchStockPrice=function(t,o){var e=this;this.isLoading=true;if(o){o.preventDefault()}if(t.trim().length===0){return}fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords="+t.toUpperCase()+"&apikey="+c).then((function(t){return t.json()})).then((function(t){if(t&&t["bestMatches"]&&t["bestMatches"].length===0){throw new Error("No result found!")}else if(t&&t["bestMatches"]){e.errorMessage=null;e.symbols=t["bestMatches"].map((function(t){return{name:t["2. name"],symbol:t["1. symbol"]}}))}else{e.errorMessage=t["Note"]}e.isLoading=false})).catch((function(t){e.errorMessage=null;e.errorMessage=t.message;e.isLoading=false}))};t.prototype.onSelectSymbol=function(t){this.smSymbolSelected.emit(t)};t.prototype.render=function(){var t=this;var o;if(this.symbols){o=e("ul",null,this.symbols.map((function(o){return e("li",{onClick:t.onSelectSymbol.bind(t,o.symbol)},e("strong",null,o.symbol),": ",o.name)})))}if(this.errorMessage){o=null;this.isLoading=false}if(this.isLoading){o=e("sm-loading",null)}return[e("form",null,e("input",{ref:function(o){return t.input=o},value:this.stockSymbol,placeholder:this.placeholder,onInput:this.onInputChange.bind(this)})),o,e("p",null,this.errorMessage)]};Object.defineProperty(t,"watchers",{get:function(){return{stockSymbol:["stockSymbolChanged"]}},enumerable:true,configurable:true});return t}());p.style=u;var h=":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}:host(.error){background-color:tomato}form input{color:var(--color-primary-inverted, lightcoral)}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}";var d=t("sm_stock_price",function(){function t(t){o(this,t);this.placeholder="Please enter a symbol to see the price (e.g.: XRX)";this.isLoading=false;this.isInputValid=false}t.prototype.stockSymbolChanged=function(t,o){if(t!==o){this.onFetchStockPrice(t)}};t.prototype.onInputChange=function(t){this.stockSymbol=t.target.value;if(this.stockSymbol.trim().length>0){this.isInputValid=true}else{this.isInputValid=false;this.price=null}};t.prototype.onStockSymbolSelected=function(t){if(t.detail&&t.detail!==this.stockSymbol){this.stockSymbol=t.detail;this.isInputValid=true}};t.prototype.onFetchStockPrice=function(t,o){var e=this;this.isLoading=true;var i=t?t:this.input.value;if(o){o.preventDefault()}fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+i+"&apikey="+c).then((function(t){return t.json()})).then((function(t){if(t["Global Quote"]&&!t["Global Quote"]["05. price"]){throw new Error("Invalid symbol entered! Please check it and try again!")}else if(t["Global Quote"]&&t["Global Quote"]["05. price"]){e.errorMessage=null;e.price=+t["Global Quote"]["05. price"]}else{e.errorMessage=t["Note"]}e.isLoading=false})).catch((function(t){e.errorMessage=null;e.errorMessage=t.message;e.isLoading=false;e.price=null}))};t.prototype.componentDidLoad=function(){if(this.stockSymbol){this.initialInputValue=this.stockSymbol;this.input.value=this.stockSymbol;this.isInputValid=true;this.onFetchStockPrice()}};t.prototype.hostData=function(){return{class:this.errorMessage?"error":""}};t.prototype.__stencil_render=function(){var t=this;var o=null;if(this.errorMessage){this.price=null;o=e("p",null,this.errorMessage);this.isLoading=false}if(this.isLoading){o=e("sm-loading",null)}if(this.price){o=e("p",null,"Price: $",this.price)}if(!this.isInputValid){o=e("p",null,this.placeholder)}return[e("form",null,e("input",{ref:function(o){return t.input=o},value:this.stockSymbol,onInput:this.onInputChange.bind(this)})),e("div",null,o)]};Object.defineProperty(t,"watchers",{get:function(){return{stockSymbol:["stockSymbolChanged"]}},enumerable:true,configurable:true});t.prototype.render=function(){return e(n,this.hostData(),this.__stencil_render())};return t}());d.style=h;var f=':host{display:-ms-flexbox;display:flex}.tool-tip-content{font:inherit;position:absolute;margin:-5px 0 0 10px;background-color:black;color:white;border-radius:5px;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);z-index:10;width:5rem}.tool-tip-content::before{content:"";position:absolute;top:24%;left:0%;margin-left:-15px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent;-webkit-transform:rotate(90deg);transform:rotate(90deg)}section p{display:inline;padding:0 5px}.tool-tip-icon{width:auto;height:auto;border-radius:15%;background-color:cornflowerblue;cursor:pointer;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7)}';var b=t("sm_tool_tip",function(){function t(t){o(this,t);this.clicked=false}t.prototype.onToolTipClicked=function(){this.clicked=!this.clicked};t.prototype.render=function(){var t=this.toolTipInfo&&this.clicked?this.toolTipInfo:"";return[e("section",null,e("p",null,this.toolTipText),e("p",{class:"tool-tip-icon",onClick:this.onToolTipClicked.bind(this)},"?")),e("main",null,e("div",{class:t?"tool-tip-content":""},t))]};return t}());b.style=f}}}));