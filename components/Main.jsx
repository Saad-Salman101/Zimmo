import React from 'react'
import { useSelector} from 'react-redux';
import Home from './Home';
import Field from './Field'
import Form from './Form2';
const Main = () => {

    const {c} = useSelector((state)=>state.custom)
if (c==0){
  return (
    <>
      <Home />
    </>
  )}

else if(c==1){
    return(
        <>
        <Field/>
        </>
    )
}

else if(c==2){
    return(
        <>
        <Form/>
        </>
    )
}

else {
    return (
      <>
        <Home />
      </>
    )}

}

export default Main
