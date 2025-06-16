import React, {useState} from "react";
import CursoForm from "../../components/CursoForm/CursoForm";
import ListarCursos from "../../components/listarcursos/listarcursos";


function pageCurso() {
    const [cursoEditando, setCursoEditando] = useState(null); // Estado para armazenar o curso sendo editado
    // Função para lidar com o salvamento do curso

    const handleEditar = (curso) => {
        setCursoEditando(curso); // Define o curso que está sendo editado
        
    }

    const handleSalvar = () => {
        setCursoEditando(null); // Reseta o curso editando para null após salvar
    }
    return (
        <>
        <CursoForm  cursoEditando={cursoEditando} aoSalvar={handleSalvar}/>
        <ListarCursos  aoEditar={handleEditar}/>
        </>
    );
}

export default pageCurso; // Exporta o componente para ser utilizado em outros lugares