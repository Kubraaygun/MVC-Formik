<h1>MVC Formik Projesi</h1>

Bu proje, React kullanarak bir form yönetimi kütüphanesi olan Formik'in Model-Görünüm-Kontrolcü (MVC) mimarisi ile kullanımını örneklemektedir.

<h2>Kullanım</h2>
Proje, bir giriş formunu içermektedir. Bu formdaki giriş alanlarına kullanıcı tarafından veri girilirken, Formik ve Yup kütüphaneleri kullanılarak yapılan geçerlilik kontrolleri ile doğrulama sağlanmaktadır.

<h2>Özellikler</h2>

<ul>
<li>Email girişi için geçerlilik kontrolü</li>
<li>Yaş girişi için geçerlilik kontrolü (18 ile 100 yaş aralığında)</li>
<li>Şifre girişi için geçerlilik kontrolü (5 karakterden uzun olmalı, büyük harf, küçük harf, rakam ve özel karakter içermelidir)</li>
<li>Şifre onayı girişi için geçerlilik kontrolü (şifre ile eşleşmeli)</li>

<h2>MVC (Model-Görünüm-Kontrolcü)
</h2>
MVC, bir yazılım mimarisi desenidir ve bir uygulamanın yapısını üç temel bileşene ayırır: Model, View ve Controller.

<ul>
<li><b>Model:</b> Model, uygulamanın veri işleme mantığını temsil eder. Veritabanı işlemleri, veri manipülasyonu ve iş kurallarını içerir. Bu projede AddPostModel gibi model sınıfları kullanılarak verilerin yönetimi sağlanmıştır.</li>
<li><b>View (Görünüm):</b> View, kullanıcı arayüzünü temsil eder. Kullanıcıya sunulan görsel ve işlevsel öğeleri içerir. Bu projede ListPostView ve PopupView gibi görünüm bileşenleri kullanılarak kullanıcı arayüzü tasarlanmıştır.</li>
<li><b>Controller (Kontrolör):</b> Controller, kullanıcı etkileşimlerini yöneten ve Model ile View arasındaki iletişimi sağlayan bir ara katmandır. Bu projede, ListPostController ve PopupController gibi kontrolör bileşenleri kullanılarak iş mantığı yönetilmiştir.</li>

</ul>

<h2>Formik
</h2>
Formik, React uygulamalarında form yönetimi sağlayan popüler bir kütüphanedir. Formların durumunu, geçerlilik kontrolünü ve gönderme işlemlerini kolaylaştırır. Formik, bir dizi özellik sunar:
<ul>
<li><b>Form Durumu Yönetimi:</b> Form alanlarının durumunu (değerler, dokunuldu, hata durumu vb.) yönetir.</li>
<li><b>Geçerlilik Kontrolü:</b> Form girişlerinin geçerliliğini doğrular ve hata mesajlarını yönetir.</li>
<li><b>Form Gönderme İşlemi Yönetimi:</b> Formların sunucuya gönderilmesi işlemini yönetir.</li>
<li><b>Dokunma İzleme: </b> Form alanlarının dokunulma durumunu izler ve gerekli hallerde hata mesajlarını görüntüler.</li>
<li><b>Özelleştirilebilirlik: </b> Formik, formun işleyişini özelleştirmek için bir dizi API ve özellik sunar.</li>

</ul>
Formik, karmaşık form işlemlerini basitleştirir ve React uygulamalarında form kullanımını daha etkili hale getirir.

<h2>Kullanılan Teknolojiler</h2>

<ul>
<li>Bootstrap</li>
<li>Formik</li>
<li>Yup</li>

</ul>
