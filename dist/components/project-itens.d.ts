import { Project } from '../models/project.js';
import { Draggable } from '../models/drag-drop.js';
import { Component } from '../components/base.js';
export declare class ProjectItem extends Component<HTMLDListElement, HTMLElement> implements Draggable {
    private project;
    get persons(): string;
    constructor(hostId: string, project: Project);
    dragStartHandler(event: DragEvent): void;
    dragEndHandler(_: any): void;
    configure(): void;
    renderContent(): void;
}
