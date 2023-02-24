import { useState } from 'react';

import './App.scss';
import images from './asset/image';


function App() {

  const [index, setIndex] = useState(0)

  const nextjoke = (action, index ) =>{
    setIndex(pre => pre + 1)

    // let checkCookie = document.cookie;
    const cookies = document.cookie.split(";"); // Chuyển chuỗi cookie thành mảng các cookie
    const myCookie = cookies.find(cookie => cookie.trim().startsWith("myCookie=")); // Tìm cookie có tên "myCookie"
    const myCookieValue = myCookie ? myCookie.split("=")[1] : null; // Lấy giá trị của cookie

    if(myCookieValue){
      let arr = JSON.parse(myCookieValue)
      
      if(action === 0){
        arr.push({id: index + 1, react: 'like'})
        document.cookie = `myCookie=${JSON.stringify(arr)}`;

      }else if(action === 1){
        arr.push({id: index + 1, react: 'dislike'})
        document.cookie = `myCookie=${[JSON.stringify(arr)]}`;
      }
    } else {
      let arr = []
       if(action === 0){
        arr.push({id: index + 1, react: 'like'})
        document.cookie = `myCookie=${JSON.stringify(arr)}`;

      }else if(action === 1){
        arr.push({id: index + 1, react: 'dislike'})
        document.cookie = `myCookie=${[JSON.stringify(arr)]}`;
      }
    }
  }

  return (
    <div className="app">
        <header className="header">
          <div className="header-content">
              <img src={images.noImage} alt="logo" className="logo"/>
              <div className="header-right">
                <div className="header-infor">
                  <span className="title"><i>Handicrafted by</i></span>
                  <p>Jim HLS</p>
                </div>
                <img src={images.noImage1} alt="logo" className="avatar"/>
              </div>
          </div>
        </header>
        <div className="content">
          <div className="content-banner">
            <div className="content-banner-inner">
              <div className="content-banner-inner-text">
                <p className='text-title'>A joke a day keeps the doctor away</p>
                <span className='text'>If you joke wrong way, your teeth have to pay. (Serious)</span>
              </div>
            </div>
          </div>
          <div className="content-joke">
            <div className="content-joke-inner">
              <p hidden={ index !== 0} className='content-joke-inner-text'>
                A child asked his father, "How were people born?" So his father said, "Adam and Eva made babies, then their 
                babies became adults and made babies, and so on." The child then went to his mother, asked her the same
                question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back
                to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the
                family."
              </p>
              <p hidden={ index !== 1}  className='content-joke-inner-text'>
                Three guys stranded on a desert island find a magic lantern containing a genie, who grants them each one wish. The first guy wishes he was off the island and back home. The second guy wishes the same. The third guy says: "I’m lonely. I wish my friends were back here."
              </p>
              <p hidden={ index !== 2}  className='content-joke-inner-text'>
                Two campers are walking through the woods when a huge brown bear suddenly appears in the clearing about 50 feet
                in front of them. The bear sees the campers and begins to head toward them. The first guy drops his backpack, 
                digs out a pair of sneakers, and frantically begins to put them on. The second guy says, "What are you doing? 
                Sneakers won’t help you outrun that bear." "I don’t need to outrun the bear," the first guy says. "I just need 
                to outrun you."
              </p>
              <p hidden={ index !== 3}  className='content-joke-inner-text'>
                A guy is sitting at home when he hears a knock at the door. He opens the door and sees a snail on the porch. 
                He picks up the snail and throws it as far as he can. Three years later there’s a knock on the door. He opens 
                it and sees the same snail. The snail says, "What the hell was that all about?".
              </p>
              <p hidden={ index <= 3}  className='content-joke-inner-text finish'>
                That's all the jokes for today! Come back another day!
              </p>
              <span></span>
            </div>
            <div className="content-joke-btn">
              <div className="content-joke-btn-like" onClick={()=>{nextjoke(0, index)}}>
                This is Funny!
              </div>
              <div className="content-joke-btn-dislike" onClick={()=>{nextjoke(1, index)}}>
                This is not Funny!
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div className="footer-content">
              <p>This website is created as part of Hlsolutions program. The materials contained on this website are provided for general</p>
              <p>information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and</p>
              <p>accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.</p>
              <h5>Copyright 2021 HLS</h5>
          </div>
        </div>
    </div>
  );
}

export default App;
