import { Post } from "./post";
import { Theme } from "./theme";

export interface User{
       email:string;
    username:string;
      password:string;
    themes:Theme[];
    posts: Post[];
     _id: string;
     created_at: string;
    updatedAt: string;
    _v:number;
}