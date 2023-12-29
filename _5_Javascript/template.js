// Single Comment JS
/*Multiple Comment */
// console.log('console.log');
// console.info('console.info');
// console.warn('console.warn');
// console.error('console.error');

// pop-up
// alert('pop-up');
// document.writeln('document.writeln');

/////////////////////////////////////////////////
// Variable (Global State)
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);
// var $_degiskenAdi44="Js öğreniyorum";
// console.log($_degiskenAdi44);

// // Hoisting
// deneme="Kalem";
// var deneme;
// console.log(deneme);

// // 2015 (ES6)
// // LET
// let data1="let data";
// console.log(data1);
// data1="let data44";
// console.log(data1);

// // CONST
// const data2="Js öğreniyorum";
// console.log(data2);
// data2="Js öğreniyorum";
// console.log(data2);

/////////////////////////////////////////////////
// Operator Functions
// Aritmetik Operatörler
// + - * / %
// &&=VE ||=VEYA !=değil
// > >= < <=
// kullanıcıdan aldığım 2 tane sayıyı toplama yapan bir uygulama
// let number1,number2,sum=0;
//  number1=Number(prompt("Lütfen 1.sayıyı giriniz"));
//  number2=Number(prompt("Lütfen 2.sayıyı giriniz"));
//  sum=number1+number2;
//  console.log("Toplama: "+sum);
//  console.log(typeof prompt("Lütfen 1.sayıyı giriniz"));
//  console.log(typeof Number(prompt("Lütfen 2.sayıyı giriniz")));
//  console.log(typeof parseInt(prompt("Lütfen 2.sayıyı giriniz")));

/////////////////////////////////////////////////
// NaN
// console.log(4 / 4);
// console.log(4 / "4");
// console.log(4 / "abc");

// // Infinity
// console.log(0 / 5);
// console.log(5 / 0);

// New  : Doğmak
// Null : Vefat
// Zero : 0
// isNaN :
// console.log(isNaN(4 / 4));
// console.log(!isNaN(4 / 4));

// // Undefined
// let data3;
// console.log(data3);
// // undefined : değer hiç verilmemiş
// // null      : değer verilmiş ancak biz bilerek bu değeri,değersiz vermek için

// // Escape Character
// console.log("Data \"söz\"");
// console.log("Data 'söz'");
// console.log("Data \n\r\t\"söz\"");
/////////////////////////////////////////////////

// Math
// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.sqrt(25));
// console.log(Math.pow(2, 5));
// console.log(2 ** 5);
// console.log(Math.abs(-10));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.round(9.4));
// console.log(Math.round(9.5));
// console.log(Math.min(100, 500, -9));
// console.log(Math.max(100, 500, -9));
// console.log(Math.sin(1));
// console.log(Math.cos(1));

//// MATH ÖDEVİ
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının (prompt)
// s1-) Bu sayılardan en küçüğü nedir ? (min)
// s2-) Bu sayılardan en büyüğü nedir ? (max)
// s3-) Bu sayılardan en büyüğü karekökü nedir ? (sqrt(max))
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ? (ceil(sqrt(max)))
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ? (abs(min))
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım(pow(min,max))

// Örnek: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9 (Math.abs)
// 2-yukarı yuvarlama yapsın  6.0 (Math.ceil)
// 3-karesini alsın 36.00 (Math.pow(sayı,2))
// 4-çıkan sayının karekökü alsın (Math.sqrt(sayı))
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin

/////////////////////////////////////////////////
// Sayısal İşlemler
// let number=44;
// number=44.4252;
// console.log(number);
// console.log("Number: "+ Number(number));
// console.log("parseInt: "+parseInt(number));
// console.log("parseFloat: "+parseFloat(number));
// // NaN
// // isNaN
// console.log(typeof number);

// let bilimsel1=1400000;
// console.log(bilimsel1);

// let bilimsel2=14E+5;
// console.log(bilimsel2);

// let bilimsel3=14E-5;
// console.log(bilimsel3);

