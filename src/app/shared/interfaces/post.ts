import { User } from "./user";
import { Theme } from "./theme";

export interface Post {
    title: string;
    ingredients: string;
    time:string,
    img:string;    
    text: string;
    likes: User[];
    userId: User;
    themeId: Theme;
    created_at: string;
    updatedAt: string;
    _v:number;
}