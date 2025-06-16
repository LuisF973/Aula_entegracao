import React, { useState } from "react";
import ListarAluno from "../../components/listarAluno/ListarAluno";
import AlunoForm from "../../components/AlunoForm/AlunoForm";

function PageAluno() {
  const [alunoEditando, setAlunoEditando] = useState(null);

  const handleEditar = (aluno) => {
    setAlunoEditando(aluno);
  };

  const handleSalvar = () => {
    setAlunoEditando(null);
  };

  return (
    <>
      <AlunoForm alunoEditando={alunoEditando} aoSalvar={handleSalvar} />
      <ListarAluno aoEditar={handleEditar} />
    </>
  );
}

export default PageAluno;
