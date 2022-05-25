import React from 'react';
import NavBar from '../../components/Navbar/NavBar';
import { List } from '../../components/List/List';
import Button from '../../components/Button/Button';
import './Profile.css'

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: ["home", "blog", "about me", "pics", "contact"],
            info: {
                name: 'Walter Cordero',
                age: 34,
                jobTitle: 'Frontend Team Manager'
            },
            pageTitle: "Welcome to my Blog :)"
        }
        this.changeTitle = this.changeTitle.bind(this);
        this.changeJobTitle = this.changeJobTitle.bind(this);
        this.addNewPage = this.addNewPage.bind(this);
    }

    changeTitle(newPageTitle) {
        this.setState({
            pageTitle: newPageTitle
        })
    }

    changeJobTitle() {
        this.setState( prevState => ({
            info: {...prevState.info, jobTitle: 'Academik Instructor for React and Node Bootcamp'}
        }))
    }

    addNewPage() {
        this.setState( prevState => ({
            pages: [...prevState.pages, 'new Page']
        }))
    }
    
    render() {
        return (
            <div>
                <NavBar pages={this.state.pages} />
                <h1>{this.state.pageTitle}</h1>
                <p>I am developer since 12 years ago</p>
                <List title="Personal Info">
                    <li>Name: {this.state.info.name}</li>
                    <li>Age: {this.state.info.age} years</li>
                    <li>Job Title: {this.state.info.jobTitle}</li>
                </List>
                <p>There are some of my favorites programing languages and Frontend Frameworks</p>
                <List title="Backend Languages">
                    <li>Node.js</li>
                    <li>C#</li>
                    <li>Python</li>
                </List>
                <List title="Frontend Frameworks">
                    <li>Angular</li>
                    <li>React</li>
                    <li>Vue.js</li>
                </List>

                <img width="250"src="https://picsum.photos/640" />

                <div>
                    <Button textButton="Change Title" onClick={this.changeTitle}/>

                    {/* <button className="Button" style={{marginLeft: '10px'}} onClick={this.changeJobTitle}>
                        Change Job Title
                    </button>
                    <button className="Button" style={{marginLeft: '10px'}} onClick={this.addNewPage}>
                        Add new Page
                    </button> */}
                </div>

            </div>
        )
    }
}

export default Profile;