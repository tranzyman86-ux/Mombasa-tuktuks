export async function onRequest(context) {
  return await fetch(`https://decap-cms-oauth-proxy.herokuapp.com/callback`, {
    method: context.request.method,
    headers: context.request.headers,
    body: context.request.body
  });
}
