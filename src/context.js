import { createContext, useState } from 'react'
const Context = createContext()

function ContextProvider(props) {
    const [cephaloResult, setCephaloResult] = useState(false)

    return (
        <Context.Provider
            value={{
                cephaloResult,
                setCephaloResult
            }}>
            {props.children}
        </Context.Provider>
    )
}

const ContextConsumer = Context

export { ContextProvider, ContextConsumer }
