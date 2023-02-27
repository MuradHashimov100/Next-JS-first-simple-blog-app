import styles from './blog.module.scss';

import blogImage from '../../assets/images/blog.jpg';
import { useEffect,useState,useContext} from 'react';

import blogContext, {fetchPosts} from '@/store/context';
import { saveHeartContext } from '@/store/context';
import { useSaveBlog } from '@/store/context';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
const notify = () => toast("Wow so easy!");



import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Blog = ({ reviews }) => {

  // console.log(reviews);

  const { isHearted, hearts, toggleHeart} = useSaveBlog();

  // const {isHearted, toggleHeart } = useContext(blogContext);

  console.log(hearts)

  

    return(
        <div className={styles.blogs} >
          {/* <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4> */}
          {
            reviews.slice(0,6).map((el,key) => {
               return  <div key={el.id} className={styles.blog}>
               <img className={styles.img} src='https://fakeimg.pl/300/' alt="" />
               <h3 className={styles.h3}>{el.title}</h3>
               
               <Link style={{textDecoration:'none'}} href={`/Details/${el.id}`} as={`/Details/${el.id}`}>
               <p className={styles.p}>
                {el.body}
               </p>
               </Link>
                {/* <p className={styles.p}>
                {el.body}
               </p> */}
               {/* <FaHeart /> */}
               {/* <FaRegHeart /> */}
               <button className={styles.button}   onClick={() => toggleHeart(el.id) }>
                  {
                    isHearted(el.id) ?  <FaHeart/> : <FaRegHeart/>

                    
                  }
               </button>
               <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
/>

              
               
           </div>
            })
           }
        </div>
    )
}



export async function getServerSideProps(){
  const data = await fetchPosts();

  // console.log('data:', data);

  return {
    props: {
      reviews: data.slice(0, 6),
    },
  };
}

export default Blog;

