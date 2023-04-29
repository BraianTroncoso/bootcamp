export enum Levels{
    "Info",
    "Urgent",
    "Blocking"

}
export interface ITask{
    tittle: string;
    description?: string;
    completed: boolean;
    level: Levels;
}