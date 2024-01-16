import { useElements } from "../../context/Context";
import { useTranslation } from 'react-i18next'
import Languages from "../Languages";

const ExpenseBalance = (): JSX.Element => {
    const { totalWeekBalance } = useElements()
    const { t } = useTranslation();
    return (        
        <div className="w-2/5 mx-auto mt-20">
            <Languages/>
            <div className = " bg-orangeCard text-white text-3xl p-6 rounded-3xl flex justify-between">
                <div className="flex flex-col gap-2">
                    <p className="font-sans">{t('BalançTotal')}</p>
                    <p className="font-bold font-sans">{totalWeekBalance}€</p>
                </div>            
                <div className="flex gap-4">
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" /></svg>            
                    </button>
                    <button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" /> </svg>           
                    </button>
                </div>
            </div> 
        
        </div>
        
       

    )
    
}

export default ExpenseBalance