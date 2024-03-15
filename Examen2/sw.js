self.addEventListener('install', event => {
    console.log("SW: service worker instalado")
    const installing = new Promise((resolve, reject)=>{
        setTimeout(() =>{
            console.log("SW: instalacion finalizada")
        },1000);
        self.skipWaiting();
        resolve();

    });
    event.waitUntil(installing);
});

self.addEventListener('activate', event =>{
    console.log("SW: service worker activated")
});


self.addEventListener('fetch', event => {
    console.log(event.request.url);

    if (event.request.url.includes('cat.jpg')) {
        event.respondWith(
            fetch('/img/NFL.png') 
                .then(response => {
                    return response.blob();
                })
                .then(blob => {
                    return new Response(blob, {
                        headers: {
                            'Content-Type': 'image/png'
                        }
                    });
                })
        );
    } else {
        event.respondWith(fetch(event.request));
    }
});


