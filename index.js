const button = document.getElementById('calculate-btn');
const result = document.getElementById("result")   //result(sonuç)

button.addEventListener("click",() => {      //butonuma click olduğu zaman şu an yazıcağım fonksiyonu çalıştır
    const height = parseInt(document.getElementById('height').value);       //value ile inputa girilen değeri kullanıyoruz
    const weight = parseInt(document.getElementById('weight').value);       // parseInt ile inputa girilen değerleri sayısal ifade ve küsüratlı sayılara uyumlu hale getiriyorum
    let height_status = false,weight_status = false;                                              // false yani benim en başta bir değerim yok

    if(height === '' || isNaN(height) || (height <= 0)){                                 // height inputunu içi boşsa veya 0dan küçükse hata mesajını döndür
        document.getElementById("height-error").innerHTML = 'Lütfen geçerli bir değer giriniz'    // id'si height-error olan hata mesajına innerHTML ile yazılan yazyı göster
    } else{
        document.getElementById("height-error").innerHTML = '';            //eğer inputa herhangi bir sayı girilirse bu koşulu çalıştır
        height_status = true;
    }

    if(weight === '' ||  isNaN(weight) || (weight <= 0)){
        document.getElementById("weight-error").innerHTML = 'Lütfen geçerli bir değer giriniz'
    } else{
        document.getElementById("weight-error").innerHTML = '';
        weight_status = true;
    }

    if(height_status && weight_status) {                                  //height_status ve weight_status ikiside true ise bu kodları çalıştır
        const bmi = (weight / ((height*height) / 10000)).toFixed(2);                     //bmi(vücut kitle indeksi formülü)   toFixed:virgülden sonra kaç sayı görünmesini istiyorsak toFixed(x) yazılır. x(virgülden sonra istenen basamak miktarı)
        
        if(bmi < 18.6){
            result.innerHTML = "düşük değer:" + bmi;             //eğer bmi 18.6 dan küçükse result(sonuç) kısmında düşük değer + bmi değeri gözüksün
        } else if(bmi >= 18.6 && bmi < 24.9){
            result.innerHTML = "Normal:" + bmi;
        } else{
            result.innerHTML = "yüksek değer:" + bmi;
        }
        
    } else{
        alert("lütfen değer giriniz");
        result.innerHTML = "";
    }

    })   