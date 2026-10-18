import { Download } from "lucide-react";
import { Capa } from "./secoes/capa";
import { VisaoGeral } from "./secoes/visao-geral";

/** Ordem do documento. Novas seções entram nesta lista. */
const secoes = [Capa, VisaoGeral];

export function GuiaPage() {
  return (
    <div className="guia">
      <div className="guia-barra">
        <span className="font-bold">Guia RevisaFlash</span>
        <button type="button" className="guia-botao" onClick={() => window.print()}>
          <Download className="h-4 w-4" /> Baixar PDF
        </button>
      </div>
      <main className="guia-documento">
        {secoes.map((S, i) => <S key={i} />)}
      </main>
    </div>
  );
}
