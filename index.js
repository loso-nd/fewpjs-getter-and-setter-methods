// Add your Circle class here  
class Circle {
    constructor (radius){
        this.radius = radius
    }

    get diameter() {
        return this.radius * 2;
      }

    get circumference() {
    return Math.PI * this.radius * 2
    }

    get area() {
    return Math.PI * this.radius * this.radius;
    }

    set diameter(radius){
        this.radius = 18
    }

    set circumference(circumference){
        this.radius = 15
    }
}

// Diameter = radius • 2
// Circumference = π • diameter
// Area = π • radius2