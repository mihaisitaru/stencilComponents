import { Component, h, Prop, State } from '@stencil/core';
export class ToolTip {
    constructor() {
        this.clicked = false;
    }
    onToolTipClicked() {
        this.clicked = !this.clicked;
    }
    render() {
        let toolTipInfo = this.toolTipInfo && this.clicked ? this.toolTipInfo : '';
        return [
            h("section", null,
                h("p", null, this.toolTipText),
                h("p", { class: "tool-tip-icon", onClick: this.onToolTipClicked.bind(this) }, "?")),
            h("main", null,
                h("div", { class: toolTipInfo ? 'tool-tip-content' : '' }, toolTipInfo))
        ];
    }
    static get is() { return "sm-tool-tip"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./tool-tip.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tool-tip.css"]
    }; }
    static get properties() { return {
        "toolTipText": {
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
            "attribute": "tool-tip-text",
            "reflect": false
        },
        "toolTipInfo": {
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
            "attribute": "tool-tip-info",
            "reflect": false
        }
    }; }
    static get states() { return {
        "clicked": {}
    }; }
}
