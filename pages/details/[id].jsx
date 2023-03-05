import styles from './detail.module.scss';
import { useSaveBlog } from "@/store/context";
import Link from "next/link";
import Image from "next/image";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ToastContainer, toast } from "react-toastify";
// images 
import view from  '../../assets/images/view.svg';
import blog2 from '../../assets/images/blog2.svg';
import facebook from '../../assets/images/facebook.svg';
import twitter from '../../assets/images/twitter.svg';
import github from '../../assets/images/github.svg';
import globe from '../../assets/images/globe.svg';
import { faC } from "@fortawesome/free-solid-svg-icons";
// images
const Detail = ({blog}) => {
  const  {isHearted, hearts, toggleHeart} =  useSaveBlog();
  return (
   <>
   <div className={styles.details}>
    <h2>Details</h2>
      <h3>{blog.title}</h3>
      <div className={styles.info}>
                <span>June 30, 2020</span>
                <span className={styles.blogright}>
                  <Image src={view}/>
                  <span>368 read</span>
                </span>
                 <span  onClick={() => toggleHeart(blog.id) }>
                  {isHearted(blog.id) ?  <FaHeart/> : <FaRegHeart/>}
                  </span>
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
      <Image className={styles.detailimage} src={blog2} />
     <p>
      {blog.body}
     </p>
      <div className={styles.share}>
        <span>Share on</span>
        <Image src={facebook}/>
        <Image src={github}/>
        <Image src={globe}/>
        <Image src={twitter}/>
      </div>
   </div>
   </>
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