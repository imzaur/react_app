import React, {Component} from 'react';
import ItemList from '../itemList';
import CharDetails, {Field} from '../charDetails';
import GotService from '../../services/gotService';
import Rowblock from '../rowBlock';


export default class CharacterPage extends Component {
    gotService = new GotService();

    state = {
        randomChar: true,
        selectedChar: 130,
        error: false
    }

    onItemSelected = (id) => {
        console.log(`CHAR ID ${id}`)
        this.setState({selectedChar: id});
        console.log(this.state);
    }


    render() {
        const itemlist = (
            <ItemList onItemSelected={this.onItemSelected}
                    getData={this.gotService.getAllCharacters}
                    renderItem={ (item) => ` ${item.name} (${item.gender})` }/>
        )
        const chardetails = (
            <CharDetails itemId={this.state.selectedChar} itemDetails={this.gotService.getCharacterId}>
                <Field field="gender" label="Gender" />
                <Field field="born" label="Born" />
                <Field field="died" label="Died" />
                <Field field="died" label="Culture" />
            </CharDetails>
        )
        return (
            <Rowblock left={itemlist} right={chardetails}/>
        )
    }
}