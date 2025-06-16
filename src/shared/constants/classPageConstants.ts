export const CLASS_PAGE_CONSTANTS = {
  TITLE: 'Классы в JavaScript',

  LEARNING_OBJECTIVES: [
    'Что такое классы и зачем они нужны',
    'Как создать свой первый класс',
    'Как работать с объектами и методами',
    'Как классы помогают организовать код',
    'Практические примеры и задания',
  ],

  SECTIONS: {
    INTRODUCTION: '🏠 Что такое классы? Объясняем простыми словами',
    FIRST_CLASS: '🚀 Создаём свой первый класс',
    THIS_EXPLANATION: '🎭 Загадочное слово "this"',
    BANK_EXAMPLE: '🏦 Более сложный пример: Банковский счёт',
    FINAL_TASK: '🏆 Итоговое задание: Система управления задачами',
    CONCLUSION: '🎉 Поздравляем! Вы изучили классы!',
  },

  TASK_TITLES: {
    STUDENT_TASK: '💪 Практическое задание №1',
    CALCULATOR_TASK: '💪 Практическое задание №2',
    TODO_TASK: '🏆 Итоговое задание: Система управления задачами',
  },

  BUTTON_TEXTS: {
    SHOW_SOLUTION: '💡 Показать решение',
    HIDE_SOLUTION: '🙈 Скрыть решение',
    SHOW_EXPLANATION: '🤔 Объяснить пошагово',
    HIDE_EXPLANATION: '🙈 Скрыть объяснение',
    SHOW_ANALYSIS: '🔍 Разобрать код',
    HIDE_ANALYSIS: '🙈 Скрыть разбор',
  },

  CODE_EXAMPLES: {
    CAT_CLASS: `// Создаём класс Cat (Кот)
class Cat {
  // Конструктор - функция, которая вызывается при создании кота
  constructor(name, age) {
    this.name = name;  // Имя кота
    this.age = age;    // Возраст кота
  }
  
  // Метод - то, что умеет делать кот
  meow() {
    console.log(this.name + " говорит: Мяу!");
  }
  
  // Ещё один метод
  introduce() {
    console.log("Привет! Меня зовут " + this.name + 
                ", мне " + this.age + " лет.");
  }
}

// Создаём котов из нашего класса
let cat1 = new Cat("Мурзик", 3);
let cat2 = new Cat("Барсик", 5);

// Используем методы
cat1.meow();        // Мурзик говорит: Мяу!
cat2.introduce();   // Привет! Меня зовут Барсик, мне 5 лет.`,

    STUDENT_SOLUTION: `class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  study() {
    console.log(this.name + " изучает программирование!");
  }
  
  introduce() {
    console.log("Привет! Я " + this.name + ", мне " + this.age + " лет.");
  }
}

// Создаём студентов
let student1 = new Student("Анна", 20);
let student2 = new Student("Иван", 22);

// Тестируем методы
student1.introduce();  // Привет! Я Анна, мне 20 лет.
student1.study();      // Анна изучает программирование!
student2.introduce();  // Привет! Я Иван, мне 22 лет.
student2.study();      // Иван изучает программирование!`,

    CALCULATOR_SOLUTION: `class Calculator {
  constructor() {
    this.result = 0;
  }
  
  add(number) {
    this.result += number;
    console.log("Прибавили " + number + ". Результат: " + this.result);
  }
  
  subtract(number) {
    this.result -= number;
    console.log("Вычли " + number + ". Результат: " + this.result);
  }
  
  multiply(number) {
    this.result *= number;
    console.log("Умножили на " + number + ". Результат: " + this.result);
  }
  
  divide(number) {
    if (number !== 0) {
      this.result /= number;
      console.log("Разделили на " + number + ". Результат: " + this.result);
    } else {
      console.log("Деление на ноль невозможно!");
    }
  }
  
  clear() {
    this.result = 0;
    console.log("Калькулятор сброшен. Результат: 0");
  }
  
  getResult() {
    console.log("Текущий результат: " + this.result);
    return this.result;
  }
}

// Тестируем калькулятор
let calc = new Calculator();
calc.add(10);        // Прибавили 10. Результат: 10
calc.multiply(3);    // Умножили на 3. Результат: 30
calc.subtract(5);    // Вычли 5. Результат: 25
calc.divide(5);      // Разделили на 5. Результат: 5
calc.getResult();    // Текущий результат: 5
calc.clear();        // Калькулятор сброшен. Результат: 0`,

    TODO_SOLUTION: `// Класс для отдельной задачи
class Task {
  constructor(title) {
    this.title = title;
    this.completed = false;
  }
  
  complete() {
    this.completed = true;
    console.log("Задача '" + this.title + "' выполнена! ✅");
  }
  
  getStatus() {
    let status = this.completed ? "✅ Выполнено" : "⏳ В процессе";
    return this.title + " - " + status;
  }
}

// Класс для списка задач
class TodoList {
  constructor() {
    this.tasks = [];
  }
  
  addTask(title) {
    let newTask = new Task(title);
    this.tasks.push(newTask);
    console.log("Добавлена задача: " + title);
  }
  
  completeTask(index) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index].complete();
    } else {
      console.log("Задача с номером " + index + " не найдена!");
    }
  }
  
  showTasks() {
    console.log("\\n📋 Все задачи:");
    if (this.tasks.length === 0) {
      console.log("Задач пока нет!");
      return;
    }
    
    for (let i = 0; i < this.tasks.length; i++) {
      console.log((i + 1) + ". " + this.tasks[i].getStatus());
    }
  }
  
  getCompletedCount() {
    let completed = 0;
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].completed) {
        completed++;
      }
    }
    console.log("Выполнено задач: " + completed + " из " + this.tasks.length);
    return completed;
  }
}

// Тестируем наше Todo-приложение
let myTodos = new TodoList();

// Добавляем задачи
myTodos.addTask("Изучить классы в JavaScript");
myTodos.addTask("Сделать домашнее задание");
myTodos.addTask("Купить продукты");
myTodos.addTask("Погулять с собакой");

// Показываем все задачи
myTodos.showTasks();

// Выполняем некоторые задачи
myTodos.completeTask(0);  // Выполняем первую задачу
myTodos.completeTask(2);  // Выполняем третью задачу

// Показываем обновлённый список
myTodos.showTasks();

// Проверяем статистику
myTodos.getCompletedCount();`,
  },
};

export const BLOCK_TYPES = {
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
} as const;

export type BlockType = (typeof BLOCK_TYPES)[keyof typeof BLOCK_TYPES];
