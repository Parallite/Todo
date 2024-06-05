export type TodoTasks = TodoTask[];

export interface TodoTask {
    id: string;
    text: string;
    completed: boolean;
}

export type Variant = 'All' | 'Completed' | 'Active'