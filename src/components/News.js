import React, { useState, useEffect, useContext } from 'react';
import Newsitem from './Newsitem';
import './News.css';
import { SearchContext } from './SearchContext';

export default function News() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const { searchValue } = useContext(SearchContext);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                setLoading(true);
                const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&sortBy=publishedAt&apiKey=80153bbc79d340f58eb2f7b651e468cd&page=${page}&pagesize=12`);
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
    }, [page, searchValue]);

    const handleNext = () => {
        setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div className="container my-4">
            <h1 style={{ color: 'white' }}>TOP HEADLINES - {searchValue}</h1>

            <div className="news-ticker">
                <div className="ticker-wrap">
                    <div className="ticker-move">
                        {articles.map((article) => (
                            <div className="ticker-item" key={article.uniqueId}>
                                <b>{article.title}</b>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {loading ? (
                <p className='load'>Loading...</p>
            ) : articles.length === 0 ? (
                <p className='nload'>No results found</p>
            ) : (
                <>
                    <div className='row'>
                        {articles.map((element) => (
                            <div className='col my-3' key={element.uniqueId}>
                                <Newsitem
                                    source={element.source.name}
                                    item={element.title ? element.title.slice(0, 54) : ""}
                                    description={element.description ? element.description.slice(0, 136) : ""}
                                    imgurl={!element.urlToImage ? "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" : element.urlToImage}
                                    author={element.author}
                                    url={element.url}
                                />
                            </div>
                        ))}
                    </div>

                    <div className='container d-flex justify-content-between my-3'>
                        <button type="button" onClick={handlePrev} className="btn btn-primary">&larr; Previous</button>
                        <span style={{ color: 'white', marginTop: '12px' }}>{page}</span>
                        <button type="button" onClick={handleNext} className="btn btn-primary">Next &rarr;</button>
                    </div>
                </>
            )}
        </div>
    );
}
