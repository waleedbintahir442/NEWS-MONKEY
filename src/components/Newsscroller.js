import React, { useState, useEffect, useContext } from 'react';
import './Scroll.css';
import { SearchContext } from './SearchContext';
import Scrollitem from './Scrollitem';

export default function Newsscroller() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [animating, setAnimating] = useState(false);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&sortBy=publishedAt&apiKey=80153bbc79d340f58eb2f7b651e468cd`);
                const data = await response.json();
                setArticles(data.articles.map((article, index) => ({ ...article, uniqueId: `${article.url}_${index}` })));
            } catch (error) {
                console.error('Error fetching news:', error?.map);
            } finally {
                setLoading(false);
            }
        };

        if (searchValue) {
            fetchNews();
        }
    }, [searchValue]);

    const handleNext = () => {
        if (page * 3 < articles.length) {
            setAnimating(true);
            setTimeout(() => {
                setPage(page + 1);
                setAnimating(false);
            }, 300);
        }
    };

    const handlePrev = () => {
        if (page > 1) {
            setAnimating(true);
            setTimeout(() => {
                setPage(page - 1);
                setAnimating(false);
            }, 300);
        }
    };

    return (
        <div className="news-container my-4">
            

            {loading ? (
                <p className='load'>Loading...</p>
            ) : articles.length === 0 ? (
                <p className='nload'>No results found</p>
            ) : (
                <div className="news-scroller-wrapper">
                    <div className="arrow left-arrow" onClick={handlePrev}>&larr;</div>
                    <div className={`news-scroller ${animating ? 'animating' : ''}`}>
                        {articles.slice((page - 1) * 3, page * 3).map((element) => (
                            <div className='news-item' key={element.uniqueId}>
                                <Scrollitem
                                    item={element.title ? element.title.slice(0, 54) : ""}
                                    imgurl={!element.urlToImage ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" : element.urlToImage}
                                    url={element.url}                              
                               />
                            </div>
                        ))}
                    </div>
                    <div className="arrow right-arrow" onClick={handleNext}>&rarr;</div>
                </div>
            )}
        </div>
    );
}
