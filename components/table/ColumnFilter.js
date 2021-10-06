import React from 'react'

//la idea es que este filtro reciba automaticamente la columna como propiedad

export const ColumnFilter = ({column}) => {

    const {filterValue, setFilter} = column

    return (
        <span>
            Search: {' '}
            <input 
                value={filterValue || ''} 
                onChange={(e) => setFilter(e.target.value)}
            />
        </span>
    )
}
