## Table of contents
1. JavaScript
    * [sum](#theme1) - done
    * [promiseReduce](#theme2) - done
    * [getPath](#theme9) - done
2. Node
    * [tree](#theme4) - done
    * [process](#theme6)
    * [rssGrabber](#theme7) - done
    * [nodeJSRestAPI](#theme8) - done
3. Polymer
    * [customElements](#theme12)
    * [polymerAP](#theme13)
4. React
    * [weather](#theme15)
    * [weatherRouting](#theme17)
5. Vue
    * [verbalCounting](#theme20)
    * [calculator](#theme22)
6. Angular
    * [dictionary](#theme25)
    * [dictionary2](#theme27)


## Месяц 1: Основы JavaScript, NODE, Rest, Mongo
    
### Тема 1: Введение в курс: <a name="theme1"></a>

**Задание:**  
Написать функцию sum (суммирования значений), которая может быть исполнена любое количество раз с не `undefined` аргументом. 
Если она исполнена без аргументов, то возвращает значение суммы всех переданных до этого значений. 

```javascript
sum(1)(2)(3)....(n)() === 1 + 2 + 3 + ... + n
```

### Для проверки:
1.  перейти в каталог javascript/javascript-1
2.  открыть в браузере файл index.html
3.  результаты работы скрипта выводятся в консоль браузера

### **Выполнено!**

***
### Тема 2: Возможности JavaScript <a name="theme2"></a>

**Задание:**  
promiseReduce - работа с асинхронными функциями
Написать функцию `promiseReduce`, которая получает на вход: 
- массив асинхронных функций `asyncFunctions`, возвращающих `Promise`, 
- `reduce` функцию и 
- стартовое значение `initialValue`.

`promiseReduce` поочередно вызывает переданные асинхронные функции
и выполняет `reduce` функцию сразу при получении результата до вызова следующей асинхронной функции.

`reduce` должна отрабатывать аналогично [`Array.prototype.reduce`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce), то есть запоминать результат предыдущей итерации

### Для проверки:
1.  перейти в каталог javascript/javascript-2
2.  открыть в браузере файл index.html
3.  результаты работы скрипта выводятся в консоль браузера

#### **Выполнено!**

***
## Тема: 4 Основные концепции Node - Modules, Events, Errors <a name="theme4"></a>

**Задание:** tree - вывод списка файлов и папок файловой системы
Напишите `NodeJS` скрипт `tree` для вывода списка файлов и папок файловой системы. 
Результатом работы должен быть объект с массивами `{ files, folders }`.
Вызовы файловой системы должны быть асинхронными. 
Скрипт принимает входной параметр - путь до папки.
Добавить возможность выполнять этот скрипт через команду `npm run tree -- path`

### Для проверки:
1.  перейти в каталог node/tree-lesson-4/
2.  выполнить в консоли: npm run tree -- folder
3.  результаты работы скрипта выводятся в консоль

#### **Выполнено!**

***
### Тема: 6 Node Best Practices - Process <a name="theme6"></a>

**Задание:**  
Работа с потоками в NodeJS  
Написать приложение, демонстрирующее работу с потоками в `NodeJS`:
- Readable, генерирующий случайные числа, 
- Transformable, добавляющий случайное число к первому и 
- Writable, выводящий данные в консоль.

Данные должны “течь” `readable -> transformable -> writable` 
Используйте highWaterMark для ограничения внутреннего буффера.

***
### Тема: 7 Стэк MEAN - Express, MongoDB <a name="theme7"></a>

**Задание:** Приложение для сохранения RSS
Написать приложение, которое будет запрашивать RSS рассылку, парсить XML и сохранять документы в БД.

Пример: Граббер сайта - который запускаем из командной строки, он читает новости с sports.ru и сохраняет в DB или твиты Трампа.

https://cyber.sports.ru/rss/all_news.xml

### Для проверки:
1.  перейти в каталог node/rssGrabber/
2.  выполнить в консоли: npm start
3.  результаты работы скрипта выводятся в консоль

#### **Выполнено!**

***
### Тема 8: Построение Rest API <a name="theme8"></a>

**Задание:**  
Приложение для сохранения и показа RSS
Написать `NodeJS Rest API` приложение для сохранения `RSS` рассылок.
В приложении должно быть следующие точки доступа
- Создание рассылки по `URL`. При успешном добавлении приложение будет запрашивать `RSS` рассылку, парсить `XML` и сохранять документы в базу данных.
- Показ списка всех добавленных `URL` рассылок.
- Показ всех сохраненных из `RSS` документов.

Приложение должно содержать тесты для всех точек доступа. 

### Для проверки:
1.  перейти в каталог node/nodeJSRestAPI/
2.  выполнить в консоли: npm start
3.  открыть в браузере http://localhost:3000

#### **Выполнено!**

***
### Тема 9: JavaScript - Работа с браузером  <a name="theme9"></a>

**Задание:**  
getPath - поиск уникального селектора    
Написать алгоритм и функцию getPath, находяющую уникальный css-селектор для элемента в документе.   
Уникальный селектор может быть использован document.querySelector() и возвращать исходный элемент.   
document.querySelectorAll(), вызванный с этим селектором, не должен находить никаких элементов кроме исходного.

```javascript
node // HTMLElement
getPath(node) // => "..."
```

### **Выполнено!**

## Месяц 2: Polymer, React

***
### Тема 12: Спецификации Shadow DOM и HTML Template <a name="theme12"></a>

**Задание:**  
Custom Elements - приложение для показа дерева  
С помощью `Custom Elements` создать приложение для показа дерева с помощью компонентов `my-tree` и `my-leaf`.
Компоненты должны получать данные о структуре поддерева от родительского элемента.
Используйте `Shadow DOM` при отрисовке компонент.

Пример стуктуры

```json
{
    "id": 1,
    "items": [{
        "id": 2,
        "items": [{ "id": 3 }]
    }]
}
```

***
### Тема 13: Особенности работы c Polymer <a name="theme13"></a>

**Задание:**  
Приложение для показа и добавления RSS  
Сделать приложение на `Polymer` для показа и добавления `RSS` рассылок из задания занятия "Построение Rest API".
Можно использовать готовые `iron` компоненты - https://www.webcomponents.org/author/PolymerElements

Должны быть реализованы следующие функции:
- Создание рассылки по `URL`
- Показ списка всех добавленных `URL` рассылок
- Показ всех сохраненных из `RSS` документов

Приложение должно содержать тесты для всех элементов `UI`

***
### Тема 15: Компоненты React - Components Lifecycle, State & Props <a name="theme15"></a>

**Задание:** 
Создать структуру приложения погоды
Приложение для самостоятельной работы в блоке React - веб-приложение погоды. 
На странице приложения должна быть возможность добавлять города в список избранных. 
По каждому городу показывается информация о температуре, ветре, другие параметры.

Создать структуру приложения, создать компоненты контейнеры.

***
### Тема 17: Routing в React - Оптимизация приложения <a name="theme17"></a>

**Задание:**  
Routing для приложения погоды
Реализовать компонент фильтра и поиска городов. 
Данные по городам сохранять в браузерном хранилище. 
Добавить страницу погоды по конкретному городу. 
При переходе на нее должен меняться url, показываться информация на несколько дней вперед.


## Месяц 3: Vue, Angular

***
### Тема 20: Компоненты, шаблонизатор и формы <a name="theme20"></a>

**Задание:**  
Структура приложения "Устный счет"  
В разделе Vue одна большая самостоятельная работа - SPA (Single Page Application) игра "Устный счет".   
Игра состоит из двух экранов - на первом экране пользователь выбирает настройки, которые будут использовать в игре - типы вычислений, сложность, время раунда.   
На этой же странице показывается статистика тренировок.   
Вторая страница - сама игра.   
Пользователь должен решить максимальное количество задач на заданное время.   
Мокапы - https://app.moqups.com/korzio@gmail.com/bTYyBLCtpU/edit/page/ad64222d5

Подготовить общую структуру приложения - компоненты контейнеры для страниц приложения.  
Сделать первую страницу приложения - форму настроек.

***
### Тема 22: Advanced Vue <a name="theme22"></a>

**Задание:**  
Routing для приложения "Устный счет"  
Реализовать второй экран - игру "калькулятор".
Настроить переходы по страницам приложения.

***
### Тема 25: Компоненты и директивы  <a name="theme25"></a>

**Задание:**  
Структура приложения для запоминания иностранных слов
Приложение для запоминания иностранных слов. 
В этом приложении пользователь сможет добавлять слова для изучения, проходить тесты для запоминания слов. 
Это Single Page Application состоит из 3 страниц:
- Последние добавленные слова (Recently Added)
- Упражнениями (Go)
- Настройки (Settings)
На главном экране, на странице Recently Added пользователь видит список последних добавленных слов, может добавить новое слово в словарь.

На странице упражнений пользователь занимается тестированием своих знаний. Ему показывается слово на одном языке, и он должен написать его перевод на другой язык. Если перевод правильный, слово засчитывается, иначе показываем ошибку. Мы начнем с двух языков - русского и английского, будем расширять возможности приложения по мере написания программы.

На странице настроек пользователь выбирает языки, количество слов в упражнении, отводимое на упражнение время.

Навигация по страницам происходит с помощью ссылок в верхней части страниц, каждой странице соответствует отдельный url.


Декомпозировать приложение для запоминания иностранных слов. 
Создать структуру и компоненты контейнеры приложения.

***
### Тема 27: Observables - RxJS <a name="theme27"></a>

**Задание:**  
Создать сервисы для работы с текстом
Создать сервисы для работы с текстом
- Сервис перевода слова - должен запрашивать перевод через API (например, https://tech.yandex.com/translate/)
- Сервис хранения словаря - небольшая обертка для управления словарем с помощью `localStorage`
- Сервис добавления слов - должен разбивать текст на отдельные слова, запрашивать их перевод и сохранять в словарь для приложения. 

Сервисы должны общаться с помощью библиотеки `RxJS`.

## Месяц 4: Angular