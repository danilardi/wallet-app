import { createContext, useContext, useState } from "react";

const RouteContext = createContext();

export function RouteProvider({ children }) {
    const [route, setRoute] = useState('home'); // defaultnya 'home'

    return (
        <RouteContext.Provider value={{ route, setRoute }}>
            {children}
        </RouteContext.Provider>
    );
}

export function useRoute() {
    const context = useContext(RouteContext);
    if (!context) {
        throw new Error('useRoute must be used inside RouteProvider');
    }
    return context;
}
