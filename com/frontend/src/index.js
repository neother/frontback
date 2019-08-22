// import React from 'react'
// import ReactDOM from 'react-dom';



var url = 'http://127.0.0.1:5000/haha';
fetch(url, {method: "GET",mode: "cors"})
    .then(res =>res.text())
    .then(data =>alert(data)

    )

        
    

    


// var ele = <h1>{response}</h1>
// ReactDOM.render(ele,document.getElementById('root'))

