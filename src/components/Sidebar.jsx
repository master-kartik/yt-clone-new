import { Stack } from "@mui/material"
import { categories } from "../utils/constants"
const Sidebar = ({selectedCategory, setselectedCategory}) => {
  return (
    <Stack 
    direction={"row"}
    sx={{
        overflowY:"auto",
        height: {sx: 'auto', md:'95%'},
        bgcolor:"#151515",
        pr:1,
        pl:1,
        ml:-2,
        borderRadius:'5px',
        flexDirection: {md:'column'},
    }}
    >
        {categories.map((category)=>(
            <button className="category-btn"
            style={{background: category.name === selectedCategory && '#CD1818',
            color:'white',
            borderRadius:'5px'
            }}
            onClick={()=>{
                setselectedCategory(category.name)
            }}
            key={category.name}
            >
                <span style={{
                    color : category.name === selectedCategory ? 'white' : 'red', marginRight: '15px'
                }}>{category.icon}</span>
                <span style={{opacity: category.name === selectedCategory ? '1':'1'}}>{category.name}</span>
            </button>
        ))}
         


    </Stack>
  )
}

export default Sidebar