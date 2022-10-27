import { Component } from "./base.js";
export declare class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;
    constructor();
    configure(): void;
    renderContent(): void;
    private gatherUserInput;
    private clearInputs;
    private submitHandler;
}
