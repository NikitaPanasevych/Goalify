import '../styles/globals.css'
import { useRouter } from 'next/router';
import React from 'react';
import { useState, useEffect} from 'react';
import { AppProps } from 'next/app';
import Load from '../components/Loading';


function MyApp({ Component, pageProps } : AppProps):JSX.Element {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  },[])

  return (
    <>
    { loading ? (
      <React.Fragment>
        <Component {...pageProps} />
      </React.Fragment>
      ) : (
        <Load />
        ) 
    }
    </>
    )
}

export default MyApp;
