import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  mySize = 4;
  myCount = 10;

  constructor(private renderer: Renderer2) {
  }

  setField() {
    document.documentElement.style.setProperty(`--transform`, 'translateX(0) translateY(0)');
    const field = document.querySelector('.field');
    const rend = this.renderer;
    const fieldRow = rend.createElement('div');
    fieldRow.classList.add('field__row');
    field.appendChild(fieldRow);
    document.documentElement.style.setProperty('--size', '80px');
    const size = document.documentElement.style.getPropertyValue('--size');

    function getCommands(fieldLength, power) {
      const fieldLengthLength = Math.sqrt(fieldLength.length);
      document.documentElement.style.setProperty(`--grid`, `${fieldLengthLength}`);
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < fieldLength.length; i++) {
        const item = rend.createElement('div');
        rend.addClass(item, 'field__item');
        const text = rend.createText(fieldLength[i]);
        rend.appendChild(item, text);

        if (fieldLength[i] === 'S') {
          rend.addClass(item, 'start');
          const point = rend.createElement('div');
          rend.addClass(point, 'field__point');

          rend.appendChild(item, point);
        } else if (fieldLength[i] === 'T') {
          rend.addClass(item, 'end');

        }
        rend.appendChild(fragment, item);
      }
      fieldRow.appendChild(fragment);
      const sideLength = Math.sqrt(fieldLength.length);
      let starti = 0;
      let startj = 0;
      let endi = 0;
      let endj = 0;
      for (let i = 0; i < sideLength; i++) {
        for (let j = 0; j < sideLength; j++) {
          if (fieldLength[i * sideLength + j] === 'S') {
            starti = i;
            startj = j;
          }
          if (fieldLength[i * sideLength + j] === 'T') {
            endi = i;
            endj = j;
          }
        }
      }

      const queue = [
        {
          i: starti,
          j: startj,
          d: 'n',
          p: power,
          path: [],
          visited: [[starti, startj].toString()]
        }
      ];

      while (queue.length > 0) {
        const s = queue.shift();
        const i = s.i;
        const j = s.j;
        const d = s.d;
        const p = s.p;
        const path = s.path;
        const visited = s.visited;

        if (i === endi && j === endj) {
          return path.length <= power ? path : [];
        }
        if (
          i < 0 ||
          i >= sideLength ||
          j < 0 ||
          j >= sideLength ||
          fieldLength[i * sideLength + j] === '#' ||
          p === 0
        ) {
          continue;
        }
        if (d === 'n') {
          let temp = path.slice();
          const v = visited.slice();
          if (j + 1 < sideLength && v.indexOf([i, j + 1].toString()) === -1) {
            temp.push('r');
            queue.push({i, j, d: 'e', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (j - 1 >= 0 && v.indexOf([i, j - 1].toString()) === -1) {
            temp.push('l');
            queue.push({i, j, d: 'w', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (v.indexOf([i - 1, j].toString()) === -1) {
            temp.push('f');
            v.push([i - 1, j].toString());
            queue.push({i: i - 1, j, d: 'n', p: p - 1, path: temp, visited: v});
          }
        } else if (d === 's') {
          let temp = path.slice();
          const v = visited.slice();
          if (j + 1 < sideLength && v.indexOf([i, j + 1].toString()) === -1) {
            temp.push('r');
            queue.push({i, j, d: 'w', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (j - 1 >= 0 && v.indexOf([i, j - 1].toString()) === -1) {
            temp.push('l');
            queue.push({i, j, d: 'e', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (v.indexOf([i + 1, j].toString()) === -1) {
            temp.push('f');
            v.push([i + 1, j].toString());
            queue.push({i: i + 1, j, d: 's', p: p - 1, path: temp, visited: v});
          }
        } else if (d === 'e') {
          let temp = path.slice();
          const v = visited.slice();
          if (i + 1 < sideLength && v.indexOf([i + 1, j].toString()) === -1) {
            temp.push('r');
            queue.push({i, j, d: 's', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (i - 1 >= 0 && v.indexOf([i - 1, j].toString()) === -1) {
            temp.push('l');
            queue.push({i, j, d: 'n', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (v.indexOf([i, j + 1].toString()) === -1) {
            temp.push('f');
            v.push([i, j + 1].toString());
            queue.push({i, j: j + 1, d: 'e', p: p - 1, path: temp, visited: v});
          }
        } else if (d === 'w') {
          let temp = path.slice();
          const v = visited.slice();
          if (i - 1 >= 0 && v.indexOf([i - 1, j].toString()) === -1) {
            temp.push('r');
            queue.push({i, j, d: 'n', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (i + 1 < sideLength && v.indexOf([i + 1, j].toString()) === -1) {
            temp.push('l');
            queue.push({i, j, d: 's', p: p - 1, path: temp, visited: v});
          }
          temp = path.slice();
          if (v.indexOf([i, j - 1].toString()) === -1) {
            temp.push('f');
            v.push([i, j - 1].toString());
            queue.push({i, j: j - 1, d: 'w', p: p - 1, path: temp, visited: v});
          }
        }
      }
      return [];
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function setString(numb) {
      const length = Math.pow(numb, 2);

      const myArray = [];

      for (let i = 0; i < length; i++) {
        myArray.push('.');
      }
      const randomStart = getRandomInt(0, length);
      let randomEnd = null;

      myArray[randomStart] = 'S';

      function getRandomEnd() {
        let randomEndInner = getRandomInt(0, length);
        if (randomStart === randomEndInner) {
          randomEndInner = getRandomEnd();
        }
        return randomEndInner;
      }

      function getRandomWall() {
        let randomWallInner = getRandomInt(0, length);
        if (randomStart === randomWallInner || randomEnd === randomWallInner) {
          randomWallInner = getRandomWall();
        }
        return randomWallInner;
      }

      randomEnd = getRandomEnd();
      const randomWall = getRandomWall();
      myArray[randomEnd] = 'T';
      myArray[randomWall] = '#';
      return myArray.join('');
    }

    const que = setString(this.mySize);
    const score = getCommands(que, this.myCount);
    if (!score.length) {
      document.querySelector('.show').textContent = `Ходов не зватило, попробуйте задать больше`;
    } else {
      document.querySelector('.show').textContent = `${score}`;
    }
    const direction = 'Y';
    const newQue = score.slice();

    function setTime() {
      for (let i = 0; i <= newQue.length; i++) {
        if (newQue[i] === 'r') {
          const myTransform =
            document.documentElement.style.getPropertyValue(`--transform`) +
            'rotate(90deg) ';
          document.documentElement.style.setProperty(`--transform`, myTransform);
          newQue.splice(i, 1);
          break;
        } else if (newQue[i] === 'l') {
          const myTransform =
            document.documentElement.style.getPropertyValue(`--transform`) +
            'rotate(-90deg) ';
          document.documentElement.style.setProperty(`--transform`, myTransform);
          newQue.splice(i, 1);
          break;
        } else if (newQue[i] === 'f') {
          const myTransform =
            document.documentElement.style.getPropertyValue(`--transform`) +
            `translate${direction}(-${size}) `;
          document.documentElement.style.setProperty(`--transform`, myTransform);
          newQue.splice(i, 1);
          break;
        }
      }


    }

    setInterval(setTime, 1000);
  }

  myClick() {

    if (document.getElementsByClassName('field')[0].textContent === '') {
      this.setField();
    } else {
      const fi = document.querySelector('.field');
      fi.textContent = '';
      this.setField();
    }

  }

  ngOnInit() {
  }

}
