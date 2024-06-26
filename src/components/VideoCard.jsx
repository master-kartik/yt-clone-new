import { Link } from "react-router-dom"
import { Typography, Card, CardContent, CardMedia } from "@mui/material"
import { CheckCircle } from "@mui/icons-material"

const VideoCard = ({video : {id : {videoId}, snippet}}) => {
  
  const randomNumber = Math.floor(Math.random() * 3) + 1;
   const image = `https://img.youtube.com/vi/${videoId}/maxres${randomNumber}.jpg`;
  return (
    <Card sx={{width: {  xs: '100%', sm: '358px', md: '320px'}, boxShadow: 'none' , border:'1px solid gray',borderRadius: '5px'}}>
      <Link to={`/video/${videoId} `}>
        <CardMedia 
         
        //  image={snippet?.thumbnails?.high?.url}
        image={snippet?.thumbnails?.high?.url || image}
         alt={snippet?.title}
         sx={{width:{xs: '100%', sm:'358px', md:'320px'}, height: 180}}
         />
         <CardContent sx={{backgroundColor: "#151515"  ,height: "106px"}}>
         <Link to={`/video/${videoId} ` } >
         <Typography variant="subtitle1" fontWeight={"bold"} color={"#fff"}>
          {snippet?.title.slice(0,60)}
         </Typography>
          </Link>
         <Link to={`/channel/${snippet?.channelId} ` } >
         <Typography variant="subtitle2" fontWeight={"bold"} color={"gray"}>
          {snippet?.channelTitle}
          <CheckCircle sx={{fontSize:12, color:"gray", ml:"5px" }} />
         </Typography>
          </Link>

         </CardContent>
      </Link>
    </Card>
  )
}

export default VideoCard