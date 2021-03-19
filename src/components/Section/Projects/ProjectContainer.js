import React, { Component } from 'react';
import ProjectPresenter from './ProjectPresenter';
import CIMG from 'assets/shopmall.png';
import PIMG from 'assets/portfolio.png';

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: "Shopping mall site",
                url: "http://ching21.cafe24.com",
                git: "https://github.com/Jakezo/springproject",
                txt: "스프링 쇼핑몰 사이트",
                pdf: "https://drive.google.com/file/d/1TxhQ2ECkhf-Ugn23CKCCnadSS9ViUhxQ/view",
                img: CIMG
            },
            {
                id: "Portfolio",
                git: "https://github.com/Jakezo/myport",
                txt: "React로 만든 포트폴리오",
                img: PIMG
            }
        ]
    }

    render() {
        const { data } = this.state;
        return (
            <ProjectPresenter data={data} />
        )
    }
}

export default ProjectContainer;

