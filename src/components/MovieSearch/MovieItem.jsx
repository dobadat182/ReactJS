const MovieItem = ({ data }) => {
    const { id, title, overview, release_date, poster_path } = data;
    const imagePath = 'https://image.tmdb.org/t/p/original';

    return (
        <>
            <div
                className="max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg"
                key={id}
            >
                <a href="#" className="block h-[340px] overflow-hidden">
                    <img
                        className="rounded-t-lg w-full h-full object-cover transition-all duration-700 hover:scale-110"
                        src={imagePath + poster_path}
                        alt=""
                    />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 line-clamp-1">
                            {title}
                        </h5>
                    </a>
                    <p className="mb-1 font-light text-gray-500">
                        {release_date}
                    </p>
                    <p className="mb-3 font-normal text-gray-700 line-clamp-3">
                        {overview}
                    </p>
                    <a
                        href="#"
                        className="flex items-center justify-center transition-all duration-500 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                        Read more
                        <svg
                            aria-hidden="true"
                            className="w-4 h-4 ml-2 -mr-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    );
};

export default MovieItem;
