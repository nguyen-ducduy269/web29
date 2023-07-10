// Bỏ hàng vào giỏ

$(document).ready(function () {
  let count = 0;
  let summaryPrice = 0;

  $(".plus").click(function () {
    const quantity = $(this).parent().parent().find(".quantity");
    count++;
    quantity.text(count);

    const name = $(this).parent().parent().find(".name").html();
    const price = $(this).parent().parent().find("span").text();
    const totalPrice = price * count;

    const order = $("<div>", { class: "order" })
      .append($("<div>", { class: "name" }).text(name))
      .append($("<div>", { class: "quantity" }).text(count))
      .append($("<div>", { class: "total-cost" }).text(totalPrice.toFixed(3)))
      .append($("<button>", { class: "delete" }).text("Delete"));

    $(".summary .orders").append(order);

    summaryPrice += totalPrice;
    $(".total-price").text("Total Price: " + summaryPrice.toFixed(3) + "đ");

    // const order = $("<div>", { class: "order" });
    // if (!order) {
    //   const quantity = $(this).parent().parent().find(".quantity");
    //   count++;
    //   quantity.text(count);
    //   const name = $(this).parent().parent().find(".name").html();
    //   const price = $(this).parent().parent().find("span").text();
    //   const totalPrice = price * count;

    //   order
    //     .append($("<div>", { class: "name" }).text(name))
    //     .append($("<div>", { class: "quantity" }).text(count))
    //     .append(
    //       $("<div>", { class: "total-cost" }).text(totalPrice.toFixed(3) + "đ")
    //     )
    //     .append($("<button>", { class: "delete" }).text("Delete"));

    //   $(".summary .orders").append(order);

    //   summaryPrice += totalPrice;
    //   $(".total-price").text("Total Price: " + summaryPrice + "đ");
    // } else {
    //   const quantity = $(this).parent().parent().find(".quantity");
    //   count++;
    //   quantity.text(count);
    // }

    $(".delete").click(function () {
      const totalCost = totalPrice.toFixed(3);
      summaryPrice -= totalCost;
      $(".total-price").text("Total Price: " + summaryPrice.toFixed(3) + "đ");

      const order = $(this).parent();
      $(".orders").remove(order);
    });
  });

  $(".divide").click(function () {
    const quantity = $(this).parent().parent().find(".quantity");
    count = parseInt(count);

    if (count > 1) {
      count--;
      quantity.text(count);

      const price = $(this).parent().parent().find("span").text();
      summaryPrice -= price;
      $(".total-price").text("Total Price: " + summaryPrice.toFixed(3) + "đ");
    }
  });
});
