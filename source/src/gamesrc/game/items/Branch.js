/**
 * Created by Leo on 2015/10/27.
 */

var Branch = lcocos.model.BaseAnimation.extend({
    ctor : function(){
        this._super()

        this.res_plist = res.gs_stump
        this.frames = 3
        this.prefix = 'stump'
        this.start_index = 1//��Դ�Ŀ�ʼ����

        this.render()
        return true
    },

    reset : function(){
       this._super()
    }
})