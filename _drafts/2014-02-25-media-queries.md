---
layout: post
title: Адаптивная верстка, знакомство
excerpt: Этот пост продукт моего желания разобраться как можно шире и глубже в адаптивной и отзывчевой верстке (adaptive & responsive design). В результате я хочу сделать серю публикаций об этих типах верстки и выработать свои рецепты при их использовании. В первой публикации будут охвачены основы, синтаксис, подходы.
---

##Принцип работы



Начиная с HTML4 и CSS2 можно задавать стили в зависимости от среды в которой веб сайт или приложение отображаются. Например можно использовать различные таблицы стилей для экранной версии и версии для печати

{% highlight html %}
<link rel="stylesheet" type="text/css" media="screen" href="style.css">
<link rel="stylesheet" type="text/css" media="print" href="print-style.css">
{% endhighlight %}

или использовать запросы внутри одной таблице стилей

{% highlight css %}
@media screen {
  * { font-family: sans-serif }
}
@media pring {
  * { font-family: serif }
}
{% endhighlight %}



##Типы носителей (media types)



###all
подразумевает все ниже перечисленные типы носителей
###aural
используется для голосовых и звуковых синтезаторов
###braille
устройства осязания для слепых
###embossed
принтеры систем чтения и письма для слепых
###handheld
маленькие или портативные устройства
###print
используется для принтеров
###projection
используется для проекторов
###screen
используется для компьютерных экранов
###tty
используется для телетайпов и терминалов
###tv
используется для телевизоров и подобных устройств



##Ключевые слова



###if
это и есть сам запрос о клиентском браузере

{% highlight css %}
@media (max-width: 600px) {
  html { background: red; }
}
{% endhighlight %}



###and
используется как слово

{% highlight css %}
@media (min-width: 600px) and (max-width: 800px) {
  html { background: red; }
}
{% endhighlight %}



###or
используется как запятая

{% highlight css %}
@media (max-width: 600px), (min-width: 800px) {
  html { background: red; }
}
{% endhighlight %}



###not
используется как слово

{% highlight css %}
@media not all and (max-width: 600px) {
  html { background: red; }
}
{% endhighlight %}

очень важно понимать что not (min-width: 600px) and (max-width: 800px) действует на все выражение (min-width: 600px) and (max-width: 800px), а не только на первую его чать (min-width: 600px).
также стоит учитывать что not (max-width: 600px) работать не будет



##Подходы



###exclusive
код ниже позволит выполнить только один часть из медиа запросов, это хороший подход если один из элементов должен выглядит по разному в определенных условиях

{% highlight css %}
@media (max-width: 400px) {
  html { background: red; }
}
@media (min-width: 401px) and (max-width: 800px) {
  html { background: green; }
}
@media (min-width: 801px) {
  html { background: blue; }
}
{% endhighlight %}



###Overriding
еще один подход, это перекрывать стили в зависимости от условий, в этом случае стоит обратить особое внимаение на порядок ваших запросо

{% highlight css %}
@media (min-width: 400px) {
  html { background: red; }
}
@media (min-width: 600px) {
  html { background: green; }
}
@media (min-width: 800px) {
  html { background: blue; }
}
{% endhighlight %}



###Mobile First
Подход к порядку ваших запросов при котором вы начинаете с мобильных устройств с наименьшими дисплеями. В данном случае min-width играет основную роль

{% highlight css %}
html { background: red; }

@media (min-width: 600px) {
  html { background: green; }
}
{% endhighlight %}




###Desktop First
Обратний подход начиная с экранов настольных компьютеров, используем max-width.

{% highlight css %}
html { background: red; }

@media (max-width: 600px) {
  html { background: green; }
}
{% endhighlight %}



###only
???

{% highlight css %}
@media only screen {
    html { background: green; }
}
{% endhighlight %}



##Комплексный пример

{% highlight css %}
/* site defaults */
html {background: red; padding:0; margin:0; etc.....}

/*mobile*/
@media (max-width: 400px) { 
  html { background: blue; }
}

/* tablet */
@media (min-width: 401px) and (max-width: 800px) {
  html { background: green; } 
}

/* This doesn't have to exist unless your design needs it, as these settings are above */
@media (min-width: 801px) and (max-width: 1199px) {
  html { background: red; }
}

/* large desktop and browsers that know a media query*/
@media (min-width: 1200px) {
  html { background: blue; }
}
{% endhighlight %}

##Основано на
http://www.w3.org/TR/css3-mediaqueries/
http://www.w3schools.com/
http://css-tricks.com/logic-in-media-queries/