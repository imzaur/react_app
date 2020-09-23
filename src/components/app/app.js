import React, {Component} from 'react';
import {Col, Row, Container, Button} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import GotService from '../../services/gotService';
import {BooksPage, BookItem} from '../booksPage';
import HousePage from '../housePage.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';


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
            <Router>
                <div className='app'> 
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
                    <Route path='/characters' component={CharacterPage}/>
                    <Route path='/books' exact component={BooksPage}/>
                    <Route path='/houses' component={HousePage}/>
                    <Route path='/books/:id' render={({match}) => {
                                    console.log(match);
                                    const {id} = match.params;
                                    return <BookItem bookId={id}/>
                    }}/>
                    <HousePage/>
                </Container>
                </div>
            </Router>
        );
    }    
    
};
