import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';


export default class ItemList extends Component {
    

    state = {
        itemList: null 
    }

    componentDidMount() {
        const {getData} = this.props;
        getData()
            .then((itemList) => {
                console.log(`ITEM LIST ${itemList}`)
                this.setState({itemList})
            })
    }
    renderChars(itemList) {
        
        return itemList.map((item, i) => {
            const id = i+1;

            const label = this.props.renderItem(item);
            return (
                <li 
                    key={id}
                    className="list-group-item"
                    onClick={() => this.props.onItemSelected(id)}>
                    {label} 
                </li>
            )
        })
    }
    render() {

        const {itemList} = this.state;
        const content = itemList? this.renderChars(itemList) : <Spinner/>;
        return (
            <ul className="item-list list-group">
                {content}
            </ul>
        );
    }
}