//bağlantı Kontrolu
//console.log('degiskenler.js Dosyası Bağlandı')

//=*=*= JavaScript Veri Türü =*=*=//

/*

string= Metinsel İfadeler  ve Mutlaka tırnak içerişinde yazılır
number=Bunlarda Sayısal değerlerdir olduğu gibi yazılır

***Bir değerin metin mi number mi olduğunu anlamak için eğer matematiksel bir
işlem yapılacaksa number dır değilse string
*/

//String yani metinsel İfade Örneği
//document.write("String Bir DEğerim Ben ");
//document.write("<br>");
//number yani sayısal değer örneği
//document.write(1999);
//document.write("<br>");

//=*=*=JavaScript Değişkenler=*=*=//

/*
JavaScript Değişken Tanımlanırken Kullanılan Anahtar Kelimeler

var==>Artık Kullanılmıyor
let==>aynı isimden sadece bir kez tanımlanmasını sağlar
const

var degiskeninAdi=degiskeninDegeri
Değişken tanımlarken camelCase
DEĞİŞKEN İSİMLERİ MUTLAKA BENZERSİZ OLMALIDIR
ilk kelime anahtar kelime
eşittirin sol tarafı değişkenin aldığı isim
eşittirin sağ tarafı değişkenin aldığı değer

*/

//document.write("Merhaba");
//document.write("<br>");

//var dogumTarihi;
//document.write(dogumTarihi);
//document.write("<br>");
//dogumTarihi = 1994
//document.write(dogumTarihi);
//document.write("<br>");
//Adınızı Değişken Olarak Tanımlayın ve ekrana yazdırın

//var adim="Hasan"
//document.write(adim);
//document.write("<br>");
// //Farklı birden fazla değişkeni birleştimek için + operatörü kullanılır

//var ogrencininAdi= "Yıldız"
//var ogrencininSoyadi="Onaran"
// var adim = "Hasan";
// document.write(adim);
// document.write("<br>");
// //Farklı Birden Fazla Değişkeni Birleştirmek için + artı operatörü kullanılır

// var ogrencininAdi = "Kübra";
// var ogrencininSoyadi = "Ulutaş";

// //Birden Fazla Değişkeni Birleştirme
// document.write(ogrencininAdi + "  " + ogrencininSoyadi);
// document.write("<br>");
// document.write(
//   "Yazılım Öğrencisinin adı: " +
//     ogrencininAdi +
//     " Öğrencinin Soyadı ise " +
//     ogrencininSoyadi +
//     "'dır"
// );

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// var egitmenYasi = 25;
// var egitmenAdi = "Hasan";
// var egitmenSoyadi = "Çelik";
// var egitmenBolumu = "React and React Native Developer";

// document.write("23 Eylül 2023 Tarihli Dersin Eğitmenin Bilgileri");
// document.write("<br>");

// document.write(
//   "Eğitmenin Adı: " +
//     egitmenAdi +
//     " Eğitmenin Soyadı:  " +
//     egitmenSoyadi +
//     " Eğitmenin Bölümü " +
//     egitmenBolumu +
//     " Eğitmenin Yaşı " +
//     egitmenYasi
// );
// document.write("<br>");
// document.write("<br>");
// document.write("24 Eylül 2023 Tarihli Dersin Eğitmenin Bilgileri");
// document.write("<br>");
// egitmenYasi = 29;
// egitmenAdi = "Mehmet Can";
// egitmenSoyadi = "Seyhan";
// egitmenBolumu = "Full Stack Web Developer";

// document.write(
//   "Eğitmenin Adı: " +
//     egitmenAdi +
//     " Eğitmenin Soyadı:  " +
//     egitmenSoyadi +
//     " Eğitmenin Bölümü " +
//     egitmenBolumu +
//     " Eğitmenin Yaşı " +
//     egitmenYasi
// );

// document.write("<br>");
// document.write("<br>");
// document.write("<br>");

