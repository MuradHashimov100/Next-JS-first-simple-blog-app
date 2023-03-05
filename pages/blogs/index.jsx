import styles from './blog.module.scss';
import { useSaveBlog } from '@/store/context';
import { ToastContainer, toast } from "react-toastify";
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import Image from 'next/image';
// images
import blog1 from '../../assets/images/blog1.svg';
import view from  '../../assets/images/view.svg';
// images 
import Link from 'next/link';
const notify = () => toast("Wow so easy!");

const Blog = ({ reviews }) => {
const { isHearted, hearts, toggleHeart} = useSaveBlog();
    return(
      <>
      <div className={styles.blogs}>
          <h3>Blog</h3>
          <div className={styles.blogsbox}>
          {
            reviews?.slice(0,6).map((el) => {
             return(
              <div className={styles.box}>
              <Image className={styles.blogimg} src={blog1}/>
              <p className={styles.blogTitle}>{el.title}</p>
              <p className={styles.blogbody}>{el.body}</p>
              <div className={styles.bottominfo}>
                <span>June 30, 2020</span>
                <span className={styles.blogright}>
                  <Image src={view}/>
                  <span>368 read</span>
                </span>
                <Link className={styles.details} href={`/details/${el.id}`} as={`/details/${el.id}`}>Details</Link>
                <span className={styles.button}   onClick={() => toggleHeart(el.id) }>
                  {
                    isHearted(el.id) ?   <FaHeart/> : <FaRegHeart/>     
                  }
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
              </div>
             )
            })
          }
          </div>
      </div>
      </>
    )
}
export async function getServerSideProps(){
  const data = await fetchPosts();
  return {
    props: {
      reviews: data.slice(0, 6),
    },
  };
}



export default Blog;
