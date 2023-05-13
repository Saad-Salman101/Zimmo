import '../styles/globals.css';
// import Home from '../components/Home';

function MyApp({ Component, pageProps }) {
  

  return (
    <div>
        {/* <Home/> */}
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
