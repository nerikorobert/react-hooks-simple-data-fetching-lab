
import { useEffect, useState } from "react"

// create your App component here
function App(){
    const[image , setImage]=useState(null)
    const fetchData=async ()=>{
        const response = await fetch("https://dog.ceo/api/breeds/image/random")
        if(response.status !== 200){
            throw new Error("image not found")
        }
        const data =  await response.json()
       return data
    }

    useEffect(()=>{
        fetchData()
        .then(data=>{
            setImage(data.message)
        })
        .catch(e=>console.log(e))
    }, [])
 
    // console.log(image)
    return (
        <div>
            {image === null ? <p>Loading</p> : <img src={image} alt="A Random Dog"></img>}
        </div>
    )

}

export default App;
