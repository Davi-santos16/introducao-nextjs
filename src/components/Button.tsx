type ButtonProps ={
    label:string
}

export default function Button({label}:ButtonProps){
    return(
        <button className="px-4 py-2 bg-blue-500 text-white mx-1.5 hover:bg-blue-600 transition-all
         duration-200 ease-in-out">{label}</button>
    )
}