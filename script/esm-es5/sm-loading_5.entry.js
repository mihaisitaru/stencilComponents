var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, c as createEvent, H as Host } from './index-586d866d.js';
var loadingCss = ".lds-ripple{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@-webkit-keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}";
var Loading = /** @class */ (function () {
    function Loading(hostRef) {
        registerInstance(this, hostRef);
    }
    Loading.prototype.render = function () {
        return (h("div", { class: "lds-ripple" }, h("div", null), h("div", null)));
    };
    return Loading;
}());
Loading.style = loadingCss;
var sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background-color:lightgray;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;z-index:100}:host([opened]) aside{left:0}header{padding:1rem;background-color:black}header h1{font-size:1.1rem;color:white;margin:0}header button{position:absolute;padding:10px;top:0;right:0;background-color:white}button{cursor:pointer}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}#tabs button{width:30%;background-color:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:active,#tabs button:hover{background-color:black;color:white}button:focus{outline:none}#contact-info{padding:.5rem 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0, 0, 0, 0.35);z-index:10;display:none;opacity:0;pointer-events:none}:host([opened]) .backdrop{display:block;opacity:1;pointer-events:all}";
var SideDrawer = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.showContact = false;
    }
    class_1.prototype.onHideDrawer = function () {
        this.opened = false;
    };
    class_1.prototype.onContentChange = function (content) {
        this.showContact = content === 'contact';
    };
    class_1.prototype.open = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.opened = true;
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.render = function () {
        var mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-info" }, h("h2", null, "Contact information"), h("ul", null, h("li", null, "Phone: +4012345678"), h("li", null, "Email: ", h("a", { href: "mailto:ms@me.com" }, "ms@me.com")))));
        }
        return [
            h("div", { class: "backdrop", onClick: this.onHideDrawer.bind(this) }),
            h("aside", null, h("header", null, h("h1", null, this.drawerTitle), h("button", { onClick: this.onHideDrawer.bind(this) }, "X")), h("section", { id: "tabs" }, h("button", { class: !this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'navigation') }, "Navigation"), h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), h("main", null, mainContent))
        ];
    };
    return class_1;
}());
SideDrawer.style = sideDrawerCss;
var AV_API_KEY = '459DYKBRAAI5UDJJ';
var stockFinderCss = ":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}form input{color:lightcoral}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}ul{margin:0 .2rem;padding:0}li{list-style:none;border:1px solid black;padding:5px;margin:0;cursor:pointer}li:hover,li:active{background-color:lightcoral;color:var(--color-primary-inverted, whitesmoke)}";
var StockFinder = /** @class */ (function () {
    function StockFinder(hostRef) {
        registerInstance(this, hostRef);
        this.placeholder = 'Search for a stock symbol';
        this.symbols = [];
        this.isInputValid = false;
        this.isLoading = false;
        this.errorMessage = null;
        this.smSymbolSelected = createEvent(this, "smSymbolSelected", 7);
    }
    StockFinder.prototype.stockSymbolChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.onSearchStockPrice(newValue);
        }
        else {
            this.symbols = null;
        }
    };
    StockFinder.prototype.onInputChange = function (event) {
        this.stockSymbol = event.target.value;
        if (this.stockSymbol.trim().length > 0) {
            this.isInputValid = true;
        }
        else {
            this.isInputValid = false;
            this.symbols = null;
            this.isLoading = false;
        }
    };
    StockFinder.prototype.onSearchStockPrice = function (newValue, event) {
        var _this = this;
        this.isLoading = true;
        if (event) {
            event.preventDefault();
        }
        if (newValue.trim().length === 0) {
            return;
        }
        fetch("https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=" + newValue.toUpperCase() + "&apikey=" + AV_API_KEY).then(function (response) { return response.json(); })
            .then(function (parsedResponse) {
            if (parsedResponse && parsedResponse['bestMatches'] && parsedResponse['bestMatches'].length === 0) {
                throw new Error('No result found!');
            }
            else if (parsedResponse && parsedResponse['bestMatches']) {
                _this.errorMessage = null;
                _this.symbols = parsedResponse['bestMatches'].map(function (res) {
                    return {
                        name: res['2. name'],
                        symbol: res['1. symbol']
                    };
                });
            }
            else {
                _this.errorMessage = parsedResponse['Note'];
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            _this.errorMessage = null;
            _this.errorMessage = error.message;
            _this.isLoading = false;
        });
    };
    StockFinder.prototype.onSelectSymbol = function (symbol) {
        this.smSymbolSelected.emit(symbol);
    };
    StockFinder.prototype.render = function () {
        var _this = this;
        var data;
        if (this.symbols) {
            data = h("ul", null, this.symbols.map(function (res) { return (h("li", { onClick: _this.onSelectSymbol.bind(_this, res.symbol) }, h("strong", null, res.symbol), ": ", res.name)); }));
        }
        if (this.errorMessage) {
            data = null;
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = h("sm-loading", null);
        }
        return [
            h("form", null, h("input", { ref: function (el) { return _this.input = el; }, value: this.stockSymbol, placeholder: this.placeholder, onInput: this.onInputChange.bind(this) })),
            data,
            h("p", null, this.errorMessage)
        ];
    };
    Object.defineProperty(StockFinder, "watchers", {
        get: function () {
            return {
                "stockSymbol": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    return StockFinder;
}());
StockFinder.style = stockFinderCss;
var stockPriceCss = ":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}:host(.error){background-color:tomato}form input{color:var(--color-primary-inverted, lightcoral)}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}";
var StockPrice = /** @class */ (function () {
    function StockPrice(hostRef) {
        registerInstance(this, hostRef);
        this.placeholder = 'Please enter a symbol to see the price (e.g.: XRX)';
        this.isLoading = false;
        this.isInputValid = false;
    }
    StockPrice.prototype.stockSymbolChanged = function (newValue, oldValue) {
        if (newValue !== oldValue) {
            this.onFetchStockPrice(newValue);
        }
    };
    StockPrice.prototype.onInputChange = function (event) {
        this.stockSymbol = event.target.value;
        if (this.stockSymbol.trim().length > 0) {
            this.isInputValid = true;
        }
        else {
            this.isInputValid = false;
            this.price = null;
        }
    };
    StockPrice.prototype.onStockSymbolSelected = function (event) {
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
            this.isInputValid = true;
        }
    };
    StockPrice.prototype.onFetchStockPrice = function (newValue, event) {
        var _this = this;
        this.isLoading = true;
        var stockSymbol = newValue ? newValue : this.input.value;
        if (event) {
            event.preventDefault();
        }
        fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=" + stockSymbol + "&apikey=" + AV_API_KEY).then(function (response) { return response.json(); })
            .then(function (parsedResponse) {
            if (parsedResponse['Global Quote'] && !parsedResponse['Global Quote']['05. price']) {
                throw new Error('Invalid symbol entered! Please check it and try again!');
            }
            else if (parsedResponse['Global Quote'] && parsedResponse['Global Quote']['05. price']) {
                _this.errorMessage = null;
                _this.price = +parsedResponse['Global Quote']['05. price'];
            }
            else {
                _this.errorMessage = parsedResponse['Note'];
            }
            _this.isLoading = false;
        })
            .catch(function (error) {
            _this.errorMessage = null;
            _this.errorMessage = error.message;
            _this.isLoading = false;
            _this.price = null;
        });
    };
    StockPrice.prototype.componentDidLoad = function () {
        if (this.stockSymbol) {
            this.initialInputValue = this.stockSymbol;
            this.input.value = this.stockSymbol;
            this.isInputValid = true;
            this.onFetchStockPrice();
        }
    };
    StockPrice.prototype.hostData = function () {
        return { class: this.errorMessage ? 'error' : '' };
    };
    StockPrice.prototype.__stencil_render = function () {
        var _this = this;
        var data = null;
        if (this.errorMessage) {
            this.price = null;
            data = h("p", null, this.errorMessage);
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = h("sm-loading", null);
        }
        if (this.price) {
            data = h("p", null, "Price: $", this.price);
        }
        if (!this.isInputValid) {
            data = h("p", null, this.placeholder);
        }
        return [
            // <form onSubmit={this.onFetchStockPrice.bind(this, this.stockSymbol)}>
            h("form", null, h("input", { ref: function (el) { return _this.input = el; }, value: this.stockSymbol, onInput: this.onInputChange.bind(this) })),
            h("div", null, data)
        ];
    };
    Object.defineProperty(StockPrice, "watchers", {
        get: function () {
            return {
                "stockSymbol": ["stockSymbolChanged"]
            };
        },
        enumerable: true,
        configurable: true
    });
    StockPrice.prototype.render = function () { return h(Host, this.hostData(), this.__stencil_render()); };
    return StockPrice;
}());
StockPrice.style = stockPriceCss;
var toolTipCss = ":host{display:-ms-flexbox;display:flex}.tool-tip-content{font:inherit;position:absolute;margin:-5px 0 0 10px;background-color:black;color:white;border-radius:5px;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);z-index:10;width:5rem}.tool-tip-content::before{content:\"\";position:absolute;top:24%;left:0%;margin-left:-15px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent;-webkit-transform:rotate(90deg);transform:rotate(90deg)}section p{display:inline;padding:0 5px}.tool-tip-icon{width:auto;height:auto;border-radius:15%;background-color:cornflowerblue;cursor:pointer;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7)}";
var ToolTip = /** @class */ (function () {
    function ToolTip(hostRef) {
        registerInstance(this, hostRef);
        this.clicked = false;
    }
    ToolTip.prototype.onToolTipClicked = function () {
        this.clicked = !this.clicked;
    };
    ToolTip.prototype.render = function () {
        var toolTipInfo = this.toolTipInfo && this.clicked ? this.toolTipInfo : '';
        return [
            h("section", null, h("p", null, this.toolTipText), h("p", { class: "tool-tip-icon", onClick: this.onToolTipClicked.bind(this) }, "?")),
            h("main", null, h("div", { class: toolTipInfo ? 'tool-tip-content' : '' }, toolTipInfo))
        ];
    };
    return ToolTip;
}());
ToolTip.style = toolTipCss;
export { Loading as sm_loading, SideDrawer as sm_side_drawer, StockFinder as sm_stock_finder, StockPrice as sm_stock_price, ToolTip as sm_tool_tip };
