export declare enum ProjectStatus {
    Active = 0,
    Finished = 1
}
export declare class Project {
    id: string;
    title: string;
    description: string;
    people: number;
    status: ProjectStatus;
    constructor(id: string, title: string, description: string, people: number, status: ProjectStatus);
}
