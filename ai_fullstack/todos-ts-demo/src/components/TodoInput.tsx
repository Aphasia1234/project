// FC(FunctionComponent) 约束组件 必须返回一个jsx组件元素
// import type {
//     FC
// } from 'react';
// import { useState } from 'react';
import * as React from 'react'; // esm 导入react模块

interface Props {
    onAdd: (title: string) => void;
}

const TodoInput: React.FC<Props> = ({ onAdd }) => {
    const [value, setValue] = React.useState<string>('');
    const handleAdd = () => {
        if (!value.trim()) return;// 去除首尾空格后若为空，直接返回
        onAdd(value); // 调用父组件传递的回调函数
        setValue(''); // 清空输入框
    }
    return (
        <div>
            <input
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button onClick={handleAdd}>添加</button>
        </div>
    )
}

export default TodoInput;