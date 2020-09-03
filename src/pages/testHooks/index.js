import React, { useState, useEffect } from 'react';

function Hooks() {
    const [repositories, setRepositories] = useState([]);
    const [location, setLocation] = useState({});

    useEffect(() => {
        const watchId = navigator.geolocation.watchPosition(posicaoRecebida)

        return () => navigator.geolocation.clearWatch(watchId);
    }, []);

    function posicaoRecebida({ coords }) {
        const { latitude, longitude } = coords;
        console.log(latitude, longitude);

        setLocation({ latitude, longitude });
    }

    useEffect(() => {
        async function buscaRepositories() {
            const response = await fetch('https://api.github.com/users/Decston/repos');
            const data = await response.json();
            setRepositories(data);
        }
        
        buscaRepositories();
    }, []);

    useEffect(() => {
        const filtered = repositories.filter(repository => repository.favorite);

        document.title = `Você tem ${filtered.length} favoritos!`;
    }, [repositories]);

    function favoritaRepositorio(id) {
        const newRepositories = repositories.map(repository => {
            return repository.id === id ? { ...repository, favorite: !repository.favorite } : repository;
        });
        
        setRepositories(newRepositories);
    }

    return (
        <>  
            <h1>Repositorios Do GitHub</h1>
            <ul>
                { repositories.map(repository => (
                    <li key={repository.id}>
                        {repository.name}
                        {repository.favorite && <span>(Favorito)</span>}
                        <button onClick={() => favoritaRepositorio(repository.id)}>
                            {repository.favorite === true ? <span>Desfavoritar</span> : <span>Favoritar</span> }
                        </button>
                    </li>
                )) }
            </ul>
            <div>
                <h1>Localização do Usuário:</h1>
                Latitude: {location.latitude}
                <br/>
                Longitude: {location.longitude}
            </div>
        </>
    );
}

export default Hooks;