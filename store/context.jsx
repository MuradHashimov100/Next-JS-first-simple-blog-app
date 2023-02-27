  import { useState, createContext, useEffect,useContext } from "react";

  // import data from '../data/posts.json';

  export const  blogContext = createContext();

  // export const saveBlog = createContext({
  //   isSaved: false,
  //   toggleSaved: () => {},

  // });


  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


  export const saveHeartContext =  createContext(null); 

  export function useSaveBlog() {

    return useContext(saveHeartContext);


  }




  export const SaveProvider = ({ children }) => {

    const success = () => toast("elave edildi");




    const [hearts, setHearts] = useState([]);

    useEffect(() => {
      const localHearts = JSON.parse(localStorage.getItem('hearts') || '[]');
      setHearts(localHearts);
    }, []);


    useEffect(() => {
      localStorage.setItem('hearts', JSON.stringify(hearts));
    }, [hearts]);
  
   
    const toggleHeart = (id) => {
      // debugger
      const heart = hearts.find((h) => h.id === id);
      if (heart) {
        setHearts(hearts.filter((h) => h.id !== id));
        // alert('removed from favorites')
        toast.error("silindi");
        
      } else {
        setHearts([...hearts, { id, isHearted: true }]);
        // success;
        toast.info("elave edildi");
        // alert('added to favorites');
      }
    };
  
    // const isHearted = (id) => {
    //   return hearts.some((h) => h.id === id);
    // };

    const isHearted = (id) => {
      const index = hearts.findIndex((item) => item.id === id);
      return index !== -1;
    }
    return(

        <saveHeartContext.Provider value={{hearts,toggleHeart,isHearted}}>
          {children}
        </saveHeartContext.Provider>
    )
  }

 

    
  

  export const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    };



  

    






