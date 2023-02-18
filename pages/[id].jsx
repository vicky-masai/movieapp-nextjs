import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
export async function getStaticPaths() {
  return {
    paths: [
    { params: { id: '1' } }, 
    { params: { id: '2' } },
    { params: { id: '3' } },
    { params: { id: '4' } },
    { params: { id: '5' } },
    { params: { id: '6' } },
    { params: { id: '7' } },
    { params: { id: '8' } },
    { params: { id: '9' } },
    { params: { id: '10' } },
    { params: { id: '11' } },
    { params: { id: '12' } },
    { params: { id: '13' } },
    { params: { id: '14' } },
    { params: { id: '15' } },
    { params: { id: '16' } },
  ],
    fallback: false,
  }
}

const Movie = ({blog}) => {
    const router = useRouter();
    const handleAdd =(blog)=>{
      axios.post('http://localhost:8080/watchlists', blog)
      .then(response => {
        console.log('Response:', response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
      router.push('/watchlists');
    }
  return (
      <div key={blog.id} style={{width:"90%", height:"100vh", margin:"0px auto", display:"grid", gridTemplateColumns:"1fr 1fr", gridTemplateRows:"auto"}}>
            <div>
              <img src={blog.Poster} alt={blog.Title} style={{width:"90%", height:"600px"}}/>
            </div>
            <div>
              <h1>{blog.Title}</h1>
              <ul>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Year - </strong>{blog.Year}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Rated - </strong>{blog.Rated}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Released - </strong>{blog.Released}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Runtime - </strong>{blog.Runtime}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Genre - </strong>{blog.Genre}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Director - </strong>{blog.Director}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Writer - </strong>{blog.Writer}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Actors - </strong>{blog.Actors}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Plot - </strong>{blog.Plot}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Language - </strong>{blog.Language}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Country - </strong>{blog.Country}</li>
    <li style={{fontFamily:"arial", fontSize:"16px",margin:"5px 0px", fontWeight:"100"}}><strong>Awards - </strong>{blog.Awards}</li>
              </ul>
              <button onClick={(e)=> handleAdd(blog)} style={{width:"100%",height:"40px", background:"green", color:"black", border:"none", fontSize:"20px", cursor:"pointer"}}>Add to watchlist</button>
            </div>
    </div>
  );
};

export async function getStaticProps(context){
    let id = context.params.id;
    let d = await fetch(`http://localhost:8080/movies/${id}`);
    let b = await d.json();
    return {
      props: {
        blog:b,
      },
    };
}
export default Movie;