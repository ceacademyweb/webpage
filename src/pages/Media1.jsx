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
  const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('user')));
  useEffect(() => {
    const isLogged = sessionStorage.getItem('token');
    setCopy(`${user.email.split('@')[0]}@`);
    if (!isLogged) {
      navigate('/login');
    }
    api
      .get('/videos')
      .then((res) => {
        setVideos(res.data);
      })
      .catch((err) => setError(err));
  }, []);
  return (
    <section className="section Media">
      <h1 style={{ textAlight: 'center' }}>Nuestros Videos</h1>
      <div className="video-container">
        <Video2
          src="https://stunning-mandazi-a6d131.netlify.app/estructura_de_mercado.mp4"
          copy={copy}
        />
        {videos.map((video) => (
          <Video2 key={video.name} src={video.url} copy={copy} />
        ))}
      </div>
    </section>
  );
};

export default Media1;
