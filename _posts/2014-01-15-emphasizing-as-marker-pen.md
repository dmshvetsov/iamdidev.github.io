---
layout: post
title: Выделение текста маркером
excerpt: Выделить текст так как мы выделяем маркером объявление в газете, кажется банальной задачей, но взявшись за реализацию становиться ясно что это не совсем так. Что бы выполнить задачу пришлось использовать интересный прием по обнаружение переноса строки в текстовом блоке.
---


<a href="/example/emphasizing-as-marker-pen/" target="_blank">Пример</a> того что я имею ввиду.
Эффект выделения маркером придает "не аккуратные" обрамления с краев выделенного текста. Эффект маркера нужен построчно, при том что текстовый блок может менять ширину в зависимости от размера окна браузера. Вот интересная задача - найти конец строки в данный момент и разделить один inline-block выделенного текста на два, за перенос будет в ответе сам браузер.

Вот с чем мы работаем. span .highlight-block используется в верстке что бы обозначиь javascript-у над чем надо работать.

{% highlight html %}
<body>
  <p>
      ...Натуральная школа стоит теперь на первом плане русской литературы.
      С одной стороны, нисколько не преувеличивая дела по каким-нибудь пристрастным увлечениям,
      мы можем сказать, что публика, то есть большинство читателей, за нее: это факт,
      а не предположение.<span class="highlight-block">Теперь вся литературная деятельность
        сосредоточилась в журналах,</span> а какие журналы пользуются большею известностию,
        имеют более обширный круг читателей и большее влияние на мнение публики, как не те,
        <span class="highlight-block">в которых помещаются произведения натуральной школы?</span>
        Какие романы и повести читаются публикою с особенным интересом, как не те,
        <span class="highlight-block">которые принадлежат натуральной школе, или, лучше сказать,
          читаются ли публикою романы и повести, не принадлежащие к натуральной школе?</span> ...
  </p>
</body>
{% endhighlight %}

Основную работу делает данный javascript. Обратите внимание на то что используется jquery, вам нужно позаботиться о его доступности.

{% highlight javascript %}
$(window).load( function () {
  arangeLines();
  
  function arangeLines () {
    $('.highlight-block').each( function () {
      var $text = $(this),
          lines = [],
          block = "",
          top;
          
      $text.html($text.text().replace(/(\.+|\S+)/g, '<span>$1</span>'));
      
      
      var n = 0;
      $text.children().each(function() {
          var $this = $(this),
              _top = $this.position().top;
              
          // if ($this.attr("class")) return;
          
          if (top === undefined) {
            top = _top;
            lines[n] = [$this.text()];
          } else if (top < _top ) {
            top = _top;
            n++;
            lines[n] = [$this.text()];
          } else {
            lines[n].push($this.text());
          }
      });
      for (var i = lines.length, j = 0; j < i; j+=1) {
        block += '<span class="highlight-marked"><span class="left-corner"></span>' + lines[j].join(" ") + '<span class="right-corner"></span></span>' + " "
      }
    
      $text.html(block);
    });
  }
  
  $(window).resize(function () {
    arangeLines();
  });
});
{% endhighlight %}

Первым делом нам нужно обвернуть текст который мы собираемся выделить в span тэги, после чего мы сможем вычислять изменения параметра top для тэга относительно друг друга.

{% highlight javascript %}
$text.html($text.text().replace(/(\.+|\S+)/g, '<span>$1</span>'));
{% endhighlight %}

После мы итерируем через все обвернутые в span слова. Если это первое слово в выделяемом блоке текста, то мы задаем значение top обворачивающего его тэга как стартовое. Проходя через следующие слова мы сравниваем их значения записывая слова в массив массивов, уже без span тэга, что очень удобно т.к. они нам уже не нужны. Каждый из подмассивов служит нам хранилищем для строки (inline-block(а)). Как только мы замечаем разницу между top текущего слова в span тэге и предыдущим мы переходим на следующим подмосив засовываю туда новые слова. Таким образом получая массив - весь блок выделяемого текста, и в нем подмассив слов - строки этого блока.

{% highlight javascript %}
var n = 0;
$text.children().each(function() {
    var $this = $(this),
        _top = $this.position().top;
        
    // if ($this.attr("class")) return;
    
    if (top === undefined) {
      top = _top;
      lines[n] = [$this.text()];
    } else if (top < _top ) {
      top = _top;
      n++;
      lines[n] = [$this.text()];
    } else {
      lines[n].push($this.text());
    }
{% endhighlight %}

Что бы упростить жизнь человеку который будет верстать макеты с выделением маркером, всю кухню по добавлению обрамлений с краев "не аккуратных" штрихов мы берем на себя в нашем скрипте.  Стоит отметить что способ обрамления, прибавляя span с классом left и right-corner выбран для того что бы обеспечить совместимость с IE8 (младще 8-ой версии я не тестировал). Когда мы готовимся поместить результат работы на страницу мы в петле добавляем к каждой нашей строке обрамление и помещаем все в одну строковую переменную.

{% highlight javascript %}
for (var i = lines.length, j = 0; j < i; j+=1) {
  block += '<span class="highlight-marked"><span class="left-corner"></span>' + lines[j].join(" ") + '<span class="right-corner"></span></span>' + " "
}
{% endhighlight %}

И непринужденно отправляем все это на страницу

{% highlight javascript %}
$text.html(block);
{% endhighlight %}

Оставшуюся работу делает css. Надо подправить позиции обрамляющих элементов и задать им размеры и позиционирование.

{% highlight css %}
.highlight-marked {
  background: url('images/middle.png') repeat-x;
  display: inline-block;
  position: relative;
  z-index: -1;
}
.highlight-marked .left-corner {
  background: url('images/left-corner.png') no-repeat;
  position: absolute; top: -1px; left: -4px;
  height: 16px;
  width: 4px;
}
.highlight-marked .right-corner {
  background: url('images/right-corner.png') no-repeat;
  position: absolute; top: 0px; right: -3px;
  height: 15px;
  width: 3px;
}
{% endhighlight %}