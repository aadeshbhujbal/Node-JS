import React,{useEffect, useState} from 'react';
import './App.css';


function App() {
const [imageArray,setImageArray] = useState(['redflower1.jpg','redflower2.jpg','redflower3.jpg','redflower4.jpg','redflower5.jpg'])
const [restButton,setResetButton] = useState(false)
const [verify,setVerify] = useState({
 true : "",
 false : ""
})
const [previousArrayElement,setPreviousArrayElement] = useState('')
const [CompareImage,setCompareImage] = useState ({
  count : 0,
  One : "",
  Two : ""
})


useEffect(()=>{
 const array = imageArray[Math.floor(Math.random()*imageArray.length)]
  setImageArray([...imageArray,array])
  setPreviousArrayElement(array)
},[])

useEffect(()=>{
    if(CompareImage.Two){
      if(CompareImage.One===CompareImage.Two){
       alert('you are Human')
       setVerify((previous)=>{
         return {...previous,true:"true"}
       })
      }
      else{
       alert('you are not Human')
       setVerify((previous)=>{
         return {...previous,false:"false"}
       })
      }
    }
},[CompareImage])

const reset = (event)=>{
  if(event.detail==2){
   setVerify({
     true : "",
    false : ""
   }) 
   setResetButton(true) }
   if(event.detail==1){
       if(CompareImage.count<2){
          if(!CompareImage.One && CompareImage.count==0){
            setCompareImage((previous)=>{
               return {...previous,count:1,One:event.target.src}
            })
          }
          else if(!CompareImage.Two && CompareImage.count==1){
           setCompareImage((previous)=>{
             return {...previous,count:2,Two:event.target.src}
          })
          }
       }
   }
}


const chnageButton = ()=>{
   setResetButton(false)
   const array = imageArray[Math.floor(Math.random()*imageArray.length)]
   let newArray = imageArray.filter((element)=>{

       return element!==previousArrayElement;
   })
 
        if(newArray.length==5){
         newArray.push(array)
        }
        if(newArray.length==4){
         newArray.push(array)
         newArray.push(previousArrayElement)
        }
      
      setImageArray(newArray);

     setPreviousArrayElement(array) 

        setCompareImage({
         count : 0,
         One : "",
          Two : ""
        })

}

   return (
     <>
     <div id="con">
     <div class="container">
     <h3>Please Click on the identical tiles</h3>
     <div className='gridContainer'>
     {
        <>
         {
           imageArray.map((element)=>{
             return (<><img data-ns-test="index" src={`./images/${element}`} style={{width:"100px",height:"100px"}} onClick={reset}/></>)
           })
         }
        </>
     }
    </div>
    {
      restButton ? 
      <div>
      <button onClick={chnageButton} class="btn btn-primary">Reset</button> 
      </div>:
      <></>
    }
    <div> 
   {
     verify.true ? 
     <p>You are human Congratulations!</p>:<p></p>
   }
   </div>
   <div> 
   {
     verify.false ? 
     <p> We can't Verify you as a human</p>:<p></p>
   }
   </div> 

   </div>   </div>
     </>
 )
}


export default App;
