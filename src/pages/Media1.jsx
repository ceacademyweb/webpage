import { useEffect, useState } from 'react';
import api from '../api/api.js';
import { useNavigate } from 'react-router-dom';
import addClass from '../utils/addClass.js';
import Video2 from '../components/Video2';

const Media1 = () => {
  addClass();
  const navigate = useNavigate();
  const [videos, setVideos] = useState([]);
  const [copy, setCopy] = useState();
  const [user, setUser] = useState();
  useEffect(() => {
    const isLogged = sessionStorage.getItem('token');
    if (!isLogged || JSON.parse(sessionStorage.getItem('user')).email) {
      navigate('/login');
    }
    api
      .get('/videos')
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => setError(err));
    setUser(JSON.parse(sessionStorage.getItem('user')));
    console.log(user);

    setCopy(
      `${JSON.parse(sessionStorage.getItem('user')).email.split('@')[0]}@`
    );
  }, []);
  return (
    <section className="section Media">
      <h1 style={{ textAlight: 'center' }}>Face Uno</h1>
      <div className="video-container">
        <Video2
          src="https://stunning-mandazi-a6d131.netlify.app/rr-nuevo.mp4"
          copy={copy}
        />
        {/* {videos.map((video) => (
          <Video2 key={video.name} src={video.url} copy={copy} />
        ))} */}
      </div>
    </section>
  );
};

export default Media1;
