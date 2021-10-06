import React, {useState} from 'react'
import { useAsyncDebounce } from 'react-table'

//filter es el valor del text input, setFilter es la función set

// el debounce y use state es para que el filtro no se haga lento cuando tengo mucha informacion 
// el filtro se usara después de un segundo en vez de despues de cada render
// update: si pongo un segundo no detecta nada durante ese segundo, es mejor poner 0

export const GlobalFilter = ({filter, setFilter}) => {

    const [value, setValue] = useState(filter)

    const onChange = (value) => {
        setFilter(value || undefined)
    }


    return (
        <span>
            Search: {' '}
            <input 
                value={filter || ''} 
                onChange={e => {
                    setValue(e.target.value)
                    onChange(e.target.value)
                }}
            />
        </span>
    )
}
