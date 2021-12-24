interface Entity {
    attackDamage
    health
    name
  
    move()
    attack()
    takeDamage(amount)
  }
  
  class Character implements Entity {
    move(){
      // Do something
    }
  
    attack(){
      // Do something
    }
  
    takeDamage(amount){
      // Do something
    }
  }
  
  class Turret implements Entity {
    move(){
      // ERROR: Cannot move
    }
  }