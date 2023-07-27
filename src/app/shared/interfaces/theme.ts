import { User } from "./user";
import { Post } from "./post";
  // title, category, img,time,ingredients,  text, userId

export interface Theme{
    _id:string;
    title: string;
    category: string;
    img: string;
    time: number;
    ingredients: string;
    text: string;
    userId:User;
    posts: Post[];
    created_at: string;
    updatedAt: string;
    _v:number;
}
