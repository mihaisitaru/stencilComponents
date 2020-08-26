import { EventEmitter } from "../../stencil-public-runtime";
export declare class StockFinder {
    input: HTMLInputElement;
    placeholder: string;
    symbols: {
        symbol: string;
        name: string;
    }[];
    stockSymbol: string;
    isInputValid: boolean;
    isLoading: boolean;
    errorMessage: string;
    smSymbolSelected: EventEmitter<string>;
    stockSymbolChanged(newValue: string, oldValue: string): void;
    onInputChange(event: Event): void;
    onSearchStockPrice(newValue?: string, event?: Event): void;
    onSelectSymbol(symbol: string): void;
    render(): any[];
}
