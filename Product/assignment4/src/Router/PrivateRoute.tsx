import { PropsWithChildren } from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"


const PrivateRoute: React.FC<PropsWithChildren> = ({children})=>{

    const user = useSelector((state: any) => state.taskUser)

    return (
        <div>
            {
                user ? <>{children}</> : <Navigate to="/sign-in"/>
            }
        </div>
    )
}

export default PrivateRoute