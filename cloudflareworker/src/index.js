addEventListener("fetch", (event) => {
  // If this  is coming from image resizing worker,
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const imageA =
    "https://imagedelivery.net/Upv7Q0MhroCOJHZCX_pZgA/9b0fabf0-8a5d-4d84-29d7-c438eb002d00/public";
  const imageB =
    "https://imagedelivery.net/Upv7Q0MhroCOJHZCX_pZgA/2b143d0b-006a-47e7-db0e-ce523edf5300/public";
  const imageFinal = Math.random() > 0.5 ? imageA : imageB;



  const imageRequest = new Request(imageFinal);

  return fetch(imageRequest);
  return new Response('Invalid "image" value', { status: 400 });
}
