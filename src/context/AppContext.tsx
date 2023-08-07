import { createContext, useContext } from "react"
type TypeApp = {}
const AppContext = createContext<TypeApp>({})

export const useAppContext = () => {
    const context = useContext(AppContext)
    return context
}

export const AppProvider = (props: { children: any }) => {
    return <AppContext.Provider value={{}}>
        {props.children}
    </AppContext.Provider>
}