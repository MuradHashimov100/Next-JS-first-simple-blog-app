import { useRouter } from "next/router";
import styles from './detail.module.scss';
import fetch from 'isomorphic-unfetch';

import { saveHeartContext } from "@/store/context";
import { useSaveBlog } from "@/store/context";

import { FaHeart, FaRegHeart } from 'react-icons/fa';

// export const  getStaticPaths = async(blogs) => {
//   console.log(blogs)
//   const res = await  fetch('https://jsonplaceholder.typicode.com/posts');
//   const data =  await  res.json();

//   const paths = data.map((blog) => {
//     return{
//       params: {id: blog.id}
//     }
//   })

//   return{
//     paths,
//     fallback: false,

//   }
// }

// export const getStaticProps = async (context) => {
//   const id = context.params.id;

//   console.log(id)
//   console.log(id);

//   const res = await  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data =  await  res.json();

//   return{
//     props: {blogs: data}
//   }
// }
const Detail = ({blog}) => {

//  console.log(blog);

  const  {isHearted, hearts, toggleHeart} =  useSaveBlog();

  return (
    <div className={styles.detail}>
      <img src="https://fakeimg.pl/750x200/ff0000,128/000,255" alt="" />
      <div className={styles.author}>
      <span>Lorem, ipsum dolor.</span> <span><em>Lorem, ipsum.</em></span>
      <span><em>February</em> 13, 2022</span>
      </div>
      <h3>{blog.title}</h3>
      <p>
        {blog.body}
      </p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Harum reprehenderit perferendis minus corporis error vel dolores
         debitis obcaecati delectus nihil.
      </p>
      <button   onClick={() => toggleHeart(blog.id) }>
                  {
                    isHearted(blog.id) ?  <FaHeart/> : <FaRegHeart/>

                    
                  }
      </button>
    </div>
  )
}


export async function getServerSideProps(context) {
  const { id } = context.query;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const blog = await res.json();
  console.log(blog);
  return {
    props: {
      blog,
    },
  };
}


export default Detail;