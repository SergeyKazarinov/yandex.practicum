import { memo, useState } from 'react';
import { motion } from 'framer-motion';
import { pageVariants } from '../../shared/config/pageVariants';
import {
  InfoBlock,
  CodeBlock,
  ToggleButton,
  SectionTitle,
  TaskBlock,
  CodeComparison,
} from '../../shared/ui';
import {
  CLASS_PAGE_CONSTANTS,
  BLOCK_TYPES,
} from '../../shared/constants/classPageConstants';
import styles from './ClassPage.module.css';

const ClassPage = () => {
  const [showSolution1, setShowSolution1] = useState(false);
  const [showSolution2, setShowSolution2] = useState(false);
  const [showSolution3, setShowSolution3] = useState(false);
  const [showExample1, setShowExample1] = useState(false);
  const [showExample2, setShowExample2] = useState(false);

  const withoutClassesCode = `// Создаём каждую машину отдельно
let car1 = {
  brand: "Toyota",
  model: "Camry", 
  year: 2020,
  start: function() {
    console.log("Машина заведена!");
  }
};

let car2 = {
  brand: "Honda",
  model: "Civic",
  year: 2021,
  start: function() {
    console.log("Машина заведена!");
  }
};

// Много повторений! 😵‍💫`;

  const withClassesCode = `// Создаём шаблон один раз
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
  
  start() {
    console.log("Машина заведена!");
  }
}

// Используем шаблон много раз
let car1 = new Car("Toyota", "Camry", 2020);
let car2 = new Car("Honda", "Civic", 2021);

// Чисто и понятно! 😊`;

  const thisExampleCode = `
  const obj = {
    prop: 'Свойство',
    method: function () {
        console.log(this);// выведем значение this
    }
  }

  obj.method(); // { prop: "Свойство", method: ƒ } — это и есть объект obj, на котором была вызвана функция method.



  class Dog {
  constructor(name, breed) {
    this.name = name;    // this.name означает "имя ЭТОЙ собаки"
    this.breed = breed;  // this.breed означает "порода ЭТОЙ собаки"
  }
  
  bark() {
    // this.name означает "имя ЭТОЙ собаки, которая лает"
    console.log(this.name + " говорит: Гав-гав!");
  }
  
  getInfo() {
    // Используем this для обращения к свойствам ЭТОГО объекта
    return "Собака " + this.name + " породы " + this.breed;
  }
}

let dog1 = new Dog("Рекс", "Овчарка");
let dog2 = new Dog("Бобик", "Дворняжка");

dog1.bark();     // Рекс говорит: Гав-гав!
dog2.bark();     // Бобик говорит: Гав-гав!

console.log(dog1.getInfo()); // Собака Рекс породы Овчарка
console.log(dog2.getInfo()); // Собака Бобик породы Дворняжка`;

  const bankAccountCode = `class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;      // Имя владельца
    this.balance = initialBalance;   // Текущий баланс
    this.transactions = [];          // История операций
  }
  
  // Пополнить счёт
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push("Пополнение: +" + amount + " руб.");
      console.log("Счёт пополнен на " + amount + " руб.");
    } else {
      console.log("Сумма должна быть положительной!");
    }
  }
  
  // Снять деньги
  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      this.transactions.push("Снятие: -" + amount + " руб.");
      console.log("Снято " + amount + " руб.");
    } else {
      console.log("Недостаточно средств или неверная сумма!");
    }
  }
  
  // Показать баланс
  getBalance() {
    console.log("Баланс счёта " + this.ownerName + ": " + this.balance + " руб.");
    return this.balance;
  }
  
  // Показать историю операций
  getHistory() {
    console.log("История операций " + this.ownerName + ":");
    this.transactions.forEach(function(transaction) {
      console.log("- " + transaction);
    });
  }
}

// Создаём банковские счета
let account1 = new BankAccount("Анна Петрова", 1000);
let account2 = new BankAccount("Иван Сидоров", 500);

// Операции с первым счётом
account1.getBalance();    // Баланс счёта Анна Петрова: 1000 руб.
account1.deposit(250);    // Счёт пополнен на 250 руб.
account1.withdraw(100);   // Снято 100 руб.
account1.getBalance();    // Баланс счёта Анна Петрова: 1150 руб.
account1.getHistory();    // История операций

// Операции со вторым счётом
account2.withdraw(600);   // Недостаточно средств!
account2.deposit(200);    // Счёт пополнен на 200 руб.
account2.getBalance();    // Баланс счёта Иван Сидоров: 700 руб.`;

  const studentTaskRequirements = [
    'У студента должно быть <strong>имя</strong> и <strong>возраст</strong>',
    'Студент должен уметь <strong>учиться</strong> (метод study)',
    'Студент должен уметь <strong>представляться</strong> (метод introduce)',
    'Создайте двух студентов и протестируйте все методы',
  ];

  const calculatorTaskRequirements = [
    'У калькулятора должно быть свойство <strong>result</strong> (изначально 0)',
    'Методы: <strong>add(число)</strong> — прибавить к результату',
    'Методы: <strong>subtract(число)</strong> — вычесть из результата',
    'Методы: <strong>multiply(число)</strong> — умножить результат',
    'Методы: <strong>divide(число)</strong> — разделить результат',
    'Методы: <strong>clear()</strong> — сбросить результат в 0',
    'Методы: <strong>getResult()</strong> — показать текущий результат',
  ];

  const todoTaskDescription = (
    <>
      <p>
        Создайте два класса: Task (задача) и TodoList (список задач) для
        управления делами.
      </p>
      <div className={styles.classPage__taskSection}>
        <h4>Класс Task должен иметь:</h4>
        <ul>
          <li>
            <strong>title</strong> — название задачи
          </li>
          <li>
            <strong>completed</strong> — выполнена ли задача (false по
            умолчанию)
          </li>
          <li>
            <strong>complete()</strong> — отметить задачу как выполненную
          </li>
          <li>
            <strong>getStatus()</strong> — показать статус задачи
          </li>
        </ul>
      </div>
      <div className={styles.classPage__taskSection}>
        <h4>Класс TodoList должен иметь:</h4>
        <ul>
          <li>
            <strong>tasks</strong> — массив для хранения задач
          </li>
          <li>
            <strong>addTask(title)</strong> — добавить новую задачу
          </li>
          <li>
            <strong>completeTask(index)</strong> — выполнить задачу по номеру
          </li>
          <li>
            <strong>showTasks()</strong> — показать все задачи
          </li>
          <li>
            <strong>getCompletedCount()</strong> — количество выполненных задач
          </li>
        </ul>
      </div>
    </>
  );

  const catExplanationSteps = [
    '<strong>class Cat</strong> — объявляем новый класс с именем "Cat"',
    '<strong>constructor(name, age)</strong> — специальная функция, которая запускается при создании объекта',
    '<strong>this.name = name</strong> — сохраняем переданное имя в объекте',
    '<strong>this.age = age</strong> — сохраняем переданный возраст в объекте',
    '<strong>meow()</strong> — метод (функция внутри класса)',
    '<strong>new Cat("Мурзик", 3)</strong> — создаём новый объект кота',
    '<strong>cat1.meow()</strong> — вызываем метод у созданного объекта',
  ];

  const bankExplanationSteps = [
    '<strong>Конструктор</strong> создаёт счёт с именем владельца и начальным балансом',
    '<strong>deposit()</strong> добавляет деньги и записывает операцию в историю',
    '<strong>withdraw()</strong> снимает деньги, если их достаточно',
    '<strong>getBalance()</strong> показывает текущий баланс',
    '<strong>getHistory()</strong> выводит все операции по счёту',
    '<strong>this.transactions</strong> — массив для хранения истории операций',
  ];

  const thisExplanationPoints = [
    'Когда вызывается <code>dog1.bark()</code>, то <code>this</code> указывает на <code>dog1</code>',
    'Когда вызывается <code>dog2.bark()</code>, то <code>this</code> указывает на <code>dog2</code>',
    '<code>this</code> — это способ сказать "используй данные именно этого объекта"',
  ];

  const conclusionSkills = [
    'Создавать классы с помощью ключевого слова <code>class</code>',
    'Использовать конструктор для инициализации объектов',
    'Создавать методы для работы с данными объекта',
    'Понимать, что такое <code>this</code> и как его использовать',
    'Создавать несколько объектов из одного класса',
    'Строить сложные приложения с несколькими классами',
  ];

  const keyPrinciples = [
    '<strong>Класс</strong> — это шаблон для создания объектов',
    '<strong>Объект</strong> — это конкретный экземпляр класса с данными',
    '<strong>Конструктор</strong> — запускается при создании объекта',
    '<strong>Методы</strong> — функции внутри класса для работы с данными',
    '<strong>this</strong> — ссылка на текущий объект',
  ];

  const nextTopics = [
    'наследование, инкапсуляция, полиморфизм)',
    'Принцип интерфейсов в ООП',
    'Статические методы',
    'Геттеры и сеттеры',
    'Классы под капотом и как писали код до появления классов',
  ];

  return (
    <motion.div
      className={styles.classPage}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1 className={styles.classPage__title}>{CLASS_PAGE_CONSTANTS.TITLE}</h1>

      {/* Введение */}
      <section className={styles.classPage__section}>
        <h2 className={styles.classPage__sectionTitle}>
          Что вы изучите в этом уроке
        </h2>
        <ul className={styles.classPage__list}>
          {CLASS_PAGE_CONSTANTS.LEARNING_OBJECTIVES.map((objective, index) => (
            <li key={index}>{objective}</li>
          ))}
        </ul>
      </section>

      {/* Что такое классы простыми словами */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="danger" bordered>
          {CLASS_PAGE_CONSTANTS.SECTIONS.INTRODUCTION}
        </SectionTitle>

        <InfoBlock
          type={BLOCK_TYPES.WARNING}
          title="Представьте, что вы строите дома..."
        >
          <p>
            Класс — это как <strong>чертёж дома</strong>. По одному чертежу
            можно построить много похожих домов, но каждый дом будет иметь свой
            цвет, размер и адрес.
          </p>
          <p>
            В программировании <strong>класс</strong> — это шаблон для создания
            объектов. По одному классу можно создать много объектов с одинаковой
            структурой, но разными данными.
          </p>
          <p>
            Чтобы объявить класс, используем ключевое слово{' '}
            <strong>class</strong>. После него напишем имя класса — переменную,
            к которой обратимся, если захотим его использовать.
          </p>
          <p>
            В языках программирования классы принято называть с заглавной буквы.
            Если поступить иначе, всё будет работать, но лучше придерживаться
            общепринятых правил. Это поможет позже выявить переменные, которые
            содержат класс
          </p>

          <p>
            Любой класс содержит метод <strong>constructor</strong>, который
            вызывается при создании нового объекта этого класса. Метод нужен,
            чтобы заполнить будущий объект данными.
          </p>
        </InfoBlock>

        <SectionTitle level={3} color="primary">
          🔧 Зачем нужны классы?
        </SectionTitle>

        <CodeComparison
          leftTitle="❌ Без классов (сложно)"
          leftCode={withoutClassesCode}
          rightTitle="✅ С классами (просто)"
          rightCode={withClassesCode}
          leftType="warning"
          rightType="success"
        />
      </section>

      <InfoBlock type={BLOCK_TYPES.WARNING}>
        <p>
          Любой класс содержит метод <strong>constructor</strong>, который
          вызывается при создании нового объекта этого класса. Метод нужен,
          чтобы заполнить будущий объект данными.
        </p>
        <p>
          Запись{' '}
          <strong>
            <code>new Car("Toyota", "Camry", 2020);</code>
          </strong>{' '}
          возвращает новый объект. Ключевое слово <strong>new</strong> важно в
          вызове класса. Оно означает, что результат этого вызова возвращает
          новый объект — экземпляр класса, который вызывают. Попытка сделать это
          без <strong>new</strong> приведёт к ошибке: «Конструктор класса нельзя
          вызвать без ключевого слова <strong>new</strong>".
        </p>

        <p>
          Необязательно описывать метод <strong>constructor</strong> внутри
          класса. Тогда метод будет создан неявно и с пустым телом:{' '}
          <strong>
            <code>constructor() {'{}'}</code>
          </strong>
          . После этого никакие данные не будут добавляться в создаваемые
          объекты.
        </p>
      </InfoBlock>

      {/* Первый класс */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="success" bordered>
          {CLASS_PAGE_CONSTANTS.SECTIONS.FIRST_CLASS}
        </SectionTitle>

        <InfoBlock type={BLOCK_TYPES.INFO} title="Пример: Класс 'Cat'">
          <p>
            Давайте создадим класс для котов. Каждый кот имеет имя, возраст и
            умеет мяукать.
          </p>
        </InfoBlock>

        <CodeBlock code={CLASS_PAGE_CONSTANTS.CODE_EXAMPLES.CAT_CLASS} />

        <ToggleButton
          isToggled={showExample1}
          onToggle={() => setShowExample1(!showExample1)}
          showText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.SHOW_EXPLANATION}
          hideText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.HIDE_EXPLANATION}
          variant="primary"
        />

        {showExample1 && (
          <InfoBlock
            type={BLOCK_TYPES.WARNING}
            title="📝 Разбираем код по частям:"
          >
            <ol className={styles.classPage__orderedList}>
              {catExplanationSteps.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
          </InfoBlock>
        )}
      </section>

      {/* Практическое задание 1 */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="danger" bordered>
          {CLASS_PAGE_CONSTANTS.TASK_TITLES.STUDENT_TASK}
        </SectionTitle>

        <TaskBlock
          title="🎯 Задача: Создайте класс 'Student'"
          description={
            <p>
              Создайте класс Student, который будет хранить информацию о
              студенте и его действиях.
            </p>
          }
          requirements={studentTaskRequirements}
        />

        <ToggleButton
          isToggled={showSolution1}
          onToggle={() => setShowSolution1(!showSolution1)}
          showText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.SHOW_SOLUTION}
          hideText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.HIDE_SOLUTION}
          variant="success"
        />

        {showSolution1 && (
          <InfoBlock type={BLOCK_TYPES.SUCCESS} title="✅ Правильное решение:">
            <CodeBlock
              code={CLASS_PAGE_CONSTANTS.CODE_EXAMPLES.STUDENT_SOLUTION}
            />
          </InfoBlock>
        )}
      </section>

      {/* Что такое this */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="secondary" bordered>
          {CLASS_PAGE_CONSTANTS.SECTIONS.THIS_EXPLANATION}
        </SectionTitle>

        <InfoBlock type={BLOCK_TYPES.SECONDARY} title="Что означает 'this'?">
          <p>
            <strong>this</strong> — это способ обратиться к текущему объекту.
            Это как сказать "этот конкретный объект" или "я сам".
          </p>
          <p>
            Другими словами, <strong>this</strong> — объект, на котором вызван
            метод (функция) или идет обращение к полю. Если функцию вызывают как
            метод объекта, свойство this хранит ссылку на объект, на котором она
            вызвана.
          </p>
          <p>
            Значение this зависит только от того, на каком объекте вызвана
            функция, а не в каком объекте она хранится.
          </p>
        </InfoBlock>

        <CodeBlock code={thisExampleCode} />

        <InfoBlock type={BLOCK_TYPES.WARNING} title="💡 Простое объяснение:">
          <ul>
            {thisExplanationPoints.map((point, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
            ))}
          </ul>
        </InfoBlock>
      </section>

      {/* Более сложный пример */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="warning" bordered>
          {CLASS_PAGE_CONSTANTS.SECTIONS.BANK_EXAMPLE}
        </SectionTitle>

        <InfoBlock
          type={BLOCK_TYPES.WARNING}
          title="Создадим класс для банковского счёта"
        >
          <p>
            Банковский счёт может хранить деньги, пополняться и списывать
            средства.
          </p>
        </InfoBlock>

        <CodeBlock code={bankAccountCode} />

        <ToggleButton
          isToggled={showExample2}
          onToggle={() => setShowExample2(!showExample2)}
          showText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.SHOW_ANALYSIS}
          hideText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.HIDE_ANALYSIS}
          variant="warning"
        />

        {showExample2 && (
          <InfoBlock
            type={BLOCK_TYPES.WARNING}
            title="🧠 Что происходит в коде:"
          >
            <ol className={styles.classPage__orderedList}>
              {bankExplanationSteps.map((step, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: step }} />
              ))}
            </ol>
            <div className={styles.classPage__note}>
              <h5>🎯 Обратите внимание:</h5>
              <p>
                Каждый объект BankAccount имеет свой собственный баланс и
                историю операций. Операции с одним счётом не влияют на другой!
              </p>
            </div>
          </InfoBlock>
        )}
      </section>

      {/* Практическое задание 2 */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="danger" bordered>
          {CLASS_PAGE_CONSTANTS.TASK_TITLES.CALCULATOR_TASK}
        </SectionTitle>

        <TaskBlock
          title="🎯 Задача: Создайте класс 'Калькулятор'"
          description={
            <p>
              Создайте класс Calculator, который будет выполнять математические
              операции и запоминать результат.
            </p>
          }
          requirements={calculatorTaskRequirements}
        />

        <ToggleButton
          isToggled={showSolution2}
          onToggle={() => setShowSolution2(!showSolution2)}
          showText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.SHOW_SOLUTION}
          hideText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.HIDE_SOLUTION}
          variant="success"
        />

        {showSolution2 && (
          <InfoBlock type={BLOCK_TYPES.SUCCESS} title="✅ Правильное решение:">
            <CodeBlock
              code={CLASS_PAGE_CONSTANTS.CODE_EXAMPLES.CALCULATOR_SOLUTION}
            />
          </InfoBlock>
        )}
      </section>

      {/* Большое практическое задание */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="danger" bordered>
          {CLASS_PAGE_CONSTANTS.TASK_TITLES.TODO_TASK}
        </SectionTitle>

        <TaskBlock
          title="🎯 Большая задача: Создайте Todo-приложение"
          description={todoTaskDescription}
          requirements={[]}
        />

        <ToggleButton
          isToggled={showSolution3}
          onToggle={() => setShowSolution3(!showSolution3)}
          showText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.SHOW_SOLUTION}
          hideText={CLASS_PAGE_CONSTANTS.BUTTON_TEXTS.HIDE_SOLUTION}
          variant="success"
        />

        {showSolution3 && (
          <InfoBlock type={BLOCK_TYPES.SUCCESS} title="✅ Полное решение:">
            <CodeBlock
              code={CLASS_PAGE_CONSTANTS.CODE_EXAMPLES.TODO_SOLUTION}
              className={styles.classPage__smallCode}
            />
          </InfoBlock>
        )}
      </section>

      {/* Заключение */}
      <section className={styles.classPage__sectionTheme}>
        <SectionTitle color="info" bordered>
          {CLASS_PAGE_CONSTANTS.SECTIONS.CONCLUSION}
        </SectionTitle>

        <InfoBlock type={BLOCK_TYPES.SUCCESS} title="🎯 Что вы теперь умеете:">
          <ul>
            {conclusionSkills.map((skill, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: `✅ ${skill}` }}
              />
            ))}
          </ul>
        </InfoBlock>

        <InfoBlock type={BLOCK_TYPES.INFO} title="💡 Ключевые принципы:">
          <ul>
            {keyPrinciples.map((principle, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: principle }} />
            ))}
          </ul>
        </InfoBlock>

        <InfoBlock type={BLOCK_TYPES.WARNING} title="🚀 Что изучим дальше:">
          <ul>
            {nextTopics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </InfoBlock>
      </section>
    </motion.div>
  );
};

export default memo(ClassPage);
