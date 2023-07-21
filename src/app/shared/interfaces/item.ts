import { IUser } from "./user";

export interface IItem {
    title: string;
    ingredients: string;
    time:string,
    img:string; 
    description: string;
    
    userId:IUser;
  
}