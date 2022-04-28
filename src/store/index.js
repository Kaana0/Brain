import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
state: {
    vegetable: '',
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
        kouka: "頭に良い",
        seibun: "あたまにいい"
    },
    {
        name: "アボカド",
        photo: "avocado.svg",
        kouka: "集中力UP",
        seibun: "あたまにいい"
    },
    {
        name: "バナナ",
        photo: "banana.svg",
        kouka: "記憶力UP",
        seibun: "あたまにいい"
    },
    {
        name: "豚肉",
        photo: "buta.svg",
        kouka: "記憶力UP",
        seibun: "あたまにいい"
    },
    {
        name: "枝豆",
        photo: "edamame.svg",
        kouka: "脳の活性化",
        seibun: "あたまにいい"
    },
    {
        name: "チーズ",
        photo: "cheese.svg",
        kouka: "季節別",
        seibun: "あたまにいい"
    },
    {
        name: "きゅうり",
        photo: "cu-ri.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "豚肉",
        photo: "niku.png",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "大根",
        photo: "daikon.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "たまご",
        photo: "egg.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "エリンギ",
        photo: "eringi.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "ごま",
        photo: "goma.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "かぼちゃ",
        photo: "kabotya.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "かいわれ",
        photo: "kaiware.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "カキ",
        photo: "kaki.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "レモン",
        photo: "lemon.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "メロン",
        photo: "melon.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "なし",
        photo: "nasi.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "にんじん",
        photo: "ninjin.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "オクラ",
        photo: "okura.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "玉ねぎ",
        photo: "onion.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "オリゴ糖",
        photo: "origo.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "ピーナッツ",
        photo: "peanut.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "ピーマン",
        photo: "pi-man.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "じゃがいも",
        photo: "potato.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "さんま",
        photo: "sanma.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "さつまいも",
        photo: "satumaimo.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "そらまめ",
        photo: "soramame.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "トマト",
        photo: "tomato.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "わかめ",
        photo: "wakame.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
    },
    {
        name: "スイカ",
        photo: "suika.svg",
        kouka: "食材別",
        seibun: "あたまにいい"
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
