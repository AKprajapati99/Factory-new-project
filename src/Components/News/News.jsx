import React from 'react';
import './News.css'; // Import the CSS file here

const News = () => {
  return (
    <section className="news-section">
      <h2>Leading companies<br />have trusted us</h2>
      <div className="container">
        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img src="https://shreeengineers.in/images2/gallery/1.jpg" alt="Trust & Co." />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined"><h2>↗</h2></span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>trust &amp; co.</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">branding</li>
              <li style={{ '--clr-tag': '#70b3b1' }} className="packaging">MORE</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img src="https://shreeengineers.in/images2/gallery/2.jpg" alt="Tonic" />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined"><h2>↗</h2></span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>tonic</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">branding</li>
              <li style={{ '--clr-tag': '#d05fa2' }} className="marketing">MORE</li>
            </ul>
          </div>
        </div>

        <div className="card">
          <div className="card-inner" style={{ '--clr': '#fff' }}>
            <div className="box">
              <div className="imgBox">
                <img src="https://shreeengineers.in/images2/gallery/3.jpg" alt="Shower Gel" />
              </div>
              <div className="icon">
                <a href="#" className="iconBox">
                  <span className="material-symbols-outlined"><h2>↗</h2></span>
                </a>
              </div>
            </div>
          </div>
          <div className="content">
            <h3>shower gel</h3>
            <p>Fill out the form and the algorithm will offer the right team of experts</p>
            <ul>
              <li style={{ '--clr-tag': '#d3b19a' }} className="branding">branding</li>
              <li style={{ '--clr-tag': '#70b3b1' }} className="packaging">packaging</li>
              <li style={{ '--clr-tag': '#d05fa2' }} className="marketing">MORE</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
