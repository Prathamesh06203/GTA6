<?php


class Shape {
protected $name;
public function __construct($name) {
$this->name = $name;
}
public function getName() {
return $this->name;
}
public function calculateArea() {
// Base class method, to be overridden by subclasses
return 0;
}
}
class Triangle extends Shape {
    private $base;
    private $height;
    public function __construct($base, $height) {
    parent::__construct("Triangle");
    $this->base = $base;
    $this->height = $height;
}
public function calculateArea() {
    return 0.5 * $this->base * $this->height;
}
}
class Square extends Shape {
private $side;
public function __construct($side) {
parent::__construct("Square");
$this->side = $side;
}
public function calculateArea() {
return $this->side * $this->side;
}
}

class Circle extends Shape {
    private $radius;
    public function __construct($radius) {
    parent::__construct("Circle");
    $this->radius = $radius;
    }
    public function calculateArea() {
    return M_PI * $this->radius * $this->radius;
    }
    }
    if (isset($_POST['shape'])) {
    $selectedShape = $_POST['shape'];
    switch ($selectedShape) {
    case 'triangle':
    $triangle = new Triangle(10, 5);
    echo "Area of " . $triangle->getName() . ": " . $triangle->calculateArea();
    break;
    case 'square':
    $square = new Square(8);
    echo "Area of " . $square->getName() . ": " . $square->calculateArea();
    break;
    case 'circle':
    $circle = new Circle(4);
    echo "Area of " . $circle->getName() . ": " . $circle->calculateArea();
    break;
    default:
    echo "Please select a shape: ";
    break;
    }
}
    

?>