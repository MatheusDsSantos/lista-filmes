import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function AddMovieForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [reason, setReason] = useState("");

  const clear = () => {
    setTitle("");
    setYear("");
    setReason("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !year.trim()) return;
    onAdd({ title, year, reason });
    clear();
  };

  return (
    <Card as={motion.div} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} layout className="w-full max-w-xl mx-auto mb-6">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Adicionar Filme / Série</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Título"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="input input-bordered w-full rounded-lg p-2"
              required
            />
            <input
              type="number"
              placeholder="Ano"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="input input-bordered w-full rounded-lg p-2"
              required
            />
          </div>
          <textarea
            placeholder="Motivo para assistir"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="textarea textarea-bordered w-full h-24 rounded-lg p-2"
          />
          <Button type="submit" className="w-full md:w-auto">Adicionar</Button>
        </form>
      </CardContent>
    </Card>
  );
}