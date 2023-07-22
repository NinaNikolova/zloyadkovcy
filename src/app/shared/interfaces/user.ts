import { Theme } from "./theme";
import { Post } from "./post";
export interface User{
       email:string;
    username:string;
    tel:string;
    password:string;
    // themes:Theme[];
    // posts: Post[];
    _id: string;
 
    created_at: string;
    updatedAt: string;
    _v:number;
}