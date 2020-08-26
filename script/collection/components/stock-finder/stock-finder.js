import { Component, h, State, Watch, Prop, Event } from "@stencil/core";
import { AV_API_KEY } from "../../global/global";
export class StockFinder {
    constructor() {
        this.placeholder = 'Search for a stock symbol';
        this.symbols = [];
        this.isInputValid = false;
        this.isLoading = false;
        this.errorMessage = null;
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
            data = h("ul", null, this.symbols.map(res => (h("li", { onClick: this.onSelectSymbol.bind(this, res.symbol) },
                h("strong", null, res.symbol),
                ": ",
                res.name))));
        }
        if (this.errorMessage) {
            data = null;
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = h("sm-loading", null);
        }
        return [
            h("form", null,
                h("input", { ref: el => this.input = el, value: this.stockSymbol, placeholder: this.placeholder, onInput: this.onInputChange.bind(this) })),
            data,
            h("p", null, this.errorMessage)
        ];
    }
    static get is() { return "sm-stock-finder"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./stock-finder.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stock-finder.css"]
    }; }
    static get properties() { return {
        "stockSymbol": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "stock-symbol",
            "reflect": false
        }
    }; }
    static get states() { return {
        "symbols": {},
        "isInputValid": {},
        "isLoading": {},
        "errorMessage": {}
    }; }
    static get events() { return [{
            "method": "smSymbolSelected",
            "name": "smSymbolSelected",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            }
        }]; }
    static get watchers() { return [{
            "propName": "stockSymbol",
            "methodName": "stockSymbolChanged"
        }]; }
}
