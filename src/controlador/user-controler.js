const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date("1983-08-20")
    const idade = hoje.getFullYear() - nascimento.getFullYear()
    res.json({
        "Nome": "Leonardo",
        "Cidade": "vitoria, ES",
        "Profissão": "programador",
        "Nascimento": idade
    })
}

module.exports = calculaIdade