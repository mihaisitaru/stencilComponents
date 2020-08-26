import { Component, h } from "@stencil/core";
export class Loading {
    render() {
        return (h("div", { class: "lds-ripple" },
            h("div", null),
            h("div", null)));
    }
    static get is() { return "sm-loading"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./loading.css"]
    }; }
    static get styleUrls() { return {
        "$": ["loading.css"]
    }; }
}
