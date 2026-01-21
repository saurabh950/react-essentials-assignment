import React, {useState, useMemo} from "react";
import './BollywoodMovies.css';

const bollywoodMovies = [
    {
        id:1,
        title:"Bade Miya Chote Miya 2",
        rating:8.9,
        genre:"Action",
        year:2025,
        director:"Bala",
        image:"https://m.media-amazon.com/images/M/MV5BN2VjYzIxN2ItN2E0MS00ODE4LThjMTgtMzE2OTM0ZmM4YjBmXkEyXkFqcGdeQXVyMTc0OTI3NjUy._V1_FMjpg_UX1000_.jpg",
        cast:["Akshay Kumar", "Tiger Shroff"]
    },
    {
        id:2,
        title:"Fighter 2",
        rating:9.2,
        genre:"Action",
        year:2027,
        director:"Siddharth Anand",
        image:"https://th.bing.com/th/id/OIP.OMGX0G8Mpf36L8o_hRsVaAHaEK?w=298&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",  
        cast:["Hrithik Roshan", "Deepika Padukon"]
    },
    {
        id:3,
        title:"Brahmastra 2",
        rating:9.3,
        genre:"Fantasy",
        year:2025,
        director:"Ayan Mukerji",
        image:"https://th.bing.com/th/id/OIP.hdnvTo0rqNbV28KCPnKc3gHaEK?w=333&h=187&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",  
        cast:["Ranbir Kapoor", "Aliya Bhatt"]
    },
    {
        id:4,
        title:"Pushpa 3",
        rating:9.5,
        genre:"Action",
        year:2026,
        director:"Sukumar",
        image:"https://th.bing.com/th/id/OIP.7J6aveUnwFaymX1oitSCLwHaL9?w=115&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",  
        cast:["Allu Arjun", "Rashmika Mandana"]
    },
    {
        id:5,
        title:"Chennai Express 2",
        rating:7.8,
        genre:"Comedy",
        year:2024,
        director:"Rohit Shetty",
        image:"https://static.toiimg.com/photo/20568143.cms?imgsize=143506",    
        cast:["ShahRukh Khan", "Deepika Padukon"]
    }
];

function BollywoodMovies(){
    //state for loading indicator
    const [loading, setLoading] = useState(false);
    // state for genre filtering
    const [selectedGenre, setSelectedGenre] = useState('All');
    // state for movies
    const [movies, setMovies] = useState(bollywoodMovies);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortBy, setSortBy] = useState('title');

    const geRatingCategory = (rating) => {
        if(rating >= 9.0) return 'blockbuster';
        if(rating >= 8.5) return 'superhit';
        if(rating >= 7.5) return 'hit';
        return 'average';
    }

    const sortedAndFilteredMovies = useMemo(()=>{
        // Filter movies first
        const filtered = movies.filter(movie => {
            const searchLower = searchTerm.toLowerCase();

            const matchesSearch = movie.title.toLowerCase().includes(searchLower) || movie.genre.toLowerCase().includes(searchLower) || movie.director.toLowerCase().includes(searchLower) || movie.cast.some(actor => actor.toLowerCase().includes(searchLower)) || movie.year.toString().includes(searchTerm);

            const matchesGenre = selectedGenre === 'All' || movie.genre === selectedGenre;

            return matchesSearch && matchesGenre;
        })
        // Then sort the filtered results

        return filtered.sort((a,b)=>{
            switch(sortBy){
                case 'rating' :
                    return b.rating - a.rating;
                case 'year':
                    return b.year - a.year;
                case 'genre':
                    return a.genre.localeCompare(b.genre);
                case 'title':
                default:
                    return a.title.localeCompare(b.title);
            }
        })
    }, [movies, searchTerm, selectedGenre, sortBy])

    const genres = ['All', ...new Set(movies.map(movie => movie.genre))]
    // {condition && <component/>}
    // condition ? valueIfTrue : valueIfFalse
    return(
        <div className="bollywood-movies">
            <h1>Bollywood Hits</h1>
            {loading ? (
                <div className="loading-spinner">
                    <p>Loading Bollywood Movies...</p>
                </div>
            ):(
                <div className="main-content">
                    <div className="search-section">
                        <input type="text" placeholder="Search Bollywood Movies..." value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} className="search-input"/>
                    </div>
                    <div className="filter-section">
                        <h4>Filter by Genre:</h4>
                        <div className="genre-buttons">
                            {genres.map(genre => (
                                <button key={genre} className={`genre-button ${selectedGenre === genre?'active':''}`} onClick={()=>setSelectedGenre(genre)}>{genre}</button>
                            ))}
                        </div>
                    </div>
                    <div className="sort-section">
                        <label htmlFor="sort-select">Sort By:</label>
                        <select id="sort-select" value={sortBy} onChange={(e)=> setSortBy(e.target.value)}>
                            <option value="title">Title (A-Z)</option>
                            <option value="rating">Rating (High - Low)</option>
                            <option value="year">Year (Newest First)</option>
                            <option value="genre">Genre (A-Z)</option>
                        </select>
                    </div>
                    {
                        (searchTerm || selectedGenre !== 'All') && (
                            <button className="clear-filters" onClick={
                                ()=>{
                                    setSearchTerm(''); 
                                    setSelectedGenre('All');
                                }
                            }>Clear All Filters</button>
                        )
                    }
                    <div className="movies-grid">
                        {sortedAndFilteredMovies.length > 0 ?
                            (sortedAndFilteredMovies.map((movie)=>(
                                <div className={`movie-card `} key={movie.id}>
                                    <img src={movie.image} alt={`${movie.title} poster`} className="movie-image"/>
                                    <h3 className="movie-title">{movie.title}</h3>
                                    <p className="movie-year">{movie.year}</p>
                                    <p className="movie-genre">{movie.genre}</p>
                                    <p className="movie-director">Dir: {movie.director}</p>
                                    <p className="movie-cast">Cast: {movie.cast.join(', ')}</p>
                                    <div className={`movie-rating rating-${geRatingCategory(movie.rating)}`}>{movie.rating}/10</div>
                                </div>
                            ))):(
                                <div className="empty-state">
                                    <h3>No Bollywood movies found!</h3>
                                    <p>{searchTerm || selectedGenre !== 'All' ? "Try adjusting your search or filter criteria" : "Start searching to find amazing movies!"}</p>
                                </div>
                            )}
                    </div>
                </div>
            )}

        </div>
    );
}

export default BollywoodMovies;