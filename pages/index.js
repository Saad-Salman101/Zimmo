import dynamic from 'next/dynamic';

// const Home = dynamic(() => import('../components/Home'), { ssr: false });
// const Field = dynamic(() => import('../components/Field'), { ssr: false });
const Form = dynamic(() => import('../components/Form'), { ssr: false });

const index = () => {
  return (
    <div>
      {/* <Home /> */}
      {/* <Field/> */}
      <Form/>
    </div>
  );
};

export default index;
