import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';
import store from './store';

// const Home = dynamic(() => import('../components/Home'), { ssr: false });
// const Field = dynamic(() => import('../components/Field'), { ssr: false });
const Form = dynamic(() => import('../components/Form'), { ssr: false });
// const Myform = dynamic(() => import('../components/Myform'), { ssr: false });


const index = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Field/> */}
      <Provider  store={store}>
      {/* <Myform/> */}
      <Form/>
      </Provider>
    </div>
  );
};

export default index;
