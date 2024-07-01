import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Paper, IconButton } from "@mui/material"
import { Search } from "@mui/icons-material"
const SearchBar = () => {
  const navigate =useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }
  return (
    <Paper 
        component={"form"}
        onSubmit={handleSubmit}
        sx={{borderRadius:'5px',width:'975px', bgcolor:'black',color:'black',border: '1px solid #e3e3e3' , pl: 2, boxShadow: 'none', mr: {sm:5}}}
       
    >
        <input className="search-bar"
        placeholder="Search"
        style={{backgroundColor:'black', color:'white'}}
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}

        />
        <IconButton type="submit" sx={{ml: "550px", color:"red"}}>
            <Search  />
        </IconButton> 
    </Paper>
  )
}

export default SearchBar