fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "imdb8.p.rapidapi.com",
		"x-rapidapi-key": "5a8953d4b5mshd42cc0f9d815e2cp124178jsn902de3b3bd29"
	}
})
.then(response => response.json())
.then(data => {
    const list = data.d


    list.map((item) => {
        const name = item.l
        const poster = item.i.imageUrl
        const movies = `<li><img src="${poster}"> <h3>${name}</h3></li>`
        document.querySelector(".movies").innerHTML += movies

    })
})
.catch(err => {
	console.error(err);
});