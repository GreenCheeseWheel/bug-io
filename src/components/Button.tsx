import { FormEvent } from "react";

interface IButtonProps {
    btnText:string,
    bgColor?:string,
    color?:string,
    fontSize?:string,
    width:string,
    height:string,
    onClick?:(event:FormEvent | null) => void,
}

export default function Button(props:IButtonProps)
{
    const {btnText, bgColor, color, fontSize, width, height, onClick} = props;
    return(
        <button onClick={onClick}
            style={{width: width, height: height, backgroundColor: bgColor, color: color, fontSize: fontSize}} 
            className="px-2 py-1 rounded-[5px] font-semibold"
            >
            {btnText}
        </button>
    );
}