import { Theme } from "./theme";
import { Post } from "./post";
export interface User{
    themes:Theme[];
    posts: Post[];
    _id: string;
    email:string;
    username:string;
    password:string;
    created_at: string;
    updatedAt: string;
    _v:number;
}