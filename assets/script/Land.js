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
        land_bg:[cc.Node],
        speed:1
    },

    onLoad () {
        this.fixBg(this.land_bg[0],this.land_bg[1])
    },

    start () {

    },
    fixBg(ld1,ld2){
        const ld1Box = ld1.getBoundingBox();
        ld2.setPosition(ld1Box.xMax,ld1Box.yMin)
    },
    landMove(list,speed){
        for(let i = 0;i<list.length;i++){
            let element = list[i];
            element.x -= speed;
        }
    },
    update (dt) {
        this.landMove(this.land_bg,this.speed);
        this.checkBgReset(this.land_bg)
    },
    checkBgReset(list){
        const winSize = cc.winSize;
        const firstXmax = list[0].getBoundingBox().xMax;
        if(firstXmax<=0){
            const preLd = list.shift();
            list.push(preLd);
            const curLd = list[0];
            preLd.x = curLd.getBoundingBox().xMax;
        }
    }
});
