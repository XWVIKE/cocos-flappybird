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
        prefab: cc.Prefab,
        bg:cc.Node,
        start:false,
    },

    onLoad () {
        window._pool = {};
        this.bg.on(cc.Node.EventType.TOUCH_START,function(){
            this.start = true;
            this.schedule(this.createGuan, 2);
        },this)
        
        this._pool = new cc.NodePool('Guan2');
        window._pool = _pool
        this._count = 0;
    },
    createGuan(){
        let guan = this._pool.get();
        if(!guan){
            guan = cc.instantiate(this.prefab);
            this._count++;
            guan.addComponent('Guan2');
        }
        this.node.addChild(guan)
    },
    start () {

    },

    update (dt) {
    },
});
