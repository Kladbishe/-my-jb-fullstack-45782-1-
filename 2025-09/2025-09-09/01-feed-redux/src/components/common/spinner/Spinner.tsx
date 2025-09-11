import "./Spinner.css"

import spinnerSource from '../../../assets/spinnerSource.gif'


export default function Spinner(){
    return(
        <div className="Spinner">
            <img src={spinnerSource} />
        </div>
    )
}