import React, {Component} from 'react';
import ItemList from '../itemList';
import GotService from '../../services/gotService';
import Rowblock from '../rowBlock';
import {withRouter} from 'react-router-dom';


class BooksPage extends Component {
    gotService = new GotService();

    state = {
        randomChar: true,
        selectedChar: 1,
        error: false
    }

    render() {
        const itemlist = (
            <ItemList onItemSelected={(itemId) => {
                this.props.history.push(`/books/${itemId}`)
            }}
                    getData={this.gotService.getAllBooks}
                    renderItem={ (item) => `${item.name}` }/>
        )    
        return (
            <Rowblock left={itemlist}/>
        )
    }
}

export default withRouter(BooksPage);