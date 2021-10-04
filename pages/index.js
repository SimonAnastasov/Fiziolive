import Head from 'next/head'
import clientPromise from '../lib/mongodb'

import Welcome from '../components/app/Welcome'
import Landing from '../components/app/Landing'
import AboutUs from '../components/app/AboutUs'
import Massages from '../components/app/Massages'
import Contact from '../components/app/Contact'

import Header from '../components/app/Header'
import Footer from '../components/app/Footer'

export default function Home({ isConnected }) {
  return (
    <div className="app">
      <Head>
        <title>Fiziolive</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css" integrity="sha512-YWzhKL2whUzgiheMoBFwW8CKV4qpHQAEuvilg9FAn5VJUDwKZZxkJNuGM4XkWuk94WCrrwslk8yWNGmY1EduTA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
      </Head>
      {/* <Welcome/> */}
      <Landing/>
      <AboutUs/>
      <Massages/>
      <Contact/>

      <Header/>
      <Footer/>
    </div>
  )
}

export async function getServerSideProps(context) {
  const client = await clientPromise

  // client.db() will be the default database passed in the MONGODB_URI
  // You can change the database by calling the client.db() function and specifying a database like:
  // const db = client.db("myDatabase");
  // Then you can execute queries against your database like so:
  // db.find({}) or any of the MongoDB Node Driver commands

  const isConnected = await client.isConnected()

  return {
    props: { isConnected },
  }
}
