import React from 'react';

export default function Card({ id, download_url, author, url }) {
    return (
        <>
            <div className="card" style={{ width: '18rem' }} key={id}>
                <img src={download_url} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary" style={{ maxWidth: '80%' }}>{url}</a>
                </div>
            </div>
        </>
    )
}