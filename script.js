'use strict';
const body = document.querySelector('body');
const aside = body.querySelector('.books');
const adv = body.querySelector('.adv');
const bookNodeList = aside.querySelectorAll('.book');
const breakHeaderLink = bookNodeList[4].querySelector('h2>a');
const breakList0 = bookNodeList[0].querySelectorAll('ul>li');
const breakList5 = bookNodeList[5].querySelectorAll('ul>li');
const breakList2 = bookNodeList[2].querySelectorAll('ul>li');
const chapter = document.createElement('li');


aside.prepend(bookNodeList[1]);
aside.append(bookNodeList[2]);
bookNodeList[3].before(bookNodeList[4]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

breakHeaderLink.textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

breakList0[10].before(breakList0[2]);
breakList0[9].before(breakList0[7]);
breakList0[8].after(breakList0[4]);
breakList0[4].after(breakList0[5]);

breakList5[10].before(breakList5[8]);
breakList5[8].before(breakList5[5]);
breakList5[4].after(breakList5[2]);
breakList5[1].after(breakList5[9]);

chapter.textContent = 'Глава 8: За пределами ES6';
breakList2[8].after(chapter);