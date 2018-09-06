import React, { Component } from "react";
import { Container, Row } from "re-pro";
import {
  VideoCard
} from "../../uncccode";
import API from "../../utils/db";

class VideoLibraryPage extends Component {
  state = {
    videos: [],
    loaded: false
  };

  componentWillMount() {
    API.getAllSessions(data => {
      data.sort(function(a, b) {
        return a.sessionNum - b.sessionNum;
      });
      const videos = [];
      for (let i = 0; i < 20; i++) {
        if (data[i].videoLink) {
          videos.push({
            title: data[i].name,
            link: data[i].videoLink,
            date: data[i].date
          });
        }
      }

      this.setState({
        videos: videos,
        loaded: true
      });
    });
  }

  render() {
    return (
      <Container>
        <h2 className="text-white">Video Library</h2>
        <Row>
          {this.state.videos.map(video => (
            <VideoCard
              sessionTitle={video.title}
              sessionVideo={video.link}
              sessionDate={video.date}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default VideoLibraryPage;
