declare module "components/base" {
    export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
        templateElement: HTMLTemplateElement;
        hostElement: T;
        element: U;
        constructor(templateId: string, hostElementId: string, insertAtStart: boolean, newElementId?: string);
        private attach;
        abstract configure(): void;
        abstract renderContent(): void;
    }
}
declare module "models/project" {
    export enum ProjectStatus {
        Active = 0,
        Finished = 1
    }
    export class Project {
        id: string;
        title: string;
        description: string;
        people: number;
        status: ProjectStatus;
        constructor(id: string, title: string, description: string, people: number, status: ProjectStatus);
    }
}
declare module "state/project" {
    import { Project, ProjectStatus } from "models/project";
    type Listener<T> = (items: T[]) => void;
    class State<T> {
        protected listeners: Listener<T>[];
        addListener(listenerFn: Listener<T>): void;
    }
    export class ProjectState extends State<Project> {
        private projects;
        private static instance;
        private constructor();
        static getInstance(): ProjectState;
        addProject(title: string, description: string, numOfPeople: number): void;
        moveProject(projectId: string, newStatus: ProjectStatus): void;
        private updateListeners;
    }
    export const projectState: ProjectState;
}
declare module "models/drag-drop" {
    export interface Draggable {
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(event: DragEvent): void;
    }
    export interface DragTarget {
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
    }
}
declare module "decorators/autobind" {
    export function autoBind(target: any, methodName: string, descriptor: PropertyDescriptor): PropertyDescriptor;
}
declare module "components/project-itens" {
    import { Project } from "models/project";
    import { Draggable } from "models/drag-drop";
    import { Component } from "components/base";
    export class ProjectItem extends Component<HTMLDListElement, HTMLElement> implements Draggable {
        private project;
        get persons(): string;
        constructor(hostId: string, project: Project);
        dragStartHandler(event: DragEvent): void;
        dragEndHandler(_: any): void;
        configure(): void;
        renderContent(): void;
    }
}
declare module "components/project-list" {
    import { Component } from "components/base";
    import { DragTarget } from "models/drag-drop";
    import { Project } from "models/project";
    export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
        private type;
        assignedProjects: Project[];
        constructor(type: 'active' | 'finished');
        dragOverHandler(event: DragEvent): void;
        dropHandler(event: DragEvent): void;
        dragLeaveHandler(event: DragEvent): void;
        configure(): void;
        renderContent(): void;
        private renderProjects;
    }
}
declare module "utils/validations" {
    export interface Validatable {
        value: string | number;
        required?: boolean;
        minLenght?: number;
        maxLenght?: number;
        min?: number;
        max?: number;
    }
    export function validate(validatableInput: Validatable): boolean;
}
declare module "components/project-input" {
    import { Component } from "components/base";
    export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
}
declare module "app" { }
