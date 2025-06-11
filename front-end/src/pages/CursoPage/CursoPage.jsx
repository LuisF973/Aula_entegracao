import React from "react";
import CursoForm from "../../components/CursoForm/CursoForm";
import ListarCursos from "../../components/ListarCursos/ListarCursos";


function pageCurso() {
    return (
        <>
        <CursoForm />
        <ListarCursos />
        </>
    );
}

export default pageCurso; // Exporta o componente para ser utilizado em outros lugares