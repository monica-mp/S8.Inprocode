import { createContext, ReactNode, useContext } from "react";

// Creation of the context
const Context = createContext<ContextProps | undefined>(undefined)

// Custom hook to consume the context
export const useElements: () => ContextProps = (): ContextProps => { // eslint-disable-line react-refresh/only-export-components
  const context = useContext(Context)
  if (context == null) {
    throw new Error('useElements must be used within a ContextProvider')
  }
  return context
}

// Properties of the context provider
interface Props{
    children: ReactNode
}

// Definition of the properties of the context
interface ContextProps {
  weeksArray: weekExpenses[],
}

interface weekExpenses {
    monday: number,
    tuesday: number,
    wednesday: number,
    thursday: number,
    friday: number,
    saturday: number,
    sunday: number
}


export const ContextProvider: React.FC<Props> = ({children}) =>{
   
    const weeksArray: weekExpenses[] = [
      { 
        monday: 230,
        tuesday: 340,
        wednesday: 50,
        thursday: 120,
        friday: 335,
        saturday: 235,
        sunday: 545
    },
    { 
        monday: 100,
        tuesday: 35,
        wednesday: 125,
        thursday: 565,
        friday: 10,
        saturday: 310,
        sunday: 500
    },
    { 
        monday: 300,
        tuesday: 280,
        wednesday: 95,
        thursday: 45,
        friday: 120,
        saturday: 125,
        sunday: 270
    },
    { 
        monday: 230,
        tuesday: 35,
        wednesday: 25,
        thursday: 75,
        friday: 115,
        saturday: 65,
        sunday: 10
    },
  ]




    const contextValue: ContextProps = {
        weeksArray
    }
    

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )

}

export default Context