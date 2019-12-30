// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
function clean(){
    this.removeFromParent(true);
}
cc.Class({
    extends: cc.Component,

    properties: {
        up:cc.Node,
        down:cc.Node,
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:
    
    onLoad () {
        this.node.x = 0;
        let y = -400+Math.random()*500;
        this.node.y = y
        this.move()
    },
    move(){
        this.node.x-=this.speed;
    },

    update (dt) {
        this.move();
        if(this.node.x+this.node.width<=0){
            // console.log(this.node.x+this.node.width)
            clean
        }
    },
});
