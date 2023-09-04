import mixitup from "mixitup";

function tabCollection() {
  let mixer = mixitup(".collection__inner-box", {
    load: {
      filter: ".art", // Здесь выберите класс активной секции по умолчанию
    },
  });

  var buttons = document.querySelectorAll('.collection__inner-btn button');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Удаление класса активности у всех кнопок
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Добавление класса активности к текущей кнопке
            button.classList.add('active');
        });
    });
}

tabCollection();
