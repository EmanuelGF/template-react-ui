import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { isEmpty } from 'lodash'

export const CtxContext = React.createContext()

export function CtxProvider(props) {
    const api_url = process.env.REACT_APP_API_ADDRESS 
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`${api_url}/posts`)
        .then(response => {
            setData(response.data)
        })
    },[api_url])

    return (
        <> {!isEmpty(data) && 
            <CtxContext.Provider value={{api_url: api_url, data: data}}>
                {props.children}
            </CtxContext.Provider>
        }
        </>
    )
}