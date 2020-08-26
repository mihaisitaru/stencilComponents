export declare class SideDrawer {
    drawerTitle: string;
    opened: boolean;
    showContact: boolean;
    onHideDrawer(): void;
    onContentChange(content: string): void;
    open(): Promise<void>;
    render(): any[];
}
