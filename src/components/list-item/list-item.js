import React from "react"

import './list-item.css'

function ListItem({ label, important, done, onDeleteItem, onImportant, onDone }) {

    let classNames = '';

    if (important) {
        classNames += ' important';
    }

    if (done) {
        classNames += ' done';
    }

    return (
        <span className={classNames}>
            <span onClick={onDone}>{ label }</span>
            <button onClick={onDeleteItem}>Удалить</button>
            <button onClick={onImportant}>Important</button>
        </span>
    );
}

export default ListItem;