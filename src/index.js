import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar.js';
import VideoList from './components/video-list.js';
import VideoDisplay from './components/video-display.js';
import YSearch from 'youtube-api-search';

const API = "AIzaSyD8swTOZBT0fuYGVBKjdccR1m_Eo5aFR2g";

class App extends Component
{
  constructor(props){
    super(props);
    this.state = {
      term : "CAT",
      videos: [],
      selectedVideo: null};

      this.apiRequest(this.state.term);
  }

  apiRequest(term){

  YSearch({key:API, term:term},(data)=>{

    console.log(data);
    this.setState({
      term : term,
      videos : data,
      selectedVideo : data[0]
            });

  });
}

  render(){
    return(

      <div>
        <SearchBar searchText={this.state.term} onSearchTermChange={term=>this.apiRequest(term)}/>
        <div className="col-md-12">
        <VideoDisplay video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelected={video=>this.setState({selectedVideo:video})} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
