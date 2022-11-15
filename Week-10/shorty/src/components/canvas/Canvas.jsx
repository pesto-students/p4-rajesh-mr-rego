import React, { useState } from "react";
import './canvas.css';
import ListItem from '../listitem/ListItem'
import people from '../../assets/people.png';

const Canvas = () => {
    const [input, setInput] = useState('');
    const [urlList, setUrlList] = useState({});

    const getShortly = (url) => {
        if (!url) return;

        let main_url = 'https://api.shrtco.de/v2/shorten?url=' + url;

        fetch(main_url)
            .then(response => response.json())
            .then(data => parseData(main_url, data));
    }

    const parseData = (main_url, data) => {
        if (data.ok) {
            // console.log(main_url);
            // console.log('---------');
            console.log(data.result);
            setUrlList({ ...urlList, [data.result.original_link]: data.result.short_link });
            // console.log('urls', urlList);
            console.log('urls', Object.keys(urlList).length);
        } else {
            console.log(data.error);
            showError(data.error);
        }
    }

    const showError = (text) => {
        alert(text);
    }

    return (
        <div className="gpt3__header" id="home">
            <div className="gpt3__header-content">
                <h1 className="gradient__text">Shorten your links quickly</h1>
                <p>Enter a valid url and click that button to generate a short link. Use the Copy feature to take that onto your clipboard and have fun with it.</p>

                <div className="gpt3__header-content__input">
                    <input type="text" placeholder="Enter your link" onChange={(e) => setInput(e.target.value)} />
                    <button type="button" onClick={() => { getShortly(input) }}>Get Shortly'd</button>
                </div>

                {Object.keys(urlList).map((key) => {
                    return (
                        <ListItem url={key} shortly={urlList[key]}></ListItem>
                    )
                })
                }

                <div className="gpt3__header-content__people">
                    <img src={people} alt="people" />
                    <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
            </div>

            {/* <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div> */}
        </div>
    );
}

export default Canvas;