import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Login() {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const fileInputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) return;
    localStorage.setItem("lista_usuario_atual", trimmed);
    navigate("/lista");
  };

  const handleExport = () => {
    const data = {};
    for (const key of Object.keys(localStorage)) {
      if (key.startsWith("lista_filmes_")) {
        try {
          data[key] = JSON.parse(localStorage.getItem(key));
        } catch {
        }
      }
    }
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download =
      "lista_backup" +
      new Date().toISOString().split("T")[0] +
      ".json";
    link.click();
    URL.revokeObjectURL(url);
  };

  const triggerImport = () => fileInputRef.current?.click();

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        let importedCount = 0;
        for (const [key, value] of Object.entries(json)) {
          if (
            key.startsWith("lista_filmes_") &&
            Array.isArray(value)
          ) {
            localStorage.setItem(key, JSON.stringify(value));
            importedCount++;
          }
        }
        alert(
          `Importação concluída! ${importedCount} lista(s) adicionada(s) ao navegador.`
        );
      } catch (err) {
        alert("Falha ao importar: " + err.message);
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-md">
        <CardContent>
          <h1 className="text-2xl font-bold mb-6 text-center">
            Lembrete de Filmes
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border rounded-lg border-slate-300"
              required
            />
            <Button type="submit" className="w-full">
              Prosseguir
            </Button>
          </form>

          <div className="flex items-center justify-between mt-8">
            <Button variant="ghost" onClick={triggerImport}>
              Importar Dados
            </Button>
            <Button variant="ghost" onClick={handleExport}>
              Exportar Dados
            </Button>
          </div>
        </CardContent>
      </Card>
      <input
        ref={fileInputRef}
        type="file"
        accept=".json,application/json"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}