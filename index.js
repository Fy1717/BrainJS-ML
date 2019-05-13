const brain = require('brain.js');

const network = new brain.NeuralNetwork();



network.train([

    // -----ÜNİVERSİTELERİN BAŞARILI-BAŞARISIZ SINIFLANDIRMASI ------
    // [AKAD.YAYIN , UNİ.KONUMU , DERS.SAATİ , KIDEMLİ.HOCA.SAYISI] 

    // BAŞARILI SINIFINDAKİLER (İLK 10'A GİRENLER)
    {input : [41,10,35,20] ,   output : [0]},
    {input : [40,9,30,20]  ,   output : [0]},
    {input : [37,10,35,5]  ,   output : [0]},
    {input : [35,9,35,11]  ,   output : [0]},
    {input : [30,9,30,17]  ,   output : [0]},
    {input : [28,10,25,21] ,   output : [0]},
    {input : [26,9,35,20]  ,   output : [0]},
    {input : [25,5,35,10]  ,   output : [0]},
    {input : [21,7,35,12]  ,   output : [0]},
    {input : [20,5,30,15]  ,   output : [0]},
    {input : [18,7,35,20]  ,   output : [0]},

    {input : [40,8,30,20]  ,   output : [0]},
    {input : [39,7,35,20]  ,   output : [0]},
    {input : [38,10,35,5]  ,   output : [0]},
    {input : [35,10,35,11] ,   output : [0]},
    {input : [31,9,30,17]  ,   output : [0]},
    {input : [27,10,25,21] ,   output : [0]},
    {input : [29,9,30,20]  ,   output : [0]},
    {input : [25,5,35,10]  ,   output : [0]},
    {input : [22,7,35,12]  ,   output : [0]},
    {input : [21,5,35,15]  ,   output : [0]},
    {input : [19,7,35,20]  ,   output : [0]},

    {input : [41,9,30,20]  ,   output : [0]},
    {input : [40,9,35,20]  ,   output : [0]},
    {input : [34,15,35,5]  ,   output : [0]},
    {input : [35,9,35,9]   ,   output : [0]},
    {input : [30,9,30,14]  ,   output : [0]},
    {input : [29,10,35,21] ,   output : [0]},
    {input : [26,9,35,20]  ,   output : [0]},
    {input : [25,5,30,10]  ,   output : [0]},
    {input : [21,6,35,12]  ,   output : [0]},
    {input : [20,5,30,15]  ,   output : [0]},
    {input : [18,8,35,20]  ,   output : [0]},

    // BAŞARILI SINIFINDA OLMAYANLAR (İLK 10'A GİREMEYENLER)
    {input : [15,4,35,20]  ,   output : [1]},
    {input : [14,7,30,25]  ,   output : [1]},
    {input : [10,5,30,4]   ,   output : [1]},
    {input : [8,5,30,4]    ,   output : [1]},
    {input : [9,4,30,4]    ,   output : [1]},
    {input : [5,5,35,4]    ,   output : [1]},
    {input : [4,3,35,1]    ,   output : [1]},
    {input : [4,1,35,2]    ,   output : [1]},
    {input : [2,2,35,1]    ,   output : [1]},
    {input : [1,3,30,3]    ,   output : [1]},

    {input : [13,4,35,20]  ,   output : [1]},
    {input : [12,7,30,25]  ,   output : [1]},
    {input : [11,5,35,4]   ,   output : [1]},
    {input : [8,6,30,4]    ,   output : [1]},
    {input : [9,3,30,4]    ,   output : [1]},
    {input : [5,4,35,4]    ,   output : [1]},
    {input : [4,2,30,2]    ,   output : [1]},
    {input : [3,3,35,3]    ,   output : [1]},
    {input : [4,2,30,1]    ,   output : [1]},
    {input : [2,3,35,1]    ,   output : [1]},

]);


function Hesapla(){
    var toplam = 0;
    for(var i=0; i<1000000 ;i++){
        const output = network.run([15,4,35,20]);
        toplam = toplam+Math.floor((output*100));
    }
    var sonuc = toplam/1000000;
    console.log('Sonuç : %' , 100-sonuc , ' Başarı Oranı');
}

Hesapla();

