
module.exports = {

    login(req, res) {

        (async () => {
            let pessoa = JSON.parse(req.body.pessoa)
            const database = require('../src/database/db');
            const Usuario = require('../src/database/usuario')
            await database.sync()

            const usuario = await Usuario.findAll({
                where: {
                    nome: pessoa.nome,
                    senha: pessoa.senha
                }
            })
            if (usuario == '') {
                res.send('usuario ou senha incorretos')
            } else {
                res.send('usuario encontrado')
            }



        })();

    },

    send(req, res) {
        (async () => {
            let cliente = JSON.parse(req.body.cliente)
            const database = require('../src/database/db');
            const clientes = require('../src/database/cliente')
            await database.sync()

            const novoCliente = await clientes.create({
                nome: cliente.nome,
                email: cliente.email,
                data: cliente.dia,
                autoemail: cliente.diaemail
            })



            const nodemailer = require("nodemailer");

            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "lucasgears3@gmail.com",
                    pass: "Tchutchu10"
                }
            })
            

            transporter.sendMail({
                from: "Lucas balsante <lucasgears3@gmail.com>",
                to: cliente.email,
                subject: "Nota fiscal",
                html: `<h2>Ola, senhor(a) ${cliente.nome}.</h2>
            <br>
            <h2>Agradeçemos muito pela preferência e pela confiança esperamos você para mais compras no futuro.</h2><br>
            <h2>Segue abaixo o link da sua nota fiscal, lembrando sempre que a garantia vale para qualquer lugar do Brasil que venda a marca do produto adquirido</h2><br>
            ${cliente.anexo}`

            



            }).then(message => {
                return res.send('Email enviado com sucesso!')
            }).catch(err => {
                
                return res.send('Erro, email não enviado!!')
            })



        })();

    },

    automessage(req, res) {
        (async () => {

            let cliente = JSON.parse(req.body.cliente)
            const database = require('../src/database/db');
            const clientes = require('../src/database/cliente')
            
            await database.sync()

            const { count, rows } = await clientes.findAndCountAll({
                where: {
                    autoemail: cliente.dia
                }
            })

        





            if (count > 0) {



                const nodemailer = require("nodemailer");

                let transporter = nodemailer.createTransport({
                    host: "smtp.gmail.com",
                    port: 465,
                    secure: true,
                    auth: {
                        user: "lucasbalsante3@gmail.com",
                        pass: "lucasboladao123"
                    }
                })
                for (let i = 0; i <= count; i++) {

                    transporter.sendMail({
                        from: "Lucas balsante <lucasbalsante3@gmail.com>",
                        to: rows[i].email,
                        subject: "Maria Victoria oticas",
                        html: `<h2>Ola, senhor(a) ${rows[i].nome}.</h2>
                                <br>
                                <h3>As lojas Maria Victoria otica estão aqui para te dar uma excelente noticia e te lembrar que fazem 3 meses que você adiquiriu seu oculos esperamos muito que esteja gostando.</h3><br>
                                <h3>E para alegrar seu dia estamos te enviando um cupom de desconto de 15% na sua proxima compra valido por um ano a partir do envio desse e-mail</h3><br>
                               `



                    }).then(message => {

                    }).catch(err => {

                    })


                }
            } else {
                console.log('suavbao')
            }



        })();
    },

    lista(req, res) {
        let nome = JSON.parse(req.body.nome)

        let listaclientes = {
            id: 0,
            nome: "",
            email: "",
            data: ""
        }
        
        let listaid = []
        let listanome = []
        let listaemail = []
        let listadata = []

        if (nome == '') {
            (async () => {
                const database = require('../src/database/db');
                const cliente = require('../src/database/cliente')
                await database.sync()
                const { count, rows } = await cliente.findAndCountAll()

                for (let i = 0; i < count; i++) {
                    listaid.push(rows[i].id)
                    listanome.push(rows[i].nome)
                    listaemail.push(rows[i].email)
                    listadata.push(rows[i].data)

                }
                
                listaclientes.id = listaid
                listaclientes.nome = listanome
                listaclientes.email = listaemail
                listaclientes.data = listadata

                JSON.stringify(listaclientes)

                
                return res.send(listaclientes)


            })();

        }
        else{
            (async () => {
                const database = require('../src/database/db');
                const cliente = require('../src/database/cliente')
                await database.sync()
                const { count, rows } = await cliente.findAndCountAll({
                    where: {
                        nome: nome
                    },
                })

                for (let i = 0; i < count; i++) {
                    listaid.push(rows[i].id)
                    listanome.push(rows[i].nome)
                    listaemail.push(rows[i].email)
                    listadata.push(rows[i].data)

                }
                
                listaclientes.id = listaid
                listaclientes.nome = listanome
                listaclientes.email = listaemail
                listaclientes.data = listadata

                JSON.stringify(listaclientes)

                
                return res.send(listaclientes)


            })();

        }
    },






};
