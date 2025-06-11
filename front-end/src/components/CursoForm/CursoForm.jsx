import { useEffect, useState } from "react"; // importas os hooks do react
import CursoService from "../../services/cursoservice"; // importa o serviço de cursos


function cursoForm(){
    const[cod_curso,setCod_curso] = useState('');
    const [nome,setNome] = useState('');

     // Funçao para criar um novo curso
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o carregamento da página
        const data = await CursoService.criar({cod_curso, nome}); // Chama o serviço para criar o curso
        console.log(data); // Exibe os dados retornados no console
        setNome(''); // Limpa o campo de nome
        setCod_curso(''); // Limpa o campo de código do curso

     }
     const codCursoPattern ="^[A-Z][0-9]{3}$"; // Define o padrão para o código do curso (ex: A123)
    
        return(
            <>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text" // código do curso
                        placeholder="Código do Curso (ex:A123)"
                        value={cod_curso}//linkando a variavel de estado
                        pattern={codCursoPattern} //validando com o regex
                        onChange={(e) => setCod_curso(e.target.value)} //Atualiza o estado
                        maxLength={4}
                        minLength={4}
                        required //campo obrigatorio
                    />
                     <input
                        type="text" // código do curso
                        placeholder="Código do Curso (ex:A123)"
                        value={nome}//linkando a variavel de estado
                        onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                        required //campo obrigatorio
                    />
                    <button type="submit">Cadastrar</button> {/* Botão para salvar o curso */}
                </form>
            
            </>
    )
}


export default cursoForm; // Exporta o componente para ser utilizado em outros lugares