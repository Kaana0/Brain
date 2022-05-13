import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
state: {
    dailyFoodList: [],
    TodayFood: [
        {name: "野菜", isShow: false },
        {name: "果物", isShow: false },
        {name: "きのこ", isShow: false },
        {name: "海藻", isShow: false },
        {name: "豆", isShow: false },
        {name: "芋", isShow: false },
        {name: "魚", isShow: false },
        {name: "肉", isShow: false },
        {name: "乳製品", isShow: false },
        {name: "種", isShow: false },
        // {name: "洗剤", isShow: false },
    ],
    vegetable: '',
    time: '',
    Today: '',
    clickDay: '',
    fd:[
    
        {
        name: "なす",
        photo: "nasu.svg",
        kouka: "ガンや生活習慣病のもとになる活性酸素を抑える力が強く、コレステロールの吸収を抑える作用がある。認知症予防物質が他の野菜の約3000倍。",
        photo1: "denki.svg",
        seibun: "ビタミンKやカリウム、葉酸を含んでいます。"
    },
    {
        name: "アボカド",
        photo: "avocado.svg",
        kouka: "不飽和脂肪酸という良い脂肪分が身体への吸収を助けてくれます。不飽和脂肪酸は血圧を下げて、脳をサポートし、また認知機能とも関係しています",
        photo1: "hirameki.svg",
        seibun: "約20の必要不可欠なビタミン、ミネラル、カリウム、葉酸、ビタミン B 群だけでなく、ビタミンEやKなど栄養素が豊富に含まれています。"
    },
    {
        name: "バナナ",
        photo: "banana.svg",
        kouka: "セロトニンは神経を落ち着かせたり、ボジティブ思考に変えたりするだけでなく、脳の働きを活性化して集中力を高めます。ブドウ糖や、脳のエネルギーになるのをサポートするビタミンやミネラルも一緒に含んでいるので、バナナを1本食べるだけで効率良く脳の栄養補給ができます。",
        photo1: "atama1.svg",
        seibun: "トリプトファン”というアミノ酸を豊富に含んだ果物。トリプトファンは『幸せホルモン』と呼ばれる脳内物質、“セロトニン”の材料となる物質言われています。"
    },
    {
        name: "豚肉",
        photo: "buta.svg",
        kouka: "リラックスや幸福感、免疫機能を調整したり、学習力や記憶力を向上する効果があります。皮膚や粘膜を保護して、肌荒れや肌の乾燥を防ぐ効果「美容ビタミン」ともいわれる。",
        photo1: "atama2.svg",
        seibun: "ビタミンB2が豊富。アラキドン酸からできるアナンダマイドが脳に作用するとリラックス効果をもたらす。必須アミノ酸の一種トリプトファンも精神安定作用のあるセロトニンを作り出すことから、うつ予防に効果が期待できます。"
    },
    {
        name: "枝豆",
        photo: "edamame.svg",
        kouka: "細胞の老化を遅らせたり、脳を活性化する、神経細胞を活性化するなどの働きがあると言われています。",
        seibun: "脳の働きを活性化するのがレシチンの役割。枝豆にはこのレシチンが豊富なのです。"
    },
    {
        name: "チーズ",
        photo: "cheese.svg",
        kouka: "チーズが脳内環境を改善し、認知機能低下が生じる状態を改善することを解明。",
        photo1: "sakura.svg",
        seibun: "βラクトリンには、脳に届いて神経伝達物質のドーパミンを増やし、加齢に伴って低下する認知機能の維持をサポートする働きがありました。"
    },
    {
        name: "きゅうり",
        photo: "cu-ri.svg",
        kouka: "脳の健康を向上させる。酸化ストレスを低減し、糖尿病に関連した合併症を防ぐのに効果がある。",
        photo1: "kabu.svg",
        seibun: "フィセチンと呼ばれるフラボノイドが豊富で、神経細胞を保護し、記憶力を向上させ、アルツハイマーのリスクを低減する効果があることが研究でわかっている。"
    },
    {
        name: "大根",
        photo: "daikon.svg",
        kouka: "脳に溜まった毒を出し、脳の機能を上げる。",
        seibun: "イソチオシアネートには、抗酸化作用があるといわれています。老化の原因となる活性酸素を除去することによって老化予防が期待できるほか、代謝の促進、免疫力向上、脳機能の強化などさまざまな働きがあります。"
    },
    {
        name: "卵",
        photo: "egg.svg",
        kouka: "脳機能の改善や脂質代謝、血管の健康にも重要な役割を果たすコリン。",
        seibun: "脳の神経伝達物質の材料になるアミノ酸やレシチン、それらの働きをサポートするビタミンＢ群がたっぷり含まれています。 さらに、ブドウ糖やＤＨＡ、各種ビタミン・ミネラルなどを多く含む食品と組み合わせてとることで、脳力リフレッシュ効果が期待できます。"
    },
    {
        name: "エリンギ",
        photo: "eringi.svg",
        kouka: "脳の働きが良くなる・集中しやすくなるなどの良い効果が生まれた。自律神経が整うことや「うつ」への効果が期待されるなど、「腸は第二の脳」とも呼ばれるほど精神・脳と密接な関係がありますので、腸を整え、心身ともに健康な毎日を送れる。",
        seibun: "脳と深い関わりのある食物繊維や、脳の働きに不可欠なビタミンB群やアミノ酸のGABAが多く含まれている"
    },
    {
        name: "ごま",
        photo: "goma.svg",
        kouka: "脳細胞を活性化させ、細胞の減少を抑制する働きがあるため、認知症予防にも効果的であることが分かってきました。",
        seibun: "ビタミンE、不飽和脂肪酸が脳内神経細胞の成長に効果があります。"
    },
    {
        name: "かぼちゃ",
        photo: "kabotya.svg",
        kouka: "血液をサラサラにし、さらに記憶力の維持に働くと言われているものです。",
        seibun: "ビタミンを多く含んでおり、神経系の働きに必要なビタミンA・C・Eが豊富です。また、脳血管の詰まりを予防する「食物繊維」や神経機能を改善させる「ミネラル」も同時に摂取することができます。"
    },
    {
        name: "かいわれ",
        photo: "kaiware.svg",
        kouka: "細胞レベルほどの修復機能を持っており活性酸素によって脳にダメージが与えられるのを防いでくれる。メラトニンを積極的に取り入れることで睡眠不足の改善が期待出来ます。",
        seibun: "大根が本来持っている栄養素のほかビタミンKやビタミンE、βカロテンといった栄養が特に多く含まれています。"
    },
    {
        name: "カキ",
        photo: "kaki.svg",
        kouka: "肝機能を高め、疲労回復や脳機能の活性化にも役立ちます。",
        seibun: "亜鉛は、新しい細胞を作る。脳細胞も内臓の細胞も、皮膚の細胞も新しく作られる際には亜鉛が必要です。さらに、亜鉛にはすでに蓄積した鉛や水銀の毒性を弱める働きもあります。鉄、タウリン、グリコーゲン。"
    },
    {
        name: "レモン",
        photo: "lemon.svg",
        kouka: "レモンなどの柑橘系の香りは交感神経を刺激し、思考能力や運動能力、記憶力、集中力を高める働きがあるので、認知症の予防・改善に効果が期待されています。",
        seibun: "ビタミンCの代名詞的な存在の果物です。 クエン酸も豊富に含まれており、ビタミンCの効果と合わせて美肌効果や疲労回復、風邪予防などに効果を発揮します。"
    },
    {
        name: "メロン",
        photo: "melon.svg",
        kouka: " 神経の興奮や血圧を抑える作用を持ち、ストレスを和らげる力があります。",
        seibun: "GABAはアミノ酸のひとつですが、いわゆるたんぱく質の元になるアミノ酸とは異なり、脳に働きかける力が大きい栄養素です。"
    },
    {
        name: "梨",
        photo: "nasi.svg",
        kouka: "血中コレステロールを吸着し、体内に吸収しにくくしてくれる。潤沢な水分が血液をサラサラにしてくれ高血圧予防疲労回復効果や肝臓保護の効果も期待できます。",
        seibun: "ソルビトールという甘み成分の一種が他の果実に比べて断トツに多く、これが保水性を高めお通じを良くしてくれます。 さらに、アスパラギン酸をはじめ遊離アミノ酸も多い"
    },
    {
        name: "にんじん",
        photo: "ninjin.svg",
        kouka: "動脈硬化の予防や免疫力の向上、目や肌の健康維持、美肌効果などの働きがあります。",
        seibun: "豊富なβ-カロテンとカリウム、ルテイン、食物繊維が含まれている。ペクチンと呼ばれる食物繊維が豊富。"
    },
    {
        name: "オクラ",
        photo: "okura.svg",
        kouka: "タンパク質の吸収を助ける働きがある。脳への刺激を活性化。毒素を体外に排泄する働きのある食物繊維。整腸作用があり、便秘・下痢といった、おなかのトラブルに有効です。",
        seibun: " カロチンやビタミン群はもちろん豊富で、カルシウムや鉄、カリウムなどのミネラルも含んでいます。"
    },
    {
        name: "玉ねぎ",
        photo: "onion.svg",
        kouka: "認知機能の維持に役立つ。高脂血症・血栓・高血圧・動脈硬化の予防・改善",
        seibun: "ケルセチンを多く含む。オリゴ糖が多い。"
    },
    {
        name: "オリゴ糖",
        photo: "origo.svg",
        kouka: "記憶力、脳の活性化や疲労回復、仕事の効率が上がるといった効果があります。",
        seibun: "ぶどうから発見されたのでブドウ糖と呼ばれますが、正式にはグルコースと言います。これは、果物に多く含まれている糖類です。"
    },
    {
        name: "ナッツ",
        photo: "nut.svg",
        kouka: "抗酸化作用があるため、脳の酸化を防ぎ、脳の働きを維持するサポートをしてくれることも知られています。",
        seibun: "ナッツ類には、ビタミンEが豊富に含まれています。血行をよくしたり細胞の損傷や老化を防いだりする。"
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
        kouka: "高血圧を予防、体外に塩分を出す働きをし、高血圧を防いで疲労回復胃の健康を保つ。腸内環境を整える効果、老廃物が体内に長くとどまることを防ぎ腸内環境を整えます。",
        seibun: "ガラクタンやムチンは脳細胞を活性化させ、また血中コレステロールを下げ体全体の調子を整えます。"
    },
    {
        name: "秋刀魚",
        photo: "sanma.svg",
        kouka: "脳の活性化に骨の強化、美容から生活習慣病予防まで幅広い栄養効果を持つ。神経細胞を活性化して情報の伝達をスムーズにし、学習能力や記憶力を高めてくれます。",
        seibun: "DHAやEPAには脳に存在する神経細胞を再生したり保護したりする働きがあることが特徴です。 また、情報の伝達をスムーズにする働きもあります。"
    },
    {
        name: "さつまいも",
        photo: "satumaimo.svg",
        kouka: "ビタミンB1は脳にとってのエネルギー源であるブドウ糖の代謝（エネルギーに変わること）に欠かせないビタミンなので、疲労回復にはもちろん、イライラや食欲低下を防いでくれます。",
        seibun: "ビタミンCが豊富で、加熱しても壊れにくいだけでなく、ビタミンB1もたくさん含んでいます。カリウムが豊富。"
    },
    {
        name: "そらまめ",
        photo: "soramame.svg",
        kouka: "疲労回復を助ける。脳と神経を正常に保つ働きをしています。体内の余分な塩分を排出することからむくみの解消にも効果があります。",
        seibun: "たんぱく質やビタミンB1、ビタミンB2、ビタミンC、カリウム、亜鉛、鉄、銅などが含まれています。"
    },
    {
        name: "トマト",
        photo: "tomato.svg",
        kouka: "定期期に摂取することで記憶力の低下や認知症を防いだり、老化を抑制したりする働きが期待されている",
        seibun: "リコピンと呼ばれる抗酸化物質が多く含まれています。リコピンは脳の老化を防ぐとも言われている。"
    },
    {
        name: "わかめ",
        photo: "wakame.svg",
        kouka: "ミネラルや食物繊維が抱負で腸の健康を促し、血圧を下げて脳の血管の負担を減らします。",
        seibun: "ヨウ素には細胞を活発化させ、抵抗力を養うなど新陳代謝の向上を促す効果があります。 加えて子供の成長、大人の脳の働きを維持する働き、髪や爪の健康を守る効果もあります。"
    },
    {
        name: "スイカ",
        photo: "suika.svg",
        kouka: "血糖値を下げる。中性脂肪を減らす。認知症を防ぐ。",
        seibun: "リコピン、βカロテン、シトルリン、カリウム。糖尿病、結腸癌と関節炎等に繋がる炎症を鎮める効果をもっています。"
    },
    ],
    nowDate: '',
    nowDate2: '',
},
getters: {
    time: state => state.time
    // nowDateで絞り込んだTodayFoodを返す
},
mutations: {
    // changeVegetable(state, { vegename }) {
    // state.vegetable = vegename
    // },
    getStanp(state, {itemname}) {
        const lists = state.dailyFoodList.find((item) => {
            return item.date === state.clickDay
        })
        let result = lists.foodList.find((item) => {
            return item.name === itemname
        })
        result.isShow = !result.isShow
    },
    reNowDate(state, {nowDate}) {
        state.nowDate = nowDate
    },

    addClickDay(state, {day}) {
        state.clickDay = day
    },
    addNewList(state) {
        state.dailyFoodList.push(
            {
                date: state.clickDay,
                foodList: [
                    {name: "野菜", isShow: false },
                    {name: "果物", isShow: false },
                    {name: "きのこ", isShow: false },
                    {name: "海藻", isShow: false },
                    {name: "豆", isShow: false },
                    {name: "芋", isShow: false },
                    {name: "魚", isShow: false },
                    {name: "肉", isShow: false },
                    {name: "乳製品", isShow: false },
                    {name: "種", isShow: false },
                ]
            }
        )
    },
    reNowDate2(state, {nowDate2}) {
        state.nowDate2 = nowDate2
    },

    addClickFood(state, {food}) {
        state.vegetable = food
    },
    addNewList2(state) {
        state.dailyFoodList.push(
            {
                date: state.vegetable,
                foodList: [
                    {name: "野菜", isShow: false },
                    {name: "果物", isShow: false },
                    {name: "きのこ", isShow: false },
                    {name: "海藻", isShow: false },
                    {name: "豆", isShow: false },
                    {name: "芋", isShow: false },
                    {name: "魚", isShow: false },
                    {name: "肉", isShow: false },
                    {name: "乳製品", isShow: false },
                    {name: "種", isShow: false },
                ]
            }
        )
    },
    setData(state, result) {
        state.dailyFoodList = result
    },
    setData2(state, resultArray) {
        state.dailyFoodList = resultArray
    },
    save(state) {
        localStorage.setItem('obj',JSON.stringify(state.dailyFoodList))
    },
    save2(state) {
        localStorage.setItem('obj2',JSON.stringify(state.fd))
    },
    updateTime(state) {
        //本日現在の日付オブジェクトを作る
        let today = new Date();
        let week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        //現在の時間を取得
        // let hour = today.getHours();
        let hour = ("0"+today.getHours()).slice(-2);
        //現在の分を取得
        // let min = today.getMinutes();
        let min = ("0"+today.getMinutes()).slice(-2);
        //現在の秒を取得
        // let sec = today.getSeconds();
        let sec = ("0"+today.getSeconds()).slice(-2)
        //曜日の取得
        let day = today.getDay();
        state.time = `${hour}:${min}:${sec}(${week[day]})`;
    }
},

