import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from 'next/image';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })

export default function Home({res}) {
  const router = useRouter();
  
  const handleClick = (el)=>{
    router.push("/"+el)
  }
  console.log(res);
  return (
    <>
      <Head>
        <title>Movie App</title>
        <meta name="description" content="here is the latest movie list" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <h1 style={{textAlign:"center"}}>Latest Movies List</h1>
        <div style={{width:"90%", height:"100%", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gridTemplateRows:"auto", gap:"10px", justifyContent:"center", margin:"10px auto"}}>
          {res?.map((movie) => (
            <div key={movie.id} style={{color:"gray",cursor:"pointer",fontWeight:"100", textAlign:"center",boxShadow:"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}} onClick={(e)=>{handleClick(movie.id)}}>
              <img src={movie.Poster} width={"100%"} height={"90%"} alt={movie.Title}/>
              <h2 style={{fontFamily:"arial", fontSize:"12px"}}>{movie.Title}</h2>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}
export async function getStaticProps(context) {
let data = await fetch("http://localhost:8080/movies")
let res = await data.json();
  return {
    props: {res}, 
  }
}
