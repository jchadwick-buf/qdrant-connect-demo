import { createGrpcTransport } from "@bufbuild/connect-node";
import { Qdrant } from "./gen/qdrant_connect";
import { createPromiseClient } from "@bufbuild/connect";

const transport = createGrpcTransport({
  baseUrl: 'http://localhost:6334',
  httpVersion: '2',
  keepSessionAlive: true,
  useBinaryFormat: true
});

async function main() {
  const client = createPromiseClient(Qdrant, transport);
  const res = await client.healthCheck({});
  console.log(res);
}

void main();