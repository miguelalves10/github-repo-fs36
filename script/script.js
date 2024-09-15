const tableBody = document.getElementById('tableBody');
const tokenGithub = 'GITHUB_TOKEN';

const nomeUsuarios = [
    { nome: 'tiagolimar' },
    { nome: 'edmaralbneto' },
    { nome: 'angelolustosa' },
    { nome: 'Gustavo1701' },
    { nome: 'miguelalves10' },
    { nome: 'antoniowgaldino' },
    { nome: 'breno-oliveira98' },
    { nome: 'rafaeoTW4' },
    { nome: 'JoaoRoberto1' },
    { nome: 'Breno-arauj' },
]

const pegarDadosUsuarios = async (username) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${username}`,
            {
                headers: {
                    Authorization: `Token ${tokenGithub}`
                }
            }
        );

        const repositoriosPublicos = response.data.public_repos;

        return {
            avatar: response.data.avatar_url,
            user: response.data.login,
            qtd_repos: response.data.repos_url,
            url_github: response.data.html_url
    }

    } catch (error) {
    console.error('Erro ao buscar usuários do GitHub', error);
}

}

async function preencherTabela(data) {


    
}


