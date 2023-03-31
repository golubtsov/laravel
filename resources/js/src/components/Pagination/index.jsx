import React from "react";
import "./Pagination.scss";

function Pagination({ currentPage, lastPage, setCurrentPage }) {
    const increment = () => {
        if (currentPage !== lastPage) {
            let numPage = currentPage;
            numPage++;
            setCurrentPage(numPage);
        } else {
            setCurrentPage(1);
        }
    };

    const decrement = () => {
        if (currentPage !== 1) {
            let numPage = currentPage;
            numPage--;
            setCurrentPage(numPage);
        }
    };

    return (
        <div className="blc-pagibation">
            <div className="conatainer">
                <button onClick={decrement}>{"<"}</button>
                <b>{currentPage} </b> из <b> {lastPage}</b>
                <button onClick={increment}>{">"}</button>
            </div>
        </div>
    );
}

export default Pagination;
