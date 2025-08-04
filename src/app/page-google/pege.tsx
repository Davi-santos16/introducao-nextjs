import {GoogleLogin} from "@react-oauth/google"
import axios from "axios"

export default function loginGooglePage(){

    const handleSucces = async (credentialResponde: any){
        try{
            const responde = await axios.post(`${process.env.NEXT_BLIC_API_URL}/auth/google`,{
                
            })
        }catch(err){
            console.error("erro no login com o google", err)
        }
    }
    return(
        <main className="flex h-screen items-center justify-center">
            <div className="p-4 rounded shadow bg-white">
                <h1 className="font-semibold">Login</h1>
                <GoogleLogin
                onSuccess={handleSucces}
                onError={()=>{console.log("erro ao autenticar com o Google")}}
                />
            </div>
        </main>
    )
}