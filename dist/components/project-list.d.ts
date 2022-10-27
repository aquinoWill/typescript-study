import { Component } from "./base.js";
import { DragTarget } from "../models/drag-drop.js";
import { Project } from '../models/project.js';
export declare class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
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
