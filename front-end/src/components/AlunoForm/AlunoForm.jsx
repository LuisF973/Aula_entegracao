import { useState } from "react"; // Importa os hooks do React
import AlunoService from "../../services/alunoservice"; // Importa o serviço de alunos

function AlunoForm() {
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_curso] = useState('');

    // Função para criar um novo aluno
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita o carregamento da página
        const data = await AlunoService.criar({ matricula, nome, cod_curso }); // Chama o serviço para criar o aluno
        console.log(data); // Exibe os dados retornados no console
        setMatricula(''); // Limpa o campo de matrícula
        setNome(''); // Limpa o campo de nome
        setCod_curso(''); // Limpa o campo de curso
    };

    const matriculaPattern ="^[A-Z][0-9]{3}$"; // Define o padrão para a matrícula (ex: A123)

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text" // matrícula do aluno
                    placeholder="Matrícula (ex: A123)"
                    value={matricula} // Linkando a variável de estado
                    pattern={matriculaPattern} // Validando com o regex
                    onChange={(e) => setMatricula(e.target.value)} // Atualiza o estado
                    maxLength={4}
                    minLength={4}
                    required // Campo obrigatório
                />
                <input
                    type="text" // nome do aluno
                    placeholder="Informe o nome do aluno"
                    value={nome} // Linkando a variável de estado
                    onChange={(e) => setNome(e.target.value)} // Atualiza o estado
                    required // Campo obrigatório
                />
                <input
                    type="text" // curso do aluno
                    placeholder="Informe o cod_curso do aluno"
                    value={cod_curso} // Linkando a variável de estado
                    onChange={(e) => setCod_curso(e.target.value)} // Atualiza o estado
                    required // Campo obrigatório
                />
                <button type="submit">Cadastrar</button> {/* Botão para salvar o aluno */}
            </form>
        </>
    );
}

export default AlunoForm; // Exporta o componente para ser utilizado em outros lugares