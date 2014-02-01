---
layout: post
title: Javascript, советы от Кристиана Хельман
excerpt: Доработать. Кристиан Хельман (Christian Heilmann) веб евангелист из Мозиллы. Это перевод его презентации 2009 года о лучших решениях при написании кода на яваскрипте (javascript).
---



<h2>
  Сделайте так что бы вас поняли
</h2>

Выберайте понятные и короткие имена для переменных и функций.
Плохие варианты имен:
{% highlight javascript %}
x1 fe2 xbqne
{% endhighlight %}
Также плохими именаями являются:
{% highlight javascript %}
incrementerForMainLoopWhichSpansFromTenToTwenty
createNewMemberIfAgeOverTwentyOneAndMoonIsFull
{% endhighlight %}
Не пытайтесь объяснить значении которое переменная или функции будет хранить. Пример ниже может быть бесмысленым в некоторых странах:
{% highlight javascript %}
isOverEighteen()
{% endhighlight %}
Имеет значение везде:
{% highlight javascript %}
isLegalAge()
{% endhighlight %}
Думайте о вашем коде как о рассказе - если читатели застряли на непроизносимой "букве", то это не часть сюжета, дайте другую, понятную "букву".



<h2>Избегайте глобальных переменных</h2>

Использовать глобальные переменные это невероятно плохая затея.
Причина: вы ставите свой код под удар, он может быть переписан любым другим яваскриптом который будет добавлен на странице сразу после вашего.
Решение: использовать замыкания и !модульный подход!
{% highlight javascript %}
var current = null;
var labels = {
   'home':'home',
   'articles':'articles',
   'contact':'contact'	
};
function init(){
};
function show(){
   current = 1;
};
function hide(){
   show();
};
{% endhighlight %}
Везде глобальные переменные, которые могут быть переписаны. Доступ к переменным кода не ограничен, все что угодно может перекрыть. то, что вы сделали.
{% highlight javascript %}
var current = null;
var labels = {
   'home':'home',
   'articles':'articles',
   'contact':'contact'	
};
function init(){
};
function show(){
   current = 1;
};
function hide(){
   show();
};
{% endhighlight %}
Используя константу объекта (Object Literal) мы все ограничиваем, но мы все еще можем достучатся до своего кода> через имя объекта. Проблема в том что постоянное обращение увеличивает код и совсем не изящно.
{% highlight javascript %}
demo = {
   current:null,
   labels:{
      'home':'home',
      'articles':'articles',
      'contact':'contact'
   },
   init:function(){
   },
   show:function(){
      demo.current = 1;
   },
   hide:function(){
      demo.show();
   }
}
{% endhighlight %}
Анонимный !модуль! (функция). Без глобального доступа, вообще. Проблема: нет доступа из вне вообще, ни обратный вызов, ни обработчики событий не помогут.
{% highlight javascript %}
(function(){
  var current = null;
  var labels = [
    'home':'home',
    'articles':'articles',
    'contact':'contact'
  ];
  function init(){
  };
  function show(){
    current = 1;
  };
  function hide(){
    show();
  };
})();
{% endhighlight %}
В случае с !Module pattern!, нужно уточнять что глобальное что нет, переключая синтаксис. Неудобства: повторение имени !модуля!, разный синтаксис.
{% highlight javascript %}
module = function(){
   var labels = {
      'home':'home',
      'articles':'articles',
      'contact':'contact'
   };
   return {
      current:null,
      init:function(){
      },
      show:function(){
         module.current = 1;
      },
      hide:function(){
         module.show();
      }
   }
}();
module.init();
{% endhighlight %}
!Вскрытый модуль!. Данный метод позволяет сохранять единый синтаксис, смешивать и !сопостовлять! что сделать глобальным.



<h2>Stick to a Strict Coding Style</h2>

Придерживаться к !strict! коду
Браузеры очень велекодушные анализаторы. Однако, небрежный код может попортить вам нервы когда вы переместитесь на другую среду или подпустите к коду другого разработчика. Валидный код - хороший код. Валидный код - безопасный код. Проверяйте свой код на http://www.jslint.com/. Для пользователей TextMate, вы можете установить плагин http://andrewdupont.net/2006/10/01/javascript-tools-textmate-bundle/.