actions: {
    fetchItems({ commit }) {
    return axios.get('')
    .then(response => {
        commit('receiveItems', response.data)
    })
    },
    saveData({commit}) {
        commit('save')
    },
    saveData2({commit}) {
        commit('save2')
    },
    loadData({ commit }) {
        const result = JSON.parse(localStorage.getItem('obj'))
        if(result) {
            commit('setData', result)
        } else {
            let date = new Date()
            let y = date.getFullYear()
            let m = ('0' + (date.getMonth() + 1)).slice(-2)
            let d = ('0' + date.getDate()).slice(-2)
            const today = y + '-' + m + '-' + d
            commit('addClickDay', { day: today})
            // commit('addNewList')
        }
    },
    loadData2({ commit }) {
        const resultArray = JSON.parse(localStorage.getItem('obj2'))
        if(resultArray) {
            commit('setData2', resultArray)
        } else {
            let date = new Date()
            let y = date.getFullYear()
            let m = ('0' + (date.getMonth() + 1)).slice(-2)
            let d = ('0' + date.getDate()).slice(-2)
            const today = y + '-' + m + '-' + d
            commit('addClickFood', { food: today})
        }
    },
    updateTime({commit}) {
        setInterval(() => {
        commit('updateTime');
        }, 1000)
    }
},
})
