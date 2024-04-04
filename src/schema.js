//yup'taki butun fonksiyonlari import etme
import * as yup from "yup";

//Validasyon semasi
//formdaki inputlarin gecerli olmasi icin
//gerekli kosullari tanimladigimiz yapi

//bir input alaninin zorunluluklarini belirtirken ilk cagrilmasi
// gereken fonksiyonun veri tipi olmali
export const schema = yup.object().shape({
  //email zorunluluklari belirle
  email: yup
    .string()
    .email("Geçerli bir mail formatı giriniz")
    .required("Zorunlu Alan"),

  //yas icin zorunluluklari belirle
  age: yup.number().min(18,"Yaşınız 18'den küçük olamaz").max(100,"Yaşınız 100'den büyük olamaz").integer("Yaşınız tam sayı olmalı").required("Zorunlu Alan"),
});
