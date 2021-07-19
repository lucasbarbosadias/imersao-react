import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequests(request, response) {

  if(request.method === 'POST') {
    const TOKEN = 'd88349c17b918b9edbb510ce20fbed';
    const client = new SiteClient(TOKEN);

    // Validar os dados, amtes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "968794", //ID do model de "Communities" criado pelo Dato
      ...request.body,
      // title: "Comunidade de Teste",
      // imageUrl: "https://github.com/lucasbarbosadias.png",
      // creatorSlug: "lucasbarbosadias"
    })

    console.log(registroCriado);

    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado,
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}