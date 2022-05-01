import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    vegetable: '',
    time: '',
    atama:[
    { name: "豚肉"},
    { name: "オリゴ糖"},
    { name: "秋刀魚"},
    ],
    kouka:[
    { name: "なす"},
    { name: 'アスパラガス'},
    ],
    fd:[
    {
        name: "なす",
        photo: "nasu.svg",
        kouka: "【効果】頭に良い",
        photo1: "denki.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "アボカド",
        photo: "avocado.svg",
        kouka: "【効果】集中力UP",
        photo1: "hirameki.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "バナナ",
        photo: "banana.svg",
        kouka: "【効果】記憶力UP",
        photo1: "atama1.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "豚肉",
        photo: "buta.svg",
        kouka: "【効果】記憶力UP",
        photo1: "atama2.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "枝豆",
        photo: "edamame.svg",
        kouka: "【効果】脳の活性化",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "チーズ",
        photo: "cheese.svg",
        kouka: "【効果】季節別",
        photo1: "sakura.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "きゅうり",
        photo: "cu-ri.svg",
        kouka: "【効果】食材別",
        photo1: "kabu.svg",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "豚肉",
        photo: "niku.png",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "大根",
        photo: "daikon.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "たまご",
        photo: "egg.svg",
        kouka: "食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "エリンギ",
        photo: "eringi.svg",
        kouka: "食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "ごま",
        photo: "goma.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "かぼちゃ",
        photo: "kabotya.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "かいわれ",
        photo: "kaiware.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "カキ",
        photo: "kaki.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "レモン",
        photo: "lemon.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "メロン",
        photo: "melon.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "なし",
        photo: "nasi.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "にんじん",
        photo: "ninjin.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "オクラ",
        photo: "okura.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "玉ねぎ",
        photo: "onion.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "オリゴ糖",
        photo: "origo.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "ピーナッツ",
        photo: "peanut.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "ピーマン",
        photo: "pi-man.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "じゃがいも",
        photo: "potato.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "さんま",
        photo: "sanma.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "さつまいも",
        photo: "satumaimo.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "そらまめ",
        photo: "soramame.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "トマト",
        photo: "tomato.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "わかめ",
        photo: "wakame.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    {
        name: "スイカ",
        photo: "suika.svg",
        kouka: "【効果】食材別",
        seibun: "【成分】あたまにいい"
    },
    ]
},
mutations: {
    changeVegetable(state, { veginame }) {
    state.vegetable = veginame
    },
},
actions: {
    fetchItems({ commit }) {
    return axios.get('')
    .then(response => {
        commit('receiveItems', response.data)
    })
    }
},
})
