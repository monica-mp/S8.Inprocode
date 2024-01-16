import { createContext, ReactNode, useContext } from "react";
import { useTranslation } from 'react-i18next'

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
  percentageChange: number
  daysData: string[],
  expensesDayData: number[],
  sign: string
}


interface weekExpenses {    
  [key: string]: number
  Monday: number
  Tuesday: number
  Wednesday: number
  Thursday: number
  Friday: number
  Saturday: number
  Sunday: number
}


export const ContextProvider: React.FC<Props> = ({children}) =>{
   const {t} = useTranslation();


    const weeksArray: weekExpenses[] = [
      {         
        Monday: 230,
        Tuesday: 340,
        Wednesday: 50,
        Thursday: 120,
        Friday: 335,
        Saturday: 235,
        Sunday: 545
    },
    {         
        Monday: 100,
        Tuesday: 35,
        Wednesday: 125,
        Thursday: 565,
        Friday: 10,
        Saturday: 310,
        Sunday: 500
    },
    {         
        Monday: 300,
        Tuesday: 280,
        Wednesday: 95,
        Thursday: 45,
        Friday: 120,
        Saturday: 125,
        Sunday: 270
    },
    {         
        Monday: 230,
        Tuesday: 35,
        Wednesday: 25,
        Thursday: 75,
        Friday: 115,
        Saturday: 65,
        Sunday: 10
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
  
    const percentageChange = Number(calculatePercentageChange(todayExpense, yesterdayExpense).toFixed(2));
    const sign = percentageChange > 0 ? '+' : ''
    
    const daysData = Object.keys(weeksArray[0]).map(day => t(`days.${day}`));
    const expensesDayData = Object.values(weeksArray[0]);
    

    const contextValue: ContextProps = {
        weeksArray,
        totalWeekBalance,
        todayExpense,
        yesterdayExpense,
        percentageChange,
        daysData,
        expensesDayData,
        sign
    }
    

    return (
        <Context.Provider value={contextValue}>{children}</Context.Provider>
    )

}

export default Context