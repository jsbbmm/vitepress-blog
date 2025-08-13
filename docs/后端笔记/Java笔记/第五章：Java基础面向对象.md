### 第五章：Java基础面向对象

#### 1,继承
继承是面向对象编程的一个重要特性，它允许一个类（子类）继承另一个类（父类）的属性和方法。通过继承，子类可以重用父类的代码，并且可以添加自己的特性。

```java
class Animal {	
    // 属性
    String name;
    int age;
    
    // 方法
    void eat() {
        System.out.println("动物会吃");
    }
}
```

子类可以通过 `extends` 关键字来继承父类。

```java
class Dog extends Animal {
    // 属性
    String breed;
    
    // 方法
    void bark() {
        System.out.println("狗会叫");
    }
}
```

子类继承了父类的属性和方法，并且可以添加自己的属性和方法。
注意：1，子类不能继承父类的构造方法，但是可以通过 `super` 关键字来调用父类的构造方法。
     2，子类可以继承父类中私有和非私有成员，但是不能使用父类中私有成员。
	 3，子类可以重写父类的方法。
	 4，继承不要冲是否拥有方面来来学习，要从是否能使用方面来学习。

总结： 继承前提下，成员变量访问特点口诀，看等号左边是谁，先调用谁中的成员，子类没有，找父类。
```java
Dog dog = new Dog();
dog.name = "小白";
dog.age = 3;
dog.breed = "拉布拉多";
dog.eat(); // 动物会吃
dog.bark(); // 狗会叫
```

#### 2,多态
多态是指同一个方法在不同的对象上有不同的表现。多态可以通过继承和方法重写来实现。

```java
class Animal {
    void eat() {
        System.out.println("动物会吃");
    }
}

class Dog extends Animal {
    void eat() {
        System.out.println("狗吃狗粮");
    }
}

class Cat extends Animal {
    void eat() {
        System.out.println("猫吃猫粮");
    }
}
```

多态的实现：

```java
Animal animal = new Dog();
animal.eat(); // 狗吃狗粮

animal = new Cat();	
animal.eat(); // 猫吃猫粮
```

#### 3,封装
封装是面向对象编程的一个重要特性，它指的是将数据和操作数据的方法封装在一个类中，外部只能通过类提供的方法来访问数据，而不能直接访问数据。

```java
class Person {
	// 私有属性
    private String name;
    private int age;
    
    // 提供公共的方法来访问属性
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public int getAge() {
        return age;
    }
    
    public void setAge(int age) {
        this.age = age;
    }
}
```

通过提供公共的方法来访问属性，外部可以通过这些方法来访问属性，而不能直接访问属性。	
例如：

```java
Person person = new Person();
person.setName("张三");
person.setAge(18);
System.out.println(person.getName()); // 张三
System.out.println(person.getAge()); // 18
```

注意事项：
1， 子类重写父类方法之后，权限必须大于等于父类方法
权限大小： public > protected > default > private
2， 私有方法不能被重写，构造方法不能被重写，静态方法不能被重写
3， 子类方法重写父类方法，方法名和参数必须相同
4， 子类方法重写父类方法，返回值类型必须相同或者子类类型
5， super() 调用父类构造方法，必须在子类构造方法的第一行
6， super. 调用父类方法
6,  this() 调用本类构造方法，必须在本类构造方法的第一行
7, 继承必须是单继承象，不能多继承
8， 构造方法比能被继承，也不能被重写
9，私有方法可以继承，但是不能被重写
10， 静态方法不能被继承，不能被重写，但是可以通过类名调用
11， 静态方法中不能使用 this 关键字，也不能使用 super 关键字
12， 静态方法不能访问非静态成员变量和非静态方法，因为非静态成员变量和非静态方法是依赖于对象的，而静态方法是依赖于类的。