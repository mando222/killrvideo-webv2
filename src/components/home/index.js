
import React from 'react';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';
import {recentVideos,recommendedVideos,myVideos} from '../../actions/VideoActions'
import {getIsLoggedIn} from '../../actions/UserActions'

import VideoPreviewList from '../videos/video-preview-list';

class Home extends React.Component {
  componentDidMount() {
    if (this.props.isLoggedIn === null) {
      this.props.getIsLoggedIn();
    }
  }
  
  render() {
    const {
      isLoggedIn, recentVideos, recommendedVideos, myVideos,
      recentVideosActions, recommendedVideosActions, myVideosActions
    } = this.props;

    let recommendedVideosList, userVideosList;
    if (isLoggedIn === true) {
      recommendedVideosList = <VideoPreviewList title="Recommended for You" {...recommendedVideos} {...recommendedVideosActions} />;
      userVideosList = <VideoPreviewList title="My Videos" {...myVideos} {...myVideosActions} />;
    }

    return (
      <div id="video-lists" className="body-content container">
        <Row id="recent-videos">
          {/*<VideoPreviewList title="Recent Videos" {...recentVideos} {...recentVideosActions} />*/}
        </Row>
        <Row id="recommended-videos">
          {recommendedVideosList}
        </Row>
        <Row id="user-videos">
          {userVideosList}
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.UserReducer.currentUser.isLoggedIn,
    recentVideos: state.VideoReducer.recentVideos,
    recommendedVideos: state.VideoReducer.recommendedVideos,
    myVideos: state.VideoReducer.myVideos
  };
}


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        recentVideos: () => {
            dispatch(recentVideos())
        },
        recommendedVideos: () => {
            dispatch(recommendedVideos())
        },
        myVideos: () => {
            dispatch(myVideos())
        },
        getIsLoggedIn: () => {
            dispatch(getIsLoggedIn())
        }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);