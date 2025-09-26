const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')


menu.addEventListener('click',function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Course Read functionality
if (window.location.pathname.includes('courseRead.html') || document.getElementById('course-read-main')) {
    
    // Get course from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course') || 'oop';

    // Course content data
    const courseContents = {
        oop: {
            title: "Object-Oriented Programming Concepts",
            subtitle: "Master the fundamental principles that make modern programming powerful",
            meta: {
                difficulty: "Beginner",
                duration: "15 min read",
                lessons: "4 Key Principles"
            },
            content: `
                <div class="content-section">
                    <h2>What is Object-Oriented Programming?</h2>
                    <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code around objects rather than functions and logic. It's based on the concept of "objects" which contain data (attributes) and code (methods). OOP makes programs more modular, reusable, and easier to understand.</p>
                    
                    <div class="highlight-box">
                        <h3>Why Learn OOP?</h3>
                        <ul>
                            <li>Makes code more organized and maintainable</li>
                            <li>Promotes code reusability</li>
                            <li>Easier to debug and modify</li>
                            <li>Models real-world problems naturally</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>The Four Pillars of OOP</h2>
                    
                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>1. Encapsulation</h3>
                            <span class="principle-icon">🔒</span>
                        </div>
                        <p><strong>Definition:</strong> Bundling data (attributes) and methods that work on that data into a single unit (class), while hiding internal implementation details.</p>
                        <p><strong>Example:</strong> A car object encapsulates engine details - you can start the car without knowing how the engine works internally.</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>Data protection and security</li>
                            <li>Easier maintenance</li>
                            <li>Controlled access to object properties</li>
                        </ul>
                    </div>

                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>2. Inheritance</h3>
                            <span class="principle-icon">🧬</span>
                        </div>
                        <p><strong>Definition:</strong> Creating new classes based on existing classes, inheriting their properties and methods.</p>
                        <p><strong>Example:</strong> A "SportsCar" class can inherit from a "Car" class, getting all car properties plus its own specific features.</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>Code reusability</li>
                            <li>Hierarchical organization</li>
                            <li>Easy to extend functionality</li>
                        </ul>
                    </div>

                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>3. Polymorphism</h3>
                            <span class="principle-icon">🎭</span>
                        </div>
                        <p><strong>Definition:</strong> The ability of objects to take multiple forms - same method name can behave differently for different objects.</p>
                        <p><strong>Example:</strong> Both "Dog" and "Cat" classes can have a "makeSound()" method, but dogs bark and cats meow.</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>Flexibility in code design</li>
                            <li>Easy to add new types</li>
                            <li>Runtime method resolution</li>
                        </ul>
                    </div>

                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>4. Abstraction</h3>
                            <span class="principle-icon">🎨</span>
                        </div>
                        <p><strong>Definition:</strong> Hiding complex implementation details while showing only essential features of an object.</p>
                        <p><strong>Example:</strong> When you use a smartphone, you don't need to know about the internal circuits - you just use the interface.</p>
                        <p><strong>Benefits:</strong></p>
                        <ul>
                            <li>Simplifies complex systems</li>
                            <li>Focuses on what objects do, not how</li>
                            <li>Easier to understand and use</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Real-World Examples</h2>
                    <div class="example-box">
                        <h3>Banking System</h3>
                        <p><strong>Classes:</strong> Account, Customer, Transaction</p>
                        <p><strong>Encapsulation:</strong> Account balance is private, accessed through methods</p>
                        <p><strong>Inheritance:</strong> SavingsAccount and CheckingAccount inherit from Account</p>
                        <p><strong>Polymorphism:</strong> Different account types calculate interest differently</p>
                        <p><strong>Abstraction:</strong> Customers see simple deposit/withdraw operations</p>
                    </div>
                </div>
            `
        },
        classobject: {
            title: "Classes and Objects",
            subtitle: "The building blocks of Object-Oriented Programming",
            meta: {
                difficulty: "Beginner",
                duration: "12 min read",
                lessons: "Core Concepts"
            },
            content: `
                <div class="content-section">
                    <h2>Understanding Classes and Objects</h2>
                    <p>Classes and objects are the fundamental building blocks of object-oriented programming. Think of a class as a blueprint or template, and an object as something built from that blueprint.</p>
                    
                    <div class="comparison-box">
                        <div class="comparison-item">
                            <h3>Class</h3>
                            <p>A blueprint or template that defines the structure and behavior of objects</p>
                            <p><strong>Example:</strong> Car blueprint</p>
                        </div>
                        <div class="comparison-item">
                            <h3>Object</h3>
                            <p>An instance of a class with actual values and can perform actions</p>
                            <p><strong>Example:</strong> Your specific Toyota Camry</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Components of a Class</h2>
                    
                    <div class="component-card">
                        <h3>1. Attributes (Properties)</h3>
                        <p>Variables that store the data/state of the object</p>
                        <div class="code-example">
                            <p><strong>Example:</strong></p>
                            <ul>
                                <li>Car attributes: color, model, year, speed</li>
                                <li>Student attributes: name, age, grade, studentID</li>
                            </ul>
                        </div>
                    </div>

                    <div class="component-card">
                        <h3>2. Methods (Functions)</h3>
                        <p>Functions that define what the object can do (behavior)</p>
                        <div class="code-example">
                            <p><strong>Example:</strong></p>
                            <ul>
                                <li>Car methods: start(), stop(), accelerate(), brake()</li>
                                <li>Student methods: study(), takeExam(), getGrade()</li>
                            </ul>
                        </div>
                    </div>

                    <div class="component-card">
                        <h3>3. Constructor</h3>
                        <p>Special method that initializes new objects when they're created</p>
                        <div class="code-example">
                            <p><strong>Purpose:</strong></p>
                            <ul>
                                <li>Set initial values for attributes</li>
                                <li>Perform setup operations</li>
                                <li>Called automatically when object is created</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Creating and Using Objects</h2>
                    
                    <div class="step-card">
                        <h3>Step 1: Define the Class</h3>
                        <p>Create a blueprint with attributes and methods</p>
                    </div>

                    <div class="step-card">
                        <h3>Step 2: Create Objects</h3>
                        <p>Instantiate objects from the class (create actual instances)</p>
                    </div>

                    <div class="step-card">
                        <h3>Step 3: Use Objects</h3>
                        <p>Access attributes and call methods on the objects</p>
                    </div>

                    <div class="highlight-box">
                        <h3>Real Example: Student Class</h3>
                        <p><strong>Class Definition:</strong> Student class with name, age, grade attributes and study(), getInfo() methods</p>
                        <p><strong>Object Creation:</strong> student1 = new Student("Alice", 20, "A")</p>
                        <p><strong>Object Usage:</strong> student1.study(), student1.getInfo()</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Important Concepts</h2>
                    
                    <div class="concept-grid">
                        <div class="concept-item">
                            <h3>Multiple Objects</h3>
                            <p>You can create unlimited objects from one class, each with different values</p>
                        </div>
                        <div class="concept-item">
                            <h3>Independence</h3>
                            <p>Each object has its own copy of attributes and can be modified independently</p>
                        </div>
                        <div class="concept-item">
                            <h3>Memory</h3>
                            <p>Classes don't use memory until objects are created from them</p>
                        </div>
                        <div class="concept-item">
                            <h3>Behavior</h3>
                            <p>All objects from the same class share the same methods but can have different attribute values</p>
                        </div>
                    </div>
                </div>
            `
        },
        inheritance: {
            title: "Inheritance",
            subtitle: "Creating new classes based on existing ones",
            meta: {
                difficulty: "Beginner",
                duration: "10 min read",
                lessons: "Inheritance Concepts"
            },
            content: `
                <div class="content-section">
                    <h2>What is Inheritance?</h2>
                    <p>Inheritance is a mechanism where a new class (child/derived class) acquires properties and methods of an existing class (parent/base class). It promotes code reuse and establishes a relationship between classes.</p>
                    
                    <div class="highlight-box">
                        <h3>Key Benefits</h3>
                        <ul>
                            <li>Code reusability - no need to rewrite common functionality</li>
                            <li>Hierarchical organization of classes</li>
                            <li>Easy to extend and maintain code</li>
                            <li>Supports polymorphism</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Inheritance Terminology</h2>
                    
                    <div class="comparison-box">
                        <div class="comparison-item">
                            <h3>Parent Class</h3>
                            <p>Also called Base Class or Super Class</p>
                            <p>The class being inherited from</p>
                            <p><strong>Example:</strong> Vehicle class</p>
                        </div>
                        <div class="comparison-item">
                            <h3>Child Class</h3>
                            <p>Also called Derived Class or Sub Class</p>
                            <p>The class that inherits</p>
                            <p><strong>Example:</strong> Car class inherits from Vehicle</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>How Inheritance Works</h2>
                    
                    <div class="step-card">
                        <h3>Step 1: Define Parent Class</h3>
                        <p>Create a base class with common attributes and methods</p>
                        <div class="code-example">
                            <p>Vehicle class: brand, model, start(), stop()</p>
                        </div>
                    </div>

                    <div class="step-card">
                        <h3>Step 2: Create Child Class</h3>
                        <p>Use inheritance to extend the parent class</p>
                        <div class="code-example">
                            <p>Car extends Vehicle: inherits brand, model, start(), stop()</p>
                        </div>
                    </div>

                    <div class="step-card">
                        <h3>Step 3: Add Specific Features</h3>
                        <p>Child class can have its own unique attributes and methods</p>
                        <div class="code-example">
                            <p>Car adds: doors, openTrunk() method</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Types of Inheritance</h2>
                    
                    <div class="concept-grid">
                        <div class="concept-item">
                            <h3>Single Inheritance</h3>
                            <p>One child class inherits from one parent class</p>
                        </div>
                        <div class="concept-item">
                            <h3>Multiple Inheritance</h3>
                            <p>One child class inherits from multiple parent classes (not supported in all languages)</p>
                        </div>
                        <div class="concept-item">
                            <h3>Multilevel Inheritance</h3>
                            <p>Chain of inheritance: A → B → C</p>
                        </div>
                        <div class="concept-item">
                            <h3>Hierarchical Inheritance</h3>
                            <p>Multiple child classes inherit from one parent</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Method Overriding</h2>
                    <div class="example-box">
                        <h3>Customizing Inherited Methods</h3>
                        <p>Child classes can override parent methods to provide specific implementations</p>
                        <p><strong>Example:</strong> Vehicle.start() vs SportsCar.start() (with turbo boost)</p>
                        <p><strong>Benefit:</strong> Same method name, different behavior based on object type</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Access Control</h2>
                    <div class="highlight-box">
                        <h3>What Can Child Classes Access?</h3>
                        <ul>
                            <li><strong>Public:</strong> ✅ Accessible from child classes</li>
                            <li><strong>Protected:</strong> ✅ Accessible from child classes</li>
                            <li><strong>Private:</strong> ❌ Not directly accessible from child classes</li>
                        </ul>
                    </div>
                </div>
            `
        },
        interface: {
            title: "Interface",
            subtitle: "Contracts that define what methods a class must implement",
            meta: {
                difficulty: "Intermediate",
                duration: "8 min read",
                lessons: "Interface Concepts"
            },
            content: `
                <div class="content-section">
                    <h2>What is an Interface?</h2>
                    <p>An interface is a contract that defines what methods a class must implement, without providing the actual implementation. It specifies "what" a class should do, but not "how" it should do it.</p>
                    
                    <div class="highlight-box">
                        <h3>Key Characteristics</h3>
                        <ul>
                            <li>Contains method signatures only (no implementation)</li>
                            <li>Classes "implement" interfaces</li>
                            <li>Multiple interfaces can be implemented by one class</li>
                            <li>Ensures consistent method contracts</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Interface vs Class</h2>
                    
                    <div class="comparison-box">
                        <div class="comparison-item">
                            <h3>Interface</h3>
                            <p>Contract with method signatures</p>
                            <p>No implementation</p>
                            <p>Multiple implementation allowed</p>
                            <p><strong>Keyword:</strong> implements</p>
                        </div>
                        <div class="comparison-item">
                            <h3>Class</h3>
                            <p>Blueprint with actual code</p>
                            <p>Has implementation</p>
                            <p>Single inheritance (usually)</p>
                            <p><strong>Keyword:</strong> extends</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Why Use Interfaces?</h2>
                    
                    <div class="concept-grid">
                        <div class="concept-item">
                            <h3>Standardization</h3>
                            <p>Ensures all implementing classes have the same method signatures</p>
                        </div>
                        <div class="concept-item">
                            <h3>Multiple Implementation</h3>
                            <p>One class can implement multiple interfaces</p>
                        </div>
                        <div class="concept-item">
                            <h3>Abstraction</h3>
                            <p>Hides implementation details, focuses on what needs to be done</p>
                        </div>
                        <div class="concept-item">
                            <h3>Flexibility</h3>
                            <p>Easy to swap implementations without changing the interface</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Real-World Example</h2>
                    <div class="example-box">
                        <h3>Drawable Interface</h3>
                        <p><strong>Interface:</strong> Drawable with draw() method</p>
                        <p><strong>Implementations:</strong></p>
                        <ul>
                            <li>Circle class implements Drawable → draws a circle</li>
                            <li>Rectangle class implements Drawable → draws a rectangle</li>
                            <li>Triangle class implements Drawable → draws a triangle</li>
                        </ul>
                        <p><strong>Benefit:</strong> Same draw() method name, different drawing implementations</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Implementation Rules</h2>
                    
                    <div class="step-card">
                        <h3>Rule 1: Implement All Methods</h3>
                        <p>A class must implement ALL methods declared in the interface</p>
                    </div>

                    <div class="step-card">
                        <h3>Rule 2: Exact Method Signature</h3>
                        <p>Method names, parameters, and return types must match exactly</p>
                    </div>

                    <div class="step-card">
                        <h3>Rule 3: Public Implementation</h3>
                        <p>Implemented methods are typically public</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Benefits of Interfaces</h2>
                    <div class="highlight-box">
                        <h3>Why Interfaces are Powerful</h3>
                        <ul>
                            <li><strong>Loose Coupling:</strong> Classes depend on interfaces, not concrete implementations</li>
                            <li><strong>Testability:</strong> Easy to create mock implementations for testing</li>
                            <li><strong>Maintainability:</strong> Changes to implementation don't affect interface users</li>
                            <li><strong>Polymorphism:</strong> Different classes can be treated uniformly through interfaces</li>
                        </ul>
                    </div>
                </div>
            `
        },
        polymorphism: {
            title: "Polymorphism",
            subtitle: "One interface, multiple implementations - objects taking many forms",
            meta: {
                difficulty: "Intermediate",
                duration: "12 min read",
                lessons: "Polymorphism Types"
            },
            content: `
                <div class="content-section">
                    <h2>What is Polymorphism?</h2>
                    <p>Polymorphism means "many forms." In OOP, it's the ability of objects to take multiple forms. The same method name can behave differently depending on the object that calls it. This allows one interface to be used for different underlying data types.</p>
                    
                    <div class="highlight-box">
                        <h3>Real-World Analogy</h3>
                        <p>Think of a remote control. The "power" button works the same way (same interface) but does different things depending on the device - turns on TV, stereo, or air conditioner. Same button, different behaviors!</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Types of Polymorphism</h2>
                    
                    <div class="comparison-box">
                        <div class="comparison-item">
                            <h3>Compile-time (Static)</h3>
                            <p>Resolved during compilation</p>
                            <p>Method Overloading</p>
                            <p>Same name, different parameters</p>
                        </div>
                        <div class="comparison-item">
                            <h3>Runtime (Dynamic)</h3>
                            <p>Resolved during execution</p>
                            <p>Method Overriding</p>
                            <p>Same signature, different implementation</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Method Overloading (Compile-time)</h2>
                    
                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>Method Overloading</h3>
                            <span class="principle-icon">⚡</span>
                        </div>
                        <p><strong>Definition:</strong> Multiple methods with the same name but different parameters in the same class.</p>
                        
                        <div class="code-example">
                            <p><strong>Example: Calculator Class</strong></p>
                            <ul>
                                <li>add(int a, int b) → adds two integers</li>
                                <li>add(double a, double b) → adds two decimals</li>
                                <li>add(int a, int b, int c) → adds three integers</li>
                            </ul>
                        </div>
                        
                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>Same method name, different parameter lists</li>
                            <li>Compiler decides which method to call</li>
                            <li>Improves code readability</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Method Overriding (Runtime)</h2>
                    
                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>Method Overriding</h3>
                            <span class="principle-icon">🔄</span>
                        </div>
                        <p><strong>Definition:</strong> Child class provides a specific implementation of a method that is already defined in parent class.</p>
                        
                        <div class="code-example">
                            <p><strong>Example: Animal Classes</strong></p>
                            <ul>
                                <li>Animal class: makeSound() → "Some generic sound"</li>
                                <li>Dog class: makeSound() → "Woof!"</li>
                                <li>Cat class: makeSound() → "Meow!"</li>
                            </ul>
                        </div>
                        
                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>Same method signature as parent</li>
                            <li>Runtime decides which method to call</li>
                            <li>Enables dynamic behavior</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Benefits of Polymorphism</h2>
                    
                    <div class="concept-grid">
                        <div class="concept-item">
                            <h3>Code Flexibility</h3>
                            <p>Same code can work with different object types</p>
                        </div>
                        <div class="concept-item">
                            <h3>Extensibility</h3>
                            <p>Easy to add new classes without changing existing code</p>
                        </div>
                        <div class="concept-item">
                            <h3>Maintainability</h3>
                            <p>Changes in implementation don't affect calling code</p>
                        </div>
                        <div class="concept-item">
                            <h3>Reusability</h3>
                            <p>One interface can be used for multiple implementations</p>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Practical Examples</h2>
                    
                    <div class="example-box">
                        <h3>Shape Drawing System</h3>
                        <p><strong>Base:</strong> Shape class with draw() method</p>
                        <p><strong>Implementations:</strong></p>
                        <ul>
                            <li>Circle.draw() → draws a circle</li>
                            <li>Rectangle.draw() → draws a rectangle</li>
                            <li>Triangle.draw() → draws a triangle</li>
                        </ul>
                        <p><strong>Usage:</strong> Shape[] shapes = {circle, rectangle, triangle}; for each shape: shape.draw();</p>
                        <p><strong>Result:</strong> Each shape draws itself correctly without knowing specific type!</p>
                    </div>

                    <div class="example-box">
                        <h3>Payment Processing</h3>
                        <p><strong>Interface:</strong> PaymentProcessor with processPayment() method</p>
                        <p><strong>Implementations:</strong></p>
                        <ul>
                            <li>CreditCardProcessor → processes credit card payments</li>
                            <li>PayPalProcessor → processes PayPal payments</li>
                            <li>BankTransferProcessor → processes bank transfers</li>
                        </ul>
                        <p><strong>Benefit:</strong> Same payment interface, different processing methods</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Key Concepts to Remember</h2>
                    <div class="highlight-box">
                        <h3>Polymorphism Essentials</h3>
                        <ul>
                            <li><strong>Same Interface:</strong> Methods have the same name/signature</li>
                            <li><strong>Different Behavior:</strong> Each implementation acts differently</li>
                            <li><strong>Runtime Decision:</strong> Which method to call is decided at runtime</li>
                            <li><strong>Flexibility:</strong> New types can be added without changing existing code</li>
                        </ul>
                    </div>
                </div>
            `
        },
        numbercharstring: {
            title: "Number, Character and String",
            subtitle: "Master fundamental data types for effective programming",
            meta: {
                difficulty: "Beginner",
                duration: "10 min read",
                lessons: "Data Types"
            },
            content: `
                <div class="content-section">
                    <h2>Understanding Data Types</h2>
                    <p>Data types are fundamental building blocks in programming that define what kind of data can be stored and manipulated. Understanding numbers, characters, and strings is essential for any programmer.</p>
                    
                    <div class="highlight-box">
                        <h3>Why Data Types Matter</h3>
                        <ul>
                            <li>Determine how much memory to allocate</li>
                            <li>Define what operations can be performed</li>
                            <li>Help prevent programming errors</li>
                            <li>Optimize program performance</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Number Data Types</h2>
                    
                    <div class="component-card">
                        <h3>Integer Types</h3>
                        <p>Store whole numbers (positive, negative, or zero)</p>
                        <div class="code-example">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>int: -2147483648 to 2147483647</li>
                                <li>long: much larger range for big numbers</li>
                                <li>short: smaller range, uses less memory</li>
                            </ul>
                        </div>
                        <p><strong>Use cases:</strong> Counting, indexing, mathematical calculations with whole numbers</p>
                    </div>

                    <div class="component-card">
                        <h3>Floating-Point Types</h3>
                        <p>Store decimal numbers (numbers with fractional parts)</p>
                        <div class="code-example">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>float: 3.14159, -0.5, 1.23e-4</li>
                                <li>double: higher precision than float</li>
                                <li>decimal: exact decimal representation</li>
                            </ul>
                        </div>
                        <p><strong>Use cases:</strong> Scientific calculations, financial data, measurements</p>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Character Data Type</h2>
                    
                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>Character (char)</h3>
                            <span class="principle-icon">🔤</span>
                        </div>
                        <p><strong>Definition:</strong> Stores a single character, letter, digit, or symbol.</p>
                        
                        <div class="code-example">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>'A', 'z', '5', '@', ' ' (space)</li>
                                <li>Unicode characters: '€', '中', '🙂'</li>
                                <li>Escape characters: '\\n' (newline), '\\t' (tab)</li>
                            </ul>
                        </div>
                        
                        <p><strong>Key Points:</strong></p>
                        <ul>
                            <li>Enclosed in single quotes</li>
                            <li>Can be converted to/from numbers (ASCII values)</li>
                            <li>Used for text processing character by character</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>String Data Type</h2>
                    
                    <div class="principle-card">
                        <div class="principle-header">
                            <h3>String</h3>
                            <span class="principle-icon">📝</span>
                        </div>
                        <p><strong>Definition:</strong> A sequence or collection of characters treated as a single unit.</p>
                        
                        <div class="code-example">
                            <p><strong>Examples:</strong></p>
                            <ul>
                                <li>"Hello, World!"</li>
                                <li>"Programming123"</li>
                                <li>"" (empty string)</li>
                                <li>"A" (single character in string form)</li>
                            </ul>
                        </div>
                        
                        <p><strong>Key Characteristics:</strong></p>
                        <ul>
                            <li>Enclosed in double quotes</li>
                            <li>Can contain any characters including spaces</li>
                            <li>Length can vary from 0 to very large</li>
                            <li>Often immutable (cannot be changed directly)</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>String Operations</h2>
                    
                    <div class="concept-grid">
                        <div class="concept-item">
                            <h3>Concatenation</h3>
                            <p>Joining two or more strings together</p>
                            <div class="code-example">
                                <p>"Hello" + " " + "World" = "Hello World"</p>
                            </div>
                        </div>
                        <div class="concept-item">
                            <h3>Length</h3>
                            <p>Getting the number of characters in a string</p>
                            <div class="code-example">
                                <p>"Programming".length() = 11</p>
                            </div>
                        </div>
                        <div class="concept-item">
                            <h3>Substring</h3>
                            <p>Extracting part of a string</p>
                            <div class="code-example">
                                <p>"Programming".substring(0,7) = "Program"</p>
                            </div>
                        </div>
                        <div class="concept-item">
                            <h3>Case Conversion</h3>
                            <p>Changing between uppercase and lowercase</p>
                            <div class="code-example">
                                <p>"Hello".toUpperCase() = "HELLO"</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Common Use Cases</h2>
                    
                    <div class="example-box">
                        <h3>Numbers</h3>
                        <ul>
                            <li><strong>Integers:</strong> Age, quantity, array indices, loop counters</li>
                            <li><strong>Floats:</strong> Prices, measurements, scientific calculations, percentages</li>
                        </ul>
                    </div>

                    <div class="example-box">
                        <h3>Characters</h3>
                        <ul>
                            <li>Grade letters (A, B, C, D, F)</li>
                            <li>Menu choices (Y/N, 1/2/3)</li>
                            <li>Text processing character by character</li>
                        </ul>
                    </div>

                    <div class="example-box">
                        <h3>Strings</h3>
                        <ul>
                            <li>Names, addresses, descriptions</li>
                            <li>User input and output messages</li>
                            <li>File names and paths</li>
                            <li>JSON data, URLs, email addresses</li>
                        </ul>
                    </div>
                </div>

                <div class="content-section">
                    <h2>Best Practices</h2>
                    <div class="highlight-box">
                        <h3>Tips for Working with Data Types</h3>
                        <ul>
                            <li><strong>Choose appropriate types:</strong> Use int for whole numbers, double for decimals</li>
                            <li><strong>Validate input:</strong> Check if user input matches expected data type</li>
                            <li><strong>Handle edge cases:</strong> Empty strings, very large numbers, special characters</li>
                            <li><strong>Be memory conscious:</strong> Don't use long when int is sufficient</li>
                            <li><strong>String handling:</strong> Remember strings are often immutable</li>
                        </ul>
                    </div>
                </div>
            `
        }
    };

    const courseNavigation = {
        oop: { name: "OOP Concept", url: "courseRead.html?course=oop" },
        classobject: { name: "Class and Object", url: "courseRead.html?course=classobject" },
        inheritance: { name: "Inheritance", url: "courseRead.html?course=inheritance" },
        interface: { name: "Interface", url: "courseRead.html?course=interface" },
        polymorphism: { name: "Polymorphism", url: "courseRead.html?course=polymorphism" },
        numbercharstring: { name: "Number, Character & String", url: "courseRead.html?course=numbercharstring" }
    };

    // Load course content
    function loadCourseContent() {
        const currentCourse = courseContents[course] || courseContents.oop;
        
        // Update header
        document.getElementById('course-read-title').textContent = currentCourse.title;
        document.getElementById('course-read-subtitle').textContent = currentCourse.subtitle;
        
        // Update meta info
        const metaHtml = `
            <span class="difficulty">${currentCourse.meta.difficulty}</span>
            <span class="duration">${currentCourse.meta.duration}</span>
            <span class="lessons">${currentCourse.meta.lessons}</span>
        `;
        document.getElementById('course-read-meta').innerHTML = metaHtml;
        
        // Update main content
        document.getElementById('course-read-main').innerHTML = currentCourse.content;
        
        // Update quiz link
        document.getElementById('quiz-link').href = `quiz.html?course=${course}`;
        
        // Update navigation links
        let navLinksHtml = '';
        for (const [key, nav] of Object.entries(courseNavigation)) {
            const activeClass = key === course ? 'active' : '';
            navLinksHtml += `<a href="${nav.url}" class="course-nav-link ${activeClass}">${nav.name}</a>`;
        }
        document.getElementById('course-nav-links').innerHTML = navLinksHtml;
    }

    // Initialize course content when page loads
    document.addEventListener('DOMContentLoaded', loadCourseContent);
}



// Get course from URL parameter
const urlParams = new URLSearchParams(window.location.search);
const course = urlParams.get('course') || 'oop';

// Quiz data for different courses
const quizzes = {
    oop: {
        title: "OOP Concept Quiz",
        questions: [
            {
                question: "What are the four main principles of Object-Oriented Programming?",
                options: [
                    "Encapsulation, Inheritance, Polymorphism, Abstraction",
                    "Classes, Objects, Methods, Variables",
                    "Public, Private, Protected, Static",
                    "Create, Read, Update, Delete"
                ],
                correct: 0
            },
            {
                question: "What is encapsulation in OOP?",
                options: [
                    "Creating multiple objects from a class",
                    "Hiding internal data and implementation details from outside access",
                    "Inheriting properties from parent class",
                    "Using the same interface for different data types"
                ],
                correct: 1
            },
            {
                question: "What is the main benefit of using OOP?",
                options: [
                    "Faster execution speed",
                    "Less memory usage",
                    "Code reusability and maintainability",
                    "Smaller file sizes"
                ],
                correct: 2
            },
            {
                question: "What is abstraction in OOP?",
                options: [
                    "Hiding complex implementation details and showing only essential features",
                    "Creating abstract art with code",
                    "Making code run faster",
                    "Reducing file size"
                ],
                correct: 0
            },
            {
                question: "Which concept allows different classes to have methods with the same name but different implementations?",
                options: [
                    "Encapsulation",
                    "Inheritance", 
                    "Polymorphism",
                    "Abstraction"
                ],
                correct: 2
            }
        ]
    },
    classobject: {
        title: "Class and Object Quiz",
        questions: [
            {
                question: "What is a class in OOP?",
                options: [
                    "An instance of an object",
                    "A blueprint or template for creating objects",
                    "A method inside an object",
                    "A variable that stores data"
                ],
                correct: 1
            },
            {
                question: "What is an object in OOP?",
                options: [
                    "A template for creating classes",
                    "A function that returns data",
                    "An instance of a class with actual values",
                    "A type of variable"
                ],
                correct: 2
            },
            {
                question: "What are attributes in a class?",
                options: [
                    "Methods that perform actions",
                    "Variables that store data/properties of the class",
                    "Functions that return values",
                    "Constructors that initialize objects"
                ],
                correct: 1
            },
            {
                question: "What is a constructor?",
                options: [
                    "A method that destroys objects",
                    "A special method used to initialize objects when they are created",
                    "A method that copies objects",
                    "A method that converts objects to strings"
                ],
                correct: 1
            },
            {
                question: "How many objects can be created from one class?",
                options: [
                    "Only one",
                    "Maximum 10",
                    "Unlimited number of objects",
                    "Depends on the programming language"
                ],
                correct: 2
            }
        ]
    },
    inheritance: {
        title: "Inheritance Quiz",
        questions: [
            {
                question: "What is inheritance in OOP?",
                options: [
                    "Creating new objects",
                    "A mechanism where a new class acquires properties and methods of an existing class",
                    "Hiding data from other classes",
                    "Converting one data type to another"
                ],
                correct: 1
            },
            {
                question: "What is the parent class also called?",
                options: [
                    "Child class",
                    "Derived class",
                    "Base class or Super class",
                    "Sub class"
                ],
                correct: 2
            },
            {
                question: "What is the child class also called?",
                options: [
                    "Parent class",
                    "Base class",
                    "Super class",
                    "Derived class or Sub class"
                ],
                correct: 3
            },
            {
                question: "What keyword is commonly used to implement inheritance?",
                options: [
                    "implements",
                    "extends or inherits",
                    "includes",
                    "imports"
                ],
                correct: 1
            },
            {
                question: "Can a child class access private members of the parent class?",
                options: [
                    "Yes, always",
                    "No, never",
                    "Only with special permissions",
                    "Only through public methods"
                ],
                correct: 1
            }
        ]
    },
    interface: {
        title: "Interface Quiz",
        questions: [
            {
                question: "What is an interface in OOP?",
                options: [
                    "A class with only private methods",
                    "A contract that defines what methods a class must implement",
                    "A type of inheritance",
                    "A way to create objects"
                ],
                correct: 1
            },
            {
                question: "Can an interface contain method implementations?",
                options: [
                    "Yes, all methods must have implementations",
                    "No, interfaces only contain method signatures",
                    "Only some methods can have implementations",
                    "It depends on the programming language"
                ],
                correct: 3
            },
            {
                question: "Can a class implement multiple interfaces?",
                options: [
                    "No, only one interface per class",
                    "Yes, a class can implement multiple interfaces",
                    "Only if the interfaces are related",
                    "Maximum of two interfaces per class"
                ],
                correct: 1
            },
            {
                question: "What keyword is used to implement an interface?",
                options: [
                    "extends",
                    "inherits",
                    "implements",
                    "uses"
                ],
                correct: 2
            },
            {
                question: "What happens if a class implements an interface but doesn't implement all required methods?",
                options: [
                    "The program runs with warnings",
                    "The missing methods are automatically created",
                    "Compilation error occurs",
                    "The interface is ignored"
                ],
                correct: 2
            }
        ]
    },
    polymorphism: {
        title: "Polymorphism Quiz",
        questions: [
            {
                question: "What does polymorphism mean in OOP?",
                options: [
                    "Having multiple constructors in a class",
                    "Using multiple inheritance",
                    "One interface, multiple implementations - ability to take many forms",
                    "Creating abstract classes only"
                ],
                correct: 2
            },
            {
                question: "What are the two main types of polymorphism?",
                options: [
                    "Static and Dynamic",
                    "Compile-time and Run-time",
                    "Method overloading and Method overriding",
                    "All of the above"
                ],
                correct: 3
            },
            {
                question: "What is method overloading?",
                options: [
                    "Changing the implementation of inherited methods",
                    "Having multiple methods with the same name but different parameters",
                    "Creating too many methods in a class",
                    "Using methods from multiple classes"
                ],
                correct: 1
            },
            {
                question: "What is method overriding?",
                options: [
                    "Creating new methods in a class",
                    "Deleting methods from parent class",
                    "Redefining a method in child class that was already defined in parent class",
                    "Having multiple methods with same name"
                ],
                correct: 2
            },
            {
                question: "Which type of polymorphism is resolved at compile time?",
                options: [
                    "Method overriding",
                    "Method overloading",
                    "Dynamic polymorphism",
                    "Run-time polymorphism"
                ],
                correct: 1
            }
        ]
    },
    numbercharstring: {
        title: "Number, Character and String Quiz",
        questions: [
            {
                question: "Which of the following is NOT a numeric data type?",
                options: [
                    "int (integer)",
                    "float (floating-point)",
                    "double (double precision)",
                    "char (character)"
                ],
                correct: 3
            },
            {
                question: "What is a character data type used for?",
                options: [
                    "Storing whole numbers",
                    "Storing decimal numbers",
                    "Storing a single character or symbol",
                    "Storing multiple characters"
                ],
                correct: 2
            },
            {
                question: "What is a string?",
                options: [
                    "A single character",
                    "A sequence or collection of characters",
                    "A numeric value",
                    "A boolean value"
                ],
                correct: 1
            },
            {
                question: "Which operation can be performed on strings?",
                options: [
                    "Concatenation (joining strings)",
                    "Length calculation",
                    "Substring extraction",
                    "All of the above"
                ],
                correct: 3
            },
            {
                question: "What is string concatenation?",
                options: [
                    "Splitting a string into parts",
                    "Converting string to uppercase",
                    "Joining two or more strings together",
                    "Reversing a string"
                ],
                correct: 2
            }
        ]
    
    }
};

// Quiz state
let currentQuiz = {};
let currentQuestion = 0;
let userAnswers = [];
let score = 0;

// Load quiz based on course parameter
function loadQuiz() {
    currentQuiz = quizzes[course] || quizzes.oop;
    document.getElementById('quiz-title').textContent = currentQuiz.title;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    showQuestion();
}

// Display current question
function showQuestion() {
    const question = currentQuiz.questions[currentQuestion];
    const progressPercent = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;
    
    // Update progress
    document.getElementById('progress-fill').style.width = progressPercent + '%';
    document.getElementById('progress-text').textContent = 
        `Question ${currentQuestion + 1} of ${currentQuiz.questions.length}`;
    
    // Create question HTML
    const questionHTML = `
        <div class="question-card">
            <h2 class="question-title">${question.question}</h2>
            <div class="quiz-options">
                ${question.options.map((option, index) => `
                    <div class="quiz-option" onclick="selectAnswer(${index})" data-index="${index}">
                        ${option}
                    </div>
                `).join('')}
            </div>
            <div class="quiz-navigation">
                <button class="quiz-btn" onclick="previousQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                    Previous
                </button>
                <button class="quiz-btn" onclick="nextQuestion()" id="next-btn" disabled>
                    ${currentQuestion === currentQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next'}
                </button>
            </div>
        </div>
    `;
    
    document.getElementById('quiz-content').innerHTML = questionHTML;
    
    // Restore selected answer if exists
    if (userAnswers[currentQuestion] !== null) {
        const selectedOption = document.querySelector(`[data-index="${userAnswers[currentQuestion]}"]`);
        selectedOption.classList.add('selected');
        document.getElementById('next-btn').disabled = false;
    }
}

// Handle answer selection
function selectAnswer(selectedIndex) {
    // Remove previous selection
    document.querySelectorAll('.quiz-option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Add selection to clicked option
    document.querySelector(`[data-index="${selectedIndex}"]`).classList.add('selected');
    
    // Store answer
    userAnswers[currentQuestion] = selectedIndex;
    
    // Enable next button
    document.getElementById('next-btn').disabled = false;
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestion < currentQuiz.questions.length - 1) {
        currentQuestion++;
        showQuestion();
    } else {
        finishQuiz();
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }
}

// Calculate and show results
function finishQuiz() {
    score = 0;
    userAnswers.forEach((answer, index) => {
        if (answer === currentQuiz.questions[index].correct) {
            score++;
        }
    });
    
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    let message = "";
    
    if (percentage >= 80) {
        message = "Excellent! You have mastered this topic!";
    } else if (percentage >= 60) {
        message = "Good job! You have a solid understanding.";
    } else if (percentage >= 40) {
        message = "Not bad, but you might want to review the material.";
    } else {
        message = "You should review the course material and try again.";
    }
    
    const resultsHTML = `
        <div class="result-score">${percentage}%</div>
        <div class="result-message">${message}</div>
        <div class="result-details">
            <div class="result-stat">
                <h3>Correct</h3>
                <p>${score}</p>
            </div>
            <div class="result-stat">
                <h3>Incorrect</h3>
                <p>${currentQuiz.questions.length - score}</p>
            </div>
            <div class="result-stat">
                <h3>Total</h3>
                <p>${currentQuiz.questions.length}</p>
            </div>
            <div class="result-stat">
                <h3>Score</h3>
                <p>${percentage}%</p>
            </div>
        </div>
        <button class="quiz-btn" onclick="restartQuiz()">Try Again</button>
        <button class="quiz-btn" onclick="window.location.href='course.html'">Back to Courses</button>
    `;
    
    document.getElementById('quiz-content').style.display = 'none';
    document.getElementById('quiz-results').innerHTML = resultsHTML;
    document.getElementById('quiz-results').style.display = 'block';
}

// Restart quiz
function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(null);
    score = 0;
    document.getElementById('quiz-content').style.display = 'block';
    document.getElementById('quiz-results').style.display = 'none';
    showQuestion();
}

// Initialize quiz when page loads
document.addEventListener('DOMContentLoaded', loadQuiz);