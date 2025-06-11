import { useEffect, useState } from "react"; // importa os hooks do react
import AlunoService from "../../services/alunoservice"; // importa o serviço de alunos

function ListarAluno() {
    // Estado para armazenar os alunos
    const [alunos, setAlunos] = useState([]);

    // Função para carregar a lista de alunos
    const carregar = async () => {
        const lista = await AlunoService.listar();
        console.log(lista);
        // Atualiza o estado (alunos) com a lista recebida, caso não receba um array é setado um array vazio para o estado.
        setAlunos(Array.isArray(lista) ? lista : []);
    };

    // Executa a função carregar ao montar o componente ([]).
    useEffect(() => {
        carregar();
    }, []);

    return (
        <>
            <h1>Listagem de Alunos</h1>
            {
                alunos.length === 0 ?
                    (
                        <p>Nenhum aluno cadastrado no sistema.</p>
                    )
                    :
                    (
                        <table>
                            <thead>
                                <tr>
                                    <th>Matrícula</th>
                                    <th>Nome</th>
                                    <th>cod_curso</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alunos.map((a) => (
                                        <tr key={a.matricula}>
                                            <td>{a.matricula}</td>
                                            <td>{a.nome}</td>
                                            <td>{a.cod_curso}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    )
            }
        </>
    );
}

export default ListarAluno;