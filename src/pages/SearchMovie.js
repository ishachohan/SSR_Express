import React,{useState , useEffect} from "react";
import AddMovie from "./AddMovie/AddMovie";
import DeleteMovie from "./DeleteMovie/DeleteMovie"
import EditMovie from "./EditMovie/EditMovie"
import { useDispatch, useSelector } from "react-redux";
import {searchMovies} from '../store/movies'
import Header1 from "./Header1";
import { useParams, useSearchParams, useNavigate } from "react-router-dom"
import { filterbygenres , getMoviebyId } from "../store/movies";
import MovieDetails from "./MovieDetails/MovieDetails";

function SearchMovie() 
{
    let navigate = useNavigate ();
    const params = useParams();
    const [value,setValue]=useState(params.searchQuery);
    const [flag, setflag] = useState(false);
 
    const [data, setData] = useState([]);
    const [conditionCounter, setConditionCounter] = useState(0);

    const dispatch = useDispatch();
    const moviesList = useSelector((state) => state.list);
    const [searchParams] = useSearchParams();
      useEffect(() => {
        if(searchParams.get("movie"))
        {
            setConditionCounter(c=>c+1);
            console.log(searchParams.get("movie"))
            dispatch(getMoviebyId(searchParams.get("movie")));
            console.log(moviesList)
        }
        else
        {
            console.log(conditionCounter)
            setConditionCounter(0);
        }
    }, []); 
    console.log(conditionCounter)
    if(conditionCounter)
    {
        return(
            <MovieDetails key={conditionCounter} movie={moviesList}/>
        )
    }

    const flagHandler = () => {  
        setflag(true);   

        if(value)
        {
            dispatch(searchMovies(value));
            navigate(`${value}`);
            return;
        }
        if(searchParams.get("genre"))
        {
            dispatch(filterbygenres(searchParams.get("genre"),"releasedate"))
            console.log(moviesList.data)
        }
        else if(searchParams.get("sortBy"))
        {
            dispatch(filterbygenres("",searchParams.get("sortBy")))
            console.log(moviesList.data)   
        }

        else if(params.searchQuery === undefined)
        {
            dispatch(searchMovies(" "));
        }
        else if(params.searchQuery)
        {
            dispatch(searchMovies(params.searchQuery)); 
        }
        else{
            dispatch(searchMovies(params.searchQuery)); 
        }
      
    };
    
    if(flag === true)
    {
        return(
            <Header1 movies={moviesList.data}/>
        );
    }
    else{
        return(
            <div className="rectangle1">
                    <input type="image" className="bitmapimageback" alt="Image"/> 
                    <AddMovie/>
                    <EditMovie/>
                    <DeleteMovie/>
                    <div>
                        <h1 className= "labelFindText">FIND YOUR MOVIE </h1>
                        <input type="text" placeholder="What do you want to watch?" name="searchtxt" id="searchtxt"
                               className="SearchInput" value = {value} onChange={e => setValue(e.target.value)}  />
                        <input type="button" className="SearchBtn" value="Search" onClick={flagHandler} id="searchbtn" name="searchbtn"/>
                    </div> 
            </div> 
    
        )
    }
}
export default SearchMovie;