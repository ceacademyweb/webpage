import React, { useEffect, useState } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import api from '../api/api.js';
import Video5 from '../components/Video5.jsx';

const getVideos = async () => {
  const res = await api.get('/videos');
  console.log(res.data);
  return res.data;
};
const Video = ({ user, videos }) => {
  addClass();
  const { id } = useParams();
  const [videosNew, setVideosNew] = useState(videos);
  const [video, setVideo] = useState(videos.find((v) => v._id === id));
  useEffect(() => {
    // if (!videos) {
    console.log(id);
    console.log(videos);
    setVideo(videos.find((v) => v._id === id));
    api;
    // .get('/videos')
    // .then((res) => {
    //   setVideosNew(res.data);
    //   setVideo(res.data.find((v) => v._id === id));
    //   // console.log(videosNew);
    //   // sessionStorage.setItem('videos', res.data);
    // })
    // .catch((err) => setError(err));
    // }
  }, [id]);
  // console.log(videosNew);
  return (
    <section className="section Video">
      <h1 style={{ textAlight: 'center' }}>
        {video.pos}.{video.name}
      </h1>
      <div className="Video__container">
        <div class="Video__content">
          <Video5 url={video.url} copy={user.email} />
        </div>
        <ul className="Video__list">
          <h3>Fase 1</h3>
          {videos.map((video) => (
            <li key={video.name}>
              <NavLink to={`/face/1/${video._id}`}>
                {video.pos}. {video.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Video;
