export interface TaskFormInterface {
    configs: {
        datatestID: string
    }
    data: {
        taskData: any
        isEditForm: boolean
        baseData: any
    }
    callbacks: {
        handleCreate: Function
        handleEdit: Function
        handleClose: Function
    }
}