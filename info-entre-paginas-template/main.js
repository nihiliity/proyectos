function loadTemplate() {
    // genero url para sacar datos de la query.
    const url = new URL(location.href);

    // obtengo imagen.
    const imgSrc = url.searchParams.get('img');
    // obtengo título.
    const title = url.searchParams.get('title');

    // si `imgSrc` y `title` tienen valores los cargo.
    if (imgSrc && title) {
        // busco el div.item-template para cargarle el contenido del template.
        const container = document.querySelector('.item-template');
        container.innerHTML = `
            <h3>${title}</h3>
            <img src="./images/${imgSrc}">
        `;
    }
}

loadTemplate();