import styles from "./Search.module.css";
// import Search2 from "./Search2.jsx";
import SearchButton from "./SearchButton.jsx";
import { useState } from "react";

function SearchBar() {
  return (
    <form className="search-form">
            <label htmlFor="searchInput" className="visually-hidden">Search</label>
            <input className="search-input" type="text" id="searchInput" placeholder="Search" />
            <button className="search-button" aria-label="Search">
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/967b2c74e813e923342ac40573df7fcd7d133ff3af82c53a2a0c8039a5fe91e2?apiKey=8defcdd26486412eaf7a206bf61e2658&" className="search-icon" alt="Search Icon" />
            </button>
          </form>
    // <>
    //     <button className="sign-in">Sign In</button>
    //   </header>
    //   <style jsx>{`
    //     .search-form {
    //       display: flex;
    //       align-items: center;
    //       gap: 0;
    //       font-size: 24px;
    //       color: rgba(0, 0, 0, 0.5);
    //       font-weight: 200;
    //       line-height: 150%;
    //       margin: 0 auto;
    //     }
    //     @media (max-width: 991px) {
    //       .search-form {
    //         max-width: 100%;
    //         flex-wrap: wrap;
    //       }
    //     }
    //     .search-input {
    //       font-family: Anek Bangla, sans-serif;
    //       border: 1px solid rgba(211, 211, 211, 1);
    //       border-radius: 8px 0 0 8px;
    //       background-color: rgba(255, 255, 255, 0.96);
    //       padding: 12px 16px;
    //       flex: 1;
    //     }
    //     @media (max-width: 991px) {
    //       .search-input {
    //         max-width: 100%;
    //       }
    //     }
    //     .search-button {
    //       width: 62px;
    //       aspect-ratio: 1;
    //       border: none;
    //       background: none;
    //     }
    //     .search-icon {
    //       width: 100%;
    //       object-fit: contain;
    //     }
    //     .categories {
    //       display: flex;
    //       gap: 10px;
    //       font-size: 16px;
    //       color: #3e4958;
    //       font-weight: 300;
    //       line-height: 150%;
    //       margin: 0 auto;
    //       padding: 10px;
    //     }
    //     @media (max-width: 991px) {
    //       .categories {
    //         flex-wrap: wrap;
    //       }
    //     }
    //     .category {
    //       font-family: Anek Bangla, sans-serif;
    //       border-radius: 30px;
    //       background-color: #fff;
    //       border: 1px solid rgba(62, 73, 88, 1);
    //       padding: 10px 16px;
    //     }
    //     .category:first-child {
    //       background-color: rgba(169, 234, 195, 0.62);
    //       border: none;
    //     }
    //     .sign-in {
    //       border: 1px solid rgba(0, 0, 0, 0.2);
    //       border-radius: 17px;
    //       background-color: rgba(255, 255, 255, 0.92);
    //       color: #3e4958;
    //       margin: 0 auto;
    //       padding: 15px 27px;
    //       font: 500 16px/150% Noto Sans KR, -apple-system, Roboto, Helvetica, sans-serif;
    //     }
    //     @media (max-width: 991px) {
    //       .sign-in {
    //         padding: 0 20px;
    //       }
    //     }
    //   `}</style>
    // </>
  );
}

export default SearchBar;
