# report_sem3

### PZAT-001 / TEST-001    
#### Асинхронное тестирование, Zombie + Puppeteer  
[Задание 1](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex1_0709)
[Задание 2](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex2_0709)
[Puppeteer](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex3_0709)
-----

### NODE-001 
#### Создание простого сервера на простом модуле http
[Simple server](https://github.com/nvkuznetsova/labs_sem3/tree/master/lab2_1409/ex2)
-----

### NODE-002 
### Считывание информации из API
[Repo](https://github.com/nvkuznetsova/lab3)
[Heroku example]()
```
Code
  .get('/weather', async(req, res) => {
    const URL = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20woeid%3D%222123260%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    const { data : { query : { results : { channel : { item : { forecast : [ , el1 ] }}}}}} = await get(URL, {'Content-Type' : 'application/json'});
    freqArr.push('weather');
    //console.log(el1);
    res
      .set({'Content-Type' : 'text/html; charset=utf-8'})
      .send(`<h4>Date : ${el1.date}</h4>
        <h4>The highest temperature : ${el1.high}&deg;</h4>
        <h4>Самая низкая температура: ${el1.low}&deg;</h4>`)
  })
```
