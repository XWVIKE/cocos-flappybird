// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        //小鸟跳跃高度
        jumpHeight:0,
        //小鸟跳跃时间，
        jumpDuration:0
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.jumpAction = this.startJump();
        this.node.runAction(this.jumpAction)
    },
    startJump(){
        const jumpUp = cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeQuinticActionOut());
        const jumpDown = cc.moveBy(this.jumpDuration,cc.v2(0,-this.jumpHeight)).easing(cc.easeQuinticActionIn());
        return cc.repeatForever(cc.sequence(jumpUp,jumpDown))
    },
    start () {

    },

    // update (dt) {},
});
