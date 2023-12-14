 //importing
import React , {useEffect}from 'react'
import { testApi } from '../apis/Api';
//function
const Homepage = ()=>{
    //auto run when page loads
    useEffect(() => {
        testApi().then((res)=>{
            console.log(res.data)
        })
    });
    return(
        <div>
            <h1>Homepage form page folder</h1>
        </div>
    )
}
//export defaul
export default Homepage;