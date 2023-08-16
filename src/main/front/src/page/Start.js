import { useState } from "react";
import "../css/Start.css";
import logo from "../img/logo.png";
import axios from "axios";


function Start() {
    const [id, setId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleIdChange = (event) => {
        setId(event.target.value);
        console.log(id);
    };

    const GotoMain = () => {
        axios({
            method: "POST",
            url: "/login",
            params: {
                id: id,
            },
            headers: {
                "Content-Type": "application/json",// 필요한 헤더 추가
            }


        }).then((result) => {
            if(GotoMain.status = 200)
                window.location.href = "/main";

        })
            .catch((error) => {
                console.log("Error:", error);

            });
    };

    return (
        <div>
            <div className="bg_box">
                <div className="sm_box">
                    <div className="box_img">
                        <img className="box_img_src" src={logo} alt="logo" />
                    </div>
                    <div className="box_text">기업 인증하기</div>
                    <div>
                        <form>
                            <input
                                className="box_input"
                                type="text"
                                placeholder="사업자 번호 입력"
                                value={id}
                                onChange={handleIdChange}
                            />
                            <br></br>
                            <button className="btn" type="button" onClick={GotoMain}>
                                시작
                            </button>

                        </form>
                        {errorMessage && <p>{errorMessage}</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;