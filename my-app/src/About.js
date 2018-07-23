import React from 'react';
import { BrowserRouter as Router, Route,  Link } from 'react-router-dom'
import "./css/about.css"


class About extends React.Component{
    render(){

        return(
            <div>
                <Link to="/">备忘录</Link>
                <div>
                    <h3 >自我介绍</h3>
                    <p>我是来自xxx的应届毕业生，大家所看到的我的内在就像我的外表一样，敦厚和实在是我对自己最好的概括。我不飘，不浮，不躁，不懒。我内心充实，物质享乐和精神刺激都不是我的嗜好。我待人诚实，从没有花言巧语，但真诚和厚道使我总能赢得朋友的信赖。我专业扎实，看书是我最大的享受，钻研电脑让我感觉其乐无穷。我做事踏实，再小的事情我也要一丝不苟地完成。</p>
                </div>
                <div>
                    <h3 >兴趣爱好</h3>
                    <p>性别男, 爱好女。最大的缺点是太实诚，总爱习惯性给公司免费加班</p>
                </div>
                <div>
                    <h3 >工作履历</h3>
                    <p>走过男闯过北, 火车道上压过腿; 养过狼放过虎, 少林寺里练过武</p>
                </div>
            </div>
        )
    }
}

export  default About