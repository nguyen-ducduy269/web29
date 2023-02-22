{% extends 'layouts/contact.swig' %} {% block pageTitle %} Biệt thự trên cao
Forest in the Sky {% endblock %} {% block bodyClass %}index{% endblock %} {%
block content %}

<main id="contact">
  <div class="section-contact">
    <div class="bs-container">
      <div class="bs-row">
        <div class="bs-col">
          <div class="module-contact">
            <div class="contact">
              <a href="">
                <div class="location">
                  <div class="main-img">
                    <img src="../../dist/images/location.png" alt="" />
                  </div>
                  <div class="text">
                    Tầng 2, Lô 8 + 15 NV, Khu HH1 Ô16 Tây Hồ Tây, P.Xuân La,
                    Q.Tây Hồ, TP.Hà Nội.
                  </div>
                </div>
              </a>
            </div>
            <div class="contact">
              <a href="">
                <div class="call">
                  <div class="main-img active">
                    <img src="../../dist/images/call.png" alt="" />
                  </div>
                  <div class="number">024.6666.7069</div>
                </div>
              </a>
            </div>
            <div class="contact">
              <a href="">
                <div class="mail">
                  <div class="main-img">
                    <img src="../../dist/images/mail.png" alt="" />
                  </div>
                  <div class="gmail">vanphongace5.ace@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="section-infor">
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1861.9867388875784!2d105.7691157117331!3d21.03374719669541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134550fe0328507%3A0x68af5d16b216cd6d!2zVMOyYSBuaMOgIFN1biBTcXVhcmU!5e0!3m2!1svi!2s!4v1677071794121!5m2!1svi!2s"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div class="point">
        <img src="../../dist/images/point.png" alt="" />
      </div>
    </div>
    <div class="contact-us">
      <div class="title"><b>LIÊN HỆ</b></div>
      <div class="help">Cung cấp thông tin để chúng tôi có thể hỗ trợ bạn</div>
      <div class="form">
        <input type="text" placeholder="Họ và tên" />
        <input type="text" placeholder="Tổ chức" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Số điện thoại" />
      </div>
      <div class="content">
        <input type="text" placeholder="Nội dung..." />
      </div>
      <button>GỬI TIN</button>
    </div>
  </div>
</main>
{% endblock %} {% block script %} {% endblock %}
