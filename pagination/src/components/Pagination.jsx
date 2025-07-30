const Pagination = ({currentPage, numOfPages, handlePageChange, goToPrevPage, goToNextPage}) => {
    return (
        <div className="pagination-container">
            <button 
                disabled={currentPage === 0} 
                className="page-number" 
                onClick={() => goToPrevPage()}
            >
                ◀️
            </button>

            {[...Array(numOfPages).keys()].map((pageNum) => (
                <button key={pageNum} className={"page-number " + (pageNum === currentPage ? "active" : "")} onClick={() => handlePageChange(pageNum)}>
                {pageNum}
                </button>
            ))}
            
            <button 
                disabled={currentPage === numOfPages-1} 
                className="page-number" 
                onClick={() => goToNextPage()}
            >
                ▶️
            </button>
        </div>
    );
}

export default Pagination;