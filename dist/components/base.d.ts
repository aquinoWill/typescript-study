export declare abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;
    constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string);
    private attach;
    abstract configure(): void;
    abstract renderContent(): void;
}
