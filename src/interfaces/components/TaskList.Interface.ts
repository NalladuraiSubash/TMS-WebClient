export interface TaskListInterface {
    configs: {
        dataTestID: string
    }
    data: {
        TaskListData: Array<any>
        baseSetup: any
    }
    callbacks: {
        handleTaskEdit: Function
        handleTaskDelete: Function
    }
}