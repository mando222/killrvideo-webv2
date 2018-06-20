
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row } from 'react-bootstrap';

import * as HomeActions from 'actions/home';
import * as AuthActions from 'actions/authentication';

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
          <VideoPreviewList title="Recent Videos" {...recentVideos} {...recentVideosActions} />
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
  const { authentication: { currentUser: { isLoggedIn } }, home: { recentVideos, recommendedVideos, myVideos } } = state;
  return {
    isLoggedIn,
    recentVideos,
    recommendedVideos,
    myVideos
  };
}

function mapDispatchToProps(dispatch) {
  return {
    recentVideosActions: bindActionCreators(HomeActions.recentVideos, dispatch),
    recommendedVideosActions: bindActionCreators(HomeActions.recommendedVideos, dispatch),
    myVideosActions: bindActionCreators(HomeActions.myVideos, dispatch),
    getIsLoggedIn: bindActionCreators(AuthActions.getIsLoggedIn, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);