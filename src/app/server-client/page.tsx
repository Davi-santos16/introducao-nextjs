import ThemeToggle from "@/components/ThemeToggle"

export default function ServerClient (){
    const now = new Date().toLocaleString()
    

    return(
        <div >
            <p>{now} </p>
            <ThemeToggle/>
           
        </div>
    )

}  