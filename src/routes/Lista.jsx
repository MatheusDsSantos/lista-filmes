import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddMovieForm from "@/components/AddMovieForm";
import MovieTable from "@/components/MovieTable";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const PREFIX = "lista_filmes_";

export default function Watchlist() {
  const navigate = useNavigate();
  const username = localStorage.getItem("lista_usuario_atual");

  useEffect(() => {
    if (!username) navigate("/", { replace: true });
  }, [username, navigate]);

  const storageKey = `${PREFIX}${username}`;

  const [movies, setMovies] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(stored) ? stored : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(movies));
  }, [movies, storageKey]);

  const addMovie = ({ title, year, reason }) => {
    setMovies((prev) => [
      {
        id: Date.now(),
        title: title.trim(),
        year: year.trim(),
        reason: reason.trim(),
        dateAdded: new Date().toISOString()
      },
      ...prev
    ]);
  };

  const removeMovie = (id) => setMovies((prev) => prev.filter((m) => m.id !== id));

  const logout = () => {
    localStorage.removeItem("lista_usuario_atual");
    navigate("/", { replace: true });
  };

  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Olá, {username}!</h1>
        <Button variant="ghost" onClick={logout}>Trocar usuário</Button>
      </div>

      <AddMovieForm onAdd={addMovie} />
      <MovieTable movies={movies} onRemove={removeMovie} />
    </motion.main>
  );
}