export interface IMenuItem {
    moduleId?: number,
    text: string, 
    icon?: any,
    navigateTo?: string,
    children?: IMenuItem[],
    index?: boolean
}