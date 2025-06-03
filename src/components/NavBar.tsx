    import Image from "next/image";
    interface NavBarProps{// quando uso interface é uma obrigaçao passar os valores na rederizaçao
        links : {
            label: string;
            href: string;
        }[]
    }

    export default function NavBar({links}:NavBarProps) {

        return (
            <nav className="bg-blue-200 shadow-sm">
                <div className="px-4 mx-4">
                    <div className="flex justify-between h-16 items-center">

                        <div className="flex items-center">
                            <Image
                                src="/nextjs-icon.svg"
                                alt="logo nextjs"
                                width={45}
                                height={45}
                            />
                            {/* <span className="ml-2 font-black">NextApp</span> */}
                        </div>

                        <div className="flex space-x-6">
                            {
                                links.map((link,indice)=>(
                                    <a 
                                    key={indice} 
                                    href={link.href} 
                                    className="hover:text-blue-900 text-lg font-bold">
                                        {link.label}</a>
                                ))
                            }

                        </div>

                    </div>
                </div>
         </nav>

        )
    }