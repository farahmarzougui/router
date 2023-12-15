import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavBar from './NavBar';

const films = [
  { id: 1, title: 'la casa de papel', description: 'Description du film 1.', trailer: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6UMmM_XmFVg?si=BrV4Gg7zEqobEkp8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>', rating: 4.5 },
  { id: 2, title: '13reasons why', description: 'Description du film 2.', trailer: 'lien-trailer-2', rating: 3.8 },
  { id: 3, title: 'the orignals', description: 'Description du film 3.', trailer: 'lien-trailer-3', rating: 4.2 },
  { id: 4, title: 'vampiere diaries 4', description: 'Description du film 4.', trailer: 'lien-trailer-4', rating: 4.0 },
];

const FilmDetails = () => {
  const { id } = useParams();
  const film = films.find((f) => f.id === parseInt(id, 10));

  if (!film) {
    return <div>Film non trouvé</div>;
  }

  return (
    <div>
      <NavBar />
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <p>Rating: {film.rating}</p>
      <p>
        <strong>Trailer:</strong>{' '}
        <a href={film.trailer} target="_blank" rel="noopener noreferrer">
          Regarder le trailer
        </a>
      </p>
      <Link to="/">Retour à la liste</Link>
    </div>
  );
};

export default FilmDetails;