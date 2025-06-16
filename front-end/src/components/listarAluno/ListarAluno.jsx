import { useEffect, useState } from "react";
import AlunoService from "../../services/alunoservice";
import AlunoForm from "../AlunoForm/AlunoForm"; // Importa o formulário de aluno

function ListarAluno() {
    const [alunos, setAlunos] = useState([]);
    const [alunoEditando, setAlunoEditando] = useState(null); // Estado para o aluno sendo editado
    const [exibirFormulario, setExibirFormulario] = useState(false); // Controle de visibilidade do formulário

    const carregar = async () => {
        const lista = await AlunoService.listar();
        setAlunos(Array.isArray(lista) ? lista : []);
    };

    const deletar = async (matricula, nome) => {
        const confirmado = window.confirm(`Deseja mesmo deletar o aluno ${nome}?`);
        if (confirmado) {
            const res = await AlunoService.deletar(matricula);
            if (res) {
                alert('Aluno deletado com sucesso!');
                carregar();
            } else {
                alert('Erro ao deletar!');
            }
        }
    };

    const iniciarEdicao = (aluno) => {
        setAlunoEditando(aluno);
        setExibirFormulario(true);
    };

    const aoSalvar = () => {
        setAlunoEditando(null);
        setExibirFormulario(false);
        carregar(); // Atualiza a lista após salvar
    };

    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <h1>Listagem de Alunos</h1>

            {exibirFormulario && (
                <AlunoForm alunoEditando={alunoEditando} aoSalvar={aoSalvar} />
            )}

            {!exibirFormulario && (
                <>
                    {alunos.length === 0 ? (
                        <p>Nenhum aluno cadastrado no sistema.</p>
                    ) : (
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Matrícula</th>
                                    <th>Nome</th>
                                    <th>cod_curso</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {alunos.map((a) => (
                                    <tr key={a.matricula}>
                                        <td>{a.matricula}</td>
                                        <td>{a.nome}</td>
                                        <td>{a.cod_curso}</td>
                                        <td>
                                            <button onClick={() => iniciarEdicao(a)}>Editar</button>
                                            <button onClick={() => deletar(a.matricula, a.nome)}>Excluir</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </>
            )}
        </>
    );
}

export default ListarAluno;
