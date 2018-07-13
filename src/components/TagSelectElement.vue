<template>
    <div id="tagselect">
        <div id="ttl">
            <div id="icon">
                <v-icon name="chevron-down" v-show="vicon"></v-icon>
                <v-icon name="chevron-up" v-show="!vicon"></v-icon>
            </div>
            <div>
                <el-button type="text" @click="handleClick">{{obj.title}}</el-button>
            </div>
        </div>
        <div id="ctt" v-if="!vicon">
            <div>
                <el-button round v-for="(item,index) in obj.data" :key="index" @click="handleChoosed(item)">
                    {{item.value}}
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: ['parentMessage'],
    data() {
        return {
            vicon: true,
            obj: {
                "title": "玩家活跃程度",
                "data": [
                    { "key": 1, "value": "在线时长" },
                    { "key": 2, "value": "登录次数" },
                    { "key": 3, "value": "登录天数" },
                    { "key": 4, "value": "单次时长" },
                ]
            },
            choosedItem: {}
        }
    },
    methods: {
        handleClick: function() {
            this.vicon = !this.vicon //换箭头方向
        },
        handleChoosed: function(item) {
            console.log(item.value + ' has been choosed')
            this.choosedItem = item
        }
    },
    mounted() {
        this.obj = this.parentMessage
    }
}

</script>
<style scoped>
#tagselect {
    border-bottom: 1px solid;
}

#ttl {
    display: flex;
    flex-direction: row;
}

#icon {
    width: 20px;
    min-height: 20px;
}


.el-button {
    padding: 0;
}

</style>
