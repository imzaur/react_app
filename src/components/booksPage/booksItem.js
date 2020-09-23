import React, {Component} from 'react';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../services/gotService';


export default class BookItem extends Component{
    gotService = new GotService();
    

    render() {
        return (
            <CharDetails itemId={this.props.bookId} itemDetails={this.gotService.getBook}>
                <Field field="name" label="Name" />
                <Field field="numberOfPages" label="Pages" />
            </CharDetails>
        )
    }

}