import React from 'react';
import ImageContainer from './containers/ImageContainer'
import Navbar from './components/Navbar'

const API = "https://pixabay.com/api/?key=15410961-50b6ae9ee64c3859d407a7eaa&q=nature&image_type=photo&pretty=true"

class MainPage extends React.Component {
    constructor() {
        super();
        this.state = { 
            images: []
         }
    }

    componentDidMount(){
        fetch(API)
            .then(resp => resp.json())
            .then(images => this.setState({
                images: images.hits
            }))
    }

    render() { 
        // console.log(this.state.images)
        return ( 
            <Fragment>
                <ImageContainer images={this.state.images}/>
                <Navbar/>
            </Fragment>
         );
    }
}
 
export default MainPage;