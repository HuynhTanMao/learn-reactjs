import React, { useState } from 'react';
import './style.sass';

function ColorBox(props) {
    const [color, setColor] = useState(() => {
        let defaultColor = 'deeppink';
        if (localStorage.getItem('defaultColor')) {
            defaultColor = localStorage.getItem('defaultColor');
        }
        return defaultColor;
    });

    const handleChangeBgOnClick = () => {
        const argsColor = ['deeppink', 'green', 'yellow', 'black', 'blue'];
        let randomColor = Math.floor(Math.random() * argsColor.length); // random 0 - argsColor.length;
        localStorage.setItem('defaultColor', argsColor[randomColor]);
        setColor(argsColor[randomColor]);
    }

    return (
        <div className='container'>
            <h1>Random background color when click Box</h1>
            <div class="desc">
                <ol>
                    <li>Khi click lên box, đổi màu bg ngẫu nhiêu thành 1 màu trong các mảng ['deeppink', 'green', 'yellow', 'black', 'blue']</li>
                    <li>Giữ màu của background khi click lên box sau khi reload trình duyệt</li>
                </ol>
            </div>
            <div
                className='color-box'
                style={{ backgroundColor: color }}
                onClick={handleChangeBgOnClick}
            >
            </div>
            <div className='analysis'>
                <h2>Phân tích</h2>
                <div>
                    <u>Câu 1:</u>
                    <ul>
                        <li>Prop: N/A</li>
                        <li>State: color</li>
                        <li>Render: div.color-box width background = color</li>
                        <li>Hand Click: đổi màu background trong danh sách cho trước</li>
                    </ul>
                </div>
                <div>
                    <u>Câu 2:</u>
                    <ul>
                        <li>Mỗi đổi lưu lại vào trong localStorage</li>
                        <li>set initialState của color là giá trị từ localStorage</li>
                        <li>Sử dụng callback initialState để chỉ thực hiện 1 lần</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ColorBox;