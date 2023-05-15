import React from 'react'
import { useSelector} from 'react-redux';
// import Home from './Home';
import Field from './Field'
import Form from './Form';
// import Formikform from './Formikform'
import Form2 from './Form2';
const Main = () => {

    const {c} = useSelector((state)=>state.custom)
if (c==0){
  return (
    <>
      <Form2 />
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
        <Form2 />
      </>
    )}

}

export default Main
