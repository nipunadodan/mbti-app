import React from "react";
import Header from "./Header";
import Footer from "./common/Footer";

const Home = () => {
  return (
      <>
          <Header />
          <p className={'text-center text-gray-700 dark:text-gray-200 my-6 md:w-1/2 mx-auto'}>Your favourite MBTI comparison tool has got more functionality, and it is a PWA now, means; you can install it as an app and can use completely offline. In addition to functional improvements, new version sports a dark mode as well.</p>
          <p>{process.env.REACT_APP_VERSION}</p>
          <Footer/>
      </>
  )
}

export default Home