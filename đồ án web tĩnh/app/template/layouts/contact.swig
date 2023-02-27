<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1"
    />
    <title>{% block pageTitle %}{% endblock %}</title>
    <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
    />
    <link rel="icon" href="images/icon/fav_icon.png" type="image/png" />
    <link rel="stylesheet" type="text/css" href="css/tool.min.css" />
    <link rel="stylesheet" type="text/css" href="css/main.min.css" />
    <!-- Link bootstrap -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <!-- Link owl carousel -->
    <link
      rel="stylesheet"
      href="../../../dist/lib/owlcarousel/assets/owl.carousel.min.css"
    />
    <!-- Link font awesome -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
    {% block customStyles %}{% endblock %}
  </head>
  <body class="{% block bodyClass %}{% endblock %}">
    {% include '../modules/contact-header.swig' %} {% block content %} {% endblock%} {%
    include '../modules/contact-footer.swig' %}
    <script src="js/tool.min.js"></script>
    <!-- Link Owl Carousel -->
    <script src="../../../dist/lib/owlcarousel/owl.carousel.js"></script>
    <script src="js/main.min.js"></script>
    <script>
      {% block script %}{% endblock %}
    </script>
  </body>
</html>
