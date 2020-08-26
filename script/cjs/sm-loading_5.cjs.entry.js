'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b7e2972d.js');

const loadingCss = ".lds-ripple{display:inline-block;position:relative;width:80px;height:80px}.lds-ripple div{position:absolute;border:4px solid #fff;opacity:1;border-radius:50%;-webkit-animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;animation:lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite}.lds-ripple div:nth-child(2){-webkit-animation-delay:-0.5s;animation-delay:-0.5s}@-webkit-keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}@keyframes lds-ripple{0%{top:36px;left:36px;width:0;height:0;opacity:1}100%{top:0px;left:0px;width:72px;height:72px;opacity:0}}";

const Loading = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("div", { class: "lds-ripple" }, index.h("div", null), index.h("div", null)));
    }
};
Loading.style = loadingCss;

const sideDrawerCss = "aside{position:fixed;top:0;left:-100%;width:30rem;max-width:80%;height:100vh;background-color:lightgray;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.25);-webkit-transition:all .25s ease-in-out;transition:all .25s ease-in-out;z-index:100}:host([opened]) aside{left:0}header{padding:1rem;background-color:black}header h1{font-size:1.1rem;color:white;margin:0}header button{position:absolute;padding:10px;top:0;right:0;background-color:white}button{cursor:pointer}#tabs{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;width:100%;margin:1rem 0}#tabs button{width:30%;background-color:white;color:black;text-align:center;border:1px solid black;font:inherit;padding:0.15rem 0}#tabs button.active,#tabs button:active,#tabs button:hover{background-color:black;color:white}button:focus{outline:none}#contact-info{padding:.5rem 1rem}.backdrop{position:fixed;top:0;left:0;width:100%;height:100vh;background-color:rgba(0, 0, 0, 0.35);z-index:10;display:none;opacity:0;pointer-events:none}:host([opened]) .backdrop{display:block;opacity:1;pointer-events:all}";

const SideDrawer = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.showContact = false;
    }
    onHideDrawer() {
        this.opened = false;
    }
    onContentChange(content) {
        this.showContact = content === 'contact';
    }
    async open() {
        this.opened = true;
    }
    render() {
        let mainContent = index.h("slot", null);
        if (this.showContact) {
            mainContent = (index.h("div", { id: "contact-info" }, index.h("h2", null, "Contact information"), index.h("ul", null, index.h("li", null, "Phone: +4012345678"), index.h("li", null, "Email: ", index.h("a", { href: "mailto:ms@me.com" }, "ms@me.com")))));
        }
        return [
            index.h("div", { class: "backdrop", onClick: this.onHideDrawer.bind(this) }),
            index.h("aside", null, index.h("header", null, index.h("h1", null, this.drawerTitle), index.h("button", { onClick: this.onHideDrawer.bind(this) }, "X")), index.h("section", { id: "tabs" }, index.h("button", { class: !this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'navigation') }, "Navigation"), index.h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")), index.h("main", null, mainContent))
        ];
    }
};
SideDrawer.style = sideDrawerCss;

const AV_API_KEY = '459DYKBRAAI5UDJJ';

const stockFinderCss = ":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}form input{color:lightcoral}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}ul{margin:0 .2rem;padding:0}li{list-style:none;border:1px solid black;padding:5px;margin:0;cursor:pointer}li:hover,li:active{background-color:lightcoral;color:var(--color-primary-inverted, whitesmoke)}";

