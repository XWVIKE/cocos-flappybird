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
        jumpHeight: 0,
        //小鸟跳跃时间，
        jumpDuration: 0,
        down: false,
        step: 1,
        rotate: 0,
        die: false,
        bg: {
            default: null,
            type: cc.Node
        },
        target: {
            default: null,
            type: cc.Prefab,
          },
    },

    // LIFE-CYCLE CALLBACKS:
    click(){
        var scene = cc.director.getScene();
        var node = cc.instantiate(this.target);
        node.parent = scene;
        let width = cc.winSize.width;
        let height = cc.winSize.height;
        node.setPosition(width/2, height/2);
    },
    onLoad() {
        this.bg.on(cc.Node.EventType.TOUCH_START, function () {
            this.startJump()
        }, this);
        // console.log(this.node)
    },
    onCollisionEnter(other, self) {
        cc.director.pause();
        this.click()
        this.die = true;
        this.down = false;
        this.step = 0;
        this.bg.off(cc.Node.EventType.TOUCH_START)
    },
    start() {
    },
    startJump() {
        this.down = false;
        this.step = 1;
        const jumpUp = cc.moveBy(this.jumpDuration, cc.v2(0, this.jumpHeight)).easing(cc.easeQuinticActionOut());
        const sngle = cc.rotateTo(0, 30);
        this.node.runAction(cc.spawn(sngle, jumpUp, cc.callFunc(function (e) {
            this.down = true;
        }, this)))
    },
    endJump() {
        this.node.angle -= 2;
        this.node.y -= this.step;
    },
    update(dt) {
        let y = this.node.y;

        let rotation = this.node.angle;
        if (this.die) {
            this.node.y = y;
            this.node.angle = rotation;
            return
        } else {
            if (this.node.angle <= -90) {
                this.node.angle = -90;
            }
            this.step += 1;
            if (this.down) {
                this.endJump()
            }
        }
    },
});
