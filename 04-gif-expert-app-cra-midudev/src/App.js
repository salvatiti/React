import React, {useState, useEffect} from 'react';
import './App.css';

const GIFS = [
  'https://media2.giphy.com/media/yJ1KSiTxaAw5G/200.webp?cid=ecf05e47cxpmzjtwkchcfyopovdweli47yf4jx47p6kizsj5&rid=200.webp&ct=g',
  'https://media0.giphy.com/media/SWjCswum5dc0E/100.webp?cid=ecf05e47cxpmzjtwkchcfyopovdweli47yf4jx47p6kizsj5&rid=100.webp&ct=g'
];


function App() {
  const  [gifs, setGifs] = useState([GIFS]);
  const aaaaaa = 1;
  useEffect(function () {
    console.log('hola')
  })
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif} / >)
        }
       
      </section>
    </div>
  );
} 

export default App;
