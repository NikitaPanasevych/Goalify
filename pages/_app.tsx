import '../styles/globals.css'
import { useRouter } from 'next/router';
import { useState, useEffect} from 'react'
import { AppProps } from 'next/app';
import Load from '../components/Loading';

const  Loading = (): any => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
      const handleStart = (url:any) => (url !== router.asPath) && setLoading(true);
      const handleComplete = (url:any) => (url === router.asPath) && setLoading(false);

      router.events.on('routeChangeStart', handleStart)
      router.events.on('routeChangeComplete', handleComplete)
      router.events.on('routeChangeError',  handleComplete)

      return () => {
          router.events.off('routeChangeStart', handleStart)
          router.events.off('routeChangeComplete', handleComplete)
          router.events.off('routeChangeError', handleComplete)
      }
  })
  
  return loading && (<Load />)
}
function MyApp({ Component, pageProps } : AppProps):JSX.Element {
  return (
    <>
      <>
      <Loading/>
      </>
      <Component {...pageProps} />
    </>
    )
}

export default MyApp;
