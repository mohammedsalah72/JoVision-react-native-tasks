import React, { useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Video from 'react-native-video';
import MediaControls, { PLAYER_STATES } from 'react-native-media-controls';

const Task33 = () => {
  const videoPlayer = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerState, setPlayerState] = useState(PLAYER_STATES.PAUSED);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const onPlayPausePress = () => {
    setIsPlaying(!isPlaying);
    setPlayerState(isPlaying ? PLAYER_STATES.PAUSED : PLAYER_STATES.PLAYING);
  };

  const onSeek = (seek) => {
    videoPlayer.current.seek(seek);
  };

  const onPaused = (newState) => {
    setIsPlaying(!isPlaying);
    setPlayerState(newState);
  };

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING);
    videoPlayer.current.seek(0);
  };

  const onProgress = (data) => {
    if (!isPlaying && playerState !== PLAYER_STATES.ENDED) {
      return;
    }
    setCurrentTime(data.currentTime);
  };

  const onLoad = (data) => {
    setDuration(data.duration);
  };

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.videoWrapper} onPress={onPlayPausePress}>
        <Video
          ref={videoPlayer}
          source={require('./Resources/sample-video.mp4')} 
          style={styles.video}
          poster={require('./Resources/image10.jpg')} 
          posterResizeMode="cover"
          resizeMode="contain"
          paused={!isPlaying}
          onLoad={onLoad}
          onProgress={onProgress}
          onEnd={onEnd}
          repeat={false}
          disableFocus
        />
      </TouchableOpacity>
      <MediaControls
        duration={duration}
        isLoading={false}
        mainColor="red"
        onPaused={onPaused}
        onReplay={onReplay}
        onSeek={onSeek}
        onSeeking={() => {}}
        playerState={playerState}
        progress={currentTime}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  videoWrapper: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.4,
    alignSelf: 'center',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default Task33;
