import Image from "next/image"

export default function NavBar(){
    return(
         <div className="">

            {/* NavBar */}

            
            <nav className="bg-amber-50 shadow-sm">
                <div className="px-4">
                <div className="flex justify-between h-16 items-center">
                    <div className="flex items-center">
                    <Image src= "/nextjs-icon.svg" alt="dsdsd" width={40} height={40} className=""/>
                    <span className="ml-2">NextApp</span>
                    </div>

                    <div className="flex space-x-6">
                    <a className="text-lg font-medium hover:text-blue-800" href="">inicio</a>
                    <a className="text-lg font-medium  hover:text-blue-800" href="">recursos</a>
                    <a className="text-lg font-medium hover:text-blue-800" href="">contato</a>
                    </div>

                </div>
                </div>
            </nav>
            
            </div>
    )
}