<template>
    <div id="tsetting">
        <div id="tsbtn">
            <el-button-group>
                <el-button size="mini" @click="handleSection" autofocus>标签分段</el-button>
                <el-button size="mini" @click="handleCombine">标签组合</el-button>
            </el-button-group>
        </div>
        <div id="tscontent">
            <div id="tscleft">
                <div id="tscsearch">
                    <el-input placeholder="请输入内容" prefix-icon="el-icon-search" style="width: 50%">
                    </el-input>
                    <el-select v-model="value" placeholder="请选择" style="width: 30%">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div id="tagselect">
                    <tagSelectElement v-for="(item,index) in tagDatas" :key="index" :parentMessage="item" />
                </div>
            </div>
            <div id="tscright">
                <tagSection v-if="section" />
                <tagCombine v-if="!section" />
            </div>
        </div>
    </div>
</template>
<script>
import tagSelectElement from '@/components/TagSelectElement'
import tagSection from '@/pages/tag/TagSettings_TagSection'
import tagCombine from '@/pages/tag/TagSettings_TagCombine'
export default {
    components: { tagSelectElement, tagSection, tagCombine },
    data() {
        return {
            section: true,
            options: [{
                value: '选项1',
                label: '显示所有'
            }, {
                value: '选项2',
                label: '仅显示条件'
            }, {
                value: '选项3',
                label: '仅显示标签'
            }],
            value: '',
            tagDatas: [{
                "title": "玩家活跃程度",
                "data": [
                    { "key": 1, "value": "在线时长" },
                    { "key": 2, "value": "登录次数" },
                    { "key": 3, "value": "登录天数" },
                    { "key": 4, "value": "单次时长" },
                ]
            }, {
                "title": "个人资源消耗比",
                "data": [
                    { "key": 1, "value": "粮草消耗" },
                    { "key": 2, "value": "木材消耗" },
                    { "key": 3, "value": "生铁消耗" },
                    { "key": 4, "value": "黄金消耗" },
                    { "key": 5, "value": "银两消耗" },
                    { "key": 6, "value": "功勋消耗" },
                ]
            }, ]
        }
    },
    methods: {
        handleSection: function() {
            this.section = true;
        },
        handleCombine() {
            this.section = false;
        }
    }
}

</script>
<style scoped>
#tsetting {
    background: #fff;
    padding: 0;
    text-align: left;
}

#tsbtn {
    border: 1px solid;
}

#tscontent {
    display: flex;
    flex-wrap: nowrap;
}

#tscleft {
    width: 20%;
    display: flex;
    flex-direction: column;
}

#tscsearch {
    display: flex;
    flex-direction: column;
}

#tscright {
    width: 80%;
}

.el-button-group {
    padding: 5px;
}

</style>
