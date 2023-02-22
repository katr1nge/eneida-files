      // Get the first dropdown button
      var dropbtn = document.querySelector('#button1');
      // Get the first dropdown content
      var dropdownContent = document.querySelector('#myDropdown');
      // Get the first dropdown items
      var elements = dropdownContent.querySelectorAll('.dropdown-item');

      // Add click event to the first dropdown button
      dropbtn.addEventListener("click", function() {
          // toggle the display of the first dropdown content
          dropdownContent.classList.toggle("show");
          dropbtn.classList.toggle("dropbtn-opened");
      });

      // Add click event to the first dropdown items
      for (var i = 0; i < elements.length; i++) {
          elements[i].addEventListener("click", function() {
              let link = this.getAttribute("data-link");
              // Update the text and link of the first button
              document.getElementById("button2").innerHTML = "Підписатися";
              document.getElementById("button2").setAttribute("data-link", link);
              document.getElementById("button2").disabled = false;
              // Hide the first dropdown content
              dropdownContent.classList.remove("show");
              dropbtn.classList.remove("dropbtn-opened");
          });
      }

      // Add click event to the first button
      document.getElementById("button2").addEventListener("click", function() {
          let link = this.getAttribute("data-link");
          window.location.href = link;
      });
      // Get the second dropdown button
      var dropbtn2 = document.querySelector('#button1_2');
      // Get the second dropdown content
      var dropdownContent2 = document.querySelector('#myDropdown_2');
      // Get the second dropdown items
      var elements2 = dropdownContent2.querySelectorAll('.dropdown-item');

      // Add click event to the second dropdown button
      dropbtn2.addEventListener("click", function() {
      // toggle the display of the second dropdown content
      dropdownContent2.classList.toggle("show");
      dropbtn2.classList.toggle("dropbtn-opened");
  });

  // Add click event to the second dropdown items
  for (var i = 0; i < elements2.length; i++) {
      elements2[i].addEventListener("click", function() {
          let link = this.getAttribute("data-link");
          // Update the text and link of the second button
          document.getElementById("button2_2").innerHTML = "Підписатися";
          document.getElementById("button2_2").setAttribute("data-link", link);
          document.getElementById("button2_2").disabled = false;
          // Hide the second dropdown content
          dropdownContent2.classList.remove("show");
          dropbtn2.classList.remove("dropbtn-opened");
      });
  }

  // Add click event to the second button
  document.getElementById("button2_2").addEventListener("click", function() {
      let link = this.getAttribute("data-link");
      window.location.href = link;
  });
var Header = "Відкриття! Та ще й великий заголовок";
var element = document.getElementById("header");
element.innerHTML = Header;

var SubHead = "Стань частиною початку кінця російських серверів в Україні";
var element2 = document.getElementById("sub-head");
element2.innerHTML = SubHead;

var premiumdesc = `
<ul>
<li class="donp">Можливість робити <span class="doncolor">дабл-джамп</span> в лоббі</li>
<li class="donp">Можливість встановити <span class="doncolor">скін за URL</span></li>
<li class="donp">За вбивство на Smasher вам буде додаватися <span class="doncolor">2 монети</span></li>
<li class="donp">Множник гришок <span class="doncolor">х1.5</span></li>
<li class="donp">В чат буде надсилатися повідомлення, що <span class="doncolor">ви зайшли на режим</span></li>
<li class="donp">Вам надається доступ до чату донатерів - <span class="doncolor">/dc</span> <br><span class="dongray">А також можливість його сховати - <span class="doncolor">/dctoggle</span></span></li>
<li class="donp">Вам стають доступні для придбання нові ґаджети:</li>
<ul>
    <li class="sub"><span class="doncolor">Анімовані головні убори</span></li>
    <li class="sub"><span class="doncolor">Емоції</span></li>
</ul>
</ul>
            <div class="text-center w-100 d-block">
            <div class="dropdown">
              <button id="button1" class="bbo dropbtn fs24">Термін підписки:</button>
              <div class="bbo text-center dropdown-content" id="myDropdown">
                <button id="1mo" class="dropdown-item" data-link="#">1 місяць</button>
                <button id="3mo" class="dropdown-item" data-link="#">3 місяці</button>
                <button id="6mo" class="dropdown-item" data-link="#">6 місяці</button>
                <button id="12mo" class="dropdown-item" data-link="#" style="border-radius: 0px 0px 16px 16px;">12 місяців</button>
              </div>
          </div>
        </div>
`;
var element3 = document.getElementById("premiumdesc");
element3.innerHTML = premiumdesc;

var deluxedesc = `
<ul>
<li class="donp"><span class="doncolor">усі можливості привілеї <span class="bbo">Premium</span></span></li>
<li class="donp">Можливість <span class="doncolor">літати</span> в лоббі</li>
<li class="donp">Можливість зайти на <span class="doncolor">заповнену BedWars арену</span></li>
<li class="donp">Множник гришок <span class="doncolor">х2.0</span></li>
<li class="donp">За вбивство на Smasher вам буде додаватися <span class="doncolor">3 монетки</span></li>
<li class="donp">Вам стають доступні для придбання нові ґаджети:
</li>
<ul>
  <li class="sub"><span class="doncolor">Плащі</span></li>
  <li class="sub"><span class="doncolor">Банери</span></li>
  <li class="sub"><span class="doncolor">Пети</span></li>
</ul>
</ul>
            <div class="text-center w-100 d-block">
            <div class="dropdown">
              <button id="button2" class="bbo dropbtn fs24">Термін підписки:</button>
              <div class="bbo text-center dropdown-content" id="myDropdown">
                <button id="1mo" class="dropdown-item" data-link="#">1 місяць</button>
                <button id="3mo" class="dropdown-item" data-link="#">3 місяці</button>
                <button id="6mo" class="dropdown-item" data-link="#">6 місяців</button>
                <button id="12mo" class="dropdown-item" data-link="#" style="border-radius: 0px 0px 16px 16px;">12 місяців</button>
              </div>
          </div>
        </div>
`;
var element4 = document.getElementById("deluxedesc");
element4.innerHTML = deluxedesc;
