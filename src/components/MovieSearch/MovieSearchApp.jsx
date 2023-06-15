import axios from 'axios';
import { useEffect, useState } from 'react';
import MovieItem from './MovieItem';
import useDebounce from '../../hooks/useDebounce';
import MovieSkeleton from './MovieSkeleton';

const MovieSearchApp = () => {
    const [movies, setMovies] = useState([]);
    const [keyword, setKeyword] = useState('a');
    const queryDebounce = useDebounce(keyword, 500);
    const [loading, setLoading] = useState(false);
    const API = `https://api.themoviedb.org/3/search/movie?api_key=4388d1d81db906bc38beed7b35d0b533&query='${queryDebounce}'`;

    const handleChange = (e) => {
        setLoading(true);
        setKeyword(e.target.value);
    };

    useEffect(() => {
        setLoading(true);

        async function fetchData() {
            const response = await axios.get(API);
            if (response.data.results) {
                setMovies(response.data.results);
                setLoading(false);
            }
        }
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API]);

    return (
        <div className="flex flex-col gap-y-5 w-full">
            <form>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                    Search
                </label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                        </svg>
                    </div>
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-teal-600 outline-none"
                        placeholder="Search movies ..."
                        onChange={handleChange}
                    />
                </div>
            </form>

            {/* Loading */}
            {loading && (
                <div className="grid grid-cols-4 gap-5 h-full">
                    {movies.length > 0 &&
                        movies.map((index) => <MovieSkeleton key={index} />)}
                </div>
            )}

            {/* Fetching */}
            <div className="grid grid-cols-4 gap-5 h-full">
                {!loading &&
                    movies.length > 0 &&
                    // eslint-disable-next-line no-unused-vars
                    movies.map((item, index) => (
                        <MovieItem key={item.id} data={item} />
                    ))}
            </div>
        </div>
    );
};

export default MovieSearchApp;
