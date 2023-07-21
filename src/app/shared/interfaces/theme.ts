import { User } from "./user";
import { Post } from "./post";


export interface Theme{
    themeName: string;
    subscribers:User[];
    userId:User;
    posts: Post[];
    created_at: string;
    updatedAt: string;
    _v:number;
}