Комментируйте но не больше чем это требуется
Комментарии это сообщения от разработчика к разработчику. "Хороший код не нуждается в комментариях, потому что объясняет себя сам", ничто иное как миф. Комментарий это необходимость, но не описывайте им свой жизненный путь. Избегайте использования построчных комментариев "//". Намного безопаснее пользоваться "/\* \*/", так как перевот строки таких комментариев никак не повлечет за собой ошибок.
Есть один трюк с комментариями, если вы отлавливаете ошибку с его помощью:
{% highlight javascript %}
module = function(){
   var current = null;
/*
   var init = function(){
   };
   var show = function(){
      current = 1;
   };
   var hide = function(){
      show();
   }
 */
   return{init:init, show:show, current:current}
}();
{% endhighlight %}
{% highlight javascript %}
module = function(){
   var current = null;
//*
   var init = function(){
   };
   var show = function(){
      current = 1;
   };
   var hide = function(){
      show();
   }
// */
   return{init:init, show:show, current:current}
}();
{% endhighlight %}
Комментарии могут использоваться вкачестве документации. Подробности тут: http://yuiblog.com/blog/2008/12/08/yuidoc. Однако они никогда не должны доходить до конечного пользователя в чистом HTML или яваскрипте.



<h2>Избегайте смешиваня яваскрипта с другими технологиями</h2>

Яваскрипт хорош для вычеслений, конвертации, доступу к внешним источникам (через Ajax) и для определения поведение интерфеса и даже для манипулирования им. Все остальное должно быть отдано на откуп другим технологиям.
Для примера есть задача: добавить красные границы вокруг всех полей с классом "mandatory", когда они пусты. Не верный подход:
{% highlight javascript %}
var f = document.getElementById('mainform');
var inputs = f.getElementsByTagName('input');
for(var i=0,j=inputs.length;i<j;i++){
   if(inputs[i].className === 'mandatory' && inputs.value === ''){
      inputs[i].style.borderColor = '#f00';
      inputs[i].style.borderStyle = 'solid';
      inputs[i].style.borderWidth = '1px';
   }
}
{% endhighlight %}
Предположим, два месяца спустя все стили были переделаны в связи с ребрендингом. Нам больше нельзя использовать границы и ошибки должны отображаться с помощью иконки "тревога" следующей за элементом. Теперь нужно изменять ваш яваскрипт, что бы изменить то как сайт выглядит и ведет себя.
Правильный подход:
{% highlight javascript %}
var f = document.getElementById('mainform');
var inputs = f.getElementsByTagName('input');
for(var i=0,j=inputs.length;i<j;i++){
   if(inputs[i].className === 'mandatory' && inputs.value === ''){
      inputs[i].className+=' error';
   }
}
{% endhighlight %}
Пусть внешнее поведение и стиль сайта определяет css и дизайнер.
!Используя css наследование вы также можете избегать итерации через большое колличество элементов!60!.



<h2>Используйте сокращенный синтаксис</h2>

Краткие методы позволят вашему коду быть локаничным и легко читаемым, сразу же как вы привыкнете к таким методам.
Это:
{% highlight javascript %}
var cow = new Object();
cow.colour = 'white and blacl';
cow.breed = 'Holstein';
cow.legs = 4;
cow.front = 'moo';
cow.bottom = 'milk';
{% endhighlight %}
Тоже самое что:
{% highlight javascript %}
var cow = {
  colour = 'white and blacl',
  breed = 'Holstein',
  legs = 4,
  front = 'moo',
  bottom = 'milk'
}
{% endhighlight %}
Это:
{% highlight javascript %}
var lunch = new Array();
lunch[0]='Dosa';
lunch[1]='Roti';
lunch[2]='Rice';
lunch[3]='what the heck is this?';
{% endhighlight %}
Тоже самое что:
{% highlight javascript %}
var lunch = [
   'Dosa',
   'Roti',
   'Rice',
   'what the heck is this?'
];
{% endhighlight %}
Это:
{% highlight javascript %}
if(v){
   var x = v;
} else {
   var x =10;
}
{% endhighlight %}
Тоже самое что:
{% highlight javascript %}
var x = v || 10;
{% endhighlight %}
Это:
{% highlight javascript %}
var direction;
if(x > 100){
   direction = 1;
} else {
   direction = -1;
}
{% endhighlight %}
Тоже самое что:
{% highlight javascript %}
var direction = (x > 100) ? 1 : -1;
{% endhighlight %}



