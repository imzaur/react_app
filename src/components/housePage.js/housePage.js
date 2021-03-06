import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../services/gotService';
import Rowblock from '../rowBlock';


export default class HousePage extends Component {
    gotService = new GotService();

    state = {
        randomChar: true,
        selectedChar: 1,
        error: false
    }

    onItemSelected = (id) => {
        console.log(`ID ${id}`)
        this.setState({selectedChar: id});
        console.log(this.state);
    }

    render() {
        const itemlist = (
            <ItemList onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllHouses}
                    renderItem={ (item) => `${item.name}` }/>
        )
        const chardetails = (
            <CharDetails itemId={this.state.selectedChar} itemDetails={this.gotService.getHouse}>
                <Field field="name" label="Name" />
                <Field field="region" label="Region" />
            </CharDetails>
        )
        return (
            <Rowblock left={itemlist} right={chardetails}/>
        )
    }
}