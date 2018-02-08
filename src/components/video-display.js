import React,{Component} from 'react';
//import VideoListItems from './video-list-items.js';


//functioal Component
const VideoDisplay = ({video})=>{
  console.log(video);

  if(!video){
    console.log("inside null check");
        return <div>loadin...</div>;
      }


  console.log();
  const videoId = video.id.videoId;
  const url = `http://www.youtube.com/embed/${videoId}`;


  return (
    <div className="col-md-8">
  <h2>Responsive Embed</h2>
  <p>Create a responsive video and scale it nicely to the parent element with an 16:9 aspect ratio</p>
  <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={url}></iframe>
  </div>
</div>

);
}
export default VideoDisplay;
