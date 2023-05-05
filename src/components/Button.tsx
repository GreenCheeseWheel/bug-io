interface IButtonProps {
    btnText:string,
    bgColor?:string,
    color?:string,
    fontSize?:string,
    width:string,
    height:string,
}

export default function Button(props:IButtonProps)
{
    const {btnText, bgColor, color, fontSize, width, height} = props;
    // w-[${width}] h-[${height}]  bg-[${bgColor}] text-[${color}] text-${fontSize}
    return(
        <button 
            style={{width: width, height: height, backgroundColor: bgColor, color: color, fontSize: fontSize}} 
            className="px-2 py-1 rounded-[5px] font-semibold"
            >
            {btnText}
        </button>
    );
}