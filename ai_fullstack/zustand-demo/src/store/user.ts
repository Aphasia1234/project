import { create } from 'zustand'
import { persist } from 'zustand/middleware';//持久化中间件
import type { User } from '../types';

interface UserState {
    isLoggin:boolean;
    login:(user:{username:string,password:string})=>void;
    logout:()=>void;
    user: User | null;
}

export const useUserStore = create<UserState>()(
    persist(
        (set) => ({
            isLoggin:false,
            login:(user)=>set({isLoggin:true,user}),
            logout:()=>set({isLoggin:false,user:null}),
            user:null,
        }),{
            name:'user',
        }
    ))