import { User } from "./user";
import { Post } from "./post";


export interface Theme{
    _id:string;
    themeName: string;
    userId:User;
    posts: Post[];
    created_at: string;
    updatedAt: string;
    _v:number;
}
