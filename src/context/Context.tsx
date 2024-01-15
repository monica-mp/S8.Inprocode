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
  totalWeekBalance: number,
  todayExpense: number,
  yesterdayExpense: number,
  percentageChange: string
  
}


interface weekExpenses {    
  [day: string]: number
}


export const ContextProvider: React.FC<Props> = ({children}) =>{
   
    const weeksArray: weekExpenses[] = [
      {         
        dilluns: 230,
        dimarts: 340,
        dimecres: 50,
        dijous: 120,
        divendres: 335,
        dissabte: 235,
        diumenge: 545
    },
    {         
        dilluns: 100,
        dimarts: 35,
        dimecres: 125,
        dijous: 565,
        divendres: 10,
        dissabte: 310,
        diumenge: 500
    },
    {         
        dilluns: 300,
        dimarts: 280,
        dimecres: 95,
        dijous: 45,
        divendres: 120,
        dissabte: 125,
        diumenge: 270
    },
    {         
        dilluns: 230,
        dimarts: 35,
        dimecres: 25,
        dijous: 75,
        divendres: 115,
        dissabte: 65,
        diumenge: 10
    },
  ]

    const calculateWeekBalance = (week: weekExpenses): number => {
      return Object.values(week).reduce((total, current) => total + current, 0);
    };   

    const totalWeekBalance = calculateWeekBalance(weeksArray[0]);

    const getAdjustedDayIndex = (dayIndex: number): number => {
      return dayIndex === -1 ? 6 : (dayIndex === 0 ? 6 : dayIndex - 1);
    };
  
    const getExpenseForDay = (dayIndex: number): number => {
      const adjustedIndex = getAdjustedDayIndex(dayIndex);
      const day = Object.keys(weeksArray[0])[adjustedIndex];    
      return weeksArray[0][day];
    };
    
    const todayExpense = getExpenseForDay(new Date().getDay());
    const yesterdayExpense = getExpenseForDay(new Date().getDay() - 1);
    
    const calculatePercentageChange = (currentValue: number, previousValue: number): number => {
      return ((currentValue - previousValue) / previousValue) * 100;
    };
  
    const percentageChange = calculatePercentageChange(todayExpense, yesterdayExpense).toFixed(2);
    
    

    const contextValue: ContextProps = {
        weeksArray,
        totalWeekBalance,
        todayExpense,
        yesterdayExpense,
        percentageChange
    }
    

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )

}

export default Context