import React from 'react';

export default function App() {
    return (
        <div className="container">
            <form>
                <textarea className="form-control" placeholder="Saisissez votre post"></textarea>
                <button className="btn btn-success"></button>
            </form>
            <div className="posts row rows-cols-1 row-cols-md-2">
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}