class Shape{
	constructor(id, x, y){
		this.id = id;
		this.x = x;
		this.y = y;
	}
	
	move(x, y){
		this.x = x;
		this.y = y;
	}
}

class Rectangle extends Shape{
	constructor(id, x, y, width, height){
		super(id, x, y);
		this.width = width;
		this.height = height;
	}
	
	getX(){
		return this.x;
	}
}

class Circle extends Shape{
	constructor(id, x, y, radius){
		super(id, x, y);
		this.radius = radius;
	}
}

class Eye extends Circle{
	constructor(id, x, y, radius, color){
		super(id, x, y, radius);
		this.color = color;
	}
	
	roll(rollAmount){
		super.move(this.x, this.y);
		this.x = this.x + rollAmount;
	}
}

const shape = new Shape(1, 10, 15);
shape.move(5, 5);
console.log(`ID: ${shape.id}, X: ${shape.x}, Y: ${shape.y}`);

const rectangle = new Rectangle(2, 10, 15, 20, 25);
rectangle.move(30, 25);
//console.log(rectangle.getX());
console.log(`ID: ${rectangle.id}, X: ${rectangle.x}, Y: ${rectangle.y}, Width: ${rectangle.width}, Height: ${rectangle.height}`);

const circle = new Circle(3, 10, 15, 30);
circle.move(40, 45);
console.log(`ID: ${circle.id}, X: ${circle.x}, Y: ${circle.y}, Radius: ${circle.radius}`);

const eye = new Eye(4, 15, 20, 10, 'Green');
console.log(`ID: ${eye.id}, X: ${eye.x}, Y: ${eye.y}, Radius: ${eye.color}`);