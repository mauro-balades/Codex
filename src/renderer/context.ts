import { Context } from 'interfaces/context'
import React from 'react'

const ThingsContext = React.createContext({})

export const ContextProvider = ThingsContext.Provider
export default ThingsContext