const StockFinder = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placeholder = 'Search for a stock symbol';
        this.symbols = [];
        this.isInputValid = false;
        this.isLoading = false;
        this.errorMessage = null;
        this.smSymbolSelected = index.createEvent(this, "smSymbolSelected", 7);
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.onSearchStockPrice(newValue);
        }
        else {
            this.symbols = null;
        }
    }
    onInputChange(event) {
        this.stockSymbol = event.target.value;
        if (this.stockSymbol.trim().length > 0) {
            this.isInputValid = true;
        }
        else {
            this.isInputValid = false;
            this.symbols = null;
            this.isLoading = false;
        }
    }
    onSearchStockPrice(newValue, event) {
        this.isLoading = true;
        if (event) {
            event.preventDefault();
        }
        if (newValue.trim().length === 0) {
            return;
        }
        fetch(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${newValue.toUpperCase()}&apikey=${AV_API_KEY}`).then(response => response.json())
            .then(parsedResponse => {
            if (parsedResponse && parsedResponse['bestMatches'] && parsedResponse['bestMatches'].length === 0) {
                throw new Error('No result found!');
            }
            else if (parsedResponse && parsedResponse['bestMatches']) {
                this.errorMessage = null;
                this.symbols = parsedResponse['bestMatches'].map((res) => {
                    return {
                        name: res['2. name'],
                        symbol: res['1. symbol']
                    };
                });
            }
            else {
                this.errorMessage = parsedResponse['Note'];
            }
            this.isLoading = false;
        })
            .catch(error => {
            this.errorMessage = null;
            this.errorMessage = error.message;
            this.isLoading = false;
        });
    }
    onSelectSymbol(symbol) {
        this.smSymbolSelected.emit(symbol);
    }
    render() {
        let data;
        if (this.symbols) {
            data = index.h("ul", null, this.symbols.map(res => (index.h("li", { onClick: this.onSelectSymbol.bind(this, res.symbol) }, index.h("strong", null, res.symbol), ": ", res.name))));
        }
        if (this.errorMessage) {
            data = null;
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = index.h("sm-loading", null);
        }
        return [
            index.h("form", null, index.h("input", { ref: el => this.input = el, value: this.stockSymbol, placeholder: this.placeholder, onInput: this.onInputChange.bind(this) })),
            data,
            index.h("p", null, this.errorMessage)
        ];
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
};
StockFinder.style = stockFinderCss;

const stockPriceCss = ":host{font-style:Arial, sans-serif;background-color:var(--color-primary, lightslategray);-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);margin:1rem 0;padding:1rem;display:block;width:30rem;max-width:80%}:host(.error){background-color:tomato}form input{color:var(--color-primary-inverted, lightcoral)}form input:focus,form button:focus{outline:none}form button{color:green;cursor:pointer}form button:hover,form button:active{background-color:yellow}form input,form button{font:inherit;background-color:lemonchiffon;padding:0.2rem;margin:0 .2rem}form button:disabled{background-color:gray;color:royalblue;cursor:not-allowed;border-color:lightgrey}";

const StockPrice = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.placeholder = 'Please enter a symbol to see the price (e.g.: XRX)';
        this.isLoading = false;
        this.isInputValid = false;
    }
    stockSymbolChanged(newValue, oldValue) {
        if (newValue !== oldValue) {
            this.onFetchStockPrice(newValue);
        }
    }
    onInputChange(event) {
        this.stockSymbol = event.target.value;
        if (this.stockSymbol.trim().length > 0) {
            this.isInputValid = true;
        }
        else {
            this.isInputValid = false;
            this.price = null;
        }
    }
    onStockSymbolSelected(event) {
        if (event.detail && event.detail !== this.stockSymbol) {
            this.stockSymbol = event.detail;
            this.isInputValid = true;
        }
    }
    onFetchStockPrice(newValue, event) {
        this.isLoading = true;
        let stockSymbol = newValue ? newValue : this.input.value;
        if (event) {
            event.preventDefault();
        }
        fetch(`https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stockSymbol}&apikey=${AV_API_KEY}`).then(response => response.json())
            .then(parsedResponse => {
            if (parsedResponse['Global Quote'] && !parsedResponse['Global Quote']['05. price']) {
                throw new Error('Invalid symbol entered! Please check it and try again!');
            }
            else if (parsedResponse['Global Quote'] && parsedResponse['Global Quote']['05. price']) {
                this.errorMessage = null;
                this.price = +parsedResponse['Global Quote']['05. price'];
            }
            else {
                this.errorMessage = parsedResponse['Note'];
            }
            this.isLoading = false;
        })
            .catch(error => {
            this.errorMessage = null;
            this.errorMessage = error.message;
            this.isLoading = false;
            this.price = null;
        });
    }
    componentDidLoad() {
        if (this.stockSymbol) {
            this.initialInputValue = this.stockSymbol;
            this.input.value = this.stockSymbol;
            this.isInputValid = true;
            this.onFetchStockPrice();
        }
    }
    hostData() {
        return { class: this.errorMessage ? 'error' : '' };
    }
    __stencil_render() {
        let data = null;
        if (this.errorMessage) {
            this.price = null;
            data = index.h("p", null, this.errorMessage);
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = index.h("sm-loading", null);
        }
        if (this.price) {
            data = index.h("p", null, "Price: $", this.price);
        }
        if (!this.isInputValid) {
            data = index.h("p", null, this.placeholder);
        }
        return [
            // <form onSubmit={this.onFetchStockPrice.bind(this, this.stockSymbol)}>
            index.h("form", null, index.h("input", { ref: el => this.input = el, value: this.stockSymbol, onInput: this.onInputChange.bind(this) })),
            index.h("div", null, data)
        ];
    }
    static get watchers() { return {
        "stockSymbol": ["stockSymbolChanged"]
    }; }
    render() { return index.h(index.Host, this.hostData(), this.__stencil_render()); }
};
StockPrice.style = stockPriceCss;

const toolTipCss = ":host{display:-ms-flexbox;display:flex}.tool-tip-content{font:inherit;position:absolute;margin:-5px 0 0 10px;background-color:black;color:white;border-radius:5px;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);z-index:10;width:5rem}.tool-tip-content::before{content:\"\";position:absolute;top:24%;left:0%;margin-left:-15px;border-width:5px;border-style:solid;border-color:#000 transparent transparent transparent;-webkit-transform:rotate(90deg);transform:rotate(90deg)}section p{display:inline;padding:0 5px}.tool-tip-icon{width:auto;height:auto;border-radius:15%;background-color:cornflowerblue;cursor:pointer;-webkit-box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7);box-shadow:1px 2px 5px rgba(0, 0, 0, 0.7)}";

const ToolTip = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clicked = false;
    }
    onToolTipClicked() {
        this.clicked = !this.clicked;
    }
    render() {
        let toolTipInfo = this.toolTipInfo && this.clicked ? this.toolTipInfo : '';
        return [
            index.h("section", null, index.h("p", null, this.toolTipText), index.h("p", { class: "tool-tip-icon", onClick: this.onToolTipClicked.bind(this) }, "?")),
            index.h("main", null, index.h("div", { class: toolTipInfo ? 'tool-tip-content' : '' }, toolTipInfo))
        ];
    }
};
ToolTip.style = toolTipCss;

exports.sm_loading = Loading;
exports.sm_side_drawer = SideDrawer;
exports.sm_stock_finder = StockFinder;
exports.sm_stock_price = StockPrice;
exports.sm_tool_tip = ToolTip;
