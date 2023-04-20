import React from 'react'

const CherchSection = (props) => {
    return (
        <div className="w-1/3 mt-5 mx-auto">
            <input type="search"
                className="w-full p-3"
                placeholder="Entrer le nom de film" aria-label="search"
                onChange={(event) =>
                    props.setQuery(event.target.value)}
                value={props.value}>
            </input>
        </div>
    )
}

export default CherchSection;