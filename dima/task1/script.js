const divPage = document.getElementById('page');
let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(result => {
        result.forEach((item, index) => {
            let { title, body: content } = item;
            if (index <= 6) {
                divPage.insertAdjacentHTML('beforeend', `
                    <div class="posts">
                        <h2 class="h2">TITLE: ${title}</h2>
                        <p class="pots-p"> <span class="past-span">CONTENT:</span> ${content}</p>
                    </div>
                    `)
            }
        })
    })