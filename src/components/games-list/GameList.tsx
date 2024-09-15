import { useState, useEffect } from "react";
import { getGames, deleteGame } from "../../services/gamesService";
import { IGames } from "../../types/types";
import { GameListContainer } from "./GameList.styled";
import { TbHttpDelete } from "react-icons/tb";

const GameList = () => {
  const [games, setGames] = useState<IGames[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const games = await getGames();
      console.log(games);
      setGames(games);
    };

    fetchGames();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteGame(id);
      // Filtrar el juego eliminado localmente en lugar de hacer una nueva llamada
      setGames(games.filter((game) => game._id !== id));
    } catch (error) {
      console.error("Error deleting the game:", error);
    }
  };

  return (
    <GameListContainer>
      <h1>MongoDB GameList</h1>
      <div className="games-wrapper">
        {games.map((game) => (
          <div className="games-content" key={game._id}>
            <div className="img-wrapper">
              <TbHttpDelete 
                onClick={() => handleDelete(game._id)}
                className="del-icon" />
              <img src={game.image} alt={game.image} />
            </div>
            <div className="content">
              <p>{game.title}</p>
              <p>
                <strong>Genre: </strong>
                {game.genre}
              </p>
              <p>
                <strong>Platform: </strong>
                {game.platform}
              </p>
              <p>
                <strong>Release Date: </strong>
                {/* Formatear la fecha antes de renderizarla */}
                {new Date(game.releaseDate).toLocaleDateString()}
              </p>
            </div>
            <div className="onSale-wrapper">
              {game.onSale ? (
                <span style={{ backgroundColor: "green" }}>On Sale</span>
              ) : (
                <span style={{ backgroundColor: "gray" }}>Not on Sale</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </GameListContainer>
  );
};

export default GameList;
