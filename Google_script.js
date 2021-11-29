const spreadsheetId = '1fvD8eBUJNpJLP7EGWpY2qUjW1OKweThcMjfkxlSNkyg'
fetch(`https://docs.google.com/spreadsheets/d/${spreadsheetId}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {
        const json = JSON.parse(text.substr(47).slice(0, -2))
		console.log(text)
    })
