---
layout: post
title: чуть больше чем простой SQL
excerpt: делаем шаг вперед в SQL запросах на примере MySQL миграции определенных данных из старой таблицы в новую
---

Для начала нам нужно быть уверенным, что мы знаем что такое <a href="http://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%BB%D1%8F%D1%86%D0%B8%D0%BE%D0%BD%D0%BD%D1%8B%D0%B5_%D0%B1%D0%B0%D0%B7%D1%8B_%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85">база данных, в нашем случае реляционная</a> и что таккое <a href="http://ru.wikipedia.org/wiki/SQL">SQL</a>. Также надо быть точно уверенным что делают команды: SELECT, FROM, WHERE. Хорошие примеры для увеличения кругозора по <a href="http://www.mysql.ru/docs/mysql-man-4.0-ru/tutorial.html#examples">стандартным запросам вы можете прочитать на mysql.ru</a>

##Данные

В данном примере мы будем работать с двумя таблицами. Данные которые нужно будет перенести (мигрировать) из старой таблицы выглядят следующим образом:

<table>
  <caption>
    Таблица всех комментариев, с примером из двух записей с которыми мы будем оперировать
  </caption>
  <thead>
    <tr>
      <th>id</th>
      <th>category</th>
      <th>name</th>
      <th>date</th>
      <th>text</th>
      <th>public</th>
      <th>on_comment_id</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3124</td>
      <td>3</td>
      <td>Павел</td>
      <td>2014-01-07 11:17:24</td>
      <td>Этот год будет хорош?</td>
      <td>1</td>
      <td></td>
    </tr>
    <tr>
      <td>3132</td>
      <td>3</td>
      <td>Олег</td>
      <td>2014-01-07 13:23:56</td>
      <td>Смотря сколько уже выпил</td>
      <td>1</td>
      <td>1</td>
    </tr>
  </tbody>
</table>

Таблица куда мы будем мигрировать наши особенно нужные данные выглядит так:

<table>
  <caption>
    Таблица вопросов и ответов
  </caption>
  <thead>
    <tr>
      <th>id</th>
      <th>question_author</th>
      <th>question</th>
      <th>question_date</th>
      <th>public</th>
      <th>answer_author</th>
      <th>answer</th>
      <th>answer_date</th>
      <th>type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Павел</td>
      <td>Этот год будет хорош?</td>
      <td>2014-01-07 11:17:24</td>
      <td>1</td>
      <td>Олег</td>
      <td>Смотря сколько уже выпил</td>
      <td>2014-01-07 13:23:56</td>
      <td>migrated</td>
    </tr>
  </tbody>
</table>

##Запрос

{% highlight sql %}
SELECT
    question.name AS question_author, question.question_date AS date, question.text AS question, question.public AS public,
    answer.name AS answer_author, answer.text AS answer, answer.date AS answer_date,
    'migrated' AS type
FROM
    comments_table AS question
INNER JOIN
    comments_table AS answer ON question.id = answer.on_comment_id
WHERE
    question.public = 1 AND where question.category = 3;
{% endhighlight sql %}

Данный запрос сформирует из данных старой таблицы данные для миграции в новую таблицу с новой схемой. Наши данные находятся в таблице которая содержит все все коментарии, по принципу у записи есть id и если есть on_comment_id, которая ссылается на id комментария, на который был сделан данный комментарий. При миграции в новую таблицу, в целях создания более комплексного примера я добавил фиксированое значение 'migrated' для абсолютно новой колонки данных type. В конечном итоге мы должны получить таблицу в которой ответ и вопрос со всеми сопутствующими данными содержиться в одной строке (привет NoSQL).

###Select, From, Where

Выглядит запрос комплексно но на самом деле все очень просто. Мы используем AS для удобства разделяя записи одной таблицы на две сущности 'question' и 'answer'. Записи без on_comment_id являются вопросами ('question') и соответвтенно записи с on_comment_id, ответами ('answer').

В запросе SELECT первой строкой выбирает все нужные данные из комментариев-вопросов с запроса и задает им новые заголовки (ключи) так же с помощью AS.

{% highlight sql %}
SELECT
    question.name AS author
{% endhighlight sql %}

Второй строкой SELECT выбирает данные из комментариев-ответов.

{% highlight sql %}
SELECT
    answer.text AS answer
{% endhighlight sql %}

Третьей строкой мы задаем новую колонку и значение по умолчанию для наших данных новой таблицы.

{% highlight sql %}
SELECT
    'migrated' AS type
{% endhighlight sql %}

Строка сразу за FROM, сама простота, мы указываем откуда будет сделан запрос - из таблицы comments_table. Не забываем что там мы создаем сущность 'question'.

WHERE в последней строке находит данные которые были опубликованы и имеют категорию 3, опять же это сделано для более комплексного примера - мы берем только нужные нам данные, зачем нести за собой мусор или что то еще.

###Inner join

Наиболее волшебное место, то где мы собираем наши будущие данные. Волшебство происходит при условии,

{% highlight sql %}
question.id = answer.on_comment_id
{% endhighlight sql %}

а именно когда мы находим комментарий который является ответом на другой комментарий.

##Миграция в новую таблицу

Что бы добавить данные в новую таблицу, подразумевается что она у вас уже есть, добавим до SELECT-а INSERT команду:

{% highlight sql %}
INSERT INTO
    questions_answers (author, date, question, public, answer, answer_date, type)
SELECT
    question.name AS author, question.question_date AS date, question.text AS question, question.public AS public,
    answer.name AS answer_author, answer.text AS answer, answer.date AS answer_date,
    'migrated' AS type
FROM
    comments_table AS question
INNER JOIN
    comments_table AS answer ON question.id = answer.on_comment_id
WHERE
    question.public = 1 AND where question.category = 3;
{% endhighlight sql %}

Это завершит дело. Слегка не лаконично, но логично а так же читаемо благодаря хорошим отступа (всегда думайте о себе и других когда пишете код, красивый и читаемый код крут и выглядит круто).

Пишем, делимся мнениями, буду рад.