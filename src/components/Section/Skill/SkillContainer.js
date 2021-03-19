import React, { Component } from 'react';
import SkillPresenter from './SkillPresenter';
import HTMLIMG from 'assets/skill/html5.png';
import CSSIMG from 'assets/skill/css3.png';
import JSIMG from 'assets/skill/javascript.png';
import JQIMG from 'assets/skill/jquery.png';
import REACTIMG from 'assets/skill/react.png';
import NODEIMG from 'assets/skill/node.png';
import GITIMG from 'assets/skill/git.png';
import SIMG from 'assets/skill/spring.png';
import OIMG from 'assets/skill/oracleimg.png';
import JIMG from 'assets/skill/javaimg.png';

class SkillContainer extends Component {
    state = {
        data: [
            {
                skill: "JAVA",
                img: JIMG,
                lv: 2,
                txt: "백엔드의 기본, 자바에 대해 학습하였습니다."
            },
            {
                skill: "SPRING",
                img: SIMG,
                lv: 3,
                txt: "스프링을 통해 지금까지 배운 전반적인 내용을 이용하여 최종 프로젝트를 만들었습니다."
            },
            {
                skill: "JavaScript",
                img: JSIMG,
                lv: 2,
                txt: "프로젝트를 만들때 javascript 를 활용하여 페이지를 구성해 보았습니다."
            },
            {
                skill: "Jquery",
                img: JQIMG,
                lv: 1,
                txt: "ajax를 프로젝트에 활용해 보았고 제이쿼리를 통해 자바스크립트를 쉽게 활용할수 있도록 학습하였습니다."
            },
            {
                skill: "CSS3",
                img: CSSIMG,
                lv: 3,
                txt: "기본적인 페이지를 꾸미는 css를 학습하였습니다."
            },
            {
                skill: "HTML5",
                img: HTMLIMG,
                lv: 2,
                txt: "프론트앤드의 기본 HTML5에 대하여 학습하였습니다. "
            },
            {
                skill: "Node.js",
                img: NODEIMG,
                lv: 1,
                txt: "Node.js를 통해 Github Page를 만들어 보았고 React 의 기초적인 부분을 학습해 보았습니다."
            },
            {
                skill: "ORACLE",
                img: OIMG,
                lv: 2,
                txt: "기본 적인 데이터베이스의 구조에 대하여 학습하고 스프링 프로젝트에 활용하였습니다. "
            }, {
                skill: "Git",
                img: GITIMG,
                lv: 1,
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