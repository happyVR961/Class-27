class Chain {
    constructor (a,b){
        var options={
            stiffness: 0.04,
            length: 20,
            bodyA:a,
            bodyB:b
        }
        this.happy = Constraint.create(options);
        World.add(world,this.happy);
    }
    display(){
        var posA = this.happy.bodyA.position;
        var posB = this.happy.bodyB.position;
        strokeWeight(4);
        line(posA.x, posA.y, posB.x, posB.y);

    }
}