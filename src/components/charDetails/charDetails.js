import React, {Component} from 'react';
import './charDetails.css';
import GotService from '../../services/gotService';
// import Spinner from '../spinner';


const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {Field};

export default class CharDetails extends Component {

    constructor(props){
        super(props);
        this.updateChar();
    }
    state = {
        item: null
    }
    gotService = new GotService();
   
    updateChar() {
        const {itemId} = this.props;
        console.log(`PROP ${itemId}`);

        if (itemId){
            this.props.itemDetails(itemId)
                .then((item) => {
                    console.log(`THEN ${item}`)
                    this.setState({item: item})
                })
        }
    }
    componentDidUpdate(prevProps){
        if (prevProps.itemId !== this.props.itemId) {
            this.updateChar();
        }
    }
    render() {
        const {item} = this.state;
        console.log(` CHARSS ${item}`);
        if (!item){
            return (
                <span>Select </span>
            )
        }
        const {name} = item;
        
        return (
            <div className="char-details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    { React.Children.map(this.props.children,  (child) =>  { 
                        return React.cloneElement(child, {item})
                    }) }
                </ul>
            </div>
        );
    }
}