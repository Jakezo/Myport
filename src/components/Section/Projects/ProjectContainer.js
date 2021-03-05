import React, { Component } from 'react';
import ProjectPresenter from './ProjectPresenter';
import CIMG from 'assets/mev.png';
import PIMG from 'assets/portfolio.png';

class ProjectContainer extends Component {
    state = {
        data: [
            {
                id: "모던 커뮤니티웹",
                url: "http://윤원영.kr",
                git: "https://github.com/WonYoungYun/vue-community",
                txt: "MongoDB-Express-Vue로 만든 게시판",
                pdf: "https://drive.google.com/file/d/1kGqXQgd6TCQ2KvDVSa8ALrozN4T21FGH/view",
                img: CIMG
            },
            {
                id: "포트폴리오",
                git: "https://github.com/WonYoungYun/myportfolio",
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

