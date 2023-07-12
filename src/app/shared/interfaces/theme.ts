import { IUser } from "./user"

export interface ITheme {
    themeName:{
        type: string,
        required: true
    };
    subscribers:string[];
    userId:IUser;
    posts:string[];
    created_at: string;
    updatedAt: string;
    _v:number;
}