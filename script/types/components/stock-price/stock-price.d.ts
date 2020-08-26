export declare class StockPrice {
    input: HTMLInputElement;
    initialInputValue: string;
    placeholder: string;
    isLoading: boolean;
    price: number;
    isInputValid: boolean;
    errorMessage: string;
    stockSymbol: string;
    stockSymbolChanged(newValue: string, oldValue: string): void;
    onInputChange(event: Event): void;
    onStockSymbolSelected(event: CustomEvent): void;
    onFetchStockPrice(newValue?: string, event?: Event): void;
    componentDidLoad(): void;
    hostData(): {
        class: string;
    };
    render(): any[];
}
