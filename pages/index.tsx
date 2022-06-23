import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'
import PostBox from '../components/PostBox'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Reddit</title> 
      </Head>
      <PostBox />
      <div className='flex'>
        <Feed />
      </div>
    </div>
  )
}

export default Home
