import { APIGatewayEvent } from "aws-lambda";

export const hello = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v4! Your function executed successfully!",
      queryString: event.queryStringParameters
    }),
  };
};

export const user = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      name: "Gabriel",
      location:"Brasil",
      age:18,
      queryString: event.queryStringParameters
    }),
  };
};

export const post = async (event: APIGatewayEvent) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      body: event.body
    }),
  };
};

