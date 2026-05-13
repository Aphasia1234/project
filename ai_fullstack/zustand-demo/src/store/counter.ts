import { create } from 'zustand'
import { persist } from 'zustand/middleware';//持久化中间件

// 重要的数据状态
interface CounterState {
    count: number;
    increment: () => void;
    decrement: () => void;
    reset: () => void;
}


// 状态存储的规矩和修改方式
export const useCounterStore = create<CounterState>()(
    persist(
    (set, get) => ({
    // 列出状态
    //n:1,类型兼容性规则：
    // 只要对象包含所有必需属性（count, increment, decrement, reset），
    // 就算有额外属性（n）也是允许的。
    count: 0,
    // 状态怎么修改
    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),
}),{
    name:'counter',
}
))