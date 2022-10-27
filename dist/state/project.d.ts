import { Project, ProjectStatus } from '../models/project.js';
declare type Listener<T> = (items: T[]) => void;
declare class State<T> {
    protected listeners: Listener<T>[];
    addListener(listenerFn: Listener<T>): void;
}
export declare class ProjectState extends State<Project> {
    private projects;
    private static instance;
    private constructor();
    static getInstance(): ProjectState;
    addProject(title: string, description: string, numOfPeople: number): void;
    moveProject(projectId: string, newStatus: ProjectStatus): void;
    private updateListeners;
}
export declare const projectState: ProjectState;
export {};
