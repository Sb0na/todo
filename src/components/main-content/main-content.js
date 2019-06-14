import React from "react"
import ListItem from '../list-item'

function MainContent({ items, onDeleteItem, onImportant, onDone }) {
    const elements = items.map(item => {
        const { _id, ...itemProps } = item;

        return (
            <li key={_id}>
                <ListItem { ...itemProps } onDeleteItem={ () => onDeleteItem(_id) } onImportant={ () => onImportant(_id) } onDone={() => onDone(_id)} />
            </li>
        );
    });

    return ( <ul>{ elements }</ul> );
}

export default MainContent;