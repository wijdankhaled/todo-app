import React from 'react';
import { useState } from 'react';

export const SettingsContext = React.createContext();

export default function Settings(props) {
    const [itemsPerPage,setItemsPerPage]=useState(2);
    const [sort,setSort]=useState('not very hard');
    const [showCompleted,setShowCompleted]=useState(false);
    const state = {
        itemsPerPage,
        sort,
        showCompleted,
        setItemsPerPage,
        setSort,
        setShowCompleted,
    }

    return (
        <SettingsContext.Provider value={state}>
            {props.children}
        </SettingsContext.Provider>
    )
}