fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game", {
	"method": "GET",
	"headers": {
		
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