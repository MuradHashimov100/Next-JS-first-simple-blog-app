  import { useState, createContext, useEffect,useContext } from "react";
  export const  blogContext = createContext();
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  export const saveHeartContext =  createContext(null); 
  export function useSaveBlog() {

    return useContext(saveHeartContext);


  }
  export const SaveProvider = ({ children }) => {
    const success = () => toast("elave edildi");
    const [hearts, setHearts] = useState([]);
    const [localItems, setLocalItems] = useState();
    const [loading, isLoading] = useState(false);
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
    const isHearted = (id) => {
      // debugger
      const index = hearts.findIndex((item) => item.id === id);
      return index !== -1;
    }
    const savedsId = hearts.map((el) => el.id);
    useEffect(() => {
      const fetchbyIdfromLocalStorage = async () => {
        const  response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data  = await response.json();
        const savedItems =   data.filter((item) => savedsId.includes(item.id));
        setLocalItems(savedItems);
      }
      fetchbyIdfromLocalStorage()
    }, [hearts])
    return(
        <saveHeartContext.Provider value={{hearts,toggleHeart,isHearted,localItems}}>
          {children}
        </saveHeartContext.Provider>
    )
  }
  export const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      return data;
    };


 


  




