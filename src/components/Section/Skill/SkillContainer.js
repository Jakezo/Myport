import React, { Component } from 'react';
import SkillPresenter from './SkillPresenter';
import HTMLIMG from 'assets/skill/html5.png';
import CSSIMG from 'assets/skill/css3.png';
import JSIMG from 'assets/skill/javascript.png';
import JQIMG from 'assets/skill/jquery.png';
import REACTIMG from 'assets/skill/react.png';
import VUEIMG from 'assets/skill/vue.png';
import NODEIMG from 'assets/skill/node.png';
import MONGOIMG from 'assets/skill/mongodb.png';
import GITIMG from 'assets/skill/git.png';

class SkillContainer extends Component {
    state = {
        data: [
            {
                skill: "HTML5",
                img: HTMLIMG,
                lv: 3,
                txt: "프론트엔드의 기본, 웹표준과 HTML태그에 대해 학습하였습니다."
            },
            {
                skill: "CSS3",
                img: CSSIMG,
                lv: 3,
                txt: "프론트엔드의 기본2, 웹페이지의 스타일링과 반응형 레이아웃을 학습하였습니다."
            },
            {
                skill: "JavaScript",
                img: JSIMG,
                lv: 3,
                txt: "프론트엔드의 기본3, 클로저와 this 등의 JavaScript의 특성과 ES6를 학습하였습니다."
            },
            {
                skill: "Jquery",
                img: JQIMG,
                lv: 1,
                txt: "선택자와 ajax, 트래버싱 등을 학습하였습니다."
            },
            {
                skill: "React.js",
                img: REACTIMG,
                lv: 2,
                txt: "Virtual DOM, State와 Props, 라이프사이클, Router 등을 학습하여 웹페이지를 구현할 수 있습니다."
            },
            {
                skill: "Vue.js",
                img: VUEIMG,
                lv: 2,
                txt: "data, methods, 등의 Vue의 기본과 상태관리인 Vuex를 학습하여 웹페이지를 구현할 수 있습니다. "
            },
            {
                skill: "Node.js",
                img: NODEIMG,
                lv: 2,
                txt: "Node.js를 통한 백엔드 구성 방법과, 프레임워크인 Express를 학습하여 간단한 API서버를 만들 수 있습니다."
            },
            {
                skill: "MongoDB",
                img: MONGOIMG,
                lv: 2,
                txt: "NoSQL DBMS와, Node.js 연동을 위한 Mongoose를 학습하였습니다. "
            }, {
                skill: "Git",
                img: GITIMG,
                lv: 2,
                txt: "Git의 기본 명령어를 학습하고 현재 활용하고 있습니다."
            },
        ],
        slideCounter: 0
    }

    increaseCounter = () => {
        const { slideCounter, data } = this.state;
        slideCounter === data.length - 1 ?
            this.setState({
                slideCounter: 0,
            }) :
            this.setState({
                slideCounter: slideCounter + 1,
            })
    }

    decreaseCounter = () => {
        const { slideCounter, data } = this.state;
        slideCounter === 0 ?
            this.setState({
                slideCounter: data.length - 1
            }) :
            this.setState({
                slideCounter: slideCounter - 1,
            })
    }

    render() {
        const { data, slideCounter } = this.state;
        return (
            <SkillPresenter
                data={data}
                slideCounter={slideCounter}
                increaseCounter={this.increaseCounter}
                decreaseCounter={this.decreaseCounter}
            />
        )
    }
}

export default SkillContainer;