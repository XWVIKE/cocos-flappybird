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
                jumpDuration:0,
                down:false,
        Player:{
            default: null,
            type:cc.Node
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.jumpAction = this.startJump();
    	//监听触摸开始事件
    	this.node.on(cc.Node.EventType.TOUCH_START,function(){
            this.Player.runAction(this.jumpAction);
        },this);
    },

    start () {

    },

    startJump(){
        this.down = false;
        const jumpUp = cc.moveBy(this.jumpDuration,cc.v2(0,this.jumpHeight)).easing(cc.easeQuinticActionOut());
        const sngle = cc.rotateTo(0,30);
        return cc.sequence(sngle,jumpUp,cc.callFunc(function(e){
            this.down = true;
        },this))
    },
    endJump(){
        let droprotate = cc.rotateTo(0.6,-90);
        let dropAction = cc.moveBy(this.jumpDuration, cc.v2(0, -15)).easing(cc.easeQuinticActionInOut());
        this.Player.runAction(cc.spawn(dropAction,droprotate))
    },
    update (dt) {
        if(this.down){
            this.endJump()
        }
    },
});