<h2>!Модуляризация!67!</h2>

Храните свой код модульно и разделя по назначению. Это очень заманчиво и легко подтаться желанию написать все в одной функции. Как только вы расширите функционал вы обнаружете что делаете одни и теже вещи в нескольких функциях. Что бы избежать этого пишите маленькие, вспомогательные функции общего характера, которые решают одну конкретную задачу вместо всеобъемлющих функций.
!На более поздних этапах разработки вы откроете для себя то что используете Вскрытый модуль шаблон что бы создать API для расширения основного функционала!72! Хороший код должен легко наслаиваться без переписывания основ.

!Нарашивайте код постепенно!74!
Есть веб сервисы, которые можно использовать вместо нарашивания кода зависящего от яваскрипта. Генерация DOM медленна и дорога в плане ресурсов. Элементы которые зависят от яваскрипта и доступны когда яваскрипт выключен в браузере это нарушенные обещания пользователю. К примеру вкладки которые отображаются без яваскрипта как обычные чекбоксы.

Предоставте возможность для конфигурирования и перевода
Все что может поменяться не должно быть раскидано по вашему коду. В эти вещи входит метки, css классы, ID а так же настройки. Помещая все это в объект конфигурации и делая его доступным (публичным) вы делаем поддержку кода очень легкой и доступной для внесений изменений.
{% highlight javascript %}
carousel = function(){
   var config = {
      CSS:{
         classes:{
            current:'current',
            scrollContainer:'scroll'
         },
         IDs:{
            maincontainer:'carousel'
         }
      },
      labels:{
         previous:'back',
         next:'next',
         auto:'play'
      },
      settings:{
         amount:5,
         skin:'blue',
         autoplay:false
      },
   };
   function init(){
   };
   function scroll(){
   };
   function highlight(){
   };
   return {config:config,init:init}
}();
{% endhighlight %}



<h2>Избегать глубокого вложения</h2>

Код становиться не читаемым после нескольких уровней вложения. Действительно плохая идея вкадивать один цикл в другой, так как это так же означает что вам придется иметь дело с несколькими переменными итерации (i,j,k,l,m и так далее).
Вы можете избежать глубокого вложения и цикла внутри другова с помощью специальных методов.
Плохо:
{% highlight javascript %}
function renderProfiles(o){
   var out = document.getElementById('profiles');
   for(var i=0;i<o.members.length;i++){
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(o.members[i].name));
      var nestedul = document.createElement('ul');
      for(var j=0;j<o.members[i].data.length;j++){
         var datali = document.createElement('li');
         datali.appendChild(
            document.createTextNode(
               o.members[i].data[j].label + ' ' + 
               o.members[i].data[j].value
            )
         );
         nestedul.appendChild(detali);
      }
      li.appendChild(nestedul);
   }
   out.appendChild(ul);
}
{% endhighlight %}
Хорошо:
{% highlight javascript %}
function renderProfiles(o){
   var out = document.getElementById('profiles');
   for(var i=0;i<o.members.length;i++){
      var ul = document.createElement('ul');
      var li = document.createElement('li');
      li.appendChild(document.createTextNode(data.members[i].name));
      li.appendChild(addMemberData(o.members[i]));
   }
   out.appendChild(ul);
}
function addMemberData(member){
   var ul = document.createElement('ul');
   for(var i=0;i<member.data.length;i++){
      var li = document.createElement('li');
      li.appendChild(
         document.createTextNode(
            member.data[i].label + ' ' +
            member.data[i].value
         )
      );
   }
   ul.appendChild(li);
   return ul;
}
{% endhighlight %}
Плохие редакторы и маленькие экраны, задумайтесь!



<h2>Оптимизированный цикл</h2>