// // binary(2)
// let binary=0b01010;
// console.log(binary);

// // octal(8)
// let octal=0o7523;
// console.log(octal);

// // hexadecimal(16) 0123456789abcdef
// let hexadecimal=0xff09;
// console.log(hexadecimal);

// const number2=56.123456789;
// console.log(number2);
// console.log(typeof number2);
// console.log(number2.toFixed(3));
// console.log(number2.toPrecision(3));

/////////////////////////////////////////////////
// Metinsel işlemler

// let number1=455
// let number2=455.41;
// let str="455.41";
// let bol=true;

// let vocabulary="js ÖĞReniyorum js ";
// console.log(vocabulary);
// console.log(vocabulary.length);
// console.log(vocabulary.trim().length);

// console.log(vocabulary.toLowerCase());
// console.log(vocabulary.toUpperCase());

// console.log(vocabulary.substring(5));
// console.log(vocabulary.substring(5,8)); // 5<=X<=8-1

// console.log(vocabulary.charAt(0));
// console.log(vocabulary.indexOf("js"));
// console.log(vocabulary.lastIndexOf("js"));
// console.log(vocabulary.includes("js"));

// console.log(vocabulary.replace("js","javascript"));
// console.log(vocabulary.concat("-sona"));
// console.log(vocabulary+"-sona");

// console.log(vocabulary.startsWith("js"));
// console.log(vocabulary.endsWith("js"));

// ÖDEV // kullanıcı tarafından girilen bir kelimenin (prompt)
// let userData= prompt("Lütfen bir şeyler yazınız")  ;
// S-1) Kaç karakterlidir ? (length)
// S-2) boşluklar alınarak Kaç karakterlidir ? (trim)
// S-3) bütün kelimeyi küçük harfle göstermek ? (toLowerCase())
// S-4) bütün kelimeyi büyük harfle göstermek ? (toUpperCase())
// S-5) Kullanıcıdan alınan ilk kelimeyle , "javascript" kelimeyle değiştirin. (replace, substring, indexOf)
// console.log(userData.replace("xxxxxxx"),"javascript");
// console.log(userData.replace(userData.substring(0,userData.indexOf(" ")),"javascript"));
// S-6) yazdığınız kelimede "javascript ile mi başlıyor" ? (startsWith())
// S-7) yazdığınız kelimede "javascript ile mi bitiyor" ? (endsWith())
// S-8) ilk harf nedir  ? (charAt())
// S-9) girdiğiniz kelimenin sonuna "-ben js öğreniyorum" (concat())
// S-10) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin? (subString())

///////////////////////////////////////////////////////////////
// Function
// // 1 parametresizReturnsuz
// function parametresizReturnsuz(){
//     console.log("parametresiz Retursuz");
// }
// parametresizReturnsuz();

// // 2 parametreliReturnsuz
// function parametreliReturnsuz(number){
//     console.log("parametreli Returnsuz "+(Math.sqrt(number)));
// }
// parametreliReturnsuz(25);

// // 3 parametresizReturnlu
// function parametresizReturnlu(){
//     return Math.pow(2,5);
// }
// let data3=parametresizReturnlu();
// console.log(data3);

// // 4 parametreliReturnlu
// function parametreliReturnlu(alt,ust){
//     return Math.pow(alt,ust);
// }
// let data4=parametreliReturnlu(2,5);
// console.log(data4);

///////////////////////////////////////////////////////////////
// Immediate Function
// (function () {
//     console.log("Immediate Function Anonymous")
// })();

// (() => {
//     console.log("Immediate Function Arrow")
// })();

// // Function
// function normFuction() {
//     console.log("normFuction");
// }
// normFuction()

// // Anonymous Function
// let anonymousfunction = function () {
//     console.log("anonymous function");
// }
// anonymousfunction()

// // Arrow Function
// let arrowfunction = (data) => {
//     console.log("arrow function " + data);
// }
// arrowfunction("asd")

// ///////////////////////////////////////////////////////////////
