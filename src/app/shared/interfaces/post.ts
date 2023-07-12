import { ITheme } from "./theme";
import { IUser } from "./user";

export interface IPost {
    title: string;
    ingredients: string;
    time:string,
    img:string; 
    text: string;
    likes: string[];
    _id: string;
    userId:IUser;
    themeId: ITheme;
    
    created_at: string;
    updatedAt: string;
    _v:number;
}