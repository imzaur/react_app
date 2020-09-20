import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import GotService from '../../services/gotService';
import BooksPage from '../booksPage';
import HousePage from '../housePage.js';


export default class App extends Component {
    constructor(props){
        super(props);
        this.onRandomChar = this.onRandomChar.bind(this);
    }
    state = {
        randomChar: true,
        error: false
    }

    gotService = new GotService();

    componentDidCatch() {
        console.log("error");
        this.setState({error: true})
    }

    onRandomChar() {
        this.setState((state) => {
            return {
                randomChar: !state.randomChar
            }
        })
    }

    render() {
        const {randomChar, error} = this.state,
              randomCharContent = randomChar? <RandomChar/> : null;
        if (error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            <Button onClick={this.onRandomChar} color="danger">Toggle randomChar</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {randomCharContent}
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <BooksPage/>
                    <HousePage/>
                </Container>
            </>
        );
    }    
    
};