Циклы могут испонятся невероятно медленно в яваскрипте. Очень часто это происходит потому, что вы делаете в нет то что не имеет смысла.
{% highlight javascript %}
var names = ['George', 'Ringo', 'Paul', 'John'];
for(var i=0;i<names.length;i++){
   doSomethingWith(names[i]);
}
{% endhighlight %}
Код выше говорит нам о том что каждая итерация цикла требует чтения длинны массива. Вы можете избежать это храня длинну массива в отдельной переменной:
{% highlight javascript %}
var names = ['George', 'Ringo', 'Paul', 'John'];
var all = names.length;
for(var i=0,i<all;i++){
   doSomethingWith(names[i]);
}
{% endhighlight %}

Еще более краткий способ решить эту проблему, это создаит вторую переменную в месте объявления цикла:
{% highlight javascript %}
var names = ['George', 'Ringo', 'Paul', 'John'];
for(var i=0,j=names.length;i<j;i++){
   doSomethingWith(names[i]);
}
{% endhighlight %}
Самое главное держать сложные вычисления вне циклов. Это относится к регулярным выражениям, но в первую очередь к манипуляциями с DOM. Хотя вы можете создамать DOM узлы в цикле, но избегайте вставки из в документ страницы.



<h2>Обращайтесь к DOM как можно меньше</h2>

Если вы можете, в каждом конкретном случае, откажитесь от доступа к DOM. Причина в том что это медленно и есть разнообразные проблемы у браузеров, которые возникают в следствии частым обращением и изменением в DOM. !Напищите или используйте вспомогательные методы, которые пакетно конвертируют набор данных в HTML!110! Вставляйте настолько большие наборы данных, насколько это возможно и после этого рендерите все разом.



<h2>!Don’t Yield to Browser Whims</h2>

То что работает в браузерах сегодня, может перестать завтра. Вместо того что бы полагаться на причудливое поведение сейчас а надеясь, что это будет работать, избегайте хаков и проанализируйте проблему в деталях.
В большинстве случаев вы обнаружете что дополнительный функционал нужен из за плохого планирования интерфейса!112!



<h2>Не верьте данным</h2>

Самое главное в хорошем коде в том что он не подрузумевает доверия к данным, которые в него поступают. Не верьте HTML документу, любой пользователь может влиять на него, к примеру с помощью firebug. Не надейтесь что данные которые попадают в ваши функции будут надлежащего формата - тестируйте с помощью typeof команды, и только после этого работайте с ними. Не ждите  что элементы DOM будут доступны - тестируйте их на наличее и на то, что это именно то что вы ожидаете и только после меняйте эти элементы. И ни при каких обстоятельствах не используйте яваскрипт что бы что то защитить - это так же легко вломать, как и написать.



<h2>Добавляйте функциональность яваскриптом, не создавайте с помощью него контент</h2>

Если вы обнаружите что создаете все больше и больше HTML кода в яваскрипте, значит вы делаете что то не так. Создавать используя DOM это не удобно. Глупо использовать innerHTML и сложно следить за качеством HTML который вы производите таким образом. Если у вас огромный интерфейс который должен быть доступен только тогда когда яваскрипт включен, загружайте данный интерфейс как статичный HTML документ с помощью Ajax.



<h2>Стойте на плечах титанов</h2>

Яваскрипт это весело, но писать на нем код для браузеров не так весело. Яваскрипт библиотеки специально созданы для того что бы сделать поведение браузеров и вашего кода более предсказуемым, путем затыкания "дыр" браузера. И если вы хотите писать код который работает без чрезмерной поддержки текущих браузеров вам следуем начать с хороших библиотек.



<h2>Код в разработке это не код в продакшене</h2>

Последнее но не менее важно что я хочу, это напомнить что некоторые вещи которые работают в других языках программирования, так же хороши и в яваскрипте. Конечный код создан для машин. Код в разработке - для людей. Сравнивайте, минимизируйте и оптимизируйте ваш код в процессе разработки.  Не оптимизируйте его преждевременно, так как это навредит разработчикам и тем кто работает с ними. Если мы урежем время на разработку мы получим больше времени на идеальную конвертацию в машинный код.

Источник:
http://www.slideshare.net/cheilmann/javascript-best-practices-1041724
