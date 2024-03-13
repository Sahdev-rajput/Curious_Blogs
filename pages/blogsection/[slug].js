import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'
import styles from "../../styles/Blogs.module.css"

const Slug = (props) => {
  const router=useRouter()
  const {slug}=router.query
  const [Blog, setBlog] = useState(props.data)
      // useEffect(() => {
      //   if(!router.isReady)
      //   {
      //      return;
      //   }
      //   fetch(`http://localhost:3000/api/postblog?slug=${slug}`)
      //   .then(response => response.json())
      //   .then(parsed => {
      //     console.log(parsed);
      //     setBlog(parsed);
      //   }); 
      // }, [router.isReady])
      function renderMarkdownToHTML(markdown) {
        return {__html: markdown};
      }
  // This is called destructuring in Javascript
  return (
    <>  
    <style jsx>
      {
        `
        .heading
        {
          color:red
        }
        `
      }
    </style>
    <div className={styles.content}>
         <h1 className='heading'>Title of the page: {Blog && Blog.slug}</h1>
         <hr/>
          <div className={styles.desc} dangerouslySetInnerHTML={renderMarkdownToHTML(Blog.description)} />;
         </div>
    </>
  )
}

export async function getServerSideProps(context) {
  const {slug}=context.query;
        const res = await fetch(`http://localhost:3000/api/postblog?slug=${slug}`)
        const data = await res.json()
  
  // Pass data to the page via props
  return { props: {data} }
}
export default Slug