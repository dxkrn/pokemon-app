const Pagination = ({ page, totalPages, onPageChange }) => {
    const generatePagination = () => {
        const pages = [];

        if (page > 2) {
            pages.push(0);
            if (page > 3) pages.push('ellipsis-prev');
        }

        for (let i = page - 1; i <= page + 1; i++) {
            if (i > 0 && i < totalPages - 1) {
                pages.push(i);
            }
        }

        if (page < totalPages - 3) {
            pages.push('ellipsis-next');
        }
        if (page < totalPages - 2) {
            pages.push(totalPages - 1);
        }

        return pages;
    };

    const pages = generatePagination();

    return (
        <div className="flex flex-wrap justify-center items-center gap-2 mt-10">
            <button
                onClick={() => onPageChange(page - 1)}
                disabled={page === 0}
                className="px-6 py-2 text-sm rounded bg-transparent text-white border-violet-500 border-1 hover:bg-violet-700 disabled:opacity-50"
            >
                Prev
            </button>

            {pages.map((p, idx) => {
                if (p === 'ellipsis-prev' || p === 'ellipsis-next') {
                    return (
                        <span key={idx} className="px-2 text-gray-400 select-none">
                            ...
                        </span>
                    );
                }

                return (
                    <button
                        key={idx}
                        onClick={() => onPageChange(p)}
                        className={`px-6 py-2 text-sm rounded transition-all duration-200 
              ${page === p
                                ? 'bg-violet-500 text-white font-semibold '
                                : 'bg-transparent border-violet-500 border-1 text-white hover:bg-violet-500'}`}
                    >
                        {p + 1}
                    </button>
                );
            })}

            <button
                onClick={() => onPageChange(page + 1)}
                disabled={page === totalPages - 1}
                className="px-6 py-2 text-sm rounded bg-transparent text-white border-violet-500 border-1 hover:bg-violet-700 disabled:opacity-50"

            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
