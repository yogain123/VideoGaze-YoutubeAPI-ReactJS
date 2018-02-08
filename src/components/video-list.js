import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//import VideoListItems from './video-list-items.js';


//functioal Component
const VideoList = (props)=>{
  if(props.videos.length==0){
        return <div> loadin...  </div>;
      }
  //console.log("holaaaaa");
  //console.log(props.videos[0].id.videoId);
  const hola = props.videos.map(item=>{
    return (
      <li className="list-group-item" key={item.etag} onClick={()=>props.onVideoSelected(item)}>
      <div className="video-list-media">
        <div className="media-left">
          <img className="media-object" src={item.snippet.thumbnails.default.url} />
        </div>
      </div>
     </li>
    );
  });
    return (<ul className="col-md-4">
      {hola}
    </ul>
  );


}

export default VideoList;
