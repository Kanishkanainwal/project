import React, { useState,useEffect } from 'react';
import { Myprovider } from './Components/AI_Context/AiContext';
import Main from './Components/Main/Main';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import VideoPage from './Components/video_chat/VideoPage';
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Layout from './Layout';
import HeroBackground from './Components/Background/Background';
import About from './Components/About/About';
const App = () => {
  let heroData = [
    {text1: "WELCOME To",text2: " Echo-Talk"},
    {text1: "A.I. assistant to  ",text2: "assist you everytime"},
    {text1: "Communicate",text2: "with others online"},
  ]
  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);
  const { history } = Myprovider();
  const [error, setError] = useState(false);
  const handleJoinButtonClick = () => {
    console.log('Join button clicked');
  };
  const router = createBrowserRouter([
   {
          path: '/',
          element:<Layout/>,
          children:[
            {
              path:"",
              element:<HeroBackground
              setPlayStatus={setPlayStatus}
              heroData={heroData[heroCount]}
              heroCount={heroCount}
              setHeroCount={setHeroCount}
              playStatus={playStatus}
            />
            },
            {
              path: '/video/:id',
              element: <VideoPage />
            },
            {
              path:'/ai',
              element:<Main/>
              
            },
            {
              path:'/about',
              element:<About/>

            }
          ]

        
   },
  ]);

  return (
    <div>

      {error ? (
        <button onClick={handleJoinButtonClick}>Join</button>
      ) : (
        <RouterProvider router={router} />
      )}
    </div>
  );
};

export default App;
