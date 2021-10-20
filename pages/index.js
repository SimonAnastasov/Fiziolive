import Head from 'next/head'
// import clientPromise from '../lib/mongodb'

import Welcome from '../components/app/Welcome'
import Landing from '../components/app/Landing'
import AboutUs from '../components/app/AboutUs'
import Massages from '../components/app/Massages'
import Contact from '../components/app/Contact'

import ShowMore from '../components/app/ShowMore'

import Header from '../components/app/Header'
import Footer from '../components/app/Footer'

import { useSelector } from 'react-redux'

export default function Home({}) {
  const massages = useSelector(state => state.massages)

  return (
    <div className="app">
      <Head>
        <title>Fiziolive</title>
        <link rel="icon" href="./media/logo.ico"/>

        <meta name="description" content="Разгледајте го нашиот широк избор на масажи и одлучете која најмногу ќе ви одговара. Ве очекуваме ❤..."/>
        <meta name="keywords" content="Fiziolive, Massage, Физиолајв, Анил, Кадриов, Масажа, Масажи, Anil, Kadriov, Massages"/>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Acme&family=Architects+Daughter&family=Nanum+Gothic&family=Patrick+Hand&family=Roboto&family=Source+Sans+Pro&display=swap" rel="stylesheet"/>
      </Head>
      <Welcome/>
      <Landing/>
      <AboutUs/>
      <Massages/>
      <Contact/>

      {massages.showMore ? <ShowMore/> : <></>}

      <Header/>
      <Footer/>
    </div>
  )
}

// export async function getServerSideProps(context) {
//   const client = await clientPromise

//   const isConnected = await client.isConnected()

//   return {
//     props: { isConnected },
//   }
// }
