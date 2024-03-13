import React, { useState, useEffect } from 'react';
import styles from "@/styles/Home.module.css";
import Link from 'next/link';

const Blog = (props) => {
  const [blogs, setBlogs] = useState(props.data);

  // useEffect(() => {
  //   fetch('http://localhost:3000/api/blogs/')
  //     .then(response => response.json())
  //     .then(parsed => {
  //       console.log(parsed);
  //       setBlogs(parsed);
  //     });
  // }, []);

  return (
    <main className="container">
     <style jsx>
    {
      `
      .container{
        display:flex;
        justify-content:center;
        margin:50px 0px
      }
      .heading
      {
        margin:2px 0px;
        color:red;
      }
      .author
      {
        margin:2px 0px;
        color:blue;
      }
      `
    }
    </style>
      <div className={styles.blogs}>
        {blogs.map(item => (
          <Link href={`/blogsection/${item.slug}`}>
          <div className={styles.blogitem} key={item.slug}>
            <h3 className='heading'>{item.slug}</h3>
            <h4 className='author'>{item.author}</h4>
            <p>{item.description.substr(0,150)}...</p>
          </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
export async function getServerSideProps(context) {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/blogs/`)
  const data = await res.json()
 
  // Pass data to the page via props
  return { props: {data} }
}
export default Blog;
