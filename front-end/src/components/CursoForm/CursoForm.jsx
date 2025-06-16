import { useEffect, useState } from "react"; // importas os hooks do react
import CursoService from "../../services/cursoservice"; // importa o serviço de cursos


function cursoForm({cursoEditando, aoSalvar}) { // duas propis
    const[cod_curso,setCod_curso] = useState('');
    const [nome,setNome] = useState('');

    useEffect(()=>{
        if(cursoEditando){
            setCod_curso(cursoEditando.cod_curso); // Atualiza o campo de código do curso com o valor do curso sendo editado
           setNome(cursoEditando.nome); // Atualiza o campo de nome com o valor do curso sendo editado
          
        }
    },[cursoEditando]); // Executa quando o cursoEditando mudar)



     // Funçao para criar ou atualizar um curso
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o carregamento da página
        if(cursoEditando){
            const cursoAtualizado = await CursoService.atualizar(cod_curso, {nome}); // Chama o serviço para atualizar o curso
            alert(`Curso ${nome} atualizado com sucesso!`); // Exibe um alerta de sucesso
        
        } else{
            const data = await CursoService.criar({cod_curso, nome}); // Chama o serviço para criar o curso
            alert(`Curso ${nome} cadastrado com sucesso!`); // Exibe um alerta de sucesso
            console.log(data); // Exibe os dados retornados no console
            }
         setNome(''); // Limpa o campo de nome
        setCod_curso(''); // Limpa o campo de código do curso   
       aoSalvar(); // Chama a função aoSalvar para notificar que o curso foi salvo

     };
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
                        disabled={!!cursoEditando} // Desabilita o campo se estiver editando um curso
                        required //campo obrigatorio
                    />
                     <input
                        type="text" // código do curso
                        placeholder="nome do curso"
                        value={nome}//linkando a variavel de estado
                        onChange={(e) => setNome(e.target.value)} //Atualiza o estado
                        required //campo obrigatorio
                    />
                    <button type="submit">{cursoEditando ? "Atualizar" : "Cadastrar"}</button> {/* Botão para salvar o curso */}
                </form>
            
            </>
    )
}


export default cursoForm; // Exporta o componente para ser utilizado em outros lugares