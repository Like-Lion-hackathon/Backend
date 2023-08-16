import kakao from '../img/kakao.png';
import '../css/Search.css'
import axios from 'axios';
import { useState} from 'react';



function Search () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/postData", {
                username: username,
                password: password
            });

            setResponseMessage(`Response: ${response.data}`);
        } catch (error) {
            setResponseMessage(`Error: ${error.message}`);
        }
    };
    return (
        <div className='big'>
            <div>
                <header>
                    <div className="first">
                        <h1 className="title">Trust#</h1>
                    </div>
                    <div className="second">
                        <div className="title2">사용자 분석</div>
                    </div>
                </header>
                <section>
                    <div className="menu">
                        <a href="/" className="user">기업 분석</a>
                        <select className="choice">
                            <option className="dksdj-1">기업</option>
                            <option className="dksdj-1">#내돈내산</option>
                            <option className="dksdj-1">#내돈내산</option>
                            <option className="dksdj-1">#단어</option>
                        </select>
                        <select className="choice">
                            <option className="tor-1">색</option>
                            <option className="tor-1">빨강</option>
                            <option className="tor-1">주황</option>
                            <option className="tor-1">노랑</option>
                            <option className="tor-1">초록</option>
                            <option className="tor-1">파랑</option>
                            <option className="tor-1">검정</option>
                        </select>
                        <select className="choice">
                            <option className="dkdlxpa-1">아이템</option>
                            <option className="dkdlxpa-1">메세지 전달형</option>
                            <option className="dkdlxpa-1">캐릭터 활용형</option>
                            <option className="dkdlxpa-1">세계관 생성형</option>
                        </select>
                    </div>
                    <div className="tag">
                        <a href="/" className="tagline">삼성전자</a>
                        <a href="/" className="tagline">#red</a>
                        <a href="/" className="tagline">#캐릭터</a>
                    </div>
                </section>
                <div className="line">
                </div>
                <div className='maintop'>
                    <main className="mainfirst">
                        <div className="mainpage">
                            <h3 className="kakao">KAKAO</h3>
                            <img src={kakao}/>
                        </div>
                        <div>
                            <table>
                                <tbody><tr>
                                    <td>#단어 : #귀여워</td>
                                </tr>
                                <tr>
                                    <td>아이템 : 인물</td>
                                </tr>
                                <tr>
                                    <td>색 : 푸른색</td>
                                </tr>
                                <tr>
                                    <td>설명 : </td>
                                </tr>
                                </tbody></table>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    );
};

export default Search;