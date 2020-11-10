exports.handler = async (event, context) => {

  const {body} = event

  try {
    const data = JSON.parse(body);

    return {
      statusCode: 200,
      body: JSON.stringify({data, context})
    }

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}