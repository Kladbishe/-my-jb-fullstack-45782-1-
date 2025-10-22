
import useUserName from '../../../hooks/use-username'
import './Footer.css'


export default function Footer(){

    const name = useUserName()
    return(
        <div className='Footer'>
          (c)  copyrights wizzer we | you are {name} | Server address: {import.meta.env.VITE_REST_SERVER_URL}
        </div>
    )
}