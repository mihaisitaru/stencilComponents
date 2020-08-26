import { Component, h, Prop, State, Method } from '@stencil/core';
export class SideDrawer {
    constructor() {
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
        let mainContent = h("slot", null);
        if (this.showContact) {
            mainContent = (h("div", { id: "contact-info" },
                h("h2", null, "Contact information"),
                h("ul", null,
                    h("li", null, "Phone: +4012345678"),
                    h("li", null,
                        "Email: ",
                        h("a", { href: "mailto:ms@me.com" }, "ms@me.com")))));
        }
        return [
            h("div", { class: "backdrop", onClick: this.onHideDrawer.bind(this) }),
            h("aside", null,
                h("header", null,
                    h("h1", null, this.drawerTitle),
                    h("button", { onClick: this.onHideDrawer.bind(this) }, "X")),
                h("section", { id: "tabs" },
                    h("button", { class: !this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'navigation') }, "Navigation"),
                    h("button", { class: this.showContact ? 'active' : '', onClick: this.onContentChange.bind(this, 'contact') }, "Contact")),
                h("main", null, mainContent))
        ];
    }
    static get is() { return "sm-side-drawer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./side-drawer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["side-drawer.css"]
    }; }
    static get properties() { return {
        "drawerTitle": {
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
            "attribute": "drawer-title",
            "reflect": false
        },
        "opened": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "opened",
            "reflect": true
        }
    }; }
    static get states() { return {
        "showContact": {}
    }; }
    static get methods() { return {
        "open": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
}
