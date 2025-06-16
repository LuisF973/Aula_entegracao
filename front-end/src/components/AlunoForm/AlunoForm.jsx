import { useState, useEffect } from "react"; // Importa os hooks do React
import AlunoService from "../../services/alunoservice"; // Importa o serviço de alunos

function AlunoForm({ alunoEditando, aoSalvar }) { // Define o componente com props
    const [matricula, setMatricula] = useState('');
    const [nome, setNome] = useState('');
    const [cod_curso, setCod_curso] = useState('');

    useEffect(() => {
        if (alunoEditando) {
            setMatricula(alunoEditando.matricula);
            setNome(alunoEditando.nome);
            setCod_curso(alunoEditando.cod_curso);
        }
    }, [alunoEditando]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (alunoEditando) {
            await AlunoService.atualizar(matricula, { nome, cod_curso });
            alert(`Aluno ${nome} atualizado com sucesso!`);
        } else {
            const data = await AlunoService.criar({ matricula, nome, cod_curso });
            alert(`Aluno ${nome} cadastrado com sucesso!`);
            console.log(data);
        }
        setMatricula('');
        setNome('');
        setCod_curso('');
        aoSalvar(); // Chama a função callback após salvar
    };

    const matriculaPattern = "^[A-Z][0-9]{3}$";

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Matrícula (ex: A123)"
                value={matricula}
                pattern={matriculaPattern}
                onChange={(e) => setMatricula(e.target.value)}
                maxLength={4}
                minLength={4}
                required
            />
            <input
                type="text"
                placeholder="Informe o nome do aluno"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
            />
            <input
                type="text"
                placeholder="Informe o cod_curso do aluno"
                value={cod_curso}
                onChange={(e) => setCod_curso(e.target.value)}
                required
            />
            <button type="submit">{alunoEditando ? "Atualizar" : "Cadastrar"}</button>
        </form>
    );
}

export default AlunoForm;
