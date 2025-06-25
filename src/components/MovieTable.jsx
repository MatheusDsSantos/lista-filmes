import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function MovieTable({ movies, onRemove }) {
  if (!movies.length) {
    return <p className="text-center text-slate-500 mt-10">Nenhum filme ou série adicionada ainda.</p>;
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} layout className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow-sm">
        <thead className="bg-slate-100">
          <tr>
            <th className="p-3 text-left">Título</th>
            <th className="p-3 text-left">Ano</th>
            <th className="p-3 text-left">Motivo</th>
            <th className="p-3 text-left">Adicionado em</th>
            <th className="p-3 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.id} className="border-t last:border-none hover:bg-slate-50">
              <td className="p-3 whitespace-nowrap">{m.title}</td>
              <td className="p-3 whitespace-nowrap">{m.year}</td>
              <td className="p-3">{m.reason || "—"}</td>
              <td className="p-3 whitespace-nowrap">{new Date(m.dateAdded).toLocaleDateString()}</td>
              <td className="p-3 text-center">
                <Button variant="ghost" size="icon" onClick={() => onRemove(m.id)} aria-label="Remover">
                  <Trash2 className="w-5 h-5" />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}