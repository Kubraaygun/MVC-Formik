//yup'taki butun fonksiyonlari import etme
import * as yup from "yup";

//Validasyon semasi
//formdaki inputlarin gecerli olmasi icin
//gerekli kosullari tanimladigimiz yapi


//bir input alaninin zorunluluklarini belirtirken ilk cagrilmasi
 // gereken fonksiyonun veri tipi olmali
export const schema = yup.object().shape({
  //email zorunluluklari belirle
  email: yup.string().email().required(),

  //yas icin zorunluluklari belirle
  age:yup.number().min(18).max(100).integer().required(),
});
