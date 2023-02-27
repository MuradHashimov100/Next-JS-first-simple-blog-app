import { blogContext , fetchPosts ,  SaveProvider} from "@/store/context"
export default function App({ Component, pageProps }) {
  return (

    <SaveProvider>
       <blogContext.Provider value={{fetchPosts}}>
       <Component {...pageProps} />
     </blogContext.Provider>
    </SaveProvider>
  )
}