// var personelAdi='Kemal'
// document.write(personelAdi)
// document.write('<br>')
// var personelAdi=53;
// document.write(personelAdi)

// let anahtar kelimesi ile değişken tanımlama
//aynı isimde ikinci bir değişken tanımlanamaz
// let personelAdi = "Kemal";
// document.write(personelAdi);
// document.write("<br>");

// personelAdi = "Hasan";
// document.write(personelAdi);
// document.write("<br>");
// document.write("<br>");

// let arabaninMarkası;

// document.write("Yeni Alacağım Arabanın Markası : " + arabaninMarkası);
// document.write("<br>");
// document.write("<br>");
// arabaninMarkası = "Fiat";
// document.write("Yeni Alacağım Arabanın Markası : " + arabaninMarkası);
// document.write("<br>");
// document.write("<br>");
//Kullanıcıdan veri alma
//Değişkenleri alınan verileri tutmak için de kullanırız
//let alinanSayi=prompt('Lütfen Bir Sayı Giriniz')
//document.write('Kullanıcıdan Alınan Sayı',alinanSayi)
// document.write("<br>");
// document.write("<br>");
// let kullanicininAdi = prompt("Adınızı Girin");
// let kullanicininSoyadi = prompt("Soyadınızı Girin");
// document.write(kullanicininAdi);
// document.write("<br>");
// document.write(kullanicininSoyadi);
// document.write("<br>");
// document.write(
//   "Kullanıcının Adı: " +
//     kullanicininAdi +
//     "Kullanıcın Soyadı: " +
//     kullanicininSoyadi
// );

//Kullanıcıdan İsim ve Memleket alıp ekrana yazdırın

// let kullaniciAdi;
// let kullanicininMemleketi;

// kullaniciAdi = prompt("İsim Girin");
// kullanicininMemleketi = prompt("Yaşadığınız Şehir");

// document.write(
//   " Kullanıcının ismi " +
//     kullaniciAdi +
//     " Kullanıcının Memlketi " +
//     kullanicininMemleketi
// );

//==== Matematiksel Operatörler ====//

let sayi1 = 13;
let sayi2 = 5;

//Toplama işlemi
let toplam = sayi1 + sayi2;

document.write('Sayı 1 ve Sayı 2 nin Toplamı ', toplam);
document.write('<br>')
document.write('<br>')

//Çıkarma İşlemi
let fark = sayi1 - sayi2
document.write('Sayı 1 ve Sayı 2 nin Farkı ', fark);
document.write('<br>')
document.write('<br>')

//Çarpma İşlemi
let carpim = sayi1 * sayi2
document.write('Sayı 1 ve Sayı 2 nin Çarpımı ', carpim);
document.write('<br>')
document.write('<br>')


//Çarpma İşlemi
let bolme = sayi1 / sayi2
document.write('Sayı 1 ve Sayı 2 nin bölüm ', bolme);
document.write('<br>')
document.write('<br>')

//Mod Alma İşlemi (Bir sayının diğerine bölümünden kalan)
let mod = sayi1 % sayi2
document.write('Sayı 1 ve Sayı 2 nin mod ', mod);
document.write('<br>')
document.write('<br>')






let sayac = 0
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

sayac = sayac + 4
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Birer birer artırır
sayac++
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Birer birer azaltır
sayac--
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Kendi Değerine 5 ekle 
sayac += 5
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Kendi Değerinden 3 çıkart
sayac -= 3
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Kendi Değerini 2yle çarp

sayac *= 2
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//Kendi değerini 4 e böl

sayac /= 4
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

//sayacın kendi değerinin 2 ye bölümünden kalan
sayac %= 5
document.write('Sayacın Güncel Değeri: ', sayac)
document.write('<br>')
document.write('<br>')

// 2 farklı sayı değişkeni oluşturun ve bu sayının birbirine göre modunu yazdırın

let birinciSayi = 10;
let ikinciSayi = 5;
let modSon = birinciSayi % ikinciSayi
document.write(modSon)





