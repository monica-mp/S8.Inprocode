import { useElements } from "../../context/Context";

const PercentVariation = (): JSX.Element => {
    const {  percentageChange } = useElements();

    return (        
        <div className="text-xl font-bold text-black pb-5">
            <p>{percentageChange}%</p>
            <p>respecte a ahir</p>
        </div>
    )    
}

export default PercentVariation