import { useContext, useState } from 'react'
import SpinnerButton from '../../../components/common/spiner-buttom/SpinnerButton'
import './Login.css'
import { useForm } from 'react-hook-form'
import type LoginModel from '../../../models/login'
import authService from '../../../services/auth'
import AutoContext from '../auth/AuthContext'



export default function Login() {

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

    const { register, handleSubmit } = useForm<LoginModel>()
    const authContext = useContext(AutoContext)
    async function submit(login: LoginModel) {
        try {
            setIsSubmitting(true)
            const {jwt} = await authService.login(login)
            authContext?.newJwt(jwt)
            console.log(jwt)
        } catch (e) {
            alert(e)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div className='Login'>
            <form onSubmit={handleSubmit(submit)}>

                <input placeholder='username' {...register('username')} />
                <input placeholder='password' type="password" {...register('password')} />
                <SpinnerButton
                    buttonText='Login'
                    loadingText='logging in'
                    isSubmitting={isSubmitting}
                />
            </form>
        </div>
    )
}