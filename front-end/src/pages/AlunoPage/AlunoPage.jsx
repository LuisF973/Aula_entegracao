import React from "react";
import ListarAluno from "../../components/listarAluno/ListarAluno";
import AlunoForm from "../../components/AlunoForm/AlunoForm";



function pageAluno() {
    return (
        <>
      <ListarAluno />
      <AlunoForm />
        </>
    );
}

export default pageAluno; // Exporta o componente para ser utilizado em outros lugares