'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b7e2972d.js');

const defineCustomElements = (win, options) => index.patchEsm().then(() => {
  return index.bootstrapLazy([["sm-loading_5.cjs",[[1,"sm-stock-finder",{"stockSymbol":[1,"stock-symbol"],"symbols":[32],"isInputValid":[32],"isLoading":[32],"errorMessage":[32]}],[1,"sm-stock-price",{"stockSymbol":[1,"stock-symbol"],"isLoading":[32],"price":[32],"isInputValid":[32],"errorMessage":[32]},[[32,"smSymbolSelected","onStockSymbolSelected"]]],[1,"sm-side-drawer",{"drawerTitle":[1,"drawer-title"],"opened":[1540],"showContact":[32],"open":[64]}],[1,"sm-tool-tip",{"toolTipText":[1,"tool-tip-text"],"toolTipInfo":[1,"tool-tip-info"],"clicked":[32]}],[1,"sm-loading"]]]], options);
});

exports.defineCustomElements = defineCustomElements;
