import { useState } from "react";
import "../css/Search.css";
import axios from "axios";


function Search() {
    const [s1, setS1] = useState('');
    const [s2, setS2] = useState('');
    const [s3, setS3] = useState('');
    const [s4, setS4] = useState('');
    const [data, setData] = useState([]); // 데이터를 저장하는 변수 추가
    // 선택한 값에 따른 설명 정보

    // 백엔드에서 데이터를 가져오는 GET 요청을 보내는 함수
    const fetchData = () => {
        const subcategoryIds = [1, 2, 3, 4];

        axios({
            method: "GET",
            url: "/postData",
            params: {
                s1: subcategoryIds[0],
                s2: subcategoryIds[1],
                s3: subcategoryIds[2],
                s4: subcategoryIds[3]
            },
            headers: {
                "Content-Type": "application/json",// 필요한 헤더 추가
            }

        })
            .then((response) => {
                const fomData = response.data.map(item => item['CONCAT(p.url, \' - \', p.item, \' - \', p.company, \' - \', p.color, \' - \', p.likenum)']);
                setData(fomData);
            })
            .catch((error) => {
                console.log('Error:', error);
            });
    };

    const handleS1 = (event) => {
        setS1(event.target.value);
        const selectedIndex = event.target.selectedIndex;
        const selectedKey = event.target.options[selectedIndex].getAttribute("key");
        console.log('Selected Category Key:', selectedKey);
    };

    const handleS2 = (event) => {
        setS2(event.target.value);
        fetchData();
        const selectedIndex = event.target.selectedIndex;
        const selectedKey = event.target.options[selectedIndex].getAttribute("key");
        console.log('Selected Color Key:', selectedKey);
    };

    const handleS3 = (event) => {
        setS3(event.target.value);
        const selectedIndex = event.target.selectedIndex;
        const selectedKey = event.target.options[selectedIndex].getAttribute("key");
        console.log('Selected Item Key:', selectedKey);
    };

    const handleS4 = (event) => {
        setS4(event.target.value);
        const selectedIndex = event.target.selectedIndex;
        const selectedKey = event.target.options[selectedIndex].getAttribute("key");
        console.log('Selected Item Key:', selectedKey);
    };

    return (
        <div className='big'>
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
                    <a className="user">기업 분석</a>
                    <select className="choice" onChange={handleS1}>
                        <option className="dksdj-1">기업</option>
                        <option className="dksdj-1" key={6} value={'빙그레'}>빙그레</option>
                        <option className="dksdj-1" key={7} value={"진로"}>진로</option>
                        <option className="dksdj-1" key={8} value={'읏맨'}>읏맨</option>
                        <option className="dksdj-1" key={9} value={'이니스프리'}>이니스프리</option>
                        <option className="dksdj-1" key={10} value={'다노'}>다노</option>
                        <option className="dksdj-1" key={11} value={'나이키'}>나이키</option>
                        <option className="dksdj-1" key={12} value={'애플'}>애플</option>
                        <option className="dksdj-1" key={29} value={'에르메스'}>에르메스</option>
                        <option className="dksdj-1" key={30} value={'오늘의 집'}>오늘의 집</option>
                        <option className="dksdj-1" key={13} value={'비공개'}>비공개</option>
                    </select>
                    <select className="choice" onChange={handleS2}>
                        <option className="tor-1">색</option>
                        <option className="tor-1" key={22} value={'red'}> red</option>
                        <option className="tor-1" key={23} value={'orange'}>orange</option>
                        <option className="tor-1" key={24} value={'yellow'}>yellow</option>
                        <option className="tor-1" key={25} value={'green'}> green</option>
                        <option className="tor-1" key={26} value={'blue'}>blue</option>
                        <option className="tor-1" key={27} value={'indigo'}>indigo</option>
                        <option className="tor-1" key={28} value={'purple'}>purple</option>
                    </select>
                    <select className="choice" onChange={handleS3}>
                        <option className="dkdlxpa-1" >아이템</option>
                        <option className="dkdlxpa-1" key={1} value={'세계관'}>세계관</option>
                        <option className="dkdlxpa-1" key={2} value={"캐릭터"}>캐릭터</option>
                        <option className="dkdlxpa-1" key={3} value={"컬러이미지"}>컬러이미지</option>
                        <option className="dkdlxpa-1" key={4} value={"콘텐츠"}>콘텐츠</option>
                        <option className="dkdlxpa-1" key={5} value={"메세지"}>메세지</option>
                    </select>
                    <select className="choice" onChange={handleS4}>
                        <option className="dkdlxpa-1">좋아요 수</option>
                        <option className="dkdlxpa-1" key={14} value={"2천 미만"}>2천 미만</option>
                        <option className="dkdlxpa-1" key={15} value={"2천 이상"}>2천 이상</option>
                        <option className="dkdlxpa-1" key={16} value={"8천 이상"}>8천 이상</option>
                        <option className="dkdlxpa-1" key={17} value={"2만 이상"}>2만 이상</option>
                        <option className="dkdlxpa-1" key={18} value={"6만 이상"}>6만 이상</option>
                        <option className="dkdlxpa-1" key={19} value={"9만 이상"}>9만 이상</option>
                        <option className="dkdlxpa-1" key={20} value={"15만 이상"}>15만 이상</option>
                        <option className="dkdlxpa-1" key={21} value={"50만 이상"}>50만 이상</option>
                    </select>
                </div>
                <div className="tag">
                    <a  className="tagline">
                        {s1}
                    </a>
                    <a  className="tagline">
                        {s2}
                    </a>
                    <a  className="tagline">
                        {s3}
                    </a>
                    <a  className="tagline">
                        {s4}
                    </a>
                </div>

            </section>
            <div className='maintop'>
                <main className="mainfirst">
                    <div className="mainpage">
                        <h3 className="kakao">{s1}</h3> {/* data에 url 속성이 없으므로 수정이 필요함 */}
                        <div>
                            {data.map((item, index) => (
                                <div key={index}>
                                    <img src={item.url} alt={item.company} /> {/* 수정된 부분 */}
                                    {item.item} - {item.company} - {item.color} - {item.likenum}
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className="table">
                        <table>
                            <tbody>
                            <tr>
                                <td>기업 : {s1} </td>
                            </tr>
                            <tr>
                                <td>색 : {s2} </td>
                            </tr>
                            <tr>
                                <td>아이템: {s3} </td>
                            </tr>
                            <tr>
                                <td>좋아요 수  : {s4}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        {data.map((item, index) => (
                            <div key={index}>
                                {item.url} - {item.item} - {item.company} - {item.color} - {item.likenum}
                            </div>
                        ))}
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Search;
