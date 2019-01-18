# report_sem3

### PZAT-001 / TEST-001    
#### Асинхронное тестирование, Zombie + Puppeteer  
[Задание 1](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex1_0709)<br>
[Задание 2](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex2_0709)<br>
[Puppeteer](https://github.com/nvkuznetsova/labs_sem3/tree/master/ex3_0709)
-----

### NODE-001 
#### Создание простого сервера на простом модуле http
[Simple server](https://github.com/nvkuznetsova/labs_sem3/tree/master/lab2_1409/ex2)
-----

### NODE-002 
#### Считывание информации из API
[Repo](https://github.com/nvkuznetsova/lab3)<br>
[Heroku example]()<br>Add!
#### Index.js
```
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
-----
### NODE-003
#### Считывание информации из RSS
[Repo](https://github.com/nvkuznetsova/lab3)<br>
[Heroku example]()<br>
#### Index.js
```
  .get('/node_rss/:n', async (req, res) => {
    let n = +req.params.n;
    let result= '';
    const { items } = await parser.parseURL('https://nodejs.org/en/feed/blog.xml');
    items
      .map(({ title, link }) => ({ title, link }))
      .slice(0, n)
      .forEach(({ title, link }) => {
        result += `<h4><a href=${link} target=_blank>${title}</a></h4>`;
    });
    res.send(result);
  })
```
-----
### NODE-004
#### Анализ стрима
[Repo](https://github.com/nvkuznetsova/lab3)<br>
[Heroku example]()<br>
#### Index.js
```

```
-----
### GZIP-0001
#### Созданиие зипующего стрима
[Repo](https://github.com/nvkuznetsova/lab3)<br>
[Heroku example]()<br>
#### Index.js
```
  .get('/zip', (req, res) => {
    res.sendFile(path.join(__dirname+'/htmls/zip.html'));
  })
  .post('/zip', (req, res) => {
    res.writeHead(200, {'Content-Type': 'application/zip', 'Content-Disposition': 'attachment; filename=result.zip',});
    req
      .pipe(trans)
      .pipe(zlib.createGzip())
      .pipe(res);
  })
```
-----
### CODE-001
#### Хакатон с отправкой зашифрованного сообщения
[Repo](https://github.com/nvkuznetsova/report_sem3/tree/master/23112018)
-----
### AUTH-001
#### Задание с исследованием аутентификации, в том числе Passport.JS
[Repo]()Add!
-----
### NODE-004
#### Реализация виртуальных хостов с помощью node
[Repo](https://github.com/nvkuznetsova/lab3)<br>
[Heroku example]()<br>Add!
#### Index.js
```

```
### SOCK-001
#### Чат на socket.io и на ReactPHP (по материалам доклада 30.11.2018)
[Soclet.io](https://github.com/nvkuznetsova/report_sem3/tree/master/node_chat)<br>
[ReactPHP]()Add!
-----
### NODE-005
#### Развёртывание CMS на Node и их сравнительный анализ при сопоставлении с CMS на PHP. Пример: Ghost vs WordPress
-----
### TERM-001
#### ИТОГОВОЕ задание / задание по практике
[Repo](https://github.com/nvkuznetsova/practice_sem3)<br>
[Heroku example](https://young-mountain-79735.herokuapp.com)
