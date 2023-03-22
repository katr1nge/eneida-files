
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
                <button id="6mo" class="dropdown-item" data-link="#">4 місяці</button>
                <button id="12mo" class="dropdown-item" data-link="#" style="border-radius: 0px 0px 16px 16px;">6 місяців</button>
              </div>
          </div>
        </div>
          <br>
          <div class="sbut text-center">
          <button class="bbo btn m-0" id="button2" disabled>Підписатися</button>
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
<li class="donp">Вам стають доступні для придбання нові гаджети:
</li>
<ul>
  <li class="sub"><span class="doncolor">Плащі</span></li>
  <li class="sub"><span class="doncolor">Банери</span></li>
  <li class="sub"><span class="doncolor">Пети</span></li>
</ul>
</ul>
<div class="text-center w-100 d-block">
<div class="dropdown">
  <button id="button1_2" class="bbo dropbtn fs24">Термін підписки:</button>
  <div class="bbo text-center dropdown-content" id="myDropdown_2">
    <button id="1mo" class="dropdown-item" data-link="#">1 місяць</button>
    <button id="3mo" class="dropdown-item" data-link="#">3 місяці</button>
    <button id="6mo" class="dropdown-item" data-link="#">6 місяців</button>
    <button id="12mo" class="dropdown-item" data-link="#" style="border-radius: 0px 0px 16px 16px;">12 місяців</button>
  </div>
</div>
</div>
             <br>
          <div class="sbut text-center">
          <button class="bbo btn m-0" id="button2_2" disabled>Підписатися</button>
      </div>
`;
var element4 = document.getElementById("deluxedesc");
element4.innerHTML = deluxedesc;

