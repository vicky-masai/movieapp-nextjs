import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react'

const Watchlists = ({res}) => {
let router = useRouter()
  const handleDelete=(id)=>{
axios.delete(`http://localhost:8080/watchlists/${id}`)
  .then(response => {
    console.log('Response:', response.data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  router.push('/watchlists');
  }
  return (
    <div>
      <center><h1>Watchlists</h1></center>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {res.map((item, index) => {
            let id = item.id
            return (
              <tr key={index}>
                <td>{item.Title}</td>
                <td>{item.Released}</td>
                <td>
                  <button onClick={(e)=> handleDelete(id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Watchlists

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:8080/watchlists")
  let res = await data.json();
    return {
      props: {res}, 
    }
  }