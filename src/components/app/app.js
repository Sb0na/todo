import React, { Component } from "react"

import ItemStatusFilter from '../item-status-filter'
import MainContent from "../main-content"
import Footer from "../footer"

import './app.css'

class App extends Component {

    state = {
        list: [{ _id: 1, label: "Hello", done: true, important: false },
            { _id: 2, label: "asdas", done: false, important: true },
            { _id: 3, label: "fsdfsdfds", done: false, important: false }],
        filter: 'all',
        search: ''
    };

    onDeleteItem = (id) => {
        this.setState((state) => {
            const newList = state.list.filter((el) => el._id !== id);
            return {
                list: newList
            };
        })
    };

    toggleProperty = (arr, id, property) => {
        const idx = arr.findIndex(item => item._id === id );
        const oldItem = arr[idx];
        const value = !oldItem[property];

        const newList = { ...arr[idx], [property]: value};

        return [
            ...arr.slice(0, idx),
            newList,
            ...arr.slice(idx+1)
        ];
    };

    onDone = (id) => {
        this.setState((state) => {
            const newItem = this.toggleProperty(state.list, id, 'done');
            return {list: newItem};
        });
    };

    onImportant = (id) => {
        this.setState((state) => {
            const newItem = this.toggleProperty(state.list, id, 'important');
            return { list: newItem };
        });
    };

    filterItems = (items, filter) => {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter(item => !item.done);
        } else if (filter === 'done') {
            return items.filter(item => item.done);
        }
    };

    searchItems = (items, search) => {
        if (search.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
        });
    };

    onFilterChange = (filter) => {
        this.setState({filter});
    };

    render() {
        const { list, filter, search } = this.state;
        const visibleItems = this.searchItems(this.filterItems(list, filter), search);

        return (
            <div>
                <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange} />
                <MainContent items={visibleItems} onDeleteItem={this.onDeleteItem} onImportant={this.onImportant} onDone={this.onDone}  />
                <Footer />
            </div>
        );
    }
}

export default App;