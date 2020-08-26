import { Component, h, State, Prop, Watch, Listen } from "@stencil/core";
import { AV_API_KEY } from '../../global/global';
export class StockPrice {
    constructor() {
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
    render() {
        let data = null;
        if (this.errorMessage) {
            this.price = null;
            data = h("p", null, this.errorMessage);
            this.isLoading = false;
        }
        if (this.isLoading) {
            data = h("sm-loading", null);
        }
        if (this.price) {
            data = h("p", null,
                "Price: $",
                this.price);
        }
        if (!this.isInputValid) {
            data = h("p", null, this.placeholder);
        }
        return [
            // <form onSubmit={this.onFetchStockPrice.bind(this, this.stockSymbol)}>
            h("form", null,
                h("input", { ref: el => this.input = el, value: this.stockSymbol, onInput: this.onInputChange.bind(this) })),
            h("div", null, data)
        ];
    }
    static get is() { return "sm-stock-price"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["stock-price.css"]
    }; }
    static get styleUrls() { return {
        "$": ["stock-price.css"]
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
        "isLoading": {},
        "price": {},
        "isInputValid": {},
        "errorMessage": {}
    }; }
    static get watchers() { return [{
            "propName": "stockSymbol",
            "methodName": "stockSymbolChanged"
        }]; }
    static get listeners() { return [{
            "name": "smSymbolSelected",
            "method": "onStockSymbolSelected",
            "target": "body",
            "capture": false,
            "passive": false
        }]; }
}
