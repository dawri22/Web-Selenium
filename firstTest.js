const {Builder, By, Key, util, Browser} = require("selenium-webdriver");
const fsp = require("fs");


describe("agregar editorial", function(){

    it("succesfully adds a todo to editorial", async function(){
      

    let driver = await new Builder().forBrowser(Browser.EDGE).build();
    //abrir pagina
    await driver.get("http://localhost:5001/editorials");

    //darle click al boton de crear
    await driver.findElement(By.id("btn-editorial-save")).click();

    //llenar formulario
    await driver.findElement(By.name("name")).sendKeys("Editorial San pedro");
    await driver.findElement(By.name("phone")).sendKeys("8295187976");
    await driver.findElement(By.name("country")).sendKeys("Rep Dom");


    //tomar capture del editorial
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/editorial.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    //Guardar
    await driver.findElement(By.id("btn-save-editorial")).click();


    //tomar captura de todo
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/editorial1.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    driver.close();

    })

})




describe("agregar autor", function(){

    it("succesfully adds a todo to autor", async function(){
    let driver = await new Builder().forBrowser(Browser.EDGE).build();
    //abrir pagina
    await driver.get("http://localhost:5001/authors");

    //darle click al boton de crear
    await driver.findElement(By.id("btn-autor-save")).click();

    //llenar formulario
    await driver.findElement(By.name("name")).sendKeys("Dawrin Peguero Alvarez");
    await driver.findElement(By.name("email")).sendKeys("dawri9175@gmail.com");

    //tomar capture del autor
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/autor.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    //Guardar
    await driver.findElement(By.id("btn-save-autor")).click();


    //tomar captura de todo
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/autor1.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    //salir
    driver.close();


})
})

describe("agregar categoria", function(){

    it("succesfully adds a todo to categoria", async function(){
    let driver = await new Builder().forBrowser(Browser.EDGE).build();
    //abrir pagina
    await driver.get("http://localhost:5001/categories");

    //darle click al boton de crear
    await driver.findElement(By.id("btn-categoria-save")).click();

    //llenar formulario
    await driver.findElement(By.name("name")).sendKeys("Ficcion");
    await driver.findElement(By.name("description")).sendKeys("Soy la categoria de ficcion");

    //tomar capture del autor
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/categoria.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    //Guardar
    await driver.findElement(By.id("btn-save-categoria")).click();



    //tomar captura de todo
    driver.takeScreenshot().then(
        function(image, err){
            fsp.writeFile('./images/categoria1.png', image, 'base64', function(err){
             console.log(err);
            });
        }
    )

    //salir
    driver.close();


})
})

