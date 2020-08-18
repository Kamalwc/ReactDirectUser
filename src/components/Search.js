import React from 'react'
import "./css/SearchStyles.css"

export default function Search(props) {

    const {handleSearch,
           searchWord} = props;

    return (
        <div>
            <input
                placeholder="search"
                type="search"
                onChange = {(event) => handleSearch(event)}
                style = {{marginLeft: "700px", height: "35px"}}
                // value = {searchWord}
            />
        </div>
    )
}
